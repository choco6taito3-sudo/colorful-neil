import Link from "next/link";
import { site } from "@/lib/site";

export function MockBookingPreview() {
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="text-xs font-extrabold tracking-[0.18em] text-slate-500">
            SAMPLE BOOKING
          </div>
          <h2 className="mt-2 text-lg font-black tracking-tight text-slate-50">
            予約ウィジェット（表示モック）
          </h2>
          <p className="mt-2 max-w-xl text-sm font-medium leading-7 text-slate-400">
            ホットペッパーの埋め込みURLが未設定のため、予約画面の雰囲気を再現しています。
            `.env.local` に `NEXT_PUBLIC_HOTPEPPER_IFRAME_SRC` を設定すると iframe
            に切り替わります。
          </p>
        </div>
        <span className="rounded-2xl bg-peach-500/15 px-3 py-2 text-xs font-extrabold text-peach-300 ring-1 ring-peach-500/30">
          サンプル
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["ジェルネイル", "フレンチ", "アート"].map((menu) => (
          <div key={menu} className="surface-inset p-4">
            <div className="text-sm font-extrabold text-slate-100">{menu}</div>
            <div className="mt-2 text-xs font-medium text-slate-500">
              所要 90分 / 例
            </div>
            <div className="mt-3 inline-flex rounded-xl bg-coral-500/15 px-3 py-1 text-xs font-bold text-coral-300 ring-1 ring-coral-500/30">
              空きあり（例）
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-medium text-slate-500">
          ※実際の予約は下の外部リンクから行ってください。
        </p>
        <Link
          href={site.hotpepperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          ホットペッパーで予約
        </Link>
      </div>
    </div>
  );
}
