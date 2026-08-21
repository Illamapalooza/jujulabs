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
    <div>
      <div className="flex items-center gap-5">
        <span className="eyebrow text-accent">{label}</span>
        <span className="h-px flex-1 bg-border" aria-hidden />
      </div>

      <h2 className="display mt-7 text-[2rem] sm:text-[3rem]">{title}</h2>

      {lead ? (
        <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
