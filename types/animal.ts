export interface Animal {
  id: number;

  slug: string;

  name: string;

  category: string;

  habitat: string;

  image: string;

  description: string;

  firstAppearance: string;

  gallery?: string[];
}