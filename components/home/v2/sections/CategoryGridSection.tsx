import {
  Bike,
  Briefcase,
  Building2,
  Car,
  Crosshair,
  MapPin,
  PawPrint,
  Shield,
  User,
} from "lucide-react";

import CategoryCard from "../cards/CategoryCard";

const cards = [
  {
    title: "Vehicles",
    href: "/vehicles",
    image: "/images/categories/vehicles.jpg",
    count: "47",
    icon: Car,
  },
  {
    title: "Manufacturers",
    href: "/manufacturers",
    image: "/images/categories/manufacturers.jpg",
    count: "10",
    icon: Shield,
  },
  {
    title: "Characters",
    href: "/characters",
    image: "/images/categories/characters.jpg",
    count: "8",
    icon: User,
  },
  {
    title: "Locations",
    href: "/locations",
    image: "/images/categories/locations.jpg",
    count: "6",
    icon: MapPin,
  },
  {
    title: "Businesses",
    href: "/businesses",
    image: "/images/categories/businesses.jpg",
    count: "5",
    icon: Briefcase,
  },
  {
    title: "Weapons",
    href: "/weapons",
    image: "/images/categories/weapons.jpg",
    count: "9",
    icon: Crosshair,
  },
  {
    title: "Animals",
    href: "/animals",
    image: "/images/categories/animals.jpg",
    count: "5",
    icon: PawPrint,
  },
  {
    title: "Activities",
    href: "/activities",
    image: "/images/categories/activities.jpg",
    count: "5",
    icon: Bike,
  },
  {
    title: "Brands",
    href: "/brands",
    image: "/images/categories/brands.jpg",
    count: "8",
    icon: Building2,
  },
];

export default function CategoryGridSection() {
  return (
    <section className="relative overflow-hidden bg-[#040404] py-14 lg:py-16">
      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Databases
            </h2>
            <p className="mt-2 max-w-xl text-zinc-400">
              Open one list. Each subject has its own page.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

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