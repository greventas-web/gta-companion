"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe,
} from "lucide-react";

import FavoriteButton from "@/components/FavoriteButton";
import ManufacturerMark from "@/components/manufacturers/ManufacturerMark";

import { manufacturerPortrait } from "@/lib/media/catalog";

import { Manufacturer } from "@/types/manufacturer";

type Props = {
  manufacturer: Manufacturer;
};

export default function ManufacturerCard({
  manufacturer,
}: Props) {
  const portrait = manufacturerPortrait(manufacturer);

  return (
    <Link
      href={`/manufacturers/${manufacturer.slug}`}
      className="group block"
    >
      <article className="relative h-full overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_45px_120px_rgba(236,72,153,.20)]">

        <FavoriteButton id={`manufacturer:${manufacturer.id}`} />

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="relative aspect-[16/10] overflow-hidden">

          {portrait ? (
            <Image
              src={portrait}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-950 to-black" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/20" />

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-zinc-200 backdrop-blur-xl">

            <Globe size={12} />

            {manufacturer.country}

          </div>

          <div className="absolute bottom-5 left-6 max-w-[calc(100%-3rem)]">

            <ManufacturerMark
              name={manufacturer.name}
              slug={manufacturer.slug}
            />

          </div>

        </div>

        <div className="relative p-8">

          <h2 className="text-4xl font-black tracking-[-0.03em] text-white transition duration-300 group-hover:text-pink-300">

            {manufacturer.name}

          </h2>

          <p className="mt-8 line-clamp-4 text-lg leading-8 text-zinc-400">

            {manufacturer.description}

          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

              <div className="flex items-center gap-2 text-pink-400">

                <Building2 size={18} />

                <span className="text-xs font-bold uppercase tracking-[0.22em]">

                  Headquarters

                </span>

              </div>

              <div className="mt-3 text-lg font-semibold text-white">

                {manufacturer.headquarters ?? manufacturer.country}

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

              <div className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">

                Vehicles

              </div>

              <div className="mt-3 text-lg font-semibold text-white">

                {manufacturer.vehicleCount}

              </div>

            </div>

          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">

              <BadgeCheck
                size={14}
                className="text-pink-400"
              />

              {manufacturer.status}

            </div>

            <div className="flex items-center gap-2 font-semibold text-pink-400 transition duration-300 group-hover:translate-x-2">

              View Details

              <ArrowRight size={18} />

            </div>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </article>

    </Link>
  );
}