import type { MetadataRoute } from "next";

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

    sitemap: "https://gtacompanion.com/sitemap.xml",

    host: "https://gtacompanion.com",
  };
}