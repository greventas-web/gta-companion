import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { SITE } from "@/lib/site";
import { cheats } from "@/src/data/launch/cheats";

const title = "GTA 6 Cheats";
const description = `GTA 6 cheats, listed after launch on ${SITE.launchLabel}. No codes are published until they are checked in the game. ${SITE.slogan}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`;

export const metadata: Metadata = launchMetadata(title, description);

export default function CheatsPage() {
  return (
    <LaunchIndex
      badge={`Coming at launch · ${SITE.launchLabel}`}
      title="Cheats"
      description={`GTA 6 cheat codes will be listed here after launch on ${SITE.launchLabel}. No codes, button sequences, or phone numbers are published until they are checked in the game.`}
      basePath="/cheats"
      entries={cheats}
      emptyBody="No cheat codes are published yet. A code appears here only after it has been checked in the game."
    />
  );
}
