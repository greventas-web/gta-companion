/**
 * Extra Browse entries added on launch week (November 18, 2026).
 * Every line is checked against published post-launch sources; the internal
 * log is launch-prep/patches/match-and-expand-factcheck.md (never on pages).
 * Story characters stop at Chapter 3, with no plot past it.
 */
import { ammuStores } from "@/lib/simple/ammu";
import { whereToFindTopics, wherePlaces } from "@/src/data/launch/where-to-find";

export type ExtraCategory =
  | "locations"
  | "businesses"
  | "stores"
  | "characters"
  | "brands"
  | "clothing"
  | "animals"
  | "activities";

export type ExtraEntry = {
  slug: string;
  name: string;
  group: string;
  /** 1 or 2 short sentences. */
  summary: string;
  /** Short meta for the card, e.g. "Vice City" or "Fence". */
  meta?: string;
  price?: string;
  image?: string;
  /** confirmed:<id> map pin. */
  pin?: string;
  facts?: { label: string; value: string }[];
  links?: { href: string; label: string }[];
  /** Cards that open another page (where-to-find, Ammu-Nation) instead of a /<category>/<slug> page. */
  href?: string;
};

const p = (id: string) => `confirmed:${id}`;

const locations: ExtraEntry[] = [
  // Vice-Dale County
  { slug: "ocean-beach", name: "Ocean Beach", group: "Vice-Dale County", meta: "Vice City", pin: p("ocean-beach"), summary: "Vice City's beachfront of pastel art deco hotels and white sand. Shore Drive runs along the water.", links: [{ href: "/where-to-find/clothing-stores", label: "Clothing stores here" }] },
  { slug: "washington-beach", name: "Washington Beach", group: "Vice-Dale County", meta: "Vice City", pin: p("washington-beach"), summary: "A Vice City waterfront just north of Ocean Beach, home to the Y Hotel. The Ultimate Edition Shitzu Squalo is docked here." },
  { slug: "little-cuba", name: "Little Cuba", group: "Vice-Dale County", meta: "Vice City", pin: p("little-cuba"), summary: "A Vice City neighborhood known for its busy panaderías. It has a souvenir store and the Euroform Automotive mod shop." },
  { slug: "stockyard", name: "Stockyard", group: "Vice-Dale County", meta: "Vice City", pin: p("stockyard"), summary: "A Vice City district home to Stock 305, Electric Fang Tattoo, Vice Vinyl and Stockyard Speedshop." },
  { slug: "downtown-vice-city", name: "Downtown Vice City", group: "Vice-Dale County", meta: "Vice City", pin: p("downtown-vice-city"), summary: "The center of Vice City, with Slinger, Alpha Sports and Endzone clothing stores and a Pay 'n' Spray." },
  { slug: "hamlet", name: "Hamlet", group: "Vice-Dale County", meta: "Vice-Dale County", image: "/images/footage/locations/hamlet.webp", pin: p("hamlet"), summary: "A town in Vice-Dale County with Sara's Unisex Salon, Kurt's Barber Shop, Hamlet Thrift and a Pay 'n' Spray." },
  { slug: "tequesta", name: "Tequesta", group: "Vice-Dale County", meta: "Vice City", pin: p("tequesta"), summary: "A Vice City neighborhood with a Slinger clothing store. The 7th Avenue Garage is just to its northwest." },
  { slug: "peacock-bay", name: "Peacock Bay", group: "Vice-Dale County", meta: "Vice City", pin: p("peacock-bay"), summary: "A Vice City neighborhood with Slinger and Nola clothing stores." },
  { slug: "decor-district", name: "Decor District", group: "Vice-Dale County", meta: "Vice City", pin: p("decor-district"), summary: "A Vice City neighborhood with Slinger, This / That, Nola and Ferruccio Tucci shops." },
  { slug: "southside-vice-city", name: "Southside", group: "Vice-Dale County", meta: "Vice City", pin: p("southside-vice-city"), summary: "A Vice City district where the PTT Youngin$ gang keeps its compound." },
  { slug: "crosstown", name: "Crosstown", group: "Vice-Dale County", meta: "Vice City", pin: p("crosstown"), summary: "A Vice City neighborhood and home of Rideout Customs." },
  { slug: "la-perle", name: "La Perle", group: "Vice-Dale County", meta: "Vice City", pin: p("la-perle"), summary: "A Vice City neighborhood with its own Pay 'n' Spray." },
  { slug: "balsero", name: "Balsero", group: "Vice-Dale County", meta: "Vice City", pin: p("balsero"), summary: "A Vice City neighborhood with a Pay 'n' Spray." },
  { slug: "salton", name: "Salton", group: "Vice-Dale County", meta: "Vice City", pin: p("salton"), summary: "A Vice City neighborhood near the airport, with a Pay 'n' Spray." },
  { slug: "waxman-island", name: "Waxman Island", group: "Vice-Dale County", meta: "Vice-Dale County", summary: "An island in Vice-Dale County with a Pay 'n' Spray." },
  { slug: "vc-port", name: "VC Port", group: "Vice-Dale County", meta: "Vice City", pin: p("vc-port"), summary: "Vice City's port, the cruise ship capital of the world." },
  { slug: "shore-drive", name: "Shore Drive", group: "Vice-Dale County", meta: "Ocean Beach", pin: p("shore-drive"), summary: "The waterfront road through Ocean Beach, lined with art deco hotels." },
  { slug: "vice-city-international-airport", name: "Vice City International Airport", group: "Vice-Dale County", meta: "Vice City", pin: p("vice-city-international-airport"), summary: "Vice City's airport in south Vice-Dale County. The 7th Avenue Garage is just east of it." },
  { slug: "y-hotel", name: "Y Hotel", group: "Vice-Dale County", meta: "Washington Beach", pin: p("y-hotel"), summary: "A hotel in Washington Beach, just north of Ocean Beach." },
  { slug: "ocean-view-hotel", name: "Ocean View Hotel", group: "Vice-Dale County", meta: "Ocean Beach", image: "/images/official/editions/vintage_vice_city_pack_01.webp", pin: p("ocean-view-hotel"), summary: "An art deco hotel on Shore Drive in Ocean Beach." },
  // Mariana County
  { slug: "capri", name: "Capri", group: "Mariana County", meta: "Mariana County", pin: p("capri"), summary: "A rich town with Nola and Ferruccio Tucci formal wear and the Vela Rota Drive Garage." },
  { slug: "key-lento", name: "Key Lento", group: "Mariana County", meta: "Leonida Keys", image: "/images/footage/locations/key-lento.webp", pin: p("jasons-place"), summary: "The Leonida Keys town where Jason lives. It has The Rusty Anchor bar and Kenton's dive business." },
  { slug: "southwind", name: "Southwind", group: "Mariana County", meta: "Mariana County", pin: p("southwind"), summary: "A place in Mariana County with a Pay 'n' Spray." },
  { slug: "watson-bay", name: "Watson Bay", group: "Mariana County", meta: "Mariana County", pin: p("watson-bay"), summary: "Home of the Paradise Garage, where the Ultimate Edition '67 Vapid Dominator Buggy is kept." },
  { slug: "abismo-key", name: "Abismo Key", group: "Mariana County", meta: "Leonida Keys", pin: p("abismo-key"), summary: "A small key at the southern end of the Leonida Keys." },
  { slug: "bobcat-key", name: "Bobcat Key", group: "Mariana County", meta: "Leonida Keys", pin: p("bobcat-key"), summary: "A key in Mariana County with the Experimental Dome on its south curve." },
  // Leonard County
  { slug: "waning-sands", name: "Waning Sands", group: "Leonard County", meta: "Leonard County", pin: p("waning-sands"), summary: "A Leonard County town with This / That, Mid, Ferruccio Tucci and Alpha Sports shops." },
  { slug: "belville", name: "Belville", group: "Leonard County", meta: "Leonard County", pin: p("belville"), summary: "A town in southern Leonard County with the Persistence Road Garage and Tactical Outlet Guns." },
  { slug: "lake-leonida", name: "Lake Leonida", group: "Leonard County", meta: "Leonard County", pin: p("lake-leonida"), summary: "A lake in Leonard County and home of One-Eyed Willie's off-road mod shop." },
  // Lummox County
  { slug: "grayson", name: "Grayson", group: "Lummox County", meta: "Lummox County", summary: "A Lummox County town with a Pay 'n' Spray." },
  { slug: "millport", name: "Millport", group: "Lummox County", meta: "Lummox County", pin: p("millport"), summary: "A Lummox County town with a Pay 'n' Spray." },
  // Waters and landmarks
  { slug: "gambit-bay", name: "Gambit Bay", group: "Waters and landmarks", meta: "Fishing", pin: p("gambit-bay"), summary: "A bay known for fishing. The Ultimate Edition Shitzu Squalo is built for it." },
  { slug: "leonida-penitentiary", name: "Leonida Penitentiary", group: "Waters and landmarks", meta: "Prison", image: "/images/footage/locations/leonida-penitentiary.webp", summary: "The state prison where Lucia served time before the story begins." },
  { slug: "vercetti-estate", name: "The Vercetti Estate", group: "Waters and landmarks", meta: "Estate", summary: "A Vice City estate. The Ultimate Edition Hawk & Little Morgan revolvers come from it." },
  // Counties
  { slug: "vice-dale-county", name: "Vice-Dale County", group: "Counties", meta: "County", summary: "The county around Vice City, from Downtown and Ocean Beach out to Hamlet." },
  { slug: "mariana-county", name: "Mariana County", group: "Counties", meta: "County", summary: "Leonida's southern county, with the Leonida Keys, Key Lento, Capri and Watson Bay." },
  { slug: "leonard-county", name: "Leonard County", group: "Counties", meta: "County", summary: "The county north of Vice City, with Waning Sands, Belville and Lake Leonida." },
  { slug: "kelly-county", name: "Kelly County", group: "Counties", meta: "County", summary: "The county of Port Gellhorn and Ambrosia." },
  { slug: "lummox-county", name: "Lummox County", group: "Counties", meta: "County", summary: "Leonida's northern county, with Grayson, Millport and Mount Kalaga National Park." },
];

