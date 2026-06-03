import Link from "next/link";
import { site, telHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="surface overflow-hidden shadow-glow">
      <div className="grid gap-10 p-6 md:grid-cols-2 md:items-center md:p-10">
        <div className="space-y-5">
          <p className="inline-flex w-fit items-center rounded-full bg-lavender-500/15 px-3 py-1 text-xs font-extrabold text-lavender-300 ring-1 ring-lavender-500/30">
            完全予約制・プライベートサロン
          </p>
          <h1 className="text-balance bg-gradient-to-br from-slate-50 via-lavender-200 to-coral-300 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-5xl">
            {site.catchCopy}
          </h1>
          <p className="text-pretty text-base font-medium leading-7 text-slate-400 md:text-lg">
            {site.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary" href="/reserve">
              ネット予約・SNS
            </Link>
            <Link className="btn-secondary" href="/portfolio">
              作品集を見る
            </Link>
          </div>

          <div className="surface-inset p-4">
            <div className="grid gap-1 text-sm text-slate-300">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-bold text-slate-100">ご予約・お問い合わせ</span>
                <Link
                  href={telHref(site.phone)}
                  className="font-semibold text-coral-400 hover:underline"
                >
                  {site.phoneDisplay}
                </Link>
              </div>
              <div className="text-xs text-slate-500">
                平日 {site.hours.weekday} / 定休 {site.hours.closed}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-24 -top-24 size-64 rounded-full bg-coral-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-lavender-500/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral-500 via-lavender-500 to-peach-400 p-[2px] shadow-glow">
            <div className="rounded-3xl bg-black/90 p-6 md:p-8">
              <div className="grid gap-4">
                <div className="surface-inset p-5">
                  <div className="text-xs font-extrabold text-slate-500">
                    サロンのこだわり
                  </div>
                  <ul className="mt-3 space-y-2 text-sm font-medium text-slate-300">
                    <li className="flex gap-2">
                      <span className="mt-1 size-2 rounded-full bg-coral-400" />
                      <span>他にないアイデアを、シンプルに形にする</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 size-2 rounded-full bg-lavender-400" />
                      <span>作品ごとにデザインの意図をコメントで紹介</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 size-2 rounded-full bg-peach-400" />
                      <span>ホットペッパー・Instagramから予約・相談</span>
                    </li>
                  </ul>
                </div>
                <div className="surface-inset p-5">
                  <div className="text-xs font-extrabold text-slate-500">所在地</div>
                  <div className="mt-2 text-sm font-bold text-slate-200">
                    {site.address}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{site.access}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
