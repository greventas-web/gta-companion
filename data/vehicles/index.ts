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

export const vehicles = catalog.map((vehicle) => ({
  ...vehicle,
  gallery:
    vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image],
}));