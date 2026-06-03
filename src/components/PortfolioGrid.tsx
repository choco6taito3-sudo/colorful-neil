import { portfolioWorks } from "@/lib/portfolio";
import { PortfolioCard } from "@/components/PortfolioCard";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const works = limit ? portfolioWorks.slice(0, limit) : portfolioWorks;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {works.map((work) => (
        <PortfolioCard key={work.slug} work={work} />
      ))}
    </div>
  );
}
