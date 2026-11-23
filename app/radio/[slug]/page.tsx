import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { detailMetadata } from "@/lib/pages";
import { findStation, stationPages } from "@/lib/simple/radio";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stationPages.map((station) => ({ slug: station.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const station = findStation(slug);
  if (!station) return {};
  const description = [station.summary, `${station.genre}. Hosted by ${station.hosts}.`].filter(Boolean).join(" ");
  return detailMetadata(`${station.name}: GTA 6 radio`, shortText(description, 2));
}

export default async function StationPage({ params }: Props) {
  const { slug } = await params;
  const station = findStation(slug);
  if (!station) notFound();

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: "Radio", href: "/radio" }, { label: station.name }]}
        eyebrow="Radio station"
        title={station.name}
        image={station.image}
        imageAlt={station.name}
        summary={station.summary}
        facts={[
          { label: "Hosts", value: station.hosts },
          { label: "Genre", value: station.genre },
        ]}
        related={stationPages
          .filter((item) => item.slug !== station.slug)
          .map((item) => ({
            href: `/radio/${item.slug}`,
            title: item.name,
            image: item.image,
            imageAlt: item.name,
            eyebrow: item.genre,
            line: item.hosts,
            small: true,
          }))}
        relatedHeading="More stations"
      />
    </PageShell>
  );
}
