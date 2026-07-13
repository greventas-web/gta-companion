import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040404]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-18%] top-[-18%] h-[900px] w-[900px] rounded-full bg-pink-500/15 blur-[240px]" />
        <div className="absolute right-[-10%] top-[-15%] h-[800px] w-[800px] rounded-full bg-violet-500/15 blur-[220px]" />
      </div>

      <div className="relative mx-auto grid min-h-[900px] max-w-[1800px] grid-cols-1 lg:grid-cols-[600px_1fr]">

        {/* LEFT */}

        <div className="relative z-20 flex flex-col justify-center px-8 py-20 lg:px-20">

          <div className="inline-flex w-fit rounded-full border border-pink-500/25 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.42em] text-pink-400">
            OFFICIAL GTA VI COMPANION
          </div>

          <h1 className="mt-10 text-[72px] font-black leading-[0.88] tracking-[-0.06em] text-white xl:text-[108px]">
            The Ultimate
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              GTA VI
            </span>
            <br />
            Companion
          </h1>

          <p className="mt-8 max-w-[520px] text-xl leading-9 text-zinc-300">
            The most complete companion platform built around official Rockstar
            Games information.
          </p>

          <div className="mt-10 flex gap-5">

            <Link
              href="/news"
              className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-8 py-5 font-bold text-white shadow-[0_20px_60px_rgba(236,72,153,.35)] transition hover:scale-[1.03]"
            >
              Official News
            </Link>

            <Link
              href="/locations"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-bold text-white transition hover:border-pink-500/30"
            >
              Explore Leonida
            </Link>

          </div>

          <div className="mt-16 flex gap-20">

            <div>
              <div className="text-6xl font-black text-white">2</div>
              <div className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                Trailers
              </div>
            </div>

            <div>
              <div className="text-6xl font-black text-white">70+</div>
              <div className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                Screenshots
              </div>
            </div>

            <div>
              <div className="text-6xl font-black text-white">100%</div>
              <div className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                Official
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative hidden overflow-hidden rounded-bl-[42px] lg:block">

          <Image
            src="/images/home/hero-new.jpg"
            alt="Jason and Lucia"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/35 to-transparent" />

          <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,.65)]" />

        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
    </section>
  );
}