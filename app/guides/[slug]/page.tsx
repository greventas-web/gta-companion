import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { guides } from "@/data/guides";
import { guideTargets } from "@/lib/simple/guideTargets";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export const metadata: Metadata = { robots: { index: false } };

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const target = guideTargets[slug];
  if (!target) notFound();
  permanentRedirect(target);
}
