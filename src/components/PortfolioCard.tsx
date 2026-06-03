import Image from "next/image";
import Link from "next/link";
import type { PortfolioWork } from "@/lib/portfolio";
import { excerpt } from "@/lib/portfolio";

const tagColors = [
  "bg-coral-500/15 text-coral-300 ring-coral-500/30",
  "bg-lavender-500/15 text-lavender-300 ring-lavender-500/30",
  "bg-peach-500/15 text-peach-300 ring-peach-500/30"
];

export function PortfolioCard({ work }: { work: PortfolioWork }) {
  return (
    <article className="group surface overflow-hidden transition hover:border-white/20 hover:shadow-glow">
      <Link href={`/portfolio/${work.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
          <Image
            src={work.imageSrc}
            alt={work.imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="space-y-3 p-5">
          <h3 className="text-lg font-black tracking-tight text-slate-50">
            {work.title}
          </h3>
          <p className="text-sm font-medium leading-7 text-slate-400">
            {excerpt(work.comment)}
          </p>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${tagColors[i % tagColors.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex text-sm font-extrabold text-coral-400 group-hover:underline">
            詳しく見る →
          </span>
        </div>
      </Link>
    </article>
  );
}
