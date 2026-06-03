import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, telHref } from "@/lib/site";
import { NavLink } from "@/components/ui/NavLink";
import { ButtonLink } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo size="md" />
          <div className="leading-tight">
            <div className="text-sm font-bold text-slate-50">{site.name}</div>
            <div className="text-xs font-semibold text-slate-500">
              {site.tagline}
            </div>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="グローバルナビゲーション"
        >
          <NavLink href="/portfolio">作品集</NavLink>
          <NavLink href="/reserve">予約・SNS</NavLink>
          <NavLink href="/contact">お問い合わせ</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            className="hidden md:inline-flex"
            href={telHref(site.phone)}
            variant="secondary"
            size="sm"
          >
            電話する
          </ButtonLink>
          <ButtonLink href="/reserve" variant="primary" size="sm">
            予約へ
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
