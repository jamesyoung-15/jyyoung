---
title: "My NixOS Journey So Far"
description: "My journey of using NixOS over the past 2+ years."
publishDate: "November 08, 2026"
tags: ["linux", "retrospective"]
---

I started using Linux around 2021 and after distrohopping for a few years, I finally settled on NixOS in mid-2024 and haven't looked back since. You can see [my full distrohopping journey](/blog/my-distrohopping-journey) blog post for more details.

Even though I'm still a beginner at Nix and NixOS, I quite like my setup for my use case and wanted to do a quick write-up on my journey over the past 2.5 years.

## Why I Chose NixOS

Prior to NixOS, I was already looking at making my systems' configurations more reproducible. I was particularly interested in keeping my laptop and PC settings as close as possible. I considered using a bunch of bash scripts or learning Ansible to achieve this but ended up deciding against it.

At the same time, I was also starting to look into tracking my local configuration files with git. It was mainly just a few dot files like my `Neofetch` and `Konsole` configs that I wanted to share between devices.

Around early to mid-2024, I saw a couple posts on Reddit about NixOS and was really intrigued by the declarative configuration and reproducibility aspect which I hadn't seen in other distros. It matched closely to what I was already looking to achieve so I decided to experiment with NixOS on a spare SSD.

## Trying NixOS

My first few weeks with NixOS went really well and I loved the following features:

- Reproducibility: It felt so nice to edit `configuration.nix`, run `sudo nixos-rebuild switch`, see the immediate changes where the system reflects my file contents.
- Nix Packages: Large comprehensive ecosystem just like the AUR
- Rollback: I've borked systems before so this is very nice to have
- No Dependency Hell: I've hit this with Arch before with partial upgrades

So after about a month, I decided to move my laptop and PC to NixOS.

## My First Setup

My setup for over a year was managing a single `configuration.nix` file per machine in a git repo. The machine would clone this repo and symlink the relevant configuration to `/etc/nixos/configuration.nix`. The repo layout would look something like:

```text
nixos-configs/
├── desktop/configuration.nix
├── laptop/configuration.nix
└── copy_packages.py
```

where the `configuration.nix` content would have something like:

```nix
# desktop/configuration.nix
{ config, pkgs, ... }:
{
  imports = [ ./hardware-configuration.nix ];

  # desktop-only settings
  networking.hostName = "JDesktop";
  hardware.openrazer.enable = true;

  # shared
  services.desktopManager.plasma6.enable = true;
  services.flatpak.enable = true;

  # START list of packages
  environment.systemPackages = with pkgs; [
    git
    firefox-bin
    vscode
    # ...more lines
  ];
  # END list of packages
  # ...more lines
}
```

I needed separate configuration files per device as there were differences in certain settings. For example, settings such as hostname or disk automounts would be different per machine.

Most of the shared configs between devices are static and set once, such as enabling Flatpak or setting the fonts, which was easy to just copy and paste by hand (eg. copy `services.flatpak.enable = true;` to laptop config file).

The main config that was shared with constant edits and changes was the system packages. For example, if I added `vlc` to my desktop, I'd also want it on my laptop, so I would need to add it to `laptop/configuration.nix`.

To keep my laptop and desktop configuration packages in sync, I created a Python script that would parse text between the blocks `# START list of packages` and  `# END list of packages` and output the contents to a `packages.txt` file.

I would then copy the content and paste it in between the two blocks to ensure both package list contents match. The script looks something like this:

```python
# copy_packages.py
def copy_lines_between(start_text, end_text, input_file, output_file):
    with open(input_file) as infile, open(output_file, "w") as outfile:
        copying = False
        for line in infile:
            if start_text in line:
                copying = True
            if copying:
                outfile.write(line)
            if end_text in line:
                break

copy_lines_between(
    "# START list of packages", "# END list of packages",
    "configuration.nix", "packages.txt",
)
```

It worked initially as my needs were pretty simple to start. However as I started to expand my scope, my configs grew a lot more and the cracks started to show.

### Pain Points

As I started to work on more dev/coding projects, I started noticing lots of pain points I didn't have with previous distros:
<!-- I have a separate [blog post](/blog/nixos-beginner-confusions) that goes over these in more detail but to sum up, the issues were: -->

