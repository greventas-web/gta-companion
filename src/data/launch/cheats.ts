import type { CheatEntry, LaunchSection, LaunchTopic } from "./types";

export const cheatsSection: LaunchSection = {
  id: "cheats",
  path: "/cheats",
  navLabel: "Cheats",
  title: "Cheats",
  seoTitle: "GTA 6 Cheats",
  seoDescription:
    "GTA 6 cheats. Codes are to be confirmed. This page does not list button combos or codes until they are confirmed. Unofficial fan site.",
  heroDescription:
    "Cheat codes will be listed here only after they are confirmed. No code, button combo, or phone number is published on this page.",
};

export const cheatTopics: LaunchTopic[] = [
  {
    id: "codes",
    title: "Cheat codes",
    status: "to-be-confirmed",
    summary:
      "Rockstar has not published GTA 6 cheat codes. The list stays empty until a code is confirmed.",
  },
  {
    id: "platforms",
    title: "PlayStation, Xbox, and PC",
    status: "coming-at-launch",
    summary:
      "If codes differ by platform, each confirmed code will name the platform. A PC release date has not been announced.",
  },
];

export const cheatEntries: CheatEntry[] = [];
