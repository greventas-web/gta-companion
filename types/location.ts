export interface Location {
  id: number;

  slug: string;

  name: string;

  region: string;

  type: string;

  image: string;

  description: string;

  firstAppearance: string;

  gallery?: string[];
}