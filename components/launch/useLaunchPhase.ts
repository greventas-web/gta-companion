"use client";

import { useEffect, useState } from "react";

import {
  msUntilLocalUnlock,
  visitorLaunchPhase,
  type LaunchPhase,
} from "@/lib/launchState";

/**
 * Starts from the server phase so the first paint matches the HTML, then
 * switches to this device's phase and re-checks on an interval.
 */
export function useLaunchPhase(initial: LaunchPhase, tickMs = 30000) {
  const [state, setState] = useState<{ phase: LaunchPhase; remaining: number | null }>({
    phase: initial,
    remaining: null,
  });

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      setState({ phase: visitorLaunchPhase(now), remaining: msUntilLocalUnlock(now) });
    };
    update();
    const timer = window.setInterval(update, tickMs);
    return () => window.clearInterval(timer);
  }, [tickMs]);

  return state;
}
