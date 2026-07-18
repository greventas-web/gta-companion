export default function ComingSoonFeatures() {
  const features = [
    "Interactive Map",
    "Collectibles Tracker",
    "Mission Walkthroughs",
    "100% Completion Guide",
    "Weapon Database",
    "Business Database",
    "Animal Database",
    "Vehicle Customization",
  ];

  return (
    <section className="mx-auto max-w-[1700px] px-8 py-24">

      <div className="mb-12">

        <div className="text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
          COMING SOON
        </div>

        <h2 className="mt-4 text-5xl font-black">
          What's Next
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {features.map((feature) => (

          <div
            key={feature}
            className="rounded-[30px] border border-white/10 bg-[#09090B] p-8 transition hover:border-pink-500"
          >

            <div className="text-xl font-bold">
              {feature}
            </div>

            <p className="mt-4 text-zinc-400">
              Coming in a future GTA Companion update.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}