import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import QuickGuidePage from "@/components/guides/QuickGuidePage";
import { guides } from "@/data/guides";
import { launchMetadata } from "@/lib/launch";
import { guideTargets } from "@/lib/simple/guideTargets";
import { findQuickGuide, quickGuides } from "@/src/data/launch/quick-guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...guides.map((guide) => ({ slug: guide.slug })), ...quickGuides.map((guide) => ({ slug: guide.slug }))];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = findQuickGuide(slug);
  if (!guide) return { robots: { index: false } };
  return {
    ...launchMetadata(guide.title, guide.description),
    keywords: guide.keywords,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = findQuickGuide(slug);
  if (guide) return <QuickGuidePage guide={guide} />;
  const target = guideTargets[slug];
  if (!target) notFound();
  permanentRedirect(target);
}