const businesses: ExtraEntry[] = [
  { slug: "starlet-motel", name: "Starlet Motel", group: "Motels and hotels", meta: "Kelly County", pin: p("starlet-motel"), summary: "A motel on Historic Route 628, just east of Port Gellhorn. Jason and Lucia use it as a hideout in Chapter 2." },
  { slug: "allied-crystal-sugar-refinery", name: "Allied Crystal sugar refinery", group: "Industry", meta: "Ambrosia", pin: p("allied-crystal-sugar-refinery"), summary: "The sugar refinery that gives Ambrosia most of its jobs." },
  { slug: "delights", name: "Delights", group: "Bars and clubs", meta: "Port Gellhorn", pin: p("delights"), summary: "A strip club on Interstate 404 in Port Gellhorn." },
  { slug: "the-rusty-anchor", name: "The Rusty Anchor", group: "Bars and clubs", meta: "Key Lento", pin: p("the-rusty-anchor"), summary: "A bar in Key Lento that you can walk into." },
  { slug: "vyb-club", name: "VYB Club", group: "Bars and clubs", meta: "Ocean Beach", pin: p("y-hotel"), summary: "A club in Ocean Beach, near the Y Hotel." },
  { slug: "gellhorn-raceway", name: "Gellhorn Raceway", group: "Race venues", meta: "Racing", summary: "A race venue. Ten wins across it, Thrillbilly Mud Club and Boone Speedway unlock the Repair Vehicle cheat.", links: [{ href: "/cheats/player-cheats/repair-vehicle", label: "Repair Vehicle cheat" }] },
  { slug: "thrillbilly-mud-club", name: "Thrillbilly Mud Club", group: "Race venues", meta: "Mud racing", summary: "A mud racing venue. Its wins count toward the Repair Vehicle cheat.", links: [{ href: "/cheats/player-cheats/repair-vehicle", label: "Repair Vehicle cheat" }] },
  { slug: "boone-speedway", name: "Boone Speedway", group: "Race venues", meta: "Racing", summary: "A speedway. Its wins count toward the Repair Vehicle cheat.", links: [{ href: "/cheats/player-cheats/repair-vehicle", label: "Repair Vehicle cheat" }] },
  { slug: "fleeca", name: "Fleeca", group: "Chains", meta: "Bank", summary: "A bank chain. Its branches pay far more than small stores when robbed." },
  { slug: "pay-n-spray", name: "Pay 'n' Spray", group: "Chains", meta: "19 shops", summary: "Repaint your car to lose the cops, or sell older cars here.", links: [{ href: "/where-to-find/pay-n-spray", label: "All 19 Pay 'n' Spray shops" }] },
  { slug: "watkins-auto-parts", name: "Watkins Auto Parts", group: "Chains", meta: "Port Gellhorn", pin: p("pay-n-spray-port-gellhorn"), summary: "A Port Gellhorn auto parts shop with a Pay 'n' Spray." },
];

