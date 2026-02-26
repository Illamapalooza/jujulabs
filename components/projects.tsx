import { projects } from "@/lib/data";
import { SectionReveal } from "./section-reveal";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Projects
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected work.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border border-border p-6 transition-colors hover:border-foreground/20"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
