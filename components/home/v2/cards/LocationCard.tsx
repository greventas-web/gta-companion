import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export default function LocationCard({
  name,
  description,
  image,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]"
    >
      <div className="relative h-[420px]">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-0 left-0 right-0 p-10">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
            Official Location
          </div>

          <h3 className="mt-5 text-5xl font-black tracking-[-0.03em] text-white">
            {name}
          </h3>

          <p className="mt-5 max-w-lg leading-8 text-zinc-300">
            {description}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 font-bold text-pink-400 transition-colors duration-300 group-hover:text-pink-300">
            Explore Location

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </div>

        </div>

      </div>
    </Link>
  );
}