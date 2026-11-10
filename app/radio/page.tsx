import { pageMetadata } from "@/lib/launch";
import { IMAGE_CREDIT, SITE } from "@/lib/site";
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
          Last updated November 10, 2026
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
          <h2 className="text-2xl font-black">Talk shows and podcasts</h2>
          <ul className="mt-4 space-y-3 text-zinc-400">
            {radioNotes.map((note) => (
              <li key={note} className="leading-7">
                {note}
              </li>
            ))}
          </ul>
          <a
            href={radioSource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-pink-300 hover:text-pink-200"
          >
            {radioSource.label} — {radioSource.published}
          </a>
          <p className="mt-6 text-sm text-zinc-500">{IMAGE_CREDIT}</p>
        </section>
      </div>
    </main>
  );
}
