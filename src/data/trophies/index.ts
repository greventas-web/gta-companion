import type { Trophy } from "@/types/trophy";

/**
 * PlayStation trophies and Xbox achievements for Grand Theft Auto VI.
 *
 * The array stays empty until an official list is public. To add a row:
 *   slug, name, description, platform ("PS5" | "Xbox" | "both"), missable, sources
 * Optional: psGrade, xboxGamerscore, tips, tipsSpoiler, mapPinId
 * `description` and `tips` must stay spoiler-safe unless `tipsSpoiler` is true.
 * Do not invent a name, a count, a grade, or a Gamerscore.
 */
/**
 * The 27 non-hidden rows of the 55 in the list published at launch
 * (November 18, 2026, US time). The 28 hidden rows are story spoilers and
 * stay off the site for now. PS grades as the published lists show them.
 */
export const trophies: Trophy[] = [
  {
    "slug": "vice-got-a-price",
    "name": "Vice Got a Price!",
    "description": "Congratulations! You’re a Leonida Legend.",
    "platform": "both",
    "psGrade": "platinum",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "a-long-road",
    "name": "A Long Road",
    "description": "Attain 100% Completion.",
    "platform": "both",
    "psGrade": "gold",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "cunning-stunts",
    "name": "Cunning Stunts",
    "description": "Complete 250 Stunts.",
    "platform": "both",
    "psGrade": "silver",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "master-of-none",
    "name": "Master of None",
    "description": "Try each type of activity once.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "the-shootist",
    "name": "The Shootist",
    "description": "Earn a gold medal in all Shooting Range challenges.",
    "platform": "both",
    "psGrade": "silver",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "top-fun",
    "name": "Top Fun",
    "description": "Win a Top Fun Drone Race at every location.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "earn-cash-not-kudos",
    "name": "Earn Cash, Not Kudos",
    "description": "Win 20 different races.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "baited-my-tackle",
    "name": "Baited My Tackle",
    "description": "Beat Cal in a fishing challenge.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "stick-fiddler",
    "name": "Stick Fiddler",
    "description": "Complete an arcade game.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "strangers-freaks",
    "name": "Strangers & Freaks",
    "description": "Complete 8 mission strands for strangers across the state of Leonida.",
    "platform": "both",
    "psGrade": "silver",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "positive-mental-attitude",
    "name": "Positive Mental Attitude",
    "description": "Meditate at every spot across Leonida.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "dont-touch-my-deck",
    "name": "Don’t Touch My Deck",
    "description": "Complete 3 Collectible Card sets.",
    "platform": "both",
    "psGrade": "silver",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "you-wainker",
    "name": "You WAiNKer!",
    "description": "WAiNK It at 100 locations.",
    "platform": "both",
    "psGrade": "silver",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "one-last-thing",
    "name": "One Last Thing",
    "description": "Complete 50 Challenges.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "hot-together",
    "name": "Hot Together",
    "description": "Lose a 4 star Wanted Level with your partner and escape the heat.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "retail-therapy",
    "name": "Retail Therapy",
    "description": "Rob 3 shops back-to-back with your partner without losing your Wanted Level.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "whip-it-good",
    "name": "Whip It Good",
    "description": "Discover 100 vehicles.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "gunslinger",
    "name": "Gunslinger",
    "description": "Take down 5 enemies in a single use of Combat Focus.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "sneakthief",
    "name": "Sneakthief",
    "description": "Rob a jewelry store without being detected.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "maximum-withdrawal",
    "name": "Maximum Withdrawal",
    "description": "Rob 5 Bank Vaults and escape.",
    "platform": "both",
    "psGrade": "silver",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "a-classic-blitz-play",
    "name": "A Classic Blitz Play",
    "description": "Rob an Armored Truck and escape.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "the-goodtime-state",
    "name": "The Goodtime State",
    "description": "Explore all of Leonida.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "pest-control",
    "name": "Pest Control",
    "description": "Rob an Illegal Operation belonging to each gang.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "dime-on-the-dollar",
    "name": "Dime on the Dollar",
    "description": "Earn $250,000 laundering Marked Bills through your contacts.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "treat-yo-self",
    "name": "Treat Yo Self",
    "description": "Spend $100,000 across all shops.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "little-boxes",
    "name": "Little Boxes",
    "description": "Purchase all garage properties.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  },
  {
    "slug": "on-the-spot",
    "name": "On the Spot",
    "description": "Register 10 vehicles to the Scooter Bros app.",
    "platform": "both",
    "psGrade": "bronze",
    "missable": false,
    "sources": [
      {
        "label": "CULTR",
        "href": "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/"
      },
      {
        "label": "GameSpew",
        "href": "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/"
      },
      {
        "label": "PC Gamer",
        "href": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/"
      }
    ]
  }
];

export const TROPHY_COUNTS = { total: 55, hidden: 28 } as const;

export const TROPHY_LIST_NOTE = {
  checkedOn: "November 18, 2026",
  publishedSources: [
    {
      label: "CULTR",
      href: "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/",
    },
    {
      label: "GameSpew",
      href: "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/",
    },
    {
      label: "PC Gamer",
      href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-achievements-list/",
    },
    {
      label: "Insider Gaming",
      href: "https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/",
    },
  ],
  sources: [
    {
      label: "PlayStation, Grand Theft Auto VI",
      href: "https://www.playstation.com/en-us/games/grand-theft-auto-vi/",
    },
    {
      label: "Rockstar Games",
      href: "https://www.rockstargames.com/VI",
    },
  ],
} as const;

export function findTrophy(slug: string) {
  return trophies.find((trophy) => trophy.slug === slug);
}

export function trophyPlatformLabel(trophy: Trophy) {
  const parts: string[] = [];

  if (trophy.platform === "PS5" || trophy.platform === "both") {
    parts.push(trophy.psGrade ? `PS5 ${trophy.psGrade}` : "PS5");
  }

  if (trophy.platform === "Xbox" || trophy.platform === "both") {
    parts.push(
      trophy.xboxGamerscore != null ? `Xbox ${trophy.xboxGamerscore}G` : "Xbox"
    );
  }

  return parts.join(" · ");
}
