export interface Character {
  id: number;

  slug: string;

  name: string;

  image: string;

  role: string;

  status: string;

  description: string;

  firstAppearance: string;

  gallery: string[];

  relatedVehicles?: string[];

  relatedLocations?: string[];

  relatedBusinesses?: string[];

  relatedBrands?: string[];
}