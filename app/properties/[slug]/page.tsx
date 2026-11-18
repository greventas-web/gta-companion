import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { PropertyMapLinks } from "@/components/properties/PropertyMapLinks";
import { findProperty, properties } from "@/data/properties";
import { detailMetadata } from "@/lib/pages";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return properties.map((place) => ({ slug: place.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = findProperty(slug);

  if (!place) {
    return {};
  }

  return detailMetadata(place.name, place.description);
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const place = findProperty(slug);

  if (!place) {
    notFound();
  }

  const related = properties.filter((entry) => entry.slug !== place.slug);

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Properties", href: "/properties" },
          { label: place.name },
        ]}
      />

      <p className="mt-10 text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
        Confirmed {place.type.toLowerCase()}
      </p>
      <h1 className="mt-4 break-words text-4xl font-black tracking-[-0.03em] sm:text-6xl">
        {place.name}
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
        {place.description}
      </p>
      <SourceList sources={place.sources} className="mt-6" />
      <PropertyMapLinks property={place} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Fact label="Type" value={place.type} />
        <Fact label="Area" value={place.area} />
        <Fact label="Region" value={place.region} />
        <Fact label="Edition" value={place.edition} />
      </div>

      <section className="mt-12 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-3xl font-black tracking-[-0.03em]">How you get it</h2>
        <p className="mt-4 max-w-3xl leading-8 text-zinc-300">{place.howToGet}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-black tracking-[-0.03em]">What Rockstar has said</h2>
        <ul className="mt-6 grid gap-4">
          {place.features.map((feature) => (
            <li
              key={feature}
              className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 leading-8 text-zinc-300"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-[-0.03em]">Related</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {place.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-pink-400/50 hover:text-pink-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-[-0.03em]">Other properties</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {related.map((entry) => (
            <Link
              key={entry.slug}
              href={`/properties/${entry.slug}`}
              className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 transition hover:border-pink-400/40"
            >
              <h3 className="text-xl font-black">{entry.name}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{entry.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI is made by Rockstar Games.
      </p>
    </PageShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#0B0B0D] p-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </p>
      <h3 className="mt-3 text-2xl font-black">{value}</h3>
    </div>
  );
}
