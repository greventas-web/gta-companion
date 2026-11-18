import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { stores } from "@/data/stores";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  'GTA 6 stores',
  'Unofficial GTA 6 stores, salons, tattoo parlors and mod shops, with pictures and map links.'
);

const items = stores;
const groupNames = [...new Set(stores.map((item) => item.typeLabel))];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => item.typeLabel === name) }))
  .filter((group) => group.list.length > 0);

export default function StoresPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 stores',
          "/stores",
          items.map((item) => ({ name: item.name, url: `/stores/${item.slug}` }))
        )}
      />
      <SimpleHero title='Stores' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : undefined} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/stores/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.typeLabel}
              line={item.area}
              mapHref={staticMapHref("store", item.slug) ?? undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
    </PageShell>
  );
}
