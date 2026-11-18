import { NewsArticle } from "@/types/news";
import { albumSingles, albumSource, albumSummary, radioNewswire, scoreSource, scoreSummary } from "@/data/music";
import {
  goodtimeLine,
  goodtimeSource,
  launchGallerySource,
  preloadNowSource,
  preloadWindowSource,
  storeSource,
} from "@/data/merch";
import {
  characterSwitching,
  edgeViaVice,
  gameplaySystems,
  ignBigInterview,
  ignStepForward,
  relationshipSystem,
  switchingSources,
} from "@/src/data/gameplay/confirmed";

const keyArtAlt =
  "Official Grand Theft Auto VI key art: a collage around the VI logo, with Lucia, Jason, a flamingo, an alligator, and Vice City scenes.";

export const news: NewsArticle[] = [
  {
    id: 19,
    slug: "gta-companion-interactive-map-live",
    title: "The GTA Companion interactive map is live",
    summary:
      "GTA Companion now has an interactive community map of Leonida. It opens with 35 confirmed pins from official Rockstar material, and players can suggest new locations for review.",
    date: "2026-11-17",
    category: "Site Update",
    sourceName: "GTA Companion",
    status: "Site update",
    paragraphs: [
      "The interactive map is live at gta-companion.com/map. It is a pan-and-zoom map of Leonida built on the gtadb.org base map. It opens with 35 confirmed pins, and each one comes from official Rockstar Games material: places across Vice City, the Leonida Keys, Grassrivers, Mount Kalaga and more, plus confirmed stores, businesses, activities, a car dealer, a safehouse and a mission.",
      "Use the category filters to show only what you want, search for a place by name, and open a pin to read about it. Pins that match a GTA Companion database page link straight to it, and database pages have a View on map button that takes you back to the right spot.",
      "To suggest a location, open the map panel (on phones, tap Search and layers), choose Suggest a location, tap the map to drop a pin, then add a category, a title and a short description. A source link is optional but helps. Choose Submit for review. Every suggestion is reviewed before it appears on the map.",
      "After Grand Theft Auto VI launches on Thursday, November 19, we will fill the map with confirmed in-game locations, including the stores, weapons, activities, businesses, vehicles, missions and collectibles in the database.",
      "Map tiles and landmarks are by gtadb.org and all contributors, used under CC BY 4.0. Unofficial fan site. Grand Theft Auto VI is by Rockstar Games. Not affiliated with Rockstar Games or Take-Two Interactive.",
    ],
    sources: [
      {
        label: "GTA Companion map",
        href: "https://www.gta-companion.com/map",
      },
      {
        label: "gtadb.org and all contributors",
        href: "https://gtadb.org",
      },
      {
        label: "CC BY 4.0 license",
        href: "https://creativecommons.org/licenses/by/4.0/",
      },
      {
        label: "Rockstar Games: Only in Leonida, Vice City",
        href: "https://www.rockstargames.com/VI/only-in-leonida/vice-city",
      },
      {
        label: "Rockstar Games: Grand Theft Auto VI",
        href: "https://www.rockstargames.com/VI",
      },
    ],
  },
  {
    id: 18,
    slug: "gta-vi-launch-eve-events",
    title: "A Night in Vice City and the YouTube launch livestream",
    summary:
      "The Miami Heat host the Bucks on November 18 in an official Rockstar Games collaboration, and YouTube runs a 24-hour Grand Theft Auto VI launch livestream with a pre-show the same night.",
    date: "2026-11-17",
    category: "Official News",
    paragraphs: [
      "A Night in Vice City is the Miami Heat versus Milwaukee Bucks game on Wednesday, November 18, 2026, at Kaseya Center. It is an official Rockstar Games collaboration, on ESPN at 7 PM ET / 6 PM CT / 4 PM PT. Confirmed details are a one-night Vice City court, a custom Vice City Cactus Jack Edition uniform in limited quantities at the arena, and special game-night programming.",
      "YouTube and Rockstar Games are partnering on a 24-hour Grand Theft Auto VI launch livestream. The pre-show, hosted by RDCWorld, starts at 11 PM ET / 10 PM CT / 8 PM PT on Wednesday, November 18. The 24-hour stream starts at 12 AM ET on Thursday, November 19 (11 PM CT / 9 PM PT on Wednesday, November 18) on YouTube, with live gameplay, creator podcasts, and on-the-ground coverage from Miami.",
      "Unofficial fan note. Rockstar Games is credited for the collaboration and the partnership.",
    ],
    sources: [
      {
        label: "ESPN Press Room (Nov 17)",
        href: "https://espnpressroom.com/press-release/espn-nba-full-court-press-celtics-and-jayson-tatum-visit-nuggets-and-nikola-jokic-wednesday/",
      },
      {
        label: "Miami Heat",
        href: "https://www.nba.com/heat/game/0022600260-bucks-vs-heat-miami-fl-11-18-2026",
      },
      {
        label: "Rockstar Games on X",
        href: "https://x.com/RockstarGames/status/2122745929442759040",
      },
      {
        label: "Official video",
        href: "https://www.youtube.com/watch?v=Rj2Jnbt-5p4",
      },
      {
        label: "Rockstar Games on X (uniform)",
        href: "https://x.com/RockstarGames/status/2120881926957637954",
      },
      {
        label: "YouTube Blog (Nov 12)",
        href: "https://blog.youtube/news-and-events/youtube-rockstar-games-gta-vi-launch/",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/youtube",
      },
      {
        label: "Rockstar Games on X (livestream)",
        href: "https://x.com/RockstarGames/status/2120907315352367600",
      },
    ],
  },
  {
    id: 17,
    slug: "gta-vi-the-festival",
    title: "Grand Theft Auto VI: The Festival",
    image: "/images/official/gta-vi-the-festival.webp",
    imageAlt:
      "Official key art: Rockstar Games and PlayStation present Grand Theft Auto VI: The Festival on November 21, 2026 at Mana Wynwood, Miami.",
    summary:
      "Rockstar Games announced Grand Theft Auto VI: The Festival, a live event on November 21, 2026 at Mana Wynwood in Miami, presented in partnership with PlayStation. The pre-sale lottery has closed.",
    date: "2026-11-09",
    category: "Official News",
    paragraphs: [
      "Rockstar Games announced Grand Theft Auto VI: The Festival, a special live event on November 21 at Mana Wynwood in Miami to celebrate the launch. It is presented in partnership with PlayStation and produced by the creators of III Points, with two stages of nonstop music and artists from the game and the official soundtrack: Cactus Jack presents Travis Scott, Don Toliver, Kodak Black, and Sofaygo; Cardi B; Ca7riel & Paco Amoroso; Justice (DJ set); Metro Boomin; Nick León B2B DJ Python; Prospa B2B Skream; Rauw & Friends; Suero; Tainy; and The Dare B2B Fcukers (DJ set). The pre-sale lottery closed at 4 p.m. ET on November 10. Tickets are limited to two per pre-sale code. They are non-transferable, and attendance is 17+.",
      "Unofficial fan note. Images: Rockstar Games.",
    ],
    sources: [
      {
        label: "Rockstar Newswire",
        href: "https://www.rockstargames.com/newswire/article/o39o87a435a25a/grand-theft-auto-vi-the-festival",
      },
      {
        label: "Rockstar Games",
        href: "https://www.rockstargames.com/VI/gtavi-thefestival",
      },
    ],
  },
  {
    id: 16,
    slug: "gta-vi-preload-now",
    title: "Pre-Load Grand Theft Auto VI Now",
    image: "/images/official/news/preload-now.webp",
    imageAlt:
      "Official artwork of Jason and Lucia on a balcony, with the Grand Theft Auto logo and the date November 19, 2026.",
    summary:
      "Pre-loading is available for digital pre-orders. A code-in-box copy can be activated and pre-loaded as soon as the code arrives.",
    date: "2026-11-10",
    category: "Official News",
    paragraphs: [
      "Rockstar says pre-loading is now available for everyone who has pre-ordered Grand Theft Auto VI digitally. Players who pre-ordered the code-in-box version can activate their code and begin pre-loading as soon as it is received.",
      "The same post points to a new video featuring \"Blood in Your Eyes\" by Tove Lo, from Grand Theft Auto VI: The Album.",
    ],
    sources: [preloadNowSource],
  },
  {
    id: 15,
    slug: "gta-vi-launch-gallery",
    title: "Rockstar Opens the Launch Gallery",
    image: "/images/official/news/launch-gallery.webp",
    imageAlt:
      "Jason and Lucia in a convertible at night, neon on the windshield, each holding a handgun. Official Launch Gallery artwork.",
    summary:
      "Rockstar published new screenshots of Vice City and beyond on the official Grand Theft Auto VI site.",
    date: "2026-11-05",
    category: "Screenshots",
    paragraphs: [
      "The November 5 Newswire says the Launch Gallery is a collection of new screenshots on the official site, at rockstargames.com/VI/launch-gallery.",
    ],
    sources: [launchGallerySource],
  },
  {
    id: 14,
    slug: "gta-vi-preload-begins-november-10",
    title: "Pre-Load Begins on November 10",
    image: "/images/official/news/preload-november-10.webp",
    imageAlt:
      "Vice City in the daytime, with boats, a beach resort, a highway, and the skyline. Official Rockstar artwork.",
    summary:
      "Digital pre-load starts November 10. PlayStation 5 begins at midnight local time. Xbox Series X|S begins at 12 a.m. GMT. The file needs up to 212 GB.",
    date: "2026-11-03",
    category: "Official News",
    paragraphs: [
      "On PlayStation 5, digital pre-loading begins Tuesday, November 10 at midnight local time. On Xbox Series X|S, pre-loading begins globally on Tuesday, November 10 at 12 a.m. GMT. Code-in-box versions should be available from retailers beginning November 12.",
      "Rockstar says the pre-load file will require up to 212 GB depending on the device.",
    ],
    sources: [preloadWindowSource],
  },
  {
    id: 13,
    slug: "gta-vi-original-score-justice",
    title: "Original Score by Justice",
    image: "/images/official/news/original-score-justice.webp",
    imageAlt:
      "Official artwork: the VI logo under the words Original Score by Justice.",
    summary: scoreSummary,
    date: "2026-10-29",
    category: "Music",
    paragraphs: [
      "Rockstar calls it an adaptive score, tuned to how the player moves through Vice City and Leonida. \"Flower in a Hurricane\" features Tame Impala, SZA, and King Gizzard & The Lizard Wizard, and is the piece from the launch trailer. \"Pusher,\" featuring Gesaffelstein, is the new single.",
    ],
    sources: [scoreSource],
  },
  {
    id: 12,
    slug: "gta-vi-rockstar-store-collection",
    title: "GTA VI Collection at the Rockstar Store",
    image: "/images/official/news/rockstar-store.webp",
    imageAlt:
      "Official photo of Grand Theft Auto VI apparel and collectibles, including shirts, hats, totes, and stickers.",
    summary:
      "Rockstar opened the Grand Theft Auto VI Collection at the Rockstar Store: apparel and collectibles inspired by the game.",
    date: "2026-10-08",
    category: "Official News",
    paragraphs: [
      "The October 8 Newswire presents Goodtime State tees, stretch-fitted caps, a chrome keychain, a Vice City money clip, a Vice City Zippo lighter, canvas totes, and vinyl stickers. They are sold at the Rockstar Store, separate from the game.",
    ],
    sources: [storeSource],
  },
  {
    id: 11,
    slug: "gta-vi-radio-stations",
    title: "Rockstar Names Six Radio Stations",
    image: "/images/official/news/radio-stations.webp",
    imageAlt:
      "Vehicles on a Leonida highway with the Vice City skyline behind them. Official Rockstar artwork for the radio stations post.",
    summary:
      "Rockstar named Cocoteo FM, Back Country Radio, AfroBank FM, The Chamber 106.6, Flash FM, and Dirty South Classics, plus on-demand podcasts.",
    date: "2026-10-08",
    category: "Music",
    paragraphs: [
      "The October 8 Newswire says radio and podcasts can be heard in vehicles and on foot, through headphones or earbuds connected to the characters' phones. The six stations are the first look published that day.",
    ],
    sources: [radioNewswire],
  },
  {
    id: 10,
    slug: "goodtime-state-vice-city-collection",
    title: "The Goodtime State Collector's Box",
    image: "/images/official/news/goodtime-state-box.webp",
    imageAlt:
      "Official artwork for The Goodtime State – Vice City Collection, including Macca the Gator, a flamingo, and Chunkee the Manatee.",
    summary: goodtimeLine,
    date: "2026-09-24",
    category: "Official News",
    paragraphs: [
      "Rockstar lists a 6-inch Macca the Gator figure with a stash compartment, matte black GTAVI Oakley Frogskins, a New Era 9FORTY hat, a Macca magnetic mirror, a Vice City swizzle spoon, a Vice City razor blade keychain, a Leonida Keys crossbody bag, a Chunkee the Manatee shot glass, a Leonida Keys enamel pin set, stickers, and a double-sided Leonida poster. The post says the game is sold separately.",
    ],
    sources: [goodtimeSource],
  },
  {
    id: 9,
    slug: "gta-vi-the-album",
    title: "Grand Theft Auto VI: The Album",
    image: "/images/official/news/the-album.webp",
    imageAlt:
      "Official album art: Jason and Lucia leaning on a vehicle, with palm trees and the Vice City skyline at sunset.",
    summary: albumSummary,
    date: "2026-09-17",
    category: "Music",
    paragraphs: [
      `The first six singles are ${albumSingles.join("; ")}.`,
    ],
    sources: [albumSource],
  },
  {
    id: 8,
    slug: "gta-vi-edition-vehicles",
    title: "Rockstar Names the Edition Vehicles",
    summary:
      "The Ultimate Edition names the '95 Grotti Cheetah, Vapid Ganado, Dinka Enduro, Crest Kayak, Shitzu Squalo, and '67 Vapid Dominator Buggy. The Vintage Vice City Pack adds the '55 Vapid Stanier.",
    date: "2026-06-25",
    category: "Official News",
  },
  {
    id: 7,
    slug: "gta-vi-pre-orders",
    title: "Rockstar Opens GTA VI Pre-Orders",
    image: "/images/official/news/announcement.webp",
    imageAlt: keyArtAlt,
    summary:
      "On June 24, 2026, Take-Two announced pre-orders opening June 25 at midnight local time. Standard is $79.99 and the Ultimate Edition is $99.99 (US). Pre-load was first set for November 12; on November 3 Rockstar moved it to November 10.",
    date: "2026-06-24",
    category: "Official News",
    sourceName: "Take-Two Interactive",
    sources: [
      {
        label: "Take-Two",
        href: "https://taketwointeractivesoftwareinc.gcs-web.com/news-releases/news-release-details/rockstar-games-announces-pre-orders-grand-theft-auto-vi/",
      },
      {
        label: "Rockstar Support",
        href: "https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq",
      },
    ],
  },
  {
    id: 6,
    slug: "gta-vi-launch-date",
    title: "GTA VI Launches November 19, 2026",
    image: "/images/official/news/launch-date-november-19.webp",
    imageAlt: "The Grand Theft Auto VI logo from Rockstar's launch date announcement.",
    summary:
      "The launch trailer (Oct 15, 2026) restates the November 19, 2026 release on PS5 and Xbox Series X|S, set by Rockstar on November 6, 2025.",
    date: "2025-11-06",
    category: "Official News",
    sources: [
      {
        label: "Rockstar Newswire",
        href: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
      },
      {
        label: "Launch trailer",
        href: "https://www.rockstargames.com/VI/launch-trailer",
      },
    ],
  },
  {
    id: 5,
    slug: "gta-vi-launch-trailer",
    title: "Rockstar Releases the GTA VI Launch Trailer",
    image: "/images/official/news/launch-trailer.webp",
    imageAlt: keyArtAlt,
    summary:
      "The launch trailer debuts 'Flower in a Hurricane' by Justice (composers of the original score) feat. Tame Impala, SZA, and King Gizzard & The Lizard Wizard.",
    date: "2026-10-15",
    category: "Official News",
  },
  {
    id: 4,
    slug: "gta-vi-extended-look",
    title: "Rockstar Releases an Extended Look at GTA VI",
    image: "/images/official/videos/tJbzMqJGH4k.webp",
    imageAlt: "The official thumbnail of Grand Theft Auto VI: An Extended Look.",
    summary:
      "A 26-minute extended look, captured on PlayStation 5, shows more of Jason, Lucia, Vice City, and Leonida.",
    date: "2026-08-27",
    category: "Official News",
    paragraphs: [characterSwitching, relationshipSystem],
    points: [...gameplaySystems],
    sources: [
      ...switchingSources,
      ignBigInterview,
      ignStepForward,
      edgeViaVice,
    ],
  },
  {
    id: 1,
    slug: "rockstar-releases-trailer-2",
    title: "Rockstar Releases GTA VI Trailer 2",
    image: "/images/official/videos/VQRLujxTm3c.webp",
    imageAlt: "The official thumbnail of Grand Theft Auto VI Trailer 2.",
    summary:
      "Rockstar Games has officially released the second Grand Theft Auto VI trailer showcasing Leonida, Jason, Lucia and new gameplay.",
    date: "2025-05-06",
    category: "Official News",
  },
  {
    id: 2,
    slug: "official-screenshots",
    title: "New Official Screenshots Released",
    image: "/images/official/media/screenshots-places-vice-city-vice-city-01.webp",
    imageAlt: "Vice City in official Rockstar screenshot 01.",
    summary:
      "Rockstar Games published a large collection of official GTA VI screenshots showcasing characters, vehicles, locations and life across Leonida.",
    date: "2025-05-06",
    category: "Screenshots",
  },
  {
    id: 3,
    slug: "rockstar-website-update",
    title: "Rockstar Updates GTA VI Website",
    image: "/images/official/media/screenshots-people-jason-and-lucia-jason-and-lucia-01.webp",
    imageAlt: "Jason and Lucia in official Rockstar screenshot 01.",
    summary:
      "The official GTA VI website has been expanded with dedicated pages covering characters, locations, businesses and additional official information.",
    date: "2025-05-06",
    category: "Official Website",
  },
].sort(
  (a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
);