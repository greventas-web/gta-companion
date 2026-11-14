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
}