import type { LaunchSection, LaunchTopic } from "./types";

export const guidesSection: LaunchSection = {
  id: "guides",
  path: "/guides",
  navLabel: "Guides",
  title: "GTA 6 Guides",
  seoTitle: "GTA 6 Guides",
  seoDescription:
    "GTA 6 guides for launch day. Walkthroughs and tips are coming at launch and will be added after they can be checked in the game. Unofficial fan site.",
  heroDescription:
    "Walkthroughs, beginner notes, and collectible lists will be written after Grand Theft Auto VI is out. Nothing here is a finished guide yet.",
};

export const guideTopics: LaunchTopic[] = [
  {
    id: "story",
    title: "Story walkthrough",
    status: "coming-at-launch",
    summary:
      "Mission order and story steps will be added after launch. No walkthrough is published yet.",
  },
  {
    id: "beginner",
    title: "Beginner notes",
    status: "coming-at-launch",
    summary:
      "First-hour notes will be added once they can be checked in the game.",
  },
  {
    id: "collectibles",
    title: "Collectibles",
    status: "to-be-confirmed",
    summary:
      "A collectible list will be added only after the locations are confirmed. None are listed yet.",
  },
  {
    id: "combat",
    title: "Combat",
    status: "coming-at-launch",
    summary:
      "Combat notes will be added after launch. No tactics are confirmed here.",
  },
  {
    id: "vehicles",
    title: "Vehicle guides",
    status: "coming-at-launch",
    summary:
      "Vehicle guides will be added after stats can be checked. The vehicle database covers what has already been shown.",
  },
];
