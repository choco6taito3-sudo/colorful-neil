export const site = {
  name: "colorful-neil",
  tagline: "個人ネイルサロン",
  catchCopy: "他にないアイデアを、シンプルに。",
  description:
    "あなただけのデザインを、わかりやすく、丁寧に。完全予約制のプライベートサロンです。",
  aboutLead: "「他にないアイデア」を大切にした、個人ネイルサロンです。",
  aboutBody:
    "流行をなぞるのではなく、あなたの好きや雰囲気からひとつだけ形にします。派手さより、シンプルで残るデザインを。",
  phone: "090-8765-4321",
  phoneDisplay: "090-8765-4321",
  email: "info@colorful-neil.example",
  address: "〒150-0001 東京都渋谷区神宮前 2-4-6 colorful-neil 3F",
  access: "表参道駅 B2出口 徒歩7分",
  hours: {
    weekday: "10:00–20:00（最終受付 18:30）",
    weekend: "10:00–18:00（最終受付 16:30）",
    closed: "火曜・第3水曜"
  },
  hotpepperUrl:
    process.env.NEXT_PUBLIC_HOTPEPPER_URL ??
    "https://beauty.hotpepper.jp/",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/",
  externalLinks: [
    {
      id: "hotpepper",
      label: "ホットペッパービューティー",
      description: "空き状況の確認・ネット予約",
      href:
        process.env.NEXT_PUBLIC_HOTPEPPER_URL ??
        "https://beauty.hotpepper.jp/",
      accent: "coral" as const
    },
    {
      id: "instagram",
      label: "Instagram",
      description: "新作デザイン・施術事例を更新中",
      href:
        process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
        "https://www.instagram.com/",
      accent: "lavender" as const
    }
  ]
} as const;

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailtoHref(email: string) {
  return `mailto:${email}`;
}
