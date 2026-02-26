export type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description?: string;
};

export type Achievement = {
  title: string;
  detail: string;
};

export const projects: Project[] = [
  {
    title: "Nurture Your Leads",
    description:
      "SaaS CRM platform for managing sales pipelines, client relationships, and automated follow-ups.",
    tech: ["React", "Next.js", "Supabase", "Tailwind CSS"],
    url: "#",
  },
  {
    title: "Humanlike",
    description:
      "AI chatbot platform that enables businesses to deploy conversational agents with human-like interactions.",
    tech: ["Node.js", "Express", "Firebase"],
    url: "#",
  },
  {
    title: "Memor",
    description:
      "AI-powered note-taking app that automatically organizes, summarizes, and connects your thoughts.",
    tech: ["React Native", "OpenAI", "PostgreSQL"],
    url: "#",
  },
  {
    title: "Visual Note",
    description:
      "AI image-to-notes tool that extracts and structures information from visual content into actionable notes.",
    tech: ["Next.js", "OpenAI", "Tailwind CSS"],
    url: "#",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer / Tech Lead",
    company: "Symph / FTE",
    period: "2023 — Present",
    description: "Fullstack engineering and technical leadership for logistics and enterprise applications.",
  },
  {
    role: "Software Engineer",
    company: "Humanlike",
    period: "2024",
    description: "Built AI chatbot infrastructure and conversational interfaces.",
  },
  {
    role: "Fullstack Developer",
    company: "Nurture Your Leads",
    period: "2024 — Present",
    description: "Architecting and developing a SaaS CRM platform from the ground up.",
  },
  {
    role: "Founder",
    company: "Hostari Labs",
    period: "2024",
    description: "Founded a startup focused on developer tooling and hosting solutions.",
  },
  {
    role: "Community Lead",
    company: "Google Developer Groups",
    period: "2023 — 2024",
    description: "Organized developer events and tech community initiatives.",
  },
  {
    role: "Research Assistant",
    company: "Academic Research",
    period: "2023 — 2024",
    description: "Contributed to research in applied computing and AI systems.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "AI Automation Challenge",
    detail: "Junior Award",
  },
  {
    title: "Indie Hacker Champion",
    detail: "1st Place",
  },
  {
    title: "TOPCIT",
    detail: "Top 10%",
  },
  {
    title: "Google Solution Challenge",
    detail: "4th Place",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Firebase",
  "Python",
  "Git",
  "Docker",
  "Vercel",
];

export const socials = {
  email: "juliusbaliling25@gmail.com",
  github: "https://github.com/Illamapalooza",
  linkedin: "https://linkedin.com/in/juliusbaliling",
  instagram: "https://instagram.com/julio.ll",
};
