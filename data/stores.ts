import type { Store } from "@/types/store";
import {
  edgeViaVice,
  famitsuSources,
  gtadb,
  ignBigInterview,
  playstationGame,
  rockstarEditions,
  rockstarUltimate,
  rockstarViceCity,
} from "@/src/data/gameplay/confirmed";

const editionSources = [rockstarUltimate, rockstarEditions, playstationGame] as const;

const stockImage = "/images/official/editions/ultimate_edition_stock_305_01.webp";
const fangImage = "/images/official/editions/ultimate_edition_electric_fang_01.webp";
const salonImage = "/images/official/editions/ultimate_edition_saras_salon_01.webp";
const pttImage = "/images/official/editions/ultimate_edition_ptt_store_01.webp";

const shopGaps = [
  "Hours",
  "Prices",
  "A full shelf or service list",
  "A street address in Rockstar's prose",
];

export const stores: Store[] = [
  {
    id: 1,
    slug: "stock-305",
    name: "Stock 305",
    type: "clothing",
    typeLabel: "Clothing store",
    region: "Vice City",
    area: "Stockyard",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition only",
    summary:
      "Rockstar's Ultimate Edition clothing store in Stockyard, for unique looks for Jason and Lucia.",
    image: stockImage,
    imageAlt:
      "Outside of the Stock 305 store, Lucia is leaning up against a van while Jason is sitting on the roof.",
    imageCaption:
      "Official Ultimate Edition still of the store. It is not a published list of the looks inside.",
    hasPin: true,
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Style various unique and exclusive looks for Jason and Lucia at Stockyard’s premier destination for elevated streetwear.",
        sources: editionSources,
      },
      {
        label: "Who can use it",
        value: "Only open for business with the Ultimate Edition.",
        sources: editionSources,
      },
      {
        label: "Where",
        value:
          "Stockyard. Rockstar has not published a street. The map pin is the gtadb.org landmark for this store.",
        sources: [rockstarUltimate, gtadb],
      },
    ],
    unpublished: shopGaps,
    linkedClothing: ["stock-305-looks"],
    sources: editionSources,
  },
  {
    id: 2,
    slug: "saras-unisex-salon",
    name: "Sara's Unisex Salon",
    type: "salon",
    typeLabel: "Salon",
    region: "Not published",
    area: "Not published",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition only",
    summary:
      "Ultimate Edition salon for signature styles on Jason and Lucia, including facial hair, makeup, and nails.",
    image: salonImage,
    imageAlt: "Jason and Lucia pose at the entrance to Sara's Unisex Salon.",
    imageCaption:
      "Official Ultimate Edition still of the entrance. A different salon still, not in this image set, shows Jason in a mullet from the salon.",
    hasPin: true,
    mapNote:
      "Rockstar has not named the town. The pin is a gtadb.org landmark. A community area name on that landmark is not repeated here.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Get signature salon styles for both Jason and Lucia, including facial hair for Jason and makeup and nails for Lucia.",
        sources: editionSources,
      },
      {
        label: "Who can use it",
        value: "Only open for business with the Ultimate Edition.",
        sources: editionSources,
      },
      {
        label: "Shown on Jason",
        value:
          "An official alt on the Ultimate Edition page reads: Jason looking over his shoulder, sporting a mullet haircut from Sara's Unisex Salon.",
        sources: [rockstarUltimate],
      },
      {
        label: "Where",
        value:
          "Town and street are not in official prose. The map pin is a gtadb.org landmark for this salon.",
        sources: [rockstarUltimate, gtadb],
      },
    ],
    unpublished: [...shopGaps, "A full menu of haircuts, colors, and nail styles"],
    linkedClothing: ["saras-salon-styles", "jason-mullet"],
    sources: editionSources,
  },
  {
    id: 3,
    slug: "electric-fang-tattoo",
    name: "Electric Fang Tattoo",
    type: "tattoo",
    typeLabel: "Tattoo shop",
    region: "Vice City",
    area: "Stockyard",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition only",
    summary:
      "Stockyard tattoo shop in the Ultimate Edition, with over 50 signature tattoos by the artist collective FAILE.",
    image: fangImage,
    imageAlt:
      "Neon Electric Fang Tattoo wolf sign outside the shop at night, with a person in white beside a motorcycle.",
    imageCaption:
      "Official Ultimate Edition still of the shop. The tattoo names are not printed on this image.",
    hasPin: true,
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Stockyard’s most iconic ink bar, with over 50 signature tattoos for both Jason and Lucia — all designed by the artist collective FAILE.",
        sources: editionSources,
      },
      {
        label: "Who can use it",
        value: "Only open for business with the Ultimate Edition.",
        sources: editionSources,
      },
      {
        label: "Where",
        value:
          "Stockyard. Rockstar has not published a street. The map pin is the gtadb.org landmark for this shop.",
        sources: [rockstarUltimate, gtadb],
      },
    ],
    unpublished: [...shopGaps, "The names of the individual tattoos"],
    linkedClothing: ["electric-fang-tattoos"],
    sources: editionSources,
  },
  {
    id: 4,
    slug: "rideout-customs",
    name: "Rideout Customs",
    type: "mod-shop",
    typeLabel: "Mod shop",
    region: "Not published",
    area: "Not published",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition only",
    summary:
      "Ultimate Edition mod shop for interiors, rims, and donk styling. Rockstar has not named the district.",
    hasPin: true,
    mapNote:
      "The pin is a gtadb.org landmark. Rockstar has not published a district, so a community area name on that landmark is not repeated here. The still in the editions set is a customized car, not the shop, so it is not used on this page.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Transform vanilla vehicles into magnificent works of art with detailed interiors, exquisite rims, and donk stylings.",
        sources: editionSources,
      },
      {
        label: "Who can use it",
        value: "Only open for business with the Ultimate Edition.",
        sources: editionSources,
      },
      {
        label: "Where",
        value:
          "District and street are not in official prose. The map pin is a gtadb.org landmark for this shop.",
        sources: [rockstarUltimate, gtadb],
      },
    ],
    unpublished: [
      ...shopGaps,
      "Which vehicles can be modified here",
      "A shop photo in this image set",
    ],
    linkedClothing: [],
    sources: editionSources,
  },
  {
    id: 5,
    slug: "one-eyed-willies",
    name: "One-Eyed Willie's",
    type: "mod-shop",
    typeLabel: "Off-road mod shop",
    region: "Lake Leonida",
    area: "Lake Leonida",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition only",
    summary:
      "Ultimate Edition mod shop in Lake Leonida for off-road work and hand-painted automotive art. A street pin has not been published.",
    hasPin: false,
    mapNote:
      "gtadb.org has a landmark id for the shop and no coordinates in the November 17, 2026 dump, so this page does not pretend the lake marker is the shop door. The editions still is an off-road vehicle, not the building, so it is not used here.",
    mapLink: {
      href: "/map?pin=confirmed:lake-leonida",
      title: "Lake Leonida on the map",
      meta: "The lake, not the shop door",
    },
    facts: [
      {
        label: "What Rockstar says",
        value:
          "This mod shop in Lake Leonida specializes in off-road modifications and hand-painted automotive artistry.",
        sources: editionSources,
      },
      {
        label: "Who can use it",
        value: "Only open for business with the Ultimate Edition.",
        sources: editionSources,
      },
      {
        label: "Where",
        value:
          "Lake Leonida. Rockstar has not published a street, and this site does not have a confirmed shop pin yet.",
        sources: [rockstarUltimate, gtadb],
      },
    ],
    unpublished: [
      ...shopGaps,
      "A confirmed shop pin",
      "Which vehicles can be modified here",
      "A shop photo in this image set",
    ],
    linkedClothing: [],
    sources: editionSources,
  },
  {
    id: 6,
    slug: "ptt-youngins-illegal-goods-store",
    name: "PTT Youngin$ Illegal Goods Store",
    type: "other",
    typeLabel: "Illegal goods store",
    region: "Vice City",
    area: "Southside",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition",
    summary:
      "Ultimate Edition storefront in Southside Vice City, shown with the PTT Youngin$ and tied to the compound raid benefit.",
    image: pttImage,
    imageAlt:
      "Members of the PTT Youngin$ gathered outside the Illegal Goods Store. Two members on a motorcycle are being recorded by another on their phone.",
    imageCaption:
      "Official Ultimate Edition still. Rockstar has not published a shop inventory.",
    hasPin: true,
    facts: [
      {
        label: "What Rockstar shows",
        value:
          "Rockstar names the PTT YOUNGIN$ Illegal Goods Store. The official alt shows members of the PTT Youngin$ gathered outside it.",
        sources: [rockstarUltimate, rockstarEditions],
      },
      {
        label: "The raid benefit",
        value:
          "Raid the compound of one of Southside Vice City’s loudest and most socially active gangs and escape safely to score some special items and distinct contraband.",
        sources: editionSources,
      },
      {
        label: "Where",
        value:
          "Southside Vice City. The map pin is the gtadb.org landmark for the store. The full compound footprint is not officially mapped.",
        sources: [rockstarUltimate, gtadb],
      },
    ],
    unpublished: [
      "Hours",
      "Prices",
      "A list of the special items or contraband",
      "Whether the store can be shopped outside the raid",
    ],
    linkedClothing: [],
    sources: editionSources,
  },
  {
    id: 7,
    slug: "tisha-wocka-flea-market",
    name: "Tisha-Wocka flea market",
    type: "flea-market",
    typeLabel: "Flea market",
    region: "Vice City",
    area: "Tisha-Wocka",
    editionRequirement: "none",
    editionLabel: "Not an edition bonus",
    summary:
      "Vice City flea market named on Rockstar's Only in Leonida page, known there for bootleg brands.",
    hasPin: true,
    mapNote:
      "The name is official. gtadb.org tagged its landmark demolished in the November 17, 2026 dump, so the mapped building may have changed. There is no official still of the market in this image set.",
    facts: [
      {
        label: "What Rockstar says",
        value:
          "Vice City runs from the pastel art deco hotels and bright white sands of Ocean Beach, to the bustling panaderías of Little Cuba and the bootleg brands of the Tisha-Wocka flea market, out to the VC Port, the cruise ship capital of the world.",
        sources: [rockstarViceCity],
      },
      {
        label: "Where",
        value:
          "Vice City. The map pin is the gtadb.org landmark for the market. Rockstar has not published a stall list or a street.",
        sources: [rockstarViceCity, gtadb],
      },
    ],
    unpublished: [
      "Stall names and brands beyond the words bootleg brands",
      "Hours",
      "Prices",
      "An official still in this image set",
    ],
    linkedClothing: [],
    sources: [rockstarViceCity, gtadb],
  },
  {
    id: 8,
    slug: "ammu-nation",
    name: "Ammu-Nation",
    type: "weapons",
    typeLabel: "Weapons chain",
    region: "Not published",
    area: "Not published",
    editionRequirement: "none",
    editionLabel: "Not an edition bonus",
    image: "/images/footage/brands/ammu-nation.webp",
    imageAlt: "An Ammu-Nation sign at Chuck's Tackle & Shot in Key Lento",
    summary:
      "Named in sourced interviews as locker storage for long guns. No branch list has been published, so this page has no map pins.",
    hasPin: false,
    mapNote:
      "No confirmed Ammu-Nation pin. A branch list would be invented, so it is left empty.",
    facts: [
      {
        label: "What the interviews describe",
        value:
          "Long guns cannot be concealed. Ammu-Nation lockers and trunk storage are how they are kept.",
        sources: [...famitsuSources, ignBigInterview, edgeViaVice],
      },
    ],
    unpublished: [
      "Branch names and addresses",
      "Hours",
      "Prices",
      "The weapon catalog at a counter",
      "A map pin",
    ],
    linkedClothing: [],
    sources: [...famitsuSources, ignBigInterview, edgeViaVice],
  },
];

export function storeBySlug(slug: string) {
  return stores.find((store) => store.slug === slug);
}
