import type { Mission } from "@/types/mission";

/**
 * Content fill: mission giver, start area, start place and cash rewards for
 * Chapters 1 to 3, taken from the quick-facts box on each GTA Vice Guides
 * walkthrough (written from launch-week footage). Facts only, in our own
 * words. Plot stays out: a start point that gives away what happens is left
 * blank. Rewards stay behind the reveal on the mission page.
 */
type MissionFill = Partial<Pick<Mission, "giver" | "startArea" | "place" | "rewards">>;

const fills: Record<string, MissionFill> = {
  prologue: { giver: "Counselor Stephanie Gates" },
  "gone-fishing": {
    giver: "Cal",
    startArea: "Leonida Keys",
    rewards: "$20 from Donnie and $120 from Brian, both left in your mailbox.",
  },
  "gear-up": { giver: "Brian", startArea: "Key Lento", place: "Chuck's Tackle & Shot" },
  "just-a-scratch": { giver: "Cal (through Joey)", startArea: "Leonida Keys", place: "Coastal Auto Care" },
  "lab-fees": { giver: "Brian", place: "Moonstone Boutique" },
  "unwanted-attention": { giver: "Cal" },
  pipework: { giver: "Brian", startArea: "Key Lento" },
  "hey-arnold": { giver: "Brian" },
  "island-dreams": { giver: "Kenton Rees", startArea: "Key Lento", place: "Island Dreams dive shop" },
  "feng-shui": { giver: "Cal", startArea: "Key Lento", place: "Jason's house" },
  "coming-home": { giver: "Lucia", startArea: "Hamlet" },
  "buck-me": { giver: "Lucia", startArea: "Key Lento", rewards: "$100 BuckMe sign-up bonus." },
  "down-to-earth": { giver: "Brian", place: "Brian's Marina" },
  "clear-skies": { giver: "Brian", place: "Brian's bar" },
  "day-release": { giver: "Lucia", place: "The Rusty Anchor" },
  swamped: { giver: "Brian", place: "Rent-A-Rack boat yard" },
  recalibration: { giver: "Lucia", place: "Jason's house" },
  "tourist-trap": { giver: "Kat" },
  "home-sweet-home": { giver: "Jason", place: "Cal's dock" },
  "discharge-time": { giver: "Cal" },
  "ambulance-chaser": { giver: "Jason" },
  "just-moved-in": { giver: "Jason", startArea: "Port Gellhorn", place: "Starlet Motel" },
  "girls-trip": { giver: "Vicki", startArea: "Port Gellhorn" },
  moses: { giver: "Moses Watkins", startArea: "Port Gellhorn", place: "Watkins Auto Parts" },
  "daily-driver": {
    giver: "Moses Watkins",
    startArea: "Port Gellhorn",
    place: "Watkins Auto Parts",
    rewards: "$755 from Moses.",
  },
  "slam-dunk": { giver: "Dunk", place: "Dunk's trailer" },
  "breakfast-run": {
    giver: "Jason",
    place: "Starlet Motel",
    rewards: "The cash from every register you empty.",
  },
  "coffee-break": { giver: "Lucia", place: "Starlet Motel" },
  "afternoon-delight": { giver: "Vicki", startArea: "Port Gellhorn", place: "Delights nightclub" },
  thrillbillies: { giver: "Wyman", place: "Thrillbilly Mud Club" },
  "twist-wrist-smash-grab": {
    giver: "Billy",
    place: "Crossroad Park Mall",
    rewards: "A $2,000 cut, and you keep the Maibatsu Sanchez dirt bike.",
  },
  "checking-out": { startArea: "Port Gellhorn" },
  "welcome-to-vice-city": {
    giver: "Dre'Quan",
    startArea: "Crosstown",
    place: "Jack of Hearts",
    rewards: "An apartment in Bayside (Apartment 201).",
  },
  "dealers-choice": { giver: "Boobie Ike (through Dre'Quan)", startArea: "Crosstown", place: "Jack of Hearts" },
  "dubious-provenance": { giver: "Lucia", startArea: "Bayside" },
  "mami-knows-best": { giver: "Mia Caminos, Lucia's mother", startArea: "Hamlet" },
  "here-kitty-kitty": { giver: "Tyrone", startArea: "La Perle" },
  "car-service": { giver: "Raul (through Brian)", startArea: "Salton", rewards: "$3,000." },
  "top-billing": { giver: "Dre'Quan", startArea: "Crosstown", place: "Jack of Hearts" },
  "boobie-time": { giver: "Boobie Ike", startArea: "Crosstown", place: "Jack of Hearts" },
  "first-impressions": { giver: "Raul", startArea: "Ocean Beach", rewards: "$3,000." },
  "crosstown-traffic": { giver: "Raul", startArea: "Stockyard", place: "Courtyard Bar", rewards: "$3,000." },
  "credit-check": { giver: "Raul" },
  "sinfrontera-national-bank": { giver: "Raul", place: "Sinfrontera National Bank" },
  "security-expert": { giver: "Raul" },
  "ride-or-die": { giver: "Dre'Quan", startArea: "Crosstown", place: "Jack of Hearts" },
  "company-property": { giver: "Raul", place: "Brian's bar" },
  "safe-word": { giver: "Raul" },
  "bricked-up": { giver: "Boobie Ike" },
  "hidden-charges": { giver: "Raul", place: "Raul's planning room" },
  "the-cartel-heist": { giver: "Raul", startArea: "Downtown" },
};

export function withMissionFill(mission: Mission): Mission {
  const fill = fills[mission.slug];
  if (!fill) return mission;
  const source = {
    label: "GTA Vice Guides walkthrough",
    href: `https://www.gtaviceguides.com/missions/${mission.slug}/`,
  };
  return {
    ...fill,
    ...Object.fromEntries(Object.entries(mission).filter(([, value]) => value !== undefined && value !== "")),
    sources: mission.sources.some((s) => s.href === source.href) ? mission.sources : [...mission.sources, source],
  } as Mission;
}

export const missionFillCount = Object.keys(fills).length;
