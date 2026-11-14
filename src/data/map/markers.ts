import { MAP_HEIGHT } from "./config";
import type { MapMarker } from "./types";

/**
 * Pins sit in map space (x east, y north). `at()` converts a pixel on
 * leonida-schematic.svg, whose origin is the top-left, into that space.
 * Every pin below is approximate. Relationships that Rockstar actually
 * stated are described on the marker and in docs/map-sources.md.
 */
function at(svgX: number, svgY: number) {
  return { x: svgX, y: MAP_HEIGHT - svgY };
}

const rockstar = {
  viceCity: "https://www.rockstargames.com/VI/only-in-leonida/vice-city",
  keys: "https://www.rockstargames.com/VI/only-in-leonida/leonida-keys",
  grassrivers: "https://www.rockstargames.com/VI/only-in-leonida/grassrivers",
  portGellhorn: "https://www.rockstargames.com/VI/only-in-leonida/port-gellhorn",
  ambrosia: "https://www.rockstargames.com/VI/only-in-leonida/ambrosia",
  kalaga: "https://www.rockstargames.com/VI/only-in-leonida/kalaga",
  home: "https://www.rockstargames.com/VI/",
  screenshots: "https://www.rockstargames.com/VI/downloads/screenshots",
} as const;

const approximate =
  "The pin is a diagram placement inside the area Rockstar named. It is not an in-game coordinate.";

