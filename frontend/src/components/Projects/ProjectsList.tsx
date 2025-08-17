import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { projectImages } from "../../assets/projects";

const ProjectsList = [
  {
    categories: ["Machine Learning", "Highlighted"],
    title: "Bluebikes Availability Predictor",
    description: `An application that forecasts the number of Bluebikes that will be available at 3 stations near my apartment in Boston using machine learning. 
        Model trained with Bluebikes historical trip histories and weather data.
        Frontend built with React, backend with Flask, and deployed with Docker on EC2.
        `,
    tags: ["Python", "Pandas", "Flask", "AWS"],
    image: projectImages.bluebikespredictor,
    defaultOpen: true,
    links: [
      {
        icon: faGithub,
        url: "https://github.com/jamesyoung-15/Bluebikes-Availability-Predictor",
        text: "Code",
      },
      {
        icon: faExternalLinkAlt,
        url: "https://bluebikespredictor.jyylab.com",
        text: "Demo",
      },
    ],
  },
  {
    categories: ["Linux", "Highlighted"],
    title: "Homelab",
    description: `A homelab setup with Proxmox with various VMs, LXCs, and Docker containers for self-hosting services such as NAS, media server, etc. 
                      Uses Opnsense for setting up networking such as firewall, router, VLans, etc. Hand-built servers with consumer PC hardware.`,
    tags: ["DevOps", "Linux"],
    image: projectImages.homeLab1,
    defaultOpen: true,
    links: [
      {
        icon: faGithub,
        url: "https://github.com/jamesyoung-15/homelab",
        text: "Code",
      },
      { icon: faExternalLinkAlt, url: "https://jyyhomelab.com/", text: "Demo" },
    ],
  },
  {
    categories: ["Highlighted"],
    title: "Serverless Face Blurring",
    description: `An event-driven serverless application for automatically detecting and blurring faces in images with AWS services. 
                    Frontend is built with React, middleware uses Lambda with Rekognition, backend uses DynamoDB and S3 with SQS for queuing jobs. 
                    Integrated CI/CD with Github Actions and deployed with Terraform.`,
    tags: ["AWS", "Terraform", "Python", "React"],
    image: projectImages.faceBlur,
    defaultOpen: false,
    links: [
      {
        icon: faExternalLinkAlt,
        url: "https://faceblur.jyylab.com",
        text: "Demo",
      },
      {
        icon: faGithub,
        url: "https://github.com/jamesyoung-15/aws-serverless-face-blurring",
        text: "Code",
      },
    ],
  },
  {
    categories: ["Embedded", "Highlighted"],
    title: "STM32 Mini-Robot Cleaner",
    description:
      "An autonomous mini-robot cleaner built with STM32 microcontroller, C, and Python. Features remote control using UDP with Python GUI and autonomous mode with obstacle avoidance using bubble rebound algorithm. Done as school project.",
    tags: ["C", "STM32", "Python"],
    image: projectImages.robotCleaner,
    defaultOpen: false,
    links: [
      {
        icon: faYoutube,
        url: "https://youtu.be/z4BqyFa29B0",
        text: "Demo Video",
      },
      {
        icon: faGithub,
        url: "https://github.com/jamesyoung-15/Mini-Robot-Cleaner",
        text: "Code",
      },
    ],
  },
  {
    categories: ["Web"],
    title: "Portfolio Website",
    description:
      "A personal portfolio website written with React Typescript, TailwindCSS, ThreeJS. Deployed with Terraform and hosted AWS. Models are created and animated with Blender.",
    tags: ["React", "TailwindCSS", "Terraform"],
    image: projectImages.portfolioDemo,
    links: [
      { icon: faExternalLinkAlt, url: "https://jyyoung.com", text: "Demo" },
      {
        icon: faGithub,
        url: "https://github.com/jamesyoung-15/PortfolioWebsite",
        text: "Code",
      },
    ],
  },
];

export default ProjectsList;
