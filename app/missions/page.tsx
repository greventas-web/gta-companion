import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero, TrackProgress } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { MISSION_TYPE_LABEL, editionMissions, missions, sideMissions, storyChapters } from "@/src/data/missions";

const title = "GTA 6 Missions List – Story Missions";
const description = `Unofficial, spoiler-safe GTA 6 missions list. Story missions in order for Chapters 1 to 3, plus Strangers & Freaks side missions. Later chapters stay hidden, and plot and rewards stay hidden until you tap to reveal. ${UNOFFICIAL_DISCLAIMER}`;

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
            <SimpleCard
              key={mission.slug}
              href={`/missions/${mission.slug}`}
              title={mission.name}
              eyebrow={`Mission ${mission.order}`}
              small
              trackId={`mission:${mission.slug}`}
            />
          ))}
        </CardGrid>
      ))}

      <CardGrid
        id="strangers"
        heading="Strangers & Freaks"
        dense
        trackIds={sideMissions.map((mission) => `mission:${mission.slug}`)}
      >
        {sideMissions.map((mission) => (
          <SimpleCard
            key={mission.slug}
            href={`/missions/${mission.slug}`}
            title={mission.name}
            eyebrow={`Chapter ${mission.chapter}`}
            small
            trackId={`mission:${mission.slug}`}
          />
        ))}
      </CardGrid>

      <CardGrid heading="Edition jobs">
        {editionMissions.map((mission) => (
          <SimpleCard
            key={mission.slug}
            href={`/missions/${mission.slug}`}
            title={mission.name}
            eyebrow={`${MISSION_TYPE_LABEL[mission.type]}${mission.edition ? ` · ${mission.edition}` : ""}`}
            chips={[mission.startArea, mission.region].filter(Boolean).map((value) => ({ value: value as string }))}
            trackId={`mission:${mission.slug}`}
            mapPin={mission.mapPinId}
          />
        ))}
      </CardGrid>

      <p className="mt-10 text-sm text-zinc-500">Chapters 4 and 5 stay hidden so nothing gets spoiled.</p>
    </PageShell>
  );
}
