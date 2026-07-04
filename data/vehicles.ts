import { Vehicle } from "@/types/vehicle";

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Bravado Banshee",
    category: "Sports",
    manufacturer: "Bravado",
    topSpeed: "Unknown",
    status: "Confirmed",
    image: "/vehicles/banshee.webp",
  },
  {
    id: 2,
    name: "Vapid Dominator",
    category: "Muscle",
    manufacturer: "Vapid",
    topSpeed: "Unknown",
    status: "Confirmed",
    image: "/vehicles/dominator.webp",
  },
  {
    id: 3,
    name: "Pegassi Ignus",
    category: "Super",
    manufacturer: "Pegassi",
    topSpeed: "Unknown",
    status: "Rumored",
    image: "/vehicles/ignus.webp",
  },
];