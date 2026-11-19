/**
 * Photos of one exact place, keyed by its page path. Each is our own GTA 6
 * gameplay still or an official Rockstar image of that same place.
 * Fact check: /workspace/videos/stills-inventory.md (Batch 3)
 */
type PlaceImage = { src: string; alt: string };

const F = "/images/footage";

const chucks: PlaceImage = {
  src: `${F}/brands/ammu-nation.webp`,
  alt: "Chuck's Tackle & Shot, an Ammu-Nation store in Key Lento",
};
const bigShots: PlaceImage = { src: `${F}/places/big-shots.webp`, alt: "Big Shots gun store" };
const coastal: PlaceImage = { src: `${F}/places/coastal-auto-care.webp`, alt: "Coastal Auto Care" };
const jasonsHouse: PlaceImage = { src: `${F}/properties/jasons-place.webp`, alt: "Jason's house in the Keys" };

const PLACE_IMAGES: Record<string, PlaceImage> = {
  "/where-to-find/gun-stores": bigShots,
  "/where-to-find/gun-stores/chucks-tackle-and-shot": chucks,
  "/where-to-find/gun-stores/big-shots": bigShots,
  "/where-to-find/melee-and-explosives/chucks-tackle-and-shot": chucks,
  "/where-to-find/mod-shops": coastal,
  "/where-to-find/mod-shops/coastal-auto-care": coastal,
  "/where-to-find/pay-n-spray/key-lento": {
    src: `${F}/places/pay-n-spray-key-lento.webp`,
    alt: "Pay 'n' Spray Key Lento",
  },
  "/where-to-find/pay-n-spray/hamlet": {
    src: `${F}/places/pay-n-spray-hamlet.webp`,
    alt: "Pay 'n' Spray Hamlet",
  },
  "/where-to-find/garages/jasons-house": jasonsHouse,
  "/ammu-nation-locations": chucks,
  "/ammu-nation-locations/chucks-tackle-and-shot": chucks,
  "/ammu-nation-locations/big-shots": bigShots,
  "/properties": jasonsHouse,
};

export function imageForPath(path: string): PlaceImage | undefined {
  return PLACE_IMAGES[path];
}
