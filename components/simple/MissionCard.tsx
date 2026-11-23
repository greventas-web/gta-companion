import Image from "next/image";
import Link from "next/link";

import { mapPinHref } from "@/components/map/MapPinLink";
import type { Mission } from "@/types/mission";
import { chapterEyebrow, giverPortrait, missionArea, missionTags, rewardText } from "@/src/data/missions/present";

import { TrackButton } from "./Track";

/** Text plate for a mission. No screenshot, on purpose. */
export default function MissionCard({ mission }: { mission: Mission }) {
  const portrait = giverPortrait(mission.giver);
  const area = missionArea(mission);
  const tags = missionTags(mission);
  const reward = rewardText(mission.rewards);
  const mapHref = mapPinHref(mission.mapPinId);
  const number = mission.order ? String(mission.order).padStart(2, "0") : "";

  return (
    <div className="relative h-full">
      <Link
        href={`/missions/${mission.slug}`}
        className="group block h-full rounded-[24px] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 active:scale-[0.99]"
      >
        <article className="flex h-full flex-col gap-2 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#241432] via-[#120c18] to-[#08080c] p-4 pb-12 transition duration-300 group-hover:-translate-y-1 group-hover:border-pink-500/40">
          <div className="flex items-center justify-between gap-2">
            <p className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.14em] text-pink-300">
              {mission.order ? `Mission ${number}` : chapterEyebrow(mission)}
            </p>
            {portrait ? (
              <Image
                src={portrait.src}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-full object-cover object-[center_18%] ring-2 ring-white/15"
              />
            ) : null}
          </div>
          <h3 className="text-lg font-black leading-tight tracking-[-0.03em] text-white">{mission.name}</h3>
          {mission.giver ? <p className="text-sm font-semibold leading-snug text-pink-200/90">Given by {mission.giver}</p> : null}
          {area ? <p className="text-sm font-semibold leading-snug text-zinc-300">{area}</p> : null}
          {reward ? <p className="text-xs font-bold leading-snug text-emerald-200">{reward}</p> : null}
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-zinc-200">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      </Link>
      <div className="absolute bottom-3 left-3 z-[30]">
        <TrackButton id={`mission:${mission.slug}`} label={mission.name} labeled />
      </div>
      {mapHref ? (
        <Link
          href={mapHref}
          className="absolute bottom-3 right-3 z-[30] rounded-full border border-pink-300/40 bg-pink-600/90 px-3 py-1 text-xs font-bold text-white transition hover:bg-pink-500 active:scale-95"
        >
          Map
        </Link>
      ) : null}
    </div>
  );
}

/** Compact chapter plate: portrait, number, chapter. */
export function MissionPlate({ mission }: { mission: Mission }) {
  const portrait = giverPortrait(mission.giver);
  const number = mission.order ? String(mission.order).padStart(2, "0") : "";

  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-[#241432] via-[#120c18] to-[#08080c] p-5 sm:p-6">
      {portrait ? (
        <Image
          src={portrait.src}
          alt={portrait.alt}
          width={128}
          height={128}
          className="h-24 w-24 shrink-0 rounded-full object-cover object-[center_18%] ring-2 ring-white/15 sm:h-28 sm:w-28"
        />
      ) : (
        <p className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white/5 text-3xl font-black text-white sm:h-28 sm:w-28">
          {number || (mission.type === "side" ? "S" : "E")}
        </p>
      )}
      <div className="min-w-0">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">{chapterEyebrow(mission)}</p>
        {number ? <p className="mt-1 text-5xl font-black leading-none tracking-[-0.05em] text-white">{number}</p> : null}
        <p className="mt-2 line-clamp-2 text-sm font-semibold text-zinc-300">
          {mission.giver ? `Given by ${mission.giver}` : mission.chapterName || "Story mission"}
        </p>
      </div>
    </div>
  );
}
