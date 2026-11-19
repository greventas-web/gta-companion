import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { ExtraGrids, extraHref } from "@/components/simple/Extras";
import { extras } from "@/src/data/launch/expansion";
import { animals } from "@/data/animals";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  'GTA 6 animals',
  'Unofficial GTA 6 animals in Leonida: gators, flamingos, dolphins, pelicans and more, with pictures and map links.'
);

const items = animals;
const groupNames = ["all"];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => "all" === name) }))
  .filter((group) => group.list.length > 0);

export default function AnimalsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 animals',
          "/animals",
          [...items.map((item) => ({ name: item.name, url: `/animals/${item.slug}` })), ...extras.animals.map((entry) => ({ name: entry.name, url: extraHref("animals", entry) }))]
        )}
      />
      <SimpleHero title='Animals' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : "Featured"} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/animals/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.category}
              line={(item.habitat && !/not published/i.test(item.habitat) ? item.habitat : undefined)}
              mapHref={staticMapHref("animal", item.slug) ?? undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <ExtraGrids category="animals" />
      <QuickGuideGrid guides={quickGuideCards(["hunting", "fishing", "pet-snake", "island-dreams", "swimming", "waink-scans", "bigfoot"])} />
    </PageShell>
  );
}
