"use client";

import Link from "next/link";
import { SHOW_PUBLIC_SOURCES } from "@/lib/sources";
import { ArrowRight } from "lucide-react";

import { useLaunchPhase } from "@/components/launch/useLaunchPhase";
import { FIRST_IMPRESSIONS_HREF, type LaunchPhase } from "@/lib/launchState";

const RELEASE_SOURCE = {
  label: "Rockstar Support: regional pre-load and release times",
  href: "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s",
};

export default function LaunchHubBlock({ initial }: { initial: LaunchPhase }) {
  const { phase } = useLaunchPhase(initial);
  const launched = phase !== "pre";

  const links = [
    {
      href: "/map",
      title: "Interactive map",
      body: launched
        ? "Leonida pins from official Rockstar material. Confirmed in-game spots are added as we find them."
        : "Leonida pins from official Rockstar material, with filters and search.",
    },
    {
      href: "/gta-6-launch",
      title: "Launch page",
      body: "Unlock times by platform, file size, storage, and pre-load.",
    },
    {
      href: "/vehicles",
      title: "Vehicles",
      body: launched
        ? "Every confirmed car, bike, boat, and aircraft. New in-game finds go up as they are confirmed."
        : "Every car, bike, boat, and aircraft Rockstar has shown.",
    },
    {
      href: FIRST_IMPRESSIONS_HREF,
      title: launched ? "First impressions" : "Launch news",
      body: launched
        ? "What we see in the first hours of play, with sources on every fact."
        : "Launch-week news, events, and pre-load updates.",
    },
  ];

  return (
    <section
      aria-labelledby="launch-hub-heading"
      className="mx-auto max-w-[1600px] px-6 pb-4 sm:px-10 lg:px-14"
    >
      <div className="rounded-[32px] border border-violet-400/25 bg-gradient-to-br from-violet-600/15 via-[#0B0B0D] to-pink-500/10 p-5 sm:p-7">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-violet-300">
          Unofficial launch hub
        </p>
        <h2
          id="launch-hub-heading"
          className="mt-2 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl"
        >
          {phase === "out"
            ? "GTA 6 is out now"
            : phase === "rolling"
              ? "GTA 6 is rolling out now"
              : "GTA 6 launch night"}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
          {phase === "pre"
            ? "Grand Theft Auto VI unlocks at midnight local time on November 19, 2026, on PlayStation 5 and Xbox Series X|S."
            : "Grand Theft Auto VI unlocks at midnight local time on November 19, 2026, on PlayStation 5 and Xbox Series X|S, so the launch rolls across time zones."}{" "}
          {SHOW_PUBLIC_SOURCES ? (
            <>
              Source:{" "}
              <a
                href={RELEASE_SOURCE.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-200 underline underline-offset-2 hover:text-white"
              >
                {RELEASE_SOURCE.label}
              </a>
              .{" "}
            </>
          ) : null}
          Grand Theft Auto VI is by Rockstar Games.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-white/10 bg-black/40 p-5 transition hover:border-violet-400/50"
            >
              <span className="flex items-center justify-between text-lg font-black text-white">
                {item.title}
                <ArrowRight size={16} className="text-violet-300 transition group-hover:translate-x-0.5" />
              </span>
              <span className="mt-2 block text-sm leading-6 text-zinc-400">{item.body}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
