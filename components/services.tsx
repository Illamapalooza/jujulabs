import { services } from "@/lib/data";
import { SectionHead } from "./section-head";
import { SectionReveal } from "./section-reveal";

export function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 sm:py-32">
      <SectionReveal className="mx-auto max-w-6xl">
        <SectionHead
          label="Services"
          title="What we build."
          lead="Jujulabs is an independent engineering studio working with startups and teams who need things built right — and shipped fast."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="panel flex flex-col p-7 transition-colors hover:border-foreground/20"
            >
              <h3 className="display text-[1.375rem]">{service.title}</h3>

              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                {service.description}
              </p>

              <ul className="mt-7 space-y-2.5 border-t border-border pt-6">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-baseline gap-3 font-mono text-xs text-foreground/75"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {capability}
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
