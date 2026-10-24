/* tag list for blog posts */
export const TAGS = {
  // Topic: what the post is about
  llms: "Topics broadly related to LLMs, such as models or the industry in general",
  "agentic-dev":
    "Topics related to AI/LLM agents, such as harnesses, tooling, instructions",
  homelab:
    "Topics related to my homelab, such as self-hosting software, IaC, networking, server hardware",
  linux: "NixOS, distros, desktop, daily-driver stuff",
  gaming: "Steam, modding, getting games running",
  embedded: "Microcontrollers, hardware projects",
  work: "Work tech stack, snippets, workflows",

  // Kind: what the post is
  project: "Something I worked on",
  guide: "Reproducible how-to",
  writeup: "Investigation, benchmark, findings",
  opinion: "Stance, reflection, or just random thoughts",
  list: "Curated collection",

  // dump anything not above here
  misc: "Uncategorised",
} as const;

export type Tag = keyof typeof TAGS;

/** Non-empty tuple form, which is what `z.enum()` needs. */
export const TAG_NAMES = Object.keys(TAGS) as [Tag, ...Tag[]];
