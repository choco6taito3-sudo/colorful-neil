import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const bookingFrameOrigin = process.env.NEXT_PUBLIC_BOOKING_FRAME_ORIGIN;
const reserveCsp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  `frame-src 'self' ${bookingFrameOrigin ? bookingFrameOrigin : "https:"}`,
  "connect-src 'self' https:"
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  async headers() {
    return [
      {
        source: "/reserve",
        headers: [
          {
            key: "Content-Security-Policy",
            value: reserveCsp
          }
        ]
      }
    ];
  }
};

export default nextConfig;
