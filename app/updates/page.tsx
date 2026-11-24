import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import PageShell from "@/components/PageShell";
import ProBadge from "@/components/pro/ProBadge";
import { pageMetadata } from "@/lib/launch";
import { IMAGE_CREDIT, SOCIAL_PROFILES, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  comingSoon,
  formatUpdateDate,
  updateDays,
  whatsNext,
  type UpdateLink,
} from "@/lib/updates";

const description =
  "GTA Companion is updated daily with new guides, map pins, real in-game stills, and fixes. Unofficial fan site for Grand Theft Auto VI. Not affiliated with Rockstar Games or Take-Two.";

const base = pageMetadata("Updates", description);

export const metadata: Metadata = {
  ...base,
  alternates: { canonical: "/updates" },
  openGraph: {
    ...base.openGraph,
    url: "/updates",
  },
};

const discord = SOCIAL_PROFILES.find((profile) => profile.id === "discord");

const linkClass =
  "font-semibold text-pink-300 underline decoration-pink-400/40 underline-offset-4 transition hover:text-pink-200";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function LinkedText({
  text,
  links,
}: {
  text: string;
  links?: readonly UpdateLink[];
}) {
  if (!links?.length) return text;

  const sorted = [...links].sort((a, b) => b.label.length - a.label.length);
  const pattern = new RegExp(sorted.map((link) => escapeRegExp(link.label)).join("|"), "g");
  const hrefFor = new Map(links.map((link) => [link.label, link.href]));
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let index = 0;

  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    const label = match[0];
    const href = hrefFor.get(label) ?? "/updates";
    const external = href.startsWith("http");
    nodes.push(
      external ? (
        <a key={`${href}-${index}`} href={href} className={linkClass} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      ) : (
        <Link key={`${href}-${index}`} href={href} className={linkClass}>
          {label}
        </Link>
      ),
    );
    index += 1;
    cursor = start + label.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export default function UpdatesPage() {
  return (
    <PageShell>
      <header className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black sm:rounded-[36px]">
        <div className="relative min-h-[440px] sm:min-h-[520px]">
          <Image
            src="/images/official/locations/vice-city.webp"
            alt="Vice City, official Rockstar still"
            fill
            priority
            sizes="(min-width: 1280px) 1400px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/80 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 flex min-h-[440px] flex-col justify-end p-6 sm:min-h-[520px] sm:p-10 lg:p-14">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-pink-300">Daily updates</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Updates
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-zinc-100 sm:text-xl sm:leading-9">
              GTA Companion is updated daily with new guides, map pins, real in-game stills, and fixes.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300">
              {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI is by Rockstar Games. {IMAGE_CREDIT}.
            </p>
          </div>
        </div>
      </header>

      <section id="changelog" className="mt-14 scroll-mt-36 sm:mt-16">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-pink-400">Changelog</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">What shipped</h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Newest first, grouped by day. Each note is a change that shipped, with a link to the page it touched.
        </p>

        <ol className="mt-8 space-y-5">
          {updateDays.map((day) => (
            <li
              key={day.date}
              className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#141418] via-[#0c0c10] to-black p-5 sm:p-8"
            >
              <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <div>
                  <time dateTime={day.date} className="block text-lg font-black text-white sm:text-xl">
                    {formatUpdateDate(day.date)}
                  </time>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-pink-300">
                    {day.entries.length} {day.entries.length === 1 ? "note" : "notes"}
                  </p>
                </div>
                <ul className="space-y-4">
                  {day.entries.map((entry) => (
                    <li key={entry.text} className="border-l-2 border-pink-500/60 pl-4 text-[15px] leading-7 text-zinc-200">
                      <LinkedText text={entry.text} links={entry.links} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="coming-soon" className="mt-20 scroll-mt-36">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-pink-400">Coming soon</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">The platform</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
          Planned for a later release. These are not available yet.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {comingSoon.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-[28px] border border-pink-500/20 bg-gradient-to-br from-[#1a1020] via-[#100c14] to-black p-6 sm:p-8"
            >
              <span className="w-fit rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-pink-200">
                {item.status}
              </span>
              {item.id === "badge" ? (
                <div className="mt-6">
                  <ProBadge />
                </div>
              ) : null}
              <h3 className="mt-5 text-2xl font-black tracking-[-0.03em]">{item.title}</h3>
              {item.price ? <p className="mt-3 text-lg font-bold text-pink-200">{item.price}</p> : null}
              <p className="mt-4 leading-7 text-zinc-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="whats-next" className="mt-20">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-pink-400">What&apos;s coming</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] sm:text-4xl">More of the guide</h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          The same daily work, with no date attached and no story details.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whatsNext.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="report" className="mt-20">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-pink-400">Site info</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">
          Report a missing location or a bug
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Send the place name or what went wrong. The contact page and Discord both reach the people who update the site.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/contact"
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#141418] to-black p-6 transition hover:border-pink-400/40 sm:p-8"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">Contact</p>
            <p className="mt-3 text-2xl font-black">contact@gta-companion.com</p>
            <p className="mt-3 leading-7 text-zinc-400">Missing pin, wrong detail, or a broken page.</p>
          </Link>
          {discord ? (
            <a
              href={discord.href}
              className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#141418] to-black p-6 transition hover:border-pink-400/40 sm:p-8"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">Discord</p>
              <p className="mt-3 text-2xl font-black">Join the Discord</p>
              <p className="mt-3 leading-7 text-zinc-400">Post the location or the bug in the community.</p>
            </a>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}
