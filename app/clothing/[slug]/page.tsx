import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CatalogArticle from "@/components/entries/CatalogArticle";
import PageShell from "@/components/PageShell";
import ViewOnMap from "@/components/map/ViewOnMap";
import { clothing, clothingBySlug } from "@/data/clothing";
import { storeBySlug } from "@/data/stores";
import { detailMetadata } from "@/lib/pages";
import type { CatalogLink } from "@/types/cited";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clothing.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = clothingBySlug(slug);

  if (!item) return {};

  return detailMetadata(item.name, item.summary);
}

export default async function ClothingPage({ params }: Props) {
  const { slug } = await params;
  const item = clothingBySlug(slug);

  if (!item) notFound();

  const store = item.storeSlug ? storeBySlug(item.storeSlug) : undefined;

  const links: CatalogLink[] = [
    ...(store
      ? [
          {
            href: `/stores/${store.slug}`,
            title: store.name,
            meta: store.hasPin ? "Shop page, with a map pin" : "Shop page",
          },
        ]
      : []),
    ...item.relatedSlugs.flatMap((relatedSlug) => {
      const related = clothingBySlug(relatedSlug);
      if (!related) return [];
      return [
        {
          href: `/clothing/${related.slug}`,
          title: related.name,
          meta: related.kindLabel,
        },
      ];
    }),
  ];

  return (
    <PageShell>
      <CatalogArticle
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Clothing", href: "/clothing" },
          { label: item.name },
        ]}
        eyebrow={`${item.kindLabel} · ${item.appliesTo} · ${item.editionLabel}`}
        title={item.name}
        summary={item.summary}
        sources={item.sources}
        image={item.image}
        imageAlt={item.imageAlt}
        imageCaption={item.imageCaption}
        map={
          <div className="mt-6">
            <p className="text-sm leading-6 text-zinc-300">How to get it: {item.howToGet}</p>
            {store?.hasPin ? (
              <>
                <ViewOnMap entityType="store" entitySlug={store.slug} />
                <p className="mt-2 text-sm text-zinc-500">Map pin for {store.name}.</p>
              </>
            ) : (
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {store
                  ? `${store.name} does not have a confirmed shop pin yet.`
                  : "No map pin. Rockstar has not tied this to a shop door."}
              </p>
            )}
          </div>
        }
        facts={item.facts}
        unpublished={item.unpublished}
        linksTitle="Shops and related looks"
        links={links}
      />
      <p className="mt-8">
        <Link href="/clothing" className="text-sm font-semibold text-violet-300 hover:text-pink-300">
          All clothing
        </Link>
      </p>
    </PageShell>
  );
}
