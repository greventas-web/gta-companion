import type { Metadata } from "next";
import Link from "next/link";

import MapPinLink from "@/components/map/MapPinLink";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  MISSION_TYPE_LABEL,
  missions,
  otherMissions,
  STORY_LIST_NOTE,
  storyChapters,
} from "@/src/data/missions";

const title = "GTA 6 Missions List – Story Missions";
const description = `Unofficial, spoiler-safe GTA 6 missions list. Story missions in Story Recap order for Chapters 1 to 3, with sources. Later chapters stay hidden for now. Plot and rewards stay hidden until you reveal them. ${UNOFFICIAL_DISCLAIMER}`;

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
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 missions list",
          "/missions",
          missions.map((mission) => ({
            name: mission.name,
            url: `/missions/${mission.slug}`,
          }))
        )}
      />
      <PageHero
        badge="Unofficial · spoiler-safe"
        title="Missions"
        description={`A GTA 6 missions list in the order the in-game Story Recap shows, from launch coverage. Names only, no plot. Anything that would spoil the story stays behind a reveal.`}
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-10">
        <h2 className="text-3xl font-black tracking-[-0.03em]">
          Story missions in order
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {STORY_LIST_NOTE} Each name links to a page with its sources.
        </p>
        <div className="mt-8 grid gap-6">
          {storyChapters.map((chapter) => (
            <article
              key={chapter.chapter}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
                Chapter {chapter.chapter} · {chapter.missions.length} missions
              </p>
              <h3 className="mt-3 text-2xl font-black">
                {chapter.name ?? `Chapter ${chapter.chapter}`}
              </h3>
              <ol className="mt-6 grid gap-2 sm:grid-cols-2">
                {chapter.missions.map((mission) => (
                  <li key={mission.slug} className="flex gap-3 text-zinc-300">
                    <span className="w-7 shrink-0 text-right font-black text-violet-300">
                      {mission.order}.
                    </span>
                    <Link
                      href={`/missions/${mission.slug}`}
                      className="underline decoration-white/20 underline-offset-4 transition hover:text-violet-200"
                    >
                      {mission.name}
                    </Link>
                  </li>
                ))}
              </ol>
              <SourceList className="mt-6" sources={chapter.sources} />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-[-0.03em]">
          Edition and side jobs
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          Jobs named outside the story list, with a source on each one.
        </p>

        <div className="mt-8 grid gap-6">
          {otherMissions.map((mission) => (
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
