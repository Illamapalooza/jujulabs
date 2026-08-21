import Image from "next/image";

import { clients, pastWork } from "@/lib/data";
import { SectionReveal } from "./section-reveal";

export function Work() {
  return (
    <section id="work" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Work
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Who we work with.
        </h2>

        <div className="mt-12 space-y-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group overflow-hidden rounded-lg border border-border transition-colors hover:border-foreground/20"
            >
              <div className="flex items-center justify-center h-40 bg-foreground px-8">
                <Image
                  src={client.logo}
                  alt={client.logoAlt}
                  width={320}
                  height={64}
                  unoptimized
                  className={`w-auto max-w-full ${client.logoClassName}`}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {client.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {client.role}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {client.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {client.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-px w-3 shrink-0 bg-border"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {client.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={client.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
                >
                  Visit site
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Previous work
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {pastWork.map((work) => (
              <div
                key={work.name}
                className="rounded-lg border border-border p-5 transition-colors hover:border-foreground/20"
              >
                <h4 className="font-semibold tracking-tight">{work.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {work.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-muted/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
