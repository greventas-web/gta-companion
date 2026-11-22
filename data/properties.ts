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
  /** "$4,000" style price, when the garage is for sale. */
  price?: string;
  howToGet: string;
  summary: string;
  description: string;
  features: readonly string[];
  links: readonly PropertyLink[];
  sources: readonly CitedSource[];
  map: PropertyMapLink;
  /** Real in-game still of this property, from our own footage. */
  image?: string;
  imageAlt?: string;
};

export const rockstarEditions = {
  label: "Rockstar Editions",
  href: "https://www.rockstargames.com/VI/editions",
} as const satisfies CitedSource;

export const rockstarUltimate = {
  label: "Rockstar Ultimate Edition",
  href: "https://www.rockstargames.com/VI/ultimate-edition",
} as const satisfies CitedSource;

const powerpyxGarages = {
  label: "PowerPyx, all garage locations",
  href: "https://www.powerpyx.com/gta-6-all-garage-locations/",
} as const satisfies CitedSource;

const gamespotGarages = {
  label: "GameSpot, all garage locations and prices",
  href: "https://www.gamespot.com/articles/all-garage-locations-and-prices-in-gta-6/",
} as const satisfies CitedSource;

const gamesradarTrophies = {
  label: "GamesRadar+, trophy and achievement list",
  href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-trophy-achievement-list/",
} as const satisfies CitedSource;

const garageSources = [powerpyxGarages, gamespotGarages, gamesradarTrophies] as const;

/** One of the 8 garages for sale (content batch 3). */
function saleGarage(
  slug: string,
  name: string,
  area: string,
  region: string,
  price: string | undefined,
  pinId: string,
  pinLabel: string
): PropertyRecord {
  return {
    slug,
    name,
    type: "Garage for sale",
    region,
    area: area.charAt(0).toUpperCase() + area.slice(1),
    edition: "Not an edition bonus",
    price,
    howToGet: "Buy it in the Vice City Real Estate app from Chapter 2, after Daily Driver, or at the garage.",
    summary: `A garage for one vehicle in ${area}. Buy it in the Vice City Real Estate app from Chapter 2.`,
    description: `${name} is one of the 8 garages you can buy. It holds one vehicle.`,
    features: ["Holds 1 vehicle.", "Counts toward the Little Boxes trophy."],
    links: [
      { href: "/where-to-find/garages", label: "All garages" },
      { href: "/phone/vice-city-real-estate", label: "Vice City Real Estate app" },
      { href: "/trophies/little-boxes", label: "Little Boxes trophy" },
    ],
    sources: garageSources,
    map: {
      kind: "area",
      pinId,
      label: pinLabel,
      note: "The garage has no exact pin yet, so this opens the area.",
    },
  };
}

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


/** Content batch 3: the 8 garages for sale, the first story garage, and the Chapter 2 motel. */
properties.push(
  saleGarage("mitchell-auto-center", "Mitchell Auto Center", "central Kelly County, east of Port Gellhorn", "Kelly County", "$4,000", "confirmed:port-gellhorn", "Port Gellhorn on the map"),
  saleGarage("persistence-road-garage", "Persistence Road Garage", "western Belville, Leonard County", "Leonard County", undefined, "confirmed:belville", "Belville on the map"),
  saleGarage("7th-avenue-garage", "7th Avenue Garage", "Vice-Dale County, east of the airport", "Vice-Dale County", "$12,000", "confirmed:vice-city-international-airport", "The airport on the map"),
  saleGarage("store-n-bolt", "Store ’N’ Bolt", "northern Ambrosia", "Kelly County", "$16,800", "confirmed:ambrosia", "Ambrosia on the map"),
  saleGarage("wyatt-motors", "Wyatt Motors", "central Ambrosia, near the Pay ’n’ Spray", "Kelly County", "$21,600", "confirmed:ambrosia", "Ambrosia on the map"),
  saleGarage("vela-rota-drive-garage", "Vela Rota Drive Garage", "the middle of Capri", "Mariana County", undefined, "confirmed:capri", "Capri on the map"),
  saleGarage("bonita-court-garage", "Bonita Court Garage", "the center of Washington Island", "Vice City", "$34,000", "confirmed:washington-beach", "Washington Beach on the map"),
  saleGarage("atlantic-court-garage", "Atlantic Court Garage", "Ocean Beach, south of the Y Hotel", "Vice City", "$40,000", "confirmed:y-hotel", "The Y Hotel on the map"),
  {
    slug: "port-gellhorn-station-garage",
    name: "Port Gellhorn Station Garage",
    type: "Story garage",
    region: "Kelly County",
    area: "Port Gellhorn",
    edition: "Not an edition bonus",
    howToGet: "Moses gives it to you in Chapter 2, after the mission Daily Driver.",
    summary: "A garage for one vehicle in Port Gellhorn, north of Moses' shop and west of Delights. Moses gives it to you in Chapter 2.",
    description: "Port Gellhorn Station Garage comes with the story. It holds one vehicle.",
    features: ["Holds 1 vehicle.", "Comes with the story, so it does not count for Little Boxes."],
    links: [
      { href: "/where-to-find/garages", label: "All garages" },
      { href: "/characters/moses-watkins", label: "Moses" },
      { href: "/businesses/delights", label: "Delights" },
    ],
    sources: garageSources,
    map: {
      kind: "area",
      pinId: "confirmed:delights",
      label: "Delights on the map",
      note: "The garage is just west of Delights.",
    },
  },
  {
    slug: "starlet-motel",
    name: "Starlet Motel",
    image: "/images/footage/properties/starlet-motel.webp",
    imageAlt: "The Starlet Motel sign beside the road, with the motel office behind it",
    type: "Hideout",
    region: "Kelly County",
    area: "Historic Route 628, Kelly County",
    edition: "Not an edition bonus",
    howToGet: "Jason and Lucia stay here in Chapter 2.",
    summary: "The motel on Historic Route 628 where Jason and Lucia stay in Chapter 2.",
    description: "The Starlet Motel is Jason and Lucia's hideout in Chapter 2.",
    features: ["Chapter 2 hideout."],
    links: [
      { href: "/businesses/starlet-motel", label: "Starlet Motel" },
      { href: "/where-to-find/garages", label: "Garages and safehouses" },
    ],
    sources: [gamespotGarages],
    map: {
      kind: "area",
      pinId: "confirmed:starlet-motel",
      label: "Starlet Motel on the map",
      note: "Opens the Starlet Motel pin.",
    },
  }
);

export function findProperty(slug: string) {
  return properties.find((item) => item.slug === slug);
}
