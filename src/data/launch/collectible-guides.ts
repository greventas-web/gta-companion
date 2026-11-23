/**
 * Collectible hubs for content batch 2.
 * Fact check: /workspace/launch-prep/content-batch-2-factcheck.md
 */
import type { FaqItem } from "@/components/intent/FaqSection";
import {
  cardSetSources,
  flamingoSources,
  stuntSources,
  type Batch2Source,
} from "./batch2-sources";
import {
  droneSources,
  golfSources,
  meditationSources,
  raceChallengeSources,
} from "./batch3-sources";
import { bookSwapSources, playlistSources, poolSources, videoGameSources } from "./batch4-sources";
import { magazineSources, raceSources, wainkSources } from "./batch5-sources";

export type CollectibleSet = {
  name: string;
  cards?: number;
};

export type CollectibleItem = {
  slug: string;
  name: string;
  /** Short value shown as a chip, e.g. "24 cards". */
  value: string;
  /** One short plain sentence for the card and detail page. */
  line: string;
  /** Extra labeled facts for the item's own page. */
  facts?: { label: string; value: string }[];
  /** Existing map pin for the item's area (no new pins). */
  pin?: string;
};

export type CollectibleGuide = {
  slug: string;
  title: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  image?: string;
  /** One short plain line for the hub card. */
  line: string;
  /** Two or three plain sentences. */
  intro: string;
  /** Short label/value rows. */
  quick: { label: string; value: string }[];
  /** Short how-to rows. */
  tips?: { label: string; value: string }[];
  groups?: { heading: string; items: CollectibleItem[]; itemPages?: boolean }[];
  /** Heading for sibling cards on item pages. */
  itemsLabel?: string;
  mapLinks: { pin: string; label: string }[];
  related: { href: string; label: string }[];
  faqs: FaqItem[];
  sources: Batch2Source[];
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const cardSets: CollectibleSet[] = [
  { name: "Vice City Flamingos", cards: 24 },
  { name: "Vice City Narcos", cards: 24 },
  { name: "Vice City Manatees", cards: 24 },
  { name: "Vice City Club De Fútbol", cards: 30 },
  { name: "Liberty City Swingers", cards: 24 },
  { name: "Liberty City Penetrators", cards: 24 },
  { name: "Liberty City Wrath", cards: 24 },
  { name: "Los Santos Corkers", cards: 24 },
  { name: "Los Santos Panic", cards: 24 },
  { name: "Los Santos Pounders", cards: 24 },
  { name: "Backyard Wrestling", cards: 12 },
  { name: "America’s Next Top Hooker", cards: 24 },
  { name: "Delights Dancers", cards: 18 },
  { name: "Jack of Hearts Dancers", cards: 36 },
  { name: "Nine1Nine Dancers", cards: 36 },
  { name: "The Legends of Ratface", cards: 36 },
  { name: "Right Wing: America’s Hero", cards: 36 },
  { name: "Ed Comics Universe", cards: 36 },
];

function setLine(set: CollectibleSet) {
  if (set.name === "Vice City Flamingos") {
    return "Find all 24 to unlock the Bubblegum filter cheat.";
  }
  return `A set of ${set.cards} cards hidden around Leonida.`;
}

export const collectibleGuides: CollectibleGuide[] = [
  {
    slug: "card-sets",
    title: "Collectible card sets",
    heading: "Collectible card sets",
    metaTitle: "GTA 6 Collectible Card Sets – All 18 Sets",
    metaDescription:
      "GTA 6 collectible card sets: all 18 sets and 480 cards, how many you need for the Don’t Touch My Deck trophy and 100%, and where cards hide. Unofficial.",
    line: "18 sets, 480 cards. Finish 3 sets for a trophy.",
    intro:
      "Cards are hidden all over Leonida. Look on shelves and walls indoors, and in yellow phone boxes and tool boxes outside. You can’t buy them.",
    quick: [
      { label: "Sets", value: "18" },
      { label: "Cards", value: "480" },
      { label: "Trophy", value: "Don’t Touch My Deck (3 sets)" },
      { label: "For 100%", value: "15 sets" },
      { label: "Track them", value: "Progress > Collections" },
    ],
    tips: [
      { label: "Bonus", value: "All 24 Vice City Flamingos unlock the Bubblegum filter cheat (after the story)" },
      { label: "Heads up", value: "Some cards show up in more than one place" },
    ],
    groups: [
      {
        heading: "All 18 sets",
        itemPages: true,
        items: cardSets.map((set) => ({
          slug: slugify(set.name),
          name: set.name,
          value: set.cards ? `${set.cards} cards` : "",
          line: setLine(set),
          facts: [
            { label: "Cards in set", value: set.cards ? `${set.cards}` : "" },
            { label: "Where", value: "Indoors on shelves and walls, outdoors in yellow phone boxes and tool boxes" },
            { label: "Track it", value: "Progress > Collections > Collectible Cards" },
            ...(set.name === "Vice City Flamingos"
              ? [{ label: "Unlocks", value: "Bubblegum filter cheat (after the story)" }]
              : []),
          ],
        })),
      },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
      { pin: "confirmed:jack-of-hearts", label: "Jack of Hearts" },
      { pin: "confirmed:nine1nine", label: "Nine1Nine" },
      { pin: "confirmed:delights", label: "Delights" },
    ],
    related: [
      { href: "/collectibles", label: "All collectibles" },
      { href: "/collectibles/cocaine-flamingos", label: "Cocaine Flamingos" },
      { href: "/collectibles/stunt-jumps", label: "Stunt jumps" },
      { href: "/trophies", label: "Trophies" },
      { href: "/cheats", label: "Cheats" },
      { href: "/map", label: "Leonida map" },
    ],
    faqs: [
      {
        question: "How many collectible card sets are in GTA 6?",
        answer:
          "18 sets with 480 cards in total. Finish 3 sets for the Don’t Touch My Deck trophy. 100% needs 15 of the 18.",
        sources: cardSetSources,
      },
      {
        question: "Where do you find collectible cards in GTA 6?",
        answer:
          "Out in the world. Indoors they sit on shelves and walls, and outside they are in yellow phone boxes or tool boxes. You can’t buy them.",
        sources: cardSetSources,
      },
      {
        question: "Does completing a card set unlock anything in GTA 6?",
        answer:
          "Three sets get you the Don’t Touch My Deck trophy. All 24 Vice City Flamingos cards unlock the Bubblegum filter cheat, which works after the story.",
        sources: cardSetSources,
      },
    ],
    sources: cardSetSources,
  },
  {
    slug: "cocaine-flamingos",
    title: "Cocaine Flamingos",
    heading: "Cocaine Flamingos",
    metaTitle: "GTA 6 Cocaine Flamingos – How They Work and How Many",
    metaDescription:
      "GTA 6 Cocaine Flamingos: how to spot the real ones, how many there are, and how 50 of them unlock the Inflatable Flamingo cheat. Unofficial.",
    line: "125 hidden flamingos. Shoot 50 for a cheat.",
    intro:
      "Pink flamingo figures with a black-and-white beak are hidden around Leonida. Shoot one in the body to break it and drop its package. Ones with a yellow-and-black beak are just decoration.",
    quick: [
      { label: "Total", value: "125" },
      { label: "For 100%", value: "Any 100" },
      { label: "Cheat", value: "50 unlock Inflatable Flamingo" },
      { label: "Track them", value: "Progress > Exploration" },
    ],
    tips: [
      { label: "Real ones", value: "Black-and-white beak" },
      { label: "Fake ones", value: "Yellow-and-black beak, can’t be broken" },
      { label: "The package", value: "Optional. Sell the cocaine to a fence for cash" },
      { label: "Where", value: "Key Lento, Abismo Key, Vice City and more" },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys / Key Lento" },
      { pin: "confirmed:abismo-key", label: "Abismo Key" },
      { pin: "confirmed:la-perle", label: "La Perle" },
      { pin: "confirmed:vice-city", label: "Vice City" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
    ],
    related: [
      { href: "/collectibles", label: "All collectibles" },
      { href: "/collectibles/card-sets", label: "Collectible card sets" },
      { href: "/collectibles/stunt-jumps", label: "Stunt jumps" },
      { href: "/vehicles/inflatable-flamingo", label: "Inflatable Flamingo" },
      { href: "/cheats", label: "Cheats" },
      { href: "/map", label: "Leonida map" },
    ],
    faqs: [
      {
        question: "How many Cocaine Flamingos are in GTA 6?",
        answer:
          "125. You need any 100 for 100%, and breaking 50 unlocks the Inflatable Flamingo cheat after the story.",
        sources: flamingoSources,
      },
      {
        question: "How do you tell a Cocaine Flamingo from a regular flamingo in GTA 6?",
        answer:
          "Check the beak. The real ones have a black-and-white beak. Yellow-and-black ones are decoration and can’t be broken. Shoot the body to break a real one.",
        sources: flamingoSources,
      },
      {
        question: "Do you have to pick up the cocaine inside a flamingo?",
        answer:
          "No, breaking it is enough to count. If you want the cash, you can sell the cocaine to a fence.",
        sources: flamingoSources,
      },
    ],
    sources: flamingoSources,
  },
  {
    slug: "stunt-jumps",
    title: "Stunt jumps",
    heading: "Stunt jumps",
    metaTitle: "GTA 6 Stunt Jumps – Counts by County",
    metaDescription:
      "GTA 6 stunt jumps: 130 jumps by county, plus under-the-bridge, knife-flight, and base-jump totals, and how many stunts the Cunning Stunts trophy needs. Unofficial.",
    line: "397 stunts in 4 types. 250 for the trophy.",
    intro:
      "There are four kinds of stunts, and stunt jumps are one of them. Do a stunt once and it counts, so you can skip the extra challenge on the map icon. Mix any types you like.",
    quick: [
      { label: "Total stunts", value: "397" },
      { label: "Trophy", value: "Cunning Stunts (250)" },
      { label: "For 100%", value: "Any 300" },
      { label: "Track them", value: "Progress > Activities > Stunts" },
      { label: "On the map", value: "Exploration > Stunt Spots" },
    ],
    groups: [
      {
        heading: "Stunt types",
        items: [
          { slug: "stunt-jumps", name: "Stunt jumps", value: "130", line: "Hit a ramp and land the jump." },
          { slug: "under-the-bridges", name: "Under the bridges", value: "202", line: "Fly under a bridge." },
          { slug: "knife-flights", name: "Knife flights", value: "40", line: "Fly through a tight gap." },
          { slug: "base-jumps", name: "Base jumps", value: "25", line: "Jump off and land your parachute." },
        ],
      },
      {
        heading: "Stunt jumps by county",
        items: [
          { slug: "vice-dale", name: "Vice-Dale County", value: "55 jumps", line: "Most jumps, around Vice City." },
          { slug: "kelly", name: "Kelly County", value: "29 jumps", line: "" },
          { slug: "mariana", name: "Mariana County", value: "17 jumps", line: "" },
          { slug: "lummox", name: "Lummox County", value: "16 jumps", line: "" },
          { slug: "leonard", name: "Leonard County", value: "13 jumps", line: "" },
        ],
      },
      {
        heading: "Under the bridges by county",
        items: [
          { slug: "bridges-vice-dale", name: "Vice-Dale County", value: "67 bridges", line: "" },
          { slug: "bridges-kelly", name: "Kelly County", value: "51 bridges", line: "" },
          { slug: "bridges-mariana", name: "Mariana County", value: "35 bridges", line: "" },
          { slug: "bridges-leonard", name: "Leonard County", value: "32 bridges", line: "" },
          { slug: "bridges-lummox", name: "Lummox County", value: "17 bridges", line: "" },
        ],
      },
    ],
    mapLinks: [
      { pin: "confirmed:leonida-keys", label: "Leonida Keys / Key Lento" },
      { pin: "confirmed:abismo-key", label: "Abismo Key" },
      { pin: "confirmed:vice-city", label: "Vice City" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
    ],
    related: [
      { href: "/collectibles", label: "All collectibles" },
      { href: "/activities/stunts", label: "Stunts activity" },
      { href: "/collectibles/card-sets", label: "Collectible card sets" },
      { href: "/trophies", label: "Trophies" },
      { href: "/map", label: "Leonida map" },
    ],
    faqs: [
      {
        question: "How many stunt jumps are in GTA 6?",
        answer:
          "130 stunt jumps. Add 202 under-the-bridge stunts, 40 knife flights, and 25 base jumps and you get 397 stunts in total.",
        sources: stuntSources,
      },
      {
        question: "How many stunts do you need for the Cunning Stunts trophy?",
        answer: "250. For 100% you need any 300 of the 397, and you can mix all four types.",
        sources: stuntSources,
      },
      {
        question: "Do you have to finish the challenge on a stunt jump in GTA 6?",
        answer: "No. Doing the stunt once counts. The challenge on the map icon is optional.",
        sources: stuntSources,
      },
    ],
    sources: stuntSources,
  },
  {
    slug: "meditation-spots",
    title: "Meditation spots",
    heading: "Meditation spots",
    metaTitle: "GTA 6 Meditation Spots – All 10 Locations",
    metaDescription:
      "All 10 GTA 6 meditation spots and where they are, how the 18 meditations add up, and what the Positive Mental Attitude trophy needs. Unofficial.",
    line: "10 spots, 18 meditations. One is Chapter 1 only.",
    intro:
      "Meditation spots show up as a purple icon when you get close. Most spots count twice, once as Jason and once as Lucia. The first one is only in Chapter 1.",
    quick: [
      { label: "Spots", value: "10" },
      { label: "Meditations", value: "18" },
      { label: "Trophy", value: "Positive Mental Attitude" },
      { label: "For 100%", value: "Any 15" },
      { label: "Track them", value: "Progress > Collections > Exploration" },
    ],
    tips: [
      { label: "Count it twice", value: "Meditate as Jason and as Lucia" },
      { label: "Both playable", value: "After Coffee Break in Chapter 2" },
      { label: "Don't miss", value: "Jason's House, Chapter 1 only" },
      { label: "Last spot", value: "Appears after all the others" },
    ],
    groups: [
      {
        heading: "All meditation spots",
        itemPages: true,
        items: [
          {
            slug: "jasons-house",
            name: "Jason's House Meditation",
            value: "Chapter 1 only",
            line: "On the balcony of Jason's house in Key Lento. Lucia brings it up one morning in Chapter 1. It's gone after Chapter 1.",
            facts: [{ label: "Where", value: "Key Lento, Mariana County" }, { label: "Counts", value: "1" }],
            pin: "confirmed:jasons-place",
          },
          {
            slug: "smooth-sand",
            name: "Smooth Sand Meditation",
            value: "2 meditations",
            line: "On a small sandbar off the west coast of Capri.",
            facts: [{ label: "Where", value: "Off west Capri, Mariana County" }, { label: "Counts", value: "2" }],
            pin: "confirmed:capri",
          },
          {
            slug: "swamp",
            name: "Swamp Meditation",
            value: "2 meditations",
            line: "On a wooden dock by a lookout tower in the middle of Buckskin Swamp.",
            facts: [{ label: "Where", value: "Buckskin Swamp" }, { label: "Counts", value: "2" }],
          },
          {
            slug: "worn-stone",
            name: "Worn Stone Meditation",
            value: "2 meditations",
            line: "By the Emerald River at Camp Moonflower.",
            facts: [{ label: "Where", value: "Camp Moonflower, Kelly County" }, { label: "Counts", value: "2" }],
          },
          {
            slug: "red-rocks",
            name: "Red Rocks Meditation",
            value: "2 meditations",
            line: "Near where the train tracks cross the highway in Manifest Canyon.",
            facts: [{ label: "Where", value: "Manifest Canyon, Kelly County" }, { label: "Counts", value: "2" }],
          },
          {
            slug: "water-wheel",
            name: "Water Wheel Meditation",
            value: "2 meditations",
            line: "By a water wheel at an old paper mill on a river in south Moreau.",
            facts: [{ label: "Where", value: "South Moreau, Lummox County" }, { label: "Counts", value: "2" }],
          },
          {
            slug: "jutting-cliff",
            name: "Jutting Cliff Meditation",
            value: "2 meditations",
            line: "By a tower looking over a mine in Mount Kalaga National Park.",
            facts: [{ label: "Where", value: "Mount Kalaga National Park" }, { label: "Counts", value: "2" }],
            pin: "confirmed:mount-kalaga-national-park",
          },
          {
            slug: "waterfall",
            name: "Waterfall Meditation",
            value: "2 meditations",
            line: "North-west of Tallaloko, looking over a waterfall.",
            facts: [{ label: "Where", value: "Near Tallaloko, Lummox County" }, { label: "Counts", value: "2" }],
          },
          {
            slug: "seaside",
            name: "Seaside Meditation",
            value: "2 meditations",
            line: "On a rocky point on the beach east of Waning Sands.",
            facts: [{ label: "Where", value: "East of Waning Sands, Leonard County" }, { label: "Counts", value: "2" }],
            pin: "confirmed:waning-sands",
          },
          {
            slug: "ascent-mountain",
            name: "Ascent Mountain",
            value: "Last spot",
            line: "In the stone circle on top of Mount Kalaga. It only appears on your map after you finish all the other spots.",
            facts: [{ label: "Where", value: "Mount Kalaga peak" }, { label: "Counts", value: "1" }],
            pin: "confirmed:mount-kalaga-national-park",
          },
        ],
      },
    ],
    itemsLabel: "Other meditation spots",
    mapLinks: [
      { pin: "confirmed:jasons-place", label: "Jason's house" },
      { pin: "confirmed:capri", label: "Capri" },
      { pin: "confirmed:mount-kalaga-national-park", label: "Mount Kalaga" },
      { pin: "confirmed:waning-sands", label: "Waning Sands" },
    ],
    related: [
      { href: "/activities/meditation", label: "Meditation" },
      { href: "/trophies/positive-mental-attitude", label: "Positive Mental Attitude" },
      { href: "/collectibles", label: "All collectibles" },
      { href: "/map", label: "Leonida map" },
    ],
    faqs: [
      {
        question: "How many meditation spots are in GTA 6?",
        answer: "10 spots and 18 meditations. Most spots count once for Jason and once for Lucia.",
        sources: meditationSources,
      },
      {
        question: "Is the first meditation in GTA 6 missable?",
        answer: "Yes. The one at Jason's house in Key Lento is only there in Chapter 1.",
        sources: meditationSources,
      },
      {
        question: "Where is the last meditation spot in GTA 6?",
        answer: "In the stone circle on top of Mount Kalaga. It appears on the map after you finish every other spot.",
        sources: meditationSources,
      },
    ],
    sources: meditationSources,
  },
  {
    slug: "top-fun-drone-races",
    title: "Top Fun drone races",
    heading: "Top Fun drone races",
    metaTitle: "GTA 6 Top Fun Drone Races – All 14 Locations",
    metaDescription:
      "All 14 GTA 6 Top Fun drone race locations with their 3 races and par times, how to unlock the third race, and the Top Fun trophy. Unofficial.",
    line: "14 places, 42 races. Win one at each for a trophy.",
    intro:
      "Each Top Fun spot has 3 drone time trials. Beat the par time in the first two to open the third. The third only needs a finish.",
    quick: [
      { label: "Locations", value: "14" },
      { label: "Races", value: "42" },
      { label: "Trophy", value: "Top Fun (win at all 14)" },
      { label: "Track them", value: "Progress > Activities > Top Fun Drones" },
    ],
    tips: [
      { label: "Go fast", value: "Hold the left stick forward the whole way" },
      { label: "Getting there", value: "Take a taxi, except Dalton Island" },
      { label: "Dalton Island", value: "Boat or aircraft only" },
    ],
    groups: [
      {
        heading: "All drone race locations",
        itemPages: true,
        items: [
          ["hamlet", "Hamlet", "confirmed:hamlet", ["Deep Roots", "1:31"], ["Power Station South", "1:26"], ["Power Station North", "2:04"]],
          ["watson-bay", "Watson Bay", "confirmed:watson-bay", ["Leonida RC Raceway", "1:27"], ["Watson Bay", "1:34"], ["Marshland Animal Park", "1:17"]],
          ["capri", "Capri", "confirmed:capri", ["Capri Train Station", "1:50"], ["Ravella Drive", "1:51"], ["Capri Lake", "2:01"]],
          ["buckskin-swamp", "Buckskin Swamp", undefined, ["Kowaachobee Village", "1:24"], ["Swampy Sal's Safari Park", "1:40"], ["Camp Moonflower", "1:48"]],
          ["balsero", "Balsero", "confirmed:balsero", ["Navitrak", "1:29"], ["Apollo Aggregates", "1:27"], ["Tisha-Wocka Flea Market", "1:08"]],
          ["downtown", "Downtown", "confirmed:downtown-vice-city", ["Future Leonida Art Museum", "1:47"], ["Shoreline Market", "2:01"], ["Wildland Zoo", "1:30"]],
          ["dalton-island", "Dalton Island", undefined, ["Avarice Petroleum", "1:53"], ["The Jamaica", "1:16"], ["Ivory Towers", "1:42"]],
          ["vice-beach", "Vice Beach", undefined, ["Leaf Links", "1:30"], ["Vice Regal Hotel", "1:41"], ["St. Vitus Medical Center", "2:00"]],
          ["waning-sands", "Waning Sands", "confirmed:waning-sands", ["Hot Skidz", "1:39"], ["Thundergolf", "1:57"], ["Evergreen Mall", "1:52"]],
          ["ambrosia", "Ambrosia", "confirmed:ambrosia", ["Captain O'Malley Marina", "2:03"], ["Allied Crystal", "2:02"], ["Waste Transfer Services", "1:55"]],
          ["port-gellhorn", "Port Gellhorn", "confirmed:port-gellhorn", ["Manifest Canyon", "1:28"], ["Red Apple Orchard", "1:12"], ["Port Gellhorn", "1:39"]],
          ["draper-island", "Draper Island", undefined, ["Draper Island Terminal", "1:49"], ["Draper Refinery East", "1:44"], ["Draper Refinery West", "1:51"]],
          ["moreau-sawmill", "Moreau Sawmill", undefined, ["Abandoned Mining Pit", "1:03"], ["Adler Creek", "1:21"], ["Macalister Gold Mine", "0:59"]],
          ["millport", "Millport", "confirmed:millport", ["Millport", "1:31"], ["Rushwood Logging", "2:08"], ["Tallaloko Lakeside Resort", "2:05"]],
        ].map(([slug, name, pin, a, b, c]) => {
          const races = [a, b, c] as [string, string][];
          return {
            slug: slug as string,
            name: name as string,
            value: "3 races",
            line: `Beat par in ${races[0][0]} and ${races[1][0]} to open ${races[2][0]}.`,
            facts: races.map(([race, par], index) => ({
              label: `Race ${index + 1}`,
              value: index < 2 ? `${race} (par ${par})` : `${race} (just finish)`,
            })),
            pin: pin as string | undefined,
          };
        }),
      },
    ],
    itemsLabel: "Other drone race spots",
    mapLinks: [
      { pin: "confirmed:hamlet", label: "Hamlet" },
      { pin: "confirmed:capri", label: "Capri" },
      { pin: "confirmed:downtown-vice-city", label: "Downtown" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
      { pin: "confirmed:millport", label: "Millport" },
    ],
    related: [
      { href: "/activities/top-fun-drone-races", label: "Top Fun drone races" },
      { href: "/trophies/top-fun", label: "Top Fun trophy" },
      { href: "/collectibles/race-challenges", label: "Race challenges" },
      { href: "/collectibles", label: "All collectibles" },
    ],
    faqs: [
      {
        question: "How many Top Fun drone races are in GTA 6?",
        answer: "42 races at 14 locations, 3 at each.",
        sources: droneSources,
      },
      {
        question: "How do you unlock the third drone race at a Top Fun spot?",
        answer: "Beat the par time in the first two races there. The third one only needs a finish.",
        sources: droneSources,
      },
      {
        question: "What do you need for the Top Fun trophy?",
        answer: "Win a drone race at all 14 Top Fun locations.",
        sources: droneSources,
      },
    ],
    sources: droneSources,
  },
  {
    slug: "race-challenges",
    title: "Race challenges",
    heading: "Race challenges",
    metaTitle: "GTA 6 Race Challenges – All 13 Trials and Gold Medals",
    metaDescription:
      "All 13 GTA 6 race challenges, from the Mud Club trials to the Hamlet BMX stunt run, and how many gold medals 100% needs. Unofficial.",
    line: "13 trials. Get gold in 10 for 100%.",
    intro:
      "Race challenges are timed trials and stunt runs with bronze, silver, and gold medals. They show as a blue icon when you get near.",
    quick: [
      { label: "Total", value: "13" },
      { label: "For 100%", value: "10 golds" },
      { label: "Track them", value: "Progress > Activities > Race Challenges" },
    ],
    groups: [
      {
        heading: "All race challenges",
        items: [
          { slug: "ambrosia-raceway-trial", name: "Ambrosia Raceway Trial", value: "", line: "" },
          { slug: "hamlet-bmx-stunt-run", name: "Hamlet BMX Stunt Run", value: "", line: "" },
          { slug: "boone-speedway-trial", name: "Boone Speedway Trial", value: "", line: "" },
          { slug: "gellhorn-raceway-trial", name: "Gellhorn Raceway Trial", value: "", line: "" },
          { slug: "gellhorn-dragway-trial", name: "Gellhorn Dragway Trial", value: "", line: "" },
          { slug: "kalaga-cycling-trial", name: "Kalaga Cycling Trial", value: "", line: "" },
          { slug: "mud-club-air-time-stunt-run", name: "Mud Club Air Time Stunt Run", value: "", line: "" },
          { slug: "mud-club-drag-trial", name: "Mud Club Drag Trial", value: "", line: "" },
          { slug: "mud-club-hill-climb-trial", name: "Mud Club Hill Climb Trial", value: "", line: "" },
          { slug: "mud-club-dirt-track-trial", name: "Mud Club Dirt Track Trial", value: "", line: "" },
          { slug: "mud-club-oval-trial", name: "Mud Club Oval Trial", value: "", line: "" },
          { slug: "mud-club-swamp-run-trial", name: "Mud Club Swamp Run Trial", value: "", line: "" },
          { slug: "waning-sands-motocross-stunt-run", name: "Waning Sands Motocross Stunt Run", value: "", line: "" },
        ],
      },
    ],
    mapLinks: [
      { pin: "confirmed:ambrosia", label: "Ambrosia" },
      { pin: "confirmed:hamlet", label: "Hamlet" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
      { pin: "confirmed:waning-sands", label: "Waning Sands" },
    ],
    related: [
      { href: "/businesses/thrillbilly-mud-club", label: "Thrillbilly Mud Club" },
      { href: "/businesses/gellhorn-raceway", label: "Gellhorn Raceway" },
      { href: "/businesses/boone-speedway", label: "Boone Speedway" },
      { href: "/activities/street-races", label: "Street races" },
      { href: "/challenges/rally-winner", label: "Rally Winner challenge" },
    ],
    faqs: [
      {
        question: "How many race challenges are in GTA 6?",
        answer: "13, each with bronze, silver, and gold medals. You need gold in 10 of them for 100%.",
        sources: raceChallengeSources,
      },
    ],
    sources: raceChallengeSources,
  },
  {
    slug: "golf-courses",
    title: "Golf courses",
    heading: "Golf courses",
    metaTitle: "GTA 6 Golf Courses – All 5 Golf and Mini Golf Courses",
    metaDescription:
      "All 5 GTA 6 golf courses: 3 mini golf courses and 2 golf courses, where they are, and which ones the golf challenges use. Unofficial.",
    line: "3 mini golf, 2 golf. Play 2 mini golf for 100%.",
    intro:
      "There are three mini golf courses and two golf courses. The golf challenges use King Gator and Frontier Adventure Golf.",
    quick: [
      { label: "Courses", value: "5" },
      { label: "Mini golf", value: "3" },
      { label: "Golf", value: "2" },
      { label: "For 100%", value: "2 mini golf courses" },
    ],
    groups: [
      {
        heading: "Mini golf",
        itemPages: true,
        items: [
          {
            slug: "king-gator-adventure-golf",
            name: "King Gator Adventure Golf",
            value: "Mini golf",
            line: "Mini golf in Buckskin Swamp. Three of the golf challenges can be played here.",
            facts: [{ label: "Where", value: "Buckskin Swamp" }, { label: "Holes", value: "9 or 18" }],
          },
          {
            slug: "frontier-adventure-golf",
            name: "Frontier Adventure Golf",
            value: "Mini golf",
            line: "Mini golf in Waning Sands. Three of the golf challenges can be played here.",
            facts: [{ label: "Where", value: "Waning Sands, Leonard County" }, { label: "Holes", value: "9 or 18" }],
            pin: "confirmed:waning-sands",
          },
          {
            slug: "dino-golf-challenge",
            name: "Dino Golf Challenge",
            value: "Mini golf",
            line: "Mini golf in Frogswater, Kelly County.",
            facts: [{ label: "Where", value: "Frogswater, Kelly County" }],
          },
        ],
      },
      {
        heading: "Golf",
        itemPages: true,
        items: [
          {
            slug: "leaf-links-golf-challenge",
            name: "Leaf Links Golf Challenge",
            value: "Golf",
            line: "Golf at Leaf Links in Vice Beach.",
            facts: [{ label: "Where", value: "Leaf Links, Vice Beach" }],
          },
          {
            slug: "mount-hailes-golf-challenge",
            name: "Mount Hailes Golf Challenge",
            value: "Golf",
            line: "Golf at the Mount Hailes Club in Waning Sands. It also has a driving range.",
            facts: [{ label: "Where", value: "Mount Hailes Club, Waning Sands" }],
            pin: "confirmed:waning-sands",
          },
        ],
      },
    ],
    itemsLabel: "Other courses",
    mapLinks: [{ pin: "confirmed:waning-sands", label: "Waning Sands" }],
    related: [
      { href: "/activities/mini-golf", label: "Mini-golf" },
      { href: "/challenges/golf-rookie", label: "Golf Rookie challenge" },
      { href: "/challenges/golf-pro", label: "Golf Pro challenge" },
      { href: "/challenges/double-hole-in-one", label: "Double Hole In One challenge" },
    ],
    faqs: [
      {
        question: "How many golf courses are in GTA 6?",
        answer: "Five: King Gator Adventure Golf, Frontier Adventure Golf, and Dino Golf Challenge for mini golf, plus Leaf Links and Mount Hailes for golf.",
        sources: golfSources,
      },
    ],
    sources: golfSources,
  },
  {
    slug: "pool-opponents",
    title: "Pool opponents",
    heading: "Pool opponents",
    metaTitle: "GTA 6 Pool Locations – All Pool Opponents",
    metaDescription:
      "Where to play pool in GTA 6: the bars with a pool opponent, where the table is in each one, and how many wins you need for 100%. Unofficial.",
    line: "7 opponents. Beat 5 for 100%.",
    intro:
      "There are 17 pool tables, but only 7 have an opponent you can challenge. Beat any 5 different opponents for 100%. Six are known so far.",
    quick: [
      { label: "Opponents", value: "7" },
      { label: "Pool tables", value: "17" },
      { label: "For 100%", value: "Beat any 5" },
      { label: "Track them", value: "Progress > Activities > Sports > Pool" },
    ],
    groups: [
      {
        heading: "Pool opponents",
        itemPages: true,
        items: [
          {
            slug: "skeeters",
            name: "Skeeter's",
            value: "Hamlet",
            line: "Skeeter's bar on the south edge of Hamlet. The table is on the south side of the building.",
            facts: [{ label: "Where", value: "Hamlet" }],
            pin: "confirmed:hamlet",
          },
          {
            slug: "zoticos",
            name: "Zotico's",
            value: "Balsero",
            line: "Zotico's bar on the west edge of Balsero, Vice City. The table is on the east side of the bar.",
            facts: [{ label: "Where", value: "Balsero, Vice City" }],
            pin: "confirmed:balsero",
          },
          {
            slug: "the-thirsty-wolf",
            name: "The Thirsty Wolf",
            value: "Belville",
            line: "The Thirsty Wolf bar on the northwest edge of Belville. The table is on the north side of the building.",
            facts: [{ label: "Where", value: "Belville, Leonard County" }],
            pin: "confirmed:belville",
          },
          {
            slug: "jacobs-tavern",
            name: "Jacob's Tavern",
            value: "Millport",
            line: "Jacob's Tavern on the east side of Millport, next to the Pay 'n' Spray. The table is on the north side.",
            facts: [{ label: "Where", value: "Millport, Lummox County" }],
            pin: "confirmed:millport",
          },
          {
            slug: "delights-cabaret",
            name: "Delights Cabaret",
            value: "Port Gellhorn",
            line: "Delights in Port Gellhorn. The table is in the middle of the club.",
            facts: [{ label: "Where", value: "Port Gellhorn, Kelly County" }],
            pin: "confirmed:delights",
          },
          {
            slug: "kowaachobee-cafe-and-bar",
            name: "Kowaachobee Cafe & Bar",
            value: "Buckskin Swamp",
            line: "Kowaachobee Cafe & Bar just off the highway through Buckskin Swamp. The table is on the west side.",
            facts: [{ label: "Where", value: "Buckskin Swamp" }],
          },
        ],
      },
    ],
    itemsLabel: "Other pool opponents",
    mapLinks: [
      { pin: "confirmed:hamlet", label: "Hamlet" },
      { pin: "confirmed:balsero", label: "Balsero" },
      { pin: "confirmed:belville", label: "Belville" },
      { pin: "confirmed:millport", label: "Millport" },
      { pin: "confirmed:delights", label: "Delights" },
    ],
    related: [
      { href: "/activities/pool", label: "Pool" },
      { href: "/where-to-find/clubs", label: "Clubs" },
      { href: "/guides/relationship", label: "Relationship" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
    ],
    faqs: [
      {
        question: "Where can you play pool in GTA 6?",
        answer: "At bars with a pool opponent: Skeeter's in Hamlet, Zotico's in Balsero, The Thirsty Wolf in Belville, Jacob's Tavern in Millport, Delights in Port Gellhorn and Kowaachobee Cafe & Bar in Buckskin Swamp.",
        sources: poolSources,
      },
      {
        question: "How many pool opponents do you need for 100% in GTA 6?",
        answer: "Beat any 5 of the 7 opponents.",
        sources: poolSources,
      },
    ],
    sources: poolSources,
  },
  {
    slug: "video-games",
    title: "Video games",
    heading: "Video games and arcade games",
    metaTitle: "GTA 6 Arcade and Video Game Locations – All 4 Games",
    metaDescription:
      "All 4 playable video games in GTA 6: the 3 on your home console and the Bang For Your Buck arcade machine, what counts for 100%, and the Stick Fiddler trophy. Unofficial.",
    line: "4 games. Play each once for 100%.",
    intro:
      "There are 4 video games you can play. Three are on the console by the TV at home, and Bang For Your Buck is on arcade machines out in the world. Starting each one once is enough for 100%.",
    quick: [
      { label: "Games", value: "4" },
      { label: "For 100%", value: "Play all 4 once" },
      { label: "Trophy", value: "Stick Fiddler: finish every level of one game" },
    ],
    groups: [
      {
        heading: "All video games",
        itemPages: true,
        items: [
          {
            slug: "tenebrae-lux",
            name: "Tenebrae Lux",
            value: "Home console",
            line: "Use the controller at the TV in your home and pick it on the JoySystem console.",
            facts: [{ label: "Where", value: "JoySystem console at home" }],
            pin: "confirmed:jasons-place",
          },
          {
            slug: "street-trash-iii",
            name: "Street Trash III",
            value: "Home console",
            line: "Use the controller at the TV in your home and pick it on the JoySystem console.",
            facts: [{ label: "Where", value: "JoySystem console at home" }],
            pin: "confirmed:jasons-place",
          },
          {
            slug: "time-jackers-rewind",
            name: "Time Jackers Rewind",
            value: "Home console",
            line: "Use the controller at the TV in your home and pick it on the JoySystem console.",
            facts: [{ label: "Where", value: "JoySystem console at home" }],
            pin: "confirmed:jasons-place",
          },
          {
            slug: "bang-for-your-buck",
            name: "Bang For Your Buck",
            value: "Arcade machines",
            line: "The only one not on the home console. Play it at arcade machines around the map, for example outside the Bargain World clothing store in Port Gellhorn.",
            facts: [{ label: "Where", value: "Arcade machines, e.g. outside Bargain World, Port Gellhorn" }],
            pin: "confirmed:port-gellhorn",
          },
        ],
      },
    ],
    itemsLabel: "Other video games",
    mapLinks: [
      { pin: "confirmed:jasons-place", label: "Jason's place" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
    ],
    related: [
      { href: "/activities/arcade-games", label: "Arcade games" },
      { href: "/trophies", label: "Trophies" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
      { href: "/activities/watching-tv", label: "Watching TV" },
    ],
    faqs: [
      {
        question: "How many video games can you play in GTA 6?",
        answer: "Four: Tenebrae Lux, Street Trash III and Time Jackers Rewind on the home console, and Bang For Your Buck on arcade machines.",
        sources: videoGameSources,
      },
      {
        question: "How do you get Stick Fiddler in GTA 6?",
        answer: "Finish every level of any one of the four video games.",
        sources: videoGameSources,
      },
      {
        question: "Do you have to beat the video games for 100%?",
        answer: "No. Starting each of the four games once is enough for the 100% checklist.",
        sources: videoGameSources,
      },
    ],
    sources: videoGameSources,
  },
  {
    slug: "book-swaps",
    title: "Book Swaps",
    heading: "Book Swaps (little libraries)",
    metaTitle: "GTA 6 Book Swap Locations – All 7 Little Libraries",
    metaDescription:
      "All 7 GTA 6 Book Swap locations (little libraries), the book at each one, and how they count with magazines toward 100%. Unofficial.",
    line: "7 books. Counts with magazines for 100%.",
    intro:
      "Book Swaps are little libraries where you read a book. There are 7, and they count together with the 27 magazines, books and comics. You need 30 of the 34 for 100%.",
    quick: [
      { label: "Book Swaps", value: "7" },
      { label: "With magazines", value: "34" },
      { label: "For 100%", value: "30 of 34" },
      { label: "Track them", value: "Progress > Collections > Exploration > Book Swaps" },
    ],
    tips: [{ label: "Heads up", value: "The game doesn't show which ones you have read, so note them as you go" }],
    groups: [
      {
        heading: "All Book Swaps",
        itemPages: true,
        items: [
          { slug: "the-wizards-ruin", name: "The Wizard's Ruin: Loud Clap of the Night", value: "Watson Bay", line: "Book Swap in Watson Bay, Mariana County.", facts: [{ label: "Where", value: "Watson Bay, Mariana County" }], pin: "confirmed:watson-bay" },
          { slug: "killer-prom", name: "Killer Prom", value: "Key Lento", line: "Book Swap in Key Lento, Mariana County.", facts: [{ label: "Where", value: "Key Lento, Mariana County" }], pin: "confirmed:leonida-keys" },
          { slug: "thighlander", name: "Thighlander: A Tale of True Scotsmen", value: "Southside", line: "Book Swap in Southside, Vice City.", facts: [{ label: "Where", value: "Southside, Vice-Dale County" }], pin: "confirmed:southside-vice-city" },
          { slug: "goodnight-dollface-goodnight", name: "Goodnight, Dollface, Goodnight", value: "Vespucci Island", line: "Book Swap on Vespucci Island, Vice-Dale County.", facts: [{ label: "Where", value: "Vespucci Island, Vice-Dale County" }] },
          { slug: "outback-gas-junkie", name: "Outback Gas Junkie", value: "Waning Sands", line: "Book Swap in Waning Sands, Leonard County.", facts: [{ label: "Where", value: "Waning Sands, Leonard County" }], pin: "confirmed:waning-sands" },
          { slug: "humanity-vs-space", name: "Humanity vs Space", value: "Ambrosia", line: "Book Swap in Ambrosia, Kelly County.", facts: [{ label: "Where", value: "Ambrosia, Kelly County" }], pin: "confirmed:ambrosia" },
          { slug: "badlands-revenge", name: "Badlands Revenge: Ride Like Hell", value: "Capri", line: "Book Swap in Capri.", facts: [{ label: "Where", value: "Capri" }], pin: "confirmed:capri" },
        ],
      },
    ],
    itemsLabel: "Other Book Swaps",
    mapLinks: [
      { pin: "confirmed:watson-bay", label: "Watson Bay" },
      { pin: "confirmed:leonida-keys", label: "Key Lento" },
      { pin: "confirmed:southside-vice-city", label: "Southside" },
      { pin: "confirmed:waning-sands", label: "Waning Sands" },
      { pin: "confirmed:ambrosia", label: "Ambrosia" },
      { pin: "confirmed:capri", label: "Capri" },
    ],
    related: [
      { href: "/collectibles/magazines-books-comics", label: "Magazines, books and comics" },
      { href: "/guides/waink-scans", label: "WAiNK scans" },
      { href: "/collectibles/card-sets", label: "Card sets" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
    ],
    faqs: [
      {
        question: "How many Book Swaps are in GTA 6?",
        answer: "Seven. They count together with the 27 magazines, books and comics, and you need 30 of those 34 for 100%.",
        sources: bookSwapSources,
      },
      {
        question: "Where are the Book Swaps in GTA 6?",
        answer: "Watson Bay, Key Lento, Southside, Vespucci Island, Waning Sands, Ambrosia and Capri.",
        sources: bookSwapSources,
      },
    ],
    sources: bookSwapSources,
  },
  {
    slug: "unique-playlists",
    title: "Unique playlists",
    heading: "Unique playlists",
    metaTitle: "GTA 6 Unique Playlists – All 5 Poster Locations",
    metaDescription:
      "How to unlock both GTA 6 unique playlists, The Sniper of La Perle and The Vault Radio: all 5 posters to scan, where they are, and where to listen. Unofficial.",
    line: "2 playlists, 5 posters to scan.",
    intro:
      "There are 2 unique playlists. Scan posters with WAiNK to unlock them, then listen in a car or on headphones. Both count for 100%.",
    quick: [
      { label: "Playlists", value: "2" },
      { label: "Posters", value: "5" },
      { label: "For 100%", value: "Both" },
      { label: "Track them", value: "Progress > Collections > Exploration > Unique Playlists" },
    ],
    tips: [{ label: "Heads up", value: "The game doesn't show which posters you have scanned, so do all of one playlist in one trip" }],
    groups: [
      {
        heading: "The Sniper of La Perle (4 posters)",
        itemPages: true,
        items: [
          { slug: "aunt-zolas-soul-food", name: "Aunt Zola's Soul Food poster", value: "La Perle", line: "Inside the restaurant, by the cashier.", facts: [{ label: "Where", value: "Aunt Zola's Soul Food, La Perle" }, { label: "Playlist", value: "The Sniper of La Perle" }], pin: "confirmed:la-perle" },
          { slug: "twa-ponya-tattoo", name: "TWA Ponya Tattoo poster", value: "La Perle", line: "Inside the tattoo studio, on the table right by the entrance.", facts: [{ label: "Where", value: "TWA Ponya Tattoo, La Perle" }, { label: "Playlist", value: "The Sniper of La Perle" }], pin: "confirmed:la-perle" },
          { slug: "drip-drops", name: "Drip Drops poster", value: "La Perle", line: "Inside the clothing store, on the counter by the clerk.", facts: [{ label: "Where", value: "Drip Drops, La Perle" }, { label: "Playlist", value: "The Sniper of La Perle" }], pin: "confirmed:la-perle" },
          { slug: "jack-of-hearts", name: "Jack of Hearts poster", value: "Crosstown", line: "Inside the Jack of Hearts, on a crate in the east recording booth on the second floor.", facts: [{ label: "Where", value: "Jack of Hearts, Crosstown" }, { label: "Playlist", value: "The Sniper of La Perle" }], pin: "confirmed:jack-of-hearts" },
        ],
      },
      {
        heading: "The Vault Radio (1 poster)",
        itemPages: true,
        items: [
          { slug: "the-vault", name: "The Vault poster", value: "Vice City", line: "Scan the red poster just inside the entrance of The Vault nightclub.", facts: [{ label: "Where", value: "The Vault nightclub, Vice City" }, { label: "Playlist", value: "The Vault Radio" }] },
        ],
      },
    ],
    itemsLabel: "Other posters",
    mapLinks: [
      { pin: "confirmed:la-perle", label: "La Perle" },
      { pin: "confirmed:jack-of-hearts", label: "Jack of Hearts" },
    ],
    related: [
      { href: "/radio", label: "Radio stations" },
      { href: "/guides/waink-scans", label: "WAiNK scans" },
      { href: "/stores/twa-ponya-tattoo", label: "TWA Ponya Tattoo" },
      { href: "/brands/drip-drops", label: "Drip Drops" },
      { href: "/where-to-find/clubs", label: "Clubs" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
    ],
    faqs: [
      {
        question: "How do you unlock The Sniper of La Perle in GTA 6?",
        answer: "Scan 4 posters: in Aunt Zola's Soul Food, TWA Ponya Tattoo and Drip Drops in La Perle, and on the second floor of the Jack of Hearts in Crosstown. Then find it under On Demand.",
        sources: playlistSources,
      },
      {
        question: "How do you unlock The Vault Radio in GTA 6?",
        answer: "Scan the red poster just inside the entrance of The Vault nightclub. Then find it on the radio as The Vault.",
        sources: playlistSources,
      },
    ],
    sources: playlistSources,
  },
  {
    slug: "waink-locations",
    title: "WAiNK locations",
    heading: "WAiNK scan locations",
    metaTitle: "GTA 6 WAiNK Locations – Landmarks, Sculptures and Curiosities",
    metaDescription:
      "GTA 6 WAiNK scan locations: the 5 sets, how many you need for You WAiNKer! and 100%, and known landmarks, sculptures and curiosities by area. Unofficial.",
    line: "Scan 100 WAiNK locations for the trophy and 100%.",
    intro:
      "WAiNK locations are landmarks, sculptures, curiosities and No Flusher tags you scan with the WAiNK app on your phone. You need 100 for the You WAiNKer! trophy and for 100%.",
    quick: [
      { label: "Needed", value: "100 scans" },
      { label: "Sets", value: "5" },
      { label: "Landmarks", value: "31" },
      { label: "Curiosities", value: "35" },
      { label: "Sculptures", value: "23" },
      { label: "Track them", value: "Progress > Collections > WAiNK Locations" },
    ],
    tips: [
      { label: "Nearby", value: "The controller buzzes, a sound plays and a note shows bottom right" },
      { label: "Doesn't count", value: "AHOL Street Art and 1010 Murals have their own lists" },
    ],
    groups: [
      {
        heading: "Landmarks (known so far)",
        itemPages: true,
        items: [
          { slug: "badger-rd-tower", name: "Badger R&D Tower", value: "Key Lento", line: "A big radio tower on the main road, south of Brian's marina in Key Lento.", facts: [{ label: "Where", value: "Key Lento, Mariana County" }], pin: "confirmed:brians-boat-works" },
          { slug: "thicc-herbie", name: "Thicc Herbie", value: "Maroon Key", line: "The big blimp at Maroon Key. It may not scan up close; scan it from Abismo Key State Park across the water to the south.", facts: [{ label: "Where", value: "Maroon Key, scan from Abismo Key" }], pin: "confirmed:abismo-key" },
          { slug: "riquezas-key-radome", name: "Riquezas Key Radome", value: "Riquezas Keys", line: "Head south-southwest past Mile Zero Air Station. The radome is at the south tip of Riquezas Keys.", facts: [{ label: "Where", value: "Riquezas Keys, Mariana County" }], pin: "confirmed:leonida-keys" },
          { slug: "belpoint-lighthouse", name: "Belpoint Lighthouse", value: "Belpoint", line: "The lighthouse at Belpoint, Mariana County.", facts: [{ label: "Where", value: "Belpoint, Mariana County" }] },
          { slug: "gellhorn-fun-fair", name: "Gellhorn Fun Fair", value: "Port Gellhorn", line: "The fun fair in Port Gellhorn, Kelly County.", facts: [{ label: "Where", value: "Port Gellhorn, Kelly County" }], pin: "confirmed:port-gellhorn" },
          { slug: "farmer-scrumpys-apple-orchard", name: "Farmer Scrumpy's Apple Orchard", value: "Manifest Canyon", line: "An apple orchard in Manifest Canyon, Kelly County.", facts: [{ label: "Where", value: "Manifest Canyon, Kelly County" }] },
          { slug: "lawton-co-paper-mill", name: "Lawton Co. Paper Mill", value: "Moreau", line: "The paper mill in Moreau, Lummox County.", facts: [{ label: "Where", value: "Moreau, Lummox County" }] },
          { slug: "grayson-assembly", name: "Grayson Assembly", value: "Grayson", line: "In Grayson, Lummox County.", facts: [{ label: "Where", value: "Grayson, Lummox County" }] },
          { slug: "kalaga-lookout", name: "Kalaga Lookout", value: "Mount Kalaga", line: "A lookout in Mount Kalaga National Park, Lummox County.", facts: [{ label: "Where", value: "Mount Kalaga National Park" }], pin: "confirmed:mount-kalaga-national-park" },
          { slug: "dock-ring", name: "Dock Ring", value: "Downtown", line: "In Downtown Vice City.", facts: [{ label: "Where", value: "Downtown, Vice City" }], pin: "confirmed:downtown-vice-city" },
        ],
      },
      {
        heading: "Sculptures (known so far)",
        itemPages: true,
        items: [
          { slug: "the-wonder-whale", name: "The Wonder Whale", value: "Key Lento", line: "A colorful whale statue at the main junction in Key Lento, near where you collect rent early on.", facts: [{ label: "Where", value: "Key Lento, Mariana County" }], pin: "confirmed:wonder-whale" },
          { slug: "fatal-incursion-plaque", name: "Fatal Incursion Plaque", value: "Key Lento", line: "A memorial in the beachside park at the southwest tip of Key Lento, past the barber and clothing store.", facts: [{ label: "Where", value: "Southwest Key Lento" }], pin: "confirmed:leonida-keys" },
          { slug: "triangler-sculpture", name: "Triangler Sculpture", value: "Corsair Key", line: "A sculpture in the water by Cal's place, just northeast of Jason's house.", facts: [{ label: "Where", value: "Corsair Key, Mariana County" }], pin: "confirmed:jasons-place" },
          { slug: "grassrivers-visitor-center-statue", name: "Grassrivers Visitor Center Statue", value: "Grassrivers", line: "The statue outside the Grassrivers Visitor Center.", facts: [{ label: "Where", value: "Grassrivers, Mariana County" }], pin: "confirmed:grassrivers" },
          { slug: "pixel-fountain", name: "Pixel Fountain", value: "Tequesta", line: "A fountain in Tequesta, Vice City.", facts: [{ label: "Where", value: "Tequesta, Vice City" }], pin: "confirmed:tequesta" },
          { slug: "neptune-rises", name: "Neptune Rises", value: "Washington Beach", line: "A sculpture in Washington Beach, Vice Beach.", facts: [{ label: "Where", value: "Washington Beach, Vice Beach" }], pin: "confirmed:washington-beach" },
          { slug: "vice-museum-of-art-sculpture", name: "Vice Museum of Art Sculpture", value: "Washington Beach", line: "Outside the Vice Museum of Art in Washington Beach.", facts: [{ label: "Where", value: "Washington Beach, Vice Beach" }], pin: "confirmed:washington-beach" },
          { slug: "princes-robot-bubblegum-statue", name: "Princes Robot Bubblegum Statue", value: "Washington Beach", line: "A statue in Washington Beach, Vice Beach.", facts: [{ label: "Where", value: "Washington Beach, Vice Beach" }], pin: "confirmed:washington-beach" },
          { slug: "monument-of-leonidan-supremacy", name: "Monument of Leonidan Supremacy", value: "Manifest Canyon", line: "A monument in Manifest Canyon, Kelly County.", facts: [{ label: "Where", value: "Manifest Canyon, Kelly County" }] },
        ],
      },
      {
        heading: "Curiosities (known so far)",
        itemPages: true,
        items: [
          { slug: "christmas-house", name: "Christmas House", value: "Key Lento", line: "A house decorated for Christmas on the westernmost street in Key Lento.", facts: [{ label: "Where", value: "West Key Lento" }], pin: "confirmed:leonida-keys" },
          { slug: "plunge-masters-deep-sea-chalet", name: "Plunge Masters Deep Sea Chalet", value: "Key Lento", line: "Further along the same street, at the Plunge Masters sign. Scan the mural behind the shed.", facts: [{ label: "Where", value: "West Key Lento" }], pin: "confirmed:leonida-keys" },
          { slug: "abismo-key-carcass", name: "Abismo Key Carcass", value: "Abismo Key", line: "Walk south through the mangroves on Abismo Key to the beach. It looks like the bones of an alien.", facts: [{ label: "Where", value: "South beach, Abismo Key" }], pin: "confirmed:abismo-key" },
          { slug: "derelict-spy-vessel", name: "Derelict Spy Vessel", value: "Permit Keys", line: "Take a boat to the southeastern island in the Permit Keys. The wreck is grounded at its tip.", facts: [{ label: "Where", value: "Permit Keys, by boat" }] },
          { slug: "beach-party-site", name: "Beach Party Site", value: "Permit Keys", line: "An abandoned beach party at the north edge of the central island chain in the Permit Keys.", facts: [{ label: "Where", value: "Permit Keys, by boat" }] },
          { slug: "fingerpost", name: "Fingerpost", value: "Permit Keys", line: "Right by the Beach Party Site, hidden behind trees and mangroves.", facts: [{ label: "Where", value: "Permit Keys, by boat" }] },
          { slug: "goose-key-carcass", name: "Goose Key Carcass", value: "Goose Key", line: "Follow the coast northeast around Mile Zero Air Station. It's a restricted area, so don't get spotted.", facts: [{ label: "Where", value: "Near Mile Zero Air Station" }] },
          { slug: "desert-island-piano", name: "Desert Island Piano", value: "Islands", line: "On a small island in the chain south of Cottonmouth Lake and Gambit Bay.", facts: [{ label: "Where", value: "South of Gambit Bay, by boat" }] },
          { slug: "vibrant-pond", name: "Vibrant Pond", value: "Swamp", line: "In the swamp to the north. Look for a warning sign before a big pool of muck.", facts: [{ label: "Where", value: "Swamp, Mariana County" }] },
          { slug: "dead-sharks", name: "Dead Sharks", value: "Wetman Bay", line: "A beach covered in dead sharks on the southern islands in Wetman Bay.", facts: [{ label: "Where", value: "Wetman Bay, by boat" }] },
          { slug: "wetman-bay-carcass", name: "Wetman Bay Carcass", value: "Wetman Bay", line: "Another alien-looking carcass on the island just north of Dead Sharks.", facts: [{ label: "Where", value: "Wetman Bay, by boat" }] },
          { slug: "noflusher-homestead", name: "NoFlusher Homestead", value: "Swamp", line: "West of the Kingfisher swamp base. Not for weak stomachs.", facts: [{ label: "Where", value: "West of Kingfisher" }] },
          { slug: "imperial-spanish-ruins", name: "Imperial Spanish Ruins", value: "Moreau", line: "Ruins in Moreau, Lummox County.", facts: [{ label: "Where", value: "Moreau, Lummox County" }] },
          { slug: "big-entrance", name: "Big Entrance", value: "Dalton Island", line: "On Dalton Island, Vice Beach.", facts: [{ label: "Where", value: "Dalton Island, Vice Beach" }] },
        ],
      },
      {
        heading: "No Flusher tags",
        items: [
          { slug: "no-flusher-tags", name: "No Flusher tags", value: "City streets", line: "Colorful spray markings on the ground in city areas. One is just east of The Banana Hole main bar in Ocean Beach. The menu counts them but doesn't list each one.", pin: "confirmed:ocean-beach" },
        ],
      },
    ],
    itemsLabel: "Other WAiNK locations",
    mapLinks: [
      { pin: "confirmed:wonder-whale", label: "Wonder Whale" },
      { pin: "confirmed:abismo-key", label: "Abismo Key" },
      { pin: "confirmed:grassrivers", label: "Grassrivers" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
      { pin: "confirmed:washington-beach", label: "Washington Beach" },
      { pin: "confirmed:tequesta", label: "Tequesta" },
      { pin: "confirmed:downtown-vice-city", label: "Downtown" },
      { pin: "confirmed:mount-kalaga-national-park", label: "Mount Kalaga" },
    ],
    related: [
      { href: "/guides/waink-scans", label: "How to scan" },
      { href: "/phone/waink", label: "WAiNK app" },
      { href: "/trophies/you-wainker", label: "You WAiNKer! trophy" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
      { href: "/guides/1010-murals", label: "1010 Murals and the 1010 Cheetah" },
      { href: "/guides/ufo", label: "UFO easter egg" },
      { href: "/collectibles/magazines-books-comics", label: "Magazines, books and comics" },
    ],
    faqs: [
      {
        question: "How many WAiNK locations do you need in GTA 6?",
        answer: "100. That unlocks You WAiNKer! and covers the WAiNK part of 100%.",
        sources: wainkSources,
      },
      {
        question: "How many WAiNK landmarks are in GTA 6?",
        answer: "31 landmarks. There are also 35 curiosities and 23 sculptures, plus No Flusher tags.",
        sources: wainkSources,
      },
      {
        question: "Do street art and murals count as WAiNK locations?",
        answer: "No. AHOL Street Art and 1010 Murals are scanned the same way but have their own lists and don't count toward the 100.",
        sources: wainkSources,
      },
      {
        question: "How do you know a WAiNK location is nearby?",
        answer: "The controller buzzes, a sound plays and a note shows in the bottom right. Open the WAiNK camera and look for the WAiNK icon on the object.",
        sources: wainkSources,
      },
    ],
    sources: wainkSources,
  },
  {
    slug: "magazines-books-comics",
    title: "Magazines, books and comics",
    heading: "Magazines, books and comics",
    metaTitle: "GTA 6 Magazine, Book and Comic Locations – All 27 and Missables",
    metaDescription:
      "GTA 6 magazines, books and comics: where to find them, which ones are missable, and how they count with Book Swaps toward 100% (30 of 34). Unofficial.",
    line: "27 to read. 30 of 34 with Book Swaps for 100%.",
    intro:
      "There are 27 magazines, books and comics to read. With the 7 Book Swaps that makes 34, and you need 30 for 100%. Most titles have more than one copy, so a missed spot is rarely the end.",
    quick: [
      { label: "Items", value: "27" },
      { label: "With Book Swaps", value: "34" },
      { label: "For 100%", value: "30 of 34" },
      { label: "Track them", value: "Progress > Collections > Exploration" },
    ],
    tips: [
      { label: "Missable spots", value: "Jason's house (Chapter 1), Starlet Motel (Chapter 2), Bayside apartment (Chapter 3)" },
      { label: "Heads up", value: "The game doesn't show which ones you've read, so note them as you go" },
    ],
    groups: [
      {
        heading: "Jason's house (read before Chapter 1 ends)",
        itemPages: true,
        items: [
          { slug: "ashes-of-glory", name: "Ashes of Glory", value: "Key Lento", line: "On the bedside table in Jason's house. Read it during Chapter 1.", facts: [{ label: "Where", value: "Jason's house, Key Lento" }, { label: "Missable spot", value: "Chapter 1" }], pin: "confirmed:jasons-place" },
          { slug: "lethal-by-design", name: "Lethal By Design", value: "Key Lento", line: "On the living room table in Jason's house. Read it during Chapter 1.", facts: [{ label: "Where", value: "Jason's house, Key Lento" }, { label: "Missable spot", value: "Chapter 1" }], pin: "confirmed:jasons-place" },
          { slug: "orca-a-whole-different-animal", name: "Orca: A Whole Different Animal", value: "Key Lento", line: "In Jason's living room, by the east window next to the radio. Read it during Chapter 1.", facts: [{ label: "Where", value: "Jason's house, Key Lento" }, { label: "Missable spot", value: "Chapter 1" }], pin: "confirmed:jasons-place" },
          { slug: "body-copy", name: "Body Copy", value: "Key Lento", line: "On the back deck of Jason's house, by the weights. Read it during Chapter 1. There is one more magazine in the shed under the house.", facts: [{ label: "Where", value: "Jason's house, Key Lento" }, { label: "Missable spot", value: "Chapter 1" }], pin: "confirmed:jasons-place" },
        ],
      },
      {
        heading: "Mariana and Kelly County",
        itemPages: true,
        items: [
          { slug: "rx-men", name: "RX Men", value: "Key Lento", line: "On the magazine rack in the 247 store in Key Lento.", facts: [{ label: "Where", value: "247 store, Key Lento" }], pin: "confirmed:leonida-keys" },
          { slug: "help-me-help-you-help-me", name: "Help Me Help You Help Me", value: "Starlet Motel", line: "On a table in the Starlet Motel reception. This spot is gone after Chapter 2.", facts: [{ label: "Where", value: "Starlet Motel, Gellhorn" }, { label: "Missable spot", value: "Chapter 2" }], pin: "confirmed:starlet-motel" },
          { slug: "wizard-wang", name: "Wizard Wang", value: "Starlet Motel", line: "On a table in the Starlet Motel cafeteria. This spot is gone after Chapter 2.", facts: [{ label: "Where", value: "Starlet Motel, Gellhorn" }, { label: "Missable spot", value: "Chapter 2" }], pin: "confirmed:starlet-motel" },
          { slug: "the-johnsons", name: "The Johnsons (Issue 1)", value: "Gellhorn", line: "Inside Alpha Gas in Gellhorn, northeast of the Starlet Motel.", facts: [{ label: "Where", value: "Alpha Gas, Gellhorn" }], pin: "confirmed:starlet-motel" },
          { slug: "dicked-down-deep-in-space", name: "Dicked Down Deep in Space", value: "Port Gellhorn", line: "Inside a trailer in Lost Vista, northwest of the Port Gellhorn Station Garage.", facts: [{ label: "Where", value: "Lost Vista, Port Gellhorn" }], pin: "confirmed:port-gellhorn" },
        ],
      },
      {
        heading: "Vice City and beyond",
        itemPages: true,
        items: [
          { slug: "passion-bc", name: "Passion B.C.", value: "Bayside", line: "Next to the bathtub in the Bayside apartment. This spot is gone after Chapter 3.", facts: [{ label: "Where", value: "Bayside apartment, Vice City" }, { label: "Missable spot", value: "Chapter 3" }] },
          { slug: "two-pricks-in-the-bush", name: "Two Pricks in the Bush", value: "Bayside", line: "On the table in front of the TV in the Bayside apartment. This spot is gone after Chapter 3.", facts: [{ label: "Where", value: "Bayside apartment, Vice City" }, { label: "Missable spot", value: "Chapter 3" }] },
          { slug: "ratface-issue-1", name: "Ratface (Issue 1)", value: "La Perle", line: "On the magazine rack in Xero Food Mart, La Perle.", facts: [{ label: "Where", value: "Xero Food Mart, La Perle" }], pin: "confirmed:la-perle" },
          { slug: "special-friends-force", name: "Special Friends Force (Issue 1)", value: "La Perle", line: "On the same rack in Xero Food Mart, La Perle.", facts: [{ label: "Where", value: "Xero Food Mart, La Perle" }], pin: "confirmed:la-perle" },
          { slug: "high-rollerz-issue-37", name: "High Rollerz – Issue 37", value: "Crosstown", line: "In the Jack of Hearts, second floor, in the hallway west of the recording booths.", facts: [{ label: "Where", value: "Jack of Hearts, Crosstown" }], pin: "confirmed:jack-of-hearts" },
          { slug: "bombazo-issue-2342", name: "¡BOMBAZO! – Issue 2342", value: "Washington Beach", line: "On the magazine rack in Ron Stop'n'Snack, Washington Beach.", facts: [{ label: "Where", value: "Ron Stop'n'Snack, Washington Beach" }], pin: "confirmed:washington-beach" },
          { slug: "foiled", name: "Foiled", value: "Belville", line: "On a bed inside a garage you can break into, on the northern row of houses in Belville.", facts: [{ label: "Where", value: "Belville, Leonard County" }], pin: "confirmed:belville" },
          { slug: "the-cowboys-prayer-is-to-die-young", name: "The Cowboy's Prayer is to Die Young", value: "Moreau", line: "On a table in an unmarked building just north of Taco Bomb, West Kalaga.", facts: [{ label: "Where", value: "Moreau, Lummox County" }] },
        ],
      },
    ],
    itemsLabel: "Other magazines, books and comics",
    mapLinks: [
      { pin: "confirmed:jasons-place", label: "Jason's place" },
      { pin: "confirmed:starlet-motel", label: "Starlet Motel" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
      { pin: "confirmed:la-perle", label: "La Perle" },
      { pin: "confirmed:jack-of-hearts", label: "Jack of Hearts" },
      { pin: "confirmed:belville", label: "Belville" },
    ],
    related: [
      { href: "/collectibles/book-swaps", label: "Book Swaps" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
      { href: "/properties/jasons-place", label: "Jason's place" },
      { href: "/collectibles/waink-locations", label: "WAiNK locations" },
      { href: "/collectibles/card-sets", label: "Card sets" },
    ],
    faqs: [
      {
        question: "How many magazines are in GTA 6?",
        answer: "27 magazines, books and comics. With the 7 Book Swaps that's 34, and you need 30 for 100%.",
        sources: magazineSources,
      },
      {
        question: "Are GTA 6 magazines missable?",
        answer: "Some spots are. Read everything in Jason's house during Chapter 1, at the Starlet Motel during Chapter 2 and in the Bayside apartment during Chapter 3. Most titles also have other copies.",
        sources: magazineSources,
      },
      {
        question: "Where do you track magazines in GTA 6?",
        answer: "Progress > Collections > Exploration > Magazines, Books & Comics. It shows the count but not which ones you've read.",
        sources: magazineSources,
      },
    ],
    sources: magazineSources,
  },
  {
    slug: "unique-races",
    title: "Unique races",
    heading: "All 40 unique races",
    metaTitle: "GTA 6 Race Locations – All 40 Unique Races",
    metaDescription:
      "All 40 GTA 6 unique races: Hit 'N Run VC, Animal Crackers, Gellhorn Raceway, Boone Speedway, Ambrosia Raceway and the Thrillbilly Mud Club. How to unlock each. Unofficial.",
    image: "/images/official/frames/track-racing.webp",
    line: "40 races. Win 20 for the trophy, 30 for 100%.",
    intro:
      "There are 40 unique races in 6 groups. Win 20 different races for Earn Cash, Not Kudos and any 30 for 100%. Each spot has 2 or more races, and winning one opens the next.",
    quick: [
      { label: "Races", value: "40" },
      { label: "Trophy", value: "Win 20" },
      { label: "For 100%", value: "Win any 30" },
      { label: "Find them", value: "Map > Activities > Racing" },
      { label: "Track them", value: "Progress > Activities > Racing" },
    ],
    tips: [
      { label: "Cost", value: "Entry fee plus car rental, but a win pays more" },
      { label: "On the map", value: "A blue icon shows when you're within about 100 meters" },
      { label: "Not the same", value: "Race Challenges are a separate list of 13" },
    ],
    groups: [
      {
        heading: "Hit 'N Run VC street races (9)",
        itemPages: true,
        items: [
          { slug: "hit-n-run-salton", name: "Hit 'N Run VC – Salton", value: "3 races", line: "Vice City street races. They open in Chapter 3 after Dealer's Choice, through the Join a Street Race job.", facts: [{ label: "Where", value: "Salton, Vice City" }, { label: "Unlock", value: "Chapter 3, after Dealer's Choice" }], pin: "confirmed:salton" },
          { slug: "hit-n-run-la-perle", name: "Hit 'N Run VC – La Perle", value: "2 races", line: "More Hit 'N Run VC street races, in La Perle.", facts: [{ label: "Where", value: "La Perle, Vice City" }], pin: "confirmed:la-perle" },
          { slug: "hit-n-run-ocean-beach", name: "Hit 'N Run VC – Ocean Beach", value: "2 races", line: "More Hit 'N Run VC street races, in Ocean Beach.", facts: [{ label: "Where", value: "Ocean Beach, Vice Beach" }], pin: "confirmed:ocean-beach" },
          { slug: "hit-n-run-gloriana-key", name: "Hit 'N Run VC – Gloriana Key", value: "2 races", line: "More Hit 'N Run VC street races, on Gloriana Key.", facts: [{ label: "Where", value: "Gloriana Key, Vice City" }] },
        ],
      },
      {
        heading: "Animal Crackers (8)",
        itemPages: true,
        items: [
          { slug: "animal-crackers-grayson", name: "Animal Crackers – Grayson", value: "2 races", line: "Countryside races in Grayson, Lummox County. Found by exploring.", facts: [{ label: "Where", value: "Grayson, Lummox County" }] },
          { slug: "animal-crackers-redshaws", name: "Animal Crackers – Redshaw's", value: "2 races", line: "Animal Crackers races at Redshaw's.", facts: [{ label: "Where", value: "Redshaw's" }] },
          { slug: "animal-crackers-ranchers", name: "Animal Crackers – Ranchers", value: "2 races", line: "Animal Crackers races at Ranchers.", facts: [{ label: "Where", value: "Ranchers" }] },
          { slug: "animal-crackers-big-pine", name: "Animal Crackers – Big Pine", value: "2 races", line: "Animal Crackers races at Big Pine.", facts: [{ label: "Where", value: "Big Pine" }] },
        ],
      },
      {
        heading: "Tracks (24)",
        itemPages: true,
        items: [
          { slug: "gellhorn-international-raceway", name: "Gellhorn International Raceway", value: "11 races", line: "South of Port Gellhorn. Play the Introduction first, then the 5-race Keep it PG series to open the rest.", facts: [{ label: "Where", value: "South of Port Gellhorn, Kelly County" }, { label: "Unlock", value: "Gellhorn Raceway – Introduction" }], pin: "confirmed:port-gellhorn" },
          { slug: "thrillbilly-mud-club", name: "Thrillbilly Mud Club", value: "8 races", line: "6 dirt track and 2 oval races in North Kelly County. Billy's Thrillbillies job brings you here in Chapter 2.", facts: [{ label: "Where", value: "North Kelly County" }, { label: "Unlock", value: "Chapter 2, Thrillbillies" }] },
          { slug: "boone-speedway", name: "Boone Speedway", value: "2 races", line: "Two elimination races in the southwest corner of Hamlet.", facts: [{ label: "Where", value: "Southwest Hamlet" }], pin: "confirmed:hamlet" },
          { slug: "ambrosia-raceway", name: "Ambrosia Raceway", value: "2 races", line: "Two demolition races in the north of Ambrosia. It shows on the map when you get close.", facts: [{ label: "Where", value: "North Ambrosia, Kelly County" }], pin: "confirmed:ambrosia" },
        ],
      },
    ],
    itemsLabel: "Other race spots",
    mapLinks: [
      { pin: "confirmed:salton", label: "Salton" },
      { pin: "confirmed:la-perle", label: "La Perle" },
      { pin: "confirmed:ocean-beach", label: "Ocean Beach" },
      { pin: "confirmed:port-gellhorn", label: "Port Gellhorn" },
      { pin: "confirmed:hamlet", label: "Hamlet" },
      { pin: "confirmed:ambrosia", label: "Ambrosia" },
    ],
    related: [
      { href: "/guides/street-races", label: "How to unlock street races" },
      { href: "/collectibles/race-challenges", label: "Race challenges" },
      { href: "/activities/street-races", label: "Street races" },
      { href: "/activities/track-racing", label: "Track racing" },
      { href: "/trophies/earn-cash-not-kudos", label: "Earn Cash, Not Kudos" },
      { href: "/missions/thrillbillies", label: "Thrillbillies" },
      { href: "/missions/dealers-choice", label: "Dealer's Choice" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
    ],
    faqs: [
      {
        question: "How many races are in GTA 6?",
        answer: "40 unique races in 6 groups: Hit 'N Run VC (9), Animal Crackers (8), Gellhorn International Raceway (11), Thrillbilly Mud Club (8), Boone Speedway (2) and Ambrosia Raceway (2).",
        sources: raceSources,
      },
      {
        question: "How many races do you need to win in GTA 6?",
        answer: "Win 20 different races for Earn Cash, Not Kudos, and any 30 of the 40 for 100%.",
        sources: raceSources,
      },
      {
        question: "How do you unlock the Gellhorn Raceway races?",
        answer: "Play Gellhorn Raceway – Introduction, then the 5-race Keep it PG amateur series. Placing in those opens more races.",
        sources: raceSources,
      },
      {
        question: "Do Race Challenges count as unique races?",
        answer: "No. The 13 Race Challenges are a separate list with their own medals.",
        sources: raceSources,
      },
    ],
    sources: raceSources,
  },
];

export function findCollectibleGuide(slug: string) {
  return collectibleGuides.find((guide) => guide.slug === slug);
}

export function collectibleItemPages() {
  return collectibleGuides.flatMap((guide) =>
    (guide.groups ?? [])
      .filter((group) => group.itemPages)
      .flatMap((group) => group.items.map((item) => ({ guide, item })))
  );
}

export function findCollectibleItem(guideSlug: string, itemSlug: string) {
  return collectibleItemPages().find(
    (entry) => entry.guide.slug === guideSlug && entry.item.slug === itemSlug
  );
}
