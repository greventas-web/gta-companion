export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <section className="mx-auto max-w-7xl px-6 py-24">

        <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
          GTA 6 Guides
        </span>

        <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
          Learn.
          <span className="text-pink-400"> Master.</span>
          <br />
          Dominate.
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
          From beginner walkthroughs to advanced money-making strategies,
          GTA Companion will become the ultimate GTA 6 knowledge base.
        </p>

        {/* Search */}

        <div className="mt-12">
          <input
            type="text"
            placeholder="Search guides..."
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-lg outline-none transition focus:border-pink-500"
          />
        </div>

        {/* Categories */}

        <div className="mt-8 flex flex-wrap gap-4">

          {[
            "All",
            "Money",
            "Missions",
            "Collectibles",
            "Businesses",
            "Vehicles",
            "Weapons",
          ].map((category) => (
            <button
              key={category}
              className="rounded-full border border-zinc-700 px-5 py-2 transition hover:border-pink-500 hover:text-pink-400"
            >
              {category}
            </button>
          ))}

        </div>

        {/* Guide Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {[
            "Best Ways to Make Money",
            "Beginner's Guide",
            "100% Completion Guide",
            "Business Guide",
            "Collectibles Guide",
            "Weapon Guide",
          ].map((guide) => (

            <div
              key={guide}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:-translate-y-2 hover:border-pink-500"
            >

              <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                Guide Cover
              </div>

              <h3 className="text-2xl font-bold">
                {guide}
              </h3>

              <p className="mt-3 text-zinc-400">
                Complete step-by-step guide with screenshots, tips and
                interactive tools.
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}