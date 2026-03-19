import { Logo } from "./logo";

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6">
      <div className="animate-fade-in-up flex flex-col items-center gap-8">
        <Logo className="w-full max-w-md text-foreground" />
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="max-w-md text-lg leading-relaxed text-muted sm:text-xl">
            Web apps, agentic systems, and automation
            — engineered to ship.
          </p>
          <a
            href="#contact"
            className="mt-4 border border-foreground px-6 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            Start a project
          </a>
        </div>
      </div>
      <div className="animate-fade-in-up-delayed mt-16">
        <a
          href="#services"
          className="group flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
          aria-label="Scroll to services section"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="animate-bounce-gentle"
          >
            <path
              d="M8 0v20m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
