import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { cheatCard } from "@/components/cheats/cheatCards";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { cheatBasics } from "@/src/data/launch/cheat-faqs";
import { cheatGroups, cheatsIn } from "@/src/data/launch/cheats";

const title = "GTA 6 Cheats: All 61 Cheat Codes and How to Unlock Them";
const description =
  "All 61 GTA 6 cheats with every known code and each unlock goal: money, infinite ammo, body armor, vehicle spawns, weather, and filters. Unofficial fan site.";

export const metadata: Metadata = launchMetadata(title, description);

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

      {cheatGroups.map((group) => {
        const list = cheatsIn(group.category);
        return (
          <CardGrid key={group.slug} id={group.slug} heading={group.label} count={list.length} dense>
            {list.map((cheat) => (
              <SimpleCard key={cheat.name} {...cheatCard(cheat)} small />
            ))}
          </CardGrid>
        );
      })}

    </PageShell>
  );
}
