export type TimelineSource = {
  label: string;
  href: string;
};

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  sourceLabel: string;
  sourceHref: string;
  moreSources?: TimelineSource[];
};

export const timeline: TimelineEvent[] = [
  {
    date: "December 4, 2023",
    title: "Trailer 1",
    description:
      "Rockstar publishes the first Grand Theft Auto VI trailer, showing Lucia, her partner (named as Jason Duval in May 2025), Vice City, and the state of Leonida, with a 2025 window that was later changed.",
    sourceLabel: "Launch trailer",
    sourceHref: "https://www.rockstargames.com/VI/launch-trailer",
    moreSources: [
      {
        label: "GamesRadar",
        href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6s-lucia-and-jason-get-full-names-and-backstories-as-trailer-2-drops-and-rockstar-shares-loads-more-details-about-its-protagonists/",
      },
    ],
  },
  {
    date: "May 2, 2025",
    title: "Release moves to May 26, 2026",
    description:
      "Rockstar moves the release from 2025 to May 26, 2026.",
    sourceLabel: "Rockstar Games",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "May 6, 2025",
    title: "Trailer 2 and the first screenshot drop",
    description:
      "Trailer 2 arrives with the official synopsis and a large set of screenshots and character profiles on the Grand Theft Auto VI site.",
    sourceLabel: "Rockstar Games",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "November 6, 2025",
    title: "Release moves to November 19, 2026",
    description:
      "Rockstar sets the PlayStation 5 and Xbox Series X|S release for November 19, 2026. A PC date is not part of that announcement.",
    sourceLabel: "Rockstar Newswire",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
  },
  {
    date: "June 24, 2026",
    title: "Pre-orders announced",
    description:
      "Rockstar and Take-Two announce Standard and Ultimate Edition pre-orders, the Vintage Vice City Pack, and a later pre-load window.",
    sourceLabel: "Rockstar Games",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "August 27, 2026",
    title: "An Extended Look",
    description:
      "Rockstar releases a long in-game look at Grand Theft Auto VI.",
    sourceLabel: "Rockstar Games",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "September 17, 2026",
    title: "The Album announced",
    description:
      "Rockstar announces Grand Theft Auto VI: The Album, the official soundtrack made with Atlantic Records, launching November 19 alongside the game. It has 34 original tracks, with vinyl and CD editions. The first six singles are Yung Lean, \"That's It\" (feat. Future & Metro Boomin); Travis Scott, \"RHYNO\" (prod. by Guy-Manuel de Homem-Christo); CA7RIEL & Paco Amoroso, PinkPantheress, Fred again.. & Etienne de Crécy, \"Sexy Magic\"; Morgan Wallen, \"Last Thing You Need\"; Rauw Alejandro, \"Macacoa 2000\"; and Keith Richards, \"Bright Lights, Big City\".",
    sourceLabel: "Rockstar Newswire",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/7599a881942544/announcing-grand-theft-auto-vi-the-album-coming-november-19",
  },
  {
    date: "September 24, 2026",
    title: "The Goodtime State Collector's Box",
    description:
      "Rockstar opens pre-orders for The Goodtime State – Vice City Collection, a limited Collector's Box arriving November 19. The game is sold separately. The box includes a 6-inch Macca the Gator figure, GTAVI Oakley Frogskins, a New Era 9FORTY hat, a Chunkee the Manatee shot glass, and a Leonida poster, plus other Macca merchandise.",
    sourceLabel: "Rockstar Newswire",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/9k2a49ook82o57/pre-order-the-goodtime-state-vice-city-collection-now-while-supplies-l",
  },
  {
    date: "October 8, 2026",
    title: "Six radio stations",
    description:
      "Rockstar names Cocoteo FM, Back Country Radio, AfroBank FM, The Chamber 106.6, Flash FM, and Dirty South Classics, and says on-demand podcasts will play in vehicles and on foot.",
    sourceLabel: "Rockstar Newswire",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/o3982oa93a23k4/the-music-of-grand-theft-auto-vi-in-game-radio-stations",
  },
  {
    date: "October 8, 2026",
    title: "Rockstar Store collection",
    description:
      "Rockstar opens the Grand Theft Auto VI Collection at the Rockstar Store: apparel and collectibles inspired by the game, including Goodtime State tees, caps, a keychain, a money clip, a Zippo lighter, totes, and stickers.",
    sourceLabel: "Rockstar Newswire",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/759875393o5253/grand-theft-auto-vi-collection-now-at-the-rockstar-store",
  },
  {
    date: "October 15, 2026",
    title: "Launch trailer",
    description:
      "The launch trailer debuts 'Flower in a Hurricane' by Justice (composers of the original score) feat. Tame Impala, SZA, and King Gizzard & The Lizard Wizard.",
    sourceLabel: "Launch trailer",
    sourceHref: "https://www.rockstargames.com/VI/launch-trailer",
  },
  {
    date: "October 29, 2026",
    title: "Original score by Justice",
    description:
      "Rockstar says Justice (Gaspard Augé and Xavier de Rosnay) composed an adaptive original score. The score album has 30 tracks and comes out December 11 on streaming, CD, and vinyl. It includes \"Flower in a Hurricane\" and the single \"Pusher\" (feat. Gesaffelstein).",
    sourceLabel: "Rockstar Newswire",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/39ak8a12395591/grand-theft-auto-vi-original-score-by-justice",
  },
  {
    date: "November 3, 2026",
    title: "Pre-load date and file size",
    description:
      "Rockstar says digital pre-load starts November 10 and that the file needs up to 212 GB, depending on the device. Code-in-box copies are expected at retailers from November 12.",
    sourceLabel: "Rockstar Newswire (Nov 3)",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10",
  },
  {
    date: "November 3, 2026",
    title: "Release time confirmed",
    description:
      "Rockstar Support says Grand Theft Auto VI releases at midnight local time on November 19, 2026, in all regions, on both PlayStation 5 and Xbox Series X|S.",
    sourceLabel: "Rockstar Support",
    sourceHref:
      "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s",
  },
  {
    date: "November 5, 2026",
    title: "Launch Gallery",
    description:
      "Rockstar publishes the Launch Gallery, a set of screenshots on the Grand Theft Auto VI site.",
    sourceLabel: "Rockstar Games",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "November 10, 2026",
    title: "Pre-load opens",
    description:
      "Rockstar says pre-loading is available for digital pre-orders. PlayStation describes a rolling midnight unlock by country on November 19.",
    sourceLabel: "Rockstar Newswire (Nov 10)",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/89834o94713o21/pre-load-grand-theft-auto-vi-now",
  },
  {
    date: "November 10, 2026",
    title: "Pre-Load Now video",
    description:
      "Rockstar releases Grand Theft Auto VI: Pre-Load Now, a 0:30 video.",
    sourceLabel: "Rockstar Games",
    sourceHref: "https://www.rockstargames.com/VI/pre-load-now",
    moreSources: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?v=TIPlpDAsfWo",
      },
    ],
  },
  {
    date: "November 13, 2026",
    title: "Macca & Friends teaser",
    description:
      "Rockstar Games released a teaser trailer for Macca & Friends, an animated series inside Grand Theft Auto VI. It follows the adventures of Macca the Gator and his wetland friends across the state of Leonida. The series is reported to air on the in-game Weazel network and is watchable from launch on November 19, 2026. The teaser was a Rockstar-provided exclusive via DiscussingFilm.",
    sourceLabel: "Gematsu",
    sourceHref:
      "https://www.gematsu.com/2026/11/grand-theft-auto-vi-in-game-animated-series-macca-friends-teaser-trailer",
    moreSources: [
      {
        label: "GamingBible",
        href: "https://www.gamingbible.com/news/gta-6-macca-and-friends-explained-rockstar-reveal-933637-20261113",
      },
    ],
  },
  {
    date: "November 19, 2026",
    title: "Launch day",
    description:
      "The published release date for PlayStation 5 and Xbox Series X|S. A PC date has not been announced.",
    sourceLabel: "Rockstar Newswire",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
  },
];
