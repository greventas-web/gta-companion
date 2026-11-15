import Image from "next/image";

import { SourceList } from "@/components/SourceLink";
import { IMAGE_CREDIT } from "@/lib/site";
import PageContainer from "../shared/PageContainer";
import PageHero from "../shared/PageHero";

import { timeline } from "../../src/data/timeline/timeline";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <PageContainer>
        <PageHero
          badge="Unofficial fan timeline"
          title="Every Official Reveal"
          description="Follow official Grand Theft Auto VI announcements from the first trailer through The Festival on November 21. Last updated November 14, 2026."
        />

        <section className="relative mt-20 ml-4 border-l border-pink-500/20">
          {timeline.map((event) => (
            <div
              key={`${event.date}-${event.title}`}
              className="relative mb-12 pl-12"
            >
              <div className="absolute -left-[10px] top-4 h-5 w-5 rounded-full border-4 border-[#040404] bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,.55)]" />

              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101014] to-[#09090B] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-[0_25px_70px_rgba(236,72,153,.18)]">
                <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                  {event.date}
                </div>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white">
                  {event.title}
                </h2>

                {event.image ? (
                  <figure className="mt-6 max-w-4xl">
                    <Image
                      src={event.image.src}
                      alt={event.image.alt}
                      width={event.image.width}
                      height={event.image.height}
                      className="h-auto w-full rounded-2xl"
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                    <figcaption className="mt-2 text-xs leading-5 text-zinc-500">
                      {IMAGE_CREDIT}
                    </figcaption>
                  </figure>
                ) : null}

                <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-400">
                  {event.description}
                </p>
                <SourceList
                  className="mt-5"
                  sources={[
                    { label: event.sourceLabel, href: event.sourceHref },
                    ...(event.moreSources ?? []),
                  ]}
                />
              </div>
            </div>
          ))}
        </section>
      </PageContainer>
    </main>
  );
}