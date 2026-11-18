import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { SourceList } from "@/components/SourceLink";
import { launchMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
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
        title="Ammu-Nation locations"
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
                  </tr>
                </thead>
                <tbody>
                  {rows.map((store) => (
                    <tr key={store.name} className="border-t border-white/10 text-zinc-300">
                      <td className="px-4 py-3 font-semibold text-white">{store.name}</td>
                      <td className="px-4 py-3">{store.area}</td>
                      <td className="px-4 py-3">{store.inventory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <p className="mt-10 text-zinc-400">
        Looking for guns?{" "}
        <Link href="/weapons" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Weapons database
        </Link>
        {" · "}
        <Link href="/map" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          Community map
        </Link>
      </p>
      <SourceList className="mt-6" sources={ammuNationSources} />
    </PageShell>
  );
}
