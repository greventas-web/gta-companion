import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import { MissionPlate } from "@/components/simple/MissionCard";
import SimpleDetail from "@/components/simple/SimpleDetail";
import SpoilerReveal from "@/components/SpoilerReveal";
import { detailMetadata } from "@/lib/pages";
import { findQuickGuide, missionGuides } from "@/src/data/launch/quick-guides";
import { findMission, missions } from "@/src/data/missions";
import {
  chapterEyebrow,
  missionArea,
  missionLead,
  missionNeighbors,
  missionTip,
  missionUnlock,
  rewardText,
} from "@/src/data/missions/present";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return missions.map((mission) => ({ slug: mission.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mission = findMission(slug);
  if (!mission) return {};
  return detailMetadata(`${mission.name} — GTA 6 missions`, missionLead(mission));
}

export default async function MissionPage({ params }: Props) {
  const { slug } = await params;
  const mission = findMission(slug);
  if (!mission) notFound();

  const guide = missionGuides[mission.slug] ? findQuickGuide(missionGuides[mission.slug]) : undefined;
  const neighbors = missionNeighbors(mission);
  const reward = rewardText(mission.rewards);
  const moneyPill = reward && /\$/.test(reward) ? (reward.length <= 48 ? reward : reward.match(/\$[\d,]+/)?.[0]) : undefined;
  const rewardBadge = reward && !moneyPill && reward.length <= 48 ? reward : undefined;
  const link = (item: { slug: string; name: string } | undefined) =>
    item ? { href: `/missions/${item.slug}`, label: item.name } : undefined;

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Missions", href: "/missions" },
          { label: mission.name },
        ]}
        eyebrow={chapterEyebrow(mission)}
        title={mission.name}
        visual={<MissionPlate mission={mission} />}
        compactVisual
        summary={missionLead(mission)}
        price={moneyPill}
        badge={rewardBadge}
        trackId={`mission:${mission.slug}`}
        tip={missionTip(mission)}
        facts={[
          { label: "Chapter", value: mission.chapter ? `${mission.chapter}${mission.chapterName ? ` · ${mission.chapterName}` : ""}` : "" },
          { label: "Given by", value: mission.giver ?? "" },
          { label: "Location", value: missionArea(mission) },
          { label: "Unlocks", value: missionUnlock(mission) },
          { label: "Reward", value: reward },
        ]}
        mapPin={mission.mapPinId}
        nav={{ prev: link(neighbors.prev), next: link(neighbors.next) }}
        links={[
          ...(guide ? [{ href: `/guides/${guide.slug}`, label: guide.heading }] : []),
          ...(mission.characterSlug ? [{ href: `/characters/${mission.characterSlug}`, label: mission.character ?? "Character" }] : []),
          ...(mission.regionSlug ? [{ href: `/locations/${mission.regionSlug}`, label: mission.region }] : []),
          ...(mission.edition ? [{ href: "/launch", label: "Editions" }] : []),
          ...(mission.type === "side" ? [{ href: "/trophies/strangers-freaks", label: "Strangers & Freaks" }, { href: "/missions#strangers", label: "All side missions" }] : []),
        ]}
      >
        {mission.spoiler ? (
          <div className="mt-10">
            <SpoilerReveal {...(mission.type === "side" ? { showLabel: "Show job names", hideLabel: "Hide job names" } : {})}>
              <p>{mission.spoiler}</p>
            </SpoilerReveal>
          </div>
        ) : null}
      </SimpleDetail>
    </PageShell>
  );
}
