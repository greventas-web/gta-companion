import VehicleDatabase from "@/components/VehicleDatabase";
import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>GTA 6 Vehicle Database</Badge>

          <PageTitle
            title="Every Vehicle. One Place."
            description="Browse every confirmed GTA VI vehicle with statistics, manufacturers, locations and performance ratings."
          />

          <VehicleDatabase />

        </Container>

      </Section>

    </main>
  );
}