import WeaponDatabase from "@/components/WeaponDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "GTA 6 weapons",
  "Weapons Rockstar has named for the Grand Theft Auto VI Ultimate Edition, with unnamed footage kept separate and no invented calibers. Unofficial fan site."
);

export default function WeaponsPage() {
  return (
    <PageShell>

      <PageHero
        badge="Grand Theft Auto Weapons"
        title="Weapon Database"
        description="Hawk & Little Morgan revolvers, the Girardi ES9, and the Klose K17 are the names Rockstar has published. Other shapes stay unlabeled. Last updated November 10, 2026."
      />

      <WeaponDatabase />

      <PageCTA
        title="No invented calibers"
        description="If Rockstar has not published a name or a caliber, this page says so."
      />

    </PageShell>
  );
}