import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/offline.html",
        "/dashboard/",
        "/login/",
        "/register/",
        "/profile",
        "/settings",
        "/favorites",
        "/map/admin",
        "/community/admin",
      ],
    },

    sitemap: `${SITE.url}/sitemap.xml`,

    host: SITE.url,
  };
}
