"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-[#040404] py-40">

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[170px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[170px]" />

      </div>

      <div className="relative mx-auto max-w-[1700px] px-8">

        <div className="mb-16 flex items-end justify-between">

          <div>

            <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
              OFFICIAL ROCKSTAR NEWS
            </div>

            <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white lg:text-7xl">
              Latest GTA VI Updates
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
              Stay up to date with every official Rockstar announcement,
              trailer, screenshot and Newswire post in one place.
            </p>

          </div>

          <Link
            href="/news"
            className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10 lg:flex"
          >
            View All News

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          <Link
            href="/news"
            className="group overflow-hidden rounded-[40px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]"
          >

            <div className="relative h-[680px]">

              <Image
                src="/images/news/trailer2.jpg"
                alt="Trailer 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/20 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

              <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 p-12">

                <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-300">
                  Official News
                </div>

                <h3 className="mt-7 max-w-[760px] text-6xl font-black leading-tight tracking-[-0.03em] text-white">
                  Grand Theft Auto VI launches May 26, 2026
                </h3>

                <p className="mt-6 max-w-[760px] text-xl leading-9 text-zinc-300">
                  Trailer 2, screenshots, artwork and every official Rockstar
                  announcement organized into one premium experience.
                </p>

              </div>

            </div>

          </Link>

          <div className="flex flex-col gap-10">

            <div className="rounded-[36px] border border-white/10 bg-[#09090B] p-10 transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_25px_70px_rgba(236,72,153,.15)]">

              <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                OFFICIAL MEDIA
              </div>

              <h3 className="mt-5 text-4xl font-black text-white">
                Trailer 2
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Watch every official trailer together with screenshots,
                artwork and promotional media.
              </p>

              <Link
                href="/media"
                className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-7 py-4 font-bold text-white transition hover:brightness-110"
              >
                Open Media
              </Link>

            </div>

            <div className="rounded-[36px] border border-white/10 bg-[#09090B] p-10 transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_25px_70px_rgba(236,72,153,.15)]">

              <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                DATABASE
              </div>

              <h3 className="mt-5 text-4xl font-black text-white">
                GTA VI Database
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Browse vehicles, characters, locations, businesses,
                manufacturers and more.
              </p>

              <Link
                href="/vehicles"
                className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-pink-500/40 hover:bg-white/10"
              >
                Browse Database
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}