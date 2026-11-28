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

  async rewrites() {
    // Browsers request /favicon.ico directly. The icon already lives under
    // /icons; this serves that file instead of a second copy.
    return {
      beforeFiles: [
        { source: "/favicon.ico", destination: "/icons/favicon-night.ico" },
      ],
    };
  },

  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      // Pre-launch stand-in weapon pages superseded by named release-build entries.
      { source: "/weapons/standard-pistol", destination: "/weapons", permanent: true },
      { source: "/weapons/compact-pistol", destination: "/weapons", permanent: true },
      { source: "/weapons/assault-rifle", destination: "/weapons", permanent: true },
      { source: "/weapons/pump-shotgun", destination: "/weapons/fortune-son-moreland-850", permanent: true },
      { source: "/weapons/sniper-rifle", destination: "/weapons", permanent: true },
      { source: "/weapons/rocket-launcher", destination: "/weapons/hauners-h-at", permanent: true },
      // In-game shop name is AdB PD-90 (our Iron & Oak footage, 4:46).
      { source: "/weapons/adb-pd-80", destination: "/weapons/adb-pd-90", permanent: true },
      // Guessed or retired guide URLs that Search Console reported as 404.
      { source: "/guides/robberies", destination: "/money-methods/store-robberies", permanent: true },
      { source: "/guides/robbery", destination: "/money-methods/store-robberies", permanent: true },
      { source: "/guides/store-robberies", destination: "/money-methods/store-robberies", permanent: true },
      { source: "/guides/jewelry-store-robberies", destination: "/money-methods/jewelry-store-robberies", permanent: true },
      { source: "/guides/money", destination: "/money-methods", permanent: true },
      { source: "/guides/make-money", destination: "/money-methods", permanent: true },
      { source: "/guides/cheats", destination: "/cheats", permanent: true },
      { source: "/guides/weapons", destination: "/weapons", permanent: true },
      { source: "/guides/vehicles", destination: "/vehicles", permanent: true },
      { source: "/guides/cars", destination: "/vehicles", permanent: true },
      { source: "/guides/missions", destination: "/missions", permanent: true },
      { source: "/guides/collectibles", destination: "/collectibles", permanent: true },
      { source: "/guides/map", destination: "/map", permanent: true },
      { source: "/guides/locations", destination: "/locations", permanent: true },
      { source: "/guides/characters", destination: "/characters", permanent: true },
      // Batch 3: garage name spelling fix (Mitchel -> Mitchell).
      { source: "/where-to-find/garages/mitchel-auto-center", destination: "/where-to-find/garages/mitchell-auto-center", permanent: true },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
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