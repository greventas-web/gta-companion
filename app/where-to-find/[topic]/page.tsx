import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { imageForPin } from "@/lib/simple/pinImage";
import { findWhereTopic, whereToFindTopics, wherePlaces, type WhereTopic } from "@/src/data/launch/where-to-find";

type Props = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return whereToFindTopics.map((topic) => ({ topic: topic.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = findWhereTopic(slug);
  if (!topic) return {};
  return {
    ...pageMetadata(topic.metaTitle, `${topic.metaDescription} Unofficial.`),
    keywords: topic.keywords,
  };
}

/** Fails the build on a pin id the map does not have. */
function checkPins(topic: WhereTopic) {
  const known = new Set(getStaticPins().map((pin) => pin.id));
  const ids = [
    topic.mapPin,
    ...topic.groups.flatMap((group) =>
      group.places.flatMap((place) => [place.pin, place.areaPin].filter(Boolean) as string[])
    ),
  ];
  const missing = ids.filter((id) => !known.has(id));
  if (missing.length > 0) {
    throw new Error(`where-to-find/${topic.slug} points at unknown map pins: ${missing.join(", ")}`);
  }
}

export default async function WhereToFindTopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = findWhereTopic(slug);
  if (!topic) notFound();
  checkPins(topic);

  const places = wherePlaces(topic);
  const groups = [...new Set(places.map((place) => place.group))];

  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          topic.heading,
          `/where-to-find/${topic.slug}`,
          places.map((place) => ({ name: place.name, url: `/where-to-find/${topic.slug}/${place.slug}` }))
        )}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Where to find", href: "/where-to-find" }, { label: topic.label }]} />
      <div className="mt-6">
        <SimpleHero title={topic.label} />
      </div>

      {groups.map((group) => (
        <CardGrid key={group} heading={group} dense>
          {places
            .filter((place) => place.group === group)
            .map((place) => {
              const image = imageForPin(place.pin);
              return (
                <SimpleCard
                  key={place.slug}
                  href={`/where-to-find/${topic.slug}/${place.slug}`}
                  title={place.name}
                  image={image.src}
                  imageAlt={image.alt}
                  eyebrow={place.area}
                  price={place.price}
                  small
                />
              );
            })}
        </CardGrid>
      ))}

      <p className="mt-12 text-xs leading-5 text-zinc-500">
        Map positions: gtadb.org and all contributors (CC BY 4.0).
      </p>
    </PageShell>
  );
}
