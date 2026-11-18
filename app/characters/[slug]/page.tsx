import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { characters } from "@/data/characters";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = characters;

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

export default async function CharactersDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  
  const map = staticMapHref("character", item.slug);
  const related = items.filter((entry) => entry.slug !== item.slug && true).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Characters', href: "/characters" }, { label: item.name }]}
        eyebrow={item.role}
        title={item.name}
        image={item.image}
        imageAlt={undefined}
        summary={item.description}
        facts={[{ label: "Role", value: item.role }]}
        mapHref={map}
        
        related={related.map((entry) => ({
          href: `/characters/${entry.slug}`,
          title: entry.name,
          image: entry.image,
          small: true,
        }))}
      >
        {map ? null : <ViewOnMap entityType="character" entitySlug={item.slug} />}
        
      </SimpleDetail>
    </PageShell>
  );
}
