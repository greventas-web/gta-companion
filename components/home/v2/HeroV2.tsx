import Image from "next/image";
import Link from "next/link";
import {
  Newspaper,
  MapPinned,
  Car,
  Shield,
  Star,
} from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#040404]">
      <div className="absolute inset-0">
        <div className="absolute left-[-260px] top-[-180px] h-[720px] w-[720px] rounded-full bg-pink-500/20 blur-[220px]" />
        <div className="absolute right-[-240px] top-[-140px] h-[650px] w-[650px] rounded-full bg-violet-500/20 blur-[220px]" />
      </div>

      <div className="relative mx-auto max-w-[1700px] px-8 pt-16">

  <div className="grid h-[500px] overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] shadow-[0_40px_120px_rgba(0,0,0,.65)] lg:grid-cols-[500px_1fr]">

          <div className="relative z-20 flex items-center px-12">

            <div>

              <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
                OFFICIAL GTA VI COMPANION
              </div>

              <h1 className="mt-6 text-[54px] font-black leading-[0.92] tracking-[-0.05em] text-white xl:text-[74px]">
                The Ultimate
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                  GTA VI
                </span>
                <br />
                Companion
              </h1>

             <p className="mt-6 max-w-[420px] text-[17px] leading-8 text-zinc-400">
                Browse confirmed GTA VI vehicles, manufacturers, guides,
                locations, businesses, characters and more using official
                Rockstar information.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/news"
                  className="flex h-14 items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 font-semibold text-white transition duration-300 hover:scale-[1.03]"
                >
                  <Newspaper size={18} />
                  Browse Vehicles
                </Link>

                <Link
                  href="/locations"
                  className="flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 font-semibold text-white transition duration-300 hover:border-pink-500/40"
                >
                  <MapPinned size={18} />
                  Explore All
                </Link>

              </div>

            </div>

          </div>

          <div className="relative">

            <Image
              src="/images/home/hero-v2.jpg"
              alt="Jason and Lucia"
              fill
              priority
              className="object-cover object-[72%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/35 to-transparent" />

          </div>

        </div>

        <div className="-mt-10 grid gap-5 lg:grid-cols-3">

          <div className="rounded-[28px] border border-white/10 bg-[#0B0B0D] px-8 py-6">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
              <Car size={30} />
            </div>

            <div className="text-5xl font-black text-white">
              50+
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              Confirmed Vehicles
            </div>

            <div className="mt-2 text-zinc-400">
              And counting...
            </div>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0B0B0D] px-8 py-6">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
              <Shield size={30} />
            </div>

            <div className="text-5xl font-black text-white">
              10+
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              Manufacturers
            </div>

            <div className="mt-2 text-zinc-400">
              Official & in-game brands
            </div>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0B0B0D] px-8 py-6">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
              <Star size={30} />
            </div>

            <div className="text-5xl font-black text-white">
              100%
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              Official Rockstar Sources
            </div>

            <div className="mt-2 text-zinc-400">
              Accurate & trusted information
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}