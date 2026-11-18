import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import SpoilerReveal from "@/components/SpoilerReveal";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";
import { findTrophy, trophies, trophyPlatformLabel } from "@/src/data/trophies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return trophies.map((trophy) => ({ slug: trophy.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trophy = findTrophy(slug);
  if (!trophy) return {};
  return detailMetadata(`${trophy.name} trophy`, trophy.description);
}

export default async function TrophyPage({ params }: Props) {
  const { slug } = await params;
  const trophy = findTrophy(slug);
  if (!trophy) notFound();
  const others = trophies.filter((item) => item.slug !== trophy.slug && item.psGrade === trophy.psGrade).slice(0, 4);
  const tip = shortText(trophy.tips, 2);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: "Trophies", href: "/trophies" }, { label: trophy.name }]}
        eyebrow={trophy.psGrade ? `${trophy.psGrade} trophy` : "Trophy"}
        title={trophy.name}
        summary={trophy.description}
        facts={[
          { label: "Platform", value: trophyPlatformLabel(trophy) },
          { label: "Missable", value: trophy.missable ? "Yes" : "" },
          { label: "Tip", value: tip && !trophy.tipsSpoiler ? tip : "" },
        ]}
        mapPin={trophy.mapPinId}
        trackId={`trophy:${trophy.slug}`}
        related={others.map((item) => ({ href: `/trophies/${item.slug}`, title: item.name, small: true }))}
      >
        {tip && trophy.tipsSpoiler ? <SpoilerReveal>{tip}</SpoilerReveal> : null}
      </SimpleDetail>
    </PageShell>
  );
}
