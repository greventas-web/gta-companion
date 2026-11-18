import type { Metadata } from "next";

import HomePageV2 from "@/components/home/v2/HomePageV2";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";

// Re-render every 5 minutes so the launch-state copy flips on its own.
export const revalidate = 300;

const title = "GTA 6 map, missions, trophies, and vehicles";
const description =
  "Unofficial GTA 6 map of Leonida, plus a spoiler-safe missions list, trophies, vehicles, Ammu-Nation locations, and collectibles. " +
  UNOFFICIAL_DISCLAIMER;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "GTA 6 map",
    "GTA 6 interactive map",
    "GTA 6 missions list",
    "GTA 6 trophies",
    "GTA 6 vehicles",
    "GTA 6 Ammu-Nation",
    "GTA 6 collectibles",
    "GTA 6 cheats",
    "Grand Theft Auto VI",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/og-night.jpg",
        width: 1200,
        height: 630,
        alt: "GTA Companion — unofficial GTA 6 map, missions, trophies, and vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo/og-night.jpg"],
  },
};

export default function Page() {
  return <HomePageV2 />;
}
