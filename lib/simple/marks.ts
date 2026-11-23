/** Class icons for items that have no real photo. Filled side profiles, not pictures. */

export type WeaponMark =
  | "pistol"
  | "revolver"
  | "smg"
  | "shotgun"
  | "rifle"
  | "sniper"
  | "lmg"
  | "launcher"
  | "throwable"
  | "melee";

export type VehicleMark =
  | "sports"
  | "muscle"
  | "sedan"
  | "suv"
  | "van"
  | "truck"
  | "motorcycle"
  | "bicycle"
  | "boat"
  | "helicopter"
  | "plane"
  | "tank"
  | "emergency";

export type CatalogMark = WeaponMark | VehicleMark;

export function weaponMark(category: string, type?: string): WeaponMark {
  if (category === "Handgun" && /revolver/i.test(type ?? "")) return "revolver";
  switch (category) {
    case "Handgun":
      return "pistol";
    case "SMG":
      return "smg";
    case "Shotgun":
      return "shotgun";
    case "Assault Rifle":
    case "Tactical Rifle":
      return "rifle";
    case "Sniper Rifle":
      return "sniper";
    case "LMG":
      return "lmg";
    case "Launcher":
      return "launcher";
    case "Melee":
      return "melee";
    case "Explosives":
      return "throwable";
    default:
      return "rifle";
  }
}

/**
 * Body type for the line drawing. Slug overrides are only names the repo
 * already describes (a jet, a dirt bike, a boat in the same family).
 */
const VEHICLE_SLUG_MARK: Record<string, VehicleMark> = {
  "hauners-p-996-lazer": "plane",
  "lapwing-mallard": "plane",
  "nagasaki-sea-sparrow": "helicopter",
  "buckingham-maverick": "helicopter",
  "buckingham-swift": "helicopter",
  "maibatsu-sanchez": "motorcycle",
  "tuff-bmx": "bicycle",
  "vapid-dominator-65": "muscle",
  "speeder-700-gt": "boat",
  "inflatable-flamingo": "boat",
  "mtl-pumper": "truck",
  "hauners-rhino-tank": "tank",
};

export function vehicleMark(category: string, slug: string): VehicleMark {
  const named = VEHICLE_SLUG_MARK[slug];
  if (named) return named;
  if (/bmx|bicycle/i.test(slug)) return "bicycle";
  switch (category) {
    case "Sports":
    case "Super":
      return "sports";
    case "Muscle":
      return "muscle";
    case "SUV":
    case "Off-Road":
      return "suv";
    case "Van":
      return "van";
    case "Emergency":
      return "emergency";
    case "Truck":
    case "Industrial":
    case "Commercial":
    case "Utility":
      return "truck";
    case "Military":
      return "tank";
    case "Bike":
      return "motorcycle";
    case "Boat":
      return "boat";
    case "Aircraft":
      return "plane";
    default:
      return "sedan";
  }
}

/** Short class noun for a catalog sentence, taken from the stored category. */
export function vehicleNoun(category: string, mark: VehicleMark) {
  switch (mark) {
    case "sports":
      return category === "Super" ? "supercar" : "sports car";
    case "muscle":
      return "muscle car";
    case "sedan":
      return category === "Service" ? "service car" : "sedan";
    case "suv":
      return category === "Off-Road" ? "off-road vehicle" : "SUV";
    case "van":
      return "van";
    case "truck":
      return "truck";
    case "motorcycle":
      return "motorcycle";
    case "bicycle":
      return "bicycle";
    case "boat":
      return "boat";
    case "helicopter":
      return "helicopter";
    case "plane":
      return "plane";
    case "tank":
      return "tank";
    case "emergency":
      return "emergency vehicle";
    default:
      return "vehicle";
  }
}

/** Maker line for the drawing. Blank when the catalog has no real maker. */
export function makerLabel(name?: string) {
  const value = (name ?? "").trim();
  if (!value || /^(not named|not shown|unknown|n\/a)$/i.test(value)) return "";
  return value;
}
