import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "作品集",
  description: `${site.name}のネイルデザイン作品集。写真とコメントで施術内容をご紹介します。`
};

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="作品集"
        description="施術したデザインの写真と、色味・テイストについてのコメントを掲載しています。気になる作品をタップして詳細をご覧ください。"
      />
      <PortfolioGrid />
    </div>
  );
}
