import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { phoneItems } from "@/data/phone";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = phoneItems;

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

export default async function PhoneDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  
  const map = null;
  const related = items.filter((entry) => entry.slug !== item.slug && true).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Phone', href: "/phone" }, { label: item.name }]}
        eyebrow={item.kind}
        title={item.name}
        image={undefined}
        imageAlt={undefined}
        summary={item.description}
        facts={[{ label: "Type", value: item.kind }]}
        mapHref={map}
        links={item.links}
        related={related.map((entry) => ({
          href: `/phone/${entry.slug}`,
          title: entry.name,
          image: undefined,
          small: true,
        }))}
      >
        {map ? null : null}
        
      </SimpleDetail>
    </PageShell>
  );
}
