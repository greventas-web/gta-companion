"use client";

import { useEffect, useState } from "react";

type LocalClock = {
  year: number;
  month: number;
  day: number;
  label: string;
  detail: string;
  done: string;
};

type CloudClock = {
  iso: string;
  label: string;
  detail: string;
  done: string;
};

type Props = {
  local: LocalClock;
  cloud: CloudClock;
};

const units = ["Days", "Hours", "Minutes", "Seconds"] as const;

export default function LaunchHubCountdown({ local, cloud }: Props) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const localAt = new Date(
    local.year,
    local.month - 1,
    local.day,
    0,
    0,
    0,
    0
  ).getTime();
  const cloudAt = new Date(cloud.iso).getTime();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Clock
        label={local.label}
        detail={local.detail}
        done={local.done}
        remaining={now === null ? null : localAt - now}
      />
      <Clock
        label={cloud.label}
        detail={cloud.detail}
        done={cloud.done}
        remaining={
          now === null || Number.isNaN(cloudAt) ? null : cloudAt - now
        }
      />
    </div>
  );
}

function Clock({
  label,
  detail,
  done,
  remaining,
}: {
  label: string;
  detail: string;
  done: string;
  remaining: number | null;
}) {
  const finished = remaining !== null && remaining <= 0;
  const values =
    remaining === null
      ? ["--", "--", "--", "--"]
      : split(Math.max(0, remaining));

  return (
    <article className="rounded-[28px] border border-white/10 bg-black/40 p-5">
      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-300">
        {label}
      </p>
      <p className="mt-2 text-sm text-zinc-400">{detail}</p>
      <div className="mt-5 grid grid-cols-4 gap-2">
        {units.map((unit, index) => (
          <div
            key={unit}
            className={`rounded-2xl border px-2 py-3 text-center ${
              index === units.length - 1
                ? "border-teal-400/40 bg-teal-400/[0.06]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="text-3xl font-black tabular-nums text-white sm:text-4xl">
              {values[index]}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
              {unit}
            </div>
          </div>
        ))}
      </div>
      {finished && (
        <p className="mt-4 text-sm font-semibold text-pink-300">{done}</p>
      )}
    </article>
  );
}

function split(ms: number) {
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return [days, hours, minutes, seconds].map((value) =>
    value.toString().padStart(2, "0")
  );
}
