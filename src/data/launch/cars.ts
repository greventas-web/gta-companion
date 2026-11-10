import type { FastestCarEntry, LaunchSection, LaunchTopic } from "./types";

export const fastestCarsSection: LaunchSection = {
  id: "fastest-cars",
  path: "/fastest-cars",
  navLabel: "Fastest Cars",
  title: "Fastest Cars",
  seoTitle: "Fastest Cars in GTA 6",
  seoDescription:
    "Fastest cars in GTA 6. Top speeds are to be confirmed. This page does not invent a ranking. Unofficial fan site.",
  heroDescription:
    "A top-speed list will be filled in after launch, using figures that can be checked. No car is ranked here yet.",
};

export const fastestCarTopics: LaunchTopic[] = [
  {
    id: "top-speed",
    title: "Top speed list",
    status: "coming-at-launch",
    summary:
      "Speeds will be added after they can be checked in the game. Rockstar has not published a fastest-cars list.",
  },
  {
    id: "classes",
    title: "Classes",
    status: "to-be-confirmed",
    summary:
      "Sports, muscle, and other classes will be grouped here once the in-game classes are confirmed.",
  },
];

export const fastestCars: FastestCarEntry[] = [];
