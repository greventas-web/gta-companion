import { isPlaceholderSrc } from "@/lib/media/catalog";

/**
 * Card and detail images: only confirmed, item-specific official images.
 * 1. the item's own photo (from its data entry),
 * 2. an official Rockstar file that shows this exact item, matched by exact name.
 * Anything else gets no image: the card renders as a blank Browse-style card
 * and the detail page shows a compact header. Adding a photo later is a
 * single `image` change in the item's data.
 */
export type CardImageSource = "own" | "none";
export type CardImage = { src?: string; source: CardImageSource };

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
  [/^the chamber( 106)?$/i, [`${R}/chamber-background.webp`]],
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

export function resolveCardImage({ image, title }: { image?: string; title: string; text?: string; kind?: string }): CardImage {
  if (image && !isPlaceholderSrc(image)) return { src: image, source: "own" };
  const specific = SPECIFIC.find(([re]) => re.test(title.trim()));
  if (specific) return { src: pick(specific[1], title), source: "own" };
  return { source: "none" };
}

const PREFIX: [string, string][] = [
  ["/where-to-find/hair-salons", "salon"],
  ["/where-to-find/tattoo", "tattoo"],
  ["/where-to-find/clothing", "clothingstore"],
  ["/where-to-find/gun-stores", "gunstore"],
  ["/where-to-find/melee", "weapon"],
  ["/where-to-find/mod-shops", "mod"],
  ["/where-to-find/pay-n-spray", "mod"],
  ["/where-to-find/garages", "garage"],
  ["/where-to-find/fences", "money"],
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
