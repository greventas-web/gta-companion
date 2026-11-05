import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  count: string;
  href: string;
};

export default function FeaturedDatabaseCard({
  title,
  description,
  image,
  count,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_40px_120px_rgba(236,72,153,.18)]">
        {/* Image */}

        <div className="relative h-[560px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority={false}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />

          {/* Lighting */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

          {/* Ambient */}

          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-pink-500/15 blur-[140px] opacity-60 transition duration-500 group-hover:opacity-100" />

          <div className="absolute left-10 bottom-16 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Count */}

          <div className="absolute right-8 top-8 rounded-full border border-pink-500/30 bg-black/40 px-5 py-2.5 text-xs font-black uppercase tracking-[0.32em] text-pink-400 backdrop-blur-2xl">
            {count}
          </div>

          {/* Content */}

          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h3 className="text-5xl font-black tracking-[-0.04em] text-white transition duration-300 group-hover:text-pink-300">
              {title}
            </h3>

            <p className="mt-5 max-w-[520px] text-lg leading-8 text-zinc-300">
              {description}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 group-hover:border-pink-500/40 group-hover:bg-white/[0.08]">
              Explore Database

              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </div>
          </div>

          {/* Bottom highlight */}

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
      </article>
    </Link>
  );
}