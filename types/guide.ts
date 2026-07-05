export interface Guide {
  id: number;

  title: string;
  slug: string;

  category: string;

  image: string;

  description: string;

  readingTime: string;

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  relatedVehicles?: string[];
}