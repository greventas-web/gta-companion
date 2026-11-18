import Image from "next/image";
import Link from "next/link";

import SimpleCard from "@/components/simple/SimpleCard";

import CategoryGridSection from "./sections/CategoryGridSection";
import FeaturedNewsV2 from "./FeaturedNewsV2";

const play = [
  { href: "/map", title: "Map", image: "/images/official/locations/vice-city.webp", line: "Find anything in Leonida." },
  { href: "/missions", title: "Missions", line: "Tick off every story mission." },
  { href: "/weapons", title: "Weapons", image: "/images/official/categories/weapons.webp", line: "Every gun and its price." },
  { href: "/vehicles", title: "Vehicles", image: "/images/official/categories/vehicles.webp", line: "Cars, bikes, boats, planes." },
  { href: "/money-methods", title: "Make money", line: "Fastest cash by chapter." },
  { href: "/shooting-ranges", title: "Shooting ranges", image: "/images/official/frames/shooting-range.webp", line: "12 courses, 42 golds." },
  { href: "/collectibles", title: "Collectibles", line: "Cards, flamingos, stunts." },
  { href: "/cheats", title: "Cheats", line: "61 cheats and codes." },
  { href: "/where-to-find", title: "Where to find", line: "Shops, garages, barbers." },
  { href: "/trophies", title: "Trophies", line: "Tick off every trophy." },
  { href: "/activities", title: "Activities", image: "/images/official/categories/activities.webp", line: "Things to do." },
  { href: "/ammu-nation-locations", title: "Ammu-Nation", line: "All 24 gun stores." },
];

export default function HomePageV2() {
  return (
    <main className="overflow-x-hidden bg-[#040404] text-white">
      <section className="mx-auto max-w-[1600px] px-6 pt-28 sm:px-10 lg:px-14">
        <Link
          href="/map"
          className="group relative block overflow-hidden rounded-[32px] border border-white/10 transition active:scale-[0.995]"
        >
          <div className="relative aspect-[4/3] sm:aspect-[21/8]">
            <Image
              src="/images/official/locations/vice-city.webp"
              alt="Vice City at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-10">
            <h1 className="text-4xl font-black leading-none tracking-[-0.03em] sm:text-6xl">
              GTA 6
              <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                Companion
              </span>
            </h1>
            <span className="rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_40px_rgba(124,58,237,.45)] transition group-hover:bg-violet-500">
              Open the map
            </span>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {play.map((item) => (
            <SimpleCard key={item.href} href={item.href} title={item.title} image={item.image} line={item.line} small />
          ))}
        </div>
      </section>

      <CategoryGridSection />
      <FeaturedNewsV2 />
    </main>
  );
}
