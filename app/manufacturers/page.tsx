import PageTitle from "@/components/PageTitle";
import ManufacturerCard from "@/components/ManufacturerCard";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { manufacturers } from "@/data/manufacturers";

export default function ManufacturersPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Database</Badge>

          <PageTitle
            title="Manufacturer Database"
            description="Browse every officially confirmed GTA VI vehicle manufacturer and explore their growing line-up of vehicles."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Manufacturers"
              value={manufacturers.length}
            />

            <StatsCard
              label="Vehicle Brands"
              value={manufacturers.length}
            />

            <StatsCard
              label="Confirmed"
              value="100%"
            />

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {manufacturers.map((manufacturer) => (

              <ManufacturerCard
                key={manufacturer.id}
                manufacturer={manufacturer}
              />

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}