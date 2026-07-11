import BrandCard from "@/components/BrandCard";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { brands } from "@/data/brands";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Database</Badge>

          <PageTitle
            title="Brand Database"
            description="Browse every officially confirmed company, product and fictional brand appearing throughout Grand Theft Auto VI."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Brands"
              value={brands.length}
            />

            <StatsCard
              label="Categories"
              value={
                new Set(
                  brands.map(
                    (brand) => brand.category
                  )
                ).size
              }
            />

            <StatsCard
              label="Confirmed"
              value="100%"
            />

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {brands.map((brand) => (

              <BrandCard
                key={brand.id}
                brand={brand}
              />

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}