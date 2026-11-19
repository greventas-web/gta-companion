import {
  famitsuSources,
  rockstarSupportEditions,
  type CitedSource,
} from "@/src/data/gameplay/confirmed";

export type PropertyLink = {
  href: string;
  label: string;
};

export type PropertyMapLink =
  | { kind: "entity" }
  | {
      kind: "area";
      pinId: string;
      label: string;
      note: string;
    };

export type PropertyRecord = {
  slug: string;
  name: string;
  type: string;
  region: string;
  area: string;
  edition: string;
  howToGet: string;
  summary: string;
  description: string;
  features: readonly string[];
  links: readonly PropertyLink[];
  sources: readonly CitedSource[];
  map: PropertyMapLink;
  /** Real in-game still of this property, from our own footage. */
  image?: string;
};

export const rockstarEditions = {
  label: "Rockstar Editions",
  href: "https://www.rockstargames.com/VI/editions",
} as const satisfies CitedSource;

export const rockstarUltimate = {
  label: "Rockstar Ultimate Edition",
  href: "https://www.rockstargames.com/VI/ultimate-edition",
} as const satisfies CitedSource;

export const leonidaKeysPage = {
  label: "Only in Leonida: Leonida Keys",
  href: "https://www.rockstargames.com/VI/only-in-leonida/leonida-keys",
} as const satisfies CitedSource;

export const propertyStorageNotes = [
  {
    title: "Three vehicle spaces at first",
    body: "Rob Nelson told Famitsu that early in the game you can store three vehicles. Buying garages around the map is how you keep more. If three cars are already stored and you want a new personal vehicle, you sell one to make room. Once a vehicle is personal, you can store weapons in it.",
  },
  {
    title: "Hideouts change by chapter",
    body: "Nelson told Famitsu the story moves chapter by chapter and the hideouts change with it, closer to the camps in Red Dead Redemption 2 than to one permanent safehouse. He also said the area around a hideout works as a safe zone.",
  },
] as const;

export const properties: PropertyRecord[] = [
  {
    slug: "shore-court",
    name: "Shore Court",
    type: "Garage",
    region: "Vice City",
    area: "Ocean Beach",
    edition: "Vintage Vice City Pack",
    howToGet:
      "It comes with the Vintage Vice City Pack. Rockstar Support says that pack is included with purchases before November 20, 2026. The pack is not limited to the Ultimate Edition.",
    summary:
      "Personal garage near Ocean Beach in the Vintage Vice City Pack, with a weapon locker and a place to leave stolen goods.",
    description:
      "Shore Court is the personal garage Rockstar includes with the Vintage Vice City Pack, near the sand at Ocean Beach. The '55 Vapid Stanier can be stored there.",
    features: [
      "Weapon locker.",
      "A secure place to deposit stolen goods to be fenced.",
      "Storage for the '55 Vapid Stanier, the pack's classic sedan for Shore Drive.",
    ],
    links: [
      { href: "/vehicles/vapid-stanier-1955", label: "'55 Vapid Stanier" },
      { href: "/locations/vice-city", label: "Vice City" },
      { href: "/launch", label: "Editions" },
    ],
    sources: [rockstarEditions, rockstarUltimate, rockstarSupportEditions],
    map: {
      kind: "area",
      pinId: "confirmed:ocean-beach",
      label: "Ocean Beach on the map",
      note: "Rockstar places Shore Court a stone's throw from Ocean Beach. The garage itself has no published map coordinate, so this opens the Ocean Beach area pin.",
    },
  },
  {
    slug: "paradise-garage",
    name: "Paradise Garage",
    type: "Garage",
    region: "Watson Bay",
    area: "Watson Bay",
    edition: "Ultimate Edition",
    howToGet: "Included with the Ultimate Edition.",
    summary:
      "Ultimate Edition garage in Watson Bay, with a weapon locker and a place to leave stolen goods. The Dominator Buggy is stored here.",
    description:
      "Paradise Garage is the Ultimate Edition garage in Watson Bay. Rockstar says the '67 Vapid Dominator Buggy can be stored there.",
    features: [
      "Weapon locker.",
      "A secure place to deposit stolen goods to be fenced.",
      "Storage for the '67 Vapid Dominator Buggy.",
    ],
    links: [
      { href: "/vehicles/vapid-dominator-buggy", label: "'67 Vapid Dominator Buggy" },
      { href: "/launch", label: "Editions" },
    ],
    sources: [rockstarUltimate, rockstarEditions, rockstarSupportEditions],
    map: { kind: "entity" },
  },
  {
    slug: "jasons-place",
    name: "Jason's place in the Keys",
    image: "/images/footage/properties/jasons-place.webp",
    type: "Hideout",
    region: "Leonida Keys",
    area: "Leonida Keys",
    edition: "Not an edition bonus",
    howToGet:
      "Brian Heder lets Jason live at one of Brian's properties in the Keys, without paying rent, if Jason helps with local shakedowns.",
    summary:
      "Jason's first house, on one of Brian Heder's properties in the Leonida Keys. The exact building is not published.",
    description:
      "Jason's first house is in the Leonida Keys, on one of Brian Heder's properties. Rockstar has not named the building or published a coordinate for it.",
    features: [
      "Rockstar's Leonida Keys page says Brian lets Jason live at one of his properties without paying rent, as long as Jason helps with local shakedowns and stops by for Lori's sangria.",
      "Rob Nelson told Famitsu the story begins in the Leonida Keys, and that Jason's first house, which appeared in a trailer, is there.",
      "The exact building is not identified. A community pin for a specific Keys house stays off the map.",
    ],
    links: [
      { href: "/characters/jason-duval", label: "Jason Duval" },
      { href: "/characters/brian-heder", label: "Brian Heder" },
      { href: "/locations/leonida-keys", label: "Leonida Keys" },
      { href: "/businesses/brian-boat-works", label: "Brian's Boat Works" },
    ],
    sources: [leonidaKeysPage, ...famitsuSources],
    map: {
      kind: "area",
      pinId: "confirmed:leonida-keys",
      label: "Leonida Keys on the map",
      note: "Rockstar has not published a coordinate for the house. This opens the Leonida Keys area pin, not a building.",
    },
  },
];

export function findProperty(slug: string) {
  return properties.find((item) => item.slug === slug);
}
