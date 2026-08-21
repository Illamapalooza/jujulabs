"use client";

import { useEffect, useState } from "react";
import { LogoIcon } from "./logo";

const sections = [
  { id: "top", label: "Studio" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Rail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between border-r border-border px-8 py-9 lg:flex">
      <div>
        <a href="#top" className="flex items-center gap-2.5">
          <LogoIcon className="h-6 w-6" />
          <span className="font-mono text-sm font-medium tracking-tight">
            jujulabs
          </span>
        </a>

        <nav className="mt-14 flex flex-col gap-3.5">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-3 font-mono text-xs transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    isActive ? "bg-accent" : "bg-border"
                  }`}
                />
                {section.label}
              </a>
            );
          })}
        </nav>
      </div>

      <div>
        <p className="eyebrow text-muted/70">Studio</p>
        <p className="mt-3 font-mono text-xs leading-relaxed text-muted">
          Cagayan de Oro, PH
          <br />
          Remote worldwide
        </p>
        <p className="mt-6 font-mono text-[11px] text-muted/60">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </aside>
  );
}
