export interface Brand {
  id: number;

  slug: string;

  name: string;

  category: string;

  image: string;

  imageAlt?: string;

  description: string;

  firstAppearance: string;

  gallery?: string[];

  status?: string;
}