export interface Vehicle {
  id: number;
  name: string;
  category: string;
  manufacturer: string;
  topSpeed: string;
  status: "Confirmed" | "Rumored";
}