"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Feed", href: "/feed" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          jujulabs
        </a>
        <div className="hidden gap-6 sm:flex">
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
      </nav>
    </header>
  );
}
