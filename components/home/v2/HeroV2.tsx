import Image from "@/components/SafeImage";
import LaunchCountdown from "@/components/home/v2/LaunchCountdown";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const launchTrailerId = "rz1B4B2yBZY";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#040404]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-280px] top-[-180px] h-[760px] w-[760px] rounded-full bg-pink-500/20 blur-[230px]" />
        <div className="absolute right-[-260px] top-[-120px] h-[720px] w-[720px] rounded-full bg-violet-500/20 blur-[230px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-44 sm:px-10 sm:pt-40 lg:px-14">
        <div className="overflow-hidden rounded-[42px] border border-white/10 bg-[#09090B] shadow-[0_45px_120px_rgba(0,0,0,.65)]">
          <div className="relative min-h-[520px] lg:min-h-[620px]">
            <Image
              src="/images/original/locations/vice-city.jpg"
              alt="Original illustration of a neon coastal city"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/75 to-[#040404]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-black/20" />

            <div className="relative z-10 flex min-h-[520px] items-end px-8 py-12 sm:px-12 lg:min-h-[620px] lg:px-16 lg:py-16">
              <div className="min-w-0 max-w-3xl">
                <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-pink-400 sm:px-6 sm:tracking-[0.28em]">
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

                <p className="mt-8 max-w-[640px] text-[19px] leading-9 text-zinc-200">
                  A fan-made place for the public facts: the launch date,
                  the trailers, and notes on the characters, vehicles, and
                  Vice City. Not made or endorsed by Rockstar Games or
                  Take-Two.
                </p>

                <div className="mt-8">
                  <LaunchCountdown />
                </div>

                <Link
                  href="/vehicles"
                  className="mt-8 inline-flex h-16 items-center gap-3 rounded-full border border-white/15 bg-black/40 px-9 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:border-pink-500/40"
                >
                  Explore vehicles
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 lg:px-14 lg:pb-12">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-400">
              Latest trailer
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              GTA VI Launch Trailer
            </h2>
            <div className="mt-6 aspect-video overflow-hidden rounded-[28px] border border-white/10 bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${launchTrailerId}`}
                title="Grand Theft Auto VI Launch Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-[#0B0B0D]/95 p-7">
            <h3 className="text-xl font-black text-white">November 19, 2026</h3>
            <p className="mt-3 leading-7 text-zinc-400">
              PlayStation 5 and Xbox Series X|S. A PC date has not been announced.
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
