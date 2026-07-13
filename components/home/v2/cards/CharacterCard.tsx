import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  name: string;
  role: string;
  description: string;
  image: string;
  href: string;
};

export default function CharacterCard({
  name,
  role,
  description,
  image,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#0B0B0D] transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_30px_80px_rgba(236,72,153,.20)]"
    >
      <div className="relative h-[420px] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
            {role}
          </div>

          <h3 className="mt-5 text-4xl font-black text-white">
            {name}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-zinc-300">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-2 font-bold text-pink-400">
            View Profile
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </div>

        </div>

      </div>
    </Link>
  );
}