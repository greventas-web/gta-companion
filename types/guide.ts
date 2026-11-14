export interface Guide {
  id: number;

  title: string;
  slug: string;

  category: string;

  image: string;

  imageRepresentative?: boolean;

  description: string;

  readingTime: string;

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  relatedVehicles?: string[];

  listed?: boolean;
}