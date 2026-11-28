import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import { ExtraDetail } from "@/components/simple/Extras";
import { extraPages, findExtra } from "@/src/data/launch/expansion";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { locations } from "@/data/locations";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";
import { THIN_ROBOTS } from "@/lib/thin-content";

type Props = { params: Promise<{ slug: string }> };

const items = locations;

export function generateStaticParams() {
  return [...items.map((item) => ({ slug: item.slug })), ...extraPages("locations").map((entry) => ({ slug: entry.slug }))];
}

export const dynamicParams = false;

async function baseMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("locations", slug);
    return extra ? detailMetadata(extra.name, extra.summary || extra.name) : {};
  }
  return detailMetadata(item.name, shortText(item.description, 2) || item.name);
}

/** Thin database page: kept out of search results until it has its own commentary (lib/thin-content.ts). */
export async function generateMetadata(props: Props): Promise<Metadata> {
  return { ...(await baseMetadata(props)), robots: THIN_ROBOTS };
}

export default async function LocationsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("locations", slug);
    if (!extra) notFound();
    return (
      <PageShell>
        <ExtraDetail category="locations" entry={extra} />
      </PageShell>
    );
  }
  
  const map = staticMapHref("location", item.slug);
  const related = items.filter((entry) => entry.slug !== item.slug && true).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Locations', href: "/locations" }, { label: item.name }]}
        eyebrow={item.type}
        title={item.name}
        image={item.image}
        imageAlt={undefined}
        summary={item.description}
        facts={[{ label: "Region", value: item.region }, { label: "Type", value: item.type }]}
        mapHref={map}
        
        related={related.map((entry) => ({
          href: `/locations/${entry.slug}`,
          title: entry.name,
          image: entry.image,
          small: true,
        }))}
      >
        {map ? null : <ViewOnMap entityType="location" entitySlug={item.slug} />}
        
      </SimpleDetail>
    </PageShell>
  );
}
