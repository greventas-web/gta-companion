export interface Vehicle {
  id: number;

  slug: string;

  name: string;
  manufacturer: string;
  category: string;

  image: string;
  gallery?: string[];

  price: string;
  topSpeed: string;
  drivetrain: string;
  seats: number;

  description: string;

  firstAppearance: string;

  locations?: string[];
  variants?: string[];
  relatedGuides?: string[];
}