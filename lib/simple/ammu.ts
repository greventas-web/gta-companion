import { ammuNationStores, type AmmuNationStore } from "@/src/data/launch/launch-facts";

export const AMMU_COUNTIES: AmmuNationStore["county"][] = [
  "Mariana County",
  "Vice-Dale County",
  "Leonard County",
  "Kelly County",
  "Lummox County",
];

const storePins: Record<string, string> = {
  "Phil’s Ammu-Nation": "confirmed:phils-ammu-nation",
  "Pawn & Gun – Port Gellhorn": "confirmed:pawn-and-gun-port-gellhorn",
};

const areaPins: Record<string, string> = {
  Capri: "confirmed:capri",
  Hamlet: "confirmed:hamlet",
  "Port Gellhorn": "confirmed:port-gellhorn",
  Belville: "confirmed:belville",
  Ambrosia: "confirmed:ambrosia",
  "Mount Kalaga National Park": "confirmed:mount-kalaga-national-park",
  "Ocean Beach, Vice City": "confirmed:ocean-beach",
};

export function ammuSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type AmmuStoreCard = AmmuNationStore & {
  slug: string;
  pin?: string;
  exactPin: boolean;
};

export const ammuStores: AmmuStoreCard[] = ammuNationStores.map((store) => ({
  ...store,
  slug: ammuSlug(store.name),
  pin: storePins[store.name] ?? areaPins[store.area],
  exactPin: Boolean(storePins[store.name]),
}));

export function findAmmuStore(slug: string) {
  return ammuStores.find((store) => store.slug === slug);
}

export const ammuPinIds = [...Object.values(storePins), ...Object.values(areaPins)];
