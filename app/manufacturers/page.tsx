import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import PageTitle from "@/components/PageTitle";
import ManufacturerCard from "@/components/ManufacturerCard";

import { manufacturers } from "@/data/manufacturers";

export default function ManufacturersPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>GTA 6 Manufacturers</Badge>

          <PageTitle
            title="Vehicle Manufacturers"
            description="Browse every GTA VI vehicle manufacturer, their history, country of origin and vehicle lineup."
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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