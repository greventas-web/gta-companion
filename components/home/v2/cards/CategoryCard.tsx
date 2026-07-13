import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

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
      className="group relative h-[150px] overflow-hidden rounded-[22px] border border-white/10 bg-[#09090B] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">

        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/20 bg-black/50 backdrop-blur-xl">
          <Icon
            size={32}
            className="text-pink-500"
          />
        </div>

        <h3 className="text-[18px] font-black text-white">
          {title}
        </h3>

        <p className="mt-1 text-lg font-semibold text-zinc-300">
          {count}
        </p>

      </div>
    </Link>
  );
}