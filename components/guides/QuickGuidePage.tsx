import Image from "next/image";
import Link from "next/link";

import { faqPageJsonLd } from "@/components/intent/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { BlankSurface, CardGrid, PriceChip, QuickFacts } from "@/components/simple/SimpleCard";
import { SITE } from "@/lib/site";
import { type QuickGuide, quickGuides } from "@/src/data/launch/quick-guides";

function breadcrumbJsonLd(guide: QuickGuide) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Guides", item: `${SITE.url}/guides` },
      { "@type": "ListItem", position: 2, name: guide.heading, item: `${SITE.url}/guides/${guide.slug}` },
    ],
  };
}

/** Siblings shown under the related cards: the next few quick guides in the list. */
function moreGuides(guide: QuickGuide, count = 4) {
  const related = new Set(guide.related.map((link) => link.href));
  const index = quickGuides.findIndex((item) => item.slug === guide.slug);
  const ordered = [...quickGuides.slice(index + 1), ...quickGuides.slice(0, index)];
  return ordered.filter((item) => !related.has(`/guides/${item.slug}`)).slice(0, count);
}

/**
 * One quick answer: big photo (or a blank dark card), the heading, a few short
 * sentences, key facts and card links. Built for players searching one question.
 */
export default function QuickGuidePage({ guide }: { guide: QuickGuide }) {
  return (
    <PageShell>
      <JsonLd data={faqPageJsonLd(guide.faqs)} />
      <JsonLd data={breadcrumbJsonLd(guide)} />
      <header className="relative min-h-[240px] overflow-hidden rounded-[28px] border border-white/5 bg-[#08080A] sm:min-h-[340px]">
        {guide.image ? (
          <>
            <Image src={guide.image} alt={guide.imageAlt || guide.heading} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/45" />
          </>
        ) : (
          <BlankSurface />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
        <div className="relative z-20 flex min-h-[240px] flex-col justify-end gap-3 p-6 sm:min-h-[340px] sm:p-8">
          <Link href="/guides" className="w-fit text-xs font-black uppercase tracking-[0.2em] text-pink-300 hover:text-pink-200">
            Guides
          </Link>
          <h1 className="break-words text-3xl font-black leading-none tracking-[-0.03em] text-white sm:text-5xl">{guide.heading}</h1>
          {guide.price ? <PriceChip price={guide.price} className="w-fit" /> : null}
        </div>
      </header>

      <section className="mt-8 max-w-3xl space-y-3">
        {guide.answer.map((sentence) => (
          <p key={sentence} className="text-lg font-semibold leading-8 text-zinc-100 sm:text-xl">
            {sentence}
          </p>
        ))}
      </section>

      {guide.facts ? <QuickFacts wide facts={guide.facts} /> : null}

      <CardGrid heading="Related">
        {guide.related.map((link) => (
          <SimpleCard key={link.href} href={link.href} title={link.title} line={link.line} image={link.image} imageAlt={link.imageAlt} kind={link.kind} />
        ))}
      </CardGrid>

      <CardGrid heading="More quick answers" dense>
        {moreGuides(guide).map((item) => (
          <SimpleCard key={item.slug} href={`/guides/${item.slug}`} title={item.heading} image={item.image} imageAlt={item.imageAlt} kind={item.kind} small />
        ))}
      </CardGrid>
    </PageShell>
  );
}

/** Card grid of quick guides for hub pages. */
export function QuickGuideGrid({ guides, heading = "Quick answers" }: { guides: readonly QuickGuide[]; heading?: string }) {
  if (guides.length === 0) return null;
  return (
    <CardGrid heading={heading} dense>
      {guides.map((guide) => (
        <SimpleCard key={guide.slug} href={`/guides/${guide.slug}`} title={guide.heading} image={guide.image} imageAlt={guide.imageAlt} kind={guide.kind} small />
      ))}
    </CardGrid>
  );
}
