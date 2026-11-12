import ItemImage from "@/components/ItemImage";
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
      <article className="overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_35px_90px_rgba(236,72,153,0.18)]">

        <div className="relative aspect-[16/10] overflow-hidden">

          <ItemImage
            src={brand.image}
            alt={brand.name}
            name={brand.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />

          {!brand.image ? null : (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          )}

          <div className="absolute left-6 top-6 z-20 max-w-[calc(100%-3rem)] rounded-full bg-pink-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white sm:tracking-[0.22em]">
            {brand.category}
          </div>

        </div>

        <div className="p-8">

          <h3 className="break-words text-3xl font-black text-white transition group-hover:text-pink-400 sm:text-4xl">
            {brand.name}
          </h3>

          <p className="mt-5 line-clamp-3 text-lg leading-8 text-zinc-400">
            {brand.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-6">

            {brand.firstAppearance ? (
              <span className="text-xs uppercase tracking-[0.12em] text-zinc-500 sm:text-sm">
                {brand.firstAppearance}
              </span>
            ) : (
              <span />
            )}

            <span className="font-bold text-pink-400 transition duration-300 group-hover:translate-x-2">
              View Details →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}