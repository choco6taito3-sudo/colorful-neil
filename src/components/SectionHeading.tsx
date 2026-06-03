export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-xs font-extrabold tracking-[0.18em] text-lavender-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-black tracking-tight text-slate-50 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
