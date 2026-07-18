import Link from "next/link";
import GlassCard from "./GlassCard";

const explore = [
  { title: "News", href: "/news" },
  { title: "Media", href: "/media" },
  { title: "Characters", href: "/characters" },
  { title: "Locations", href: "/locations" },
  { title: "Timeline", href: "/timeline" },
  { title: "About", href: "/about" },
];

const databases = [
  { title: "Vehicles", href: "/vehicles" },
  { title: "Manufacturers", href: "/manufacturers" },
  { title: "Weapons", href: "/weapons" },
  { title: "Businesses", href: "/businesses" },
  { title: "Brands", href: "/brands" },
  { title: "Activities", href: "/activities" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040404]">

      <div className="absolute left-[-250px] top-[-120px] h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[190px]" />

      <div className="absolute right-[-250px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[190px]" />

      <div className="relative mx-auto max-w-[1700px] px-8 py-28">

        <GlassCard className="rounded-[40px] p-14">

          <div className="grid gap-20 lg:grid-cols-[1.6fr_1fr_1fr]">

            <div>

              <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.4em] text-pink-400">
                GTA Companion
              </div>

              <h2 className="mt-8 text-6xl font-black tracking-[-0.05em] text-white">
                Built For GTA Players
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                GTA Companion is a premium companion platform built around
                official Rockstar Games information, designed to help players
                explore everything Grand Theft Auto VI has to offer.
              </p>

            </div>

            <div>

              <h3 className="mb-8 text-xl font-black text-white">
                Explore
              </h3>

              <div className="space-y-5">

                {explore.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-pink-400"
                  >
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>

            <div>

              <h3 className="mb-8 text-xl font-black text-white">
                Databases
              </h3>

              <div className="space-y-5">

                {databases.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-pink-400"
                  >
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>

          </div>

        </GlassCard>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row">

          <div>
            © 2026 GTA Companion. All rights reserved.
          </div>

          <div>
            Independent fan project • Not affiliated with Rockstar Games.
          </div>

        </div>

      </div>

    </footer>
  );
}