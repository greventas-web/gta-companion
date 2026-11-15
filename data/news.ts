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
    image: "/images/official/vehicles/grotti-cheetah-1995.webp",
    imageAlt: "The '95 Grotti Cheetah in an official Rockstar still.",
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
    image: "/images/official/media/screenshots-places-mount-kalaga-national-park-mount-kalaga-national-park-01.webp",
    imageAlt: "Mount Kalaga National Park in an official Rockstar screenshot.",
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
    image: "/images/official/media/screenshots-people-jason-and-lucia-jason-and-lucia-03.webp",
    imageAlt: "Jason and Lucia in official Rockstar screenshot 03.",
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
    image: "/images/official/media/screenshots-places-vice-city-vice-city-02.webp",
    imageAlt: "Vice City in official Rockstar screenshot 02.",
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