import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import WhereFaq from "@/components/where-to-find/WhereFaq";
import { mapPinHref } from "@/components/map/MapPinLink";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { whereToFindTopics, type WhereFaq as Faq } from "@/src/data/launch/where-to-find";

const title = "GTA 6 Where to Find – Stores, Garages, Mod Shops (Map)";
const description =
  "Where to find things in GTA 6: clothing stores, gun stores, Pay ’n’ Spray, mod shops, garages, safehouses, and barbers, each linked to pins on our Leonida map. Unofficial.";

export const metadata: Metadata = {
  ...pageMetadata(title, description),
  keywords: [
    "GTA 6 where to find",
    "GTA 6 locations",
    "GTA 6 store locations",
    "GTA 6 map locations",
  ],
};

const otherGuides = [
  { href: "/ammu-nation-locations", label: "All 24 Ammu-Nation locations" },
  { href: "/shooting-ranges", label: "Shooting ranges" },
  { href: "/collectibles", label: "Collectibles" },
  { href: "/collectibles/card-sets", label: "Collectible card sets" },
  { href: "/where-to-find/melee-and-explosives", label: "Melee and explosives" },
  { href: "/properties", label: "Properties" },
  { href: "/map", label: "Leonida map" },
];

const hubFaqs: Faq[] = [
  {
    question: "Where does GTA 6 start?",
    answer:
      "In Key Lento in the Leonida Keys. Jason’s house there is your first safehouse, and Key Lento has its own gun store, Pay ’n’ Spray, and mod shop.",
  },
  {
    question: "How do I find shops on the GTA 6 map?",
    answer:
      "Shops appear as you uncover the map. Use the map filters, such as Style for clothes and salons or Vehicles for Pay ’n’ Sprays and mod shops, to list every shop of a type.",
  },
  {
    question: "Why are some places not pinned on this map yet?",
    answer:
      "We only pin a building once a launch guide names it and its exact position is known. Until then the list links to the neighborhood.",
  },
];

const hubSources = [
  {
    label: "GameSpot, best things to do first",
    href: "https://www.gamespot.com/articles/5-best-things-to-do-first-in-gta-6/",
  },
  {
    label: "PowerPyx, all Pay ’n’ Spray locations",
    href: "https://www.powerpyx.com/gta-6-all-pay-n-spray-locations/",
  },
  {
    label: "PowerPyx, all mod shops",
    href: "https://www.powerpyx.com/gta-6-all-mod-shops-locations/",
  },
  {
    label: "PC Gamer, Ultimate Edition bonuses",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-ultimate-edition-bonuses/",
  },
  {
    label: "PowerPyx, all clothing stores",
    href: "https://www.powerpyx.com/gta-6-all-clothing-stores-locations/",
  },
];

export default function WhereToFindHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 where to find",
          "/where-to-find",
          whereToFindTopics.map((topic) => ({ name: topic.heading, url: `/where-to-find/${topic.slug}` }))
        )}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Where to find" }]} />

      <header className="relative mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#16101f] via-[#0B0B0D] to-black px-6 py-8 sm:px-10 sm:py-10">
        <p className="inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-violet-200">
          Unofficial · confirmed at launch
        </p>
        <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Where to find everything in GTA 6</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-200">
          Quick answers for the places you need first: clothes, guns, a respray, car mods, a garage, and a haircut. Every
          list links to the exact pin on our Leonida map, or to the neighborhood when the building is not pinned yet.
        </p>
      </header>

      <p className="mt-6 text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {whereToFindTopics.map((topic) => (
          <li
            key={topic.slug}
            className="flex flex-col rounded-[24px] border border-white/10 bg-[#0B0B0D] p-6 transition hover:border-violet-400/40"
          >
            <h2 className="text-xl font-black">
              <Link href={`/where-to-find/${topic.slug}`} className="hover:text-violet-200">
                {topic.heading}
              </Link>
            </h2>
            <p className="mt-3 flex-1 leading-7 text-zinc-300">{topic.answer}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/where-to-find/${topic.slug}`}
                className="inline-flex rounded-full bg-violet-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-violet-500"
              >
                Full list
              </Link>
              <Link
                href={mapPinHref(topic.mapPin) ?? "/map"}
                className="inline-flex rounded-full border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
              >
                On the map
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-10">
        <h2 className="text-xl font-black">More GTA 6 lists</h2>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-zinc-300">
          {otherGuides.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <WhereFaq faqs={hubFaqs} />

      <SourceList className="mt-8" sources={hubSources} />
      <p className="mt-3 text-xs leading-5 text-zinc-500">
        Grand Theft Auto VI, Leonida, and all in-game names belong to Rockstar Games. Map positions: gtadb.org and all
        contributors (CC BY 4.0).
      </p>
    </PageShell>
  );
}
