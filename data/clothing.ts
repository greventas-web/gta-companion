import type { ClothingItem } from "@/types/clothing";
import { fillSources as fill } from "@/src/data/launch/fill-sources";
import {
  famitsuSources,
  playstationGame,
  rockstarEditions,
  rockstarSupportEditions,
  rockstarUltimate,
} from "@/src/data/gameplay/confirmed";

const editionSources = [rockstarUltimate, rockstarEditions, playstationGame] as const;
const packSources = [rockstarUltimate, rockstarEditions, rockstarSupportEditions] as const;

const stockImage = "/images/official/editions/ultimate_edition_stock_305_01.webp";
const fangImage = "/images/official/editions/ultimate_edition_electric_fang_01.webp";
const salonImage = "/images/official/editions/ultimate_edition_saras_salon_01.webp";
const goodtimeImage = "/images/official/editions/ultimate_edition_goodtime_gear_01.webp";
const viceStyleImage = "/images/official/editions/ultimate_edition_vice_city_style_01.webp";

const packGaps = [
  "A full itemized catalog",
  "Prices",
];

export const clothing: ClothingItem[] = [
  {
    id: 1,
    slug: "vice-city-style",
    name: "Vice City Style",
    kind: "pack",
    kindLabel: "Pack",
    group: "Packs",
    appliesTo: "Both",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition",
    howToGet: "Included with the Ultimate Edition. The items appear in your wardrobe and in the Special tab at most salons and tattoo parlors later in the story.",
    details: [
      {
        label: "When it unlocks",
        value:
          "Not at the start. Push Square saw the items arrive partway through Chapter 4, and PowerPyx lists the wardrobe pieces from Chapter 5. Either way they land on their own, with nothing to pick up.",
        sources: [fill.powerpyxUltimate, fill.pushSquareUltimate],
      },
      {
        label: "Where to find it",
        value: "Check your wardrobe at home, and the Special tab at most hair salons and tattoo parlors.",
        sources: [fill.pushSquareUltimate],
      },
    ],
    summary:
      "Ultimate Edition looks for Jason and Lucia: exclusive outfits and tattoos, and hairstyles on the PlayStation listing.",
    image: viceStyleImage,
    imageAlt:
      "Jason and Lucia seated poolside, from Rockstar's Vice City Style artwork.",
    imageCaption:
      "Official Ultimate Edition still. Rockstar has not named the individual outfits in this photo.",
    facts: [
      {
        label: "Rockstar",
        value:
          "Whether poolside or side by side, Jason and Lucia can look the part with exclusive outfits, tattoos, and more.",
        sources: [rockstarUltimate, rockstarEditions],
      },
      {
        label: "PlayStation listing",
        value:
          "Whether poolside or side by side, Jason and Lucia can look the part with exclusive outfits, hairstyles, tattoos and more.",
        sources: [playstationGame],
      },
    ],
    unpublished: [...packGaps, "Names for the outfits, hairstyles, and tattoos in the pack"],
    relatedSlugs: ["stock-305-looks", "saras-salon-styles", "electric-fang-tattoos"],
    sources: editionSources,
  },
  {
    id: 2,
    slug: "goodtime-gear",
    name: "Goodtime Gear",
    kind: "pack",
    kindLabel: "Pack",
    group: "Packs",
    appliesTo: "Both",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition",
    howToGet: "Sold from Chapter 1 at The Wonder Whale, a gift shop on Sunbelt Hwy in Key Lento. The Ultimate Edition pieces hang on the mannequins left of the entrance.",
    details: [
      {
        label: "Where to buy it",
        value:
          "The Wonder Whale on Sunbelt Hwy, Key Lento (Mariana County), from Chapter 1. On the map it is under Style, then Souvenir & Swimwear. Ultimate Edition items carry a blue tag in the corner.",
        sources: [fill.pushSquareUltimate, fill.powerpyxClothingStores],
      },
      {
        label: "Outfits in your wardrobe",
        value:
          "Jason gets a Hawaiian shirt, tank and pants, and Lucia gets a denim co-ord, bikini and boots. PowerPyx says these show up in the wardrobe from Chapter 4.",
        sources: [fill.powerpyxUltimate],
      },
    ],
    summary:
      "Ultimate Edition apparel and accessories inspired by Macca the Gator. The official still shows Jason and Lucia wearing it.",
    image: goodtimeImage,
    imageAlt:
      "Jason and Lucia wearing hats and shirts featuring Macca the Gator that have Vice City, Leonida graphic text printed on them.",
    imageCaption: "Official Ultimate Edition still of Goodtime Gear.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "A capsule collection of apparel and accessories inspired by the Goodtime State’s hit TV show character, Macca the Gator.",
        sources: editionSources,
      },
      {
        label: "Who is shown",
        value:
          "The official still shows Jason and Lucia wearing hats and shirts featuring Macca the Gator, with Vice City, Leonida text.",
        sources: [rockstarUltimate],
      },
    ],
    unpublished: [...packGaps],
    relatedSlugs: [],
    sources: editionSources,
  },
  {
    id: 3,
    slug: "vintage-vice-city-looks",
    name: "Vintage Vice City outfits and hairstyles",
    image: "/images/official/editions/vintage_vice_city_pack_exclusive_looks_01.webp",
    imageAlt:
      "Jason and Lucia in their Vintage Vice City Pack looks (official Rockstar image)",
    kind: "pack",
    kindLabel: "Pack",
    group: "Packs",
    appliesTo: "Both",
    editionRequirement: "pre-order",
    editionLabel: "Vintage Vice City Pack",
    howToGet:
      "Part of the Vintage Vice City Pack, Rockstar's pre-order bonus for either edition. Soon after you reach Vice City, a marker sends you to the Ocean View Hotel in Vice Beach, and getting into the '55 Vapid Stanier there adds the clothes to your wardrobe.",
    details: [
      {
        label: "How to unlock it",
        value:
          "Shortly after you arrive in Vice City (Chapter 3), a marker points to the Ocean View Hotel in Vice Beach. Get into the '55 Vapid Stanier parked there: the clothes go to your wardrobe and you also get the Shore Court garage.",
        sources: [fill.powerpyxUltimate, fill.pushSquareUltimate],
      },
      {
        label: "Hair and gun patterns",
        value:
          "The pack's hairstyles sit in the Special tab at salons, and its weapon liveries are at Ammu-Nation, marked with the Vintage Vice City Pack label.",
        sources: [fill.pushSquareUltimate],
      },
    ],
    summary:
      "Pre-order outfits and hairstyles for Jason and Lucia, including a pastel linen suit and a red sequin mini dress.",
    facts: [
      {
        label: "The pack",
        value:
          "Decadent outfits and hairstyles for both Jason and Lucia, alongside the ’55 Vapid Stanier and garage near Ocean Beach, and an iconic weapon pattern that echoes the excess of the past.",
        sources: [rockstarEditions, rockstarUltimate],
      },
      {
        label: "Named looks",
        value:
          "Dress for excess with Jason’s effortlessly chic linen suit in vintage pastel, complemented by the cut and coif of the decade of decadence. Show everyone the world is yours in Lucia’s red sequin mini dress and curls.",
        sources: [rockstarUltimate],
      },
      {
        label: "How it is included",
        value:
          "Rockstar calls the Vintage Vice City Pack a pre-order bonus. Rockstar Support says purchases before November 20, 2026 include the pack. It is not limited to the Ultimate Edition.",
        sources: packSources,
      },
    ],
    unpublished: [
      "Hairstyle names beyond the cut, coif, and curls in that sentence",
      "More outfit names",
      "Prices",
    ],
    relatedSlugs: ["jason-pastel-linen-suit", "lucia-red-sequin-mini-dress"],
    sources: packSources,
  },
  {
    id: 4,
    slug: "jason-pastel-linen-suit",
    name: "Jason's pastel linen suit",
    image: "/images/official/editions/vintage_vice_city_pack_02.webp",
    imageAlt:
      "Jason in the pastel linen suit next to Lucia and the '55 Vapid Stanier (official Rockstar image)",
    kind: "outfit",
    kindLabel: "Outfit",
    group: "Named pieces",
    appliesTo: "Jason",
    editionRequirement: "pre-order",
    editionLabel: "Vintage Vice City Pack",
    howToGet:
      "Named in the Vintage Vice City Pack. Rockstar Support says purchases before November 20, 2026 include the pack.",
    summary:
      "Jason's vintage pastel linen suit from the Vintage Vice City Pack, worn with the cut and coif Rockstar describes for that decade.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Dress for excess with Jason’s effortlessly chic linen suit in vintage pastel, complemented by the cut and coif of the decade of decadence.",
        sources: [rockstarUltimate],
      },
    ],
    unpublished: [
      "A separate name for the haircut",
      "Price",
      "Story unlock timing",
    ],
    relatedSlugs: ["vintage-vice-city-looks", "lucia-red-sequin-mini-dress"],
    sources: packSources,
  },
  {
    id: 5,
    slug: "lucia-red-sequin-mini-dress",
    name: "Lucia's red sequin mini dress",
    image: "/images/official/editions/vintage_vice_city_pack_01.webp",
    imageAlt:
      "Lucia in the red sequin mini dress outside the Ocean View Hotel (official Rockstar image)",
    kind: "outfit",
    kindLabel: "Outfit",
    group: "Named pieces",
    appliesTo: "Lucia",
    editionRequirement: "pre-order",
    editionLabel: "Vintage Vice City Pack",
    howToGet:
      "Named in the Vintage Vice City Pack, with curls. Rockstar Support says purchases before November 20, 2026 include the pack.",
    summary:
      "Lucia's red sequin mini dress and curls from the Vintage Vice City Pack.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Show everyone the world is yours in Lucia’s red sequin mini dress and curls.",
        sources: [rockstarUltimate],
      },
    ],
    unpublished: [
      "A separate name for the curls",
      "Price",
      "Story unlock timing",
    ],
    relatedSlugs: ["vintage-vice-city-looks", "jason-pastel-linen-suit"],
    sources: packSources,
  },
  {
    id: 6,
    slug: "stock-305-looks",
    name: "Stock 305 looks",
    kind: "outfit",
    kindLabel: "Shop catalog",
    group: "Shop catalogs",
    appliesTo: "Both",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition, at Stock 305",
    howToGet: "Bought at Stock 305 on NE 15th St in Stockyard, Vice City. The shop is open from Chapter 1, but only with the Ultimate Edition.",
    details: [
      {
        label: "Where",
        value:
          "NE 15th St, Stockyard, Vice City (Vice-Dale County). On the map it is under Style, then Casual & Street. Exclusive pieces carry a blue tag.",
        sources: [fill.pushSquareUltimate, fill.powerpyxClothingStores],
      },
      {
        label: "When",
        value: "Open from Chapter 1 for Ultimate Edition owners.",
        sources: [fill.pushSquareUltimate],
      },
    ],
    summary:
      "The unique looks Rockstar says Jason and Lucia can style at Stock 305. Individual names have not been published.",
    storeSlug: "stock-305",
    image: stockImage,
    imageAlt:
      "Outside of the Stock 305 store, Lucia is leaning up against a van while Jason is sitting on the roof.",
    imageCaption:
      "The store exterior. Rockstar has not said these outfits are the exclusive catalog.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Style various unique and exclusive looks for Jason and Lucia at Stockyard’s premier destination for elevated streetwear.",
        sources: editionSources,
      },
    ],
    unpublished: [
      "Every look's name",
      "Prices",
      "Which trailer outfits are sold here",
    ],
    relatedSlugs: ["vice-city-style"],
    sources: editionSources,
  },
  {
    id: 7,
    slug: "saras-salon-styles",
    name: "Sara's salon styles",
    kind: "hairstyle",
    kindLabel: "Shop catalog",
    group: "Shop catalogs",
    appliesTo: "Both",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition, at Sara's Unisex Salon",
    howToGet: "Applied at Sara's Unisex Salon on Cicada Ave in Hamlet. You can walk in from Chapter 1, but the signature styles unlock in Chapter 2.",
    details: [
      {
        label: "Where",
        value:
          "Cicada Ave, Hamlet, in South Vice-Dale County. On the map it is under Style, then Hair & Beauty.",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "When",
        value: "The salon opens in Chapter 1. Its signature styles unlock in Chapter 2.",
        sources: [fill.pushSquareUltimate],
      },
    ],
    summary:
      "Signature salon styles for Jason and Lucia, including facial hair, makeup, and nails. The menu itself is not published.",
    storeSlug: "saras-unisex-salon",
    image: salonImage,
    imageAlt: "Jason and Lucia pose at the entrance to Sara's Unisex Salon.",
    imageCaption:
      "Entrance still. It is not a menu of cuts. The mullet Rockstar names is a separate entry.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Get signature salon styles for both Jason and Lucia, including facial hair for Jason and makeup and nails for Lucia.",
        sources: editionSources,
      },
      {
        label: "At a hideout",
        value:
          "Rob Nelson says you can cut your hair at a hideout, with fewer options than a salon.",
        sources: famitsuSources,
      },
    ],
    unpublished: [
      "The full style menu",
      "Prices",
    ],
    relatedSlugs: ["jason-mullet"],
    sources: [...editionSources, ...famitsuSources],
  },
  {
    id: 8,
    slug: "jason-mullet",
    name: "Jason's mullet",
    image: "/images/official/editions/ultimate_edition_saras_salon_02.webp",
    imageAlt:
      "Jason looking over his shoulder with his mullet from Sara's Unisex Salon (official Rockstar image)",
    kind: "hairstyle",
    kindLabel: "Hairstyle",
    group: "Named pieces",
    appliesTo: "Jason",
    editionRequirement: "ultimate",
    editionLabel: "Shown at Sara's Unisex Salon",
    howToGet:
      "Rockstar's Ultimate Edition alt credits this mullet to Sara's Unisex Salon. The salon is Ultimate Edition only. A full style menu is not published.",
    summary:
      "A mullet Rockstar shows on Jason and credits to Sara's Unisex Salon. It is one shown style, not a published menu.",
    storeSlug: "saras-unisex-salon",
    facts: [
      {
        label: "What Rockstar's alt says",
        value:
          "Jason looking over his shoulder, sporting a mullet haircut from Sara's Unisex Salon.",
        sources: [rockstarUltimate],
      },
    ],
    unpublished: [
      "Whether every player can select it on day one",
      "Price",
      "Other named cuts",
    ],
    relatedSlugs: ["saras-salon-styles"],
    sources: [rockstarUltimate, rockstarEditions],
  },
  {
    id: 9,
    slug: "electric-fang-tattoos",
    name: "Electric Fang signature tattoos",
    kind: "tattoo",
    kindLabel: "Shop catalog",
    group: "Shop catalogs",
    appliesTo: "Both",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition, at Electric Fang Tattoo",
    howToGet:
      "Chosen at Electric Fang Tattoo on Coral Ave in Stockyard, open from Chapter 1 with the Ultimate Edition.",
    details: [
      {
        label: "Where",
        value:
          "Coral Ave, Stockyard, Vice City. On the map it is under Style, then Tattoos. Ultimate Edition designs carry a blue tag.",
        sources: [fill.pushSquareUltimate],
      },
    ],
    summary:
      "Over 50 signature tattoos for Jason and Lucia, designed by FAILE. Rockstar has not published the individual names.",
    storeSlug: "electric-fang-tattoo",
    image: fangImage,
    imageAlt:
      "Neon Electric Fang Tattoo wolf sign outside the shop at night, with a person in white beside a motorcycle.",
    imageCaption:
      "The shop exterior. This still is not a tattoo menu.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Choose from over 50 signature tattoos for both Jason and Lucia, all designed by the artist collective FAILE at Stockyard’s most iconic ink bar.",
        sources: editionSources,
      },
    ],
    unpublished: [
      "The names and artwork of each tattoo",
      "Prices",
      "Body placement rules",
    ],
    relatedSlugs: ["vice-city-style"],
    sources: editionSources,
  },
  {
    id: 10,
    slug: "bargain-world-thrift-clothes",
    name: "Bargain World thrift clothes",
    kind: "outfit",
    kindLabel: "Shop catalog",
    group: "Shop catalogs",
    appliesTo: "Both",
    editionRequirement: "none",
    editionLabel: "Every edition",
    howToGet:
      "Bargain World is a thrift store in Port Gellhorn, Kelly County, near the Eager Beaver gas station. Lucia's Chapter 2 task How Do I Look? sends you there.",
    summary:
      "The cheapest clothes found so far: single pieces cost about $7 to $35, and a whole outfit off the Bargains rack can cost $9.",
    details: [
      {
        label: "Prices seen",
        value:
          "Caps and visors $7 to $8, a cheap T-shirt $9, cutoffs $9 to $13 (the color changes the price), cropped tanks $15 to $35, jeans $9 to $20. The mannequin's Bargain World Ensemble is $46.",
        sources: [fill.viceGuidesHowDoILook, fill.gta6ActivitiesClothes, fill.gta6LifeCustomization],
      },
      {
        label: "Cheapest full outfit",
        value: "About $9, from the Bargains rack at the back by the rear door.",
        sources: [fill.gta6LifeCustomization],
      },
      {
        label: "How buying works",
        value:
          "Walk up to a rack to preview an item with its price and colors, then pick Buy or Buy & Wear. There is a changing room at the back to mix pieces you already own.",
        sources: [fill.viceGuidesHowDoILook, fill.gta6ActivitiesClothes],
      },
      {
        label: "Why it matters",
        value:
          "When the police have your outfit, a full change of clothes clears it. A new cap alone does not.",
        sources: [fill.gta6ActivitiesClothes, fill.gta6LifeCustomization],
      },
    ],
    facts: [],
    unpublished: [],
    relatedSlugs: ["pearl-house-hairstyles"],
    sources: [fill.viceGuidesHowDoILook, fill.gta6ActivitiesClothes, fill.gta6LifeCustomization, fill.powerpyxClothingStores],
  },
  {
    id: 11,
    slug: "pearl-house-hairstyles",
    name: "Pearl House salon hairstyles",
    kind: "hairstyle",
    kindLabel: "Shop catalog",
    group: "Shop catalogs",
    appliesTo: "Both",
    editionRequirement: "none",
    editionLabel: "Every edition",
    howToGet:
      "Pearl House Hair Salon is in a row of shops in Port Gellhorn. Lucia's Chapter 2 task New Look sends you there.",
    summary:
      "The first salon in the story. Haircuts seen so far cost $52 to $95, and you can preview every style before you pay.",
    details: [
      {
        label: "Prices seen",
        value:
          "Wavy Ponytail $52, Straight Classic $69, Short Straight Ponytail $72, Straight Bob $75, Braided Cornrows $95.",
        sources: [fill.viceGuidesHowDoILook],
      },
      {
        label: "What the chair offers",
        value:
          "Three tabs: Hairstyle, Hair Color and Makeup. IGN counted nine standard styles and six colors that every salon stocks; some salons add their own colors and nails.",
        sources: [fill.viceGuidesHowDoILook, fill.gta6LifeCustomization],
      },
      {
        label: "At home",
        value:
          "Lucia has three basic makeup looks at her bathroom mirror, and a safehouse trim has fewer options than a salon.",
        sources: [fill.gta6LifeCustomization, ...famitsuSources],
      },
    ],
    facts: [],
    unpublished: [],
    relatedSlugs: ["bargain-world-thrift-clothes", "saras-salon-styles"],
    sources: [fill.viceGuidesHowDoILook, fill.gta6LifeCustomization],
  },
];

export function clothingBySlug(slug: string) {
  return clothing.find((item) => item.slug === slug);
}

export const clothingGroups = ["Packs", "Named pieces", "Shop catalogs"] as const;
