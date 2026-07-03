export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          GTA Companion
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          Explore Vice City Like Never Before
        </p>

        <button className="mt-10 rounded-lg bg-white px-8 py-3 text-black font-semibold transition hover:bg-zinc-200">
          Explore Now
        </button>
      </div>
    </section>
  );
}