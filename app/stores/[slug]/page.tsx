import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CatalogArticle from "@/components/entries/CatalogArticle";
import PageShell from "@/components/PageShell";
import ViewOnMap from "@/components/map/ViewOnMap";
import { clothingBySlug } from "@/data/clothing";
import { storeBySlug, stores } from "@/data/stores";
import { detailMetadata } from "@/lib/pages";
import type { CatalogLink } from "@/types/cited";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const store = storeBySlug(slug);

  if (!store) return {};

  return detailMetadata(store.name, store.summary);
}

export default async function StorePage({ params }: Props) {
  const { slug } = await params;
  const store = storeBySlug(slug);

  if (!store) notFound();

  const links: CatalogLink[] = [
    ...store.linkedClothing.flatMap((clothingSlug) => {
      const item = clothingBySlug(clothingSlug);
      if (!item) return [];
      return [
        {
          href: `/clothing/${item.slug}`,
          title: item.name,
          meta: item.kindLabel,
        },
      ];
    }),
    ...(store.mapLink ? [store.mapLink] : []),
  ];

  return (
    <PageShell>
      <CatalogArticle
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Stores", href: "/stores" },
          { label: store.name },
        ]}
        eyebrow={`${store.typeLabel} · ${store.editionLabel}`}
        title={store.name}
        summary={store.summary}
        sources={store.sources}
        image={store.image}
        imageAlt={store.imageAlt}
        imageCaption={store.imageCaption}
        map={
          <div className="mt-6">
            {store.hasPin ? (
              <ViewOnMap entityType="store" entitySlug={store.slug} />
            ) : (
              <p className="text-sm leading-6 text-zinc-400">No confirmed shop pin.</p>
            )}
            {store.mapNote ? (
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">{store.mapNote}</p>
            ) : null}
            <p className="mt-3 text-sm text-zinc-500">
              Region: {store.region}. Area: {store.area}.
            </p>
          </div>
        }
        facts={store.facts}
        unpublished={store.unpublished}
        linksTitle="Clothing and map"
        links={links}
      />
      <p className="mt-8">
        <Link href="/stores" className="text-sm font-semibold text-violet-300 hover:text-pink-300">
          All stores
        </Link>
      </p>
    </PageShell>
  );
}
