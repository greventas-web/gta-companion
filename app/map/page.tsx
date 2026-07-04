export default function MapPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <section className="mx-auto max-w-7xl px-6 py-24">

        <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
          Interactive GTA 6 Map
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
          Explore
          <span className="text-pink-400"> Vice City.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
          Discover every collectible, mission, business, vehicle, weapon,
          property and hidden secret through the world's most advanced GTA 6
          interactive map.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-bold">500+</h3>
            <p className="mt-2 text-zinc-400">Collectibles</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-bold">150+</h3>
            <p className="mt-2 text-zinc-400">Businesses</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-bold">100%</h3>
            <p className="mt-2 text-zinc-400">Mission Tracking</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-bold">Live</h3>
            <p className="mt-2 text-zinc-400">Community Updates</p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-20 text-center">

          <div className="mx-auto flex h-96 items-center justify-center rounded-2xl border-2 border-dashed border-pink-500/30 bg-gradient-to-br from-zinc-900 to-zinc-950">

            <div>

              <h2 className="text-4xl font-bold">
                Interactive Map Coming Soon
              </h2>

              <p className="mt-4 max-w-xl text-zinc-400">
                Our interactive GTA 6 map is currently under development.
                Expect filters, progress tracking, collectibles, businesses,
                easter eggs and much more.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}