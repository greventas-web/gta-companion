import { NewsArticle } from "@/types/news";
import {
  characterSwitching,
  gameplaySystems,
  relationshipSystem,
  switchingSources,
} from "@/src/data/gameplay/confirmed";

export const news: NewsArticle[] = [
  {
    id: 8,
    slug: "gta-vi-edition-vehicles",
    title: "Rockstar Names the Edition Vehicles",
    image: "/images/official/vehicles/grotti-cheetah-1995.webp",
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
    summary:
      "On June 24, 2026, Take-Two announced pre-orders opening June 25 at midnight local time. Standard is $79.99 and the Ultimate Edition is $99.99 (US). Pre-load was first set for November 12; on November 3 Rockstar moved it to November 10.",
    date: "2026-06-24",
    category: "Official News",
    sourceName: "Take-Two Interactive",
    sources: [
      {
        label: "Take-Two — pre-orders announcement",
        href: "https://taketwointeractivesoftwareinc.gcs-web.com/news-releases/news-release-details/rockstar-games-announces-pre-orders-grand-theft-auto-vi/",
      },
      {
        label: "Rockstar Support — pre-load FAQ",
        href: "https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq",
      },
    ],
  },
  {
    id: 6,
    slug: "gta-vi-launch-date",
    title: "GTA VI Launches November 19, 2026",
    image: "/images/official/media/screenshots-places-mount-kalaga-national-park-mount-kalaga-national-park-01.webp",
    summary:
      "The launch trailer (Oct 15, 2026) restates the November 19, 2026 release on PS5 and Xbox Series X|S, set by Rockstar on November 6, 2025.",
    date: "2025-11-06",
    category: "Official News",
    sources: [
      {
        label: "Rockstar Newswire — November 19, 2026",
        href: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
      },
      {
        label: "Rockstar Games — Launch trailer",
        href: "https://www.rockstargames.com/VI/launch-trailer",
      },
    ],
  },
  {
    id: 5,
    slug: "gta-vi-launch-trailer",
    title: "Rockstar Releases the GTA VI Launch Trailer",
    image: "/images/official/news/gallery.webp",
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
    summary:
      "A 26-minute extended look, captured on PlayStation 5, shows more of Jason, Lucia, Vice City, and Leonida.",
    date: "2026-08-27",
    category: "Official News",
    paragraphs: [characterSwitching, relationshipSystem],
    points: [...gameplaySystems],
    sources: [...switchingSources],
  },
  {
    id: 1,
    slug: "rockstar-releases-trailer-2",
    title: "Rockstar Releases GTA VI Trailer 2",
    image: "/images/official/media/screenshots-places-vice-city-vice-city-02.webp",
    summary:
      "Rockstar Games has officially released the second Grand Theft Auto VI trailer showcasing Leonida, Jason, Lucia and new gameplay.",
    date: "2025-05-06",
    category: "Official News",
  },
  {
    id: 2,
    slug: "official-screenshots",
    title: "New Official Screenshots Released",
    image: "/images/official/media/artwork-postcards-leonida-keys-leonida-keys-postcard-landscape.webp",
    summary:
      "Rockstar Games published a large collection of official GTA VI screenshots showcasing characters, vehicles, locations and life across Leonida.",
    date: "2025-05-06",
    category: "Screenshots",
  },
  {
    id: 3,
    slug: "rockstar-website-update",
    title: "Rockstar Updates GTA VI Website",
    image: "/images/official/media/artwork-the-album-cover-art-the-album-cover-art-landscape.webp",
    summary:
      "The official GTA VI website has been expanded with dedicated pages covering characters, locations, businesses and additional official information.",
    date: "2025-05-06",
    category: "Official Website",
  },
].sort(
  (a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
);