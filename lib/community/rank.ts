import type { FeedSort, TopRange } from "@/lib/community/types";

export function hotRank(score: number, createdAt: string, now = Date.now()): number {
  const ageHours = Math.max(0, (now - Date.parse(createdAt)) / 3_600_000);
  return score / (ageHours + 2) ** 1.4;
}

export function inTopRange(createdAt: string, range: TopRange, now = Date.now()): boolean {
  if (range === "all") return true;
  const age = now - Date.parse(createdAt);
  const window = range === "day" ? 24 * 3_600_000 : 7 * 24 * 3_600_000;
  return age >= 0 && age <= window;
}

export function compareFeed(
  sort: FeedSort,
  range: TopRange,
  left: { score: number; createdAt: string },
  right: { score: number; createdAt: string },
  now = Date.now()
): number {
  if (sort === "new") return right.createdAt.localeCompare(left.createdAt);
  if (sort === "top") {
    if (right.score !== left.score) return right.score - left.score;
    return right.createdAt.localeCompare(left.createdAt);
  }
  const hot = hotRank(right.score, right.createdAt, now) - hotRank(left.score, left.createdAt, now);
  if (hot !== 0) return hot;
  return right.createdAt.localeCompare(left.createdAt);
}

export function parseSort(value: string | null): FeedSort {
  if (value === "new" || value === "top" || value === "hot") return value;
  return "hot";
}

export function parseRange(value: string | null): TopRange {
  if (value === "day" || value === "week" || value === "all") return value;
  return "day";
}
