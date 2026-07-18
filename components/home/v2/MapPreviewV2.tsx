import Link from "next/link";
import {
  ArrowRight,
  MapPinned,
  MapPin,
} from "lucide-react";

const hotspots = [
  {
    name: "Vice City",
    top: "56%",
    left: "58%",
  },
  {
    name: "Leonida Keys",
    top: "76%",
    left: "42%",
  },
  {
    name: "Grassrivers",
    top: "42%",
    left: "34%",
  },
  {
    name: "Mount Kalaga",
    top: "18%",
    left: "70%",
  },
];

export default function MapPreviewV2() {
  return (
    <section className="relative mx-auto max-w-[1700px] px-8 py-32">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.08),transparent_72%)]" />

      <div className="overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#101012] via-[#09090B] to-black">

        <div className="grid lg:grid-cols-[560px_1fr]">

          {/* Left */}

          <div className="flex flex-col justify-center p-16">

            <div className="text-xs font-black uppercase tracking-[0.5em] text-pink-400">
              INTERACTIVE MAP
            </div>

            <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
              Explore Leonida
            </h2>

            <p className="mt-8 text-xl leading-10 text-zinc-400">
              Browse every officially confirmed location across Vice City,
              the Leonida Keys, Grassrivers and more with an interactive
              map built specifically for GTA Companion.
            </p>

            <div className="mt-10 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 border border-pink-500/20">
                <MapPinned className="text-pink-400" />
              </div>

              <div>

                <div className="font-bold text-white">
                  Interactive exploration
                </div>

                <div className="text-zinc-500">
                  Locations • Screenshots • Guides
                </div>

              </div>

            </div>

            <Link
              href="/locations"
              className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 py-4 text-lg font-bold text-white transition duration-300 hover:scale-105"
            >
              Explore Map

              <ArrowRight size={20} />

            </Link>

          </div>

          {/* Right */}

          <div className="relative min-h-[620px] border-l border-white/10 bg-[#050505]">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,.08),transparent_70%)]" />

            <div className="absolute inset-10 rounded-[34px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black overflow-hidden">

              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:36px_36px]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.04),transparent_75%)]" />

              {hotspots.map((spot) => (
                <div
                  key={spot.name}
                  className="absolute"
                  style={{
                    top: spot.top,
                    left: spot.left,
                  }}
                >
                  <div className="relative">

                    <div className="absolute inset-0 animate-ping rounded-full bg-pink-500 opacity-30" />

                    <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 shadow-[0_0_30px_rgba(236,72,153,.9)]">
                      <MapPin size={11} className="text-white" />
                    </div>

                    <div className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-xs font-bold text-white backdrop-blur-xl">
                      {spot.name}
                    </div>

                  </div>
                </div>
              ))}

              <div className="absolute bottom-8 left-8 rounded-2xl border border-pink-500/20 bg-black/60 px-6 py-4 backdrop-blur-xl">

                <div className="text-sm uppercase tracking-[0.3em] text-pink-400">
                  Coming Soon
                </div>

                <div className="mt-2 text-white font-bold">
                  Full Interactive Leonida Map
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}