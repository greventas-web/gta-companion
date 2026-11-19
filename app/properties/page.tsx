import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { properties } from "@/data/properties";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  'GTA 6 properties',
  'Unofficial GTA 6 properties: garages and hideouts, with map links.'
);

const items = properties;
const groupNames = ["all"];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => "all" === name) }))
  .filter((group) => group.list.length > 0);

export default function PropertiesPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 properties',
          "/properties",
          items.map((item) => ({ name: item.name, url: `/properties/${item.slug}` }))
        )}
      />
      <SimpleHero title='Properties' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : undefined} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/properties/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.type}
              line={item.area}
              mapHref={staticMapHref("property", item.slug) ?? undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <QuickGuideGrid guides={quickGuideCards(["buy-a-house", "fix-railing", "register-car", "feng-shui", "pet-snake", "skip-time", "just-a-scratch"])} />
    </PageShell>
  );
}
