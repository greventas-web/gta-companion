import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { ExtraGrids, extraHref } from "@/components/simple/Extras";
import { extras } from "@/src/data/launch/expansion";
import { businesses } from "@/data/businesses";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  'GTA 6 businesses',
  'Unofficial GTA 6 businesses in Vice City and Leonida, with pictures and map links.'
);

const items = businesses;
const groupNames = ["all"];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => "all" === name) }))
  .filter((group) => group.list.length > 0);

export default function BusinessesPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 businesses',
          "/businesses",
          [...items.map((item) => ({ name: item.name, url: `/businesses/${item.slug}` })), ...extras.businesses.map((entry) => ({ name: entry.name, url: extraHref("businesses", entry) }))]
        )}
      />
      <SimpleHero title='Businesses' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : "Featured"} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/businesses/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.category}
              line={item.location}
              mapHref={staticMapHref("business", item.slug) ?? undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <ExtraGrids category="businesses" />
    </PageShell>
  );
}
