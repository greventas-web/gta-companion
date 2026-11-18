import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import SpoilerReveal from "@/components/SpoilerReveal";
import { detailMetadata } from "@/lib/pages";
import { findMission, MISSION_TYPE_LABEL, missions } from "@/src/data/missions";

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
  return detailMetadata(`${mission.name} — GTA 6 missions`, mission.summary);
}

export default async function MissionPage({ params }: Props) {
  const { slug } = await params;
  const mission = findMission(slug);
  if (!mission) notFound();

  const hasSpoiler = Boolean(mission.spoiler || mission.rewards);
  const next = mission.chapter
    ? missions
        .filter((other) => other.chapter === mission.chapter && (other.order ?? 0) > (mission.order ?? 0))
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .slice(0, 4)
    : [];

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Missions", href: "/missions" },
          { label: mission.name },
        ]}
        eyebrow={`${MISSION_TYPE_LABEL[mission.type]}${mission.edition ? ` · ${mission.edition}` : ""}`}
        title={mission.name}
        summary={mission.type === "story" ? undefined : mission.summary}
        trackId={`mission:${mission.slug}`}
        facts={[
          { label: "Chapter", value: mission.chapter ? `${mission.chapter}${mission.chapterName ? ` · ${mission.chapterName}` : ""}` : "" },
          { label: "Mission", value: mission.order ? `${mission.order}` : "" },
          { label: "Given by", value: mission.giver ?? "" },
          { label: "Character", value: mission.character ?? "" },
          { label: "Where", value: [mission.place, mission.startArea, mission.region !== "Leonida" ? mission.region : ""].filter(Boolean).join(", ") },
          { label: "Edition", value: mission.edition ?? "" },
        ]}
        mapPin={mission.mapPinId}
        links={[
          ...(mission.characterSlug ? [{ href: `/characters/${mission.characterSlug}`, label: mission.character ?? "Character" }] : []),
          ...(mission.regionSlug ? [{ href: `/locations/${mission.regionSlug}`, label: mission.region }] : []),
          ...(mission.edition ? [{ href: "/launch", label: "Editions" }] : []),
        ]}
        related={next.map((other) => ({
          href: `/missions/${other.slug}`,
          title: other.name,
          eyebrow: `Mission ${other.order}`,
          trackId: `mission:${other.slug}`,
          small: true,
        }))}
        relatedHeading="Next up"
      >
        {hasSpoiler ? (
          <div className="mt-10">
            <SpoilerReveal>
              {mission.spoiler ? <p>{mission.spoiler}</p> : null}
              {mission.rewards ? (
                <p className={mission.spoiler ? "mt-4" : ""}>
                  <span className="text-violet-200">Rewards. </span>
                  {mission.rewards}
                </p>
              ) : null}
            </SpoilerReveal>
          </div>
        ) : null}
      </SimpleDetail>
    </PageShell>
  );
}
