import type { Metadata } from "next";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { LaunchIndex } from "@/components/launch/LaunchSection";
import { launchMetadata } from "@/lib/launch";
import { moneyMethods } from "@/src/data/launch/money-methods";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

const title = "How to Make Money Fast in GTA 6 (Spoiler-Safe)";
const description =
  "The best GTA 6 money methods by chapter: selling cars to Moses and Pay 'n' Spray, Randy's wish list, jewelry stores, gang operations, and treasure diving. Unofficial fan site.";

export const metadata: Metadata = launchMetadata(title, description);

export default function MoneyMethodsPage() {
  return (
    <LaunchIndex
      badge="Unofficial · spoiler-safe"
      title="Make money"
      description=""
      basePath="/money-methods"
      entries={moneyMethods}
      emptyBody="No money methods are listed yet."
    >
      <QuickGuideGrid guides={quickGuideCards(["money-glitch", "sell-cars", "rob-store", "bank-account-atm", "sell-guns", "hunting"])} />
    </LaunchIndex>
  );
}
