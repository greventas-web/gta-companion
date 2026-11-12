import type { Metadata } from "next";
import Link from "next/link";

import LaunchHubCountdown from "@/components/launch/LaunchHubCountdown";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";
import { SITE, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  gta6Launch,
  launchSources,
  type LaunchStatus,
} from "@/src/data/launch/gta6-launch";

const base = pageMetadata(gta6Launch.title, gta6Launch.description);

export const metadata: Metadata = {
  ...base,
  keywords: [...gta6Launch.keywords],
  alternates: {
    canonical: gta6Launch.path,
  },
  openGraph: {
    ...base.openGraph,
    url: gta6Launch.path,
  },
};

const statusClass: Record<LaunchStatus, string> = {
  confirmed: "border-pink-400/40 bg-pink-400/10 text-pink-200",
  live: "border-violet-400/40 bg-violet-400/10 text-violet-100",
  pending: "border-teal-400/40 bg-teal-400/10 text-teal-200",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: gta6Launch.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Gta6LaunchPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black px-6 py-8 shadow-[0_40px_120px_rgba(0,0,0,.45)] sm:px-10 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,.12),transparent_42%),radial-gradient(circle_at_top_right,rgba(236,72,153,.14),transparent_46%)]" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-pink-300">
              {SITE.slogan}
            </p>
            <p className="text-sm text-zinc-500">
              Last updated {gta6Launch.lastUpdated}
            </p>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.03em] text-white lg:text-6xl">
            {gta6Launch.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            {gta6Launch.lede}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
            {UNOFFICIAL_DISCLAIMER} Edition contents stay on the{" "}
            <Link href="/launch" className="text-pink-300 hover:text-pink-200">
              Editions
            </Link>{" "}
            page.
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {gta6Launch.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4"
              >
                <dt className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-xl font-black text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 text-xs font-black uppercase tracking-[0.28em] text-pink-300">
            Live countdown
          </h2>
          <div className="mt-4">
            <LaunchHubCountdown
              local={gta6Launch.clocks.ps5}
              cloud={gta6Launch.clocks.xboxCloud}
            />
          </div>
        </div>
      </header>

      <section className="mt-10" aria-labelledby="unlock-times">
        <h2 id="unlock-times" className="text-3xl font-black tracking-[-0.03em]">
          Unlock times
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {gta6Launch.unlocks.map((item) => (
            <article
              key={item.id}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-pink-300">
                  {item.platform}
                </p>
                <Status tone={item.status} label={item.statusLabel} />
              </div>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.03em]">
                {item.headline}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">{item.body}</p>
              <Sources ids={item.sourceIds} />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2" aria-labelledby="preload">
        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="preload" className="text-3xl font-black tracking-[-0.03em]">
              {gta6Launch.preload.title}
            </h2>
            <Status
              tone={gta6Launch.preload.status}
              label={gta6Launch.preload.statusLabel}
            />
          </div>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            {gta6Launch.preload.body}
          </p>
          <ul className="mt-6 space-y-3">
            {gta6Launch.preload.windows.map((window) => (
              <li
                key={window.platform}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-sm font-bold text-white">{window.platform}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{window.when}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            {gta6Launch.preload.note}
          </p>
          <Sources ids={gta6Launch.preload.sourceIds} />
        </article>

        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
          <h2 className="text-3xl font-black tracking-[-0.03em]">
            {gta6Launch.storage.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            {gta6Launch.storage.body}
          </p>
          <div className="mt-6 space-y-4">
            {gta6Launch.storage.tips.map((tip) => (
              <div key={tip.title}>
                <h3 className="text-lg font-black text-white">{tip.title}</h3>
                <p className="mt-2 text-base leading-7 text-zinc-400">{tip.body}</p>
              </div>
            ))}
          </div>
          <Sources ids={gta6Launch.storage.sourceIds} />
        </article>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-2">
        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
          <h2 className="text-3xl font-black tracking-[-0.03em]">
            {gta6Launch.boxed.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            {gta6Launch.boxed.body}
          </p>
          <Sources ids={gta6Launch.boxed.sourceIds} />
        </article>
        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
          <h2 className="text-3xl font-black tracking-[-0.03em]">
            {gta6Launch.cloud.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            {gta6Launch.cloud.body}
          </p>
          <Sources ids={gta6Launch.cloud.sourceIds} />
        </article>
      </section>

      <section className="mt-10" aria-labelledby="launch-faq">
        <h2 id="launch-faq" className="text-3xl font-black tracking-[-0.03em]">
          FAQ
        </h2>
        <div className="mt-6 space-y-4">
          {gta6Launch.faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8"
            >
              <h3 className="text-xl font-black tracking-[-0.02em] text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-400">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="mt-10 text-sm leading-7 text-zinc-500">
        Last updated {gta6Launch.lastUpdated}. {UNOFFICIAL_DISCLAIMER}
      </p>
    </PageShell>
  );
}

function Status({ tone, label }: { tone: LaunchStatus; label: string }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] ${statusClass[tone]}`}
    >
      {label}
    </span>
  );
}

function Sources({ ids }: { ids: readonly string[] }) {
  const sources = launchSources(ids);

  return (
    <p className="mt-5 text-sm leading-6 text-zinc-500">
      Source
      {sources.length > 1 ? "s" : ""}:{" "}
      {sources.map((source, index) => (
        <span key={source.id}>
          {index > 0 ? ", " : ""}
          <a
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-200"
          >
            {source.label}
          </a>
        </span>
      ))}
    </p>
  );
}
