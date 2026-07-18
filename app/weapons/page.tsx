import WeaponDatabase from "@/components/WeaponDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { weapons } from "@/data/weapons";

export default function WeaponsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Official GTA VI Weapons"
        title="Weapon Database"
        description="Browse every officially confirmed weapon revealed by Rockstar Games for Grand Theft Auto VI, including pistols, rifles, shotguns, melee weapons and future additions."
      />

      <PageStats
        stats={[
          {
            value: weapons.length,
            label: "Confirmed Weapons",
          },
          {
            value: "Official",
            label: "Rockstar Data",
          },
          {
            value: "100%",
            label: "Verified Information",
            accent: true,
          },
        ]}
      />

      <WeaponDatabase />

      <PageCTA
        title="More Weapons Coming Soon"
        description="As Rockstar Games officially reveals additional weapons, GTA Companion will continue expanding the database with specifications, screenshots and detailed information."
      />
    </PageShell>
  );
}