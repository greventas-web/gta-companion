import {
  ingameSourceHref,
  ingameVehicles,
  INGAME_SOURCE_LABEL,
  type IngameEntry,
} from "@/lib/ingame";
import type { Vehicle } from "@/types/vehicle";

import { aircraftVehicles } from "./aircraft";
import { bikeVehicles } from "./bikes";
import { boatVehicles } from "./boats";
import { commercialVehicles } from "./commercial";
import { compactVehicles } from "./compact";
import { coupeVehicles } from "./coupe";
import { muscleVehicles } from "./muscle";
import { offRoadVehicles } from "./offRoad";
import { sedanVehicles } from "./sedan";
import { sportsVehicles } from "./sports";
import { superVehicles } from "./super";
import { suvVehicles } from "./suv";
import { truckVehicles } from "./truck";
import { utilityVehicles } from "./utility";
import { vanVehicles } from "./van";

const baseCatalog = [
  ...aircraftVehicles,
  ...bikeVehicles,
  ...boatVehicles,
  ...commercialVehicles,
  ...compactVehicles,
  ...coupeVehicles,
  ...muscleVehicles,
  ...offRoadVehicles,
  ...sedanVehicles,
  ...sportsVehicles,
  ...superVehicles,
  ...suvVehicles,
  ...truckVehicles,
  ...utilityVehicles,
  ...vanVehicles,
];

const ingameBySlug = new Map(ingameVehicles.map((entry) => [entry.slug, entry]));

/** New vehicles first found in our gameplay, not in the pre-launch catalog. */
const ingameOnly: Vehicle[] = ingameVehicles
  .filter((entry) => !baseCatalog.some((vehicle) => vehicle.slug === entry.slug))
  .map((entry, index) => ({
    id: 10000 + index,
    slug: entry.slug,
    name: entry.name ?? entry.slug,
    manufacturer: entry.manufacturer ?? "Not shown",
    category: entry.category ?? "Other",
    image: entry.image ?? "",
    description: entry.description ?? "",
    firstAppearance: "Grand Theft Auto VI gameplay",
    status: "Confirmed",
    gallery: [],
  }));

const catalog = [...baseCatalog, ...ingameOnly];

function applyIngame(vehicle: Vehicle, entry: IngameEntry): Vehicle {
  const image = entry.image ?? vehicle.image;
  return {
    ...vehicle,
    ...(entry.fields ?? {}),
    name: entry.name ?? vehicle.name,
    manufacturer: entry.manufacturer ?? vehicle.manufacturer,
    category: entry.category ?? vehicle.category,
    description: entry.description ?? vehicle.description,
    image,
    imageAlt: entry.imageAlt ?? vehicle.imageAlt,
    gallery: image ? [image] : [],
    status: "Confirmed",
    source: ingameSourceHref(entry),
    sourceLabel: INGAME_SOURCE_LABEL,
  };
}

const confirmedSources: Record<string, { label: string; href: string }> = {
  "grotti-cheetah-1995": {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
  "vapid-ganado": {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
  "vapid-dominator-buggy": {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
  "shitzu-squalo": {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
  "dinka-enduro": {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
  "crest-kayak": {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
  "vapid-stanier-1955": {
    label: "Rockstar Games",
    href: "https://www.rockstargames.com/VI",
  },
};

const unconfirmedNote =
  "This name is carried over from an earlier Grand Theft Auto game. Rockstar has not confirmed it for Grand Theft Auto VI, and no performance figures on this page should be treated as official.";

export const vehicles = catalog.map((vehicle) => {
  const fromGameplay = ingameBySlug.get(vehicle.slug);
  if (fromGameplay) return applyIngame(vehicle, fromGameplay);

  const source = confirmedSources[vehicle.slug];
  const gallery =
    vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  if (!source) {
    return {
      ...vehicle,
      status: "Expected / unconfirmed",
      description: unconfirmedNote,
      image: "",
      gallery: [],
      topSpeed: undefined,
      drivetrain: undefined,
      transmission: undefined,
      seats: undefined,
      class: undefined,
      price: undefined,
      engine: undefined,
      fuelType: undefined,
      weight: undefined,
      inspiration: undefined,
    };
  }

  return {
    ...vehicle,
    status: "Confirmed",
    source: source.href,
    gallery,
    topSpeed: undefined,
    price: undefined,
    engine: undefined,
  };
});

export const confirmedVehicles = vehicles.filter(
  (vehicle) => vehicle.status === "Confirmed"
);

export const unconfirmedVehicles = vehicles.filter(
  (vehicle) => vehicle.status !== "Confirmed"
);