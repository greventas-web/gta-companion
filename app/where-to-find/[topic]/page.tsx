import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import WhereFaq from "@/components/where-to-find/WhereFaq";
import WhereToFindLinks from "@/components/where-to-find/WhereToFindLinks";
import { mapPinHref } from "@/components/map/MapPinLink";
import { pageMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  findWhereTopic,
  whereToFindTopics,
  type WherePlace,
  type WhereTopic,
} from "@/src/data/launch/where-to-find";

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

const pill =
  "inline-flex shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition";

function PlaceMapLink({ place }: { place: WherePlace }) {
  if (place.pin) {
    return (
      <Link
        href={mapPinHref(place.pin) ?? "/map"}
        className={`${pill} border-violet-400/40 bg-violet-500/15 text-violet-100 hover:bg-violet-500/25`}
      >
        View on map
      </Link>
    );
  }
  if (place.areaPin) {
    return (
      <Link
        href={mapPinHref(place.areaPin) ?? "/map"}
        className={`${pill} border-white/10 bg-white/5 text-zinc-300 hover:border-violet-400/40 hover:text-violet-100`}
      >
        Area on map
      </Link>
    );
  }
  return <span className="shrink-0 text-xs text-zinc-500">Pin coming</span>;
}

export default async function WhereToFindTopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = findWhereTopic(slug);
  if (!topic) notFound();
  checkPins(topic);

  const path = `/where-to-find/${topic.slug}`;
  const mapHref = mapPinHref(topic.mapPin) ?? "/map";
  const exactPins = topic.groups.flatMap((group) => group.places).filter((place) => place.pin).length;

  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          topic.heading,
          path,
          topic.groups.flatMap((group) => group.places.map((place) => ({ name: place.name })))
        )}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Where to find", href: "/where-to-find" },
          { label: topic.label },
        ]}
      />

      <header className="relative mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#16101f] via-[#0B0B0D] to-black px-6 py-8 sm:px-10 sm:py-10">
        <p className="inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-violet-200">
          Unofficial · confirmed at launch
        </p>
        <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{topic.heading}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-200">{topic.answer}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={mapHref}
            className="inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_40px_rgba(124,58,237,.35)] transition hover:bg-violet-500"
          >
            See it on the map: {topic.mapPinLabel}
          </Link>
          <span className="text-sm text-zinc-400">
            {exactPins} exact {exactPins === 1 ? "pin" : "pins"} on the Leonida map so far, more as they are confirmed.
          </span>
        </div>
      </header>

      <p className="mt-6 text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-8 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
        <h2 className="text-2xl font-black">What to know</h2>
        <ul className="mt-4 grid gap-2 leading-7 text-zinc-300">
          {topic.facts.map((fact) => (
            <li key={fact}>• {fact}</li>
          ))}
        </ul>
        <SourceList className="mt-6" sources={topic.sources} />
      </section>

      {topic.groups.map((group) => (
        <section key={group.heading} className="mt-10">
          <h2 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl">{group.heading}</h2>
          <ul className="mt-4 divide-y divide-white/10 overflow-hidden rounded-[24px] border border-white/10">
            {group.places.map((place) => (
              <li
                key={place.name}
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-white">{place.name}</p>
                  {place.area || place.detail ? (
                    <p className="text-sm text-zinc-400">
                      {[place.area, place.detail].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                </div>
                <PlaceMapLink place={place} />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="mt-6 text-sm leading-6 text-zinc-500">
        “View on map” opens the exact building. “Area on map” opens the neighborhood when the building is not pinned yet.
        Seen one in the game? Add it on the{" "}
        <Link href="/map" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          community map
        </Link>
        .
      </p>

      <WhereFaq faqs={topic.faqs} />

      <section className="mt-10">
        <h2 className="text-xl font-black">Related</h2>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-zinc-300">
          {topic.related.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <WhereToFindLinks exclude={topic.slug} className="mt-10" />

      <SourceList className="mt-8" sources={topic.sources} />
      <p className="mt-3 text-xs leading-5 text-zinc-500">
        Grand Theft Auto VI, Leonida, and all in-game names belong to Rockstar Games. Map positions: gtadb.org and all
        contributors (CC BY 4.0).
      </p>
    </PageShell>
  );
}
