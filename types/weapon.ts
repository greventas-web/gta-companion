export interface Weapon {
  id: number;

  slug: string;

  name: string;

  manufacturer: string;

  category: string;

  image: string;

  description: string;

  firstAppearance: string;

  ammunition: string;

  status: string;

  gallery: string[];

  source?: string;
}