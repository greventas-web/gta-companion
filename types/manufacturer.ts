export interface Manufacturer {
  id: number;

  name: string;
  slug: string;

  logo: string;

  country: string;

  description: string;

  founded?: string;

  website?: string;

  vehicleCount?: number;
}