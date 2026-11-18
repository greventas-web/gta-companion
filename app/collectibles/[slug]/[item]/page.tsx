import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { pageMetadata } from "@/lib/launch";
import { collectibleItemPages, findCollectibleItem } from "@/src/data/launch/collectible-guides";

type Props = { params: Promise<{ slug: string; item: string }> };

export function generateStaticParams() {
  return collectibleItemPages().map(({ guide, item }) => ({ slug: guide.slug, item: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, item } = await params;
  const entry = findCollectibleItem(slug, item);
  if (!entry) return {};
  return pageMetadata(
    `${entry.item.name} – GTA 6 ${entry.guide.title}`,
    `${entry.item.name} in GTA 6: ${entry.item.value}. ${entry.item.line} Unofficial.`
  );
}

export default async function CollectibleItemPage({ params }: Props) {
  const { slug, item } = await params;
  const entry = findCollectibleItem(slug, item);
  if (!entry) notFound();
  const { guide, item: thing } = entry;

  const siblings = collectibleItemPages()
    .filter((other) => other.guide.slug === guide.slug && other.item.slug !== thing.slug)
    .slice(0, 8);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Collectibles", href: "/collectibles" },
          { label: guide.title, href: `/collectibles/${guide.slug}` },
          { label: thing.name },
        ]}
        eyebrow={guide.title}
        title={thing.name}
        summary={thing.line}
        trackId={`${guide.slug}:${thing.slug}`}
        facts={thing.facts?.filter((fact) => fact.label !== "Track it")}
        related={siblings.map((other) => ({
          href: `/collectibles/${guide.slug}/${other.item.slug}`,
          title: other.item.name,
          line: other.item.line,
          chips: other.item.value ? [{ value: other.item.value }] : undefined,
          trackId: `${guide.slug}:${other.item.slug}`,
          small: true,
        }))}
        relatedHeading="Other sets"
      />
    </PageShell>
  );
}