export const mapMarkers: MapMarker[] = [
  {
    id: "vice-city",
    title: "Vice City",
    category: "locations",
    description:
      "Rockstar calls Vice City the sun and fun capital of America, with pastel art deco hotels and white sand at Ocean Beach, panaderías in Little Cuba, the Tisha-Wocka flea market, and the VC Port. " +
      approximate,
    image: "/images/official/locations/vice-city.webp",
    imageAlt: "Official still of the Vice City sign with a jet overhead",
    sourceUrl: rockstar.viceCity,
    sourceLabel: "Rockstar — Only in Leonida, Vice City",
    href: "/locations/vice-city",
    hrefLabel: "Vice City on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(900, 980),
  },
  {
    id: "ocean-beach",
    title: "Ocean Beach",
    category: "locations",
    description:
      "Named in Rockstar’s Vice City description for pastel art deco hotels and bright white sand. The Vintage Vice City garage is described as alongside this beach. " +
      approximate,
    image: "/images/official/locations/vice-city.webp",
    imageAlt: "Official Vice City sign still used for Ocean Beach, a named Vice City beach",
    sourceUrl: rockstar.viceCity,
    sourceLabel: "Rockstar — Vice City description",
    href: "/locations/vice-city",
    hrefLabel: "Vice City on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(960, 1060),
  },
  {
    id: "little-cuba",
    title: "Little Cuba",
    category: "locations",
    description:
      "A Vice City neighborhood Rockstar highlights for its bustling panaderías. The block itself is not shown on a map. " +
      approximate,
    image: "/images/official/locations/vice-city.webp",
    imageAlt: "Official Vice City sign still. Little Cuba is named in the Vice City description",
    sourceUrl: rockstar.viceCity,
    sourceLabel: "Rockstar — Vice City description",
    href: "/locations/vice-city",
    hrefLabel: "Vice City on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(820, 920),
  },
  {
    id: "tisha-wocka",
    title: "Tisha-Wocka flea market",
    category: "locations",
    description:
      "Rockstar places the Tisha-Wocka flea market, and its bootleg brands, in Vice City. " +
      approximate,
    image: "/images/official/locations/vice-city.webp",
    imageAlt: "Official Vice City sign still. The flea market is named in the Vice City description",
    sourceUrl: rockstar.viceCity,
    sourceLabel: "Rockstar — Vice City description",
    href: "/locations/vice-city",
    hrefLabel: "Vice City on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(850, 1040),
  },
  {
    id: "vc-port",
    title: "VC Port",
    category: "locations",
    description:
      "Rockstar calls the VC Port the cruise ship capital of the world and places it out from the other Vice City neighborhoods. " +
      approximate,
    image: "/images/official/locations/vice-city.webp",
    imageAlt: "Official Vice City sign still. VC Port is named in the Vice City description",
    sourceUrl: rockstar.viceCity,
    sourceLabel: "Rockstar — Vice City description",
    href: "/locations/vice-city",
    hrefLabel: "Vice City on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(930, 930),
  },
  {
    id: "southside-vice-city",
    title: "Southside Vice City",
    category: "locations",
    description:
      "Rockstar names Southside Vice City as the area where the PTT Youngin$ compound sits. Drawn on the south side of the Vice City diagram because of that name, not from a surveyed border. " +
      approximate,
    image: "/images/official/editions/ultimate_edition_ptt_store_01.webp",
    imageAlt: "Official Ultimate Edition still for the PTT Youngin$ store",
    sourceUrl: rockstar.home,
    sourceLabel: "Rockstar — Ultimate Edition, PTT Youngin$",
    href: "/locations/vice-city",
    hrefLabel: "Vice City on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(900, 1090),
  },
  {
    id: "leonida-keys",
    title: "Leonida Keys",
    category: "locations",
    description:
      "Rockstar describes a tropical archipelago on the doorstep of dangerous water. The published still shows a bridge between islands and open water, with a high-rise skyline on the horizon. The chain is drawn seaward of Vice City for that reason. Compass bearing of the chain is not published. " +
      approximate,
    image: "/images/official/locations/leonida-keys.webp",
    imageAlt: "Official Leonida Keys still of islands, a bridge, and a distant skyline",
    sourceUrl: rockstar.keys,
    sourceLabel: "Rockstar — Only in Leonida, Leonida Keys",
    href: "/locations/leonida-keys",
    hrefLabel: "Leonida Keys on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(760, 1410),
  },
  {
    id: "grassrivers",
    title: "Grassrivers",
    category: "locations",
    description:
      "Rockstar’s wetlands: mangroves, gators, and “the untamable jewel of Leonida’s crown.” An official still shows a speedboat and pier buildings with the Vice City skyline in the distance, so the wetlands are drawn across the bay from the city. " +
      approximate,
    image: "/images/official/locations/grassrivers.webp",
    imageAlt: "Official Grassrivers still with an airboat and an alligator",
    sourceUrl: rockstar.grassrivers,
    sourceLabel: "Rockstar — Only in Leonida, Grassrivers",
    href: "/locations/grassrivers",
    hrefLabel: "Grassrivers on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(310, 1040),
  },
  {
    id: "port-gellhorn",
    title: "Port Gellhorn",
    category: "locations",
    description:
      "Rockstar calls this Leonida’s forgotten coast: cheap motels, shut-down attractions, and empty strip malls. It is drawn on a separate shore from Vice City. Which compass coast that is has not been published. " +
      approximate,
    image: "/images/official/locations/port-gellhorn.webp",
    imageAlt: "Official Port Gellhorn still of the Starlet Motel at night",
    sourceUrl: rockstar.portGellhorn,
    sourceLabel: "Rockstar — Only in Leonida, Port Gellhorn",
    href: "/locations/port-gellhorn",
    hrefLabel: "Port Gellhorn on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(300, 760),
  },
  {
    id: "ambrosia",
    title: "Ambrosia",
    category: "locations",
    description:
      "Rockstar sets Ambrosia in the heart of Leonida, where the Allied Crystal sugar refinery provides the jobs. Official stills show the town street, smokestacks, and burning crops. " +
      approximate,
    image: "/images/official/locations/ambrosia.webp",
    imageAlt: "Official Ambrosia still of a main street with an Ambrosia County Sheriff’s Office sign",
    sourceUrl: rockstar.ambrosia,
    sourceLabel: "Rockstar — Only in Leonida, Ambrosia",
    href: "/locations/ambrosia",
    hrefLabel: "Ambrosia on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(620, 520),
  },
  {
    id: "mount-kalaga",
    title: "Mount Kalaga National Park",
    category: "locations",
    description:
      "Rockstar places Mount Kalaga on the state’s northern border: hunting, fishing, and off-road trails, with backwoods around the park. This is the one region with a published compass edge, so it sits at the top of the diagram. " +
      approximate,
    image: "/images/official/locations/mount-kalaga.webp",
    imageAlt: "Official Mount Kalaga National Park still of riders on a muddy track",
    sourceUrl: rockstar.kalaga,
    sourceLabel: "Rockstar — Only in Leonida, Mount Kalaga",
    href: "/locations/mount-kalaga",
    hrefLabel: "Mount Kalaga on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(620, 230),
  },
  {
    id: "ambrosia-sheriffs-office",
    title: "Ambrosia County Sheriff’s Office",
    category: "locations",
    description:
      "The sign reading Ambrosia County Sheriff’s Office is visible in Rockstar’s Ambrosia street still. The office is pinned inside Ambrosia, not at a street address. " +
      approximate,
    image: "/images/official/locations/ambrosia.webp",
    imageAlt: "Official Ambrosia street still. The sheriff’s office sign is on the left",
    sourceUrl: rockstar.screenshots,
    sourceLabel: "Rockstar — Ambrosia screenshot",
    href: "/locations/ambrosia",
    hrefLabel: "Ambrosia on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(700, 600),
  },
  {
    id: "jack-of-hearts",
    title: "Jack of Hearts",
    category: "businesses",
    description:
      "Rockstar’s Boobie Ike still shows a neon Jack of Hearts sign over an adult-entertainment entrance. The character page calls Boobie a Vice City figure with a strip club. The street is not shown. " +
      approximate,
    image: "/images/official/media/screenshots-people-boobie-ike-boobie-ike-02.webp",
    imageAlt: "Official still of Boobie Ike outside a neon Jack of Hearts sign",
    sourceUrl: rockstar.viceCity,
    sourceLabel: "Rockstar — Boobie Ike still and Vice City page",
    href: "/businesses/jack-of-hearts",
    hrefLabel: "Jack of Hearts on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(880, 940),
  },
  {
    id: "only-raw-records",
    title: "Only Raw Records",
    category: "businesses",
    description:
      "Rockstar names Only Raw Records with Dre'Quan Priest and places that scene in Vice City. No storefront address is shown. " +
      approximate,
    image: "/images/official/media/screenshots-people-drequan-priest-drequan-priest-04.webp",
    imageAlt: "Official Dre'Quan Priest still of a mixing desk, not a labeled storefront",
    sourceUrl: rockstar.viceCity,
    sourceLabel: "Rockstar — Dre'Quan Priest, Only in Leonida",
    href: "/businesses/only-raw-records",
    hrefLabel: "Only Raw Records on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(800, 990),
  },
  {
    id: "brian-boat-yard",
    title: "Brian Heder’s boat yard",
    category: "businesses",
    description:
      "Rockstar describes Brian Heder as a Keys smuggler still moving product through his boat yard. The yard is pinned in the Leonida Keys. Rockstar has not published the yard’s name on a sign in the stills used here. " +
      approximate,
    image: "",
    imageAlt: "",
    sourceUrl: rockstar.keys,
    sourceLabel: "Rockstar — Brian Heder, Only in Leonida",
    href: "/businesses/brian-boat-works",
    hrefLabel: "Boat yard on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(680, 1350),
  },
  {
    id: "allied-crystal",
    title: "Allied Crystal sugar refinery",
    category: "businesses",
    description:
      "Named in Rockstar’s Ambrosia text as the refinery that provides the jobs in the heart of Leonida. Pinned inside Ambrosia. " +
      approximate,
    image: "/images/official/locations/ambrosia.webp",
    imageAlt: "Official Ambrosia street still. The refinery is named in Rockstar’s Ambrosia text",
    sourceUrl: rockstar.ambrosia,
    sourceLabel: "Rockstar — Ambrosia description",
    href: "/locations/ambrosia",
    hrefLabel: "Ambrosia on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(530, 470),
  },
  {
    id: "starlet-motel",
    title: "Starlet Motel",
    category: "businesses",
    description:
      "Rockstar’s Port Gellhorn still shows a motel at night. The sign on that still reads Starlet Motel. Pinned inside Port Gellhorn. " +
      approximate,
    image: "/images/official/locations/port-gellhorn.webp",
    imageAlt: "Official still of the Starlet Motel vacancy sign in Port Gellhorn",
    sourceUrl: rockstar.portGellhorn,
    sourceLabel: "Rockstar — Port Gellhorn motel still",
    href: "/locations/port-gellhorn",
    hrefLabel: "Port Gellhorn on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(360, 830),
  },
  {
    id: "shore-court",
    title: "Shore Court",
    category: "garages",
    description:
      "Rockstar’s Vintage Vice City copy says the ’55 Vapid Stanier is kept in the Shore Court personal garage, a stone’s throw from Ocean Beach, with a weapon locker and a place to leave stolen goods. Pinned beside Ocean Beach. " +
      approximate,
    image: "",
    imageAlt: "",
    sourceUrl: rockstar.home,
    sourceLabel: "Rockstar — Vintage Vice City Pack",
    href: "/launch",
    hrefLabel: "Editions on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(950, 1040),
  },
  {
    id: "ptt-youngin",
    title: "PTT Youngin$",
    category: "shops",
    description:
      "Ultimate Edition illegal-goods store. Rockstar places the compound in Southside Vice City. " +
      approximate,
    image: "/images/official/editions/ultimate_edition_ptt_store_01.webp",
    imageAlt: "Official Ultimate Edition still of the PTT Youngin$ store",
    sourceUrl: rockstar.home,
    sourceLabel: "Rockstar — Ultimate Edition",
    href: "/launch",
    hrefLabel: "Editions on GTA Companion",
    confirmed: true,
    approximate: true,
    ...at(860, 1070),
  },
];

/** Drawn on the map. Unconfirmed markers never pass this filter. */
export const publicMapMarkers: MapMarker[] = mapMarkers.filter(
  (marker) => marker.confirmed && marker.category !== "unconfirmed"
);

if (
  publicMapMarkers.some(
    (marker) => !marker.confirmed || marker.category === "unconfirmed"
  )
) {
  throw new Error("Unconfirmed markers must not be exported on the public map");
}

export function markerById(id: string) {
  return publicMapMarkers.find((marker) => marker.id === id) ?? null;
}
