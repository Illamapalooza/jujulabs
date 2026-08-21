import { socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} jujulabs — engineering studio
        </p>
        <a
          href={`mailto:${socials.email}?subject=Project%20Inquiry`}
          className="font-mono text-xs text-muted transition-colors hover:text-foreground"
        >
          {socials.email}
        </a>
      </div>
    </footer>
  );
}
