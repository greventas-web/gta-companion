/** Class icons for items that have no real photo. Line drawings, not pictures. */

export type WeaponMark = "pistol" | "smg" | "rifle" | "shotgun" | "sniper" | "heavy" | "melee" | "throwable";

export type VehicleMark = "sedan" | "sports" | "muscle" | "suv" | "truck" | "van" | "motorcycle" | "boat" | "aircraft";

export type CatalogMark = WeaponMark | VehicleMark;

export function weaponMark(category: string): WeaponMark {
  switch (category) {
    case "Handgun":
      return "pistol";
    case "SMG":
      return "smg";
    case "Assault Rifle":
    case "Tactical Rifle":
      return "rifle";
    case "Shotgun":
      return "shotgun";
    case "Sniper Rifle":
      return "sniper";
    case "LMG":
    case "Launcher":
      return "heavy";
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
  "hauners-p-996-lazer": "aircraft",
  "lapwing-mallard": "aircraft",
  "nagasaki-sea-sparrow": "aircraft",
  "maibatsu-sanchez": "motorcycle",
  "vapid-dominator-65": "muscle",
  "speeder-700-gt": "boat",
  "inflatable-flamingo": "boat",
  "mtl-pumper": "truck",
};

export function vehicleMark(category: string, slug: string): VehicleMark {
  const named = VEHICLE_SLUG_MARK[slug];
  if (named) return named;
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
    case "Emergency":
      return "van";
    case "Truck":
    case "Industrial":
    case "Commercial":
    case "Utility":
    case "Military":
      return "truck";
    case "Bike":
      return "motorcycle";
    case "Boat":
      return "boat";
    case "Aircraft":
      return "aircraft";
    default:
      return "sedan";
  }
}

/** Maker line for the drawing. Blank when the catalog has no real maker. */
export function makerLabel(name?: string) {
  const value = (name ?? "").trim();
  if (!value || /^(not named|not shown|unknown|n\/a)$/i.test(value)) return "";
  return value;
}
