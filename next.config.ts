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
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
      {
        source: "/offline.html",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "X-Gta-Offline", value: "1" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
      { source: "/maps/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/logo/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/icons/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
      { source: "/_v/:path*", headers: [{ key: "Cache-Control", value: longCache }] },
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
    // No Vercel Image Optimization: Hobby includes 5,000 transformations a
    // cycle. Images are pre-sized at build (scripts/images/variants.mjs) and
    // picked by lib/images/loader.ts, so new pages never add transformations.
    loader: "custom",
    loaderFile: "./lib/images/loader.ts",
    deviceSizes: [640, 1080, 1600],
    imageSizes: [128, 384],
    contentDispositionType: "inline",
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