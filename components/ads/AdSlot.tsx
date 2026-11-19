"use client";

import { useEffect, useRef } from "react";

import { ADSENSE_CLIENT, AD_SLOTS, type AdSlotName } from "@/lib/ads";

type Props = {
  name: AdSlotName;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * One responsive AdSense unit. Renders nothing until its slot ID is set
 * (see lib/ads.ts). Space is reserved up front so the page does not jump
 * when the ad loads.
 */
export default function AdSlot({ name, className = "" }: Props) {
  const slot = AD_SLOTS[name];
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers or a missing script: leave the reserved space empty.
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <aside
      aria-label="Advertisement"
      data-testid={`ad-slot-${name}`}
      className={`mx-auto my-10 w-full max-w-[970px] ${className}`}
    >
      <p className="mb-1 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
        Advertisement
      </p>
      <div className="min-h-[280px] overflow-hidden rounded-[16px] bg-white/[0.02]">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
          {...(process.env.NODE_ENV !== "production" ? { "data-adtest": "on" } : {})}
        />
      </div>
    </aside>
  );
}
