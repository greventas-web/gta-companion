import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900 bg-black">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_40%)]" />

      {/* Hero Layout */}

      <div className="relative mx-auto flex min-h-[900px] max-w-[1700px] items-center px-8">

        {/* Left Content */}

        <div className="relative z-20 w-full max-w-[650px]">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-pink-400">
            OFFICIAL GTA VI COMPANION
          </div>

          <h1 className="mt-8 text-7xl font-black leading-[0.88] tracking-tight xl:text-[110px]">

            The Ultimate

            <br />

            <span className="text-pink-400">
              GTA VI
            </span>

            <br />

            Companion

          </h1>

          <p className="mt-10 max-w-xl text-xl leading-9 text-zinc-400">
            Browse every officially confirmed vehicle,
            character, location, business, guide,
            weapon and more in one premium platform.
          </p>

          <div className="mt-12 flex gap-5">

            <Link
              href="/vehicles"
              className="rounded-2xl bg-pink-500 px-8 py-4 font-bold transition hover:scale-105 hover:bg-pink-400"
            >
              Browse Database
            </Link>

            <Link
              href="/guides"
              className="rounded-2xl border border-zinc-700 bg-zinc-900/40 px-8 py-4 font-bold transition hover:border-pink-500"
            >
              Explore Guides
            </Link>

          </div>

        </div>

        {/* Right Image */}

        <div className="absolute right-0 top-0 h-full w-[60%]">

          <Image
            src="/images/home/hero.jpg"
            alt="Jason and Lucia"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Better gradients */}

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        </div>

      </div>

    </section>
  );
}