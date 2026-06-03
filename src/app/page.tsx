import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { ExternalLinkIcons } from "@/components/ExternalLinkIcons";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />

      <section className="surface p-6 md:p-10">
        <SectionHeading
          eyebrow="About"
          title="サロンについて"
          description={site.aboutLead}
        />
        <p className="mt-4 text-sm font-medium leading-7 text-slate-400 md:text-base">
          {site.aboutBody}
        </p>
      </section>

      <PortfolioTeaser />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Reserve & SNS"
          title="予約・SNS"
          description="ホットペッパービューティーや Instagram からもご予約・ご相談いただけます。"
        />
        <ExternalLinkIcons links={site.externalLinks} />
        <Link className="btn-secondary w-fit" href="/reserve">
          予約ページへ
        </Link>
      </section>

      <section className="surface border-lavender-500/20 bg-gradient-to-br from-coral-500/10 via-lavender-500/10 to-peach-500/5 p-6 md:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="お問い合わせ"
          description="ご質問やデザインのご相談は、お電話またはメールでお気軽にどうぞ。"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/contact">
            連絡先を見る
          </Link>
        </div>
      </section>
    </div>
  );
}
