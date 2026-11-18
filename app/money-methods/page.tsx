import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { moneyMethods } from "@/src/data/launch/money-methods";

const title = "GTA 6 Money Methods";
const description =
  "Ways to earn money in GTA 6, listed only after each method is checked in the game. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata: Metadata = launchMetadata(title, description);

export default function MoneyMethodsPage() {
  return (
    <LaunchIndex
      badge="Unofficial · checked in-game only"
      title="Money methods"
      description="Ways to earn money in GTA 6 are listed here only after each method is checked in the game."
      basePath="/money-methods"
      entries={moneyMethods}
      emptyBody="No money methods are published yet. Entries appear here only after they are checked in the game."
    />
  );
}
