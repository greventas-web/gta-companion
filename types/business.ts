export interface Business {
  id: number;

  slug: string;

  name: string;

  category: string;

  location: string;

  image: string;

  description: string;

  firstAppearance: string;

  gallery?: string[];

  // Optional fields

  status?: string;

  owner?: string;

  district?: string;

  founded?: string;

  type?: string;

  website?: string;

  relatedBusinesses?: string[];
}