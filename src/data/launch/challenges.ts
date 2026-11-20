/**
 * The 80 in-game Challenges (Progress > Challenges), content batch 3.
 * Fact check: /workspace/launch-prep/content-batch-3-factcheck.md
 * Names and goals match PowerPyx and Insider Gaming line by line. Where the
 * two differ (Throttled: minutes vs miles) the goal leaves the unit out.
 */
import type { FaqItem } from "@/components/intent/FaqSection";
import { challengeSources, type Batch3Source } from "./batch3-sources";

export type ChallengeCategory = {
  slug: string;
  name: string;
  /** One short plain line for the category card. */
  line: string;
};

export type Challenge = {
  slug: string;
  name: string;
  category: string;
  /** The goal, in one plain sentence. */
  goal: string;
  /** Internal page link that helps, when there is one. */
  link?: { href: string; label: string };
};

export const challengeCategories: ChallengeCategory[] = [
  { slug: "combat", name: "Combat", line: "Kills, headshots, and explosions." },
  { slug: "criminal", name: "Criminal", line: "Muggings, stick-ups, and car theft." },
  { slug: "exploration", name: "Exploration", line: "Scans, climbs, wrecks, and road trips." },
  { slug: "fitness", name: "Fitness", line: "Gym, running, cycling, and swimming." },
  { slug: "shopping", name: "Shopping", line: "Spend money in shops and mod shops." },
  { slug: "sports", name: "Sports", line: "Basketball, golf, and pool." },
  { slug: "survival", name: "Survival", line: "Fishing, hunting, and shooting ranges." },
  { slug: "vehicle", name: "Vehicle", line: "Speed, jumps, races, and trains." },
];

type Row = [name: string, goal: string, link?: { href: string; label: string }];

