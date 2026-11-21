import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/images/official/media/artwork-jason-and-lucia-beach-jason-and-lucia-beach-landscape.webp";

/** Homepage hero: Jason and Lucia sunset key art, big glowing title, map button. */
export default function HomeHero() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-24 sm:px-10 sm:pt-28 lg:px-14">
      <div className="relative isolate overflow-hidden rounded-[32px] border border-pink-400/20 shadow-[0_40px_140px_-30px_rgba(236,72,153,.45)] sm:rounded-[40px]">
        <div className="relative min-h-[660px] sm:min-h-[560px] lg:min-h-[680px]">
          <div className="hero-kenburns absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Jason and Lucia on a Vice City beach at sunset"
              fill
              priority
              sizes="(max-width: 1600px) 100vw, 1600px"
              className="object-cover object-[62%_center] sm:object-center"
            />
          </div>

          {/* Readability: dark fade at the bottom on phones, from the left on wide screens. */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07020f] via-[#07020f]/55 to-transparent sm:via-[#07020f]/20" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b0216]/90 via-[#1a0630]/45 to-transparent sm:block" />

          {/* Pink-to-purple glow. */}
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[520px] rounded-full bg-pink-500/45 blur-[120px] mix-blend-screen" />
          <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[520px] rounded-full bg-violet-600/40 blur-[130px] mix-blend-screen" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

          <div className="relative z-10 flex min-h-[660px] flex-col justify-end p-6 pb-8 sm:min-h-[560px] sm:p-12 lg:min-h-[680px] lg:max-w-[60%] lg:justify-center lg:p-16">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-pink-300/50 bg-pink-500/20 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.28em] text-pink-200 shadow-[0_0_30px_rgba(236,72,153,.45)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400" />
              </span>
              Out now
            </span>

            <h1 className="mt-5 font-black leading-[0.85] tracking-[-0.05em]">
              <span className="block text-[58px] text-white drop-shadow-[0_6px_30px_rgba(0,0,0,.55)] sm:text-[104px] lg:text-[136px]">
                GTA 6
              </span>
              <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text pb-2 text-[48px] text-transparent drop-shadow-[0_0_35px_rgba(236,72,153,.55)] sm:text-[88px] lg:text-[112px]">
                Companion
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-lg font-bold leading-snug text-white/90 sm:text-2xl">
              GTA Companion is the unofficial GTA 6 companion, with a live, community-edited map.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
              <Link
                href="/map"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-3 text-[15px] sm:px-7 sm:py-3.5 sm:text-base font-black text-white shadow-[0_12px_40px_rgba(236,72,153,.55)] transition hover:brightness-110 active:scale-[0.97]"
              >
                <MapPin size={18} aria-hidden />
                Open the map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
