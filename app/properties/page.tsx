import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { famitsuSources, rockstarVi } from "@/src/data/gameplay/confirmed";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Garages and safehouses Rockstar and Rob Nelson have confirmed for Grand Theft Auto VI. Unofficial fan site.",
};

const rockstarPlaces = [
  {
    name: "Shore Court",
    note: "Personal garage near Ocean Beach. It comes with the Vintage Vice City Pack.",
  },
  {
    name: "Paradise Garage",
    note: "In Watson Bay, included with the Ultimate Edition. It has a weapon locker and a place to deposit stolen goods to be fenced.",
  },
];

const famitsuPlaces = [
  {
    name: "Jason's first house",
    note: "Rob Nelson says Jason's first house is in the Leonida Keys.",
  },
  {
    name: "Hideouts",
    note: "Hideouts change as the story progresses, chapter by chapter.",
  },
  {
    name: "Vehicle storage",
    note: "Three vehicle spaces at first. Buy garages around the map to own more.",
  },
];

export default function PropertiesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Properties"
        description="Garages Rockstar has named, and safehouse facts from Rob Nelson's Famitsu interview. A full property catalog waits for more official detail."
      />

      <section>
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          Named by Rockstar
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rockstarPlaces.map((place) => (
            <article
              key={place.name}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
                Confirmed
              </p>
              <h3 className="mt-3 text-2xl font-black">{place.name}</h3>
              <p className="mt-4 leading-8 text-zinc-400">{place.note}</p>
            </article>
          ))}
        </div>
        <a
          href={rockstarVi.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-pink-300 hover:text-pink-200"
        >
          Source: {rockstarVi.label}
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          From Rob Nelson
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          Safehouses and vehicle storage Rob Nelson described to Famitsu.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {famitsuPlaces.map((place) => (
            <article
              key={place.name}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
            >
              <h3 className="text-2xl font-black">{place.name}</h3>
              <p className="mt-4 leading-8 text-zinc-400">{place.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 space-y-2">
          {famitsuSources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-pink-300 hover:text-pink-200"
            >
              Source: {source.label}
            </a>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER}
      </p>
    </PageShell>
  );
}
