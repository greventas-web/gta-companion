import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { cheats } from "@/src/data/launch/cheats";

const title = "GTA 6 Cheats";
const description =
  "GTA 6 cheats and codes, listed here only after they are checked in the game. No guessed button sequences or phone numbers. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata: Metadata = launchMetadata(title, description);

export default function CheatsPage() {
  return (
    <LaunchIndex
      badge="Unofficial · checked in-game only"
      title="Cheats"
      description="GTA 6 cheat codes are listed here only after they are checked in the game. No codes, button sequences, or phone numbers are published early."
      basePath="/cheats"
      entries={cheats}
      emptyBody="No cheat codes are published yet. A code appears here only after it has been checked in the game."
    />
  );
}
