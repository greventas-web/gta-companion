import type { Metadata } from "next";
import { Suspense } from "react";
import MapLoader, { MapLoading } from "@/components/map/community/MapLoader";
import { getStaticPins } from "@/lib/map/catalog";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leonida map",
  description:
    "Unofficial GTA 6 community map of Leonida. Pan the gtadb.org base map, filter landmarks, and open places from the GTA Companion database. Not affiliated with Rockstar Games.",
  alternates: { canonical: "/map" },
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
          </div>
          <p className="max-w-xl min-w-0 text-xs leading-5 text-zinc-400">
            {SITE.name} map for Grand Theft Auto VI. {UNOFFICIAL_DISCLAIMER} Map tiles and
            landmarks by{" "}
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
      </div>
    </main>
  );
}
