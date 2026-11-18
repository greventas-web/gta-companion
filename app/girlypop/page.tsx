import type { Metadata } from "next";
import { cheatSources } from "@/src/data/launch/batch1-sources";

import FaqSection, { RelatedLinks, type FaqItem } from "@/components/intent/FaqSection";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import {
  girlypopGroup,
  vehicleCounts,
} from "@/src/data/launch/launch-facts";

const title = "GTA 6 Girlypop Vehicles Cheat Filter";
const description = `GTA 6 Girlypop is a Standout vehicle group of ${girlypopGroup.count} vehicles. Finding all of them unlocks a cheat filter. They do not count toward the ${vehicleCounts.neededFor100} base-model scans for 100% completion. Unofficial fan site; game © Rockstar Games.`;

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

export default function GirlypopPage() {
  return (
    <PageShell>
      <SimpleHero title="Girlypop vehicles" />
      <QuickFacts
        facts={[
          { label: "Vehicles", value: `${girlypopGroup.count}` },
          { label: "Find all", value: "Neon Jungle filter cheat" },
          { label: "Counts for 100%", value: "No" },
          { label: "Group", value: "Standout" },
        ]}
      />
      <CardGrid heading="Related">
        <SimpleCard href="/cheats/screen-filter-cheats" title="Screen filter cheats" />
        <SimpleCard href="/phone/waink" title="WAiNK" line="Scan vehicles to log them." />
        <SimpleCard href="/vehicles" title="Vehicles" image="/images/official/categories/vehicles.webp" />
        <SimpleCard href="/map" title="Map" image="/images/official/locations/vice-city.webp" />
      </CardGrid>
    </PageShell>
  );
}
