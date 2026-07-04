import VehicleDatabase from "@/components/VehicleDatabase";

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

          <VehicleDatabase />

        </Container>

      </Section>

    </main>
  );
}