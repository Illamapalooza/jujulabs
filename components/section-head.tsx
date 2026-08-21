export function SectionHead({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-12 sm:gap-8">
      <div className="sm:col-span-3">
        <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
          <span className="eyebrow text-accent">{label}</span>
          <span className="h-px flex-1 bg-border sm:w-12 sm:flex-none" aria-hidden />
        </div>
      </div>

      <div className="sm:col-span-9">
        <h2 className="display text-[2rem] sm:text-[3rem]">{title}</h2>
        {lead ? (
          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}
      </div>
    </div>
  );
}
