import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import { faqPageJsonLd, RelatedLinks } from "@/components/intent/FaqSection";
import JsonLd from "@/components/JsonLd";
import { mapPinHref } from "@/components/map/MapPinLink";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { collectibleGuides, findCollectibleGuide } from "@/src/data/launch/collectible-guides";

function checkPins(pins: string[]) {
  const known = new Set(getStaticPins().map((pin) => pin.id));
  const missing = pins.filter((id) => !known.has(id));
  if (missing.length > 0) {
    throw new Error(`collectible guide points at unknown map pins: ${missing.join(", ")}`);
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collectibleGuides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = findCollectibleGuide(slug);
  if (!guide) return {};
  return pageMetadata(guide.metaTitle, guide.metaDescription);
}

export default async function CollectibleGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = findCollectibleGuide(slug);
  if (!guide) notFound();

  checkPins([
    ...guide.mapLinks.map((link) => link.pin),
    ...(guide.groups ?? []).flatMap((group) => group.items.map((item) => item.pin).filter((pin): pin is string => Boolean(pin))),
  ]);

  return (
    <PageShell>
      {guide.faqs.length > 0 ? <JsonLd data={faqPageJsonLd(guide.faqs)} /> : null}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Collectibles", href: "/collectibles" },
          { label: guide.title },
        ]}
      />
      <div className="mt-6">
        <SimpleHero title={guide.heading} image={guide.image} />
      </div>

      <QuickFacts facts={guide.quick} />

      {guide.groups?.map((group) => (
        <CardGrid
          key={group.heading}
          heading={group.heading}
          count={group.items.length}
          dense
          trackIds={group.itemPages ? group.items.map((item) => `${guide.slug}:${item.slug}`) : undefined}
        >
          {group.items.map((item) => (
            <SimpleCard
              key={item.slug}
              href={group.itemPages ? `/collectibles/${guide.slug}/${item.slug}` : undefined}
              title={item.name}
              line={item.line}
              chips={item.value ? [{ value: item.value }] : undefined}
              small
              trackId={group.itemPages ? `${guide.slug}:${item.slug}` : undefined}
            />
          ))}
        </CardGrid>
      ))}

      {guide.mapLinks.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-[-0.02em] sm:text-3xl">See on map</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {guide.mapLinks.map((link) => {
              const href = mapPinHref(link.pin);
              if (!href) return null;
              return (
                <Link
                  key={link.pin + link.label}
                  href={href}
                  className="rounded-full border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      <RelatedLinks links={guide.related} />
    </PageShell>
  );
}
