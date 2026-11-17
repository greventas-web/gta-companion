import type { NextConfig } from "next";

import { SITE } from "./lib/site";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  async headers() {
    // Map tiles and site images are not content-hashed, but they rarely change.
    // Let browsers keep them for a day and the CDN for a week, so a launch spike
    // does not revalidate every tile on every visit.
    const longCache = "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400";
    return [
      { source: "/maps/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/logo/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/icons/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "gta-companion.vercel.app",
          },
        ],
        destination: `${SITE.url}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "^gta-companion\\.com$",
          },
        ],
        destination: `${SITE.url}/:path*`,
        permanent: true,
      },
    ];
  },

  images: {
    contentDispositionType: "inline",
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    // All site images are local files. Only allow YouTube thumbnails remotely so
    // the image optimizer cannot be used as an open proxy during a traffic spike.
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },

  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;