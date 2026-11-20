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
const O = "/images/official";
const paynsprayKeyLento: PlaceImage = { src: `${F}/places/pay-n-spray-key-lento.webp`, alt: "Pay 'n' Spray Key Lento" };
const paynsprayGarage: PlaceImage = {
  src: `${F}/places/pay-n-spray-hamlet-garage.webp`,
  alt: "The Imponte Phoenix inside the Pay 'n' Spray in Hamlet",
};

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
  // Batch 4 (stills-inventory.md): hub and topic cards that link to these pages.
  "/where-to-find/pay-n-spray": paynsprayKeyLento,
  "/where-to-find/garages": jasonsHouse,
  "/where-to-find/melee-and-explosives": chucks,
  "/where-to-find/hair-salons": {
    src: `${O}/editions/ultimate_edition_saras_salon_02.webp`,
    alt: "Jason at Sara's Unisex Salon in Hamlet (official Rockstar image)",
  },
  "/businesses/pay-n-spray": paynsprayGarage,
  "/money-methods/sell-cars-at-pay-n-spray": paynsprayGarage,
  "/wanted-system": {
    src: `${F}/places/wanted-hamlet-police.webp`,
    alt: "Jason escaping the Hamlet Police Department in the Imponte Phoenix with a wanted level",
  },
  "/weapons": { src: `${O}/categories/weapons.webp`, alt: "Weapons" },
  "/characters": { src: `${O}/categories/characters.webp`, alt: "Characters" },
  "/vehicles": { src: `${O}/categories/vehicles.webp`, alt: "Vehicles" },
  "/animals": { src: `${O}/categories/animals.webp`, alt: "Animals" },
  "/map": { src: `${O}/locations/vice-city.webp`, alt: "Vice City (official Rockstar image)" },
  "/clothing": {
    src: `${O}/editions/ultimate_edition_vice_city_style_01.webp`,
    alt: "Vice City Style clothing (official Rockstar image)",
  },
};

export function imageForPath(path: string): PlaceImage | undefined {
  return PLACE_IMAGES[path];
}
