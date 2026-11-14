export interface Brand {
  id: number;

  slug: string;

  name: string;

  category: string;

  image: string;

  imageAlt?: string;

  imageRepresentative?: boolean;

  description: string;

  firstAppearance: string;

  gallery?: string[];

  status?: string;
}