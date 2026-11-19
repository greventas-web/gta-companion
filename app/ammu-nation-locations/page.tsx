import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { launchMetadata } from "@/lib/launch";
import { getStaticPins } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { AMMU_COUNTIES, ammuPinIds, ammuStores } from "@/lib/simple/ammu";
import { imageForPin } from "@/lib/simple/pinImage";
import { imageForPath } from "@/lib/simple/placeImages";

const title = "GTA 6 Ammu-Nation Locations – All 24 Stores";
const description =
  "Unofficial GTA 6 Ammu-Nation map: all 24 gun stores by county, with each store's stock tier (Limited, Standard, Hunting, Expanded) and map links.";

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: ["GTA 6 Ammu-Nation locations", "GTA 6 gun stores", "GTA 6 Ammu-Nation", "GTA VI Ammu-Nation"],
};

/** Fails the build if a map link does not use a real /map pin id. */
function checkAmmuPins() {
  const known = new Set(getStaticPins().map((pin) => pin.id));
  const missing = ammuPinIds.filter((id) => !id.startsWith("confirmed:") || !known.has(id));
  if (missing.length > 0) {
    throw new Error(`ammu-nation-locations points at unknown map pins: ${missing.join(", ")}`);
  }
}

export default function AmmuNationLocationsPage() {
  checkAmmuPins();

  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 Ammu-Nation locations",
          "/ammu-nation-locations",
          ammuStores.map((store) => ({ name: store.name, url: `/ammu-nation-locations/${store.slug}` }))
        )}
      />
      <SimpleHero title="Ammu-Nation" />
      {AMMU_COUNTIES.map((county) => {
        const list = ammuStores.filter((store) => store.county === county);
        return (
          <CardGrid key={county} heading={county} count={list.length} dense>
            {list.map((store) => (
              <SimpleCard
                key={store.slug}
                href={`/ammu-nation-locations/${store.slug}`}
                title={store.name}
                image={imageForPath(`/ammu-nation-locations/${store.slug}`)?.src ?? (store.exactPin ? imageForPin(store.pin).src : undefined)}
                eyebrow={store.area}
                chips={[{ value: store.inventory }]}
                mapPin={store.pin}
                small
              />
            ))}
          </CardGrid>
        );
      })}
    </PageShell>
  );
}