- **Beginner-unfriendly docs:** Docs were underwhelming compared to ArchWiki, felt fragmented (eg. community vs official wiki), and didn't explain certain quirks well (eg. do I use `programs.steam.enable` or add it to system packages list)
- **Non-FHS:** Many AppImages, pre-built binaries, and scripts wouldn't run out-of-the-box, felt very confusing coming from FHS-compliant distros
- **Python:** Related to Non-FHS, I was used to just running `pip install -r requirements.txt` to set up a project so this was a huge learning curve and felt tedious spending time battling Nix instead of working on the actual project
- **Newer packages without unstable:** Certain packages on stable channel would fall pretty far behind. One example I faced was Joplin, where I had to use Flatpak instead to get a newer version to support my S3 sync.
- **Keeping configs in sync:** My old setup assumed both machines wanted the same packages. Once that stopped being true (e.g. didn't need games like `runelite` on laptop), I had to either keep host-specific packages outside the block or fix the pasted list by hand each time. On top of that, shared settings like fonts and services were still copied manually.

From my issues I faced, it became pretty clear I needed a new config setup that would:

1. Provide modularity to my configurations, where certain configurations are shared and certain only apply per host
2. Allow certain packages to use unstable channel and pin rest to stable

This is what led me to look into [Nix flakes](https://wiki.nixos.org/wiki/Flakes).

## Moving to Flakes

In late 2025, I decided to finally try out flakes. Admittedly, both of my new workflow needs can be solved without flakes using `imports` and a second channel. However, one of the main benefits that made me choose flakes is having a `flake.lock` to pin dependencies.

Previously, my old setup didn't guarantee my packages would stay perfectly in sync. For example, if I ran `nix-channel --update` on my laptop on a much later time than my desktop, I could end up having different versions of `nixpkgs`.

With `flake.lock`, my exact `nixpkgs` version would be pinned on both machines, which also ensured proper reproducibility.

It also helped that most configs I found online were already using flakes, so there were plenty of examples to learn from (eg. [dustinlyons/nixos-config](https://github.com/dustinlyons/nixos-config)).

### How I Migrated

I started experimenting with flakes by creating a new repo and spinning up two NixOS VMs with [virt-manager](https://virt-manager.org/). My new repo structure looked something like:

```text
nix-configs/
├── hosts/
│   ├── vm-test-1/
│   │   ├── default.nix
│   │   └── hardware-configuration.nix
│   └── vm-test-2/
│       ├── default.nix
│       └── hardware-configuration.nix
├── modules/
│   └── common.nix
├── flake.nix
└── flake.lock
```

Where my `flake.nix` had something like:

```nix
{
  description = "NixOS configuration by James Young";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";

  outputs = { nixpkgs, ... }: {
    nixosConfigurations = {
      vm-test-1 = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux";
        modules = [ ./hosts/vm-test-1 ./modules/common.nix ];
      };
      vm-test-2 = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux";
        modules = [ ./hosts/vm-test-2 ./modules/common.nix ];
      };
    };
  };
}
```

For testing, I would pull my repo to the VMs, run `sudo nixos-rebuild switch --flake .#vm-test-1`, and check if `modules/common.nix` applied to both.

Once I was comfortable, I migrated by doing the following:

1. Moved each machine's old `configuration.nix` and copied the `/etc/nixos/hardware-configuration.nix` into `hosts/<machine>`
2. Pulled shared settings into `modules/`
3. Add my desktop and laptop to `nixosConfigurations`
4. Rebuild each machine with `--flake .#<host>` and remove old symlink to `/etc/nixos`

This went smoothly and the overall process took a lot faster than I anticipated.

### Adding nixpkgs-unstable to Flake

After a few weeks, I felt comfortable with my setup so I decided to look into adding the ability to have certain packages pull from `nixpkgs-unstable`.

I did this by adding `nixpkgs-unstable` as a second input and used an overlay to expose it as `pkgs.unstable`. See my trimmed `flake.nix` example below:

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    nixpkgs-unstable.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { nixpkgs, nixpkgs-unstable, ... }:
    let
      overlay-unstable = final: prev: {
        unstable = import nixpkgs-unstable {
          inherit (prev.stdenv.hostPlatform) system;
          inherit (prev) config; # keep allowUnfree etc.
        };
      };
    in {
      nixosConfigurations.main-desktop = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux";
        modules = [
          ./hosts/main-desktop
          { nixpkgs.overlays = [ overlay-unstable ]; }
        ];
      };
    };
}
```

My packages will stay on stable by default but this overlay allows me to opt in to unstable for certain packages by prefixing them with `unstable.`. So if I wanted a newer version of Joplin, it would be a quick edit inside modules with something like:

```nix
environment.systemPackages = with pkgs; [
  firefox            # stable
  unstable.joplin-desktop  # unstable
];
```

So far, I haven't encountered a case where I needed to pin a package to a specific version that isn't in the stable and unstable channel, so this works great for me.

## Current Setup

With flakes set up and with packages able to opt-in to use unstable, I felt pretty happy with my setup. Beyond that, I've also added `home-manager` and moved a lot of my old `nix-shell` configurations into flakes.

You can see what I run today in my [nix-config repo](https://github.com/jamesyoung-15/nix-config).

## What's Next

So with my daily drivers being in a good spot, there are a couple of things I am looking to do in the future:

1. Bring some of my Nix configs to my work MacBook, although this may run into [Zscaler issues](https://discourse.nixos.org/t/nixos-in-corporate/50041).
2. Explore using NixOS for homelab. Today I exclusively run Debian for servers, may look into trying NixOS
3. Expand the use of `home-manager` for configuration management.
4. Properly learn Nix and its ecosystem.
