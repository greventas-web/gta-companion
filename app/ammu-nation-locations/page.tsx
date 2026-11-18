import type { Metadata } from "next";
import Link from "next/link";

import FaqSection, { type FaqItem } from "@/components/intent/FaqSection";
import JsonLd from "@/components/JsonLd";
import MapPinLink from "@/components/map/MapPinLink";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { gameplaySources } from "@/src/data/gameplay/confirmed";
import {
  ammuNationNotes,
  ammuNationSources,
  ammuNationStores,
  type AmmuNationStore,
} from "@/src/data/launch/launch-facts";

const title = "GTA 6 Ammu-Nation Locations – All 24 Stores";
const description = `Every Ammu-Nation gun store in GTA 6: all 24 branches by county, with each store’s stock tier (Limited, Standard, Hunting, Expanded). ${SITE.slogan}. ${UNOFFICIAL_DISCLAIMER}`;

export const metadata: Metadata = {
  ...launchMetadata(title, description),
  keywords: [
    "GTA 6 Ammu-Nation locations",
    "GTA 6 gun stores",
    "GTA 6 Ammu-Nation",
    "GTA VI Ammu-Nation",
  ],
};

const counties: AmmuNationStore["county"][] = [
  "Mariana County",
  "Vice-Dale County",
  "Kelly County",
];

const expanded = ammuNationStores.filter((store) => store.inventory === "Expanded");

const storePins: Record<string, string> = {
  "Phil’s Ammu-Nation": "confirmed:phils-ammu-nation",
  "Pawn & Gun – Port Gellhorn": "confirmed:pawn-and-gun-port-gellhorn",
};

const areaPins: Record<string, string> = {
  Capri: "confirmed:capri",
  Hamlet: "confirmed:hamlet",
  "Port Gellhorn": "confirmed:port-gellhorn",
  Belville: "confirmed:belville",
  Ambrosia: "confirmed:ambrosia",
  "Mount Kalaga National Park": "confirmed:mount-kalaga-national-park",
  "Ocean Beach, Vice City": "confirmed:ocean-beach",
};

function pinForStore(store: AmmuNationStore) {
  return storePins[store.name] ?? areaPins[store.area];
}

const ammuFaqs: FaqItem[] = [
  {
    question: "How many Ammu-Nation stores are in GTA 6?",
    answer:
      "There are 24 Ammu-Nation gun stores in Leonida, across Mariana County, Vice-Dale County, and Kelly County.",
    sources: ammuNationSources,
  },
  {
    question: "What do Limited, Standard, Hunting, and Expanded mean?",
    answer:
      "Each branch shows its stock tier when you hover its map icon: Limited, Standard, Hunting, or Expanded. Expanded branches carry the widest range, including sniper rifles, grenade launchers, and rocket launchers.",
    sources: ammuNationSources,
  },
  {
    question: "Which Ammu-Nation stores have the widest stock?",
    answer: `The Expanded stores are ${expanded.map((store) => store.name).join(", ")}.`,
    sources: ammuNationSources,
  },
  {
    question: "Can you store weapons at Ammu-Nation?",
    answer:
      "Many branches also sell clothing and have a weapon locker, and some sell fishing gear. Rockstar also described Ammu-Nation lockers and trunk storage as the way to keep long guns, which cannot be concealed.",
    sources: [...ammuNationSources, ...gameplaySources],
  },
];

export default function AmmuNationLocationsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 Ammu-Nation locations",
          "/ammu-nation-locations",
          ammuNationStores.map((store) => ({ name: store.name }))
        )}
      />
      <PageHero
        badge="Unofficial · confirmed at launch"
        title="Where to find Ammu-Nation in GTA 6"
        description={`All ${ammuNationStores.length} Ammu-Nation gun stores in Leonida, by county, with the stock tier each one shows on the map. ${expanded.length} are Expanded stores with the widest range of guns.`}
      />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-2xl font-black">How the stores work</h2>
        <ul className="mt-4 grid gap-2 text-zinc-300">
          {ammuNationNotes.map((note) => (
            <li key={note}>• {note}</li>
          ))}
        </ul>
        <p className="mt-4 text-zinc-400">
          Expanded stores: {expanded.map((store) => store.name).join(", ")}.
        </p>
        <SourceList className="mt-6" sources={ammuNationSources} />
      </section>

      {counties.map((county) => {
        const rows = ammuNationStores.filter((store) => store.county === county);
        return (
          <section key={county} className="mt-10">
            <h2 className="text-3xl font-black tracking-[-0.03em]">
              {county} · {rows.length}
            </h2>
            <div className="mt-6 overflow-x-auto rounded-[24px] border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-[11px] font-black uppercase tracking-[0.18em] text-violet-300">
                  <tr>
                    <th className="px-4 py-3">Store</th>
                    <th className="px-4 py-3">Area</th>
                    <th className="px-4 py-3">Stock tier</th>
                    <th className="px-4 py-3">Map</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((store) => {
                    const pin = pinForStore(store);
                    return (
                    <tr key={store.name} className="border-t border-white/10 text-zinc-300">
                      <td className="px-4 py-3 font-semibold text-white">{store.name}</td>
                      <td className="px-4 py-3">{store.area}</td>
                      <td className="px-4 py-3">{store.inventory}</td>
                      <td className="px-4 py-3">
                        {pin ? (
                          <MapPinLink mapPinId={pin} className="px-3 py-1.5 text-xs" />
                        ) : (
                          <span className="text-zinc-500">Listed, pin coming</span>
                        )}
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <FaqSection faqs={ammuFaqs} />

      <p className="mt-10 text-zinc-400">
        Looking for guns?{" "}
        <Link href="/weapons" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Weapons database
        </Link>
        {" · "}
        <Link href="/map" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Community map
        </Link>
        {" · "}
        <Link href="/wanted-system" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Wanted system
        </Link>
        {" · "}
        <Link href="/phone/scooter-bros" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Scooter Bros
        </Link>
      </p>
      <SourceList className="mt-6" sources={ammuNationSources} />
    </PageShell>
  );
}
