import type { Metadata } from "next";

import { LaunchDetail } from "@/components/launch/LaunchSection";
import { findLaunchEntry, launchMetadata, launchStaticParams } from "@/lib/launch";
import { fastestCars } from "@/src/data/launch/fastest-cars";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return launchStaticParams(fastestCars);
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findLaunchEntry(fastestCars, slug);

  return launchMetadata(entry.title, entry.summary);
}

export default async function FastestCarPage({ params }: Props) {
  const { slug } = await params;
  const entry = findLaunchEntry(fastestCars, slug);

  return (
    <LaunchDetail
      sectionLabel="Fastest cars"
      sectionHref="/fastest-cars"
      entry={entry}
    />
  );
}
