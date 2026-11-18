import type { Trophy } from "@/types/trophy";

/**
 * PlayStation trophies and Xbox achievements for Grand Theft Auto VI.
 *
 * The array stays empty until an official list is public. To add a row:
 *   slug, name, description, platform ("PS5" | "Xbox" | "both"), missable, sources
 * Optional: psGrade, xboxGamerscore, tips, tipsSpoiler, mapPinId
 * `description` and `tips` must stay spoiler-safe unless `tipsSpoiler` is true.
 * Do not invent a name, a count, a grade, or a Gamerscore.
 */
export const trophies: Trophy[] = [];

export const TROPHY_LIST_NOTE = {
  checkedOn: "November 18, 2026",
  sources: [
    {
      label: "PlayStation, Grand Theft Auto VI",
      href: "https://www.playstation.com/en-us/games/grand-theft-auto-vi/",
    },
    {
      label: "Rockstar Games",
      href: "https://www.rockstargames.com/VI",
    },
  ],
} as const;

export function findTrophy(slug: string) {
  return trophies.find((trophy) => trophy.slug === slug);
}

export function trophyPlatformLabel(trophy: Trophy) {
  const parts: string[] = [];

  if (trophy.platform === "PS5" || trophy.platform === "both") {
    parts.push(trophy.psGrade ? `PS5 ${trophy.psGrade}` : "PS5");
  }

  if (trophy.platform === "Xbox" || trophy.platform === "both") {
    parts.push(
      trophy.xboxGamerscore != null ? `Xbox ${trophy.xboxGamerscore}G` : "Xbox"
    );
  }

  return parts.join(" · ");
}
