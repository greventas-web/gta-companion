import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { findPhoneItem, phoneItems } from "@/data/phone";
import { detailMetadata } from "@/lib/pages";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return phoneItems.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findPhoneItem(slug);

  if (!item) {
    return {};
  }

  return detailMetadata(item.name, item.description);
}

export default async function PhoneItemPage({ params }: Props) {
  const { slug } = await params;
  const item = findPhoneItem(slug);

  if (!item) {
    notFound();
  }

  const related = phoneItems.filter(
    (entry) => entry.group === item.group && entry.slug !== item.slug
  ).slice(0, 3);

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Phone", href: "/phone" },
          { label: item.name },
        ]}
      />

      <p className="mt-10 text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
        {item.origin}
      </p>
      <h1 className="mt-4 break-words text-4xl font-black tracking-[-0.03em] sm:text-6xl">
        {item.name}
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
        {item.description}
      </p>
      <SourceList sources={item.sources} className="mt-6" />

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        <Fact label="Kind" value={item.kind} />
        <Fact label="Where it comes from" value={item.origin} />
        <Fact label="Related" value={item.related} />
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-[-0.03em]">What is confirmed</h2>
        <div className="mt-6 grid gap-4">
          {item.details.map((detail) => (
            <p
              key={detail}
              className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 leading-8 text-zinc-300"
            >
              {detail}
            </p>
          ))}
        </div>
      </section>

      {item.links.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-3xl font-black tracking-[-0.03em]">Related</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {item.links.map((link) => (
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
      ) : null}

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-3xl font-black tracking-[-0.03em]">More in {item.group === "App" ? "apps" : "listening"}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((entry) => (
              <Link
                key={entry.slug}
                href={`/phone/${entry.slug}`}
                className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 transition hover:border-pink-400/40"
              >
                <h3 className="text-xl font-black">{entry.name}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{entry.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

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
