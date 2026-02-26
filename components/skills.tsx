import { techStack } from "@/lib/data";
import { SectionReveal } from "./section-reveal";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Stack
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Technologies I work with.
        </h2>

        <div className="mt-12 space-y-8">
          {techStack.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.category}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border px-4 py-2 font-mono text-sm transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
