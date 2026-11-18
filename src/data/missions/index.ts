import type { Mission, MissionType } from "@/types/mission";

/**
 * Confirmed Grand Theft Auto VI missions.
 *
 * Add a row the day a job is confirmed. Copy an object into `missions`:
 *   slug, name, type ("story" | "side" | "edition"), region, summary, sources
 * Optional: giver, character, characterSlug, regionSlug, startArea, place,
 *   edition, mapPinId, mapNote, rewards, spoiler
 * `summary` is the public line (name, giver, region, place). Put plot and
 * stated rewards in `spoiler` and `rewards` so the page can hide them.
 * `mapPinId` is the id the map already uses, such as
 * "confirmed:southside-gang-compound-raid". The page links to /map?pin=…
 * Every fact needs a clickable `sources` entry. Keep public wording unofficial.
 */

/**
 * Story missions in the order the in-game Story Recap lists them, as
 * published after the rolling launch on November 18, 2026 (US time). Names
 * and order only: no plot in public fields. A name that is itself a story
 * spoiler is hidden and kept in `spoiler`.
 */
const storyMissions: Mission[] = [
  {
    "slug": "prologue",
    "name": "Prologue",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 1,
    "summary": "Story mission 1 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "gone-fishing",
    "name": "Gone Fishing",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 2,
    "summary": "Story mission 2 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "gear-up",
    "name": "Gear Up",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 3,
    "summary": "Story mission 3 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "just-a-scratch",
    "name": "Just A Scratch",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 4,
    "summary": "Story mission 4 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "lab-fees",
    "name": "Lab Fees",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 5,
    "summary": "Story mission 5 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "unwanted-attention",
    "name": "Unwanted Attention",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 6,
    "summary": "Story mission 6 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "pipework",
    "name": "Pipework",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 7,
    "summary": "Story mission 7 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "hey-arnold",
    "name": "Hey Arnold!",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 8,
    "summary": "Story mission 8 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "island-dreams",
    "name": "Island Dreams",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 9,
    "summary": "Story mission 9 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "feng-shui",
    "name": "Feng Shui",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 10,
    "summary": "Story mission 10 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "coming-home",
    "name": "Coming Home",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 11,
    "summary": "Story mission 11 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "buck-me",
    "name": "Buck Me",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 12,
    "summary": "Story mission 12 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "clean-up-after-donnie",
    "name": "Clean Up After Donnie",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 13,
    "summary": "Story mission 13 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "down-to-earth",
    "name": "Down To Earth",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 14,
    "summary": "Story mission 14 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "clear-skies",
    "name": "Clear Skies",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 15,
    "summary": "Story mission 15 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "day-release",
    "name": "Day Release",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 16,
    "summary": "Story mission 16 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "swamped",
    "name": "Swamped",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 17,
    "summary": "Story mission 17 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "chapter-1-mission-18",
    "name": "Chapter 1, mission 18 (name hidden)",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 18,
    "summary": "Story mission 18 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise",
    "spoiler": "Press Start lists this mission as “Don Gone”. PC Gamer keeps the name hidden as a story spoiler."
  },
  {
    "slug": "recalibration",
    "name": "Recalibration",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 19,
    "summary": "Story mission 19 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "tourist-trap",
    "name": "Tourist Trap",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 20,
    "summary": "Story mission 20 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "home-sweet-home",
    "name": "Home Sweet Home",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 21,
    "summary": "Story mission 21 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "discharge-time",
    "name": "Discharge Time",
    "type": "story",
    "region": "Leonida",
    "chapter": 1,
    "order": 22,
    "summary": "Story mission 22 of Chapter 1 (Just Like Paradise), in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/"
      },
      {
        "label": "PowerPyx",
        "href": "https://www.powerpyx.com/gta-6-full-walkthrough-all-missions/"
      }
    ],
    "chapterName": "Just Like Paradise"
  },
  {
    "slug": "whats-in-the-bag",
    "name": "What’s In The Bag?",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 1,
    "summary": "Story mission 1 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "ambulance-chaser",
    "name": "Ambulance Chaser",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 2,
    "summary": "Story mission 2 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "just-moved-in",
    "name": "Just Moved In",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 3,
    "summary": "Story mission 3 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "girls-trip",
    "name": "Girls’ Trip",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 4,
    "summary": "Story mission 4 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "moses",
    "name": "Moses",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 5,
    "summary": "Story mission 5 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "daily-driver",
    "name": "Daily Driver",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 6,
    "summary": "Story mission 6 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "slam-dunk",
    "name": "Slam Dunk",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 7,
    "summary": "Story mission 7 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "breakfast-run",
    "name": "Breakfast Run",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 8,
    "summary": "Story mission 8 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "coffee-break",
    "name": "Coffee Break",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 9,
    "summary": "Story mission 9 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "afternoon-delight",
    "name": "Afternoon Delight",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 10,
    "summary": "Story mission 10 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "thrillbillies",
    "name": "Thrillbillies",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 11,
    "summary": "Story mission 11 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      }
    ]
  },
  {
    "slug": "twist-wrist-smash-grab",
    "name": "Twist Wrist, Smash, Grab",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 12,
    "summary": "Story mission 12 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      }
    ]
  },
  {
    "slug": "checking-out",
    "name": "Checking Out",
    "type": "story",
    "region": "Leonida",
    "chapter": 2,
    "order": 13,
    "summary": "Story mission 13 of Chapter 2, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "welcome-to-vice-city",
    "name": "Welcome To Vice City",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 1,
    "summary": "Story mission 1 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "dealers-choice",
    "name": "Dealer’s Choice",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 2,
    "summary": "Story mission 2 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "meet-the-heders",
    "name": "Meet The Heders",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 3,
    "summary": "Story mission 3 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "dubious-provenance",
    "name": "Dubious Provenance",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 4,
    "summary": "Story mission 4 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "mami-knows-best",
    "name": "Mami Knows Best",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 5,
    "summary": "Story mission 5 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "south-leonida-real-estate",
    "name": "South Leonida Real Estate",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 6,
    "summary": "Story mission 6 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "tyrone",
    "name": "Tyrone",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 7,
    "summary": "Story mission 7 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "here-kitty-kitty",
    "name": "Here, Kitty Kitty",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 8,
    "summary": "Story mission 8 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "kitter-litter-labs",
    "name": "Kitter Litter Labs",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 9,
    "summary": "Story mission 9 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      }
    ]
  },
  {
    "slug": "car-service",
    "name": "Car Service",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 10,
    "summary": "Story mission 10 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "top-billing",
    "name": "Top Billing",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 11,
    "summary": "Story mission 11 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "boobie-time",
    "name": "Boobie Time",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 12,
    "summary": "Story mission 12 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "first-impressions",
    "name": "First Impressions",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 13,
    "summary": "Story mission 13 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "crosstown-traffic",
    "name": "Crosstown Traffic",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 14,
    "summary": "Story mission 14 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "credit-check",
    "name": "Credit Check",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 15,
    "summary": "Story mission 15 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "steal-the-zorrusso-for-randy",
    "name": "Steal The Zorrusso For Randy",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 16,
    "summary": "Story mission 16 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      }
    ]
  },
  {
    "slug": "sinfrontera-national-bank",
    "name": "Sinfrontera National Bank",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 17,
    "summary": "Story mission 17 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "security-expert",
    "name": "Security Expert",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 18,
    "summary": "Story mission 18 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "ride-or-die",
    "name": "Ride Or Die",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 19,
    "summary": "Story mission 19 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "company-property",
    "name": "Company Property",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 20,
    "summary": "Story mission 20 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "the-missing-link",
    "name": "The Missing Link",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 21,
    "summary": "Story mission 21 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "safe-word",
    "name": "Safe Word",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 22,
    "summary": "Story mission 22 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "cooties",
    "name": "Cooties",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 23,
    "summary": "Story mission 23 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "bricked-up",
    "name": "Bricked Up",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 24,
    "summary": "Story mission 24 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "hidden-charges",
    "name": "Hidden Charges",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 25,
    "summary": "Story mission 25 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  },
  {
    "slug": "the-cartel-heist",
    "name": "The Cartel Heist",
    "type": "story",
    "region": "Leonida",
    "chapter": 3,
    "order": 26,
    "summary": "Story mission 26 of Chapter 3, in the order the in-game Story Recap shows. Missions can be played somewhat out of this order.",
    "sources": [
      {
        "label": "Press Start",
        "href": "https://press-start.com.au/news/2026/11/18/heres-how-many-story-missions-are-in-grand-theft-auto-6/"
      },
      {
        "label": "GTABase",
        "href": "https://www.gtabase.com/missions/gta-6/"
      }
    ]
  }
];

