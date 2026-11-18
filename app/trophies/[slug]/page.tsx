import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import MapPinLink from "@/components/map/MapPinLink";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import SpoilerReveal from "@/components/SpoilerReveal";
import { detailMetadata } from "@/lib/pages";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { findTrophy, trophies, trophyPlatformLabel } from "@/src/data/trophies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trophies.map((trophy) => ({ slug: trophy.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trophy = findTrophy(slug);

  if (!trophy) {
    return {};
  }

  return detailMetadata(`${trophy.name} — GTA 6 trophies`, trophy.description);
}

export default async function TrophyPage({ params }: Props) {
  const { slug } = await params;
  const trophy = findTrophy(slug);

  if (!trophy) {
    notFound();
  }

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Trophies", href: "/trophies" },
          { label: trophy.name },
        ]}
      />

      <p className="mt-8 text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
        {trophyPlatformLabel(trophy)}
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
        {trophy.name}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{trophy.description}</p>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        <Fact label="PS / Xbox" value={trophyPlatformLabel(trophy)} />
        <Fact
          label="Missable"
          value={trophy.missable ? "Missable" : "Not marked missable"}
        />
        <Fact
          label="Tips"
          value={
            trophy.tips
              ? trophy.tipsSpoiler
                ? "Hidden until reveal"
                : trophy.tips
              : "Not published"
          }
        />
      </dl>

      {trophy.mapPinId ? (
        <div className="mt-8">
          <MapPinLink mapPinId={trophy.mapPinId} />
        </div>
      ) : null}

      {trophy.tips && trophy.tipsSpoiler ? (
        <div className="mt-10">
          <SpoilerReveal
            summary="These tips stay hidden until you open them."
            showLabel="Show tips"
            hideLabel="Hide tips"
          >
            <p>{trophy.tips}</p>
          </SpoilerReveal>
        </div>
      ) : null}

      <SourceList className="mt-8" sources={trophy.sources} />
      <p className="mt-10 text-sm leading-7 text-zinc-500">
        <Link href="/trophies" className="transition hover:text-violet-200">
          Back to trophies
        </Link>
        . {UNOFFICIAL_DISCLAIMER}
      </p>
    </PageShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#0B0B0D] p-5">
      <dt className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
        {label}
      </dt>
      <dd className="mt-2 text-lg text-white">{value}</dd>
    </div>
  );
}
