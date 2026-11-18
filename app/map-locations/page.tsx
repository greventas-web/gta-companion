import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { mapLocations } from "@/src/data/launch/map-locations";

const title = "GTA 6 map locations (unofficial)";
const description =
  "GTA 6 map locations checked in the game, plus the live unofficial Leonida map and the 24 Ammu-Nation stores. Places are added only after they are confirmed. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata: Metadata = launchMetadata(title, description);

export default function MapLocationsPage() {
  return (
    <LaunchIndex
      badge="Unofficial · checked in-game only"
      title="Map locations"
      description="In-game GTA 6 map locations are added here as they are confirmed. For the live unofficial Leonida map, open the interactive map. All 24 Ammu-Nation stores have their own list."
      basePath="/map-locations"
      entries={mapLocations}
      emptyBody="No extra map locations are listed here yet. Open the interactive map for the live unofficial Leonida map, and see the Ammu-Nation list for all 24 gun stores."
    />
  );
}
