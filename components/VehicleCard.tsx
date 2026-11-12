"use client";

import Image from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import FavoriteButton from "@/components/FavoriteButton";
import ManufacturerMark from "@/components/manufacturers/ManufacturerMark";

import { manufacturerByName } from "@/data/manufacturers";
import { vehicleImages } from "@/lib/media/catalog";

import { Vehicle } from "@/types/vehicle";

type Props = {
  vehicle: Vehicle;
};

export default function VehicleCard({
  vehicle,
}: Props) {
  const photo = vehicleImages(vehicle)[0] ?? "";
  const maker = manufacturerByName(vehicle.manufacturer);

  return (
    <Link
      href={`/vehicles/${vehicle.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900/95 via-zinc-950 to-black transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_45px_130px_rgba(236,72,153,.20)]">

        <FavoriteButton id={`vehicle:${vehicle.slug}`} />

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-violet-500/10 opacity-0 blur-[140px] transition duration-500 group-hover:opacity-100" />

        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={photo}
            alt={vehicle.name}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 z-20 flex max-w-[calc(100%-3rem)] flex-wrap gap-2">
            <span className="rounded-full border border-pink-500/30 bg-black/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-300 backdrop-blur-xl">
              {vehicle.category}
            </span>
            <span
              className={`rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] backdrop-blur-xl ${
                vehicle.status === "Confirmed"
                  ? "border-pink-400/40 bg-pink-500/20 text-pink-100"
                  : "border-teal-400/40 bg-teal-400/10 text-teal-100"
              }`}
            >
              {vehicle.status === "Confirmed" ? "Confirmed" : "Unconfirmed"}
            </span>
          </div>

          {photo ? (
            <div className="absolute bottom-5 left-6 z-20 max-w-[calc(100%-3rem)]">
              <ManufacturerMark
                name={vehicle.manufacturer}
                slug={maker?.slug ?? vehicle.manufacturer.toLowerCase()}
              />
            </div>
          ) : null}

        </div>

        <div className="relative p-8">

          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-zinc-500">
            {vehicle.manufacturer}
          </p>

          <h3 className="mt-3 text-[34px] font-black tracking-[-0.03em] text-white transition duration-300 group-hover:text-pink-300">
            {vehicle.name}
          </h3>

          <p className="mt-4 line-clamp-3 text-[17px] leading-7 text-zinc-400">
            {vehicle.description}
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">

            <div className="flex items-center gap-3">

              <Calendar
                size={18}
                className="text-pink-400"
              />

              <div>

                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  First Appearance
                </div>

                <div className="mt-1 text-base font-semibold text-white">
                  {vehicle.firstAppearance}
                </div>

              </div>

            </div>

          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300 backdrop-blur-xl">
              {vehicle.status}
            </span>

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