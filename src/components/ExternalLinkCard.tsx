import { clsx } from "clsx";
import { BrandIcon, type BrandIconId } from "@/components/icons/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";

type Accent = "coral" | "lavender" | "peach";

const accentStyles: Record<Accent, { ring: string; badge: string }> = {
  coral: {
    ring: "ring-coral-200",
    badge: "bg-coral-50 text-coral-800 ring-coral-100"
  },
  lavender: {
    ring: "ring-lavender-200",
    badge: "bg-lavender-50 text-lavender-800 ring-lavender-100"
  },
  peach: {
    ring: "ring-peach-200",
    badge: "bg-peach-50 text-peach-800 ring-peach-100"
  }
};

export function ExternalLinkCard({
  id,
  label,
  description,
  href,
  accent = "coral"
}: {
  id: BrandIconId;
  label: string;
  description: string;
  href: string;
  accent?: Accent;
}) {
  const styles = accentStyles[accent];

  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur ring-1",
        styles.ring
      )}
    >
      <div className="flex items-start gap-4">
        <span className="size-14 shrink-0 overflow-hidden rounded-2xl shadow-sm">
          <BrandIcon id={id} />
        </span>
        <div className="min-w-0 flex-1">
          <span
            className={clsx(
              "inline-flex rounded-full px-3 py-1 text-xs font-extrabold ring-1",
              styles.badge
            )}
          >
            外部リンク
          </span>
          <h3 className="mt-2 text-lg font-black tracking-tight text-slate-900">
            {label}
          </h3>
          <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <ButtonLink href={href} variant="primary" size="md" external>
          開く
        </ButtonLink>
      </div>
    </div>
  );
}
