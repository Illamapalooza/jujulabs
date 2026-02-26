import { socials } from "@/lib/data";
import { SectionReveal } from "./section-reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Contact
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s build something.
        </h2>

        <p className="mt-6 leading-relaxed text-muted">
          I&apos;m always open to interesting projects and collaborations. Reach
          out and let&apos;s talk.
        </p>

        <a
          href={`mailto:${socials.email}`}
          className="mt-6 inline-block border-b border-foreground pb-0.5 font-medium transition-opacity hover:opacity-60"
        >
          {socials.email}
        </a>

        <div className="mt-12 flex gap-6">
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
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
