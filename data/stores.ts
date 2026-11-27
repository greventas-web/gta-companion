import type { Store } from "@/types/store";
import { fillSources as fill } from "@/src/data/launch/fill-sources";
import { batch1Sources } from "@/src/data/launch/batch1-sources";
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
  "Prices",
  "A full shelf or service list",
];

const UE = [fill.powerpyxUltimate, fill.pushSquareUltimate];

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
    details: [
      {
        label: "Address",
        value: "NE 15th St, Stockyard, Vice City (Vice-Dale County).",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "When it opens",
        value: "From Chapter 1, for Ultimate Edition owners. On the map: Style, then Casual & Street.",
        sources: UE,
      },
      {
        label: "One of 67",
        value:
          "Stock 305 is one of 17 casual and street clothing stores, out of 67 clothing stores in Leonida.",
        sources: [fill.powerpyxClothingStores],
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
    region: "Vice-Dale County",
    area: "Hamlet",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition only",
    summary:
      "Ultimate Edition salon on Cicada Ave in Hamlet, for signature styles on Jason and Lucia, including facial hair, makeup, and nails.",
    image: salonImage,
    imageAlt: "Jason and Lucia pose at the entrance to Sara's Unisex Salon.",
    imageCaption:
      "Official Ultimate Edition still of the entrance. A different salon still, not in this image set, shows Jason in a mullet from the salon.",
    hasPin: true,
    mapNote: "The pin is a gtadb.org landmark for the salon on Cicada Ave in Hamlet.",
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
    details: [
      {
        label: "Address",
        value: "Cicada Ave, Hamlet, South Vice-Dale County. On the map: Style, then Hair & Beauty.",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "When it opens",
        value: "You can walk in from Chapter 1. The signature styles unlock in Chapter 2.",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "What a salon visit costs",
        value:
          "Rockstar has not priced Sara's menu yet. For comparison, cuts at Pearl House in Port Gellhorn cost $52 to $95.",
        sources: [fill.viceGuidesHowDoILook],
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
    details: [
      {
        label: "Address",
        value: "Coral Ave, Stockyard, Vice City. On the map: Style, then Tattoos.",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "In-game map card",
        value: "Pop-up tattoo parlor at the Hub Gallery with designs by FAILE. Style: New School. Part of the Ultimate Edition.",
        sources: UE,
      },
      {
        label: "When it opens",
        value: "From Chapter 1, for Ultimate Edition owners. Exclusive designs carry a blue tag.",
        sources: UE,
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
    region: "Vice City",
    area: "Crosstown",
    editionRequirement: "ultimate",
    editionLabel: "Ultimate Edition only",
    summary:
      "Ultimate Edition mod shop in Crosstown, Vice City, for interiors, rims, and donk styling.",
    hasPin: true,
    mapNote:
      "The pin is a gtadb.org landmark for the shop in Crosstown. The still in the editions set is a customized car, not the shop, so it is not used on this page.",
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
    details: [
      {
        label: "Where",
        value: "Crosstown, Vice City (Vice-Dale County). On the map: Vehicles, then Mod Shops, marked with the Ultimate Edition symbol.",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "When it opens",
        value: "From Chapter 1, for Ultimate Edition owners. Its exclusive rims and interiors are marked in the menu.",
        sources: UE,
      },
    ],
    unpublished: [
      ...shopGaps,
      "Which vehicles can be modified here",
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
    details: [
      {
        label: "Where",
        value: "Just off SR-27 in North Leonard County, by Lake Leonida. On the map: Vehicles, then Mod Shops.",
        sources: [fill.pushSquareUltimate, fill.powerpyxUltimate],
      },
      {
        label: "When it opens",
        value: "From Chapter 1, for Ultimate Edition owners. Many of its paint jobs and body parts are Ultimate Edition only.",
        sources: [fill.pushSquareUltimate],
      },
    ],
    unpublished: [
      ...shopGaps,
      "A confirmed shop pin",
      "Which vehicles can be modified here",
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
    details: [
      {
        label: "Where",
        value:
          "Two robbery spots around SW 13th St and El Joven Blvd in Southside. On the map: Robberies, then Illegal Operations.",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "How it works",
        value:
          "It is a robbery, not a shop: clear out the gang inside, grab the jewelry and drugs, get away before the police arrive, then sell the goods to a fence.",
        sources: [fill.pushSquareUltimate],
      },
      {
        label: "When it unlocks",
        value:
          "Guides differ. PowerPyx marks it after the Chapter 3 mission Boobie Time; Push Square had it once they had visited South Vice-Dale County.",
        sources: UE,
      },
    ],
    unpublished: [
      "A list of the special items or contraband",
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
    region: "Leonida",
    area: "24 stores across Leonida",
    editionRequirement: "none",
    editionLabel: "Not an edition bonus",
    image: "/images/footage/brands/ammu-nation.webp",
    imageAlt: "An Ammu-Nation sign at Chuck's Tackle & Shot in Key Lento",
    summary:
      "Leonida's gun store chain: 24 stores, six of them Expanded stores that also sell machine guns, sniper rifles and launchers. Guns cost from $550 to $16,000.",
    hasPin: false,
    mapNote: "Every branch is on the Ammu-Nation locations page.",
    mapLink: {
      href: "/ammu-nation-locations",
      title: "All 24 Ammu-Nation stores",
      meta: "Map and list",
    },
    facts: [
      {
        label: "What the interviews describe",
        value:
          "Long guns cannot be concealed. Ammu-Nation lockers and trunk storage are how they are kept.",
        sources: [...famitsuSources, ignBigInterview, edgeViaVice],
      },
    ],
    details: [
      {
        label: "Stores",
        value: "24 in total. Six are Expanded stores, the only ones that stock machine guns, sniper rifles and launchers.",
        sources: [batch1Sources.powerpyxAmmuNation, fill.gameChecklistsWeapons],
      },
      {
        label: "Prices",
        value:
          "The Scorpio Nipper .38 is the cheapest gun at $550. Most pistols and SMGs cost $600 to $3,350, shotguns and rifles $700 to $3,975, and the H-AT rocket launcher tops the list at $16,000.",
        sources: [fill.gameChecklistsWeapons, fill.clutchbaseWeapons],
      },
      {
        label: "Cash or bank",
        value:
          "In launch footage, guns under $1,000 could be paid in cash and pricier ones needed money in the bank.",
        sources: [fill.clutchbaseWeapons],
      },
    ],
    unpublished: [],
    linkedClothing: [],
    sources: [...famitsuSources, ignBigInterview, edgeViaVice],
  },
];

export function storeBySlug(slug: string) {
  return stores.find((store) => store.slug === slug);
}
