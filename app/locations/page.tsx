import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { ExtraGrids, extraHref } from "@/components/simple/Extras";
import { extras } from "@/src/data/launch/expansion";
import { locations } from "@/data/locations";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  'GTA 6 locations',
  'Unofficial GTA 6 locations: Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga, with pictures and map links.'
);

const items = locations;
const groupNames = ["all"];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => "all" === name) }))
  .filter((group) => group.list.length > 0);

export default function LocationsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 locations',
          "/locations",
          [...items.map((item) => ({ name: item.name, url: `/locations/${item.slug}` })), ...extras.locations.map((entry) => ({ name: entry.name, url: extraHref("locations", entry) }))]
        )}
      />
      <SimpleHero title='Locations' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : "Regions"} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/locations/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.type}
              line={item.region}
              mapHref={staticMapHref("location", item.slug) ?? undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <ExtraGrids category="locations" />
      <QuickGuideGrid guides={quickGuideCards(["where-is-it-based", "unlock-map", "minimap", "weather", "bigfoot", "ufo", "easter-eggs", "kraken", "backrooms", "hyde-island", "marbelle-hotel", "ghost-ship", "jet-ski-dog", "freddie-gibbs", "dexter-apartment", "crab-lab", "missing-tourists", "military-base", "public-transport", "meditation"])} />
    </PageShell>
  );
}
