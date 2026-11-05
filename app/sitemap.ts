import type { MetadataRoute } from "next";

const baseUrl = "https://gta-companion.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/news",
    "/vehicles",
    "/characters",
    "/locations",
    "/timeline",
    "/media",
    "/guides",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/map",
    "/weapons",
    "/businesses",
    "/manufacturers",
    "/brands",
    "/activities",
    "/animals",
    "/properties",
    "/collectibles",
    "/radio",
    "/search",
    "/changelog",
    "/roadmap",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}