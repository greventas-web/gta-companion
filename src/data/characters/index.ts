import { Character } from "@/types/character";
import {
  characterSwitching,
  relationshipSystem,
} from "@/src/data/gameplay/confirmed";

export const characters: Character[] = [
  {
    id: 1,
    slug: "jason-duval",
    name: "Jason Duval",
    image: "/images/characters/jason.jpg",
    role: "Protagonist",
    status: "Confirmed",
    description:
      "Jason Duval is one of the two playable protagonists in Grand Theft Auto VI. Rockstar says he grew up around grifters and crooks. He is searching for an easier life, but trouble continues to find him.",
    details: [characterSwitching, relationshipSystem],
    firstAppearance: "Trailer 1",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["vice-city", "leonida-keys"],
    relatedBusinesses: ["brian-boat-works"],
    relatedBrands: [],
  },

  {
    id: 2,
    slug: "lucia-caminos",
    name: "Lucia Caminos",
    image: "/images/characters/lucia.jpg",
    role: "Protagonist",
    status: "Confirmed",
    description:
      "Lucia Caminos is one of the two playable protagonists in Grand Theft Auto VI. Recently released from prison, she is determined to build a better future through calculated decisions.",
    details: [characterSwitching, relationshipSystem],
    firstAppearance: "Trailer 1",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["vice-city"],
    relatedBusinesses: [],
    relatedBrands: [],
  },

  {
    id: 3,
    slug: "cal-hampton",
    name: "Cal Hampton",
    image: "/images/characters/cal.jpg",
    role: "Supporting Character",
    status: "Confirmed",
    description:
      "Jason's friend and a fellow associate of Brian's. Cal feels safest at home, snooping on Coast Guard comms with a few beers and some private browser tabs open.",
    firstAppearance: "Rockstar Games Website",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["grassrivers"],
    relatedBusinesses: [],
    relatedBrands: [],
  },

  {
    id: 4,
    slug: "boobie-ike",
    name: "Boobie Ike",
    image: "/images/characters/boobie.jpg",
    role: "Business Owner",
    status: "Confirmed",
    description:
      "Boobie Ike is a Vice City entrepreneur with businesses spanning entertainment, music and real estate.",
    firstAppearance: "Rockstar Games Website",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["vice-city"],
    relatedBusinesses: ["only-raw-records", "jack-of-hearts"],
    relatedBrands: ["only-raw-records"],
  },

  {
    id: 5,
    slug: "drequan-priest",
    name: "Dre'Quan Priest",
    image: "/images/characters/drequan.jpg",
    role: "Music Producer",
    status: "Confirmed",
    description:
      "Dre'Quan Priest is building his music career through Only Raw Records.",
    firstAppearance: "Rockstar Games Website",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["vice-city"],
    relatedBusinesses: ["only-raw-records"],
    relatedBrands: ["only-raw-records"],
  },

  {
    id: 6,
    slug: "real-dimez",
    name: "Real Dimez",
    image: "/images/characters/realdimez.jpg",
    role: "Music Duo",
    status: "Confirmed",
    description:
      "Real Dimez are an up-and-coming rap duo signed to Only Raw Records.",
    firstAppearance: "Rockstar Games Website",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["vice-city"],
    relatedBusinesses: ["only-raw-records"],
    relatedBrands: ["only-raw-records"],
  },

  {
    id: 7,
    slug: "raul-bautista",
    name: "Raul Bautista",
    image: "/images/characters/raul.jpg",
    role: "Bank Robber",
    status: "Confirmed",
    description:
      "Raul Bautista is an experienced bank robber always searching for talented people willing to take dangerous risks.",
    firstAppearance: "Rockstar Games Website",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["vice-city"],
    relatedBusinesses: [],
    relatedBrands: [],
  },

  {
    id: 8,
    slug: "brian-heder",
    name: "Brian Heder",
    image: "/images/characters/brian.jpg",
    role: "Drug Smuggler",
    status: "Confirmed",
    description:
      "Brian Heder moves product through his boat yard with his third wife, Lori, and lets Jason live rent-free at one of his properties in exchange for help with local shakedowns.",
    firstAppearance: "Rockstar Games Website",
    gallery: [],
    relatedVehicles: [],
    relatedLocations: ["leonida-keys"],
    relatedBusinesses: ["brian-boat-works"],
    relatedBrands: [],
  },
];