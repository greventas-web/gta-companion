import { isPlaceholderSrc } from "@/lib/media/catalog";

import artManifest from "./artManifest.json";

/**
 * Card and detail images: only confirmed, item-specific official images.
 * 1. the item's own photo (from its data entry),
 * 2. an official Rockstar file that shows this exact item, matched by exact name.
 * 3. otherwise a designed GTA Companion artwork (scripts/images/card-art.mjs):
 *    a made-up Vice City style poster with the item's icon or monogram. It is
 *    artwork, never presented as a screenshot, and any real photo replaces it.
 * Adding a photo later is a single `image` change in the item's data.
 */
export type CardImageSource = "own" | "art" | "none";
export type CardImage = { src?: string; source: CardImageSource; imageKind?: "photo" | "art"; artKey?: string };

const O = "/images/official";
const E = `${O}/editions`;
const F = `${O}/frames`;
const R = `${O}/radio`;

/** Official files whose subject is exactly the named item. Anchored to the full title. */
const SPECIFIC: [RegExp, string[]][] = [
  [/^electric fang( tattoo)?$/i, [1, 2, 3, 4].map((n) => `${E}/ultimate_edition_electric_fang_0${n}.webp`)],
  [/^sara['’]?s unisex salon$/i, [1, 2, 3].map((n) => `${E}/ultimate_edition_saras_salon_0${n}.webp`)],
  [/^rideout customs$/i, [1, 2, 3].map((n) => `${E}/ultimate_edition_rideout_customs_0${n}.webp`)],
  [/^one-eyed willie['’]?s( auto shop)?$/i, [1, 2, 3].map((n) => `${E}/ultimate_edition_one_eyed_willie_0${n}.webp`)],
  [/^stock 305$/i, [1, 2, 3, 4].map((n) => `${E}/ultimate_edition_stock_305_0${n}.webp`)],
  [/^ptt youngin\$ illegal goods store$/i, [`${E}/ultimate_edition_ptt_store_01.webp`]],
  [/^vice city style$/i, [1, 2, 3, 4, 5].map((n) => `${E}/ultimate_edition_vice_city_style_0${n}.webp`)],
  [/^goodtime gear$/i, [`${E}/ultimate_edition_goodtime_gear_01.webp`]],
  [/^(the )?classic car collection$/i, [1, 2, 3, 4, 5, 6].map((n) => `${E}/ultimate_edition_wyman_car_collection_0${n}.webp`)],
  [/^afrobank fm$/i, [`${R}/afrobank-background.webp`]],
  [/^the chamber( 106(\.6)?)?$/i, [`${R}/chamber-background.webp`]],
  [/^cocoteo fm$/i, [`${R}/cocoteo-background.webp`]],
  [/^back country radio$/i, [`${R}/country-background.webp`]],
  [/^dirty south classics$/i, [`${R}/dirty-south-background.webp`]],
  [/^flash fm$/i, [`${R}/flash-background.webp`]],
  [/^pi(ß|ss)wasser$/i, [`${F}/piswasser.webp`]],
  [/^sprunk$/i, [`${F}/sprunk.webp`]],
  [/^ecola$/i, [`${F}/ecola.webp`]],
  [/^high rollerz lifestyle$/i, [`${F}/high-rollerz-lifestyle.webp`]],
  [/^nine1nine$/i, [`${F}/nine1nine.webp`]],
  [/^brian['’]?s boat works( & marina)?$/i, [`${F}/brian-boat-works.webp`]],
  [/^(greater )?flamingo$/i, [`${F}/flamingo.webp`]],
  [/^(brown )?pelican$/i, [`${F}/pelican.webp`]],
  [/^(bottlenose )?dolphin$/i, [`${F}/dolphin.webp`]],
  [/^wildcat$/i, [`${F}/wildcat.webp`]],
  [/^feral cat$/i, [`${F}/feral-cat.webp`]],
  [/^mini-?golf$/i, [`${F}/mini-golf.webp`]],
  [/^gym workouts?$/i, [`${F}/gym-workout.webp`]],
  [/^hunting$/i, [`${F}/hunting.webp`]],
  [/^track racing$/i, [`${F}/track-racing.webp`]],
  [/^watching tv$/i, [`${F}/watching-tv.webp`]],
];

function pick(list: string[], seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return list[h % list.length];
}

const ART_ITEMS = new Set<string>(artManifest.items);
const ART_KINDS = new Set<string>(artManifest.kinds);
/** Card kinds whose art falls back to another kind's look. */
const ART_ALIAS: Record<string, string> = { manufacturer: "vehicle", area: "location", landmark: "location", outfit: "clothing", hairstyle: "salon" };

/** Same slug rule as scripts/images/card-art.mjs. */
export function artSlug(title: string) {
  return (
    title
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/['’`]/g, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "item"
  );
}

/** The art theme for a card kind. Unknown kinds use the map-pin look, like the card icon. */
export function artKind(kind?: string) {
  const k = kind ? ART_ALIAS[kind] ?? kind : "";
  return ART_KINDS.has(k) ? k : "location";
}

/** Designed artwork for an item with no real image: its own file, or one from its kind's pool. */
export function cardArt(title: string, kind?: string): CardImage {
  const theme = artKind(kind);
  const key = `${theme}/${artSlug(title)}`;
  const file = ART_ITEMS.has(key) ? key : `${theme}/_pool-${(seedOf(title) % artManifest.pool) + 1}`;
  return { src: `/images/art/${file}.webp`, source: "art", imageKind: "art", artKey: key };
}

function seedOf(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

/** Real image when there is one; never designed art. */
export function resolveRealImage({ image, title }: { image?: string; title: string }): CardImage {
  if (image && !isPlaceholderSrc(image)) return { src: image, source: "own", imageKind: "photo" };
  const specific = SPECIFIC.find(([re]) => re.test(title.trim()));
  if (specific) return { src: pick(specific[1], title), source: "own", imageKind: "photo" };
  return { source: "none" };
}

/** Real image first, then designed artwork, so no card is ever blank. */
export function resolveCardImage({ image, title, kind }: { image?: string; title: string; text?: string; kind?: string }): CardImage {
  const real = resolveRealImage({ image, title });
  if (real.src) return real;
  return cardArt(title, kind);
}

const PREFIX: [string, string][] = [
  ["/guides", "guide"],
  ["/challenges", "challenge"],
  ["/where-to-find/hair-salons", "salon"],
  ["/where-to-find/tattoo", "tattoo"],
  ["/where-to-find/clothing", "clothingstore"],
  ["/where-to-find/gun-stores", "gunstore"],
  ["/where-to-find/melee", "weapon"],
  ["/where-to-find/mod-shops", "mod"],
  ["/where-to-find/pay-n-spray", "mod"],
  ["/where-to-find/garages", "garage"],
  ["/where-to-find/fences", "money"],
  ["/where-to-find/jewelry-stores-and-pawn-shops", "money"],
  ["/where-to-find/payday-loans", "money"],
  ["/where-to-find/gyms", "activity"],
  ["/where-to-find/clubs", "business"],
  ["/challenges", "trophy"],
  ["/ammu-nation", "gunstore"],
  ["/shooting-ranges", "range"],
  ["/weapons", "weapon"],
  ["/vehicles", "vehicle"],
  ["/fastest-cars", "vehicle"],
  ["/manufacturers", "vehicle"],
  ["/girlypop", "vehicle"],
  ["/animals", "animal"],
  ["/activities", "activity"],
  ["/money-methods", "money"],
  ["/brands", "brand"],
  ["/clothing", "clothing"],
  ["/businesses", "business"],
  ["/characters", "character"],
  ["/phone", "phone"],
  ["/radio", "radio"],
  ["/cheats", "cheat"],
  ["/missions", "mission"],
  ["/trophies", "trophy"],
  ["/collectibles", "collectible"],
  ["/news", "news"],
  ["/locations", "location"],
  ["/stores", "store"],
  ["/properties", "property"],
];

/** Item kind from its link, used for the card icon. */
export function kindFromHref(href?: string): string | undefined {
  if (!href) return undefined;
  return PREFIX.find(([prefix]) => href.startsWith(prefix))?.[1];
}
