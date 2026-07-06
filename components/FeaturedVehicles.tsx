import Link from "next/link";

import HomeContainer from "@/components/home/HomeContainer";
import Section from "@/components/home/Section";
import SectionHeader from "@/components/home/SectionHeader";

import { vehicles } from "@/data/vehicles";

import VehicleCard from "@/components/VehicleCard";

export default function FeaturedVehicles() {
  const featured = vehicles.slice(0, 3);

  return (
    <Section className="py-36">

      <HomeContainer>

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <SectionHeader
            badge="Vehicle Database"
            title="Featured Vehicles"
            description="Explore detailed information, specifications, manufacturers and locations for every confirmed GTA VI vehicle."
          />

          <Link
            href="/vehicles"
            className="w-fit rounded-2xl border border-pink-500 px-6 py-4 font-bold text-pink-400 transition hover:bg-pink-500 hover:text-white"
          >
            View Complete Database
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {featured.map((vehicle) => (
            <VehicleCard
              key={vehicle.slug}
              vehicle={vehicle}
            />
          ))}

        </div>

      </HomeContainer>

    </Section>
  );
}