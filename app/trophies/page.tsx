import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import TrophyTable from "@/components/trophies/TrophyTable";
import { launchMetadata } from "@/lib/launch";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { TROPHY_COUNTS, TROPHY_LIST_NOTE, trophies } from "@/src/data/trophies";

const title =
  trophies.length === 0
    ? "GTA 6 trophies list (unofficial) — not published yet"
    : "GTA 6 trophies list (unofficial)";

const description =
  trophies.length === 0
    ? `GTA 6 trophies and Xbox achievements. No official list has been published. ${SITE.slogan}. ${UNOFFICIAL_DISCLAIMER}`
    : `GTA 6 trophies and Xbox achievements from the published lists. ${SITE.slogan}. ${UNOFFICIAL_DISCLAIMER}`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: [
    "GTA 6 trophies list",
    "GTA 6 trophy list",
    "GTA 6 achievements",
    "GTA 6 platinum",
    "GTA VI trophies",
  ],
};

export default function TrophiesPage() {
  return (
    <PageShell>
      <PageHero
        badge={trophies.length === 0 ? "Unofficial · not published yet" : "Unofficial"}
        title="Trophies"
        description={
          trophies.length === 0
            ? `A GTA 6 trophies list and Xbox achievement list will go in the table below after Sony, Microsoft, or Rockstar publishes one. Nothing is filled in early. Grand Theft Auto VI launches ${SITE.launchLabel}.`
            : `The list published at launch has ${TROPHY_COUNTS.total} trophies and achievements. The ${trophies.length} non-hidden ones are below. The ${TROPHY_COUNTS.hidden} hidden ones are story spoilers and are left out.`
        }
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      {trophies.length === 0 ? (
        <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8 sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-violet-300">
            Checked {TROPHY_LIST_NOTE.checkedOn}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em]">
            No official list yet
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
            PlayStation’s Grand Theft Auto VI page confirms the PS5 release and
            does not list trophies. Rockstar’s Grand Theft Auto VI page does not
            list trophies or achievements either. No count, grade, or Gamerscore
            is shown here until a list is public.
          </p>
          <SourceList className="mt-6" sources={[...TROPHY_LIST_NOTE.sources]} />
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-3xl font-black tracking-[-0.03em]">
          {trophies.length === 0 ? "Ready for the official list" : "Published list"}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {trophies.length === 0
            ? "Each row can hold a name, description, PlayStation or Xbox label, tips, and a missable flag. Tips that would spoil a job can stay hidden on that trophy’s page."
            : "Names, descriptions, and PS5 grades as the published lists show them. The same list applies to Xbox achievements. Gamerscore is not shown yet."}
        </p>
        {trophies.length > 0 ? (
          <SourceList className="mt-4" sources={[...TROPHY_LIST_NOTE.publishedSources]} />
        ) : null}
        <TrophyTable />
      </section>
    </PageShell>
  );
}
