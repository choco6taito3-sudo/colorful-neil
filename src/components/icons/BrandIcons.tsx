import { clsx } from "clsx";

export type BrandIconId = "hotpepper" | "instagram";

export function BrandIcon({
  id,
  className
}: {
  id: BrandIconId;
  className?: string;
}) {
  const cn = clsx("size-full", className);

  if (id === "hotpepper") {
    return (
      <svg
        className={cn}
        viewBox="0 0 48 48"
        role="img"
        aria-hidden
        fill="none"
      >
        <rect width="48" height="48" rx="12" fill="#E4007F" />
        <rect
          x="13"
          y="14"
          width="22"
          height="20"
          rx="3"
          stroke="white"
          strokeWidth="2.5"
        />
        <path
          d="M13 20h22M19 12v4M29 12v4"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M18 26h12M18 30h8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={cn}
      viewBox="0 0 48 48"
      role="img"
      aria-hidden
      fill="none"
    >
      <defs>
        <linearGradient id="ig" x1="8" y1="40" x2="40" y2="8">
          <stop stopColor="#F58529" />
          <stop offset="0.35" stopColor="#DD2A7B" />
          <stop offset="0.7" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ig)" />
      <rect
        x="14"
        y="14"
        width="20"
        height="20"
        rx="6"
        stroke="white"
        strokeWidth="2.5"
      />
      <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2.5" />
      <circle cx="31.5" cy="16.5" r="1.8" fill="white" />
    </svg>
  );
}
