/**
 * Thin-page policy.
 *
 * Google AdSense does not allow ads on screens "without publisher-content or
 * with low-value content" (Publisher Policies, Inventory value). A Nov 28, 2026
 * crawl of the sitemap found that most database-style detail pages carry fewer
 * than ~60 words of their own text. Those pages stay online and linked for
 * visitors, but they are kept out of the sitemap and marked noindex until each
 * one has real commentary. To bring a section back, remove it from
 * THIN_SECTIONS (and from the sitemap exclusions that read it).
 */
import type { Metadata } from "next";

import { fenceGuidePaths } from "@/src/data/launch/fence-guide";

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
]);

/** Single pages kept out of the sitemap because they are status pages, not content. */
export const THIN_PAGES: ReadonlySet<string> = new Set(["/roadmap", "/changelog"]);

/** Robots value for a thin page: not indexed, but links are still followed. */
export const THIN_ROBOTS: NonNullable<Metadata["robots"]> = { index: false, follow: true };

export function isThinPath(path: string): boolean {
  if (INDEXED_PATHS.has(path)) return false;
  if (THIN_PAGES.has(path)) return true;
  const parts = path.split("/").filter(Boolean);
  // where-to-find/<topic>/<place> leaf pages (not the topic hubs).
  if (parts[0] === "where-to-find" && parts.length >= 3) return true;
  return parts.length >= 2 && THIN_SECTIONS.has(parts[0]);
}

export function withThinRobots(meta: Metadata): Metadata {
  return { ...meta, robots: THIN_ROBOTS };
}
