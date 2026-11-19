import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { stationPages } from "@/lib/simple/radio";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  "GTA 6 radio stations",
  "Unofficial GTA 6 radio stations: the six named stations and their hosts, the soundtrack album, and the score by Justice."
);

export default function RadioPage() {
  return (
    <PageShell>
      <SimpleHero title="Radio" />
      <CardGrid heading="Stations" count={stationPages.length}>
        {stationPages.map((station) => (
          <SimpleCard key={station.slug} href={`/radio/${station.slug}`} title={station.name} eyebrow={station.hosts} line={station.summary} />
        ))}
      </CardGrid>
      <QuickFacts
        heading="Music"
        facts={[
          { label: "The Album", value: "34 tracks, Nov 19, 2026" },
          { label: "Score by Justice", value: "30 tracks, Dec 11, 2026" },
        ]}
      />
      <CardGrid heading="More">
        <SimpleCard href="/phone/podcasts" title="Podcasts" small />
        <SimpleCard href="/phone/headphones" title="Headphones" small />
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["change-radio-station"])} />
    </PageShell>
  );
}
