import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-sm font-extrabold tracking-tight text-slate-50">
            {site.name}
          </div>
          <p className="text-sm text-slate-400">
            {site.address}
            <br />
            TEL: {site.phoneDisplay}
          </p>
          <p className="text-xs text-slate-500">
            ※記載の内容はサンプルです。実際の情報に差し替えてご利用ください。
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-bold text-slate-50">営業時間</div>
          <div className="surface-inset p-4">
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <div className="font-semibold text-slate-200">平日</div>
              <div>{site.hours.weekday}</div>
              <div className="font-semibold text-slate-200">土日</div>
              <div>{site.hours.weekend}</div>
              <div className="font-semibold text-slate-200">定休</div>
              <div>{site.hours.closed}</div>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-bold text-slate-50">リンク</div>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link className="transition hover:text-lavender-300 hover:underline" href="/portfolio">
                作品集
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lavender-300 hover:underline" href="/reserve">
                予約・SNS
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lavender-300 hover:underline" href="/contact">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