/** Tattoo studios: 10 plus Electric Fang (already on /stores). */
const tattoo: [string, string, string, string][] = [
  ["The Inked Mermaid", "Key Lento", "Mariana County", "American Traditional"],
  ["Layin' Ink", "Hamlet", "Vice-Dale County", "Black & Gray"],
  ["Dominion Ink", "Vice City", "Vice-Dale County", "Anime"],
  ["Hyper Ink", "Vice City", "Vice-Dale County", "Illustrative"],
  ["Cross My Heart", "Vice City", "Vice-Dale County", "New School"],
  ["Inkomplete Tattoo Co.", "Vice City", "Vice-Dale County", "Old School"],
  ["Twa Ponya Tattoo", "Vice City", "Vice-Dale County", "Neo-Traditional"],
  ["Black Spot Tattoo", "Vice Beach", "Vice-Dale County", "Geometric & Blackwork"],
  ["Blood Sugar Tattoo", "Ambrosia", "Kelly County", "Lettering"],
  ["Freedom Tattoo", "Port Gellhorn", "Kelly County", "Stick & Poke"],
];

export function extraSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’'!.]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const areaPin: Record<string, string> = {
  "Key Lento": p("leonida-keys"),
  Hamlet: p("hamlet"),
  Ambrosia: p("ambrosia"),
  "Port Gellhorn": p("port-gellhorn"),
};