const rows: Record<string, Row[]> = {
  combat: [
    ["Speed Kills", "Kill 3 enemies in under 30 seconds."],
    ["Melee Combat", "Kill or knock out 5 enemies in a row with melee weapons without dying.", { href: "/where-to-find/melee-and-explosives", label: "Melee weapons" }],
    ["Explosive Combat", "Kill or injure 3 enemies with one explosive."],
    ["Headshots", "Kill 4 enemies with headshots in one use of Combat Focus."],
    ["Drive-Bys", "Kill 5 enemies from your vehicle in under 1 minute without getting out."],
    ["Stealth Sniping", "Kill 7 enemies who haven't spotted you with a scoped sniper rifle, without dying or getting arrested.", { href: "/weapons", label: "Sniper rifles" }],
    ["Incendiary", "Kill or injure 5 enemies with fire in under 15 seconds."],
    ["Revolver Headshots", "Kill 6 enemies with revolver headshots without reloading or switching weapons."],
    ["Long-Range Sniping", "Kill 3 enemies in under 10 seconds with a scoped sniper rifle from 300 feet away."],
    ["High Explosive", "Kill or injure 8 enemies with explosives in under 20 seconds without taking damage."],
  ],
  criminal: [
    ["Mugging", "Rob 5 people on the street."],
    ["Stick Ups", "Rob 3 stores in one day without dying or getting arrested."],
    ["Carjacking", "Carjack 3 vehicles and take them to a Pay 'n' Spray in one day without dying or getting arrested.", { href: "/where-to-find/pay-n-spray", label: "Pay 'n' Spray locations" }],
    ["Mugging Spree", "Steal $500 from people on the street in one day without dying or getting arrested."],
    ["Cop Car Theft", "Keep a wanted level for 5 minutes in a stolen police vehicle."],
    ["Cop Weapon Theft", "Take a weapon from the trunk of 5 different police vehicles without dying or getting arrested."],
    ["Stick Up Spree", "Rob 2 stores in all 5 counties in under 20 minutes without dying or getting arrested."],
    ["Cop Tow", "Tow a police vehicle with someone inside for 1 mile without stopping."],
    ["Carjacking Spree", "Register or respray stolen vehicles from 10 different makers at a Pay 'n' Spray in under 30 minutes without dying or getting arrested.", { href: "/manufacturers", label: "Manufacturers" }],
    ["Carjacking Pro", "Earn $100,000 selling stolen vehicles to fences or Pay 'n' Spray in one day without dying or getting arrested.", { href: "/where-to-find/fences", label: "Fences" }],
  ],
  exploration: [
    ["WAiNK Locations", "Scan any 4 landmarks, curiosities, or sculptures with WAiNK.", { href: "/phone/waink", label: "WAiNK" }],
    ["Skyscrapers", "Climb to the top of the 5 tallest skyscrapers in Vice-Dale County."],
    ["Collectible Cards", "Find 3 collectible cards in each of the 5 counties.", { href: "/collectibles/card-sets", label: "Card sets" }],
    ["Encyclopedia", "Discover 100 animals, vehicles, and weapons."],
    ["Underwater Discoveries", "Find and explore any 25 unusual sights on the ocean floor."],
    ["Rail Tour", "Ride a train for 1 mile in each of the 5 counties in one day without skipping."],
    ["Underwater Treasures", "Find 85 underwater treasures.", { href: "/activities/treasure-diving", label: "Treasure diving" }],
    ["Black Hole Wrecks", "Find all 11 Black Hole wrecks."],
    ["Road Trip", "Drive to every city and town in Leonida in one day. Only get out to refuel."],
    ["Helipad Flyovers", "Fly over all 41 Vice City and Vice Beach helipads at 100 feet or lower in under 10 minutes."],
  ],
  fitness: [
    ["Gym Member", "Join any gym.", { href: "/activities/gym-workouts", label: "Gym workouts" }],
    ["Foot Travel", "Travel 5 miles on foot in one day."],
    ["Pro Cyclist", "Cycle 15 miles in one day."],
    ["Pro Swimmer", "Swim 3 miles in one day."],
    ["Balanced Workout", "Work out on every type of gym equipment in one day."],
    ["Strength Regime", "Keep Jason and Lucia both at Strength Level 4 for 5 days in a row."],
    ["Cardio Regime", "Keep Jason and Lucia both at Cardio Level 4 for 5 days in a row."],
    ["Waning Sands Run", "Run from the gate of The Tip pier to Waning Sands in under 13 minutes without taking damage."],
    ["Tequesta Swim", "Swim from Tequesta Retreat to Starfish Island in under 15 minutes."],
    ["Southwind Cycle", "Bike from Williams Guest House in Grayson to Chicky's Tiki Bar in Southwind in under 22 minutes without falling off."],
  ],
  shopping: [
    ["Vehicle Modder", "Make 5 changes to your vehicle at a mod shop.", { href: "/where-to-find/mod-shops", label: "Mod shops" }],
    ["Grocery Shopper", "Spend over $250 at convenience or liquor stores in one day."],
    ["Well Armed", "Buy 3 sidearms and 3 longarms at Ammu-Nation.", { href: "/ammu-nation-locations", label: "Ammu-Nation locations" }],
    ["Well Groomed", "Spend over $1,000 at barbers, hairdressers, or salons.", { href: "/where-to-find/hair-salons", label: "Salons" }],
    ["Stylishly Armed", "Buy looks upgrades for 5 sidearms and 5 longarms at Ammu-Nation."],
    ["Well Dressed", "Spend over $5,000 on clothes.", { href: "/where-to-find/clothing-stores", label: "Clothing stores" }],
    ["Custom Ride", "Spend over $20,000 in one mod shop visit."],
    ["Heavily Armed", "Spend over $50,000 at Ammu-Nation."],
    ["Serious Modder", "Spend over $125,000 at mod shops."],
    ["Nest Egg", "Have $1,500,000 in your BuckMe checking account.", { href: "/phone/banking-app", label: "BuckMe" }],
  ],
  sports: [
    ["Basketball Rookie", "Score at 3 different hoops in one day.", { href: "/activities/basketball", label: "Basketball" }],
    ["Golf Rookie", "Play 18 holes at King Gator or Frontier Adventure Golf in under 30 minutes, at 3 under par or better.", { href: "/collectibles/golf-courses", label: "Golf courses" }],
    ["Basketball Streak", "Make 10 shots in a row in under 2 minutes."],
    ["Pool Streak", "Win a game of pool at 3 different places in one day without losing or quitting."],
    ["Basketball Tour", "Score a basket in every county."],
    ["Golf Pro", "Play 18 holes at both King Gator and Frontier Adventure Golf in one day, at par or better.", { href: "/collectibles/golf-courses", label: "Golf courses" }],
    ["Triple Bank", "Bounce the cue ball off 3 rails before you pot a ball."],
    ["Basketball Pro", "Score at all 100 hoops in Leonida."],
    ["8-Ball Break", "Win a game of pool by sinking the 8-ball on the break."],
    ["Double Hole In One", "Get two holes in one in a row in one game at King Gator or Frontier Adventure Golf."],
  ],
  survival: [
    ["Alligator Kills", "Kill 3 wild alligators."],
    ["Big Fish", "Catch a fish of 20 pounds or more.", { href: "/activities/fishing", label: "Fishing" }],
    ["Marksman", "Earn a medal at both shooting ranges in one day.", { href: "/shooting-ranges", label: "Shooting ranges" }],
    ["Catch of the Day", "Catch 3 fish with each type of lure in one day."],
    ["Zoologist", "Study 20 different animal species.", { href: "/animals", label: "Animals" }],
    ["Angler", "Catch 4 different kinds of fish in under 6 minutes."],
    ["Pro Marksman", "Win gold in the Master challenge at 3 different shooting range events in a row without failing or quitting.", { href: "/shooting-ranges", label: "Shooting ranges" }],
    ["Hunting Spree", "Kill a boar, a rattlesnake, and a panther in under 15 minutes without getting hurt by enemies or animals.", { href: "/activities/hunting", label: "Hunting" }],
    ["Pro Angler", "Catch every kind of fish."],
    ["Legendary Hunter", "Kill all 8 unique animals."],
  ],
  vehicle: [
    ["Vehicle Discovery", "Examine or discover 6 different vehicles.", { href: "/vehicles", label: "Vehicles" }],
    ["Wheelie", "Do a wheelie for a quarter of a mile."],
    ["Winning Streak", "Win 3 races, one each in a muscle car, a sports car, and a supercar.", { href: "/fastest-cars", label: "Fastest cars" }],
    ["Throttled", "Keep a motor vehicle above 100 mph for a long stretch without slowing down."],
    ["Drawbridge Jump", "Jump a vehicle more than 100 feet over a drawbridge 3 times without getting out."],
    ["Top Speed", "Hit 175 mph in a car, truck, or on a motorcycle.", { href: "/fastest-cars", label: "Fastest cars" }],
    ["Train Landing", "Land a plane on a moving train without wrecking it."],
    ["Oceanarium Jump", "Jump from an aircraft at half a mile up or higher and parachute into the Vice City Oceanarium orca or dolphin tank."],
    ["Rally Winner", "Win 3 races in a row in one day at Thrillbilly Mud Club, Gellhorn International Raceway, and Boone Speedway without quitting or restarting.", { href: "/collectibles/race-challenges", label: "Race challenges" }],
    ["Train Jump", "Jump a motorcycle 75 feet or more onto a moving train twice in 20 minutes."],
  ],
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const challenges: Challenge[] = challengeCategories.flatMap((category) =>
  (rows[category.slug] ?? []).map(([name, goal, link]) => ({
    slug: slugify(name),
    name,
    category: category.slug,
    goal,
    link,
  }))
);

export const challengeTrackId = (slug: string) => `challenge:${slug}`;

export function findChallenge(slug: string) {
  return challenges.find((challenge) => challenge.slug === slug);
}

export function categoryOf(challenge: Challenge) {
  return challengeCategories.find((category) => category.slug === challenge.category);
}

export const challengeQuick = [
  { label: "Total", value: "80" },
  { label: "Trophy", value: "One Last Thing (50)" },
  { label: "For 100%", value: "Any 70" },
  { label: "Track them", value: "Progress > Challenges" },
];

export const challengeFaqs: FaqItem[] = [
  {
    question: "How many challenges are in GTA 6?",
    answer: "80, in 8 groups of 10: Combat, Criminal, Exploration, Fitness, Shopping, Sports, Survival, and Vehicle.",
  },
  {
    question: "How many challenges do you need for One Last Thing in GTA 6?",
    answer: "Any 50. For 100% completion you need any 70 of the 80, so you can skip the 10 hardest.",
  },
  {
    question: "Where do you see your challenges in GTA 6?",
    answer: "Open the map, then Progress > Challenges. Finished ones show a check mark. All 80 are open from the start.",
  },
];

export const challengeDataSources: Batch3Source[] = challengeSources;

if (challenges.length !== 80) {
  throw new Error(`Expected 80 challenges, found ${challenges.length}`);
}
if (new Set(challenges.map((challenge) => challenge.slug)).size !== challenges.length) {
  throw new Error("Duplicate challenge slug");
}
