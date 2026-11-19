import type { Metadata } from "next";

import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero, TrackProgress } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { quickGuideCards } from "@/src/data/launch/quick-guides";
import { TROPHY_COUNTS, trophies } from "@/src/data/trophies";
import type { TrophyGrade } from "@/types/trophy";

const title = "GTA 6 Trophies List";
const description = `Unofficial GTA 6 trophies list: ${TROPHY_COUNTS.total} trophies and achievements, with the platinum. Tick them off as you go. Hidden story trophies stay hidden.`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: ["GTA 6 trophies list", "GTA 6 trophy list", "GTA 6 achievements", "GTA 6 platinum", "GTA VI trophies"],
};

const GRADES: { grade: TrophyGrade; label: string }[] = [
  { grade: "platinum", label: "Platinum" },
  { grade: "gold", label: "Gold" },
  { grade: "silver", label: "Silver" },
  { grade: "bronze", label: "Bronze" },
];

const trackId = (slug: string) => `trophy:${slug}`;

const groups = [
  ...GRADES.map(({ grade, label }) => ({ label, list: trophies.filter((trophy) => trophy.psGrade === grade) })),
  { label: "Other", list: trophies.filter((trophy) => !trophy.psGrade) },
].filter((group) => group.list.length > 0);

export default function TrophiesPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 trophies list",
          "/trophies",
          trophies.map((trophy) => ({ name: trophy.name, url: `/trophies/${trophy.slug}` }))
        )}
      />
      <SimpleHero title="Trophies">
        <TrackProgress ids={trophies.map((trophy) => trackId(trophy.slug))} />
      </SimpleHero>
      <QuickFacts
        facts={[
          { label: "Total", value: `${TROPHY_COUNTS.total}` },
          { label: "Shown here", value: `${trophies.length}` },
          { label: "Hidden (spoilers)", value: `${TROPHY_COUNTS.hidden}` },
          { label: "Missable", value: `${trophies.filter((trophy) => trophy.missable).length}` },
        ]}
      />
      {groups.map((group) => (
        <CardGrid
          key={group.label}
          heading={group.label}
          count={group.list.length}
          trackIds={group.list.map((trophy) => trackId(trophy.slug))}
          dense
        >
          {group.list.map((trophy) => (
            <SimpleCard
              key={trophy.slug}
              href={`/trophies/${trophy.slug}`}
              title={trophy.name}
              line={trophy.description}
              chips={trophy.missable ? [{ value: "Missable" }] : undefined}
              trackId={trackId(trophy.slug)}
              mapPin={trophy.mapPinId}
              small
            />
          ))}
        </CardGrid>
      ))}
      <QuickGuideGrid guides={quickGuideCards(["trophies", "stunt-jumps", "flamingos", "shooting-ranges", "collectible-cards", "waink-scans"])} />
    </PageShell>
  );
}
