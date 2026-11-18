import type { ClothingItem } from "@/types/clothing";
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
  "When in the story each piece unlocks",
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
    howToGet: "Included with the Ultimate Edition. Rockstar lists it apart from the Stock 305, Sara's, and Electric Fang shops.",
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
    howToGet: "Included with the Ultimate Edition as a capsule collection, not as a mapped shop.",
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
    unpublished: [...packGaps, "A product-by-product list beyond the still"],
    relatedSlugs: [],
    sources: editionSources,
  },
  {
    id: 3,
    slug: "vintage-vice-city-looks",
    name: "Vintage Vice City outfits and hairstyles",
    kind: "pack",
    kindLabel: "Pack",
    group: "Packs",
    appliesTo: "Both",
    editionRequirement: "pre-order",
    editionLabel: "Vintage Vice City Pack",
    howToGet:
      "Part of the Vintage Vice City Pack, Rockstar's pre-order bonus for either edition. Rockstar Support says purchases before November 20, 2026 include the pack.",
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
      "A map pin for the clothes themselves",
    ],
    relatedSlugs: ["jason-pastel-linen-suit", "lucia-red-sequin-mini-dress"],
    sources: packSources,
  },
  {
    id: 4,
    slug: "jason-pastel-linen-suit",
    name: "Jason's pastel linen suit",
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
      "A still of this suit in the image set",
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
      "A still of this dress in the image set",
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
    howToGet: "Styled at Stock 305, which is only open with the Ultimate Edition.",
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
    howToGet: "Applied at Sara's Unisex Salon, which is only open with the Ultimate Edition.",
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
      "The style menu",
      "Prices",
      "Which hideout options exist",
    ],
    relatedSlugs: ["jason-mullet"],
    sources: [...editionSources, ...famitsuSources],
  },
  {
    id: 8,
    slug: "jason-mullet",
    name: "Jason's mullet",
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
      "That labeled still in this image set",
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
      "Chosen at Electric Fang Tattoo in Stockyard, only open with the Ultimate Edition.",
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
];

export function clothingBySlug(slug: string) {
  return clothing.find((item) => item.slug === slug);
}

export const clothingGroups = ["Packs", "Named pieces", "Shop catalogs"] as const;
