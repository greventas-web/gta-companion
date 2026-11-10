import Link from "next/link";
import type { ReactNode } from "react";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SITE } from "@/src/data/config";
import type { LaunchStatus, LaunchTopic } from "@/src/data/launch/types";

const statusLabel: Record<LaunchStatus, string> = {
  "coming-at-launch": "Coming at launch",
  "to-be-confirmed": "To be confirmed",
  confirmed: "Confirmed",
};

export function LaunchTopics({ topics }: { topics: LaunchTopic[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {topics.map((topic) => (
        <article
          key={topic.id}
          className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-400">
            {statusLabel[topic.status]}
          </p>
          <h2 className="mt-4 text-2xl font-black text-white">{topic.title}</h2>
          <p className="mt-4 leading-8 text-zinc-400">{topic.summary}</p>
        </article>
      ))}
    </div>
  );
}

export function LaunchPage({
  badge = "Unofficial fan site",
  title,
  description,
  topics,
  children,
}: {
  badge?: string;
  title: string;
  description: string;
  topics: LaunchTopic[];
  children?: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero badge={badge} title={title} description={description} />
      <p className="max-w-3xl text-sm leading-7 text-zinc-500">
        {SITE.slogan}. {SITE.disclaimer}
      </p>
      <LaunchTopics topics={topics} />
      {children}
    </PageShell>
  );
}

type ListedEntry = {
  id: string;
  title: string;
  detail: string;
  status: LaunchStatus;
  href?: string;
};

export function ConfirmedEntries({
  entries,
  empty,
}: {
  entries: ListedEntry[];
  empty: string;
}) {
  if (entries.length === 0) {
    return (
      <p className="mt-10 rounded-[28px] border border-dashed border-white/15 px-6 py-8 leading-8 text-zinc-400">
        {empty}
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-4">
      {entries.map((entry) => {
        const body = (
          <>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-400">
              {statusLabel[entry.status]}
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">{entry.title}</h2>
            <p className="mt-3 leading-8 text-zinc-400">{entry.detail}</p>
          </>
        );
        const className =
          "rounded-[28px] border border-white/10 bg-[#0B0B0D] p-8";

        if (entry.href) {
          return (
            <Link
              key={entry.id}
              href={entry.href}
              className={`${className} block transition hover:border-pink-500/40`}
            >
              {body}
            </Link>
          );
        }

        return (
          <article key={entry.id} className={className}>
            {body}
          </article>
        );
      })}
    </div>
  );
}
