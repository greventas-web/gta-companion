import type { Metadata } from "next";
import { cheatSources } from "@/src/data/launch/batch1-sources";

import FaqSection, { RelatedLinks, type FaqItem } from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  girlypopGroup,
  vehicleCounts,
} from "@/src/data/launch/launch-facts";

const title = "GTA 6 Girlypop Vehicles Cheat Filter";
const description = `GTA 6 Girlypop is a Standout vehicle group of ${girlypopGroup.count} vehicles. Finding all of them unlocks a cheat filter. They do not count toward the ${vehicleCounts.neededFor100} base-model scans for 100% completion. Unofficial; game © Rockstar Games. ${UNOFFICIAL_DISCLAIMER}`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: [
    "GTA 6 Girlypop",
    "GTA 6 Girlypop vehicles",
    "GTA 6 Girlypop cheat filter",
    "GTA 6 Standout vehicles",
    "GTA VI Girlypop",
  ],
};

const faqs: FaqItem[] = [
  {
    question: "What is Girlypop in GTA 6?",
    answer: `Girlypop is one Standout vehicle group. Launch-day guides say the group has ${girlypopGroup.count} vehicles, and finding all of them unlocks a cheat filter.`,
    sources: girlypopGroup.sources,
  },
  {
    question: "Does Girlypop count toward 100% completion?",
    answer: `No. Standout vehicles are unique custom vehicles in fixed places, grouped into styles. They do not count toward the ${vehicleCounts.neededFor100} base-model scans needed for 100% completion. The game has ${vehicleCounts.total} vehicles in total: ${vehicleCounts.baseModels} base models and ${vehicleCounts.standout} Standout vehicles.`,
    sources: vehicleCounts.sources,
  },
  {
    question: "What does the Girlypop cheat filter do, and what is the code?",
    answer:
      "Finding all 16 Girlypop vehicles unlocks the Neon Jungle screen filter cheat, which adds neon highlights to the world. Like every GTA 6 cheat, it works only after the story. Its button code has not been published yet; see the screen filter cheats page.",
    sources: [...girlypopGroup.sources, ...cheatSources],
  },
  {
    question: "Where is the list of all 16 Girlypop vehicles?",
    answer:
      "The 16 names are not on this site yet. When each name has a source, it will go in the vehicle database and this page will link to those entries.",
    sources: girlypopGroup.sources,
  },
];

export default function GirlypopPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial · confirmed at launch"
        title="GTA 6 Girlypop vehicles cheat filter"
        description={`${girlypopGroup.name} is a Standout group of ${girlypopGroup.count} vehicles. Finding all of them unlocks a cheat filter. They do not count toward the ${vehicleCounts.neededFor100} base-model scans for 100%.`}
      />

      <p className="text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI is © Rockstar Games.
      </p>

      <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">What is confirmed</h2>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <Fact label="Group" value={girlypopGroup.name} />
          <Fact label="Vehicles in the group" value={String(girlypopGroup.count)} />
          <Fact label="Unlock" value="Cheat filter, after you find all 16" />
          <Fact
            label="100% completion"
            value="Does not count toward the base-model goal"
          />
        </dl>
        <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
          Totals come from the in-game Progress menu (Map &gt; Progress &gt;
          Vehicles), as reported by launch-day guides: {vehicleCounts.total}{" "}
          vehicles, made up of {vehicleCounts.baseModels} base models and{" "}
          {vehicleCounts.standout} Standout vehicles. You log base models by
          scanning them with the WAiNK phone app.
        </p>
        <SourceList className="mt-6" sources={girlypopGroup.sources} />
      </section>

      <FaqSection faqs={faqs} />
      <RelatedLinks
        links={[
          { href: "/vehicles", label: "Vehicle database" },
          { href: "/gta-6-apps", label: "WAiNK, Scooter Bros, and BuckMe" },
          { href: "/phone/waink", label: "WAiNK app" },
          { href: "/cheats/screen-filter-cheats", label: "Screen filter cheats (Neon Jungle)" },
          { href: "/trophies", label: "Trophy list" },
          { href: "/map", label: "Community map" },
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
