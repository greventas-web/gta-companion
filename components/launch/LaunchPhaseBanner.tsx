"use client";

import { useLaunchPhase } from "@/components/launch/useLaunchPhase";
import type { LaunchPhase } from "@/lib/launchState";

/** One line on /gta-6-launch that flips from countdown copy to "out now". */
export default function LaunchPhaseBanner({ initial }: { initial: LaunchPhase }) {
  const { phase } = useLaunchPhase(initial);
  if (phase === "pre") return null;

  return (
    <p
      role="status"
      className="mt-5 inline-block rounded-2xl border border-violet-400/40 bg-violet-500/15 px-4 py-3 text-base font-black text-white"
    >
      {phase === "out"
        ? "GTA 6 is out now on PlayStation 5 and Xbox Series X|S."
        : "GTA 6 is rolling out now. It unlocks at midnight local time where you are."}
    </p>
  );
}
