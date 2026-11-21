/**
 * Facts for /gta-6-launch. Edit this file when a publisher posts a new time.
 * November 19, 2026 is after US daylight saving time ends (November 1), so
 * 1:00 a.m. Eastern Time is 06:00 UTC.
 */

export type LaunchSource = {
  id: string;
  label: string;
  href: string;
  published: string;
};

export type LaunchStatus = "confirmed" | "live" | "pending";

export const gta6Launch = {
  path: "/gta-6-launch",
  lastUpdated: "November 21, 2026",
  title: "GTA 6 Is Out: Unlock Times, File Size, and Platforms",
  description:
    "GTA 6 is out now on PS5 and Xbox Series X|S: unlock times, install size, and platforms. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.",
  keywords: [
    "GTA 6 unlock time",
    "GTA 6 release time",
    "GTA 6 file size",
    "GTA 6 pre-load",
    "GTA 6 preload",
    "GTA 6 out now",
    "Grand Theft Auto VI unlock time",
    "Grand Theft Auto VI release time",
  ],
  h1: "GTA 6 is out",
  lede: "Grand Theft Auto VI is out on PlayStation 5 and Xbox Series X|S. The unlock times below are the ones Rockstar, PlayStation, and Xbox published, and they have passed. The install size is the figure Rockstar gave for the game file. Unofficial.",
  clocks: {
    ps5: {
      year: 2026,
      month: 11,
      day: 19,
      label: "PlayStation 5",
      detail: "Local midnight on November 19, 2026",
      done: "Local midnight on November 19 has passed on this device.",
    },
    xbox: {
      year: 2026,
      month: 11,
      day: 19,
      label: "Xbox Series X|S",
      detail: "Local midnight on November 19, 2026",
      done: "Local midnight on November 19 has passed on this device.",
    },
    xboxCloud: {
      iso: "2026-11-19T01:00:00-05:00",
      label: "Xbox Cloud Gaming",
      detail: "1:00 a.m. ET on November 19, 2026",
      done: "1:00 a.m. ET on November 19 has passed.",
    },
  },
  stats: [
    { label: "Out since", value: "November 19, 2026" },
    { label: "Install size", value: "Up to 212 GB" },
    { label: "Platforms", value: "PS5 and Xbox Series X|S" },
  ],
  unlocks: [
    {
      id: "ps5",
      platform: "PlayStation 5",
      status: "live" as LaunchStatus,
      statusLabel: "Out",
      headline: "Unlocked at midnight local time, by country",
      body: "PlayStation says Grand Theft Auto VI used a rolling midnight launch by country. It began at 12:00 a.m. NZDT in New Zealand and continued as each country reached midnight on November 19, 2026.",
      sourceIds: ["ps-blog-nov-10"],
    },
    {
      id: "xbox-cloud",
      platform: "Xbox Cloud Gaming",
      status: "live" as LaunchStatus,
      statusLabel: "Out",
      headline: "Streaming since 1:00 a.m. ET on November 19",
      body: "Xbox says streaming started at 1:00 a.m. ET on November 19, 2026, on Xbox One and Xbox Series X|S. Streamed play uses Xbox Series S graphics settings. The game is purchased separately. Players in supported markets can buy cloud playtime without a Game Pass subscription. Availability can vary by market and device.",
      sourceIds: ["xbox-wire"],
    },
    {
      id: "xbox-native",
      platform: "Xbox Series X|S, native",
      status: "live" as LaunchStatus,
      statusLabel: "Out",
      headline: "Unlocked at midnight local time on November 19",
      body: "Xbox Series X|S unlocked at midnight local time on November 19, 2026. Rockstar says the game released at midnight local time in all regions on both PlayStation 5 and Xbox Series X|S. Xbox Cloud Gaming streaming started separately at 1:00 a.m. ET. Store listings used one timestamp per store region (for example, the US store used midnight Eastern).",
      sourceIds: ["rockstar-support-release"],
    },
  ],
  preload: {
    title: "Install size",
    status: "live" as LaunchStatus,
    statusLabel: "Published size",
    body: "Rockstar says the game file needs up to 212 GB, depending on the device. That is the figure from the pre-load notice. PlayStation asks PS5 players to clear at least 212 GB. Pre-load for digital pre-orders opened on November 10, 2026, and the game unlocked on November 19.",
    windows: [
      {
        platform: "PlayStation 5",
        when: "Opened November 10, 2026, at midnight local time",
      },
      {
        platform: "Xbox Series X|S",
        when: "Opened November 10, 2026, at 12:00 a.m. GMT",
      },
    ],
    note: "A boxed copy installs after the download code is activated. Rockstar has not published a separate file size for each console, so plan for the full 212 GB.",
    sourceIds: ["rockstar-preload", "rockstar-preload-now", "ps-blog-nov-3"],
  },
  storage: {
    title: "Storage",
    body: "The 825 GB PS5 model does not leave the whole drive for games. Sony says a portion of that SSD is reserved for system software and other functions, so available capacity may vary. Usable space on that model is about 667 GB.",
    tips: [
      {
        title: "PlayStation 5",
        body: "PS5 games run from console storage or an M.2 SSD. They can be stored on a USB drive, but PlayStation says they cannot be played from USB extended storage. Copy the game back to the console SSD or an M.2 SSD to play it.",
      },
      {
        title: "Xbox Series X|S",
        body: "Games made for Xbox Series X|S run from internal storage or a Storage Expansion Card. USB storage can hold them. Move the game back to internal storage or the expansion card to play.",
      },
    ],
    sourceIds: ["ps-m2", "ps-usb", "ps-825", "ps5-usable", "xbox-storage"],
  },
  performance: {
    title: "Platforms and performance",
    items: [
      {
        id: "frame-rate",
        platform: "PlayStation 5 and Xbox Series X|S",
        headline: "Targets 30 frames per second",
        body: "Rockstar says Grand Theft Auto VI has been fully developed from the ground up for the current generation of consoles. It targets 30 frames per second on PlayStation 5 and Xbox Series X|S while pushing both platforms to their absolute limits, and it keeps the density and visual fidelity of Leonida's environments and inhabitants.",
        sourceIds: ["rockstar-preload-now"],
      },
      {
        id: "ps5-features",
        platform: "PlayStation 5",
        headline: "DualSense, Tempest 3D Audio, and the SSD",
        body: "PlayStation says Grand Theft Auto VI on PS5 fully uses the DualSense wireless controller's integrated speakers, haptics, and adaptive triggers across the game. Those features can be adjusted in accessibility settings. All in-game sounds take full advantage of Tempest 3D Audio for highly accurate audio positioning. Load times are improved with the PS5's ultra high-speed SSD, which PlayStation says makes Grand Theft Auto VI play best on PlayStation 5 consoles.",
        sourceIds: ["ps-blog-nov-10"],
      },
      {
        id: "ps5-pro",
        platform: "PlayStation 5 Pro",
        headline: "PSSR and ray-traced shadows",
        body: "PlayStation says PlayStation 5 Pro offers breathtaking visuals, improved clarity through PlayStation Spectral Super Resolution (PSSR), and ray-traced shadows. Rockstar says ray-traced shadows are only available on PlayStation 5 Pro.",
        sourceIds: ["ps-blog-nov-10", "rockstar-preload-now"],
      },
      {
        id: "remote-play",
        platform: "Remote Play",
        headline: "PlayStation and Xbox",
        body: "Rockstar says Grand Theft Auto VI fully supports Remote Play on PlayStation and Xbox.",
        sourceIds: ["rockstar-preload-now"],
      },
    ],
  },
  boxed: {
    title: "Boxed copies",
    body: "Boxed copies contain a download code, not a disc. Rockstar said code-in-box versions for PlayStation 5 and Xbox Series X|S would be at retailers from November 12, 2026. Activate the code and the game installs.",
    sourceIds: ["rockstar-preload", "rockstar-preload-now", "rockstar-support"],
  },
  cloud: {
    title: "Cloud play",
    body: "Xbox Cloud Gaming streams Grand Theft Auto VI on Xbox One and Xbox Series X|S. Xbox One streams it. Series X and Series S can play natively or stream. The game is bought separately from any cloud playtime. A PC release date has not been announced.",
    sourceIds: ["xbox-wire", "rockstar-date"],
  },
  festival: {
    line: "Rockstar Games set Grand Theft Auto VI: The Festival for November 21, 2026 at Mana Wynwood in Miami, presented in partnership with PlayStation, with two stages and artists from the game and the official soundtrack. The pre-sale lottery closed at 4 p.m. ET on November 10.",
    sourceIds: ["rockstar-festival", "rockstar-festival-page"],
  },
  launchWeek: {
    title: "Launch-week events",
    intro:
      "Unofficial notes on two events from the night before the November 19, 2026 launch. Both have taken place. Times are Eastern, Central, and Pacific.",
    events: [
      {
        id: "night-in-vice-city",
        title: "A Night in Vice City",
        status: "live" as LaunchStatus,
        statusLabel: "Held",
        when: "Wednesday, November 18, 2026",
        time: "7 PM ET / 6 PM CT / 4 PM PT",
        place: "Kaseya Center, Miami",
        body: "The Miami Heat hosted the Milwaukee Bucks in an official Rockstar Games collaboration, on ESPN. Confirmed details were a one-night Vice City court, a custom Vice City Cactus Jack Edition uniform in limited quantities at the arena, and special game-night programming.",
        sourceIds: [
          "espn-press-nov-17",
          "heat-game",
          "rockstar-x-heat",
          "heat-official-video",
          "rockstar-x-uniform",
        ],
      },
      {
        id: "youtube-livestream",
        title: "YouTube 24-hour GTA 6 launch livestream",
        status: "live" as LaunchStatus,
        statusLabel: "Held",
        when: "Wednesday, November 18, into Thursday, November 19, 2026",
        time: "Pre-show hosted by RDCWorld at 11 PM ET / 10 PM CT / 8 PM PT on Wednesday, November 18. The 24-hour stream started at 12 AM ET on Thursday, November 19 (11 PM CT / 9 PM PT on Wednesday, November 18).",
        place: "YouTube",
        placeHref: "https://www.youtube.com/live/KY4DWumZffg",
        body: "YouTube and Rockstar Games ran a 24-hour Grand Theft Auto VI launch livestream, with live gameplay, creator podcasts, and on-the-ground coverage from Miami.",
        sourceIds: ["youtube-blog-nov-12", "youtube-live", "rockstar-x-youtube"],
      },
    ],
  },
  faqs: [
    {
      question: "What time does GTA 6 unlock?",
      answer:
        "It already has. On PlayStation 5 and Xbox Series X|S, Grand Theft Auto VI unlocked at midnight local time on November 19, 2026. Rockstar says the game released at midnight local time in all regions on both consoles. PlayStation's launch rolled by country, starting at 12:00 a.m. NZDT in New Zealand. Xbox Cloud Gaming started separately at 1:00 a.m. ET on November 19, 2026.",
    },
    {
      question: "What is the GTA 6 release time?",
      answer:
        "Rockstar set the release for November 19, 2026, on PlayStation 5 and Xbox Series X|S, at midnight local time in all regions. That time has passed. Xbox Cloud Gaming started at 1:00 a.m. ET the same day. Store listings used one timestamp per store region (for example, the US store used midnight Eastern).",
    },
    {
      question: "What is the GTA 6 file size?",
      answer:
        "Rockstar says the game file needs up to 212 GB, depending on the device. That figure is from the pre-load notice. PlayStation asks players to clear at least 212 GB on PS5. The 825 GB PS5 model reserves part of the SSD for system software. Usable space on that model is about 667 GB, and Sony says the available capacity may vary.",
    },
    {
      question: "Can I pre-load GTA 6?",
      answer:
        "The game is out, so install it from the PlayStation Store or the Microsoft Store. Pre-load for digital pre-orders opened on November 10, 2026: midnight local time on PS5, and 12:00 a.m. GMT on Xbox Series X|S. A boxed copy installs after its download code is activated.",
    },
    {
      question: "Does the GTA 6 box include a disc?",
      answer:
        "No. Rockstar says the box contains a download code and does not include a disc. Rockstar said code-in-box copies would be at retailers from November 12, 2026.",
    },
    {
      question: "Can I play GTA 6 on Xbox Cloud Gaming?",
      answer:
        "Yes, on Xbox One and Xbox Series X|S. Streaming started at 1:00 a.m. ET on November 19, 2026. The game is purchased separately. Streamed play uses Xbox Series S graphics settings. Cloud gaming availability can vary by market and device.",
    },
  ],
  sources: [
    {
      id: "rockstar-festival",
      label: "Rockstar Newswire",
      href: "https://www.rockstargames.com/newswire/article/o39o87a435a25a/grand-theft-auto-vi-the-festival",
      published: "November 9, 2026",
    },
    {
      id: "rockstar-festival-page",
      label: "Rockstar Games",
      href: "https://www.rockstargames.com/VI/gtavi-thefestival",
      published: "November 9, 2026",
    },
    {
      id: "espn-press-nov-17",
      label: "ESPN Press Room (Nov 17)",
      href: "https://espnpressroom.com/press-release/espn-nba-full-court-press-celtics-and-jayson-tatum-visit-nuggets-and-nikola-jokic-wednesday/",
      published: "November 17, 2026",
    },
    {
      id: "heat-game",
      label: "Miami Heat",
      href: "https://www.nba.com/heat/game/0022600260-bucks-vs-heat-miami-fl-11-18-2026",
      published: "November 18, 2026",
    },
    {
      id: "rockstar-x-heat",
      label: "Rockstar Games on X",
      href: "https://x.com/RockstarGames/status/2122745929442759040",
      published: "Rockstar Games",
    },
    {
      id: "heat-official-video",
      label: "Official video",
      href: "https://www.youtube.com/watch?v=Rj2Jnbt-5p4",
      published: "YouTube",
    },
    {
      id: "rockstar-x-uniform",
      label: "Rockstar Games on X (uniform)",
      href: "https://x.com/RockstarGames/status/2120881926957637954",
      published: "Rockstar Games",
    },
    {
      id: "youtube-blog-nov-12",
      label: "YouTube Blog (Nov 12)",
      href: "https://blog.youtube/news-and-events/youtube-rockstar-games-gta-vi-launch/",
      published: "November 12, 2026",
    },
    {
      id: "youtube-live",
      label: "YouTube",
      href: "https://www.youtube.com/live/KY4DWumZffg",
      published: "YouTube",
    },
    {
      id: "rockstar-x-youtube",
      label: "Rockstar Games on X",
      href: "https://x.com/RockstarGames/status/2120907315352367600",
      published: "Rockstar Games",
    },
    {
      id: "rockstar-date",
      label: "Rockstar Newswire",
      href: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
      published: "November 6, 2025",
    },
    {
      id: "rockstar-preload",
      label: "Rockstar Newswire (Nov 3)",
      href: "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10",
      published: "November 3, 2026",
    },
    {
      id: "rockstar-preload-now",
      label: "Rockstar Newswire (Nov 10)",
      href: "https://www.rockstargames.com/newswire/article/89834o94713o21/pre-load-grand-theft-auto-vi-now",
      published: "November 10, 2026",
    },
    {
      id: "rockstar-support-release",
      label: "Rockstar Support",
      href: "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s",
      published: "November 3, 2026",
    },
    {
      id: "rockstar-support",
      label: "Rockstar Support (editions)",
      href: "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
      published: "Rockstar Support",
    },
    {
      id: "ps-blog-nov-3",
      label: "PlayStation Blog (Nov 3)",
      href: "https://blog.playstation.com/2026/11/03/grand-theft-auto-vi-pre-download-begins-november-10/",
      published: "November 3, 2026",
    },
    {
      id: "ps-blog-nov-10",
      label: "PlayStation Blog (Nov 10)",
      href: "https://blog.playstation.com/2026/11/10/pre-load-grand-theft-auto-vi-on-ps5-starting-today/",
      published: "November 10, 2026",
    },
    {
      id: "xbox-wire",
      label: "Xbox Wire",
      href: "https://news.xbox.com/en-us/2026/11/10/grand-theft-auto-6-comes-to-xbox-cloud-gaming-november-19/",
      published: "November 10, 2026",
    },
    {
      id: "ps-usb",
      label: "PlayStation Support (USB)",
      href: "https://www.playstation.com/en-us/support/hardware/ps5-extended-storage/",
      published: "PlayStation Support",
    },
    {
      id: "ps-m2",
      label: "PlayStation Support (M.2)",
      href: "https://www.playstation.com/en-us/support/hardware/ps5-install-m2-ssd/",
      published: "PlayStation Support",
    },
    {
      id: "ps-825",
      label: "PlayStation Direct",
      href: "https://direct.playstation.com/en-us/buy-consoles/playstation5-digital-edition-console-825-gb",
      published: "PlayStation Direct",
    },
    {
      id: "ps5-usable",
      label: "Polygon",
      href: "https://www.polygon.com/2020/11/6/21552741/ps5-storage-space-ssd-hard-drive-size/",
      published: "November 6, 2020",
    },
    {
      id: "xbox-storage",
      label: "Xbox Support",
      href: "https://support.xbox.com/en-US/help/hardware-network/storage/manage-storage",
      published: "Xbox Support",
    },
  ] satisfies LaunchSource[],
} as const;

export function launchSources(ids: readonly string[]) {
  return ids.map((id) => {
    const source = gta6Launch.sources.find((item) => item.id === id);

    if (!source) {
      throw new Error(`Unknown GTA 6 launch source: ${id}`);
    }

    return source;
  });
}

/** Tile title for The Festival. November 21, 2026 is the event day in Miami. */
export function festivalTile(now = new Date()) {
  const key = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  if (key === "2026-11-21") {
    return { title: "The Festival is today", line: "Mana Wynwood, Miami" };
  }

  if (key > "2026-11-21") {
    return { title: "The Festival", line: "November 21 at Mana Wynwood" };
  }

  return { title: "The Festival, Nov 21", line: "Mana Wynwood, Miami" };
}
