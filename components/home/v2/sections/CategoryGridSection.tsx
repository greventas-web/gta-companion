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

import { activities } from "@/data/activities";
import { animals } from "@/data/animals";
import { brands } from "@/data/brands";
import { businesses } from "@/data/businesses";
import { characters } from "@/data/characters";
import { locations } from "@/data/locations";
import { manufacturers } from "@/data/manufacturers";
import { confirmedVehicles } from "@/data/vehicles";
import { confirmedWeapons } from "@/data/weapons";

import CategoryCard from "../cards/CategoryCard";

const cards = [
  {
    title: "Vehicles",
    href: "/vehicles",
    image: "/images/official/categories/vehicles.webp",
    count: String(confirmedVehicles.length),
    icon: Car,
  },
  {
    title: "Manufacturers",
    href: "/manufacturers",
    image: "",
    count: String(manufacturers.length),
    icon: Shield,
  },
  {
    title: "Characters",
    href: "/characters",
    image: "/images/official/categories/characters.webp",
    count: String(characters.length),
    icon: User,
  },
  {
    title: "Locations",
    href: "/locations",
    image: "/images/official/locations/port-gellhorn.webp",
    count: String(locations.length),
    icon: MapPin,
  },
  {
    title: "Businesses",
    href: "/businesses",
    image: "/images/official/categories/businesses.webp",
    count: String(businesses.length),
    icon: Briefcase,
  },
  {
    title: "Weapons",
    href: "/weapons",
    image: "/images/official/categories/weapons.webp",
    count: String(confirmedWeapons.length),
    icon: Crosshair,
  },
  {
    title: "Animals",
    href: "/animals",
    image: "/images/official/categories/animals.webp",
    count: String(animals.length),
    icon: PawPrint,
  },
  {
    title: "Activities",
    href: "/activities",
    image: "/images/official/categories/activities.webp",
    count: String(activities.length),
    icon: Bike,
  },
  {
    title: "Brands",
    href: "/brands",
    image: "",
    count: String(brands.length),
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