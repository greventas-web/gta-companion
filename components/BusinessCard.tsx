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
      <article className="overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_35px_90px_rgba(236,72,153,0.18)]">

        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={business.image}
            alt={business.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          <div className="absolute left-6 top-6 rounded-full bg-pink-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white">
            {business.category}
          </div>

        </div>

        <div className="p-8">

          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            {business.location}
          </p>

          <h3 className="mt-3 text-4xl font-black text-white transition group-hover:text-pink-400">
            {business.name}
          </h3>

          <p className="mt-5 line-clamp-3 text-lg leading-8 text-zinc-400">
            {business.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-6">

            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              {business.firstAppearance}
            </span>

            <span className="font-bold text-pink-400 transition duration-300 group-hover:translate-x-2">
              View Details →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}