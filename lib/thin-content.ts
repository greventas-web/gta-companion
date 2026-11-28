/**
 * Thin-page policy.
 *
 * Google AdSense does not allow ads on screens "without publisher-content or
 * with low-value content" (Publisher Policies, Inventory value). Crawls of the
 * live site (Nov 28, 2026) found that most database-style detail pages carry
 * fewer than ~100 words of their own text. Those pages stay online for
 * visitors, but they are kept out of the sitemap and marked noindex (meta tag
 * where the page sets it, plus an X-Robots-Tag header from proxy.ts on every
 * thin path) until each one has real commentary. To bring a section back,
 * remove it from THIN_SECTIONS; to bring a single page back, remove it from
 * lib/thin-paths.ts.
 */
import type { Metadata } from "next";

import { cheatPages } from "@/src/data/launch/cheats";
import { fenceGuidePaths } from "@/src/data/launch/fence-guide";

import { THIN_PATH_LIST } from "./thin-paths";

/** Fence place pages that now have their own guide text. */
const INDEXED_PATHS: ReadonlySet<string> = new Set(fenceGuidePaths);

/** First path segment of detail pages that are too thin to index today. */
export const THIN_SECTIONS: ReadonlySet<string> = new Set([
  "manufacturers",
  "brands",
  "animals",
  "activities",
  "locations",
  "trophies",
  "phone",
  "businesses",
  // Nov 28 second pass: every detail page in these sections had under 100
  // words (median 33 to 66), so the whole section waits for real text.
  "missions",
  "weapons",
  "vehicles",
  "challenges",
  "characters",
  "stores",
  "clothing",
  "properties",
]);

/**
 * Single cheat pages with no confirmed button code. They only repeat the
 * effect and unlock line from the /cheats table, so the table is the page
 * that gets indexed.
 */
const UNCODED_CHEAT_PATHS: readonly string[] = cheatPages()
  .filter((entry) => !entry.cheat.code)
  .map((entry) => `/cheats/${entry.group.slug}/${entry.slug}`);

/** Single pages kept out of the sitemap: status pages, the Pro waitlist, and pages under 100 words. */
export const THIN_PAGES: ReadonlySet<string> = new Set([
  "/roadmap",
  "/changelog",
  "/pro",
  ...THIN_PATH_LIST,
  ...UNCODED_CHEAT_PATHS,
]);

/** Robots value for a thin page: not indexed, but links are still followed. */
export const THIN_ROBOTS: NonNullable<Metadata["robots"]> = { index: false, follow: true };

/** Same rule as an HTTP header, set by proxy.ts. */
export const THIN_ROBOTS_HEADER = "noindex, follow";

export function isThinPath(path: string): boolean {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  if (INDEXED_PATHS.has(clean)) return false;
  if (THIN_PAGES.has(clean)) return true;
  const parts = clean.split("/").filter(Boolean);
  // where-to-find/<topic>/<place> leaf pages (not the topic hubs).
  if (parts[0] === "where-to-find" && parts.length >= 3) return true;
  // Community member profiles have no editorial text.
  if (parts[0] === "community" && parts[1] === "u") return true;
  return parts.length >= 2 && THIN_SECTIONS.has(parts[0]);
}

export function withThinRobots(meta: Metadata): Metadata {
  return { ...meta, robots: THIN_ROBOTS };
}
