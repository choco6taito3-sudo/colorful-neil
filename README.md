# colorful-neil

個人ネイルサロン「colorful-neil」向けの架空ホームページ（Next.js 15 + Tailwind CSS）。

## 開発

```bash
npm install
npm run dev
```

## 差し替えポイント

- `src/lib/site.ts` — 店名・電話・メール・外部URL
- `src/lib/portfolio.ts` — 作品データ
- `public/portfolio/` — 実写真（SVG を JPG 等に置き換え可）
- `.env.local` — `NEXT_PUBLIC_HOTPEPPER_IFRAME_SRC` など（`.env.example` 参照）

## ページ

- `/` トップ
- `/portfolio` 作品集
- `/portfolio/[slug]` 作品詳細
- `/reserve` 予約・SNS（ホットペッパー iframe / 外部リンク）
- `/contact` お問い合わせ（tel / mailto）
