import { SystemDiagram } from "./system-diagram";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10 lg:pt-24"
    >
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative grid w-full max-w-5xl gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-rise text-muted">
            Independent engineering studio
          </p>

          <h1
            className="display animate-rise mt-7 text-[2.5rem] sm:text-[3.75rem]"
            style={{ animationDelay: "80ms" }}
          >
            Web apps, agentic systems, and automation
            <span className="text-accent"> — engineered to ship.</span>
          </h1>

          <p
            className="animate-rise mt-8 max-w-lg text-base leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            We design, build, and run production software for teams that need it
            working — not prototyped. Full-stack products, AI agents that do real
            work, and the automation that holds it together.
          </p>

          <div
            className="animate-rise mt-11 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-full border border-border px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              See the work
            </a>
          </div>
        </div>

        <div
          className="animate-rise lg:col-span-5 lg:-mr-24"
          style={{ animationDelay: "340ms" }}
        >
          <SystemDiagram className="w-full max-w-md" />
          <p className="eyebrow mt-6 text-muted/70">
            How the pieces connect
          </p>
        </div>
      </div>
    </section>
  );
}
