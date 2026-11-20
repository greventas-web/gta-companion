export interface Vehicle {
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

  status: string;

  gallery: string[];

  // Optional fields (used by detail pages)

  topSpeed?: string;

  drivetrain?: string;

  transmission?: string;

  seats?: number;

  class?: string;

  price?: string;

  engine?: string;

  fuelType?: string;

  weight?: string;

  country?: string;

  inspiration?: string;

  introducedIn?: string;

  source?: string;

  /** Label for the source link. Defaults to "Rockstar Games". */
  sourceLabel?: string;

  relatedVehicles?: string[];

  /** In-game stat panel bars, out of 10 (launch-week guides, not measured speeds). */
  stats?: { speed?: number; acceleration?: number; handling?: number };

  /** Plain-language "where to find it" answer. */
  whereToFind?: string;

  /** Every source behind the filled facts. */
  sources?: { label: string; href: string }[];
}