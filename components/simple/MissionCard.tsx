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
  const number = mission.order ? String(mission.order).padStart(2, "0") : mission.chapter ? String(mission.chapter) : "";
  const meta = [mission.giver ? `Given by ${mission.giver}` : "", area].filter(Boolean).join(" · ");

  return (
    <div className="relative h-full">
      <Link
        href={`/missions/${mission.slug}`}
        className="group block h-full rounded-[24px] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 active:scale-[0.99]"
      >
        <article className="flex h-full min-h-[168px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#241432] via-[#120c18] to-[#08080c] p-4 transition duration-300 group-hover:-translate-y-1 group-hover:border-pink-500/40">
          <div className="flex items-start justify-between gap-3 pl-10">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-pink-300">
              {mission.order ? `Mission ${number}` : chapterEyebrow(mission)}
            </p>
            {portrait ? (
              <Image
                src={portrait.src}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full object-cover object-[center_18%] ring-2 ring-white/15"
              />
            ) : null}
          </div>
          <div>
            <h3 className="line-clamp-2 text-lg font-black leading-tight tracking-[-0.03em] text-white sm:text-xl">{mission.name}</h3>
            {meta ? <p className="mt-2 line-clamp-2 text-sm font-semibold text-pink-200/90">{meta}</p> : null}
            {reward ? <p className="mt-2 line-clamp-2 text-xs font-bold text-emerald-200">{reward}</p> : null}
            {tags.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-200">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      </Link>
      <TrackButton id={`mission:${mission.slug}`} label={mission.name} />
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

/** Left plate on a mission page: number, chapter, giver portrait when we have one. */
export function MissionPlate({ mission }: { mission: Mission }) {
  const portrait = giverPortrait(mission.giver);
  const number = mission.order ? String(mission.order).padStart(2, "0") : "";

  return (
    <div className="relative flex h-full flex-col justify-between bg-gradient-to-br from-[#241432] via-[#120c18] to-[#08080c] p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 pl-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-300">{chapterEyebrow(mission)}</p>
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={96}
            height={96}
            className="h-20 w-20 rounded-full object-cover object-[center_18%] ring-2 ring-white/15 sm:h-24 sm:w-24"
          />
        ) : null}
      </div>
      {number ? (
        <p className="text-7xl font-black leading-none tracking-[-0.06em] text-white sm:text-8xl">{number}</p>
      ) : (
        <p className="text-5xl font-black leading-none tracking-[-0.04em] text-white">{mission.type === "side" ? "Side" : "Edition"}</p>
      )}
      <p className="max-w-[16rem] text-sm font-semibold text-zinc-300">
        {mission.giver ? `Given by ${mission.giver}` : mission.chapterName || "Story mission"}
      </p>
    </div>
  );
}
