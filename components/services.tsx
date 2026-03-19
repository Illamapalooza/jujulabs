import { services } from "@/lib/data";
import { SectionReveal } from "./section-reveal";

export function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Services
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          What we build.
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Jujulabs is an independent engineering studio specializing in
          full-stack web applications, AI agent systems, and workflow
          automation. We work with startups and teams who need things
          built right — and shipped fast.
        </p>

        <div className="mt-12 space-y-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border p-6 transition-colors hover:border-foreground/20"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2 font-mono text-xs text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-foreground/30" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
