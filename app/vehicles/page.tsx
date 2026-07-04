import VehicleCard from "@/components/VehicleCard";
import SearchBar from "@/components/SearchBar";
import { vehicles } from "@/data/vehicles";

import {
  Badge,
  Container,
  PageHeader,
  Section,
} from "@/components/ui";

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>
            GTA 6 Vehicle Database
          </Badge>

          <PageHeader
            title="Every Vehicle. One Place."
            description="Browse every confirmed GTA 6 vehicle with statistics, manufacturers, locations and performance ratings."
          />

          <SearchBar placeholder="Search vehicles..." />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}