import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLinkIcons } from "@/components/ExternalLinkIcons";
import { MockBookingPreview } from "@/components/MockBookingPreview";
import { site } from "@/lib/site";
import { portfolioWorks } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "予約・SNS",
  description: `${site.name}のネット予約とSNSリンク。ホットペッパービューティー・Instagramからご予約いただけます。`
};

const iframeSrc = process.env.NEXT_PUBLIC_HOTPEPPER_IFRAME_SRC ?? "";

export default function ReservePage() {
  const instagramSamples = portfolioWorks;

  return (
    <div className="space-y-6">
      <PageHeader
        title="予約・SNS"
        description="ホットペッパービューティーの予約ウィジェット、Instagram など外部サービスへの導線です。"
      />

      <ExternalLinkIcons links={site.externalLinks} />

      <section className="surface p-6 md:p-10">
        <h2 className="text-lg font-black tracking-tight text-slate-50">
          ネット予約
        </h2>
        <p className="mt-3 text-sm font-medium leading-7 text-slate-400">
          ホットペッパービューティーのウィジェットを表示します。表示されない場合は
          埋め込みURLの設定、または下の外部リンクから直接ご予約ください。
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl surface-inset">
          {iframeSrc ? (
            <iframe
              title="ホットペッパービューティー予約"
              src={iframeSrc}
              className="h-[840px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <MockBookingPreview />
          )}
        </div>
      </section>

      <section className="surface p-6 md:p-10">
        <h2 className="text-lg font-black tracking-tight text-slate-50">
          Instagram（サンプル投稿風）
        </h2>
        <p className="mt-3 text-sm font-medium leading-7 text-slate-400">
          プロフィール全体の埋め込みは制限があるため、新作デザインは Instagram
          でもご確認ください。下のグリッドはサイト内の作品サンプルです。
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {instagramSamples.map((work) => (
            <a
              key={work.slug}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-lavender-500/40"
            >
              <Image
                src={work.imageSrc}
                alt={work.imageAlt}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="200px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
