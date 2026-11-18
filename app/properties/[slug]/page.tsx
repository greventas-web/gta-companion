import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { properties } from "@/data/properties";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = properties;

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) return {};
  return detailMetadata(item.name, shortText(item.summary, 2) || item.name);
}

export default async function PropertiesDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  
  const map = item.map.kind === "area" ? `/map?pin=${encodeURIComponent(item.map.pinId)}` : staticMapHref("property", item.slug);
  const related = items.filter((entry) => entry.slug !== item.slug && true).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Properties', href: "/properties" }, { label: item.name }]}
        eyebrow={item.type}
        title={item.name}
        image={undefined}
        imageAlt={undefined}
        summary={item.summary}
        facts={[{ label: "Type", value: item.type }, { label: "Where", value: item.area }, { label: "Edition", value: /not an edition/i.test(item.edition) ? "" : item.edition }, { label: "How to get", value: shortText(item.howToGet, 1) }]}
        mapHref={map}
        mapLabel={item.map.kind === "area" ? "Find the area on map" : undefined}
        links={item.links}
        related={related.map((entry) => ({
          href: `/properties/${entry.slug}`,
          title: entry.name,
          image: undefined,
          small: true,
        }))}
      >
        {map ? null : <ViewOnMap entityType="property" entitySlug={item.slug} />}
        
      </SimpleDetail>
    </PageShell>
  );
}
