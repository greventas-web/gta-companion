import LocationCard from "@/components/LocationCard";
import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { locations } from "@/data/locations";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Locations</Badge>

          <PageTitle
            title="Locations"
            description="Explore every officially revealed location in Grand Theft Auto VI."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {locations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
              />
            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}