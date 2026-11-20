export type MissionType = "story" | "side" | "edition";

export type MissionSource = {
  label: string;
  href: string;
};

/**
 * One confirmed mission. `summary` is public. `rewards` and `spoiler` stay
 * behind the reveal on the mission page.
 */
export type Mission = {
  slug: string;
  /** Public list name. Say in `summary` when Rockstar used a different label. */
  name: string;
  type: MissionType;
  /** Mission giver, when one has been named. */
  giver?: string;
  /** Character the job is tied to, when one has been named. */
  character?: string;
  /** Slug on /characters, when `character` is one of those profiles. */
  characterSlug?: string;
  region: string;
  /** Slug on /locations, when the region has a page. */
  regionSlug?: string;
  /** Neighborhood or start point, when one has been named. */
  startArea?: string;
  /** Named place tied to the start, when one has been published. */
  place?: string;
  /** Edition gate, when the job is not in every copy of the game. */
  edition?: string;
  /** Map pin id, including its prefix (`confirmed:` or `ingame:`). */
  mapPinId?: string;
  /** Public note about the pin, such as when the point is approximate. */
  mapNote?: string;
  /** Name, place, and region only. No plot. */
  summary: string;
  /** Officially stated rewards. Hidden until the visitor reveals them. */
  rewards?: string;
  /** Official detail past a name. Hidden until the visitor reveals it. */
  spoiler?: string;
  /** Story chapter number, for story missions in the in-game recap order. */
  chapter?: number;
  /** Chapter title, when a source has published it. */
  chapterName?: string;
  /** Position inside the chapter, as the in-game Story Recap lists it. */
  order?: number;
  /**
   * Real screenshot or official still for this mission. When set it replaces
   * the painted GTA Companion artwork (and its "Artwork" tag) everywhere.
   */
  image?: string;
  sources: MissionSource[];
};
