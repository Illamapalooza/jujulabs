export type Service = {
  title: string;
  description: string;
  capabilities: string[];
};

export type Client = {
  name: string;
  description: string;
  tech: string[];
};

export type PastWork = {
  name: string;
  description: string;
  tech: string[];
};

export const services: Service[] = [
  {
    title: "Web Applications",
    description:
      "Full-stack web apps built with modern frameworks. From marketing sites to complex SaaS platforms — designed for performance, scalability, and clean UX.",
    capabilities: [
      "Next.js / React applications",
      "API design & backend systems",
      "Database architecture",
      "Authentication & access control",
    ],
  },
  {
    title: "Agentic Systems",
    description:
      "AI-powered agents and compound systems that handle real workflows. Not chatbot wrappers — actual autonomous agents that get work done.",
    capabilities: [
      "Autonomous coding agents",
      "Context engineering pipelines",
      "Multi-agent orchestration",
      "LLM integration & prompt systems",
    ],
  },
  {
    title: "Automation & Integration",
    description:
      "Connect your tools, automate your processes, and eliminate manual work. Custom workflows that run without babysitting.",
    capabilities: [
      "Workflow automation",
      "API integrations",
      "CI/CD pipelines",
      "Data sync & migration",
    ],
  },
];

export const clients: Client[] = [
  {
    name: "Flying Tigers Express",
    description:
      "Leading development for a logistics and enterprise platform — shipment tracking, multi-hub operations, partner management, and finance systems.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Google Cloud"],
  },
  {
    name: "Nurture Your Leads",
    description:
      "Building a SaaS CRM platform from the ground up — sales pipelines, client management, automated follow-ups, and role-based access control.",
    tech: ["React", "Next.js", "Supabase", "Tailwind CSS"],
  },
];

export const pastWork: PastWork[] = [
  {
    name: "Humanlike",
    description:
      "AI chatbot platform — built the infrastructure and conversational interfaces for deploying human-like agents to businesses.",
    tech: ["Node.js", "Express", "Firebase"],
  },
  {
    name: "Memor",
    description:
      "AI-powered note-taking app that automatically organizes, summarizes, and connects thoughts across sessions.",
    tech: ["React Native", "OpenAI", "PostgreSQL"],
  },
  {
    name: "Bidpilot AI",
    description:
      "AI-powered tender analysis platform — upload bid documents, extract requirements, and generate readiness reports.",
    tech: ["Next.js", "Firebase", "OpenAI"],
  },
];

export type Post = {
  title: string;
  description: string;
  tag: string;
  date: string;
};

export const posts: Post[] = [
  {
    title: "Building OpenClaw — a self-hosted AI agent platform",
    description:
      "Running 3 persistent AI agents + 9 on-demand sub-agents on an M1 server. Orchestration, memory systems, and autonomous coding — all self-hosted.",
    tag: "Agentic Systems",
    date: "2026-03",
  },
  {
    title: "Shipping a Personal OS with Claude Code",
    description:
      "An Obsidian vault that runs my entire workflow — daily logging, billing sync, task management, and self-learning — all driven by Claude Code skills.",
    tag: "Automation",
    date: "2026-02",
  },
];

export const socials = {
  email: "juliusbaliling25@gmail.com",
  github: "https://github.com/Illamapalooza",
  linkedin: "https://linkedin.com/in/juliusbaliling",
};
