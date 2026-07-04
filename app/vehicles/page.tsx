export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <section className="mx-auto max-w-7xl px-6 py-24">

        <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
          GTA 6 Vehicle Database
        </span>

        <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
          Every Vehicle.
          <span className="text-pink-400"> One Place.</span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
          Browse every confirmed GTA 6 vehicle with statistics,
          manufacturers, locations, performance ratings and screenshots.
        </p>

        {/* Search */}

        <div className="mt-12">
          <input
            type="text"
            placeholder="Search vehicles..."
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-lg outline-none transition focus:border-pink-500"
          />
        </div>

        {/* Categories */}

        <div className="mt-8 flex flex-wrap gap-4">

          {[
            "All",
            "Cars",
            "Motorcycles",
            "SUVs",
            "Boats",
            "Aircraft",
            "Emergency",
          ].map((category) => (

            <button
              key={category}
              className="rounded-full border border-zinc-700 px-5 py-2 transition hover:border-pink-500 hover:text-pink-400"
            >
              {category}
            </button>

          ))}

        </div>

        {/* Featured Vehicles */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {[
            "Bravado Banshee",
            "Declasse Tulip",
            "Vapid Dominator",
            "Pegassi Ignus",
            "Grotti Cheetah",
            "Pfister Comet",
          ].map((vehicle) => (

            <div
              key={vehicle}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:-translate-y-2 hover:border-pink-500"
            >

              <div className="mb-8 flex h-40 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                Vehicle Image
              </div>

              <h3 className="text-2xl font-bold">
                {vehicle}
              </h3>

              <p className="mt-3 text-zinc-400">
                Full specifications, spawn locations and performance
                ratings available at launch.
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}