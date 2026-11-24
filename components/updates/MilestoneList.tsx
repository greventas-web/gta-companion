"use client";

import { useState } from "react";
import Link from "next/link";

import { formatUpdateDate, MILESTONES_VISIBLE, type Milestone } from "@/lib/updates";

export default function MilestoneList({ milestones }: { milestones: readonly Milestone[] }) {
  const [open, setOpen] = useState(false);
  const hidden = milestones.length - MILESTONES_VISIBLE;
  const visible = open || hidden <= 0 ? milestones : milestones.slice(0, MILESTONES_VISIBLE);

  return (
    <div>
      <ol className="space-y-2">
        {visible.map((milestone) => (
          <li key={`${milestone.date}-${milestone.href}`}>
            <Link
              href={milestone.href}
              className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-pink-400/40 hover:bg-white/[0.05] sm:flex-row sm:items-baseline sm:gap-6 sm:px-5 sm:py-3.5"
            >
              <time
                dateTime={milestone.date}
                className="shrink-0 text-[11px] font-black uppercase tracking-[0.16em] text-pink-300"
              >
                {formatUpdateDate(milestone.date)}
              </time>
              <span className="text-[15px] font-bold leading-6 text-white sm:text-base">{milestone.headline}</span>
            </Link>
          </li>
        ))}
      </ol>
      {hidden > 0 ? (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mt-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-zinc-200 transition hover:border-pink-400/40 hover:text-white"
        >
          {open ? "Show less" : "Show older"}
        </button>
      ) : null}
    </div>
  );
}
