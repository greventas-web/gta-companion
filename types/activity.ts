export interface Activity {
  id: number;

  slug: string;

  name: string;

  category: string;

  location: string;

  image: string;

  imageAlt?: string;

  description: string;

  firstAppearance: string;

  gallery?: string[];
}