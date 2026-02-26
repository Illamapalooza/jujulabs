import { experiences, achievements } from "@/lib/data";
import { SectionReveal } from "./section-reveal";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Experience
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Where I&apos;ve worked.
        </h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="group border-l-2 border-border pl-6 transition-colors hover:border-foreground/30"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold tracking-tight">{exp.role}</h3>
                  <p className="text-sm text-muted">{exp.company}</p>
                </div>
                <p className="font-mono text-xs text-muted">{exp.period}</p>
              </div>
              {exp.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Achievements
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
              >
                <p className="text-sm font-semibold tracking-tight">
                  {a.title}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
