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
  "GTA 6 properties – garages, prices and hideouts",
  "Unofficial GTA 6 properties: all 8 garages for sale with prices, story and edition garages, and the hideouts, with map links."
);

const items = properties;
const groupDefs: { name: string; match: (type: string) => boolean }[] = [
  { name: "Garages for sale", match: (type) => type === "Garage for sale" },
  { name: "Story and edition garages", match: (type) => type === "Story garage" || type === "Garage" },
  { name: "Hideouts", match: (type) => type === "Hideout" },
];
const groups = groupDefs
  .map((group) => ({ name: group.name, list: items.filter((item) => group.match(item.type)) }))
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
              line={item.area.toLowerCase().includes(item.region.toLowerCase()) ? item.area : `${item.area} · ${item.region}`}
              price={item.price}
              mapHref={staticMapHref("property", item.slug) ?? (item.map.kind === "area" ? `/map?pin=${encodeURIComponent(item.map.pinId)}` : undefined)}
              small
            />
          ))}
        </CardGrid>
      ))}
      <QuickGuideGrid guides={quickGuideCards(["buy-a-house", "fix-railing", "register-car", "feng-shui", "pet-snake", "skip-time", "just-a-scratch"])} />
    </PageShell>
  );
}
