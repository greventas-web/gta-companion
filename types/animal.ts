export interface Animal {
  id: number;

  slug: string;

  name: string;

  category: string;

  habitat: string;

  image: string;

  imageAlt?: string;

  imageRepresentative?: boolean;

  description: string;

  firstAppearance: string;

  gallery?: string[];

  status?: string;

  sources?: { label: string; href: string }[];
}