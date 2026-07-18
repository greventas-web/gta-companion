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
      className="group relative h-[320px] overflow-hidden rounded-[30px] border border-white/5 bg-[#08080A] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_25px_70px_rgba(236,72,153,.18)]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-115"
      />

      <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/30 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

<div className="relative flex h-full flex-col justify-end p-6">

  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/30 bg-black/60 backdrop-blur-xl">
          <Icon
            size={34}
            className="text-pink-400 transition-colors duration-500 group-hover:text-pink-300"
          />
        </div>

        <h3 className="mt-1 text-[30px] font-black leading-none tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
          {count}
        </p>

      </div>
    </Link>
  );
}