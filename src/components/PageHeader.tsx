export function PageHeader({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="space-y-3">
      <h1 className="text-3xl font-black tracking-tight text-slate-50 md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
