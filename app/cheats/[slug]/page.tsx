import type { Metadata } from "next";

import { LaunchDetail } from "@/components/launch/LaunchSection";
import { findLaunchEntry, launchMetadata, launchStaticParams } from "@/lib/launch";
import { cheats } from "@/src/data/launch/cheats";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return launchStaticParams(cheats);
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findLaunchEntry(cheats, slug);

  return launchMetadata(entry.title, entry.summary);
}

export default async function CheatPage({ params }: Props) {
  const { slug } = await params;
  const entry = findLaunchEntry(cheats, slug);

  return (
    <LaunchDetail sectionLabel="Cheats" sectionHref="/cheats" entry={entry} />
  );
}
