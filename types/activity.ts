export interface Activity {
  id: number;

  slug: string;

  name: string;

  category: string;

  location: string;

  image: string;

  imageAlt?: string;

  imageRepresentative?: boolean;

  description: string;

  firstAppearance: string;

  gallery?: string[];

  sources?: { label: string; href?: string }[];

  related?: { title: string; href: string }[];
}