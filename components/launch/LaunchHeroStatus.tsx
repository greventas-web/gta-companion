"use client";

import Link from "next/link";

import LaunchCountdown from "@/components/home/v2/LaunchCountdown";
import { useLaunchPhase } from "@/components/launch/useLaunchPhase";
import type { LaunchPhase } from "@/lib/launchState";

/** Launch hub link at the top of the homepage hero. */
export function LaunchHubLink({ initial }: { initial: LaunchPhase }) {
  const { phase } = useLaunchPhase(initial);

  const copy =
    phase === "out"
      ? {
          eyebrow: "GTA 6 is out now",
          line: "Out now on PlayStation 5 and Xbox Series X|S: unlock times, the map, and launch news",
        }
      : phase === "rolling"
        ? {
            eyebrow: "GTA 6 launch night",
            line: "GTA 6 is rolling out now. It unlocks at midnight local time where you are",
          }
        : {
            eyebrow: "GTA 6 launch hub",
            line: "Unlock time, release time, file size, pre-load, and a live countdown",
          };

  return (
    <Link
      href="/gta-6-launch"
      className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-teal-400/30 bg-gradient-to-r from-violet-500/15 via-pink-500/10 to-teal-400/10 px-5 py-4 transition hover:border-teal-300/60"
    >
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-300">
          {copy.eyebrow}
        </p>
        <p className="mt-1 text-base font-semibold text-white sm:text-lg">{copy.line}</p>
      </div>
      <span className="text-sm font-semibold text-pink-300">Open the hub</span>
    </Link>
  );
}

/** Countdown before launch, "out now" after this device reaches local midnight. */
export function LaunchHeroCountdown({ initial }: { initial: LaunchPhase }) {
  const { phase, remaining } = useLaunchPhase(initial);

  if (phase === "out") {
    return (
      <div>
        <div className="text-4xl font-black leading-none text-white sm:text-5xl">
          GTA 6 is out now
        </div>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
          PlayStation 5 and Xbox Series X|S
        </p>
      </div>
    );
  }

  if (phase === "rolling" && remaining !== null) {
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    return (
      <div>
        <div className="text-4xl font-black leading-none text-white sm:text-5xl">
          Rolling out now
        </div>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
          {hours}h {minutes}m until midnight on this device
        </p>
      </div>
    );
  }

  return <LaunchCountdown />;
}
