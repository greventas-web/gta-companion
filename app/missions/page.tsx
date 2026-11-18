import type { Metadata } from "next";
import Link from "next/link";

import MapPinLink from "@/components/map/MapPinLink";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { MISSION_TYPE_LABEL, missions } from "@/src/data/missions";

const title = "GTA 6 missions list (unofficial, spoiler-safe)";
const description = `Spoiler-safe GTA 6 missions list. Only jobs Rockstar has named, with sources. Plot and rewards stay hidden until you reveal them. ${SITE.slogan}. ${UNOFFICIAL_DISCLAIMER}`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: [
    "GTA 6 missions list",
    "GTA 6 missions",
    "GTA VI missions",
    "Grand Theft Auto VI missions",
  ],
};

function shown(value?: string) {
  return value?.trim() ? value : "Not published";
}

export default function MissionsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial · spoiler-safe"
        title="Missions"
        description={`A GTA 6 missions list of jobs Rockstar has named. Names, givers, regions, and map pins are visible. Plot and rewards stay behind a reveal. Grand Theft Auto VI launches ${SITE.launchLabel}.`}
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-10">
        <h2 className="text-3xl font-black tracking-[-0.03em]">
          Confirmed
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {missions.length} confirmed {missions.length === 1 ? "job" : "jobs"}.
          Rockstar has not published a story mission list. A row is added only
          after a name is confirmed, with a source on the page.
        </p>

        <div className="mt-8 grid gap-6">
          {missions.map((mission) => (
            <article
              key={mission.slug}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
                {MISSION_TYPE_LABEL[mission.type]}
                {mission.edition ? ` · ${mission.edition}` : ""}
              </p>
              <h3 className="mt-3 text-2xl font-black">
                <Link
                  href={`/missions/${mission.slug}`}
                  className="transition hover:text-violet-200"
                >
                  {mission.name}
                </Link>
              </h3>
              <p className="mt-4 max-w-3xl leading-8 text-zinc-400">{mission.summary}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Fact label="Giver" value={shown(mission.giver)} />
                <Fact label="Character" value={shown(mission.character)} />
                <Fact
                  label="Region"
                  value={mission.region}
                  href={mission.regionSlug ? `/locations/${mission.regionSlug}` : undefined}
                />
                <Fact label="Start" value={shown(mission.startArea)} />
                <Fact label="Place" value={shown(mission.place)} />
                <Fact label="Rewards" value={mission.rewards ? "On the mission page" : "Not published"} />
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/missions/${mission.slug}`}
                  className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-violet-300/50"
                >
                  Mission page
                </Link>
                <MapPinLink mapPinId={mission.mapPinId} />
              </div>
              <SourceList className="mt-6" sources={mission.sources} />
            </article>
          ))}
        </div>
      </section>
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
    <div>
      <dt className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
        {label}
      </dt>
      <dd className="mt-2 text-white">
        {href ? (
          <Link href={href} className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
            {value}
          </Link>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
