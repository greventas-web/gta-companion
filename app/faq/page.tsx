import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
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
      <QuickFacts
        facts={[
          { label: "Out", value: "Nov 19, 2026" },
          { label: "Consoles", value: "PS5, Xbox Series X|S" },
          { label: "PC", value: "No date yet" },
          { label: "Standard", value: "$79.99" },
          { label: "Ultimate", value: "$99.99" },
          { label: "Upgrade", value: "$20.00" },
          { label: "Rating", value: "M (Mature 17+)" },
          { label: "Boxed copy", value: "Download code" },
          { label: "Playable", value: "Jason and Lucia" },
          { label: "Made by Rockstar?", value: "This site isn't" },
        ]}
      />
      <CardGrid heading="More">
        <SimpleCard href="/characters" title="Characters" image="/images/official/categories/characters.webp" />
        <SimpleCard href="/launch" title="Editions" image="/images/official/editions/ultimate_edition_rideout_customs_01.webp" />
        <SimpleCard href="/wanted-system" title="Wanted system" />
        <SimpleCard href="/gta-6-apps" title="Phone apps" image="/images/footage/phone/snapmatic.webp" imageAlt="The Snapmatic app on the in-game phone" />
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["how-to-save", "online", "first-person", "replay-missions", "switch-characters", "buy-a-house", "buy-a-car", "fast-travel"])} />
    </PageShell>
  );
}
