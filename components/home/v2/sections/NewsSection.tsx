"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="relative pb-40 pt-12">

      <div className="mx-auto max-w-[1700px] px-8">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
              OFFICIAL ROCKSTAR NEWS
            </div>

            <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
              Latest GTA VI Updates
            </h2>

          </div>

          <Link
            href="/news"
            className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-pink-500/30 lg:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

          <Link
            href="/news"
            className="group overflow-hidden rounded-[34px] border border-white/10 bg-[#0B0B0D]"
          >

            <div className="relative h-[620px]">

              <Image
                src="/images/news/trailer2.jpg"
                alt="Trailer 2"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 p-12">

                <div className="inline-flex rounded-full bg-pink-500/20 px-5 py-2 text-sm font-bold text-pink-300">
                  OFFICIAL NEWS
                </div>

                <h3 className="mt-7 max-w-[760px] text-6xl font-black leading-tight text-white">
                  Grand Theft Auto VI launches May 26, 2026
                </h3>

                <p className="mt-6 max-w-[760px] text-xl leading-9 text-zinc-300">
                  Trailer 2, screenshots, artwork and every official Rockstar announcement in one place.
                </p>

              </div>

            </div>

          </Link>

          <div className="flex flex-col gap-8">

            <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-10">

              <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                OFFICIAL MEDIA
              </div>

              <h3 className="mt-5 text-4xl font-black text-white">
                Trailer 2
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Watch every official trailer together with screenshots and artwork.
              </p>

              <Link
                href="/media"
                className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-7 py-4 font-bold text-white"
              >
                Open Media
              </Link>

            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-10">

              <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                DATABASE
              </div>

              <h3 className="mt-5 text-4xl font-black text-white">
                GTA VI Database
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Vehicles, characters, businesses, locations and much more.
              </p>

              <Link
                href="/vehicles"
                className="mt-8 inline-flex rounded-2xl border border-white/10 px-7 py-4 font-bold text-white"
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