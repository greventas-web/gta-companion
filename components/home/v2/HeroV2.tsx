import Image from "@/components/SafeImage";
import LaunchCountdown from "@/components/home/v2/LaunchCountdown";
import LaunchTrailer from "@/components/home/v2/LaunchTrailer";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const launchTrailerId = "rz1B4B2yBZY";

const starts = [
  { href: "/gta-6-launch", label: "Unlock times" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/characters", label: "Characters" },
  { href: "/launch", label: "Editions" },
  { href: "/news", label: "News" },
];

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#040404]">
      <div className="relative mx-auto max-w-[1600px] px-6 pb-8 pt-32 sm:px-10 lg:px-14">
        <Link
          href="/gta-6-launch"
          className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-teal-400/30 bg-gradient-to-r from-violet-500/15 via-pink-500/10 to-teal-400/10 px-5 py-4 transition hover:border-teal-300/60"
        >
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-300">
              GTA 6 launch hub
            </p>
            <p className="mt-1 text-base font-semibold text-white sm:text-lg">
              Unlock time, release time, file size, pre-load, and a live countdown
            </p>
          </div>
          <span className="text-sm font-semibold text-pink-300">Open the hub</span>
        </Link>

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-pink-400">
              <Sparkles size={15} />
              Unofficial fan project
            </div>

            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl">
              GTA VI
              <span className="mt-1 block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                Companion
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              Everything you need for GTA 6. GTA Companion is an unofficial
              fan site for the public facts about Grand Theft Auto VI: the
              launch date, the editions, the characters, the vehicles, and
              Vice City. Images: Rockstar Games. Not affiliated with
              Rockstar Games or Take-Two.
            </p>

            <div className="mt-6">
              <LaunchCountdown />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {starts.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-5 text-sm font-semibold text-white transition hover:border-pink-500/40"
                >
                  {item.label}
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src="/images/official/locations/vice-city.webp"
              alt="Original illustration of a neon coastal city"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-5">
              <h2 className="text-lg font-black text-white">November 19, 2026</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                PlayStation 5 and Xbox Series X|S. A PC date has not been announced.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-5">
              <h2 className="text-lg font-black text-white">Pre-load November 10</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Digital copies can download early. The physical box is a download code.
              </p>
            </div>
            <Link href="/launch" className="rounded-3xl border border-white/10 bg-[#0B0B0D] p-5 transition hover:border-pink-500/40">
              <h2 className="text-lg font-black text-white">Editions</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Standard and Ultimate, plus the cars and guns Rockstar has named.
              </p>
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#09090B] p-4 sm:p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-pink-400">
              Latest trailer
            </p>
            <div className="mt-3">
              <LaunchTrailer videoId={launchTrailerId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
