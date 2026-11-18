import type { Mission, MissionType } from "@/types/mission";

/**
 * Confirmed Grand Theft Auto VI missions.
 *
 * Add a row the day a job is confirmed. Copy an object into `missions`:
 *   slug, name, type ("story" | "side" | "edition"), region, summary, sources
 * Optional: giver, character, characterSlug, regionSlug, startArea, place,
 *   edition, mapPinId, mapNote, rewards, spoiler
 * `summary` is the public line (name, giver, region, place). Put plot and
 * stated rewards in `spoiler` and `rewards` so the page can hide them.
 * `mapPinId` is the id the map already uses, such as
 * "confirmed:southside-gang-compound-raid". The page links to /map?pin=…
 * Every fact needs a clickable `sources` entry. Keep public wording unofficial.
 */
export const missions: Mission[] = [
  {
    slug: "southside-gang-compound-raid",
    name: "Southside Vice City gang compound raid",
    type: "edition",
    region: "Vice City",
    regionSlug: "vice-city",
    startArea: "Southside",
    place: "PTT Youngin$ Illegal Goods Store",
    edition: "Ultimate Edition",
    mapPinId: "confirmed:southside-gang-compound-raid",
    mapNote:
      "The map pin marks the PTT Youngin$ Illegal Goods Store, the storefront Rockstar ties to this benefit. Rockstar has not published the compound’s full footprint, so the pin is approximate.",
    summary:
      "Ultimate Edition hook in Southside, Vice City. Rockstar titles the benefit Gang Compound and places it at the PTT Youngin$ Illegal Goods Store. Rockstar has not published a separate mission title, a giver, or a story list.",
    rewards: "Special items and distinct contraband.",
    spoiler:
      "Rockstar: “Raid the compound of one of Southside Vice City’s loudest and most socially active gangs and escape safely to score some special items and distinct contraband.”",
    sources: [
      {
        label: "Rockstar Games, Ultimate Edition",
        href: "https://www.rockstargames.com/VI/ultimate-edition",
      },
      {
        label: "Rockstar Games, Editions",
        href: "https://www.rockstargames.com/VI/editions",
      },
    ],
  },
];

export const MISSION_TYPE_LABEL: Record<MissionType, string> = {
  story: "Story",
  side: "Side",
  edition: "Edition hook",
};

export function findMission(slug: string) {
  return missions.find((mission) => mission.slug === slug);
}
