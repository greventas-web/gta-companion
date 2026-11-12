export type BusinessPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export interface Business {
  id: number;

  slug: string;

  name: string;

  category: string;

  location: string;

  image: string;

  imageAlt?: string;

  imageCaption?: string;

  description: string;

  firstAppearance: string;

  gallery?: BusinessPhoto[];

  // Optional fields

  status?: string;

  owner?: string;

  district?: string;

  founded?: string;

  type?: string;

  website?: string;

  relatedBusinesses?: string[];
}