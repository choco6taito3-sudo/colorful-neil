import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWorkBySlug, portfolioWorks } from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return portfolioWorks.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "作品が見つかりません" };
  return {
    title: work.title,
    description: work.comment
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <article className="space-y-6">
      <Link
        href="/portfolio"
        className="inline-flex text-sm font-extrabold text-coral-400 hover:underline"
      >
        ← 作品集に戻る
      </Link>

      <div className="surface overflow-hidden">
        <div className="relative aspect-[16/10] w-full bg-zinc-900">
          <Image
            src={work.imageSrc}
            alt={work.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </div>
        <div className="space-y-4 p-6 md:p-10">
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-lavender-500/15 px-3 py-1 text-xs font-bold text-lavender-300 ring-1 ring-lavender-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-50 md:text-4xl">
            {work.title}
          </h1>
          <p className="text-base font-medium leading-8 text-slate-300">
            {work.comment}
          </p>
        </div>
      </div>
    </article>
  );
}
