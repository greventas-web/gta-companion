import BusinessCard from "@/components/BusinessCard";
import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Businesses</Badge>

          <PageTitle
            title="Businesses"
            description="Browse businesses, shops, hotels, clubs and other establishments officially revealed in Grand Theft Auto VI."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {businesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
              />
            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}