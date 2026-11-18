import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import SimpleCard from "@/components/simple/SimpleCard";
import { clothingBySlug } from "@/data/clothing";
import { stores } from "@/data/stores";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = stores;

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

export default async function StoresDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const looks = item.linkedClothing.map((slug) => clothingBySlug(slug)).filter((look) => look !== undefined);
  const map = item.mapLink?.href ?? staticMapHref("store", item.slug);
  const related = items.filter((entry) => entry.slug !== item.slug && false).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Stores', href: "/stores" }, { label: item.name }]}
        eyebrow={item.typeLabel}
        title={item.name}
        image={item.image}
        imageAlt={item.imageAlt}
        summary={item.summary}
        facts={[{ label: "Type", value: item.typeLabel }, { label: "Where", value: item.area }, { label: "Edition", value: item.editionRequirement === "none" ? "" : item.editionLabel }]}
        mapHref={map}
        
        related={related.map((entry) => ({
          href: `/stores/${entry.slug}`,
          title: entry.name,
          image: entry.image,
          small: true,
        }))}
      >
        {map ? null : <ViewOnMap entityType="store" entitySlug={item.slug} />}
        {looks.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {looks.map((look) => (
              <SimpleCard key={look.slug} href={`/clothing/${look.slug}`} title={look.name} image={look.image} eyebrow={look.kindLabel} small />
            ))}
          </div>
        ) : null}
      </SimpleDetail>
    </PageShell>
  );
}
