import PageTitle from "@/components/PageTitle";
import ManufacturerCard from "@/components/ManufacturerCard";

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

          <Badge>Official GTA VI Manufacturers</Badge>

          <PageTitle
            title="Vehicle Manufacturers"
            description="Browse every confirmed Grand Theft Auto VI vehicle manufacturer. Explore their vehicles, origins, and official appearances."
          />

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