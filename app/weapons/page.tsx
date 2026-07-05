import WeaponCard from "@/components/WeaponCard";
import PageTitle from "@/components/PageTitle";

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

          <Badge>Official GTA VI Weapons</Badge>

          <PageTitle
            title="Weapons"
            description="Browse weapons officially shown by Rockstar Games for Grand Theft Auto VI."
          />

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