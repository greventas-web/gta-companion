import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import { pickHubs } from "@/lib/simple/hubs";
import { mapLocations } from "@/src/data/launch/map-locations";

const title = "GTA 6 map locations (unofficial)";
const description =
  "Unofficial GTA 6 map locations: the interactive Leonida map, all 24 Ammu-Nation stores, shops, garages and regions.";

export const metadata: Metadata = launchMetadata(title, description);

const hubs: { href: string; title: string; image?: string; line?: string; kind?: string }[] = [
  ...pickHubs(["map", "ammuNation", "whereToFind", "locations", "stores"]),
  { href: "/properties", title: "Garages and hideouts", image: "/images/official/editions/ultimate_edition_safehouse_vehicles_01.webp", kind: "garage" },
];

export default function MapLocationsPage() {
  return (
    <PageShell>
      <SimpleHero title="Map locations" />
      {mapLocations.length > 0 ? (
        <CardGrid count={mapLocations.length}>
          {mapLocations.map((entry) => (
            <SimpleCard key={entry.slug} href={`/map-locations/${entry.slug}`} title={entry.title} image={entry.image} price={entry.price} />
          ))}
        </CardGrid>
      ) : null}
      <CardGrid heading={mapLocations.length > 0 ? "More" : undefined}>
        {hubs.map((hub) => (
          <SimpleCard key={hub.href} href={hub.href} title={hub.title} image={hub.image} line={hub.line} kind={hub.kind} />
        ))}
      </CardGrid>
    </PageShell>
  );
}
