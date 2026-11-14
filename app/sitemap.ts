import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";
import { cheats } from "@/src/data/launch/cheats";
import { fastestCars } from "@/src/data/launch/fastest-cars";
import { mapLocations } from "@/src/data/launch/map-locations";
import { moneyMethods } from "@/src/data/launch/money-methods";

const baseUrl = SITE.url;

const launchPaths = [
  ...moneyMethods.map((entry) => `/money-methods/${entry.slug}`),
  ...fastestCars.map((entry) => `/fastest-cars/${entry.slug}`),
  ...mapLocations.map((entry) => `/map-locations/${entry.slug}`),
  ...cheats.map((entry) => `/cheats/${entry.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/gta-6-launch",
    "/map",
    "/about",
    "/news",
    "/vehicles",
    "/characters",
    "/locations",
    "/timeline",
    "/media",
    "/guides",
    "/money-methods",
    "/fastest-cars",
    "/map-locations",
    "/cheats",
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
    ...launchPaths,
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: route === "" ? 1 : route === "/gta-6-launch" || route === "/map" ? 0.9 : 0.8,
  }));
}
