export type TrophyPlatform = "PS5" | "Xbox" | "both";

export type TrophyGrade = "bronze" | "silver" | "gold" | "platinum";

export type TrophySource = {
  label: string;
  href: string;
};

/**
 * One published trophy or achievement. Leave the list empty until Sony,
 * Microsoft, or Rockstar publishes the row. Do not invent names.
 */
export type Trophy = {
  slug: string;
  name: string;
  /** Spoiler-safe description from the official list. */
  description: string;
  platform: TrophyPlatform;
  /** PlayStation grade, once Sony publishes it. */
  psGrade?: TrophyGrade;
  /** Xbox Gamerscore, once Microsoft publishes it. */
  xboxGamerscore?: number;
  tips?: string;
  /** When true, `tips` render only after a reveal on the detail page. */
  tipsSpoiler?: boolean;
  missable: boolean;
  /** Map pin id, including its prefix, when the trophy is location-based. */
  mapPinId?: string;
  sources: TrophySource[];
};
