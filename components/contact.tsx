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
          Start a project.
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Have a product to build or a system to automate? Reach out with your
          project details and we&apos;ll take it from there.
        </p>

        <a
          href={`mailto:${socials.email}?subject=Project%20Inquiry`}
          className="mt-6 inline-block border border-foreground px-6 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
        >
          Get in touch
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
        </div>
      </SectionReveal>
    </section>
  );
}
