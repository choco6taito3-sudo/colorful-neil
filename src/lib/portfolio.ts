export type PortfolioWork = {
  slug: string;
  title: string;
  comment: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
};

export const portfolioWorks: PortfolioWork[] = [
  {
    slug: "purple-pink-jewel",
    title: "マットパープル × ピンクアクセント",
    comment:
      "深いマットパープルとツヤのあるくすみピンクを組み合わせ、薬指にカット周りのラインストーンを添えたデザイン。色のメリハリで華やかさを出しつつ、全体は落ち着いた大人向けの仕上がりです。",
    tags: ["マット", "ビジュー"],
    imageSrc: "/portfolio/photo-1.jpeg",
    imageAlt: "マットパープルとピンク、ストーンアクセントのネイル"
  },
  {
    slug: "asymmetric-blue-rose",
    title: "アシンメトリー・ワンカラー",
    comment:
      "右手はスカイブルー、左手はダスティローズ——左右で色を変えた、遊び心のあるワンカラー。シンプルながら「どちらも捨てがたい」という他にないアイデアを、そのまま形にしました。",
    tags: ["ワンカラー", "アシンメトリー"],
    imageSrc: "/portfolio/photo-2.jpeg",
    imageAlt: "スカイブルーとダスティローズのアシンメトリーネイル"
  },
  {
    slug: "original-design-lineup",
    title: "オリジナルデザイン集",
    comment:
      "幾何学ラインネイル、ティール×ブラウンのトリカラー、スレートブルーにゴールドビジュー、ゴールドフレンチ、オーシャングラデーション、立体的ジュエリー、マットに3Dローズ——コンセプトの違う、他にないデザインのラインナップです。",
    tags: ["アート", "オリジナル"],
    imageSrc: "/portfolio/photo-3.jpeg",
    imageAlt: "さまざまなオリジナルネイルデザインのコラージュ"
  }
];

export function getWorkBySlug(slug: string): PortfolioWork | undefined {
  return portfolioWorks.find((w) => w.slug === slug);
}

export function excerpt(text: string, max = 72) {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}…`;
}
