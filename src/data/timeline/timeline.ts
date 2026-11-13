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
      "Rockstar publishes the first Grand Theft Auto VI trailer, naming Jason, Lucia, Vice City, and the state of Leonida, with a 2025 window that was later changed.",
    sourceLabel: "Rockstar Games — Grand Theft Auto VI",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "May 2, 2025",
    title: "Release moves to May 26, 2026",
    description:
      "Rockstar moves the release from 2025 to May 26, 2026.",
    sourceLabel: "Rockstar Games — Grand Theft Auto VI",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "May 6, 2025",
    title: "Trailer 2 and the first screenshot drop",
    description:
      "Trailer 2 arrives with the official synopsis and a large set of screenshots and character profiles on the Grand Theft Auto VI site.",
    sourceLabel: "Rockstar Games — Grand Theft Auto VI",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "November 6, 2025",
    title: "Release moves to November 19, 2026",
    description:
      "Rockstar sets the PlayStation 5 and Xbox Series X|S release for November 19, 2026. A PC date is not part of that announcement.",
    sourceLabel: "Rockstar Newswire — November 19, 2026",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
  },
  {
    date: "June 24, 2026",
    title: "Pre-orders announced",
    description:
      "Rockstar and Take-Two announce Standard and Ultimate Edition pre-orders, the Vintage Vice City Pack, and a later pre-load window.",
    sourceLabel: "Rockstar Games — Grand Theft Auto VI",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "August 27, 2026",
    title: "An Extended Look",
    description:
      "Rockstar releases a long in-game look at Grand Theft Auto VI.",
    sourceLabel: "Rockstar Games — Grand Theft Auto VI",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "October 8, 2026",
    title: "Six radio stations",
    description:
      "Rockstar names Cocoteo FM, Back Country Radio, AfroBank FM, The Chamber 106.6, Flash FM, and Dirty South Classics, and says on-demand podcasts will play in vehicles and on foot.",
    sourceLabel: "Rockstar Games — Grand Theft Auto VI",
    sourceHref: "https://www.rockstargames.com/VI",
  },
  {
    date: "October 15, 2026",
    title: "Launch trailer",
    description:
      "The launch trailer debuts Flower in a Hurricane, from the original score by Justice.",
    sourceLabel: "Rockstar Games — Launch trailer",
    sourceHref: "https://www.rockstargames.com/VI/launch-trailer",
  },
  {
    date: "November 3, 2026",
    title: "Pre-load date and file size",
    description:
      "Rockstar says digital pre-load starts November 10 and that the file needs up to 212 GB, depending on the device. Code-in-box copies are expected at retailers from November 12.",
    sourceLabel: "Rockstar Newswire — Pre-load begins November 10",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10",
  },
  {
    date: "November 10, 2026",
    title: "Pre-load opens",
    description:
      "Rockstar says pre-loading is available for digital pre-orders. PlayStation describes a rolling midnight unlock by country on November 19.",
    sourceLabel: "Rockstar Newswire — Pre-load now",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/89834o94713o21/pre-load-grand-theft-auto-vi-now",
  },
  {
    date: "November 13, 2026",
    title: "Macca & Friends teaser",
    description:
      "Rockstar Games released a teaser trailer for Macca & Friends, an animated series inside Grand Theft Auto VI. It follows the adventures of Macca the Gator and his wetland friends across the state of Leonida. The series airs on the in-game Weazel TV network and is watchable from launch on November 19, 2026. The teaser was a Rockstar-provided exclusive via DiscussingFilm.",
    sourceLabel: "Gematsu — Macca & Friends teaser trailer",
    sourceHref:
      "https://www.gematsu.com/2026/11/grand-theft-auto-vi-in-game-animated-series-macca-friends-teaser-trailer",
    moreSources: [
      {
        label: "GamingBible — Macca & Friends",
        href: "https://www.gamingbible.com/news/gta-6-macca-and-friends-explained-rockstar-reveal-933637-20261113",
      },
    ],
  },
  {
    date: "November 19, 2026",
    title: "Launch day",
    description:
      "The published release date for PlayStation 5 and Xbox Series X|S. A PC date has not been announced.",
    sourceLabel: "Rockstar Newswire — November 19, 2026",
    sourceHref:
      "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
  },
];
