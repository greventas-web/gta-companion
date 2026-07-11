import WeaponCard from "@/components/WeaponCard";
import PageTitle from "@/components/PageTitle";
import StatsCard from "@/components/StatsCard";

import {
  Badge,
  Container,
  Section,
} from "@/components/ui";

import { weapons } from "@/data/weapons";

export default function WeaponsPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <Badge>Official GTA VI Database</Badge>

          <PageTitle
            title="Weapon Database"
            description="Browse every officially confirmed GTA VI weapon including pistols, rifles, shotguns, melee weapons and future additions."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <StatsCard
              label="Weapons"
              value={weapons.length}
            />

            <StatsCard
              label="Categories"
              value={
                new Set(
                  weapons.map((weapon) => weapon.category)
                ).size
              }
            />

            <StatsCard
              label="Confirmed"
              value="100%"
            />

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {weapons.map((weapon) => (

              <WeaponCard
                key={weapon.id}
                weapon={weapon}
              />

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
}