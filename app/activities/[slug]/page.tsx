import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { activities } from "@/data/activities";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = activities;

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) return {};
  return detailMetadata(item.name, shortText(item.description, 2) || item.name);
}

export default async function ActivitiesDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  
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
