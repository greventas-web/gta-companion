export type SearchCategory =
  | "Vehicle"
  | "Character"
  | "Location"
  | "Business"
  | "Store"
  | "Clothing"
  | "Manufacturer"
  | "Brand"
  | "Weapon"
  | "Animal"
  | "Activity"
  | "Guide"
  | "News"
  | "Phone"
  | "Property";

export type SearchItem = {
  id: number;
  title: string;
  href: string;
  category: SearchCategory;
  image?: string;
  description?: string;
};