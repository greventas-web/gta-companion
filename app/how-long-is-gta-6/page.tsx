import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import { storyLength } from "@/src/data/launch/launch-facts";
import { storyChapters } from "@/src/data/missions";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

const title = "How Long Is GTA 6? 93 Missions and Story Length";
const description = `How long is GTA 6? About ${storyLength.pcGamerMissions} to ${storyLength.pressStartMissions} story missions over ${storyLength.chapters} chapters, and roughly 50 to 80 hours for the story. Unofficial fan site.`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: ["how long is GTA 6", "GTA 6 story length", "GTA 6 how many missions", "GTA 6 93 missions", "GTA VI story length"],
};

export default function HowLongIsGta6Page() {
  return (
    <PageShell>
      <SimpleHero title="How long is GTA 6?" />
      <QuickFacts
        facts={[
          { label: "Story missions", value: `${storyLength.pcGamerMissions} to ${storyLength.pressStartMissions}` },
          { label: "Chapters", value: `${storyLength.chapters}` },
          { label: "Story time", value: "About 50 to 80 hours" },
        ]}
      />
      <CardGrid heading="Chapters">
        {storyChapters.map((chapter) => (
          <SimpleCard
            key={chapter.chapter}
            href={`/missions#chapter-${chapter.chapter}`}
            eyebrow={`Chapter ${chapter.chapter}`}
            title={chapter.name ?? `Chapter ${chapter.chapter}`}
            chips={[{ value: `${chapter.missions.length} missions` }]}
            small
          />
        ))}
      </CardGrid>
      <CardGrid heading="Track your run">
        <SimpleCard href="/missions" title="Missions" />
        <SimpleCard href="/trophies" title="Trophies" />
        <SimpleCard href="/collectibles" title="Collectibles" />
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["how-many-chapters", "replay-missions", "how-to-save", "online", "beginner-tips"])} />
    </PageShell>
  );
}
