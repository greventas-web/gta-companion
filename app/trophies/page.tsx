import type { Metadata } from "next";
import Link from "next/link";

import FaqSection, { RelatedLinks, type FaqItem } from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { SourceList } from "@/components/SourceLink";
import TrophyTable from "@/components/trophies/TrophyTable";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { TROPHY_COUNTS, TROPHY_LIST_NOTE, trophies } from "@/src/data/trophies";

const platinum = trophies.find((trophy) => trophy.slug === "vice-got-a-price");
const longRoad = trophies.find((trophy) => trophy.slug === "a-long-road");
const publishedCount = trophies.length;
const trophyFaqs: FaqItem[] = [
  {
    question: "How many trophies are in GTA 6?",
    answer: `The list published at launch has ${TROPHY_COUNTS.total} trophies and achievements. ${publishedCount} non-hidden trophies are listed on this page. The ${TROPHY_COUNTS.hidden} hidden trophies are story spoilers and are left out.`,
    sources: TROPHY_LIST_NOTE.publishedSources,
  },
  {
    question: "What is the GTA 6 platinum trophy?",
    answer: platinum
      ? `The platinum trophy is ${platinum.name}. Its description is: ${platinum.description}`
      : "The platinum trophy is named on the published list.",
    sources: platinum?.sources ?? TROPHY_LIST_NOTE.publishedSources,
  },
  {
    question: "Is the Xbox achievement list the same?",
    answer:
      "Yes. The same list applies to Xbox achievements. Gamerscore values are not shown yet.",
    sources: TROPHY_LIST_NOTE.publishedSources,
  },
  {
    question: "What do you need for 100% completion?",
    answer: longRoad
      ? `The gold trophy ${longRoad.name} asks you to attain 100% completion. That is separate from earning the platinum, and the hidden trophies stay off this page.`
      : "100% completion is listed as its own trophy, separate from the platinum.",
    sources: longRoad?.sources ?? TROPHY_LIST_NOTE.publishedSources,
  },
];

const title = "GTA 6 Trophies List";

const description =
  trophies.length === 0
    ? `Unofficial GTA 6 trophies and Xbox achievements list. No official list has been published yet. ${UNOFFICIAL_DISCLAIMER}`
    : `Unofficial GTA 6 trophies list and Xbox achievements from the published lists. Hidden story trophies are held back for now. ${UNOFFICIAL_DISCLAIMER}`;

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
      {trophies.length > 0 ? (
        <JsonLd
          data={itemListJsonLd(
            "GTA 6 trophies list",
            "/trophies",
            trophies.map((trophy) => ({
              name: trophy.name,
              url: `/trophies/${trophy.slug}`,
            }))
          )}
        />
      ) : null}
      <PageHero
        badge={trophies.length === 0 ? "Unofficial · not published yet" : "Unofficial"}
        title={
          trophies.length === 0
            ? "Trophies"
            : `GTA 6 trophy list: ${TROPHY_COUNTS.total} trophies and the platinum`
        }
        description={
          trophies.length === 0
            ? `A GTA 6 trophies list and Xbox achievement list will go in the table below after Sony, Microsoft, or Rockstar publishes one. Nothing is filled in early. Grand Theft Auto VI launches ${SITE.launchLabel}.`
            : `The list published at launch has ${TROPHY_COUNTS.total} trophies and achievements, including the platinum ${platinum ? platinum.name : "trophy"}. The ${trophies.length} non-hidden ones are below. The ${TROPHY_COUNTS.hidden} hidden ones are story spoilers and are left out.`
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

      {trophies.length > 0 ? (
        <>
          <section className="mt-16 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
            <h2 className="text-2xl font-black">The platinum</h2>
            <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
              {platinum
                ? `The platinum trophy is ${platinum.name}. The published description is: “${platinum.description}” It is earned by collecting the other trophies. Hidden story trophies are not named here.`
                : "The platinum trophy is on the published list."}
            </p>
            {platinum ? (
              <p className="mt-4">
                <Link
                  href={`/trophies/${platinum.slug}`}
                  className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
                >
                  {platinum.name} trophy page
                </Link>
              </p>
            ) : null}
          </section>
          <FaqSection faqs={trophyFaqs} />
          <RelatedLinks
            links={[
              { href: "/how-long-is-gta-6", label: "How long is GTA 6?" },
              { href: "/collectibles", label: "Collectibles" },
              { href: "/gta-6-apps", label: "Scooter Bros, BuckMe, and WAiNK" },
              { href: "/activities", label: "Activities" },
            ]}
          />
        </>
      ) : null}
    </PageShell>
  );
}
