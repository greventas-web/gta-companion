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

      <div className="absolute left-[-200px] top-[-100px] h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="absolute right-[-200px] bottom-[-100px] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1700px] px-8 py-24">

        <GlassCard className="p-12">

          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">

            <div>

              <h2 className="text-5xl font-black tracking-tight text-white">
                GTA Companion
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-9 text-zinc-400">
                The premium companion platform built around official Rockstar
                Games information.
              </p>

            </div>

            <div>

              <h3 className="mb-8 text-xl font-black">
                Explore
              </h3>

              <div className="space-y-4">

                {explore.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block text-zinc-400 transition hover:translate-x-1 hover:text-pink-400"
                  >
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>

            <div>

              <h3 className="mb-8 text-xl font-black">
                Databases
              </h3>

              <div className="space-y-4">

                {databases.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block text-zinc-400 transition hover:translate-x-1 hover:text-pink-400"
                  >
                    {item.title}
                  </Link>
                ))}

              </div>

            </div>

          </div>

        </GlassCard>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 lg:flex-row">

          <div>
            © 2026 GTA Companion
          </div>

          <div>
            Independent fan project • Not affiliated with Rockstar Games
          </div>

        </div>

      </div>

    </footer>
  );
}