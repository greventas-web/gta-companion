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
import { findMission, MISSION_TYPE_LABEL, missions } from "@/src/data/missions";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return missions.map((mission) => ({ slug: mission.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mission = findMission(slug);

  if (!mission) {
    return {};
  }

  return detailMetadata(
    `${mission.name} — GTA 6 missions`,
    mission.summary
  );
}

function shown(value?: string) {
  return value?.trim() ? value : "Not published";
}

export default async function MissionPage({ params }: Props) {
  const { slug } = await params;
  const mission = findMission(slug);

  if (!mission) {
    notFound();
  }

  const hasSpoiler = Boolean(mission.spoiler || mission.rewards);

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Missions", href: "/missions" },
          { label: mission.name },
        ]}
      />

      <p className="mt-8 text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
        {MISSION_TYPE_LABEL[mission.type]}
        {mission.edition ? ` · ${mission.edition}` : ""}
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
        {mission.name}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{mission.summary}</p>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        <Fact label="Type" value={MISSION_TYPE_LABEL[mission.type]} />
        <Fact label="Giver" value={shown(mission.giver)} />
        <Fact
          label="Character"
          value={shown(mission.character)}
          href={mission.characterSlug ? `/characters/${mission.characterSlug}` : undefined}
        />
        <Fact
          label="Region"
          value={mission.region}
          href={mission.regionSlug ? `/locations/${mission.regionSlug}` : undefined}
        />
        <Fact label="Start" value={shown(mission.startArea)} />
        <Fact label="Place" value={shown(mission.place)} />
        <Fact label="Edition" value={shown(mission.edition)} />
        <Fact
          label="Rewards"
          value={mission.rewards ? "Hidden until reveal" : "Not published"}
        />
      </dl>

      <div className="mt-8 flex flex-wrap gap-3">
        <MapPinLink mapPinId={mission.mapPinId} />
        {mission.edition ? (
          <Link
            href="/launch"
            className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-violet-300/50"
          >
            Editions
          </Link>
        ) : null}
      </div>

      {mission.mapNote ? (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">{mission.mapNote}</p>
      ) : null}

      {hasSpoiler ? (
        <div className="mt-10">
          <SpoilerReveal>
            {mission.spoiler ? <p>{mission.spoiler}</p> : null}
            {mission.rewards ? (
              <p className={mission.spoiler ? "mt-4" : ""}>
                <span className="text-violet-200">Rewards. </span>
                {mission.rewards}
              </p>
            ) : null}
          </SpoilerReveal>
        </div>
      ) : null}

      <SourceList className="mt-8" sources={mission.sources} />

      <p className="mt-10 text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} This page does not include a walkthrough.
      </p>
    </PageShell>
  );
}

function Fact({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#0B0B0D] p-5">
      <dt className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
        {label}
      </dt>
      <dd className="mt-2 text-lg text-white">
        {href ? (
          <Link
            href={href}
            className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
          >
            {value}
          </Link>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
