import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center font-extrabold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-coral-600 via-lavender-600 to-coral-600 text-white shadow-glow hover:brightness-110",
  secondary:
    "bg-white/10 text-slate-100 ring-1 ring-white/15 hover:bg-white/15"
};

const sizes: Record<Size, string> = {
  sm: "rounded-2xl px-4 py-2 text-sm",
  md: "rounded-2xl px-5 py-3 text-sm"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "sm",
  className,
  external
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  const classes = clsx(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
