import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { ExtraGrids, extraHref } from "@/components/simple/Extras";
import { extras } from "@/src/data/launch/expansion";
import { clothing } from "@/data/clothing";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  'GTA 6 clothing',
  'Unofficial GTA 6 clothing, hairstyles and tattoos for Jason and Lucia, with pictures.'
);

const items = clothing;
const groupNames = [...new Set(clothing.map((item) => item.group))];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => item.group === name) }))
  .filter((group) => group.list.length > 0);

export default function ClothingPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 clothing',
          "/clothing",
          [...items.map((item) => ({ name: item.name, url: `/clothing/${item.slug}` })), ...extras.clothing.map((entry) => ({ name: entry.name, url: extraHref("clothing", entry) }))]
        )}
      />
      <SimpleHero title='Clothing' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : "Editions and looks"} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/clothing/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.kindLabel}
              line={item.appliesTo === "Not published" ? undefined : item.appliesTo}
              mapHref={undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <ExtraGrids category="clothing" />
      <QuickGuideGrid guides={quickGuideCards(["change-clothes", "mask"])} />
    </PageShell>
  );
}
