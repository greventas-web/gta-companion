import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { pageMetadata } from "@/lib/launch";
import { imageForPin } from "@/lib/simple/pinImage";
import { imageForPath } from "@/lib/simple/placeImages";
import { findWherePlace, whereToFindTopics, wherePlaces } from "@/src/data/launch/where-to-find";

type Props = { params: Promise<{ topic: string; place: string }> };

export function generateStaticParams() {
  return whereToFindTopics.flatMap((topic) =>
    wherePlaces(topic).map((place) => ({ topic: topic.slug, place: place.slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic, place } = await params;
  const entry = findWherePlace(topic, place);
  if (!entry) return {};
  return pageMetadata(
    `${entry.place.name} – GTA 6 ${entry.topic.label}`,
    `${entry.place.name} in GTA 6${entry.place.area ? `, ${entry.place.area}` : ""}. Where it is and what it costs. Unofficial.`
  );
}

export default async function WherePlacePage({ params }: Props) {
  const { topic: topicSlug, place: placeSlug } = await params;
  const entry = findWherePlace(topicSlug, placeSlug);
  if (!entry) notFound();
  const { topic, place } = entry;
  const image = imageForPath(`/where-to-find/${topic.slug}/${place.slug}`) ?? imageForPin(place.pin);

  const others = wherePlaces(topic)
    .filter((other) => other.slug !== place.slug)
    .slice(0, 6)
    .map((other) => {
      const otherImage = imageForPath(`/where-to-find/${topic.slug}/${other.slug}`) ?? imageForPin(other.pin);
      return {
        href: `/where-to-find/${topic.slug}/${other.slug}`,
        title: other.name,
        image: otherImage.src,
        eyebrow: other.area,
        price: other.price,
        small: true,
      };
    });

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: topic.label, href: `/where-to-find/${topic.slug}` },
          { label: place.name },
        ]}
        eyebrow={place.group}
        title={place.name}
        image={image.src}
        imageAlt={image.alt}
        price={place.price}
        summary={[place.area ? `In ${place.area}.` : null, place.note].filter(Boolean).join(" ") || undefined}
        facts={[{ label: topic.slug === "fences" ? "Opens" : "Type", value: place.tag ?? "" }]}
        mapPin={place.pin ?? place.areaPin}
        mapLabel={place.pin ? "Find on map" : "Find the area on map"}
        related={others}
        relatedHeading={`More ${topic.label.toLowerCase()}`}
      />
    </PageShell>
  );
}
