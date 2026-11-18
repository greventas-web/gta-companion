import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { manufacturers } from "@/data/manufacturers";
import { manufacturerListImage } from "@/lib/media/catalog";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  'GTA 6 manufacturers',
  'Unofficial GTA 6 vehicle makers, with their cars and pictures.'
);

const items = manufacturers;
const groupNames = ["all"];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => "all" === name) }))
  .filter((group) => group.list.length > 0);

export default function ManufacturersPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 manufacturers',
          "/manufacturers",
          items.map((item) => ({ name: item.name, url: `/manufacturers/${item.slug}` }))
        )}
      />
      <SimpleHero title='Manufacturers' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : undefined} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/manufacturers/${item.slug}`}
              title={item.name}
              image={manufacturerListImage(item)?.src}
              eyebrow={item.country}
              line={undefined}
              mapHref={undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
    </PageShell>
  );
}
