import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import SpoilerReveal from "@/components/SpoilerReveal";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";
import { findTrophy, trophies, trophyPlatformLabel } from "@/src/data/trophies";

type Props = { params: Promise<{ slug: string }> };

/** Guide pages that help with a trophy. */
const TROPHY_GUIDES: Record<string, { href: string; label: string }[]> = {
  "one-last-thing": [{ href: "/challenges", label: "All 80 challenges" }],
  "a-long-road": [{ href: "/guides/100-percent-completion", label: "Full 100% checklist" }],
  "stick-fiddler": [{ href: "/collectibles/video-games", label: "All 4 video games" }],
  "you-wainker": [{ href: "/collectibles/waink-locations", label: "WAiNK locations: landmarks, sculptures, curiosities" }, { href: "/guides/waink-scans", label: "How to scan" }],
  "earn-cash-not-kudos": [{ href: "/collectibles/unique-races", label: "All 40 unique races" }],
  "little-boxes": [{ href: "/where-to-find/garages", label: "All 8 garages for sale" }, { href: "/properties", label: "Properties" }],
  "positive-mental-attitude": [{ href: "/collectibles/meditation-spots", label: "All 10 meditation spots" }],
  "top-fun": [{ href: "/collectibles/top-fun-drone-races", label: "All 14 drone race spots" }],
  "strangers-freaks": [{ href: "/missions#strangers", label: "Strangers & Freaks side missions" }],
  "cunning-stunts": [{ href: "/collectibles/stunt-jumps", label: "Stunt jumps" }],
  "the-shootist": [{ href: "/shooting-ranges", label: "Shooting ranges" }],
  "dont-touch-my-deck": [{ href: "/collectibles/card-sets", label: "Collectible card sets" }],
  "dime-on-the-dollar": [{ href: "/activities/laundering-marked-bills", label: "Laundering marked bills" }, { href: "/where-to-find/fences", label: "Fences" }],
};

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
        links={TROPHY_GUIDES[trophy.slug]}
        trackId={`trophy:${trophy.slug}`}
        related={others.map((item) => ({ href: `/trophies/${item.slug}`, title: item.name, small: true }))}
      >
        {tip && trophy.tipsSpoiler ? <SpoilerReveal>{tip}</SpoilerReveal> : null}
      </SimpleDetail>
    </PageShell>
  );
}
