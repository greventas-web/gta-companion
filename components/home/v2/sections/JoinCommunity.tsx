import Link from "next/link";

export default function JoinCommunity() {
  return (
    <section className="mx-auto max-w-[1700px] px-8 py-28">

      <div className="overflow-hidden rounded-[42px] border border-pink-500/20 bg-gradient-to-r from-pink-500/10 via-[#09090B] to-violet-500/10 p-14 lg:p-20">

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            Join GTA Companion
          </div>

          <h2 className="mt-8 text-6xl font-black tracking-[-0.04em]">
            Be Ready For
            <br />
            Grand Theft Auto VI
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Create your free GTA Companion account to save favorites,
            receive Rockstar updates, track official content and be
            notified as new GTA VI information is released.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/register"
              className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-10 py-5 font-bold text-white transition hover:scale-105"
            >
              Create Free Account
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-5 font-bold text-white transition hover:border-pink-500"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}