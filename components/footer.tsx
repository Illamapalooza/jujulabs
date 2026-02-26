export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} jujulabs
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
