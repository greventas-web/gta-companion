import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { businesses } from "@/data/businesses";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = businesses;

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

export default async function BusinessesDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  
  const map = staticMapHref("business", item.slug);
  const related = items.filter((entry) => entry.slug !== item.slug && true).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Businesses', href: "/businesses" }, { label: item.name }]}
        eyebrow={item.category}
        title={item.name}
        image={item.image}
        imageAlt={item.imageAlt}
        summary={item.description}
        facts={[{ label: "Type", value: item.type ?? item.category }, { label: "Where", value: item.district ?? item.location }, { label: "Owner", value: item.owner ?? "" }]}
        mapHref={map}
        
        related={related.map((entry) => ({
          href: `/businesses/${entry.slug}`,
          title: entry.name,
          image: entry.image,
          small: true,
        }))}
      >
        {map ? null : <ViewOnMap entityType="business" entitySlug={item.slug} />}
        
      </SimpleDetail>
    </PageShell>
  );
}
