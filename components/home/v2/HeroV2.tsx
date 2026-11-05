import Image from "@/components/SafeImage";
import LaunchCountdown from "@/components/home/v2/LaunchCountdown";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#040404]">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-280px] top-[-180px] h-[760px] w-[760px] rounded-full bg-pink-500/20 blur-[230px]" />

        <div className="absolute right-[-260px] top-[-120px] h-[720px] w-[720px] rounded-full bg-violet-500/20 blur-[230px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-44 sm:px-10 sm:pt-40 lg:px-14">
        <div className="overflow-hidden rounded-[42px] border border-white/10 bg-[#09090B] shadow-[0_45px_120px_rgba(0,0,0,.65)]">
          <div className="grid lg:grid-cols-[minmax(0,680px)_1fr]">
            {/* LEFT */}

            <div className="relative z-20 flex items-center px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-24">
              <div className="min-w-0">
                <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-pink-400 sm:px-6 sm:tracking-[0.45em]">
                  <Sparkles size={15} />
                  UNOFFICIAL FAN PROJECT
                </div>

                <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[68px]">
                  GTA VI
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                    Companion
                  </span>
                </h1>

                <p className="mt-8 max-w-[540px] text-[19px] leading-9 text-zinc-300">
                  A fan-made place for the public facts: the launch date,
                  the US price, the trailers, and notes on the characters,
                  vehicles, and Vice City. Not made or endorsed by Rockstar
                  Games or Take-Two.
                </p>

                <div className="mt-8">
                  <LaunchCountdown />
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                    <div className="text-2xl font-black text-white">$79.99</div>
                    <div className="mt-1 text-sm text-zinc-400">Standard, US</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                    <div className="text-2xl font-black text-white">$99.99</div>
                    <div className="mt-1 text-sm text-zinc-400">Ultimate, US</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-5">
                  <Link
                    href="/media"
                    className="flex h-16 items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 text-lg font-bold text-white transition duration-300 hover:scale-[1.03]"
                  >
                    <Play size={20} />
                    Watch the launch trailer
                  </Link>

                  <Link
                    href="/vehicles"
                    className="flex h-16 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-9 text-lg font-semibold text-white transition duration-300 hover:border-pink-500/40"
                  >
                    Explore vehicles
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative min-h-[320px] lg:min-h-[560px]">
              <Image
                src="/images/original/vehicles/bravado-banshee.jpg"
                alt="Original sports car illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[70%_center]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/25 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-[#0B0B0D]/95 p-7">
            <h3 className="text-xl font-black text-white">November 19, 2026</h3>
            <p className="mt-3 leading-7 text-zinc-400">
              PlayStation 5 and Xbox Series X|S. A PC date has not been announced.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[#0B0B0D]/95 p-7">
            <h3 className="text-xl font-black text-white">US prices</h3>
            <p className="mt-3 leading-7 text-zinc-400">
              Standard is $79.99. Ultimate is $99.99 and adds vehicles, weapons, apparel, and story content.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[#0B0B0D]/95 p-7">
            <h3 className="text-xl font-black text-white">Why this site exists</h3>
            <p className="mt-3 leading-7 text-zinc-400">
              One fan database for the facts Rockstar has already published, with original art instead of their pictures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}