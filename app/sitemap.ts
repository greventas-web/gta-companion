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
import { cheatPages, cheats } from "@/src/data/launch/cheats";
import { missions } from "@/src/data/missions";
import { trophies } from "@/src/data/trophies";
import { fastestCars } from "@/src/data/launch/fastest-cars";
import { mapLocations } from "@/src/data/launch/map-locations";
import { extraPages, type ExtraCategory } from "@/src/data/launch/expansion";
import { moneyMethods } from "@/src/data/launch/money-methods";
import { collectibleGuides, collectibleItemPages } from "@/src/data/launch/collectible-guides";
import { whereToFindTopics, wherePlaces } from "@/src/data/launch/where-to-find";
import { shootingRanges } from "@/src/data/launch/shooting-ranges";
import { challenges } from "@/src/data/launch/challenges";
import { ammuStores } from "@/lib/simple/ammu";
import { quickGuides } from "@/src/data/launch/quick-guides";
import { stationPages } from "@/lib/simple/radio";
import { lastModifiedFor } from "@/lib/sitemap-lastmod";
import { isThinPath } from "@/lib/thin-content";

const baseUrl = SITE.url;

const quickGuidePaths = quickGuides.map((guide) => `/guides/${guide.slug}`);

const launchPaths = [
  ...quickGuidePaths,
  ...moneyMethods.map((entry) => `/money-methods/${entry.slug}`),
  ...fastestCars.map((entry) => `/fastest-cars/${entry.slug}`),
  ...mapLocations.map((entry) => `/map-locations/${entry.slug}`),
  ...cheats.map((entry) => `/cheats/${entry.slug}`),
  ...missions.map((entry) => `/missions/${entry.slug}`),
  ...trophies.map((entry) => `/trophies/${entry.slug}`),
  ...whereToFindTopics.map((entry) => `/where-to-find/${entry.slug}`),
  ...collectibleGuides.map((entry) => `/collectibles/${entry.slug}`),
  ...shootingRanges.map((entry) => `/shooting-ranges/${entry.slug}`),
  ...challenges.map((entry) => `/challenges/${entry.slug}`),
  ...ammuStores.map((store) => `/ammu-nation-locations/${store.slug}`),
  ...stationPages.map((station) => `/radio/${station.slug}`),
  ...whereToFindTopics.flatMap((topic) => wherePlaces(topic).map((place) => `/where-to-find/${topic.slug}/${place.slug}`)),
  ...cheatPages().map((entry) => `/cheats/${entry.group.slug}/${entry.slug}`),
  ...collectibleItemPages().map(({ guide, item }) => `/collectibles/${guide.slug}/${item.slug}`),
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
  ...(["locations", "businesses", "stores", "characters", "brands", "clothing", "animals", "activities"] as ExtraCategory[]).flatMap(
    (category) => extraPages(category).map((entry) => `/${category}/${entry.slug}`)
  ),
  ...news.map((entry) => `/news/${entry.slug}`),
  ...phoneItems.map((entry) => `/phone/${entry.slug}`),
  ...properties.map((entry) => `/properties/${entry.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = [
    "",
    "/app",
    "/gta-6-launch",
    "/updates",
    "/about",
    "/news",
    "/community",
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
    "/challenges",
    "/where-to-find",
    "/cheats",
    "/missions",
    "/trophies",
    "/launch",
    "/faq",
    "/pro",
    "/partners",
    "/contact",
    "/privacy",
    "/terms",
    "/refunds",
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

  // Keep thin database pages and status pages out of the sitemap (lib/thin-content.ts),
  // plus vehicle names that are not in GTA 6.
  const notInGame = new Set(
    vehicles.filter((entry) => entry.status !== "Confirmed").map((entry) => `/vehicles/${entry.slug}`)
  );
  const routes = allRoutes.filter((route) => !isThinPath(route) && !notInGame.has(route));

  const highPriority = new Set([
    "/gta-6-launch",
    "/updates",
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
    "/challenges",
    "/properties",
    "/cheats",
    "/fastest-cars",
    ...quickGuidePaths,
  ]);
  const lowPriority = new Set([
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/refunds",
    "/cookies",
    "/partners",
    "/changelog",
    "/roadmap",
  ]);

  return routes.map((route) => {
    const lastModified = lastModifiedFor(route);
    return {
      url: `${baseUrl}${route}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : highPriority.has(route) ? 0.9 : lowPriority.has(route) ? 0.3 : 0.8,
    };
  });
}
