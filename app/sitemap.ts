import type { MetadataRoute } from "next";

import { activities } from "@/data/activities";
import { animals } from "@/data/animals";
import { brands } from "@/data/brands";
import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import { clothing } from "@/data/clothing";
import { stores } from "@/data/stores";
import { locations } from "@/data/locations";
import { manufacturers } from "@/data/manufacturers";
import { news } from "@/data/news";
import { vehicles } from "@/data/vehicles";
import { phoneItems } from "@/data/phone";
import { properties } from "@/data/properties";
import { weapons } from "@/data/weapons";
import { SITE } from "@/lib/site";
import { cheats } from "@/src/data/launch/cheats";
import { missions } from "@/src/data/missions";
import { trophies } from "@/src/data/trophies";
import { fastestCars } from "@/src/data/launch/fastest-cars";
import { mapLocations } from "@/src/data/launch/map-locations";
import { moneyMethods } from "@/src/data/launch/money-methods";
import { collectibleGuides } from "@/src/data/launch/collectible-guides";
import { whereToFindTopics } from "@/src/data/launch/where-to-find";

const baseUrl = SITE.url;

const launchPaths = [
  ...moneyMethods.map((entry) => `/money-methods/${entry.slug}`),
  ...fastestCars.map((entry) => `/fastest-cars/${entry.slug}`),
  ...mapLocations.map((entry) => `/map-locations/${entry.slug}`),
  ...cheats.map((entry) => `/cheats/${entry.slug}`),
  ...missions.map((entry) => `/missions/${entry.slug}`),
  ...trophies.map((entry) => `/trophies/${entry.slug}`),
  ...whereToFindTopics.map((entry) => `/where-to-find/${entry.slug}`),
  ...collectibleGuides.map((entry) => `/collectibles/${entry.slug}`),
];

const detailPaths = [
  ...vehicles.map((entry) => `/vehicles/${entry.slug}`),
  ...characters.map((entry) => `/characters/${entry.slug}`),
  ...locations.map((entry) => `/locations/${entry.slug}`),
  ...businesses.map((entry) => `/businesses/${entry.slug}`),
  ...stores.map((entry) => `/stores/${entry.slug}`),
  ...clothing.map((entry) => `/clothing/${entry.slug}`),
  ...brands.map((entry) => `/brands/${entry.slug}`),
  ...manufacturers.map((entry) => `/manufacturers/${entry.slug}`),
  ...weapons.map((entry) => `/weapons/${entry.slug}`),
  ...animals.map((entry) => `/animals/${entry.slug}`),
  ...activities.map((entry) => `/activities/${entry.slug}`),
  ...news.map((entry) => `/news/${entry.slug}`),
  ...phoneItems.map((entry) => `/phone/${entry.slug}`),
  ...properties.map((entry) => `/properties/${entry.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/app",
    "/gta-6-launch",
    "/about",
    "/news",
    "/vehicles",
    "/characters",
    "/locations",
    "/map",
    "/timeline",
    "/media",
    "/guides",
    "/money-methods",
    "/fastest-cars",
    "/map-locations",
    "/ammu-nation-locations",
    "/shooting-ranges",
    "/where-to-find",
    "/cheats",
    "/missions",
    "/trophies",
    "/launch",
    "/faq",
    "/partners",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/weapons",
    "/businesses",
    "/stores",
    "/clothing",
    "/manufacturers",
    "/brands",
    "/activities",
    "/animals",
    "/properties",
    "/collectibles",
    "/phone",
    "/how-long-is-gta-6",
    "/wanted-system",
    "/gta-6-apps",
    "/girlypop",
    "/radio",
    "/changelog",
    "/roadmap",
    ...launchPaths,
    ...detailPaths,
  ];

  const now = new Date();
  const highPriority = new Set([
    "/gta-6-launch",
    "/map",
    "/missions",
    "/trophies",
    "/vehicles",
    "/ammu-nation-locations",
    "/shooting-ranges",
    "/where-to-find",
    ...whereToFindTopics.map((entry) => `/where-to-find/${entry.slug}`),
    "/collectibles",
    ...collectibleGuides.map((entry) => `/collectibles/${entry.slug}`),
    "/cheats",
    "/fastest-cars",
  ]);
  const lowPriority = new Set([
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/partners",
    "/changelog",
    "/roadmap",
  ]);

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : highPriority.has(route) ? 0.9 : lowPriority.has(route) ? 0.3 : 0.8,
  }));
}
