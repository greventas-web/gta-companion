import Link from "next/link";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { phoneIntro, phoneItems } from "@/data/phone";
import { pageMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { famitsuSources } from "@/src/data/gameplay/confirmed";

const title = "GTA 6 phone apps (unofficial)";
const description =
  "Phone apps Rob Nelson has described for Grand Theft Auto VI, plus on-demand podcasts and phone headphones from Rockstar's radio newswire. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata = pageMetadata(title, description);

export default function PhonePage() {
  const apps = phoneItems.filter((item) => item.group === "App");
  const listening = phoneItems.filter((item) => item.group === "Listening");

  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Phone"
        description="Confirmed phone apps from Rockstar interviews, and the podcast and headphone note from the October 8, 2026 newswire. Apps Rockstar has not named stay unnamed."
      />

      <section className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
        <h2 className="text-3xl font-black tracking-[-0.03em]">
          A phone in the world
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {phoneIntro}
        </p>
        <SourceList sources={famitsuSources} className="mt-4" />
      </section>

      <p className="mt-8 text-zinc-400">
        New to the launch-week apps?{" "}
        <Link
          href="/gta-6-apps"
          className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
        >
          Scooter Bros, BuckMe, and WAiNK explained
        </Link>
      </p>

      <CatalogGroup title="Apps" items={apps} />
      <CatalogGroup title="Podcasts and headphones" items={listening} />

      <p className="mt-12 text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI and the phone apps named
        here are from Rockstar Games.
      </p>
    </PageShell>
  );
}

function CatalogGroup({
  title,
  items,
}: {
  title: string;
  items: typeof phoneItems;
}) {
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-black tracking-[-0.03em]">{title}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.slug}
            className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
              {item.origin}
            </p>
            <h3 className="mt-3 text-2xl font-black">
              <Link href={`/phone/${item.slug}`} className="hover:text-pink-300">
                {item.name}
              </Link>
            </h3>
            <p className="mt-4 leading-8 text-zinc-400">{item.summary}</p>
            <SourceList sources={item.sources} className="mt-4" />
            <Link
              href={`/phone/${item.slug}`}
              className="mt-6 inline-flex rounded-full border border-violet-400/40 bg-violet-500/15 px-5 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
            >
              Open page
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
