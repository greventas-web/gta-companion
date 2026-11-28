import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import { ExtraDetail } from "@/components/simple/Extras";
import { extraPages, findExtra } from "@/src/data/launch/expansion";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { activities } from "@/data/activities";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";
import { THIN_ROBOTS } from "@/lib/thin-content";

type Props = { params: Promise<{ slug: string }> };

const items = activities;

export function generateStaticParams() {
  return [...items.map((item) => ({ slug: item.slug })), ...extraPages("activities").map((entry) => ({ slug: entry.slug }))];
}

export const dynamicParams = false;

async function baseMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("activities", slug);
    return extra ? detailMetadata(extra.name, extra.summary || extra.name) : {};
  }
  return detailMetadata(item.name, shortText(item.description, 2) || item.name);
}

/** Thin database page: kept out of search results until it has its own commentary (lib/thin-content.ts). */
export async function generateMetadata(props: Props): Promise<Metadata> {
  return { ...(await baseMetadata(props)), robots: THIN_ROBOTS };
}

export default async function ActivitiesDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("activities", slug);
    if (!extra) notFound();
    return (
      <PageShell>
        <ExtraDetail category="activities" entry={extra} />
      </PageShell>
    );
  }
  
  const map = staticMapHref("activity", item.slug);
  const related = items.filter((entry) => entry.slug !== item.slug && entry.category === item.category).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Activities', href: "/activities" }, { label: item.name }]}
        eyebrow={undefined}
        title={item.name}
        image={item.image}
        imageAlt={item.imageAlt}
        summary={item.description}
        facts={[{ label: "Type", value: item.category }, { label: "Where", value: (item.location && !/not published/i.test(item.location) ? item.location : undefined) ?? "" }]}
        mapHref={map}
        links={item.related?.map((link) => ({ href: link.href, label: link.title }))}
        related={related.map((entry) => ({
          href: `/activities/${entry.slug}`,
          title: entry.name,
          image: entry.image,
          small: true,
        }))}
      >
        {map ? null : <ViewOnMap entityType="activity" entitySlug={item.slug} />}
        
      </SimpleDetail>
    </PageShell>
  );
}
