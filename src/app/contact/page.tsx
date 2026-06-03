import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site, telHref, mailtoHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${site.name}へのお問い合わせ。お電話・メールでご連絡いただけます。`
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="お問い合わせ"
        description="デザインのご相談、メニューについてのご質問など、お気軽にご連絡ください。お急ぎの方はお電話をご利用ください。"
      />

      <section className="grid gap-4 md:grid-cols-2">
        <div className="surface p-6">
          <h2 className="text-lg font-black tracking-tight text-slate-50">
            お電話
          </h2>
          <p className="mt-3 text-sm font-medium leading-7 text-slate-400">
            営業時間内にお電話ください。完全予約制のため、空き状況の確認もお電話で承ります。
          </p>
          <Link className="btn-primary mt-4" href={telHref(site.phone)}>
            {site.phoneDisplay}
          </Link>
          <div className="mt-3 text-xs font-medium text-slate-500">
            平日 {site.hours.weekday} / 定休 {site.hours.closed}
          </div>
        </div>

        <div className="surface p-6">
          <h2 className="text-lg font-black tracking-tight text-slate-50">
            メール
          </h2>
          <p className="mt-3 text-sm font-medium leading-7 text-slate-400">
            返信まで1〜2営業日ほどいただく場合があります。お急ぎの方はお電話をご利用ください。
          </p>
          <Link className="btn-secondary mt-4" href={mailtoHref(site.email)}>
            {site.email}
          </Link>
          <div className="mt-3 text-xs font-medium text-slate-500">
            ※デザインの参考画像を添付いただけるとスムーズです。
          </div>
        </div>
      </section>

      <section className="surface p-6">
        <h2 className="text-lg font-black tracking-tight text-slate-50">
          アクセス
        </h2>
        <p className="mt-3 text-sm font-medium leading-7 text-slate-400">
          {site.address}
          <br />
          {site.access}
        </p>
      </section>
    </div>
  );
}