export const missions: Mission[] = [
  ...storyMissions,
  {
    slug: "southside-gang-compound-raid",
    name: "Southside Vice City gang compound raid",
    type: "edition",
    region: "Vice City",
    regionSlug: "vice-city",
    startArea: "Southside",
    place: "PTT Youngin$ Illegal Goods Store",
    edition: "Ultimate Edition",
    mapPinId: "confirmed:southside-gang-compound-raid",
    mapNote:
      "The map pin marks the PTT Youngin$ Illegal Goods Store, the storefront Rockstar ties to this benefit. Rockstar has not published the compound’s full footprint, so the pin is approximate.",
    summary:
      "Ultimate Edition hook in Southside, Vice City. Rockstar titles the benefit Gang Compound and places it at the PTT Youngin$ Illegal Goods Store. Rockstar has not published a separate mission title, a giver, or a story list.",
    rewards: "Special items and distinct contraband.",
    spoiler:
      "Rockstar: “Raid the compound of one of Southside Vice City’s loudest and most socially active gangs and escape safely to score some special items and distinct contraband.”",
    sources: [
      {
        label: "Rockstar Games, Ultimate Edition",
        href: "https://www.rockstargames.com/VI/ultimate-edition",
      },
      {
        label: "Rockstar Games, Editions",
        href: "https://www.rockstargames.com/VI/editions",
      },
    ],
  },
];

export const MISSION_TYPE_LABEL: Record<MissionType, string> = {
  story: "Story",
  side: "Side",
  edition: "Edition hook",
};

export function findMission(slug: string) {
  return missions.find((mission) => mission.slug === slug);
}

export const storyChapters = Array.from(
  new Set(storyMissions.map((mission) => mission.chapter ?? 0))
).map((chapter) => {
  const rows = storyMissions
    .filter((mission) => mission.chapter === chapter)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const sources = rows
    .flatMap((mission) => mission.sources)
    .filter(
      (source, index, all) =>
        all.findIndex((other) => other.href === source.href) === index
    );
  return { chapter, name: rows[0]?.chapterName, missions: rows, sources };
});

export const otherMissions = missions.filter((mission) => mission.type !== "story");

export const STORY_LIST_NOTE =
  "Press Start counts 93 story missions across five chapters in the in-game Story Recap, and PC Gamer counts 91. Chapters 1 to 3 are listed here; Chapters 4 and 5 are left out for now because their names give away late-story events.";
