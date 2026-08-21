import Image from "next/image";

import { clients, pastWork } from "@/lib/data";
import { SectionHead } from "./section-head";
import { SectionReveal } from "./section-reveal";

export function Work() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 sm:py-32">
      <SectionReveal className="mx-auto max-w-5xl">
        <SectionHead
          label="Work"
          title="Who we work with."
          lead="Platforms in daily production use, built and led end to end."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {clients.map((client, index) => (
            <article
              key={client.name}
              className={`panel panel-lift grid gap-8 p-7 sm:grid-cols-12 sm:gap-10 sm:p-9 ${
                index % 2 === 0 ? "lg:col-span-11" : "lg:col-span-11 lg:col-start-2"
              }`}
            >
              <div className="sm:col-span-4">
                <Image
                  src={client.logo}
                  alt={client.logoAlt}
                  width={320}
                  height={64}
                  unoptimized
                  className={`w-auto max-w-[200px] ${client.logoClassName}`}
                />

                <h3 className="display mt-7 text-[1.5rem]">{client.name}</h3>
                <p className="eyebrow mt-2.5 text-muted">{client.role}</p>

                <a
                  href={client.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-opacity hover:opacity-75"
                >
                  Visit site
                  <span aria-hidden>↗</span>
                </a>
              </div>

              <div className="sm:col-span-8">
                <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                  {client.description}
                </p>

                <ul className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {client.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span className="text-[0.875rem] leading-relaxed text-foreground/85">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {client.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-5">
            <span className="eyebrow text-muted">Previous work</span>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>

          <div className="mt-8 grid gap-10 sm:grid-cols-3">
            {pastWork.map((work) => (
              <div key={work.name}>
                <h4 className="display text-[1.25rem]">{work.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {work.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {work.tech.map((tech) => (
                    <span key={tech} className="font-mono text-[11px] text-muted/70">
                      {tech}
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
