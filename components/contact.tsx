import { socials } from "@/lib/data";
import { SectionHead } from "./section-head";
import { SectionReveal } from "./section-reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 sm:py-32">
      <SectionReveal className="mx-auto max-w-6xl">
        <div className="glow panel overflow-hidden p-8 sm:p-14">
          <SectionHead
            label="Contact"
            title="Start a project."
            lead="Have a product to build or a system to automate? Send the project details and we'll take it from there."
          />

          <a
            href={`mailto:${socials.email}?subject=Project%20Inquiry`}
            className="display mt-10 block break-words text-[1.375rem] text-accent transition-opacity hover:opacity-75 sm:text-[2rem]"
          >
            {socials.email}
          </a>

          <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-muted">Based in</p>
              <p className="mt-2.5 font-mono text-sm">
                Cagayan de Oro, Philippines
              </p>
            </div>
            <div>
              <p className="eyebrow text-muted">Working with</p>
              <p className="mt-2.5 font-mono text-sm">Teams worldwide, remote</p>
            </div>
            <div>
              <p className="eyebrow text-muted">Elsewhere</p>
              <div className="mt-2.5 flex gap-5">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
