export type SearchCategory =
  | "Vehicle"
  | "Character"
  | "Location"
  | "Business"
  | "Manufacturer"
  | "Brand"
  | "Weapon"
  | "Animal"
  | "Activity"
  | "Guide"
  | "News";

export type SearchItem = {
  id: number;
  title: string;
  href: string;
  category: SearchCategory;
  image?: string;
  description?: string;
};