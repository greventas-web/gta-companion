import type { Metadata } from "next";

import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { SITE } from "@/lib/site";
import { moneyMethods } from "@/src/data/launch/money-methods";

const title = "GTA 6 Money Methods";
const description = `GTA 6 money methods, added after launch on ${SITE.launchLabel}. Nothing is listed until it is checked in the game. ${SITE.slogan}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.`;

export const metadata: Metadata = launchMetadata(title, description);

export default function MoneyMethodsPage() {
  return (
    <LaunchIndex
      badge={`Coming at launch · ${SITE.launchLabel}`}
      title="Money methods"
      description={`Ways to earn money in GTA 6 will be listed here after launch on ${SITE.launchLabel}. This page stays empty until each method is checked in the game.`}
      basePath="/money-methods"
      entries={moneyMethods}
      emptyBody={`No money methods are published yet. Entries will be added here on ${SITE.launchLabel}, after they are checked in the game.`}
    />
  );
}
