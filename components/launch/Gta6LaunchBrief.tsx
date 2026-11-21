import type { ReactNode } from "react";

import { SourceList } from "@/components/SourceLink";
import { QuickFacts } from "@/components/simple/SimpleCard";
import { IMAGE_CREDIT } from "@/lib/site";
import { festivalTile, gta6Launch, launchSources } from "@/src/data/launch/gta6-launch";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-black tracking-[-0.02em] sm:text-3xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Sources({ ids }: { ids: readonly string[] }) {
  return <SourceList sources={launchSources(ids)} className="mt-3" />;
}

/** Post-launch notes for /gta-6-launch. Facts stay tied to the publishers already cited in the data. */
export default function Gta6LaunchBrief() {
  const festival = festivalTile();
  const festivalToday = festival.title === "The Festival is today";

  return (
    <div>
      <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-zinc-100">{gta6Launch.lede}</p>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
        Updated {gta6Launch.lastUpdated}. Unofficial fan notes. Grand Theft Auto VI is by Rockstar Games. {IMAGE_CREDIT}.
      </p>

      <QuickFacts facts={gta6Launch.stats} />

      <Section title="Where it unlocked">
        <div className="grid gap-4 lg:grid-cols-3">
          {gta6Launch.unlocks.map((item) => (
            <article key={item.id} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">{item.statusLabel}</p>
              <h3 className="mt-2 text-lg font-black text-white">{item.platform}</h3>
              <p className="mt-1 text-sm font-semibold text-zinc-400">{item.headline}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{item.body}</p>
              <Sources ids={item.sourceIds} />
            </article>
          ))}
        </div>
      </Section>

      <Section title={gta6Launch.preload.title}>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">{gta6Launch.preload.statusLabel}</p>
          <p className="mt-3 max-w-3xl leading-7 text-zinc-200">{gta6Launch.preload.body}</p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {gta6Launch.preload.windows.map((window) => (
              <div key={window.platform} className="rounded-2xl border border-white/10 px-4 py-3">
                <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">{window.platform}</dt>
                <dd className="mt-1 font-semibold text-white">{window.when}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">{gta6Launch.preload.note}</p>
          <Sources ids={gta6Launch.preload.sourceIds} />
        </div>
      </Section>

      <Section title={gta6Launch.storage.title}>
        <p className="max-w-3xl leading-7 text-zinc-200">{gta6Launch.storage.body}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {gta6Launch.storage.tips.map((tip) => (
            <article key={tip.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-black text-white">{tip.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{tip.body}</p>
            </article>
          ))}
        </div>
        <Sources ids={gta6Launch.storage.sourceIds} />
      </Section>

      <Section title={gta6Launch.performance.title}>
        <div className="grid gap-4 lg:grid-cols-2">
          {gta6Launch.performance.items.map((item) => (
            <article key={item.id} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">{item.platform}</p>
              <h3 className="mt-2 font-black text-white">{item.headline}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{item.body}</p>
              <Sources ids={item.sourceIds} />
            </article>
          ))}
        </div>
      </Section>

      <Section title={gta6Launch.boxed.title}>
        <p className="max-w-3xl leading-7 text-zinc-200">{gta6Launch.boxed.body}</p>
        <Sources ids={gta6Launch.boxed.sourceIds} />
      </Section>

      <Section title={gta6Launch.cloud.title}>
        <p className="max-w-3xl leading-7 text-zinc-200">{gta6Launch.cloud.body}</p>
        <Sources ids={gta6Launch.cloud.sourceIds} />
      </Section>

      <Section title={festivalToday ? "The Festival is today" : "The Festival"}>
        <p className="max-w-3xl leading-7 text-zinc-200">
          {festivalToday ? "The event is today. " : null}
          {gta6Launch.festival.line}
        </p>
        <Sources ids={gta6Launch.festival.sourceIds} />
      </Section>

      <Section title={gta6Launch.launchWeek.title}>
        <p className="max-w-3xl leading-7 text-zinc-300">{gta6Launch.launchWeek.intro}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {gta6Launch.launchWeek.events.map((event) => (
            <article key={event.id} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">{event.statusLabel}</p>
              <h3 className="mt-2 text-lg font-black text-white">{event.title}</h3>
              <p className="mt-2 text-sm font-semibold text-zinc-400">
                {event.when}
                {" · "}
                {event.time}
              </p>
              <p className="mt-1 text-sm font-semibold text-pink-200">
                {"placeHref" in event && event.placeHref ? (
                  <a href={event.placeHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {event.place}
                  </a>
                ) : (
                  event.place
                )}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{event.body}</p>
              <Sources ids={event.sourceIds} />
            </article>
          ))}
        </div>
      </Section>

      <Section title="Questions">
        <dl className="grid gap-3">
          {gta6Launch.faqs.map((faq) => (
            <div key={faq.question} className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4">
              <dt className="font-black text-white">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}
