import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

      <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="mx-auto grid min-h-[900px] max-w-7xl items-center lg:grid-cols-[42%_58%]">

        {/* LEFT */}

        <div className="relative z-20 px-6">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-pink-400">
            OFFICIAL GTA VI COMPANION
          </div>

          <h1 className="mt-8 text-7xl font-black leading-[0.9] xl:text-[94px]">

            The Ultimate

            <span className="block text-pink-400">
              GTA VI
            </span>

            Companion

          </h1>

          <p className="mt-10 max-w-xl text-xl leading-9 text-zinc-400">
            Browse every officially confirmed vehicle,
            character, location, business and guide
            in one premium platform.
          </p>

          <div className="mt-12 flex gap-5">

            <Link
              href="/vehicles"
              className="rounded-2xl bg-pink-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-pink-400"
            >
              Browse Database
            </Link>

            <Link
              href="/guides"
              className="rounded-2xl border border-zinc-700 px-8 py-4 font-bold transition hover:border-pink-500"
            >
              Explore Guides
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative h-[900px]">

          <Image
            src="/images/home/hero.jpg"
            alt="GTA VI"
            fill
            priority
            className="object-cover object-[78%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        </div>

      </div>

    </section>
  );
}