/** Already on /stores; skip their where-to-find twins. */
const ON_STORES = /^(stock 305|sara.s unisex salon|rideout customs|one-eyed willie|electric fang)/i;

function whereStores(topicSlug: string, group: string, meta: string): ExtraEntry[] {
  const topic = whereToFindTopics.find((item) => item.slug === topicSlug);
  if (!topic) return [];
  return wherePlaces(topic)
    .filter((place) => !ON_STORES.test(place.name))
    .map((place) => ({
      slug: `${topicSlug}-${place.slug}`,
      name: topicSlug === "pay-n-spray" ? `Pay 'n' Spray ${place.name}` : place.name,
      group,
      meta: [meta, place.area && place.area !== place.name ? place.area : undefined].filter(Boolean).join(" · "),
      price: place.price,
      pin: place.pin ?? place.areaPin,
      summary: "",
      href: `/where-to-find/${topicSlug}/${place.slug}`,
    }));
}

const stores: ExtraEntry[] = [
  ...tattoo.map(([name, area, county, style]) => ({
    slug: extraSlug(name),
    name,
    group: "Tattoo studios",
    meta: `${style} · ${area}`,
    pin: areaPin[area],
    summary: `A tattoo studio in ${area}, ${county}. Its style is ${style}.`,
    facts: [
      { label: "Style", value: style },
      { label: "Where", value: `${area}, ${county}` },
    ],
  })),
  {
    slug: "uncle-jacks-liquor",
    name: "Uncle Jack's Liquor",
    group: "Other shops",
    meta: "Port Gellhorn",
    pin: p("uncle-jacks-liquor"),
   
    summary: "A liquor store in Port Gellhorn.",
  },
  ...whereStores("clothing-stores", "Clothing stores", "Clothes"),
  ...whereStores("hair-salons", "Hair salons and barbers", "Hair"),
  ...ammuStores.map((store) => ({
    slug: `ammu-${store.slug}`,
    name: store.name,
    group: "Gun stores",
    meta: `${store.inventory} · ${store.area}`,
    pin: undefined,
    summary: "",
    href: `/ammu-nation-locations/${store.slug}`,
  })),
  ...whereStores("mod-shops", "Mod shops", "Mods"),
  ...whereStores("pay-n-spray", "Pay 'n' Spray", "Repaint"),
];

