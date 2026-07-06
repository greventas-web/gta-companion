import Link from "next/link";

import HomeContainer from "@/components/home/HomeContainer";
import Section from "@/components/home/Section";
import SectionHeader from "@/components/home/SectionHeader";

export default function FeaturedNews() {
  return (
    <Section className="py-36">

      <HomeContainer>

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <SectionHeader
            badge="Latest News"
            title="Rockstar News"
            description="Stay up to date with every official GTA VI announcement, trailer, screenshot and update."
          />

          <Link
            href="/news"
            className="w-fit rounded-2xl border border-pink-500 px-6 py-4 font-bold text-pink-400 transition hover:bg-pink-500 hover:text-white"
          >
            View All News
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 transition hover:border-pink-500">
            <div className="h-64 bg-[url('/images/home/categories/characters.jpg')] bg-cover bg-center" />
            <div className="p-8">
              <span className="text-sm uppercase tracking-[0.3em] text-pink-400">
                Rockstar Games
              </span>

              <h3 className="mt-4 text-3xl font-black">
                Trailer 2 Breakdown
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Discover every hidden detail, new vehicle and location revealed in Trailer 2.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 transition hover:border-pink-500">
            <div className="h-64 bg-[url('/images/home/categories/locations.jpg')] bg-cover bg-center" />
            <div className="p-8">
              <span className="text-sm uppercase tracking-[0.3em] text-pink-400">
                World
              </span>

              <h3 className="mt-4 text-3xl font-black">
                Exploring Leonida
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                A complete look at Vice City, surrounding regions and everything confirmed so far.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 transition hover:border-pink-500">
            <div className="h-64 bg-[url('/images/home/categories/vehicles.jpg')] bg-cover bg-center" />
            <div className="p-8">
              <span className="text-sm uppercase tracking-[0.3em] text-pink-400">
                Vehicles
              </span>

              <h3 className="mt-4 text-3xl font-black">
                Every Confirmed Vehicle
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Browse the growing database of officially confirmed GTA VI vehicles.
              </p>
            </div>
          </div>

        </div>

      </HomeContainer>

    </Section>
  );
}