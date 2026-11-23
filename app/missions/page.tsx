import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import MissionCard from "@/components/simple/MissionCard";
import { CardGrid, SimpleHero, TrackProgress } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { editionMissions, missions, sideMissions, storyChapters } from "@/src/data/missions";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

const title = "GTA 6 Missions List – Story Missions";
const description =
  "Unofficial spoiler-safe GTA 6 missions: Chapters 1 to 3 in order, plus side missions. Later chapters stay hidden. Not affiliated with Rockstar Games.";

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: ["GTA 6 missions list", "GTA 6 missions", "GTA VI missions", "Grand Theft Auto VI missions", "GTA 6 Strangers and Freaks", "GTA 6 side missions"],
};

export default function MissionsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 missions list",
          "/missions",
          missions.map((mission) => ({ name: mission.name, url: `/missions/${mission.slug}` }))
        )}
      />
      <SimpleHero title="Missions">
        <TrackProgress ids={storyChapters.flatMap((chapter) => chapter.missions.map((mission) => `mission:${mission.slug}`))} />
      </SimpleHero>

      {storyChapters.map((chapter) => (
        <CardGrid
          key={chapter.chapter}
          id={`chapter-${chapter.chapter}`}
          heading={`Chapter ${chapter.chapter}${chapter.name ? `: ${chapter.name}` : ""}`}
          dense
          trackIds={chapter.missions.map((mission) => `mission:${mission.slug}`)}
        >
          {chapter.missions.map((mission) => (
            <MissionCard key={mission.slug} mission={mission} />
          ))}
        </CardGrid>
      ))}

      <CardGrid
        id="strangers"
        heading="Side missions"
        dense
        trackIds={sideMissions.map((mission) => `mission:${mission.slug}`)}
      >
        {sideMissions.map((mission) => (
          <MissionCard key={mission.slug} mission={mission} />
        ))}
      </CardGrid>

      <CardGrid heading="Edition jobs">
        {editionMissions.map((mission) => (
          <MissionCard key={mission.slug} mission={mission} />
        ))}
      </CardGrid>

      <p className="mt-10 text-sm text-zinc-500">Chapters 4 and 5 stay hidden so nothing gets spoiled.</p>
      <QuickGuideGrid guides={quickGuideCards(["how-to-save", "replay-missions", "switch-characters", "fix-railing", "beginner-tips", "lab-fees-codes", "pipework", "hey-arnold", "missing-tourists", "final-flush", "feng-shui", "island-dreams", "pick-up-groceries", "new-game", "how-many-chapters", "unwanted-attention", "just-a-scratch", "bank-jobs", "relationship", "call-partner"])} />
    </PageShell>
  );
}
