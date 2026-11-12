import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

import BrandedNameCard from "@/components/BrandedNameCard";
import { isNameCard } from "@/components/ItemImage";

type CategoryCardProps = {
  title: string;
  href: string;
  image: string;
  count: string;
  icon: LucideIcon;
};

export default function CategoryCard({
  title,
  href,
  image,
  count,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative h-[148px] overflow-hidden rounded-[24px] border border-white/5 bg-[#08080A] transition hover:-translate-y-1 hover:border-pink-500/40"
    >
      {isNameCard(image) ? (
        <div className="absolute inset-0">
          <BrandedNameCard name={title} showName={false} />
        </div>
      ) : (
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
      )}

      <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/30 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

<div className="relative z-20 flex h-full flex-col justify-end p-5">
        <Icon size={22} className="mb-3 text-pink-400" />
        <h3 className="text-2xl font-black leading-none tracking-[-0.03em] text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-pink-300">
          {count}
        </p>

      </div>
    </Link>
  );
}