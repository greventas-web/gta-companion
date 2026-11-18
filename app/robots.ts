import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

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
        "/map/admin",
      ],
    },

    sitemap: `${SITE.url}/sitemap.xml`,

    host: SITE.url,
  };
}
