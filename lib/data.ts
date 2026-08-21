export type Service = {
  title: string;
  description: string;
  capabilities: string[];
};

export type Client = {
  name: string;
  logo: string;
  logoAlt: string;
  logoClassName: string;
  url: string;
  role: string;
  description: string;
  highlights: string[];
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
    logo: "/fte-logo.svg",
    logoAlt: "Flying Tigers Express logo",
    logoClassName: "h-11 sm:h-14",
    url: "https://flyingtigersexpress.com",
    role: "Tech Lead · Consultant",
    description:
      "Nationwide logistics and courier platform — booking, shipment tracking, multi-hub and partner-branch operations, COD wallets and merchant settlement, invoicing, and notifications. One codebase serving an ops console, a customer portal, and native mobile apps.",
    highlights: [
      "Shopify app — merchants book, rate, and track FTE shipments straight from their storefront orders, with address coverage lookup and SMS updates",
      "Merchant COD wallets, rider custody, and automated settlement and invoicing",
      "Multi-hub, partner-branch, and walk-in booking flows with flight-level tracking",
      "Leading a team of 5 devs — architecture, PR review, releases, and production deploys",
    ],
    tech: [
      "Next.js",
      "NestJS",
      "React Native",
      "PostgreSQL",
      "Shopify",
      "Google Cloud",
    ],
  },
  {
    name: "Nurture Your Leads",
    logo: "/nyl-wordmark.svg",
    logoAlt: "Nurture Your Leads logo",
    logoClassName: "h-7 sm:h-9",
    url: "https://www.nurtureyourleads.com",
    role: "Lead Engineer",
    description:
      "SaaS CRM built from the ground up for sales teams — contact and deal pipelines, automated follow-up sequences, team workspaces, and permissions that reach down to the record level.",
    highlights: [
      "Team management with attribute-based access control (ABAC) and pooled lead routing",
      "Automated follow-up sequences and transactional email",
      "Instant contact and deal search powered by Typesense",
      "Subscription billing and multi-tenant workspaces",
    ],
    tech: ["Next.js", "tRPC", "Prisma", "Supabase", "Stripe", "Tailwind CSS"],
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
    name: "HIREAI",
    description:
      "AI assistant deployed into a client's business operations — captures and qualifies leads across Meta and Messenger, runs follow-up until they convert, and escalates when a human is needed.",
    tech: ["LLM Agents", "Meta API", "Google Sheets"],
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
