import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { cheatCard } from "@/components/cheats/cheatCards";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { cheatBasics } from "@/src/data/launch/cheat-faqs";
import { cheatGroups, cheatsIn } from "@/src/data/launch/cheats";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

const title = "GTA 6 Cheats: All 61 Cheat Codes and How to Unlock Them";
const description =
  "All 61 GTA 6 cheats with every known code and each unlock goal: money, infinite ammo, body armor, vehicle spawns, weather, and filters. Unofficial fan site.";

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

      <QuickFacts facts={cheatBasics} wide />

      {sections.map((section) => (
        <CardGrid key={section.id} id={section.id} heading={section.heading} count={section.list.length} dense>
          {section.list.map((cheat) => (
            <SimpleCard key={cheat.name} {...cheatCard(cheat)} small />
          ))}
        </CardGrid>
      ))}

      <QuickGuideGrid guides={quickGuideCards(["cheats-locked"])} />
    </PageShell>
  );
}
