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

const catalog = [
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

const confirmedSources: Record<string, { label: string; href: string }> = {
  "grotti-cheetah-1995": {
    label: "Rockstar Games — Grand Theft Auto VI, Ultimate Edition",
    href: "https://www.rockstargames.com/VI",
  },
  "vapid-ganado": {
    label: "Rockstar Games — Grand Theft Auto VI, Ultimate Edition",
    href: "https://www.rockstargames.com/VI",
  },
  "vapid-dominator-buggy": {
    label: "Rockstar Games — Grand Theft Auto VI, Ultimate Edition",
    href: "https://www.rockstargames.com/VI",
  },
  "shitzu-squalo": {
    label: "Rockstar Games — Grand Theft Auto VI, Ultimate Edition",
    href: "https://www.rockstargames.com/VI",
  },
  "dinka-enduro": {
    label: "Rockstar Games — Grand Theft Auto VI, Ultimate Edition",
    href: "https://www.rockstargames.com/VI",
  },
  "crest-kayak": {
    label: "Rockstar Games — Grand Theft Auto VI, Ultimate Edition",
    href: "https://www.rockstargames.com/VI",
  },
  "vapid-stanier-1955": {
    label: "Rockstar Games — Grand Theft Auto VI, Vintage Vice City Pack",
    href: "https://www.rockstargames.com/VI",
  },
};

const unconfirmedNote =
  "This name is carried over from an earlier Grand Theft Auto game. Rockstar has not confirmed it for Grand Theft Auto VI, and no performance figures on this page should be treated as official.";

export const vehicles = catalog.map((vehicle) => {
  const source = confirmedSources[vehicle.slug];
  const gallery =
    vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  if (!source) {
    return {
      ...vehicle,
      status: "Expected / unconfirmed",
      description: unconfirmedNote,
      gallery,
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