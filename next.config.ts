import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

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
        destination: "https://www.gta-companion.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "gta-companion\\.com",
          },
        ],
        destination: "https://www.gta-companion.com/:path*",
        permanent: true,
      },
    ];
  },

  images: {
    contentDispositionType: "inline",
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;