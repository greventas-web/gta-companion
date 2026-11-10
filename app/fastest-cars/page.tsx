import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { SITE } from "@/lib/site";
import { fastestCars } from "@/src/data/launch/fastest-cars";

const title = "Fastest Cars in GTA 6";
const description = `The fastest cars in GTA 6, listed after launch on ${SITE.launchLabel}. No speeds are published until they are checked in the game. ${SITE.slogan}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`;

export const metadata: Metadata = launchMetadata(title, description);

export default function FastestCarsPage() {
  return (
    <LaunchIndex
      badge={`Coming at launch · ${SITE.launchLabel}`}
      title="Fastest cars"
      description={`A list of the fastest cars in GTA 6 will be added after launch on ${SITE.launchLabel}. No top speeds or classes are shown until they are checked in the game.`}
      basePath="/fastest-cars"
      entries={fastestCars}
      emptyBody={`No cars are ranked yet. Rankings will be added on ${SITE.launchLabel}, after they are checked in the game.`}
    />
  );
}
