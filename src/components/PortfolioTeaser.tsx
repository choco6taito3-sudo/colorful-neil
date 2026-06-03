import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export function PortfolioTeaser() {
  return (
    <section className="surface p-6 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Portfolio"
          title="作品集"
          description="施術したデザインと、色味・テイストのコメントを掲載しています。"
        />
        <Link className="btn-primary w-fit" href="/portfolio">
          すべて見る
        </Link>
      </div>
      <div className="mt-6">
        <PortfolioGrid />
      </div>
    </section>
  );
}
