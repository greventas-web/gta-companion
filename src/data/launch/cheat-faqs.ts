import { cheatSources } from "./batch1-sources";

/** Short "how cheats work" rows. */
export const cheatBasics = [
  { label: "When", value: "After the story" },
  { label: "Enter a code", value: "Phone, hold L1/LB, press R1/RB, then the code" },
  { label: "Catch", value: "No trophies or saving that session" },
] as const;

export const cheatFaqs = [
  {
    question: "How many cheats are in GTA 6?",
    answer:
      "61: 10 player cheats, 11 combat cheats, 21 vehicle spawn cheats, 3 environment cheats, and 16 screen filter cheats.",
    sources: cheatSources,
  },
  {
    question: "When can you use cheats in GTA 6?",
    answer:
      "Only after you finish the story. Before that the Cheats menu does not appear and codes do nothing. Most cheats also need their own unlock requirement.",
    sources: cheatSources,
  },
  {
    question: "Is there a money cheat in GTA 6?",
    answer:
      "Yes, one: $250,000. It unlocks when you finish the story. Code: Up, Right, Down, Left, Up, Left, Down, Right.",
    sources: cheatSources,
  },
  {
    question: "Is there an infinite ammo cheat in GTA 6?",
    answer:
      "Yes. Infinite Ammo unlocks after 25 silver medals or better at shooting ranges. Code: Down, Up, Right, Down, Left, Left, Up, Down, Down, Down. No Reload needs 25 gold medals.",
    sources: cheatSources,
  },
  {
    question: "Do cheats disable trophies in GTA 6?",
    answer:
      "Yes. Entering a cheat turns off trophies, achievements, and saving for the rest of that play session.",
    sources: cheatSources,
  },
];
