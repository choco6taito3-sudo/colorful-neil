import { clsx } from "clsx";
import { BrandIcon, type BrandIconId } from "@/components/icons/BrandIcons";

type Accent = "coral" | "lavender" | "peach";

const accentRing: Record<Accent, string> = {
  coral: "ring-coral-500/25 hover:ring-coral-400/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
  lavender:
    "ring-lavender-500/25 hover:ring-lavender-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
  peach: "ring-peach-500/25 hover:ring-peach-400/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
};

export function ExternalLinkIcons({
  links
}: {
  links: ReadonlyArray<{
    id: string;
    label: string;
    description: string;
    href: string;
    accent: Accent;
  }>;
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "group surface flex items-center gap-4 p-5 ring-1 transition",
              "hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              accentRing[link.accent]
            )}
          >
            <span className="size-14 shrink-0 overflow-hidden rounded-2xl shadow-glow transition group-hover:scale-105">
              <BrandIcon id={link.id as BrandIconId} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-black text-slate-50">
                {link.label}
              </span>
              <span className="mt-1 block text-xs font-medium leading-5 text-slate-400">
                {link.description}
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-extrabold text-coral-400 group-hover:underline">
                開く
                <ExternalArrow />
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ExternalArrow() {
  return (
    <svg
      className="size-3.5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H6M11.5 4.5v5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
