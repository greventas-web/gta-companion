import {
  Bike,
  Briefcase,
  Building2,
  Car,
  Crosshair,
  MapPin,
  PawPrint,
  Shield,
  Shirt,
  Store,
  User,
} from "lucide-react";

import { activities } from "@/data/activities";
import { animals } from "@/data/animals";
import { brands } from "@/data/brands";
import { businesses } from "@/data/businesses";
import { clothing } from "@/data/clothing";
import { characters } from "@/data/characters";
import { stores } from "@/data/stores";
import { locations } from "@/data/locations";
import { manufacturers } from "@/data/manufacturers";
import { vehicleCounts } from "@/src/data/launch/launch-facts";
import { weapons } from "@/data/weapons";

import { extras } from "@/src/data/launch/expansion";

import CategoryCard from "../cards/CategoryCard";

const cards = [
  {
    title: "Vehicles",
    href: "/vehicles",
    image: "/images/official/categories/vehicles.webp",
    count: `${vehicleCounts.total} in the game`,
    icon: Car,
  },
  {
    title: "Manufacturers",
    href: "/manufacturers",
    image: "/images/official/vehicles/vapid-stanier-1955.webp",
    count: String(manufacturers.length),
    icon: Shield,
  },
  {
    title: "Characters",
    href: "/characters",
    image: "/images/official/categories/characters.webp",
    count: `${characters.length + extras.characters.length} in the game`,
    icon: User,
  },
  {
    title: "Locations",
    href: "/locations",
    image: "/images/official/locations/port-gellhorn.webp",
    count: `${locations.length + extras.locations.length} in the game`,
    icon: MapPin,
  },
  {
    title: "Businesses",
    href: "/businesses",
    image: "/images/official/categories/businesses.webp",
    count: `${businesses.length + extras.businesses.length} in the game`,
    icon: Briefcase,
  },
  {
    title: "Stores",
    href: "/stores",
    image: "/images/official/editions/ultimate_edition_stock_305_01.webp",
    count: `${stores.length + extras.stores.length} in the game`,
    icon: Store,
  },
  {
    title: "Clothing",
    href: "/clothing",
    image: "/images/official/editions/ultimate_edition_goodtime_gear_01.webp",
    count: `${clothing.length + extras.clothing.length} in the game`,
    icon: Shirt,
  },
  {
    title: "Weapons",
    href: "/weapons",
    image: "/images/official/categories/weapons.webp",
    count: `${weapons.length}`,
    icon: Crosshair,
  },
  {
    title: "Animals",
    href: "/animals",
    image: "/images/official/categories/animals.webp",
    count: `${animals.length + extras.animals.length} in the game`,
    icon: PawPrint,
  },
  {
    title: "Activities",
    href: "/activities",
    image: "/images/official/categories/activities.webp",
    count: `${activities.length + extras.activities.length} in the game`,
    icon: Bike,
  },
  {
    title: "Brands",
    href: "/brands",
    image: "/images/official/editions/ultimate_edition_electric_fang_01.webp",
    count: `${brands.length + extras.brands.length} in the game`,
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
              Browse
            </h2>
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