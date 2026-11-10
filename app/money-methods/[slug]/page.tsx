import type { Metadata } from "next";

import { LaunchDetail } from "@/components/launch/LaunchSection";
import { findLaunchEntry, launchMetadata, launchStaticParams } from "@/lib/launch";
import { moneyMethods } from "@/src/data/launch/money-methods";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return launchStaticParams(moneyMethods);
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findLaunchEntry(moneyMethods, slug);

  return launchMetadata(entry.title, entry.summary);
}

export default async function MoneyMethodPage({ params }: Props) {
  const { slug } = await params;
  const entry = findLaunchEntry(moneyMethods, slug);

  return (
    <LaunchDetail
      sectionLabel="Money methods"
      sectionHref="/money-methods"
      entry={entry}
    />
  );
}
