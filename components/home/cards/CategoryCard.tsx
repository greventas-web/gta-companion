import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Factory,
  User,
  MapPin,
  Building2,
  Sword,
  PawPrint,
  Bike,
  BadgeDollarSign,
} from "lucide-react";

type Props = {
  title: string;
  count: string;
  href: string;
  image?: string;
};

const images: Record<string, string> = {
  Vehicles: "/images/home/categories/vehicles.jpg",
  Manufacturers: "/images/home/categories/manufacturers.jpg",
  Characters: "/images/home/categories/characters.jpg",
  Locations: "/images/home/categories/locations.jpg",
  Businesses: "/images/home/categories/businesses.jpg",
  Weapons: "/images/home/categories/weapons.jpg",
  Animals: "/images/home/categories/animals.jpg",
  Activities: "/images/home/categories/activities.jpg",
  Brands: "/images/home/categories/brands.jpg",
};

const icons = {
  Vehicles: Car,
  Manufacturers: Factory,
  Characters: User,
  Locations: MapPin,
  Businesses: Building2,
  Weapons: Sword,
  Animals: PawPrint,
  Activities: Bike,
  Brands: BadgeDollarSign,
};

export default function CategoryCard({
  title,
  count,
  href,
  image,
}: Props) {
  const Icon = icons[title as keyof typeof icons] ?? Car;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[22px] border border-white/10 bg-[#09090B] transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.22)]"
    >
      <div className="relative h-[185px]">
        <Image
          src={image ?? images[title] ?? "/images/home/categories/vehicles.jpg"}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-500/25 blur-[95px] opacity-70 transition group-hover:opacity-100" />

        <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/35 bg-black/45 text-pink-400 backdrop-blur-xl transition group-hover:scale-110">
          <Icon size={28} />
        </div>

        <div className="absolute bottom-5 left-5">
          <h3 className="text-[24px] font-black tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-1 text-[15px] text-zinc-300">
            {count}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
    </Link>
  );
}