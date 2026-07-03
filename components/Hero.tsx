export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-background text-white">

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
          GTA Companion
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          Explore Vice City Like Never Before
        </p>

        <button className="mt-10 rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-pink-400">
          Explore Now
        </button>
      </div>

    </section>
  );
}