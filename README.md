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

## Vercel へデプロイ

リポジトリ: [choco6taito3-sudo/colorful-neil](https://github.com/choco6taito3-sudo/colorful-neil)

### 方法 A: GitHub 連携（推奨）

1. [Vercel](https://vercel.com) にログイン
2. **Add New… → Project**
3. **Import** で `choco6taito3-sudo/colorful-neil` を選択
4. Framework Preset は **Next.js**（自動検出）
5. **Environment Variables** に以下を追加（デプロイ後の URL が分かってからでも可）  
   - `NEXT_PUBLIC_SITE_URL` = `https://あなたのプロジェクト.vercel.app`
6. **Deploy** をクリック

`main` ブランチへの push ごとに自動で再デプロイされます。

### 方法 B: Vercel CLI

```bash
npx vercel login
npx vercel link
npx vercel --prod
```

### 任意の環境変数

| 変数名 | 用途 |
|--------|------|
| `NEXT_PUBLIC_SITE_URL` | OGP・canonical 用の本番 URL |
| `NEXT_PUBLIC_HOTPEPPER_IFRAME_SRC` | 予約 iframe の URL |
| `NEXT_PUBLIC_HOTPEPPER_URL` | ホットペッパー外部リンク |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram 外部リンク |
| `NEXT_PUBLIC_BOOKING_FRAME_ORIGIN` | `/reserve` の CSP `frame-src` 用 |
