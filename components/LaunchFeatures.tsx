export default function LaunchFeatures() {
  const features = [
    "🗺️ Interactive GTA 6 Map",
    "🚗 Vehicle Database",
    "💰 Money Making Guides",
    "🔫 Weapons Guide",
    "📍 Collectible Tracker",
    "📱 Mobile App (In Development)",
  ];

  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Ready for Launch
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-pink-500"
            >
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}