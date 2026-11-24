/**
 * Public changelog for /updates.
 *
 * Add a day at the top, or an entry on today's day. Newest day first.
 * Every historical entry must describe a change that actually shipped
 * (a commit or a merged pull request). Write a short sentence and link
 * the page it changed. The link label must appear in the sentence.
 *
 * Do not use the word "free". Do not spoil anything past Chapter 3.
 */

export type UpdateLink = {
  label: string;
  href: string;
};

export type UpdateEntry = {
  text: string;
  links?: readonly UpdateLink[];
};

export type UpdateDay = {
  /** YYYY-MM-DD, newest first. */
  date: string;
  entries: readonly UpdateEntry[];
};

export type ComingSoonItem = {
  id: string;
  title: string;
  /** Short status. These features are not available yet. */
  status: string;
  body: string;
  /** Optional price line, already formatted. */
  price?: string;
};

export type WhatsNextItem = {
  title: string;
  body: string;
};

export const updateDays: readonly UpdateDay[] = [
  {
    date: "2026-11-24",
    entries: [
      {
        text: "GTA Companion is becoming a platform where players can contribute.",
        links: [{ label: "platform", href: "/updates#coming-soon" }],
      },
      {
        text: "A gameplay still of Uncle Jack's Liquor in Bayside is on the liquor-store page.",
        links: [
          {
            label: "Uncle Jack's Liquor",
            href: "/where-to-find/liquor-stores/uncle-jacks-liquor-bayside",
          },
        ],
      },
    ],
  },
  {
    date: "2026-11-23",
    entries: [
      {
        text: "Gameplay stills and station marks replaced artwork placeholders on animals, the phone, and radio.",
        links: [
          { label: "animals", href: "/animals" },
          { label: "phone", href: "/phone" },
          { label: "radio", href: "/radio" },
        ],
      },
      {
        text: "The Scorpio Nipper .38 and the Shrewsbury Hobo now use their shop plates.",
        links: [
          { label: "Scorpio Nipper .38", href: "/weapons/scorpio-nipper-38" },
          { label: "Shrewsbury Hobo", href: "/weapons/shrewsbury-hobo" },
        ],
      },
      {
        text: "Weapons, vehicles, and missions now share one catalog layout.",
        links: [
          { label: "Weapons", href: "/weapons" },
          { label: "vehicles", href: "/vehicles" },
          { label: "missions", href: "/missions" },
        ],
      },
      {
        text: "New guides cover Randy's wish list, the Pegassi Infernus, the Halifax statue, and Jason's stash.",
        links: [
          { label: "Randy's wish list", href: "/guides/randys-wish-list" },
          { label: "Pegassi Infernus", href: "/guides/pegassi-infernus" },
          { label: "Halifax statue", href: "/guides/halifax-statue" },
          { label: "Jason's stash", href: "/guides/jasons-stash" },
        ],
      },
      {
        text: "Guides for patch notes, the La Perle garage, the Declasse Vamos, garage codes, Freddie Gibbs' bunker, and the Black Eagle Kalinga. The La Perle garage guide notes the Chapter 3 cutoff.",
        links: [
          { label: "patch notes", href: "/guides/patch-notes" },
          { label: "La Perle garage", href: "/guides/la-perle-garage" },
          { label: "Declasse Vamos", href: "/guides/declasse-vamos" },
          { label: "garage codes", href: "/guides/garage-codes" },
          { label: "Freddie Gibbs' bunker", href: "/guides/freddie-gibbs" },
          { label: "Black Eagle Kalinga", href: "/guides/black-eagle-kalinga" },
        ],
      },
      {
        text: "Gameplay stills for Delights, The Rusty Anchor, Fleeca, and 13 more places.",
        links: [
          { label: "Delights", href: "/businesses/delights" },
          { label: "The Rusty Anchor", href: "/businesses/the-rusty-anchor" },
          { label: "Fleeca", href: "/brands/fleeca" },
        ],
      },
      {
        text: "Guides for the Marbelle Hotel safe, the ghost ship and Cursed Knife, 1010 Murals, and the jet ski dog.",
        links: [
          { label: "Marbelle Hotel safe", href: "/guides/marbelle-hotel" },
          { label: "ghost ship and Cursed Knife", href: "/guides/ghost-ship" },
          { label: "1010 Murals", href: "/guides/1010-murals" },
          { label: "jet ski dog", href: "/guides/jet-ski-dog" },
        ],
      },
      {
        text: "A radio station list, plus guides for the Hyde Island hunt, the Backrooms container, and the Kraken.",
        links: [
          { label: "radio station list", href: "/guides/radio-stations-list" },
          { label: "Hyde Island hunt", href: "/guides/hyde-island" },
          { label: "Backrooms container", href: "/guides/backrooms" },
          { label: "the Kraken", href: "/guides/kraken" },
        ],
      },
    ],
  },
  {
    date: "2026-11-22",
    entries: [
      {
        text: "Guides for melee weapons, equipment, Wyman's classic cars, the Arthur Morgan hat, and the stamina upgrade.",
        links: [
          { label: "melee weapons", href: "/guides/melee-weapons" },
          { label: "equipment", href: "/guides/equipment" },
          { label: "Wyman's classic cars", href: "/guides/wyman-cars" },
          { label: "Arthur Morgan hat", href: "/guides/arthur-morgan-hat" },
          { label: "stamina upgrade", href: "/guides/final-flush" },
        ],
      },
      {
        text: "Guides for safe codes, unique weapons, and early shotguns.",
        links: [
          { label: "safe codes", href: "/guides/safe-codes" },
          { label: "unique weapons", href: "/guides/unique-weapons" },
          { label: "early shotguns", href: "/guides/shotgun" },
        ],
      },
      {
        text: "ZoneX and MisterCapTV are on the partners page. Emilio is no longer listed.",
        links: [{ label: "partners page", href: "/partners" }],
      },
      {
        text: "Gameplay stills for Watkins Auto Parts, the Starlet Motel, Gellhorn Outfitters, several guns, the Pegassi Charred Toros, and the Vapid Shifter.",
        links: [
          { label: "Watkins Auto Parts", href: "/businesses/watkins-auto-parts" },
          { label: "Starlet Motel", href: "/properties/starlet-motel" },
          { label: "Gellhorn Outfitters", href: "/ammu-nation-locations/gellhorn-outfitters" },
          { label: "Pegassi Charred Toros", href: "/vehicles/pegassi-charred-toros" },
          { label: "Vapid Shifter", href: "/vehicles/vapid-shifter" },
        ],
      },
      {
        text: "The map wording, the editions title, the favicon, and sitemap dates were cleaned up.",
        links: [
          { label: "map", href: "/map" },
          { label: "editions", href: "/launch" },
        ],
      },
      {
        text: "Guides for the crab research outpost, the silenced pistol, the Key Lento sniper rifle, missing tourists, motorcycles, robbing an ATM, and armored trucks.",
        links: [
          { label: "crab research outpost", href: "/guides/crab-lab" },
          { label: "silenced pistol", href: "/guides/silenced-pistol" },
          { label: "Key Lento sniper rifle", href: "/guides/sniper-rifle" },
          { label: "missing tourists", href: "/guides/missing-tourists" },
          { label: "motorcycles", href: "/guides/motorcycle" },
          { label: "robbing an ATM", href: "/guides/rob-atm" },
          { label: "armored trucks", href: "/guides/armored-truck" },
        ],
      },
    ],
  },
  {
    date: "2026-11-21",
    entries: [
      {
        text: "The launch page, clothing, the homepage, and news were polished now that the game is out.",
        links: [
          { label: "launch page", href: "/gta-6-launch" },
          { label: "clothing", href: "/clothing" },
          { label: "homepage", href: "/" },
          { label: "news", href: "/news" },
        ],
      },
      {
        text: "Guides for the Fast and Furious car, Dexter's apartment, Easter eggs, robbing a police car, petting animals, car trackers, and the jet ski.",
        links: [
          { label: "Fast and Furious car", href: "/guides/fast-and-furious-car" },
          { label: "Dexter's apartment", href: "/guides/dexter-apartment" },
          { label: "Easter eggs", href: "/guides/easter-eggs" },
          { label: "robbing a police car", href: "/guides/rob-police-car" },
          { label: "petting animals", href: "/guides/pet-animals" },
          { label: "car trackers", href: "/guides/car-trackers" },
          { label: "jet ski", href: "/guides/jet-ski" },
        ],
      },
    ],
  },
  {
    date: "2026-11-20",
    entries: [
      {
        text: "Prices, store details, mission givers, and vehicle stats were filled in across stores, clothing, vehicles, missions, and weapons.",
        links: [
          { label: "stores", href: "/stores" },
          { label: "clothing", href: "/clothing" },
          { label: "vehicles", href: "/vehicles" },
          { label: "missions", href: "/missions" },
          { label: "weapons", href: "/weapons" },
        ],
      },
      {
        text: "Guides for the Mile Zero military base, the tank, the fighter jet, rocket and grenade launchers, and cafes.",
        links: [
          { label: "Mile Zero military base", href: "/guides/military-base" },
          { label: "tank", href: "/guides/tank" },
          { label: "fighter jet", href: "/guides/fighter-jet" },
          { label: "rocket and grenade launchers", href: "/guides/rocket-launcher" },
          { label: "cafes", href: "/where-to-find/cafes" },
        ],
      },
      {
        text: "Artwork for mission cards, challenges, guides, collectibles, properties, and the wanted system. The homepage hero keeps a single Open the map button.",
        links: [
          { label: "mission cards", href: "/missions" },
          { label: "challenges", href: "/challenges" },
          { label: "guides", href: "/guides" },
          { label: "collectibles", href: "/collectibles" },
          { label: "properties", href: "/properties" },
          { label: "wanted system", href: "/wanted-system" },
          { label: "homepage", href: "/" },
        ],
      },
      {
        text: "Location lists for bars, convenience stores, street food, liquor stores, fast food, electronics stores, footwear stores, and Kenton's shipwrecks.",
        links: [
          { label: "bars", href: "/where-to-find/bars" },
          { label: "convenience stores", href: "/where-to-find/convenience-stores" },
          { label: "street food", href: "/where-to-find/street-food" },
          { label: "liquor stores", href: "/where-to-find/liquor-stores" },
          { label: "fast food", href: "/where-to-find/fast-food" },
          { label: "electronics stores", href: "/where-to-find/electronics-stores" },
          { label: "footwear stores", href: "/where-to-find/footwear-stores" },
          { label: "Kenton's shipwrecks", href: "/guides/shipwrecks" },
        ],
      },
      {
        text: "Location lists for WAiNK, Magazines, books and comics, unique races, the UFO, car washes, and gas stations.",
        links: [
          { label: "WAiNK", href: "/guides/waink-scans" },
          { label: "Magazines, books and comics", href: "/collectibles/magazines-books-comics" },
          { label: "unique races", href: "/collectibles/unique-races" },
          { label: "UFO", href: "/guides/ufo" },
          { label: "car washes", href: "/where-to-find/car-washes" },
          { label: "gas stations", href: "/where-to-find/gas-stations" },
        ],
      },
      {
        text: "A 100% checklist, jewelry stores and pawn shops, payday loans, gyms, clubs, and the GTA VI out-now news post.",
        links: [
          { label: "100% checklist", href: "/guides/100-percent-completion" },
          { label: "jewelry stores and pawn shops", href: "/where-to-find/jewelry-stores-and-pawn-shops" },
          { label: "payday loans", href: "/where-to-find/payday-loans" },
          { label: "gyms", href: "/where-to-find/gyms" },
          { label: "clubs", href: "/where-to-find/clubs" },
          { label: "GTA VI out-now news post", href: "/news/gta-vi-out-now" },
        ],
      },
      {
        text: "Emilio was added on the partners page.",
        links: [{ label: "partners page", href: "/partners" }],
      },
    ],
  },
  {
    date: "2026-11-19",
    entries: [
      {
        text: "Challenges, garages and prices, fences, Strangers & Freaks through Chapter 3, meditation, drone races, and golf.",
        links: [
          { label: "Challenges", href: "/challenges" },
          { label: "garages", href: "/where-to-find/garages" },
          { label: "fences", href: "/where-to-find/fences" },
          { label: "meditation", href: "/guides/meditation" },
          { label: "drone races", href: "/collectibles/top-fun-drone-races" },
          { label: "golf", href: "/collectibles/golf-courses" },
        ],
      },
      {
        text: "A completion tracker with cloud sync was added on the Pro page.",
        links: [{ label: "Pro page", href: "/pro" }],
      },
      {
        text: "An EU consent banner is on the site, with the cookie notes beside it.",
        links: [{ label: "cookie notes", href: "/cookies" }],
      },
      {
        text: "GTA6 Times joined the partners page.",
        links: [{ label: "partners page", href: "/partners" }],
      },
      {
        text: "The Explore menu stays above the Leonida map.",
        links: [{ label: "Leonida map", href: "/map" }],
      },
      {
        text: "Quick-answer guides landed in five batches: 21, then 24, 22, 21, and 20 pages, with links from the hubs.",
        links: [{ label: "Quick-answer guides", href: "/guides" }],
      },
      {
        text: "Real stills filled 43 cards on the site, then 33 more, and designed art covered the cards that were still blank.",
        links: [{ label: "the site", href: "/" }],
      },
      {
        text: "Launch-fact boxes were removed from the launch page and the FAQ. The launch page stays up.",
        links: [
          { label: "launch page", href: "/gta-6-launch" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
  {
    date: "2026-11-18",
    entries: [
      {
        text: "The site moved to image cards, short detail pages, map buttons, and tap-to-check tracking. The homepage, news, and media use that layout.",
        links: [
          { label: "homepage", href: "/" },
          { label: "news", href: "/news" },
          { label: "media", href: "/media" },
        ],
      },
      {
        text: "Catalogs for weapons, cheats, money methods, vehicles, and fastest cars.",
        links: [
          { label: "weapons", href: "/weapons" },
          { label: "cheats", href: "/cheats" },
          { label: "money methods", href: "/money-methods" },
          { label: "vehicles", href: "/vehicles" },
          { label: "fastest cars", href: "/fastest-cars" },
        ],
      },
      {
        text: "Where-to-find pages, with corrected Ammu-Nation county counts, plus stores and clothing catalogs.",
        links: [
          { label: "Where-to-find", href: "/where-to-find" },
          { label: "Ammu-Nation", href: "/ammu-nation-locations" },
          { label: "stores", href: "/stores" },
          { label: "clothing", href: "/clothing" },
        ],
      },
      {
        text: "Pages for story length, the wanted system, phone apps, and Girlypop.",
        links: [
          { label: "story length", href: "/how-long-is-gta-6" },
          { label: "wanted system", href: "/wanted-system" },
          { label: "phone apps", href: "/gta-6-apps" },
          { label: "Girlypop", href: "/girlypop" },
        ],
      },
      {
        text: "A spoiler-safe missions list, a trophies hub, and launch facts for Chapters 1–3, 27 trophies, and collectible types.",
        links: [
          { label: "missions list", href: "/missions" },
          { label: "trophies hub", href: "/trophies" },
          { label: "collectible types", href: "/collectibles" },
        ],
      },
      {
        text: "28 map pins from launch-day guides, plus Ammu-Nation locations, vehicle counts, BuckMe, WAiNK, Scooter Bros, and nine activities.",
        links: [
          { label: "map pins", href: "/map" },
          { label: "Ammu-Nation locations", href: "/ammu-nation-locations" },
          { label: "activities", href: "/activities" },
        ],
      },
      {
        text: "The phone catalog, property pages, and the partners page.",
        links: [
          { label: "phone catalog", href: "/phone" },
          { label: "property pages", href: "/properties" },
          { label: "partners page", href: "/partners" },
        ],
      },
      {
        text: "An installable app with offline pages. The huge glow effects that were crashing phones were removed.",
        links: [{ label: "installable app", href: "/app" }],
      },
      {
        text: "Melee weapons and explosives, collectible hubs, and shooting ranges.",
        links: [
          { label: "Melee weapons and explosives", href: "/where-to-find/melee-and-explosives" },
          { label: "collectible hubs", href: "/collectibles" },
          { label: "shooting ranges", href: "/shooting-ranges" },
        ],
      },
    ],
  },
  {
    date: "2026-11-17",
    entries: [
      {
        text: "The launch hub opened with unlock times, file size, and pre-load notes.",
        links: [{ label: "launch hub", href: "/gta-6-launch" }],
      },
      {
        text: "The Leonida community map went live, pin taps were fixed, and the map news post went up.",
        links: [
          { label: "Leonida community map", href: "/map" },
          { label: "map news post", href: "/news/gta-companion-interactive-map-live" },
        ],
      },
      {
        text: "Launch-week events for the Heat game and the YouTube livestream were added on the launch page.",
        links: [{ label: "launch page", href: "/gta-6-launch" }],
      },
      {
        text: "Social and community links were added across the site, including Discord.",
        links: [{ label: "Discord", href: "https://discord.gg/QBbzqRR3G" }],
      },
      {
        text: "Grand Theft Auto VI: The Festival was added to the timeline and the launch page.",
        links: [
          { label: "timeline", href: "/timeline" },
          { label: "launch page", href: "/gta-6-launch" },
          { label: "Grand Theft Auto VI: The Festival", href: "/news/gta-vi-the-festival" },
        ],
      },
    ],
  },
];

/**
 * Upcoming platform features. Planned only: do not describe these as available.
 * Price is the announced one-time amount in the site's euro pricing.
 */
export const comingSoon: readonly ComingSoonItem[] = [
  {
    id: "community",
    title: "Community",
    status: "Planned",
    body: "Signed-in members will post tips, screenshots, and updates, then comment and interact. Posts go through moderation.",
  },
  {
    id: "pro",
    title: "GTA Companion Pro",
    status: "Planned",
    price: "€4.99, one time",
    body: "No ads, cloud sync, and progress tracking.",
  },
  {
    id: "badge",
    title: "Pro member badge",
    status: "Planned",
    body: "Pro members will wear a star beside their name.",
  },
];

/** Content still being added. No dates, no story details. */
export const whatsNext: readonly WhatsNextItem[] = [
  {
    title: "Optional finds",
    body: "More guides for optional finds.",
  },
  {
    title: "Map locations",
    body: "More places on the Leonida map.",
  },
  {
    title: "Stills",
    body: "More real in-game stills on the pages they belong to.",
  },
];

const updateCopy = JSON.stringify({ updateDays, comingSoon, whatsNext });

if (/\bfree\b/i.test(updateCopy)) {
  throw new Error("Updates copy must not use the word free.");
}

for (const day of updateDays) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day.date)) {
    throw new Error(`Bad update date: ${day.date}`);
  }
  for (const entry of day.entries) {
    for (const link of entry.links ?? []) {
      if (!entry.text.includes(link.label)) {
        throw new Error(`Update link "${link.label}" is missing from: ${entry.text}`);
      }
    }
  }
}

const dates = updateDays.map((day) => day.date);
if (dates.some((date, index) => index > 0 && date >= dates[index - 1])) {
  throw new Error("Update days must be newest first.");
}

export function formatUpdateDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