const characters: ExtraEntry[] = [
  { slug: "lori", name: "Lori", group: "Story characters", meta: "Leonida Keys", image: "/images/footage/characters/lori.webp", summary: "Brian Heder's third wife. She helps run his boat yard in the Keys and is known for her sangria.", links: [{ href: "/characters/brian-heder", label: "Brian Heder" }] },
  { slug: "kenton-rees", name: "Kenton Rees", group: "Story characters", meta: "Treasure diving", image: "/images/footage/characters/kenton-rees.webp", summary: "An old friend of Brian who runs a scuba boat business in Key Lento. He sends Jason on treasure dives.", links: [{ href: "/money-methods/kenton-treasure-diving", label: "Treasure diving for Kenton" }] },
  { slug: "moses-watkins", name: "Moses Watkins", group: "Story characters", meta: "Car fence · Port Gellhorn", summary: "A Port Gellhorn car fence you meet in Chapter 2. He gives you the tools to steal mid-range cars and buys them.", links: [{ href: "/money-methods/sell-cars-to-moses", label: "Sell cars to Moses" }] },
  { slug: "dunk-porter", name: "Dunk Porter", group: "Story characters", meta: "Fence", summary: "A Chapter 2 contact who buys drugs, jewelry and marked bills." },
  { slug: "yasmani-cabrera", name: "Yasmani Cabrera", group: "Story characters", meta: "Fence · Jewelry", summary: "Your jewelry buyer from early Chapter 3. He sends tips on stores to rob.", links: [{ href: "/money-methods/jewelry-store-robberies", label: "Rob jewelry stores" }] },
  { slug: "randy-kozlov", name: "Randy Kozlov", group: "Story characters", meta: "Car fence · Vice City", summary: "A car fence in western Vice City from mid Chapter 3. He wants high-end cars and pays more for clean ones.", links: [{ href: "/money-methods/randy-wish-list", label: "Randy's wish list" }] },
  { slug: "wyman", name: "Wyman", group: "Ultimate Edition", meta: "Car collector", summary: "A car collector who asks you to find and restore abandoned classic cars. Ultimate Edition only.", links: [{ href: "/where-to-find/garages/paradise-garage", label: "Paradise Garage" }] },
];

const chain = (name: string, kind: string, where: string): ExtraEntry => ({
  slug: extraSlug(name),
  name,
  group: "Clothing chains",
  meta: kind,
  summary: `A ${kind.toLowerCase()} clothing chain. Shops in ${where}.`,
  facts: [{ label: "Shops in", value: where }],
  links: [{ href: "/where-to-find/clothing-stores", label: "All clothing stores" }],
});

