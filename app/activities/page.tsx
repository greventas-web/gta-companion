import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { activities } from "@/data/activities";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  'GTA 6 activities',
  'Unofficial GTA 6 activities: fishing, hunting, golf, stunts and more, with pictures and map links.'
);

const items = activities;
const groupNames = [...new Set(activities.map((item) => item.category))];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => item.category === name) }))
  .filter((group) => group.list.length > 0);

export default function ActivitiesPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 activities',
          "/activities",
          items.map((item) => ({ name: item.name, url: `/activities/${item.slug}` }))
        )}
      />
      <SimpleHero title='Activities' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : undefined} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/activities/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={undefined}
              line={(item.location && !/not published/i.test(item.location) ? item.location : undefined)}
              mapHref={staticMapHref("activity", item.slug) ?? undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
    </PageShell>
  );
}
