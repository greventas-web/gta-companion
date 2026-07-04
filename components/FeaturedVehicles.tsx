import HomeSection from "@/components/HomeSection";
import HomeSectionButton from "@/components/HomeSectionButton";
import SectionGrid from "@/components/SectionGrid";
import VehicleCard from "@/components/VehicleCard";

import { vehicles } from "@/data/vehicles";

export default function FeaturedVehicles() {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <HomeSection
      title="Featured Vehicles"
      description="Explore some of the latest confirmed GTA VI vehicles."
    >
      <SectionGrid>

        {featuredVehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}

      </SectionGrid>

      <HomeSectionButton href="/vehicles">
        View Full Vehicle Database
      </HomeSectionButton>

    </HomeSection>
  );
}