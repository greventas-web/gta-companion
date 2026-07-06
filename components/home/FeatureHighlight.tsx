import Link from "next/link";

export default function FeatureHighlight() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <div>

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-pink-400">
            Why GTA Companion
          </div>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Built for GTA VI players.
            <br />
            Designed for everything else.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            GTA Companion brings together every official vehicle,
            location, character, business, guide and collectible into
            one fast, beautiful platform designed for desktop and mobile.
          </p>

          <div className="mt-10">

            <Link
              href="/guides"
              className="rounded-2xl bg-pink-500 px-8 py-4 font-bold text-white transition hover:bg-pink-400"
            >
              Explore Guides
            </Link>

          </div>

        </div>

        <div className="rounded-[40px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-10">

          <div className="grid gap-6">

            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6">
              🚗 Vehicle Database
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6">
              🗺 Interactive Map
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6">
              👥 Character Profiles
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6">
              📰 Rockstar News
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}