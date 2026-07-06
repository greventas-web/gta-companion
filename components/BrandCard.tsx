import Image from "next/image";
import Link from "next/link";

import { Brand } from "@/types/brand";

type Props = {
  brand: Brand;
};

export default function BrandCard({
  brand,
}: Props) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500">

        <div className="relative aspect-[16/10] bg-black">

          <Image
            src={brand.image}
            alt={brand.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-400 backdrop-blur">
            {brand.category}
          </div>

        </div>

        <div className="p-6">

          <h2 className="text-3xl font-bold">
            {brand.name}
          </h2>

          <p className="mt-5 leading-7 text-zinc-400">
            {brand.description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">

            <span className="text-sm text-zinc-500">
              {brand.firstAppearance}
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