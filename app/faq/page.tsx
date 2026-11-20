import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  "GTA 6 FAQ",
  "Unofficial GTA 6 quick answers: release date, price, editions, rating, platforms and the main characters."
);

export default function FAQPage() {
  return (
    <PageShell>
      <SimpleHero title="Quick answers" />
      <CardGrid heading="More">
        <SimpleCard href="/characters" title="Characters" image="/images/official/categories/characters.webp" />
        <SimpleCard href="/launch" title="Editions" image="/images/official/editions/ultimate_edition_rideout_customs_01.webp" />
        <SimpleCard href="/wanted-system" title="Wanted system" />
        <SimpleCard href="/gta-6-apps" title="Phone apps" image="/images/footage/phone/snapmatic.webp" imageAlt="The Snapmatic app on the in-game phone" />
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["how-to-save", "online", "first-person", "replay-missions", "switch-characters", "buy-a-house", "buy-a-car", "fast-travel", "money-glitch", "unlock-map", "new-game", "platforms", "file-size", "physical-copy", "performance-mode", "ps5-pro", "how-many-chapters", "where-is-it-based", "cheats-locked", "skip-cutscenes", "accessibility", "trophies", "wasted-busted", "relationship", "criminal-profile", "weather", "bigfoot", "character-stats", "climbing", "public-transport"])} />
    </PageShell>
  );
}
