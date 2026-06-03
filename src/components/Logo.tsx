import Image from "next/image";

const sizes = {
  sm: 32,
  md: 40,
  lg: 56
} as const;

export function Logo({
  size = "md",
  className = ""
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  const px = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="colorful-neil ロゴ"
      width={px}
      height={px}
      className={`rounded-2xl shadow-glow ${className}`}
      priority={size === "md"}
    />
  );
}
