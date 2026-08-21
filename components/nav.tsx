"use client";

import { useEffect, useState } from "react";
import { LogoIcon } from "./logo";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 lg:hidden ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="/" className="flex items-center gap-2.5">
          <LogoIcon className="h-6 w-6" />
          <span className="font-mono text-sm font-medium tracking-tight">
            jujulabs
          </span>
        </a>

        <div className="flex items-center gap-7">
          <div className="hidden gap-7 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/#contact"
            className="rounded-full border border-accent/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
