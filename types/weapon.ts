export interface Weapon {
  id: number;

  slug: string;

  name: string;

  category: string;

  image: string;

  description: string;

  firstAppearance: string;

  ammunition: string;

  gallery?: string[];
}