export interface Manufacturer {
  id: number;

  slug: string;

  name: string;

  logo: string;

  country: string;

  description: string;

  founded?: string;

  headquarters?: string;

  parentCompany?: string;

  industry?: string;

  website?: string;

  vehicleCount: number;

  status: string;

  gallery: string[];
}