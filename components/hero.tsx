export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10">
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="eyebrow animate-rise text-muted">
          Independent engineering studio — Philippines
        </p>

        <h1
          className="display animate-rise mt-8 max-w-4xl text-[2.75rem] sm:text-[4.5rem]"
          style={{ animationDelay: "80ms" }}
        >
          Web apps, agentic systems, and automation
          <span className="text-accent"> — engineered to ship.</span>
        </h1>

        <p
          className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          We design, build, and run production software for teams that need it
          working — not prototyped. Full-stack products, AI agents that do real
          work, and the automation that holds it together.
        </p>

        <div
          className="animate-rise mt-12 flex flex-wrap items-center gap-3"
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
    </section>
  );
}
