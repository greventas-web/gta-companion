import Link from "next/link";
import { ArrowRight, Newspaper, Clock } from "lucide-react";

import NewsSection from "@/components/home/v2/sections/NewsSection";

export default function NewsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">

      <div className="absolute left-[-240px] top-[-160px] h-[700px] w-[700px] rounded-full bg-pink-500/15 blur-[220px]" />

      <div className="absolute right-[-240px] bottom-[-180px] h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[220px]" />

      <section className="relative mx-auto max-w-[1700px] px-8 pt-36">

        <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">

          <Newspaper size={14} />

          Official Rockstar News

        </div>

        <h1 className="mt-8 text-7xl font-black tracking-[-0.05em]">
          GTA VI News
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
          Stay up to date with every official Rockstar Games announcement,
          trailer, screenshot release and development update for
          Grand Theft Auto VI.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black">
              100%
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              Official Rockstar Sources
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">

            <Clock
              className="text-pink-400"
              size={34}
            />

            <p className="mt-6 text-lg text-zinc-400">
              Updated whenever Rockstar publishes new information.
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">

            <div className="text-5xl font-black">
              Live
            </div>

            <p className="mt-3 text-lg text-zinc-400">
              Follow GTA VI development in one place.
            </p>

          </div>

        </div>

      </section>

      <NewsSection />

      <section className="mx-auto mt-20 max-w-[1700px] px-8 pb-32">

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-transparent to-violet-500/10 p-14 text-center">

          <h2 className="text-5xl font-black">
            Never Miss A Rockstar Announcement
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
            Create your free GTA Companion account and receive notifications
            whenever Rockstar Games releases new GTA VI news, trailers,
            screenshots or artwork.
          </p>

          <Link
            href="/register"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 py-5 font-bold transition hover:scale-[1.02]"
          >
            Join Free
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}