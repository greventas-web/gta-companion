import WeaponDatabase from "@/components/WeaponDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export default function WeaponsPage() {
  return (
    <PageShell>

      <PageHero
        badge="Grand Theft Auto Weapons"
        title="Weapon Database"
        description="Browse handguns, rifles, shotguns, heavy weapons, melee weapons and explosives from across the Grand Theft Auto universe. GTA Companion clearly identifies officially confirmed GTA VI weapons while preserving the history of the series."
      />

      <WeaponDatabase />

      <PageCTA
        title="The Arsenal Continues to Grow"
        description="As Rockstar Games officially reveals additional weapons for Grand Theft Auto VI, GTA Companion will continue expanding the database with verified information, official screenshots and detailed weapon pages."
      />

    </PageShell>
  );
}