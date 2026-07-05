import Image from "next/image";
import Link from "next/link";

import { Business } from "@/types/business";

type Props = {
  business: Business;
};

export default function BusinessCard({
  business,
}: Props) {
  return (
    <Link
      href={`/businesses/${business.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500">

        <div className="relative aspect-[16/10] bg-black">

          <Image
            src={business.image}
            alt={business.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-400 backdrop-blur">
            {business.category}
          </div>

        </div>

        <div className="p-6">

          <h2 className="text-3xl font-bold">
            {business.name}
          </h2>

          <p className="mt-2 uppercase tracking-widest text-zinc-500">
            {business.location}
          </p>

          <p className="mt-5 leading-7 text-zinc-400">
            {business.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">

            <span className="text-sm text-zinc-500">
              {business.firstAppearance}
            </span>

            <span className="font-semibold text-pink-400 transition group-hover:translate-x-1">
              View →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}