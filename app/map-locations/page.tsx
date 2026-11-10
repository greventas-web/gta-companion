import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { SITE } from "@/lib/site";
import { mapLocations } from "@/src/data/launch/map-locations";

const title = "GTA 6 Map Locations";
const description = `GTA 6 map locations, added after launch on ${SITE.launchLabel}. No places are listed until they are checked in the game. ${SITE.slogan}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`;

export const metadata: Metadata = launchMetadata(title, description);

export default function MapLocationsPage() {
  return (
    <LaunchIndex
      badge={`Coming at launch · ${SITE.launchLabel}`}
      title="Map locations"
      description={`Locations for the GTA 6 map will be added after launch on ${SITE.launchLabel}. This list stays empty until each place is checked in the game.`}
      basePath="/map-locations"
      entries={mapLocations}
      emptyBody="No map locations are published yet. A place appears here only after it has been checked in the game."
    />
  );
}