const brands: ExtraEntry[] = [
  chain("Slinger", "Streetwear", "Southside, Peacock Bay, Tequesta, Downtown, Decor District and Ocean Beach"),
  chain("This / That", "Streetwear", "Decor District, Ocean Beach and Waning Sands"),
  chain("Mid", "Streetwear", "Ocean Beach and Waning Sands"),
  chain("Suburban", "Streetwear", "Vice-Dale County"),
  chain("Urban Legendz", "Streetwear", "Vice-Dale County"),
  chain("Drip Drops", "Streetwear", "Vice-Dale County"),
  chain("Alpha Sports", "Sportswear", "Downtown, Ocean Beach and Waning Sands"),
  chain("Endzone", "Sportswear", "Downtown, Ocean Beach and Washington Beach"),
  { ...chain("Eris", "Sportswear", "Vice-Dale County"), image: "/images/footage/brands/eris.webp" },
  chain("Nola", "Formal", "Capri, Peacock Bay, Ocean Beach and Decor District"),
  chain("Ferruccio Tucci", "Formal", "Capri, Ocean Beach, Decor District and Waning Sands"),
  { slug: "ammu-nation", name: "Ammu-Nation", group: "Store chains", meta: "24 gun stores", image: "/images/footage/brands/ammu-nation.webp", summary: "Leonida's gun store chain, with 24 branches across five counties.", links: [{ href: "/ammu-nation-locations", label: "All 24 stores" }] },
  { slug: "pay-n-spray", name: "Pay 'n' Spray", group: "Store chains", meta: "19 shops", summary: "The repaint chain. Lose the cops or sell older cars.", links: [{ href: "/where-to-find/pay-n-spray", label: "All 19 shops" }] },
  { slug: "fleeca", name: "Fleeca", group: "Store chains", meta: "Bank", summary: "Leonida's bank chain." },
];

const clothing: ExtraEntry[] = [
  { slug: "streetwear", name: "Streetwear", group: "Styles", meta: "Slinger, This / That, Mid", summary: "Casual and street clothes from Slinger, This / That, Mid, Suburban, Urban Legendz, Drip Drops and Stock 305.", links: [{ href: "/where-to-find/clothing-stores", label: "Where to buy" }] },
  { slug: "sportswear", name: "Sportswear", group: "Styles", meta: "Alpha Sports, Endzone, Eris", summary: "Sports clothes from Alpha Sports, Endzone and Eris.", links: [{ href: "/where-to-find/clothing-stores", label: "Where to buy" }] },
  { slug: "formal-wear", name: "Formal wear", group: "Styles", meta: "Nola, Ferruccio Tucci", summary: "Suits and dresses from Nola and Ferruccio Tucci.", links: [{ href: "/where-to-find/clothing-stores", label: "Where to buy" }] },
  { slug: "souvenirs-and-swimwear", name: "Souvenirs and swimwear", group: "Styles", meta: "Beach shops", summary: "Tourist tees and swimwear from 14 beach and gift shops, such as The Wonder Whale and De'luge Swimwear.", links: [{ href: "/where-to-find/clothing-stores", label: "Where to buy" }] },
  { slug: "thrift-clothes", name: "Thrift clothes", group: "Styles", meta: "5 thrift stores", summary: "Second-hand clothes from Hamlet Thrift, Dr Froogal, Bargain World and two more.", links: [{ href: "/where-to-find/clothing-stores", label: "Where to buy" }] },
  { slug: "haircuts", name: "Haircuts", group: "Styles", meta: "18 salons", image: "/images/official/editions/ultimate_edition_saras_salon_02.webp", summary: "Change your hair at 18 salons and barbers across Leonida.", links: [{ href: "/where-to-find/hair-salons", label: "All salons" }] },
  { slug: "tattoos", name: "Tattoos", group: "Styles", meta: "11 studios", image: "/images/official/editions/ultimate_edition_electric_fang_01.webp", summary: "Eleven tattoo studios, each with its own style, from American Traditional to Anime.", links: [{ href: "/stores#tattoo-studios", label: "All tattoo studios" }] },
];

