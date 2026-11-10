import type { Metadata } from "next";
import Link from "next/link";

import { ConfirmedEntries, LaunchPage } from "@/components/launch/LaunchBoard";
import { mapLocations, mapSection, mapTopics } from "@/src/data/launch/map";

export const metadata: Metadata = {
  title: mapSection.seoTitle,
  description: mapSection.seoDescription,
};

export default function MapPage() {
  return (
    <LaunchPage
      title={mapSection.title}
      description={mapSection.heroDescription}
      topics={mapTopics}
    >
      <ConfirmedEntries
        entries={mapLocations.map((place) => ({
          id: place.id,
          title: place.area ? `${place.name}, ${place.area}` : place.name,
          status: place.status,
          detail: place.note,
          href: place.href,
        }))}
        empty="No map pins yet. A place is added here only after it is confirmed."
      />

      <p className="mt-8 leading-8 text-zinc-400">
        <Link href="/locations" className="font-semibold text-pink-400 hover:text-pink-300">
          Open the location database
        </Link>{" "}
        for places already written up on this site.
      </p>
    </LaunchPage>
  );
}
