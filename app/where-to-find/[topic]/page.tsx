import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AdSlot from "@/components/ads/AdSlot";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd } from "@/components/intent/FaqSection";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { imageForPin } from "@/lib/simple/pinImage";
import { imageForPath } from "@/lib/simple/placeImages";
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
      {topic.faqs.length ? <JsonLd data={faqPageJsonLd(topic.faqs)} /> : null}
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Where to find", href: "/where-to-find" }, { label: topic.label }]} />
      <div className="mt-6">
        <SimpleHero title={topic.label} />
      </div>

      {groups.map((group, index) => (
        <div key={group}>
        {index === 1 ? <AdSlot name="list" /> : null}
        <CardGrid heading={group} dense>
          {places
            .filter((place) => place.group === group)
            .map((place) => {
              const image = imageForPath(`/where-to-find/${topic.slug}/${place.slug}`) ?? imageForPin(place.pin);
              if (!place.note) {
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
              }
              return (
                <div key={place.slug} className="flex h-full flex-col">
                  <div className="min-h-0 flex-1">
                    <SimpleCard
                      href={`/where-to-find/${topic.slug}/${place.slug}`}
                      title={place.name}
                      image={image.src}
                      imageAlt={image.alt}
                      eyebrow={place.area}
                      price={place.price}
                      small
                    />
                  </div>
                  <p className="mt-2 rounded-xl border border-amber-300/35 bg-amber-400/10 px-3 py-2 text-xs font-semibold leading-5 text-amber-50">
                    {place.note}
                  </p>
                </div>
              );
            })}
        </CardGrid>
        </div>
      ))}

      <p className="mt-12 text-xs leading-5 text-zinc-500">
        Map positions: gtadb.org and all contributors (CC BY 4.0).
      </p>
    </PageShell>
  );
}
