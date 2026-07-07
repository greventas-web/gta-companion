import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#050505]">

      {/* ========================= */}
      {/* Background Lighting */}
      {/* ========================= */}

      <div className="absolute inset-0">

        <div className="absolute left-[-12%] top-[-18%] h-[900px] w-[900px] rounded-full bg-pink-500/20 blur-[180px]" />

        <div className="absolute right-[-8%] top-[5%] h-[750px] w-[750px] rounded-full bg-fuchsia-500/15 blur-[180px]" />

        <div className="absolute bottom-[-30%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,80,180,.18),transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,.15),transparent_45%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black" />

      </div>

      {/* ========================= */}
      {/* Main Container */}
      {/* ========================= */}

      <div className="relative mx-auto flex min-h-[980px] w-full max-w-[1800px] items-center overflow-hidden px-8 sm:px-10 lg:px-16">

        {/* ========================= */}
        {/* Left Content */}
        {/* ========================= */}

        <div className="relative z-20 max-w-[720px]">

          <div className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400 backdrop-blur-xl">

            OFFICIAL GTA VI COMPANION

          </div>

          <h1 className="mt-10 text-6xl font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-7xl xl:text-[118px]">

            The Ultimate

            <br />

            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">

              GTA VI

            </span>

            <br />

            Companion

          </h1>

          <p className="mt-10 max-w-[640px] text-lg leading-9 text-zinc-300 xl:text-[22px]">

            Explore every vehicle, character, location, weapon,
            business, guide, activity and collectible from Grand
            Theft Auto VI inside one premium companion platform
            built for completionists and casual players alike.

          </p>

          <div className="mt-14 flex flex-wrap gap-5">

            <Link
              href="/vehicles"
              className="group inline-flex items-center rounded-2xl bg-pink-500 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-pink-400"
            >
              Browse Database

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">

                →

              </span>

            </Link>

            <Link
              href="/guides"
              className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-500/60 hover:bg-white/10"
            >
              Explore Guides
            </Link>

          </div>
                    <div className="mt-16 flex flex-wrap gap-10">

            <div>

              <p className="text-4xl font-black text-white">
                500+
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Vehicles
              </p>

            </div>

            <div>

              <p className="text-4xl font-black text-white">
                200+
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Locations
              </p>

            </div>

            <div>

              <p className="text-4xl font-black text-white">
                100%
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Completion
              </p>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* Right Side */}
        {/* ========================= */}

        <div className="absolute inset-y-0 right-0 w-full lg:w-[68%]">

          <Image
            src="/images/home/hero.jpg"
            alt="Jason and Lucia"
            fill
            priority
            className="object-cover object-center lg:object-right"
          />

          {/* Dark fade into content */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 via-30% to-transparent" />

          {/* Bottom fade */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

          {/* Vignette */}

          <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,.75)]" />

          {/* Pink glow */}

          <div className="absolute right-[12%] top-[10%] h-[500px] w-[500px] rounded-full bg-pink-500/15 blur-[140px]" />

          {/* Purple glow */}

          <div className="absolute bottom-[8%] right-[25%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[160px]" />

        </div>
              </div>

      {/* ========================= */}
      {/* Bottom Divider Glow */}
      {/* ========================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

    </section>
  );
}