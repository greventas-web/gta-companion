export interface Brand {
  id: number;

  slug: string;

  name: string;

  category: string;

  image: string;

  description: string;

  firstAppearance: string;

  gallery?: string[];
}