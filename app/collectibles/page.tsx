import Link from "next/link";

import CitedNotes from "@/components/CitedNotes";
import FaqSection, { type FaqItem } from "@/components/intent/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  gameInformerAnimals,
  gamespotTgg,
} from "@/src/data/gameplay/confirmed";
import { animalPrintNotes } from "@/src/data/gameplay/guardian";
import { batch2Sources as src } from "@/src/data/launch/batch2-sources";
import { collectibleGuides } from "@/src/data/launch/collectible-guides";

export const metadata = pageMetadata(
  "GTA 6 collectibles",
  "GTA 6 collectibles confirmed at launch: collectible card sets, Cocaine Flamingos, stunt jumps, WAiNK It scans, meditation spots, and more, with counts where two guides agree. Unofficial fan site."
);

const birdLog = animalPrintNotes[0];

const cultr = src.cultrTrophies;
const gamespew = src.gamespewTrophies;
const powerpyx = src.powerpyxProgress;
const bigLead = src.bigLead;

const launchNotes = [
  {
    title: "Collectible Cards",
    body: "Cards come in named sets, such as the Vice City Flamingos. PowerPyx lists 18 sets and 480 unique cards, and says the 100% list asks for 15 complete sets. The published trophy Don’t Touch My Deck asks you to complete 3 sets.",
    source: cultr,
    sources: [cultr, gamespew, powerpyx, src.powerpyxCards, src.powerpyxHundred, bigLead],
  },
  {
    title: "Cocaine Flamingos",
    body: "Hidden Cocaine Flamingo figures show up across the map. Destroying 50 unlocks the Inflatable Flamingo vehicle cheat after the story. PowerPyx counts 125 and says the 100% list asks for any 100 of them.",
    source: powerpyx,
    sources: [powerpyx, src.powerpyxFlamingos, src.powerpyxHundred, bigLead, src.powerpyxCheats, src.gamesradarCheats],
  },
  {
    title: "Stunt jumps",
    body: "Stunts are tracked in four categories. PowerPyx and DayOne both count 130 stunt jumps, 202 under-the-bridge stunts, 40 knife flights, and 25 base jumps (397 in total). The published trophy Cunning Stunts asks for 250 stunts.",
    source: powerpyx,
    sources: [powerpyx, src.powerpyxStunts, src.dayOneLeisure, cultr, gamespew],
  },
  {
    title: "WAiNK It scans",
    body: "You scan landmarks, curiosities, and sculptures with the WAiNK phone app. The trophy You WAiNKer! asks for WAiNK It at 100 locations.",
    source: cultr,
    sources: [cultr, gamespew, powerpyx, bigLead],
  },
  {
    title: "Meditation spots",
    body: "Meditation spots are spread across Leonida. The trophy Positive Mental Attitude asks you to meditate at every spot. PowerPyx counts 18 spots and says the 100% list asks for 15 of them (single-source for those counts).",
    source: cultr,
    sources: [cultr, gamespew, powerpyx, src.powerpyxHundred, bigLead],
  },
  {
    title: "Styles",
    body: "Some hair, makeup, and clothing styles are found as collectibles, including magazine styles for Jason and Lucia.",
    source: powerpyx,
    sources: [powerpyx, bigLead],
  },
  {
    title: "Vehicle discovery",
    body: "Vehicles you find are logged in the in-game progress menu. The trophy Whip It Good asks you to discover 100 vehicles.",
    source: cultr,
    sources: [cultr, gamespew, powerpyx],
  },
];

const faqs: FaqItem[] = [
  {
    question: "What collectibles are in GTA 6?",
    answer:
      "Launch-day coverage confirms collectible card sets, Cocaine Flamingos, stunt jumps, WAiNK It scans, meditation spots, styles, and vehicle discovery, among other Progress-menu categories.",
    sources: [powerpyx, bigLead, cultr, gamespew],
  },
  {
    question: "How many collectible card sets are in GTA 6?",
    answer:
      "PowerPyx lists 18 sets and 480 unique cards, and says the 100% list asks for 15 complete sets. The published trophy Don’t Touch My Deck asks you to complete 3 sets.",
    sources: [powerpyx, src.powerpyxCards, src.powerpyxHundred, cultr, gamespew],
  },
  {
    question: "How many Cocaine Flamingos are in GTA 6?",
    answer:
      "PowerPyx counts 125 and says the 100% list asks for any 100 of them. Destroying 50 unlocks the Inflatable Flamingo vehicle cheat after the story.",
    sources: [src.powerpyxFlamingos, src.powerpyxHundred, src.powerpyxCheats, src.gamesradarCheats],
  },
];

export default function Page() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 collectibles",
          "/collectibles",
          [
            ...collectibleGuides.map((guide) => ({ name: guide.title, url: `/collectibles/${guide.slug}` })),
            ...launchNotes.map((note) => ({ name: note.title })),
          ]
        )}
      />
      <PageHero
        badge="Unofficial fan notes"
        title="Collectibles"
        description="Collectible types confirmed by launch coverage and the published trophy list, with counts where a launch-day guide published them."
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {collectibleGuides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/collectibles/${guide.slug}`}
            className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 transition hover:border-violet-400/40"
          >
            <h2 className="text-2xl font-black">{guide.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{guide.intro}</p>
            <p className="mt-4 text-sm font-semibold text-violet-200">Open guide</p>
          </Link>
        ))}
      </section>

      <CitedNotes
        eyebrow="Confirmed at launch"
        title="Collectibles in the game"
        intro="Each type below is reported by at least two independent sources, except where a count is labeled as coming from one launch-day guide."
        notes={launchNotes}
      />

      <CitedNotes
        eyebrow="Confirmed so far"
        title="What Rockstar said before launch"
        intro="A complete list is not on the Rockstar site. The notes below are from interviews Rockstar gave."
        notes={[
          {
            title: "Fishing challenges and collectibles",
            body: "Rob Nelson told TGG that fishing is catch-and-release, and that players can complete fishing challenges and collectibles. GameSpot reported the interview.",
            source: gamespotTgg,
          },
          {
            title: "Rare, Discoverable, and Legendary animals",
            body: "Game Informer's Rockstar cover story says you can track certain animals categorized as Rare, Discoverable, and Legendary. Rockstar has not named those animals.",
            source: gameInformerAnimals,
          },
          {
            title: birdLog.title,
            body: birdLog.body,
            source: birdLog.source,
          },
        ]}
      />

      <FaqSection faqs={faqs} heading="GTA 6 collectibles: questions" />

      <p className="mt-10 text-zinc-400">
        <Link href="/shooting-ranges" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Shooting ranges
        </Link>
        {" · "}
        <Link href="/trophies" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Trophies
        </Link>
        {" · "}
        <Link href="/map" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Leonida map
        </Link>
      </p>
    </PageShell>
  );
}