const animal = (name: string, group: "Land" | "Sea" | "Birds", image?: string): ExtraEntry => ({
  slug: extraSlug(name),
  name,
  group,
  meta: group === "Birds" ? "Bird" : group,
  image,
  summary:
    group === "Sea"
      ? "A sea animal found in the waters around Leonida."
      : group === "Birds"
        ? "A bird you can spot across Leonida."
        : "A land animal you can find in Leonida.",
});

const animals: ExtraEntry[] = [
  animal("Nine-banded armadillo", "Land"),
  animal("Black bear", "Land"),
  animal("Raccoon", "Land"),
  animal("Snake", "Land", "/images/official/media/screenshots-places-grassrivers-grassrivers-07.webp"),
  animal("Cow", "Land"),
  animal("Frog", "Land"),
  animal("Shark", "Sea", "/images/footage/animals/shark.webp"),
  animal("Whale", "Sea"),
  animal("Manta ray", "Sea"),
  animal("Jellyfish", "Sea"),
  animal("Eel", "Sea", "/images/official/media/screenshots-places-leonida-keys-leonida-keys-04.webp"),
  animal("Lionfish", "Sea", "/images/official/media/screenshots-places-leonida-keys-leonida-keys-07.webp"),
  animal("Seagull", "Birds"),
  animal("Pigeon", "Birds"),
  animal("Duck", "Birds"),
  animal("Whooping crane", "Birds"),
];

const activities: ExtraEntry[] = [
  { slug: "street-races", name: "Street races", group: "More things to do", meta: "40 races", summary: "There are 40 races in 6 groups, open from Chapter 1. Win for prize money.", links: [{ href: "/money-methods/street-races", label: "Race prize money" }] },
  { slug: "treasure-diving", name: "Treasure diving", group: "More things to do", meta: "Key Lento", image: "/images/footage/activities/treasure-diving.webp", pin: p("activity-scuba-leonida-keys"), summary: "Dive at shipwrecks off Key Lento for Kenton and sell what you find.", links: [{ href: "/money-methods/kenton-treasure-diving", label: "Treasure diving for Kenton" }] },
  { slug: "dates", name: "Dates", group: "More things to do", meta: "With your partner", summary: "Take your partner to bars, diners, coffee shops and rooftop restaurants." },
  { slug: "stealing-cars-to-sell", name: "Stealing cars to sell", group: "More things to do", meta: "Moses and Randy", summary: "Steal cars on order and sell them to Moses or Randy, or sell older cars at a Pay 'n' Spray.", links: [{ href: "/money-methods/sell-cars-to-moses", label: "Sell cars to Moses" }] },
];

export const extras: Record<ExtraCategory, ExtraEntry[]> = {
  locations,
  businesses,
  stores,
  characters,
  brands,
  clothing,
  animals,
  activities,
};

/** Entries that get their own /<category>/<slug> page. */
export function extraPages(category: ExtraCategory) {
  return extras[category].filter((entry) => !entry.href);
}

export function findExtra(category: ExtraCategory, slug: string) {
  return extraPages(category).find((entry) => entry.slug === slug);
}

export function extraGroups(category: ExtraCategory) {
  const groups: { name: string; list: ExtraEntry[] }[] = [];
  for (const entry of extras[category]) {
    let group = groups.find((item) => item.name === entry.group);
    if (!group) {
      group = { name: entry.group, list: [] };
      groups.push(group);
    }
    group.list.push(entry);
  }
  return groups;
}
