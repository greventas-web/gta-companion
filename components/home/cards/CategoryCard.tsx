import Link from "next/link";

type Props = {
  title: string;
  description: string;
  count: string;
  href: string;
};

const images: Record<string, string> = {
  Vehicles: "/images/home/categories/vehicles.jpg",
  Characters: "/images/home/categories/characters.jpg",
  Locations: "/images/home/categories/locations.jpg",
  Businesses: "/images/home/categories/businesses.jpg",
  Weapons: "/images/home/categories/weapons.jpg",
  Animals: "/images/home/categories/animals.jpg",
};

export default function CategoryCard({
  title,
  description,
  count,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group relative block h-[360px] overflow-hidden rounded-[36px] border border-zinc-800 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_30px_80px_rgba(236,72,153,0.18)]"
    >
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${images[title]})`,
        }}
      />

      {/* Overlays */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />

      <div className="absolute inset-0 bg-pink-500/0 transition duration-500 group-hover:bg-pink-500/10" />

      {/* Content */}

      <div className="relative flex h-full flex-col justify-end p-8">

        <span className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
          {count}
        </span>

        <h3 className="mt-3 text-4xl font-black text-white">
          {title}
        </h3>

        <p className="mt-4 max-w-sm text-lg leading-7 text-zinc-300">
          {description}
        </p>

        <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-pink-500/40 px-5 py-2 text-sm font-bold text-pink-400 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
          Explore
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>

    </Link>
  );
}