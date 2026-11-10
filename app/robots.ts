import type { MetadataRoute } from "next";

import { SITE_URL } from "@/src/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/dashboard/",
        "/login/",
        "/register/",
        "/profile",
        "/settings",
        "/favorites",
      ],
    },

    sitemap: `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}
