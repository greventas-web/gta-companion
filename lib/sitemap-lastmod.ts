import { execFileSync } from "node:child_process";

import { news } from "@/data/news";

/**
 * Real lastmod values for the sitemap.
 *
 * News posts use the date stored on the article. Other URLs use the newest
 * git commit that touched that page's source, read at build time.
 * A shallow clone collapses every file onto one commit, which is the same
 * fake stamp as `new Date()`. In that case git dates are omitted.
 */

const SECTION_FILES: Record<string, string[]> = {
  vehicles: ["data/vehicles/index.ts", "data/vehicles/fill.ts", "app/vehicles/page.tsx", "app/vehicles/[id]/page.tsx"],
  characters: ["data/characters.ts", "app/characters/page.tsx", "app/characters/[slug]/page.tsx"],
  locations: ["data/locations.ts", "src/data/launch/expansion.ts", "app/locations/page.tsx", "app/locations/[slug]/page.tsx"],
  businesses: ["data/businesses.ts", "src/data/launch/expansion.ts", "app/businesses/page.tsx", "app/businesses/[slug]/page.tsx"],
  stores: ["data/stores.ts", "app/stores/page.tsx", "app/stores/[slug]/page.tsx"],
  clothing: ["data/clothing.ts", "app/clothing/page.tsx", "app/clothing/[slug]/page.tsx"],
  brands: ["data/brands.ts", "src/data/launch/expansion.ts", "app/brands/page.tsx", "app/brands/[slug]/page.tsx"],
  manufacturers: ["data/manufacturers.ts", "app/manufacturers/page.tsx", "app/manufacturers/[slug]/page.tsx"],
  weapons: ["data/weapons.ts", "src/data/weapons/launch-weapons.ts", "app/weapons/page.tsx", "app/weapons/[slug]/page.tsx"],
  animals: ["data/animals.ts", "app/animals/page.tsx", "app/animals/[slug]/page.tsx"],
  activities: ["data/activities.ts", "app/activities/page.tsx", "app/activities/[slug]/page.tsx"],
  news: ["data/news.ts", "app/news/page.tsx", "app/news/[slug]/page.tsx"],
  phone: ["data/phone.ts", "app/phone/page.tsx", "app/phone/[slug]/page.tsx"],
  properties: ["data/properties.ts", "app/properties/page.tsx", "app/properties/[slug]/page.tsx"],
  guides: ["src/data/launch/quick-guides.ts", "app/guides/page.tsx", "app/guides/[slug]/page.tsx"],
  "money-methods": ["src/data/launch/money-methods.ts", "app/money-methods/page.tsx", "app/money-methods/[slug]/page.tsx"],
  "fastest-cars": ["app/fastest-cars/page.tsx", "data/vehicles/fill.ts", "src/data/launch/fastest-cars.ts"],
  "map-locations": ["src/data/launch/map-locations.ts", "app/map-locations/page.tsx", "app/map-locations/[slug]/page.tsx"],
  cheats: ["src/data/launch/cheats.ts", "src/data/launch/cheat-list.ts", "app/cheats/page.tsx", "app/cheats/[slug]/page.tsx"],
  missions: ["src/data/missions/index.ts", "src/data/missions/fill.ts", "app/missions/page.tsx", "app/missions/[slug]/page.tsx"],
  trophies: ["src/data/trophies/index.ts", "app/trophies/page.tsx", "app/trophies/[slug]/page.tsx"],
  "where-to-find": ["src/data/launch/where-to-find.ts", "app/where-to-find/page.tsx", "app/where-to-find/[topic]/page.tsx"],
  collectibles: ["src/data/launch/collectible-guides.ts", "app/collectibles/page.tsx", "app/collectibles/[slug]/page.tsx"],
  "shooting-ranges": ["src/data/launch/shooting-ranges.ts", "app/shooting-ranges/page.tsx", "app/shooting-ranges/[slug]/page.tsx"],
  challenges: ["src/data/launch/challenges.ts", "app/challenges/page.tsx", "app/challenges/[slug]/page.tsx"],
  "ammu-nation-locations": ["lib/simple/ammu.ts", "app/ammu-nation-locations/page.tsx", "app/ammu-nation-locations/[slug]/page.tsx"],
  radio: ["lib/simple/radio.ts", "app/radio/page.tsx", "app/radio/[slug]/page.tsx"],
  map: ["app/map/page.tsx", "src/data/map/locations.json", "src/data/map/from-seed.ts", "src/data/map/placements.ts"],
  "gta-6-launch": ["app/gta-6-launch/page.tsx", "src/data/launch/gta6-launch.ts"],
  updates: ["app/updates/page.tsx", "lib/updates.ts"],
  launch: ["app/launch/page.tsx"],
  timeline: ["app/timeline/page.tsx", "src/data/timeline/timeline.ts"],
};

let gitDates: Map<string, number> | null | undefined;

function loadGitDates(): Map<string, number> | null {
  if (gitDates !== undefined) return gitDates;
  gitDates = null;
  try {
    const shallow = execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
      encoding: "utf8",
    }).trim();
    if (shallow === "true") return null;

    const log = execFileSync("git", ["log", "--pretty=format:%cI", "--name-only"], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
    const dates = new Map<string, number>();
    let current = NaN;
    for (const line of log.split("\n")) {
      if (!line) continue;
      if (/^\d{4}-\d{2}-\d{2}T/.test(line)) {
        current = Date.parse(line);
        continue;
      }
      if (!Number.isFinite(current) || dates.has(line)) continue;
      dates.set(line, current);
    }
    if (new Set(dates.values()).size < 2) return null;
    gitDates = dates;
    return dates;
  } catch {
    return null;
  }
}

function filesFor(route: string): string[] {
  const parts = route.split("/").filter(Boolean);
  if (parts.length === 0) return ["app/page.tsx"];
  return SECTION_FILES[parts[0]] ?? [`app/${parts[0]}/page.tsx`];
}

function newestGit(route: string): Date | undefined {
  const dates = loadGitDates();
  if (!dates) return undefined;
  let best = 0;
  for (const file of filesFor(route)) {
    const time = dates.get(file);
    if (time && time > best) best = time;
  }
  return best ? new Date(best) : undefined;
}

function newsDate(route: string): Date | undefined {
  if (route === "/news") {
    const times = news.map((article) => Date.parse(`${article.date}T00:00:00.000Z`)).filter(Number.isFinite);
    return times.length ? new Date(Math.max(...times)) : undefined;
  }
  if (!route.startsWith("/news/")) return undefined;
  const article = news.find((item) => item.slug === route.slice("/news/".length));
  if (!article?.date || !/^\d{4}-\d{2}-\d{2}$/.test(article.date)) return undefined;
  const time = Date.parse(`${article.date}T00:00:00.000Z`);
  return Number.isFinite(time) ? new Date(time) : undefined;
}

/** Undefined when no trustworthy date exists. Callers must omit lastmod then. */
export function lastModifiedFor(route: string): Date | undefined {
  return newsDate(route) ?? newestGit(route);
}
