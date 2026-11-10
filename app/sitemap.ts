import type { MetadataRoute } from "next";

import { SITE_URL } from "@/src/data/config";
import { launchSections } from "@/src/data/launch";

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
  "/launch",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
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
  ...launchSections.map((section) => section.path),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const uniqueRoutes = [...new Set(routes)];
  const now = new Date();

  return uniqueRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}
