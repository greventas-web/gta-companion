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
