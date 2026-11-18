import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import { ExtraDetail } from "@/components/simple/Extras";
import { extraPages, findExtra } from "@/src/data/launch/expansion";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { animals } from "@/data/animals";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = animals;

export function generateStaticParams() {
  return [...items.map((item) => ({ slug: item.slug })), ...extraPages("animals").map((entry) => ({ slug: entry.slug }))];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("animals", slug);
    return extra ? detailMetadata(extra.name, extra.summary || extra.name) : {};
  }
  return detailMetadata(item.name, shortText(item.description, 2) || item.name);
}

export default async function AnimalsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("animals", slug);
    if (!extra) notFound();
    return (
      <PageShell>
        <ExtraDetail category="animals" entry={extra} />
      </PageShell>
    );
  }
  
  const map = staticMapHref("animal", item.slug);
  const related = items.filter((entry) => entry.slug !== item.slug && true).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Animals', href: "/animals" }, { label: item.name }]}
        eyebrow={item.category}
        title={item.name}
        image={item.image}
        imageAlt={item.imageAlt}
        summary={item.description}
        facts={[{ label: "Where", value: (item.habitat && !/not published/i.test(item.habitat) ? item.habitat : undefined) ?? "" }]}
        mapHref={map}
        
        related={related.map((entry) => ({
          href: `/animals/${entry.slug}`,
          title: entry.name,
          image: entry.image,
          small: true,
        }))}
      >
        {map ? null : <ViewOnMap entityType="animal" entitySlug={item.slug} />}
        
      </SimpleDetail>
    </PageShell>
  );
}
