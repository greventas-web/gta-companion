import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { pickHubs } from "@/lib/simple/hubs";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuides } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  "GTA 6 guides",
  "Unofficial GTA 6 guides: missions, money, weapons, collectibles, cheats and the map."
);

const hubs = pickHubs([
  "missions",
  "money",
  "weapons",
  "vehicles",
  "cheats",
  "collectibles",
  "whereToFind",
  "shootingRanges",
  "trophies",
  "map",
]);

export default function GuidesPage() {
  return (
    <PageShell>
      <SimpleHero title="Guides" />
      <QuickGuideGrid guides={quickGuides} />
      <CardGrid>
        {hubs.map((hub) => (
          <SimpleCard key={hub.href} href={hub.href} title={hub.title} image={hub.image} line={hub.line} kind={hub.kind} />
        ))}
      </CardGrid>
    </PageShell>
  );
}
