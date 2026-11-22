import type { Metadata } from "next";
import { Suspense } from "react";
import MapLoader, { MapLoading } from "@/components/map/community/MapLoader";
import { getStaticPins } from "@/lib/map/catalog";
import WhereToFindLinks from "@/components/where-to-find/WhereToFindLinks";
import { SITE } from "@/lib/site";

const title = "GTA 6 Map: Confirmed Leonida Locations";
const description =
  "Unofficial interactive Leonida map with confirmed locations. Unconfirmed spots stay off the map. Not affiliated with Rockstar Games.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/map" },
  keywords: [
    "GTA 6 map",
    "GTA 6 interactive map",
    "Leonida map",
    "Vice City map",
    "GTA VI map",
  ],
  openGraph: {
    title,
    description,
    url: "/map",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/og-night.jpg",
        width: 1200,
        height: 630,
        alt: "Unofficial interactive Leonida map with confirmed locations",
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

export default function MapPage() {
  const curated = getStaticPins();

  return (
    <main className="overflow-x-clip bg-[#07060c] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-3 pb-10 pt-28 sm:px-6 sm:pt-32">
        <div className="flex min-w-0 flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300">
              Unofficial
            </p>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Leonida map</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
              Confirmed locations. Unconfirmed spots stay off the map until they are checked.
            </p>
          </div>
          <p className="max-w-xl min-w-0 text-xs leading-5 text-zinc-400">
            Map tiles and landmarks by{" "}
            <a className="text-violet-200 underline" href="https://gtadb.org">
              gtadb.org and all contributors
            </a>{" "}
            (CC BY 4.0).
          </p>
        </div>

        <div className="relative mt-3 h-[calc(100dvh-9.5rem)] min-h-[560px] w-full overflow-hidden rounded-[28px] border border-violet-400/20">
          <Suspense fallback={<MapLoading />}>
            <MapLoader curated={curated} />
          </Suspense>
        </div>

        <WhereToFindLinks className="mt-6" title="Where to find" />
      </div>
    </main>
  );
}
