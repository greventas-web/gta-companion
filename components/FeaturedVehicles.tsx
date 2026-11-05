import Link from "next/link";

import HomeContainer from "@/components/home/HomeContainer";
import Section from "@/components/home/Section";
import SectionHeader from "@/components/home/SectionHeader";

import VehicleCard from "@/components/VehicleCard";

import { vehicles } from "@/data/vehicles";

export default function FeaturedVehicles() {
  const featured = vehicles.slice(0, 3);

  return (
    <Section className="relative py-40">
      <HomeContainer>
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            badge="Vehicle Database"
            title="Featured Vehicles"
            description="Browse officially confirmed GTA VI vehicles with specifications, manufacturers, pricing and detailed information."
          />

          <Link
            href="/vehicles"
            className="group inline-flex w-fit items-center rounded-2xl border border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 px-8 py-4 font-semibold text-pink-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500 hover:text-white hover:shadow-[0_20px_60px_rgba(236,72,153,.35)]"
          >
            View All Vehicles

            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
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