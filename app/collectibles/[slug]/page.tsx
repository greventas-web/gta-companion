import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import FaqSection, { RelatedLinks } from "@/components/intent/FaqSection";
import { mapPinHref } from "@/components/map/MapPinLink";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  collectibleGuides,
  findCollectibleGuide,
} from "@/src/data/launch/collectible-guides";

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

  checkPins(guide.mapLinks.map((link) => link.pin));

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Collectibles", href: "/collectibles" },
          { label: guide.title },
        ]}
      />
      <p className="mt-8 text-[11px] font-black uppercase tracking-[0.16em] text-violet-300">
        Unofficial · confirmed at launch
      </p>
      <h1 className="mt-3 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
        {guide.heading}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{guide.intro}</p>
      <p className="mt-4 text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">What is confirmed</h2>
        <ul className="mt-4 grid gap-3 text-zinc-300">
          {guide.facts.map((fact) => (
            <li key={fact}>• {fact}</li>
          ))}
        </ul>
      </section>

      {guide.groups?.map((group) => (
        <section key={group.heading} className="mt-12">
          <h2 className="text-3xl font-black tracking-[-0.03em]">{group.heading}</h2>
          <div className="mt-6 overflow-x-auto rounded-[24px] border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Count</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-t border-white/10 text-zinc-300">
                    <td className="px-4 py-3 font-semibold text-white">{row.label}</td>
                    <td className="px-4 py-3">{row.value}</td>
                    <td className="px-4 py-3 text-zinc-400">{row.note ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {guide.mapLinks.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-3xl font-black tracking-[-0.03em]">On the map</h2>
          <p className="mt-3 max-w-3xl leading-8 text-zinc-400">
            These links go to neighborhoods already pinned on our map. We have not added
            per-item pins, because exact coordinates have not been confirmed.
          </p>
          <p className="mt-5 flex flex-wrap gap-3 text-sm">
            {guide.mapLinks.map((link) => {
              const href = mapPinHref(link.pin);
              if (!href) return null;
              return (
                <Link
                  key={link.pin + link.label}
                  href={href}
                  className="rounded-full border border-violet-400/40 bg-violet-500/15 px-5 py-2.5 font-semibold text-violet-100 transition hover:bg-violet-500/25"
                >
                  {link.label}
                </Link>
              );
            })}
          </p>
        </section>
      ) : null}

      <FaqSection faqs={guide.faqs} heading={`${guide.title}: questions`} />
      <RelatedLinks links={guide.related} />
    </PageShell>
  );
}
