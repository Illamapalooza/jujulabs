import { SectionReveal } from "./section-reveal";

const stats = [
  { value: "3+", label: "Years" },
  { value: "5+", label: "Projects" },
  { value: "4", label: "Companies" },
  { value: "20+", label: "Technologies" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          About
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Building products that solve real problems.
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          I&apos;m Julius — a fullstack engineer and agentic systems builder based
          in the Philippines. I work across the entire stack, from crafting
          interfaces to architecting backend systems, and fully leverage agentic
          coding — context engineering, compound AI systems, and autonomous agent
          workflows — to ship faster and smarter.
        </p>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Over the past three years, I&apos;ve built CRM platforms, AI chatbots,
          logistics systems, and developer tools — always with an eye toward
          simplicity, automation, and user impact.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
