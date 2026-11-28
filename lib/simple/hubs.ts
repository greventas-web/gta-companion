import { activities } from "@/data/activities";
import { animals } from "@/data/animals";
import { brands } from "@/data/brands";
import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import { clothing } from "@/data/clothing";
import { locations } from "@/data/locations";
import { manufacturers } from "@/data/manufacturers";
import { stores } from "@/data/stores";
import { weapons } from "@/data/weapons";
import { properties } from "@/data/properties";
import { cheatList } from "@/src/data/launch/cheat-list";
import { challenges } from "@/src/data/launch/challenges";
import { stationPages } from "@/lib/simple/radio";
import { extras } from "@/src/data/launch/expansion";
import { ammuNationStores, vehicleCounts } from "@/src/data/launch/launch-facts";

export type Hub = {
  href: string;
  title: string;
  /** Official Rockstar photo. Hub tiles may use a fitting photo; every tile has a different one. */
  image: string;
  /** Count or short meta line under the title. */
  line: string;
  /** Icon kind for SimpleCard. */
  kind: string;
};

const O = "/images/official";

/**
 * Every hub tile on the site, in order of usefulness. The homepage shows all of
 * them once; other hub pages pick from this list so a destination always has
 * the same title, photo and meta line.
 */
export const hubs = {
  map: { href: "/map", title: "Map", image: `${O}/frames/parachuting.webp`, line: "Find anything in Leonida", kind: "location" },
  missions: { href: "/missions", title: "Missions", image: `${O}/media/artwork-jason-and-lucia-robbery-jason-and-lucia-robbery-landscape.webp`, line: "Tick off every story mission", kind: "mission" },
  weapons: { href: "/weapons", title: "Weapons", image: `${O}/categories/weapons.webp`, line: `${weapons.length} in the game`, kind: "weapon" },
  vehicles: { href: "/vehicles", title: "Vehicles", image: `${O}/categories/vehicles.webp`, line: `${vehicleCounts.total} in the game`, kind: "vehicle" },
  cheats: { href: "/cheats", title: "Cheats", image: `${O}/media/artwork-jason-and-lucia-rooftop-jason-lucia-rooftop-landscape.webp`, line: `${cheatList.length} cheats and codes`, kind: "cheat" },
  collectibles: { href: "/collectibles", title: "Collectibles", image: `${O}/frames/flamingo.webp`, line: "Cards, flamingos, stunts", kind: "collectible" },
  money: { href: "/money-methods", title: "Make money", image: `${O}/frames/jewelry-robbery.webp`, line: "Fastest cash by chapter", kind: "money" },
  whereToFind: { href: "/where-to-find", title: "Where to find", image: `${O}/editions/ultimate_edition_saras_salon_01.webp`, line: "Shops, garages, barbers", kind: "store" },
  stores: { href: "/stores", title: "Stores", image: `${O}/editions/ultimate_edition_stock_305_01.webp`, line: `${stores.length + extras.stores.length} in the game`, kind: "store" },
  shootingRanges: { href: "/shooting-ranges", title: "Shooting ranges", image: `${O}/frames/shooting-range.webp`, line: "12 courses, 42 golds", kind: "range" },
  challenges: { href: "/challenges", title: "Challenges", image: `${O}/frames/gym-workout.webp`, line: `All ${challenges.length} challenges`, kind: "trophy" },
  properties: { href: "/properties", title: "Garages", image: `${O}/editions/ultimate_edition_safehouse_vehicles_01.webp`, line: `${properties.length} garages and hideouts`, kind: "garage" },
  fences: { href: "/where-to-find/fences", title: "Fences", image: `${O}/frames/store-robbery.webp`, line: "Where to sell stolen goods", kind: "money" },
  radio: { href: "/radio", title: "Radio", image: `${O}/radio/flash-background.webp`, line: `${stationPages.length} stations`, kind: "radio" },
  trophies: { href: "/trophies", title: "Trophies", image: `${O}/frames/track-racing.webp`, line: "Tick off every trophy", kind: "trophy" },
  locations: { href: "/locations", title: "Locations", image: `${O}/locations/port-gellhorn.webp`, line: `${locations.length + extras.locations.length} in the game`, kind: "location" },
  characters: { href: "/characters", title: "Characters", image: `${O}/categories/characters.webp`, line: `${characters.length + extras.characters.length} in the game`, kind: "character" },
  businesses: { href: "/businesses", title: "Businesses", image: `${O}/editions/ultimate_edition_electric_fang_01.webp`, line: `${businesses.length + extras.businesses.length} in the game`, kind: "business" },
  manufacturers: { href: "/manufacturers", title: "Manufacturers", image: `${O}/vehicles/vapid-stanier-1955.webp`, line: `${manufacturers.length} in the game`, kind: "vehicle" },
  ammuNation: { href: "/ammu-nation-locations", title: "Ammu-Nation", image: `${O}/editions/ultimate_edition_weapon_variants_01.webp`, line: `All ${ammuNationStores.length} gun stores`, kind: "gunstore" },
  clothing: { href: "/clothing", title: "Clothing", image: `${O}/editions/ultimate_edition_goodtime_gear_01.webp`, line: `${clothing.length + extras.clothing.length} in the game`, kind: "clothing" },
  animals: { href: "/animals", title: "Animals", image: `${O}/categories/animals.webp`, line: `${animals.length + extras.animals.length} in the game`, kind: "animal" },
  activities: { href: "/activities", title: "Activities", image: `${O}/categories/activities.webp`, line: `${activities.length + extras.activities.length} in the game`, kind: "activity" },
  brands: { href: "/brands", title: "Brands", image: `${O}/frames/high-rollerz-lifestyle.webp`, line: `${brands.length + extras.brands.length} in the game`, kind: "brand" },
} satisfies Record<string, Hub>;

export type HubKey = keyof typeof hubs;

/**
 * Homepage order: each destination exactly once. Hubs whose detail pages are
 * still thin (manufacturers, brands, animals, activities, businesses,
 * characters, clothing) are left off the homepage until they get real text.
 */
export const homeHubs: Hub[] = (
  [
    "map", "cheats", "fences", "ammuNation", "whereToFind", "collectibles", "missions", "money", "vehicles", "weapons",
    "shootingRanges", "trophies", "radio", "stores",
  ] as HubKey[]
).map((key) => hubs[key]);

export function pickHubs(keys: HubKey[]): Hub[] {
  return keys.map((key) => hubs[key]);
}
