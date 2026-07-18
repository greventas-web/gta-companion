import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Newspaper,
  Smartphone,
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

      <div className="relative mx-auto max-w-[1700px] px-8 pt-24">

        <div className="overflow-hidden rounded-[42px] border border-white/10 bg-[#09090B] shadow-[0_45px_120px_rgba(0,0,0,.65)]">

          <div className="grid min-h-[720px] lg:grid-cols-[620px_1fr]">

            {/* LEFT */}

            <div className="relative z-20 flex items-center px-14 py-20">

              <div>

                <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">

                  <Sparkles size={15} />

                  OFFICIAL GTA VI COMPANION

                </div>

                <h1 className="mt-8 text-[72px] font-black leading-[0.88] tracking-[-0.06em] text-white">

                  GTA VI

                  <br />

                  <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">

                    Companion

                  </span>

                </h1>

                <p className="mt-8 max-w-[520px] text-[19px] leading-9 text-zinc-400">

                  Built around official Rockstar Games information.

                  Browse confirmed vehicles, characters, locations,

                  media, news and prepare for launch with the most

                  complete GTA VI companion platform.

                </p>

                <div className="mt-12 flex flex-wrap gap-5">

                  <Link
                    href="/register"
                    className="flex h-16 items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 text-lg font-bold text-white transition duration-300 hover:scale-[1.03]"
                  >
                    <Bell size={20} />

                    Join Free

                  </Link>

                  <Link
                    href="/media"
                    className="flex h-16 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-9 text-lg font-semibold text-white transition duration-300 hover:border-pink-500/40"
                  >
                    <Newspaper size={20} />

                    Official Media

                    <ArrowRight size={18} />

                  </Link>

                </div>

                <div className="mt-12 flex flex-wrap gap-4">

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">

                    <Smartphone
                      size={18}
                      className="text-pink-400"
                    />

                    <span className="font-semibold">
                      Mobile App
                    </span>

                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">

                    <Bell
                      size={18}
                      className="text-pink-400"
                    />

                    <span className="font-semibold">
                      Launch Notifications
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative min-h-[720px]">

              <Image
                src="/images/home/hero-v2.jpg"
                alt="Jason and Lucia"
                fill
                priority
                className="object-cover object-[70%_center]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/25 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            </div>

          </div>

        </div>

        {/* STATS */}
               <div className="-mt-16 grid gap-6 lg:grid-cols-3">

          <div className="rounded-[32px] border border-white/10 bg-[#0B0B0D]/95 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

            <div className="text-[58px] font-black leading-none text-white">
              50+
            </div>

            <h3 className="mt-3 text-2xl font-black text-white">
              Confirmed Vehicles
            </h3>

            <p className="mt-3 leading-8 text-zinc-400">
              Every officially revealed GTA VI vehicle collected in one
              searchable database.
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0B0B0D]/95 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

            <div className="text-[58px] font-black leading-none bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              100%
            </div>

            <h3 className="mt-3 text-2xl font-black text-white">
              Official Sources
            </h3>

            <p className="mt-3 leading-8 text-zinc-400">
              No fake content. Everything is based on official Rockstar
              Games trailers, screenshots and announcements.
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0B0B0D]/95 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

            <div className="text-[58px] font-black leading-none text-white">
              Free
            </div>

            <h3 className="mt-3 text-2xl font-black text-white">
              Join Before Launch
            </h3>

            <p className="mt-3 leading-8 text-zinc-400">
              Create your account today and receive launch updates,
              database expansions and companion app news.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}