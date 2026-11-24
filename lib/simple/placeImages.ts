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
const mosesSell: PlaceImage = {
  src: `${F}/money-methods/sell-cars-to-moses.webp`,
  alt: "Moses standing in a garage doorway beside a prompt to sell a Shifter",
};
const starlet: PlaceImage = {
  src: `${F}/properties/starlet-motel.webp`,
  alt: "The Starlet Motel sign beside the road, with the motel office behind it",
};
const sarenas: PlaceImage = {
  src: `${F}/places/sarenas-bargain-store.webp`,
  alt: "Inside Sarena's Bargain Store, with a sale sign, clothes racks, and snack shelves",
};
const gellhorn: PlaceImage = {
  src: `${F}/places/gellhorn-outfitters.webp`,
  alt: "Inside Gellhorn Outfitters, with the shop banner behind the counter and rifles on the wall",
};
const fleeca: PlaceImage = {
  src: `${F}/brands/fleeca.webp`,
  alt: "A Fleeca Bank teller counter, with FLEECA BANK lettering on the green wall",
};
const rustyAnchor: PlaceImage = {
  src: `${F}/businesses/the-rusty-anchor.webp`,
  alt: "Inside The Rusty Anchor, with a band on stage and the name on the backdrop",
};
const delights: PlaceImage = {
  src: `${F}/businesses/delights.webp`,
  alt: "The Delights Cabaret sign at night, with neon Girls signs and a marquee",
};

const uncleJacksBayside: PlaceImage = {
  src: `${F}/places/uncle-jacks-liquor-bayside.webp`,
  alt: "Uncle Jack's Liquor in Bayside, with LIQUOR STORE over the windows and a Jack's Got Your Back poster by the door",
};

const PLACE_IMAGES: Record<string, PlaceImage> = {
  "/where-to-find/liquor-stores/uncle-jacks-liquor-bayside": uncleJacksBayside,
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
  // Content batch 4: official Rockstar stills of the same kind of place.
  "/where-to-find/jewelry-stores-and-pawn-shops": {
    src: `${O}/frames/jewelry-robbery.webp`,
    alt: "A jewelry store robbery (official Rockstar still)",
  },
  // Content batch 5: a real gas station screenshot (247 Gas pump, Services prompt).
  "/where-to-find/gas-stations": {
    src: "/images/footage/guides/gas-station-services.webp",
    alt: "The Services prompt at a 247 gas station pump",
  },
  "/where-to-find/gyms": {
    src: `${O}/frames/gym-workout.webp`,
    alt: "Lucia working out in a gym (official Rockstar still)",
  },
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
  // Gameplay stills, 22 Nov 2026. Our own footage of these exact places.
  "/businesses/watkins-auto-parts": {
    src: `${F}/businesses/watkins-auto-parts.webp`,
    alt: "The Watkins Auto Parts building, with a van parked at the open garage door",
  },
  "/money-methods/sell-cars-to-moses": mosesSell,
  "/activities/stealing-cars-to-sell": mosesSell,
  "/properties/starlet-motel": starlet,
  "/businesses/starlet-motel": starlet,
  "/phone/banking-app": {
    src: `${F}/phone/banking-app.webp`,
    alt: "BuckMe",
  },
  "/where-to-find/convenience-stores": sarenas,
  "/where-to-find/convenience-stores/sarenas-bargain-store": sarenas,
  "/money-methods/store-robberies": sarenas,
  "/ammu-nation-locations/gellhorn-outfitters": gellhorn,
  "/where-to-find/gun-stores/gellhorn-outfitters": gellhorn,
  "/where-to-find/pay-n-spray/salton": {
    src: `${F}/places/pay-n-spray-salton.webp`,
    alt: "The Pay 'n' Spray garage in Salton, with a yellow Pegassi Charred Toros in the service bay",
  },
  // Gameplay stills, 23 Nov 2026. Our own footage of these exact places.
  "/brands/fleeca": fleeca,
  "/businesses/fleeca": fleeca,
  "/businesses/the-rusty-anchor": rustyAnchor,
  "/where-to-find/clubs/the-rusty-anchor": rustyAnchor,
  "/where-to-find/bars/the-rusty-anchor": rustyAnchor,
  "/businesses/delights": delights,
  "/where-to-find/clubs/delights-cabaret": delights,
  "/where-to-find/cafes/key-lento-candy": {
    src: `${F}/cafes/key-lento-candy.webp`,
    alt: "The pink Key Lento Candy storefront, with Ice Cream, Chocolate, and Gifts signs",
  },
  "/where-to-find/cafes/asian-fusion": {
    src: `${F}/cafes/asian-fusion.webp`,
    alt: "A roadside sign for Asian Fusion, with Food Store, beer, cigarettes, and wine",
  },
  "/characters/moses-watkins": {
    src: `${F}/characters/moses-watkins.webp`,
    alt: "Moses Watkins in a garage, facing the camera, with stacked tires behind him",
  },
  "/where-to-find/convenience-stores/leonida-truck-stop": {
    src: `${F}/convenience-stores/leonida-truck-stop.webp`,
    alt: "The Leonida Truck Stop, with the store awning, a fuel canopy, and a yellow pickup in front",
  },
  "/where-to-find/electronics-stores/zekes-gadgets": {
    src: `${F}/electronics-stores/zekes-gadgets.webp`,
    alt: "The Zekes Gadgets storefront, with a We Do Repairs sign",
  },
  "/where-to-find/hair-salons/pearl-house-hair-salon": {
    src: `${F}/hair-salons/pearl-house-hair-salon.webp`,
    alt: "The Pearl House Hair Salon window, with an Open sign and a white SUV in the lot",
  },
  "/where-to-find/jewelry-stores-and-pawn-shops/joyeria-empenos": {
    src: `${F}/jewelry-stores-and-pawn-shops/joyeria-empenos.webp`,
    alt: "The Joyeria Empenos pawn shop front, with a pawn shop banner above the windows",
  },
  "/locations/la-perle": {
    src: `${F}/locations/la-perle.webp`,
    alt: "Highway signs for La Perle and Mariana County, with a red convertible in front",
  },
  "/locations/southside-vice-city": {
    src: `${F}/locations/southside-vice-city.webp`,
    alt: "A highway sign for Southside and Peacock Bay, with the Vice City skyline behind it",
  },
  "/locations/watson-bay": {
    src: `${F}/locations/watson-bay.webp`,
    alt: "An overhead sign for 82 East toward Watson Bay and Hamlet",
  },
  "/manufacturers/karin": {
    src: `${F}/manufacturers/karin.webp`,
    alt: "The rear of a white Karin pickup, with KARIN stamped on the tailgate",
  },
  "/where-to-find/mod-shops/whisler-motorsport": {
    src: `${F}/mod-shops/whisler-motorsport.webp`,
    alt: "A blue Pegassi SUV inside a lit garage",
  },
  "/where-to-find/payday-loans/cash-flow": {
    src: `${F}/payday-loans/cash-flow.webp`,
    alt: "The Cash Flow window, with Payday Loans lettering and a 100% Approval sign",
  },
};

export function imageForPath(path: string): PlaceImage | undefined {
  return PLACE_IMAGES[path];
}
