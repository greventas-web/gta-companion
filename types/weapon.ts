export interface Weapon {
  id: number;

  slug: string;

  name: string;

  manufacturer: string;

  category: string;

  image: string;

  imageAlt?: string;

  imageRepresentative?: boolean;

  description: string;

  firstAppearance: string;

  ammunition: string;

  status: string;

  gallery: string[];

  source?: string;

  /** Label for the source link. Defaults to "Rockstar Games". */
  sourceLabel?: string;

  // Launch-day fields (Nov 18, 2026). Only set when a source published them.

  /** Sub-type shown next to the category, e.g. "Revolver". */
  type?: string;

  caliber?: string;

  magazine?: number;

  fireMode?: string;

  /** In-game stat-card bars, out of 10. */
  stats?: {
    damage: number;
    accuracy: number;
    handling: number;
    range: number;
  };

  /** Ammu-Nation price, only when a launch-day guide published it. */
  price?: string;

  /** Plain-language "where to get it" answer. */
  howToGet?: string;

  /** Internal links for "where to get it" (store pages, map pins, cheats). */
  getLinks?: { href: string; label: string }[];

  /** Every source behind this entry. */
  sources?: { label: string; href: string }[];
}