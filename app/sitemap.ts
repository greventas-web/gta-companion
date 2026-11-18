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
import { weapons } from "@/data/weapons";
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
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
    "/cheats",
    "/launch",
    "/faq",
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
    "/radio",
    "/search",
    "/changelog",
    "/roadmap",
    ...launchPaths,
    ...detailPaths,
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: route === "" ? 1 : route === "/gta-6-launch" ? 0.9 : 0.8,
  }));
}
