import Link from "next/link";

import BrandedNameCard from "@/components/BrandedNameCard";
import ItemImage, { isNameCard } from "@/components/ItemImage";

type Props = {
  href: string;
  title: string;
  eyebrow: string;
  summary: string;
  meta: string;
  image?: string;
  imageAlt?: string;
};

export default function CatalogCard({
  href,
  title,
  eyebrow,
  summary,
  meta,
  image,
  imageAlt,
}: Props) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0B0D] transition hover:border-violet-400/40"
    >
      <div className="relative aspect-video overflow-hidden">
        {isNameCard(image) ? (
          <>
            <div className="absolute inset-0">
              <BrandedNameCard name={title} showName={false} />
            </div>
            <p className="absolute inset-0 z-[2] flex items-center justify-center px-5 text-center text-xl font-black leading-tight text-balance text-white sm:text-2xl">
              {title}
            </p>
          </>
        ) : (
          <ItemImage
            src={image}
            alt={imageAlt || title}
            name={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-black group-hover:text-pink-300">{title}</h2>
        <p className="mt-3 flex-1 leading-7 text-zinc-400">{summary}</p>
        <p className="mt-4 text-sm font-semibold text-zinc-300">{meta}</p>
      </div>
    </Link>
  );
}
