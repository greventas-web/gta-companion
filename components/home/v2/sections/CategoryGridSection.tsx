import {
  Car,
  Shield,
  User,
  MapPin,
  Briefcase,
  Crosshair,
  PawPrint,
  Bike,
  Building2,
} from "lucide-react";

import CategoryCard from "../cards/CategoryCard";

const cards = [
  {
    title: "Vehicles",
    href: "/vehicles",
    image: "/images/categories/vehicles.jpg",
    count: "50+",
    icon: Car,
  },
  {
    title: "Manufacturers",
    href: "/manufacturers",
    image: "/images/categories/manufacturers.jpg",
    count: "10+",
    icon: Shield,
  },
  {
    title: "Characters",
    href: "/characters",
    image: "/images/categories/characters.jpg",
    count: "15+",
    icon: User,
  },
  {
    title: "Locations",
    href: "/locations",
    image: "/images/categories/locations.jpg",
    count: "20+",
    icon: MapPin,
  },
  {
    title: "Businesses",
    href: "/businesses",
    image: "/images/categories/businesses.jpg",
    count: "30+",
    icon: Briefcase,
  },
  {
    title: "Weapons",
    href: "/weapons",
    image: "/images/categories/weapons.jpg",
    count: "25+",
    icon: Crosshair,
  },
  {
    title: "Animals",
    href: "/animals",
    image: "/images/categories/animals.jpg",
    count: "10+",
    icon: PawPrint,
  },
  {
    title: "Activities",
    href: "/activities",
    image: "/images/categories/activities.jpg",
    count: "15+",
    icon: Bike,
  },
  {
    title: "Brands",
    href: "/brands",
    image: "/images/categories/brands.jpg",
    count: "100+",
    icon: Building2,
  },
];

export default function CategoryGridSection() {
  return (
    <section className="bg-[#040404] py-28">
      <div className="mx-auto max-w-[1700px] px-8">

        <div className="mb-14 text-center">

          <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
            Browse By Category
          </div>

          <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
            Explore Everything We Know
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {cards.map((card) => (
            <CategoryCard
              key={card.title}
              title={card.title}
              href={card.href}
              image={card.image}
              count={card.count}
              icon={card.icon}
            />
          ))}

        </div>

      </div>
    </section>
  );
}