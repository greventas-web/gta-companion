export interface Vehicle {
  id: number;

  slug: string;

  name: string;

  manufacturer: string;

  category: string;

  image: string;

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

  relatedVehicles?: string[];
}