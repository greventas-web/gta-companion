import type { Metadata } from "next";

import { LaunchDetail } from "@/components/launch/LaunchSection";
import { findLaunchEntry, launchMetadata, launchStaticParams } from "@/lib/launch";
import { mapLocations } from "@/src/data/launch/map-locations";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return launchStaticParams(mapLocations);
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findLaunchEntry(mapLocations, slug);

  return launchMetadata(entry.title, entry.summary);
}

export default async function MapLocationPage({ params }: Props) {
  const { slug } = await params;
  const entry = findLaunchEntry(mapLocations, slug);

  return (
    <LaunchDetail
      sectionLabel="Map locations"
      sectionHref="/map-locations"
      entry={entry}
    />
  );
}
