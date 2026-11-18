import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { ExtraGrids, extraHref } from "@/components/simple/Extras";
import { extras } from "@/src/data/launch/expansion";
import { brands } from "@/data/brands";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  'GTA 6 brands',
  'Unofficial GTA 6 brands seen in Leonida, with pictures.'
);

const items = brands;
const groupNames = ["all"];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => "all" === name) }))
  .filter((group) => group.list.length > 0);

export default function BrandsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 brands',
          "/brands",
          [...items.map((item) => ({ name: item.name, url: `/brands/${item.slug}` })), ...extras.brands.map((entry) => ({ name: entry.name, url: extraHref("brands", entry) }))]
        )}
      />
      <SimpleHero title='Brands' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : "Featured"} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/brands/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.category}
              line={undefined}
              mapHref={undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <ExtraGrids category="brands" />
    </PageShell>
  );
}
