import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import FactNotes from "@/components/simple/FactNotes";
import { ExtraDetail } from "@/components/simple/Extras";
import { extraPages, findExtra } from "@/src/data/launch/expansion";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { clothing } from "@/data/clothing";
import { storeBySlug } from "@/data/stores";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = clothing;

export function generateStaticParams() {
  return [...items.map((item) => ({ slug: item.slug })), ...extraPages("clothing").map((entry) => ({ slug: entry.slug }))];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("clothing", slug);
    return extra ? detailMetadata(extra.name, extra.summary || extra.name) : {};
  }
  return detailMetadata(item.name, shortText(item.summary, 2) || item.name);
}

export default async function ClothingDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) {
    const extra = findExtra("clothing", slug);
    if (!extra) notFound();
    return (
      <PageShell>
        <ExtraDetail category="clothing" entry={extra} />
      </PageShell>
    );
  }
  const store = item.storeSlug ? storeBySlug(item.storeSlug) : undefined;
  const map = store ? (store.mapLink?.href ?? staticMapHref("store", store.slug)) : null;
  const related = items.filter((entry) => entry.slug !== item.slug && entry.group === item.group).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Clothing', href: "/clothing" }, { label: item.name }]}
        eyebrow={item.kindLabel}
        title={item.name}
        image={item.image}
        imageAlt={item.imageAlt}
        summary={item.summary}
        facts={[{ label: "Type", value: item.kindLabel }, { label: "For", value: item.appliesTo === "Not published" ? "" : item.appliesTo }, { label: "Edition", value: item.editionRequirement === "none" ? "" : item.editionLabel }, { label: "How to get", value: shortText(item.howToGet, 1) }, { label: "Store", value: store?.name ?? "" }]}
        mapHref={map}
        links={store ? [{ href: `/stores/${store.slug}`, label: store.name }] : undefined}
        related={related.map((entry) => ({
          href: `/clothing/${entry.slug}`,
          title: entry.name,
          image: entry.image,
          small: true,
        }))}
      >
        {map ? null : (store ? <ViewOnMap entityType="store" entitySlug={store.slug} /> : null)}
        <FactNotes facts={item.details} />
      </SimpleDetail>
    </PageShell>
  );
}
