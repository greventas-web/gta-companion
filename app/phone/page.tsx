import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { phoneItems } from "@/data/phone";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  'GTA 6 phone apps',
  'Unofficial GTA 6 phone apps: Snapmatic, Ryde Me, WAiNK and more.'
);

const items = phoneItems;
const groupNames = [...new Set(phoneItems.map((item) => item.group === "App" ? "Apps" : item.group))];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => (item.group === "App" ? "Apps" : item.group) === name) }))
  .filter((group) => group.list.length > 0);

export default function PhonePage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 phone apps',
          "/phone",
          items.map((item) => ({ name: item.name, url: `/phone/${item.slug}` }))
        )}
      />
      <SimpleHero title='Phone' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : undefined} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/phone/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.kind}
              line={undefined}
              mapHref={undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <QuickGuideGrid guides={quickGuideCards(["bank-account-atm", "fast-travel", "call-your-car", "key-cloner", "impounded-car", "headphones", "use-phone"])} />
    </PageShell>
  );
}
