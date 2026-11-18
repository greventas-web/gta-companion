import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { fastestCars } from "@/src/data/launch/fastest-cars";

const title = "Fastest Cars in GTA 6";
const description =
  "The fastest cars in GTA 6, ranked only after top speeds are checked in the game. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata: Metadata = launchMetadata(title, description);

export default function FastestCarsPage() {
  return (
    <LaunchIndex
      badge="Unofficial · checked in-game only"
      title="Fastest cars"
      description="A list of the fastest cars in GTA 6 will be added here after top speeds and classes are checked in the game."
      basePath="/fastest-cars"
      entries={fastestCars}
      emptyBody="No cars are ranked yet. Rankings appear here only after they are checked in the game."
    />
  );
}
