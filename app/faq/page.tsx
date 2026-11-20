import { faqPageJsonLd, type FaqItem } from "@/components/intent/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  "GTA 6 FAQ",
  "Unofficial GTA 6 quick answers: release date, price, editions, rating, platforms and the main characters."
);

/** Content batch 3. Fact check: launch-prep/content-batch-3-factcheck.md */
const faqs: FaqItem[] = [
  {
    question: "Does GTA 6 have a first-person mode?",
    answer:
      "Not a full one. Put an optic on a gun at Ammu-Nation, then aim and press R3 to look down the scope in first person. Pulling out your phone while driving also switches to first person.",
  },
  {
    question: "How many challenges are in GTA 6?",
    answer: "80, in 8 groups of 10. Any 50 unlock One Last Thing, and 70 count for 100%.",
  },
  {
    question: "Where do you sell stolen goods in GTA 6?",
    answer: "At a fence, shown as a green icon with their initials. Yasmani in Little Cuba pays best for jewelry and marked bills.",
  },
];

export default function FAQPage() {
  return (
    <PageShell>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <SimpleHero title="Quick answers" />
      <QuickFacts
        facts={[
          { label: "First person", value: "Scoped aim only" },
          { label: "Challenges", value: "80" },
        ]}
      />
      <CardGrid heading="More">
        <SimpleCard href="/characters" title="Characters" image="/images/official/categories/characters.webp" />
        <SimpleCard href="/launch" title="Editions" image="/images/official/editions/ultimate_edition_rideout_customs_01.webp" />
        <SimpleCard href="/wanted-system" title="Wanted system" />
        <SimpleCard href="/gta-6-apps" title="Phone apps" image="/images/footage/phone/snapmatic.webp" imageAlt="The Snapmatic app on the in-game phone" />
        <SimpleCard href="/challenges" title="Challenges" />
        <SimpleCard href="/where-to-find/fences" title="Fences" />
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["how-to-save", "online", "first-person", "replay-missions", "switch-characters", "buy-a-house", "buy-a-car", "fast-travel", "money-glitch", "unlock-map", "new-game", "platforms", "file-size", "physical-copy", "performance-mode", "ps5-pro", "how-many-chapters", "where-is-it-based", "cheats-locked", "skip-cutscenes", "accessibility", "trophies", "wasted-busted", "relationship", "criminal-profile", "weather", "bigfoot", "character-stats", "climbing", "public-transport"])} />
    </PageShell>
  );
}
