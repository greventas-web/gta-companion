import VehicleDatabase from "@/components/VehicleDatabase";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { vehicles } from "@/data/vehicles";

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Database</Badge>

          <PageTitle
            title="Vehicle Database"
            description="Browse every confirmed Grand Theft Auto VI vehicle, manufacturer and category."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Vehicles"
              value={vehicles.length}
            />

            <StatsCard
              label="Manufacturers"
              value={
                new Set(
                  vehicles.map((v) => v.manufacturer)
                ).size
              }
            />

            <StatsCard
              label="Categories"
              value={
                new Set(
                  vehicles.map((v) => v.category)
                ).size
              }
            />

          </div>

          <VehicleDatabase />

        </Container>

      </Section>

    </main>
  );
}