import type { Metadata } from "next";
import Link from "next/link";

import CheatTable from "@/components/cheats/CheatTable";
import FaqSection from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { cheatSources } from "@/src/data/launch/batch1-sources";
import { cheatBasics, cheatFaqs } from "@/src/data/launch/cheat-faqs";
import { cheatList } from "@/src/data/launch/cheat-list";
import { cheatGroups, cheatsIn } from "@/src/data/launch/cheats";

const title = "GTA 6 Cheats: All 61 Cheat Codes and How to Unlock Them";
const description =
  "All 61 GTA 6 cheats with every code published so far and each unlock requirement: money, infinite ammo, body armor, vehicle spawns, weather, and filters. Unofficial fan site.";

export const metadata: Metadata = launchMetadata(title, description);

export default function CheatsPage() {
  const withCode = cheatList.filter((cheat) => cheat.code).length;

  return (
    <PageShell>
      <PageHero
        badge="Unofficial · launch-day data"
        title="GTA 6 Cheats"
        description={`All 61 cheats, ${withCode} codes published so far, and how to unlock each one. Codes are listed only when two guides print the same sequence. Updated November 18, 2026.`}
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-10 rounded-[32px] border border-violet-500/20 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">How cheats work in GTA 6</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-zinc-300">
          {cheatBasics.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <SourceList className="mt-4" sources={cheatSources} />
      </section>

      {cheatGroups.map((group) => (
        <section key={group.slug} className="mt-14">
          <h2 className="text-3xl font-black tracking-[-0.03em]">
            <Link href={`/cheats/${group.slug}`} className="hover:text-violet-200">
              {group.label}
            </Link>{" "}
            <span className="text-zinc-500">({cheatsIn(group.category).length})</span>
          </h2>
          <p className="mt-3 text-zinc-400">{group.intro}</p>
          <CheatTable cheats={cheatsIn(group.category)} />
        </section>
      ))}

      <FaqSection faqs={cheatFaqs} heading="GTA 6 cheats: questions" />

      <p className="mt-10 text-zinc-400">
        <Link href="/money-methods" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          How to make money before the story ends
        </Link>
        {" · "}
        <Link href="/weapons" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          All weapons
        </Link>
        {" · "}
        <Link href="/wanted-system" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Wanted system and Heat
        </Link>
      </p>
    </PageShell>
  );
}
