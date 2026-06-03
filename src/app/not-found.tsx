import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-2xl font-black text-slate-50">
        ページが見つかりません
      </h1>
      <Link
        href="/"
        className="inline-flex text-sm font-extrabold text-coral-400 hover:underline"
      >
        トップへ戻る
      </Link>
    </div>
  );
}
