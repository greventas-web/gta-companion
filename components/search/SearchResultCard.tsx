import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  href: string;
  image?: string;
  description?: string;
};

export default function SearchResultCard({
  title,
  category,
  href,
  image,
  description,
}: Props) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(236,72,153,.18)]"
    >
      <div className="flex items-center gap-6 p-5">

        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">

          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-3xl">
              🔍
            </div>
          )}

        </div>

        <div className="min-w-0 flex-1">

          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.25em] text-pink-400">

            {category}

          </span>

          <h3 className="mt-3 text-2xl font-black text-white transition duration-300 group-hover:text-pink-300">

            {title}

          </h3>

          {description && (
            <p className="mt-3 line-clamp-2 text-sm leading-7 text-zinc-400">
              {description}
            </p>
          )}

        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-pink-400 transition-all duration-300 group-hover:border-pink-500/40 group-hover:bg-pink-500/10 group-hover:translate-x-1">

          →

        </div>

      </div>
    </Link>
  );
}