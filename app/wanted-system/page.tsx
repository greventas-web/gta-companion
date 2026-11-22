import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

const title = "GTA 6 Wanted System: Heat, Heat Area, and Six Stars";
const description =
  "Unofficial GTA 6 wanted system: witnesses call it in, up to six stars, and Heat drops when you change clothes, ditch a weapon or leave the area.";

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: ["GTA 6 wanted system", "GTA 6 heat", "GTA 6 heat area", "GTA 6 six stars", "GTA VI wanted system"],
};

export default function WantedSystemPage() {
  return (
    <PageShell>
      <SimpleHero title="Wanted system" image="/images/footage/places/wanted-hamlet-police.webp" />
      <QuickFacts
        wide
        facts={[
          { label: "Stars", value: "Up to 6" },
          { label: "Starts with", value: "Witnesses" },
          { label: "Lose Heat", value: "Change clothes, ditch the gun, or leave the area" },
          { label: "Criminal profile", value: "Professional or violent" },
          { label: "Long guns", value: "Can't be hidden. Keep them in a locker or the trunk." },
          { label: "Wasted or Busted", value: "You lose the cash you carry. Bank it." },
        ]}
      />
      <CardGrid heading="Related">
        <SimpleCard href="/ammu-nation-locations" title="Ammu-Nation" line="Lockers for long guns." image="/images/footage/brands/ammu-nation.webp" />
        <SimpleCard href="/phone/scooter-bros" title="Scooter Bros" line="Brings your car and its trunk." />
        <SimpleCard href="/phone/banking-app" title="BuckMe" line="Bank your cash." />
        <SimpleCard href="/map" title="Map" image="/images/official/locations/vice-city.webp" />
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["lose-wanted", "car-trackers", "rob-police-car", "armored-truck", "rob-atm", "military-base", "mask", "change-clothes", "how-to-heal", "impounded-car", "rob-store", "stealth-takedown", "haircut", "gang-hideouts", "wasted-busted", "police-scanner", "criminal-profile", "crouch", "drive-by"])} />
    </PageShell>
  );
}
