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
  lastUpdated: "November 12, 2026",
  title: "GTA 6 Unlock Time, Release Time, and Countdown",
  description:
    "GTA 6 unlock time, release time, file size, and pre-load for November 19, 2026, plus a live countdown. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.",
  keywords: [
    "GTA 6 unlock time",
    "GTA 6 release time",
    "GTA 6 file size",
    "GTA 6 pre-load",
    "GTA 6 preload",
    "GTA 6 countdown",
    "Grand Theft Auto VI unlock time",
    "Grand Theft Auto VI release time",
  ],
  h1: "GTA 6 unlock time",
  lede: "A live countdown to November 19, 2026, with the unlock times, file size, and pre-load details published by Rockstar, PlayStation, and Xbox. Everything you need for GTA 6 launch day, in one place.",
  clocks: {
    ps5: {
      year: 2026,
      month: 11,
      day: 19,
      label: "PlayStation 5",
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
    { label: "Launch date", value: "November 19, 2026" },
    { label: "File size", value: "Up to 212 GB" },
    { label: "Pre-load", value: "Live now" },
  ],
  unlocks: [
    {
      id: "ps5",
      platform: "PlayStation 5",
      status: "confirmed" as LaunchStatus,
      statusLabel: "Confirmed",
      headline: "Midnight local time, by country",
      body: "PlayStation says Grand Theft Auto VI uses a rolling midnight launch by country. It begins at 12:00 a.m. NZDT in New Zealand and continues as each country reaches midnight on November 19, 2026. The countdown above reaches zero at midnight on that date in this device's time zone, which matches that schedule when the device zone matches the country on the PlayStation account.",
      sourceIds: ["ps-blog-nov-10"],
    },
    {
      id: "xbox-cloud",
      platform: "Xbox Cloud Gaming",
      status: "confirmed" as LaunchStatus,
      statusLabel: "Confirmed",
      headline: "1:00 a.m. ET on November 19",
      body: "Xbox says streaming starts at 1:00 a.m. ET on November 19, 2026, on Xbox One and Xbox Series X|S. Streamed play uses Xbox Series S graphics settings. The game must be purchased separately. Starting November 11, 2026, players in supported markets can buy cloud playtime without a Game Pass subscription. Availability can vary by market and device.",
      sourceIds: ["xbox-wire"],
    },
    {
      id: "xbox-native",
      platform: "Xbox Series X|S, native",
      status: "pending" as LaunchStatus,
      statusLabel: "To be confirmed",
      headline: "Console unlock time is to be confirmed",
      body: "Xbox says Series X and Series S play Grand Theft Auto VI natively, and that pre-install is available now. Xbox Wire publishes 1:00 a.m. ET for Cloud Gaming only. A native console unlock time has not been confirmed.",
      sourceIds: ["xbox-wire"],
    },
  ],
  preload: {
    title: "Pre-load and file size",
    status: "live" as LaunchStatus,
    statusLabel: "Live for digital pre-orders",
    body: "Pre-load is live for digital pre-orders on PlayStation 5 and Xbox Series X|S. Rockstar says the pre-load file requires up to 212 GB, depending on the device. PlayStation separately asks PS5 players to clear at least 212 GB before downloading.",
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
    note: "A code-in-box copy can start pre-loading after the code is activated. Rockstar has not published a separate file size for each console, so plan for the full 212 GB.",
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
        body: "Rockstar says Grand Theft Auto VI will fully support Remote Play on PlayStation and Xbox.",
        sourceIds: ["rockstar-preload-now"],
      },
    ],
  },
  boxed: {
    title: "Boxed copies",
    body: "Boxed copies contain a download code, not a disc. Rockstar says code-in-box versions for PlayStation 5 and Xbox Series X|S should be available from retailers beginning November 12, 2026. The code can be activated as soon as it arrives, including for pre-load.",
    sourceIds: ["rockstar-preload", "rockstar-preload-now", "rockstar-support"],
  },
  cloud: {
    title: "Cloud play",
    body: "Xbox Cloud Gaming plays Grand Theft Auto VI on Xbox One and Xbox Series X|S. Xbox One streams it. Series X and Series S can play natively or stream. The game is bought separately from any cloud playtime. A PC release date has not been announced.",
    sourceIds: ["xbox-wire", "rockstar-date"],
  },
  faqs: [
    {
      question: "What time does GTA 6 unlock?",
      answer:
        "On PlayStation 5, Grand Theft Auto VI unlocks at local midnight on November 19, 2026, in a rolling launch by country that starts at 12:00 a.m. NZDT in New Zealand. Xbox Cloud Gaming starts at 1:00 a.m. ET on November 19, 2026. Xbox has not confirmed a native Xbox Series X|S console unlock time. That time is to be confirmed.",
    },
    {
      question: "What is the GTA 6 release time?",
      answer:
        "Rockstar set the release date as November 19, 2026, on PlayStation 5 and Xbox Series X|S. PlayStation's release time is local midnight by country. Xbox's published release time is 1:00 a.m. ET for Xbox Cloud Gaming. The native Xbox console clock is to be confirmed.",
    },
    {
      question: "What is the GTA 6 file size?",
      answer:
        "Rockstar says the pre-load requires up to 212 GB, depending on the device. PlayStation asks players to clear at least 212 GB on PS5. The 825 GB PS5 model reserves part of the SSD for system software. Usable space on that model is about 667 GB, and Sony says the available capacity may vary.",
    },
    {
      question: "Can I pre-load GTA 6?",
      answer:
        "Yes. Pre-load is live for digital pre-orders on PlayStation 5 and Xbox Series X|S. PS5 pre-load opened at local midnight on November 10, 2026. Xbox Series X|S pre-load opened at 12:00 a.m. GMT on November 10, 2026. A boxed copy pre-loads after its download code is activated.",
    },
    {
      question: "Does the GTA 6 box include a disc?",
      answer:
        "No. Rockstar says the box contains a download code and does not include a disc. Code-in-box copies should be available from retailers beginning November 12, 2026.",
    },
    {
      question: "Can I play GTA 6 on Xbox Cloud Gaming?",
      answer:
        "Yes, on Xbox One and Xbox Series X|S, starting at 1:00 a.m. ET on November 19, 2026. The game must be purchased separately. Streamed play uses Xbox Series S graphics settings. Cloud gaming availability can vary by market and device.",
    },
    {
      question: "Where does the GTA 6 countdown end?",
      answer:
        "The PlayStation 5 countdown on this page ends at midnight on November 19, 2026, in the time zone of the device you are using. The Xbox Cloud Gaming countdown ends at 1:00 a.m. Eastern Time on the same date. The native Xbox Series X|S unlock time is to be confirmed, so this page does not count down to a console clock for it.",
    },
  ],
  sources: [
    {
      id: "rockstar-date",
      label: "Rockstar Newswire — Grand Theft Auto VI is now set to launch November 19, 2026",
      href: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
      published: "November 6, 2025",
    },
    {
      id: "rockstar-preload",
      label: "Rockstar Newswire — Grand Theft Auto VI pre-load begins on November 10",
      href: "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10",
      published: "November 3, 2026",
    },
    {
      id: "rockstar-preload-now",
      label: "Rockstar Newswire — Pre-load Grand Theft Auto VI now",
      href: "https://www.rockstargames.com/newswire/article/89834o94713o21/pre-load-grand-theft-auto-vi-now",
      published: "November 10, 2026",
    },
    {
      id: "rockstar-support",
      label: "Rockstar Support — Grand Theft Auto VI platforms, editions, and versions",
      href: "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
      published: "Rockstar Support",
    },
    {
      id: "ps-blog-nov-3",
      label: "PlayStation Blog — Grand Theft Auto VI pre-download begins November 10",
      href: "https://blog.playstation.com/2026/11/03/grand-theft-auto-vi-pre-download-begins-november-10/",
      published: "November 3, 2026",
    },
    {
      id: "ps-blog-nov-10",
      label: "PlayStation Blog — Pre-load Grand Theft Auto VI on PS5 starting today",
      href: "https://blog.playstation.com/2026/11/10/pre-load-grand-theft-auto-vi-on-ps5-starting-today/",
      published: "November 10, 2026",
    },
    {
      id: "xbox-wire",
      label: "Xbox Wire — Grand Theft Auto VI on Xbox Cloud Gaming, November 19",
      href: "https://news.xbox.com/en-us/2026/11/10/grand-theft-auto-6-comes-to-xbox-cloud-gaming-november-19/",
      published: "November 10, 2026",
    },
    {
      id: "ps-usb",
      label: "PlayStation Support — USB extended storage on PS5",
      href: "https://www.playstation.com/en-us/support/hardware/ps5-extended-storage/",
      published: "PlayStation Support",
    },
    {
      id: "ps-m2",
      label: "PlayStation Support — How to add an M.2 SSD to a PS5",
      href: "https://www.playstation.com/en-us/support/hardware/ps5-install-m2-ssd/",
      published: "PlayStation Support",
    },
    {
      id: "ps-825",
      label: "PlayStation — 825 GB console listing",
      href: "https://direct.playstation.com/en-us/buy-consoles/playstation5-digital-edition-console-825-gb",
      published: "PlayStation Direct",
    },
    {
      id: "ps5-usable",
      label: "Polygon — PS5 825 GB model usable space",
      href: "https://www.polygon.com/2020/11/6/21552741/ps5-storage-space-ssd-hard-drive-size/",
      published: "November 6, 2020",
    },
    {
      id: "xbox-storage",
      label: "Xbox Support — Manage storage",
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
