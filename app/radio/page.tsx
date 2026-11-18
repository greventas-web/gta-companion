import Link from "next/link";

import { SourceList } from "@/components/SourceLink";
import { pageMetadata } from "@/lib/launch";
import { IMAGE_CREDIT, SITE } from "@/lib/site";
import { albumSingles, albumSource, albumSummary, scoreSource, scoreSummary } from "@/data/music";
import { radioNotes, radioSource, radioStations } from "@/data/radio";

export const metadata = pageMetadata(
  "GTA 6 radio stations",
  `The six radio stations Rockstar has named for Grand Theft Auto VI, plus on-demand podcasts. ${SITE.slogan}. Unofficial fan site.`
);

export default function RadioPage() {
  return (
    <main className="min-h-screen bg-[#040404] px-6 pb-24 pt-36 text-white sm:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-300">
          Last updated November 15, 2026
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.03em]">
          Radio stations
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
          Rockstar named six stations on October 8, 2026, and said players can
          also listen to on-demand podcasts. {SITE.slogan}. This is an
          unofficial fan site, not affiliated with Rockstar Games or Take-Two.
        </p>

        <div className="mt-10 grid gap-4">
          {radioStations.map((station) => (
            <article
              key={station.name}
              className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
                Confirmed
              </p>
              <h2 className="mt-3 text-3xl font-black">{station.name}</h2>
              <p className="mt-2 text-sm font-semibold text-pink-300">
                {station.hosts}
              </p>
              <p className="mt-4 leading-7 text-zinc-400">{station.summary}</p>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
          <h2 className="text-2xl font-black">Music</h2>
          <h3 className="mt-6 text-xl font-black">Grand Theft Auto VI: The Album</h3>
          <p className="mt-3 leading-7 text-zinc-400">{albumSummary}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            {albumSingles.map((single) => (
              <li key={single}>{single}</li>
            ))}
          </ul>
          <SourceList sources={[albumSource]} className="mt-4" />

          <h3 className="mt-8 text-xl font-black">Original score by Justice</h3>
          <p className="mt-3 leading-7 text-zinc-400">{scoreSummary}</p>
          <SourceList sources={[scoreSource]} className="mt-4" />
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
          <h2 className="text-2xl font-black">Talk shows and podcasts</h2>
          <ul className="mt-4 space-y-3 text-zinc-400">
            {radioNotes.map((note) => (
              <li key={note} className="leading-7">
                {note}
              </li>
            ))}
          </ul>
          <SourceList sources={[radioSource]} className="mt-6" />
          <p className="mt-4 leading-7 text-zinc-400">
            The podcast and headphone notes are also in the{" "}
            <Link href="/phone/podcasts" className="font-semibold text-pink-300 hover:text-pink-200">
              phone catalog
            </Link>
            , with{" "}
            <Link href="/phone/headphones" className="font-semibold text-pink-300 hover:text-pink-200">
              headphones and earbuds
            </Link>
            .
          </p>
          <p className="mt-6 text-sm text-zinc-500">{IMAGE_CREDIT}</p>
        </section>
      </div>
    </main>
  );
}
