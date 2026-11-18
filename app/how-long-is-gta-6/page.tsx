import type { Metadata } from "next";
import Link from "next/link";

import FaqSection, { RelatedLinks, type FaqItem } from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { storyLength } from "@/src/data/launch/launch-facts";
import { STORY_LIST_NOTE, storyChapters } from "@/src/data/missions";
import { TROPHY_COUNTS, trophies } from "@/src/data/trophies";

const listedCount = storyChapters.reduce(
  (sum, chapter) => sum + chapter.missions.length,
  0
);

const title = "How Long Is GTA 6? 93 Missions and Story Length";
const description = `How long is GTA 6? Press Start counts ${storyLength.pressStartMissions} story missions across ${storyLength.chapters} chapters and finished the story in ${storyLength.pressStartPlaythrough}. PowerPyx estimates ${storyLength.powerpyxEstimate}. PC Gamer counts ${storyLength.pcGamerMissions}. Unofficial; game © Rockstar Games. ${UNOFFICIAL_DISCLAIMER}`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: [
    "how long is GTA 6",
    "GTA 6 story length",
    "GTA 6 how many missions",
    "GTA 6 93 missions",
    "GTA VI story length",
  ],
};

const longRoad = trophies.find((trophy) => trophy.slug === "a-long-road");

const faqs: FaqItem[] = [
  {
    question: "How many story missions are in GTA 6?",
    answer: `Press Start counts ${storyLength.pressStartMissions} story missions across ${storyLength.chapters} chapters in the in-game Story Recap. PC Gamer counts ${storyLength.pcGamerMissions}. This site lists the names from Chapters ${storyLength.listedChapters} (${listedCount} missions) and leaves Chapters 4 and 5 off for now, because those names give away late-story events.`,
    sources: storyLength.sources,
  },
  {
    question: "How long does the GTA 6 story take?",
    answer: `Launch-day reviewers do not agree on a single number. Press Start finished the story in ${storyLength.pressStartPlaythrough}. PowerPyx estimates the story at ${storyLength.powerpyxEstimate}. Your time will depend on how much you stick to the story missions.`,
    sources: storyLength.sources,
  },
  {
    question: "Does 100% completion mean the same thing as finishing the story?",
    answer: longRoad
      ? `No. Finishing the story missions is separate from 100% completion. The trophy ${longRoad.name} asks you to attain 100% completion, and that is one of the ${TROPHY_COUNTS.total} trophies in the published list.`
      : `No. Finishing the story missions is separate from 100% completion.`,
    sources: longRoad?.sources,
  },
  {
    question: "Are the chapter 4 and 5 missions on this site?",
    answer:
      "Not yet. Their names give away late-story events, so they are held back. Chapters 1 to 3 are on the missions list, in Story Recap order, with sources and no plot in the public text.",
    sources: storyLength.sources,
  },
];

export default function HowLongIsGta6Page() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial · confirmed at launch"
        title="How long is GTA 6?"
        description={`Press Start counts ${storyLength.pressStartMissions} story missions across ${storyLength.chapters} chapters and finished the story in ${storyLength.pressStartPlaythrough}. PowerPyx estimates the story at ${storyLength.powerpyxEstimate}. PC Gamer counts ${storyLength.pcGamerMissions} missions.`}
      />

      <p className="text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI is © Rockstar Games.
      </p>

      <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">Story length, with sources</h2>
        <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
          {STORY_LIST_NOTE} Reviewer play times are estimates from those same
          launch-day write-ups, not a figure Rockstar has published.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <Fact
            label="Press Start count"
            value={`${storyLength.pressStartMissions} missions, ${storyLength.chapters} chapters`}
          />
          <Fact
            label="PC Gamer count"
            value={`${storyLength.pcGamerMissions} missions`}
          />
          <Fact
            label="Press Start playthrough"
            value={storyLength.pressStartPlaythrough}
          />
          <Fact
            label="PowerPyx estimate"
            value={storyLength.powerpyxEstimate}
          />
        </dl>
        <SourceList className="mt-6" sources={storyLength.sources} />
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-black tracking-[-0.03em]">
          Chapters listed on this site
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {listedCount} story missions from Chapters {storyLength.listedChapters}{" "}
          are on the{" "}
          <Link
            href="/missions"
            className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
          >
            missions list
          </Link>
          , in the order the in-game Story Recap shows. Names only, no plot.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {storyChapters.map((chapter) => (
            <article
              key={chapter.chapter}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
                Chapter {chapter.chapter}
              </p>
              <h3 className="mt-3 text-2xl font-black">
                {chapter.name ?? `Chapter ${chapter.chapter}`}
              </h3>
              <p className="mt-4 text-zinc-400">
                {chapter.missions.length} missions
              </p>
              <SourceList className="mt-4" sources={chapter.sources} />
            </article>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <RelatedLinks
        links={[
          { href: "/missions", label: "Missions list" },
          { href: "/trophies", label: "Trophy list" },
          { href: "/map", label: "Community map" },
          { href: "/collectibles", label: "Collectibles" },
        ]}
      />
    </PageShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/40 p-6">
      <dt className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
        {label}
      </dt>
      <dd className="mt-2 text-xl font-black text-white">{value}</dd>
    </div>
  );
}

