import Link from "next/link";
import { clsx } from "clsx";

export function NavLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={clsx(
        "rounded-xl px-3 py-2 text-sm font-bold text-slate-300 transition",
        "hover:bg-white/10 hover:text-slate-50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
