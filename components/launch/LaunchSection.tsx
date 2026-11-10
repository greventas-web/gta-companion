import Link from "next/link";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import type { LaunchEntry } from "@/src/data/launch/types";

type IndexProps = {
  badge: string;
  title: string;
  description: string;
  basePath: string;
  entries: LaunchEntry[];
  emptyBody: string;
};

export function LaunchIndex({
  badge,
  title,
  description,
  basePath,
  entries,
  emptyBody,
}: IndexProps) {
  return (
    <PageShell>
      <PageHero badge={badge} title={title} description={description} />

      <p className="text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      {entries.length === 0 ? (
        <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8 sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-400">
            {SITE.launchLabel}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em]">
            Coming at launch
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
            {emptyBody}
          </p>
        </section>
      ) : (
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`${basePath}/${entry.slug}`}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8 transition hover:border-pink-500/40"
            >
              <h2 className="text-2xl font-black tracking-[-0.03em] text-white">
                {entry.title}
              </h2>
              <p className="mt-4 leading-8 text-zinc-400">{entry.summary}</p>
              {entry.details && entry.details.length > 0 && (
                <dl className="mt-6 space-y-2 text-sm text-zinc-300">
                  {entry.details.map((detail) => (
                    <div key={detail.label} className="flex gap-3">
                      <dt className="text-zinc-500">{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </Link>
          ))}
        </section>
      )}
    </PageShell>
  );
}

type DetailProps = {
  sectionLabel: string;
  sectionHref: string;
  entry: LaunchEntry;
};

export function LaunchDetail({
  sectionLabel,
  sectionHref,
  entry,
}: DetailProps) {
  return (
    <PageShell>
      <p className="text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-pink-400">
          Home
        </Link>
        <span className="px-2">/</span>
        <Link href={sectionHref} className="transition hover:text-pink-400">
          {sectionLabel}
        </Link>
      </p>

      <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
        {entry.title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        {entry.summary}
      </p>

      {entry.details && entry.details.length > 0 && (
        <dl className="mt-10 max-w-2xl space-y-4 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
          {entry.details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-xs font-black uppercase tracking-[0.22em] text-pink-400">
                {detail.label}
              </dt>
              <dd className="mt-2 text-lg text-white">{detail.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <p className="mt-10 text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} {SITE.slogan}.
      </p>
    </PageShell>
  );
}
