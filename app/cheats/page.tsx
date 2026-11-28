import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { cheatCard } from "@/components/cheats/cheatCards";
import CheatTable from "@/components/cheats/CheatTable";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { cheatBasics } from "@/src/data/launch/cheat-faqs";
import { cheatGroups, cheatsIn } from "@/src/data/launch/cheats";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

const title = "GTA 6 Cheats: All 61 Cheat Codes and How to Unlock Them";
const description =
  "All 61 GTA 6 cheats with every known button code and unlock. Cheats turn off saves and trophies for that session. No ending spoilers. Unofficial fan site.";

const cheatIntro = [
  "There are 61 cheats: 10 for the player, 11 for combat, 21 that spawn a vehicle, 3 that change time or weather, and 16 screen filters. The table on this page is that full list. Each row uses the effect, the unlock and the button code already printed on that cheat's own page. If a sequence is not confirmed, the code cell says so, and the note under it is the same note the cheat page carries.",
  "Cheats stay locked until the story is finished. Before that, the Cheats menu does not appear and the button codes do nothing. Most cheats also have their own unlock on top of that, such as shooting-range medals, workouts, collectibles or a discovery in the Progress menu. This page does not describe how the story ends. When a row says \"Finish the story,\" it only means the menu exists. It does not say what that ending is.",
  "Entering a code is the same every time. Press D-pad Up to open the phone. Hold L1 and press R1 on PlayStation, or hold LB and press RB on Xbox, then press the D-pad buttons in order. The arrows in the table are that sequence: up, down, left and right.",
  "Using a cheat turns off trophies, achievements and saving for the rest of that session. Save Game stays unavailable until you are in a session where you have not entered one. Make the save you care about before you type a code. That rule covers every row, including the one money cheat, which adds $250,000 and still turns saving and trophies off for the session.",
  "The cards under the table are the same 61, split into weapons, player, vehicles and world, if you would rather open one cheat at a time. Nothing here goes past the unlock line. Later story chapters are not described.",
];

export const metadata: Metadata = launchMetadata(title, description);

/** Four simple groups: weapons, player, vehicles, world (time, weather and filters). */
const sections = [
  { id: "weapons", heading: "Weapons", list: cheatsIn("combat") },
  { id: "player", heading: "Player", list: cheatsIn("player") },
  { id: "vehicles", heading: "Vehicles", list: cheatsIn("vehicle") },
  { id: "world", heading: "World", list: [...cheatsIn("environment"), ...cheatsIn("filter")] },
];

export default function CheatsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 cheats",
          "/cheats",
          cheatGroups.map((group) => ({ name: group.label, url: `/cheats/${group.slug}` }))
        )}
      />
      <SimpleHero title="Cheats" />

      <section className="mt-8 max-w-3xl space-y-4">
        {cheatIntro.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-zinc-200">
            {paragraph}
          </p>
        ))}
      </section>

      <aside
        role="note"
        className="mt-8 max-w-3xl rounded-2xl border border-amber-300/40 bg-amber-400/10 px-5 py-4"
      >
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-amber-200">Saves and trophies</p>
        <p className="mt-2 text-base font-semibold leading-7 text-amber-50">
          Entering a cheat turns off trophies, achievements and saving for the rest of that session.
        </p>
      </aside>

      <QuickFacts facts={cheatBasics} wide />
      <CheatTable />

      {sections.map((section) => (
        <CardGrid key={section.id} id={section.id} heading={section.heading} count={section.list.length} dense>
          {section.list.map((cheat) => (
            <SimpleCard key={cheat.name} {...cheatCard(cheat)} small />
          ))}
        </CardGrid>
      ))}

      <QuickGuideGrid guides={quickGuideCards(["cheats-locked", "flamingos"])} />
    </PageShell>
  );
}
