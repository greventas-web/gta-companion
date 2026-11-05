"use client";

import { useEffect, useState } from "react";

const launch = new Date("2026-11-19T00:00:00Z").getTime();

export default function LaunchCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = now === null ? null : Math.max(0, launch - now);
  const days = remaining === null ? "--" : Math.floor(remaining / 86400000);
  const hours = remaining === null ? "--" : Math.floor((remaining % 86400000) / 3600000);
  const minutes = remaining === null ? "--" : Math.floor((remaining % 3600000) / 60000);

  return (
    <div>
      <div className="text-4xl font-black leading-none text-white sm:text-5xl">
        {days}
        <span className="ml-2 text-lg font-semibold text-zinc-400">days</span>
      </div>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
        {hours}h {minutes}m until November 19
      </p>
    </div>
  );
}
