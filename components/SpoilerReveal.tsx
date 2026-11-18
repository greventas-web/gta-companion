"use client";

import { useId, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  summary?: string;
  showLabel?: string;
  hideLabel?: string;
};

export default function SpoilerReveal({
  children,
  summary = "Hidden so it doesn't spoil the job. Tap to show.",
  showLabel = "Show official description",
  hideLabel = "Hide official description",
}: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="rounded-[32px] border border-violet-400/30 bg-[#120818] p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-300">
        Spoiler
      </p>
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">{summary}</p>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((value) => !value)}
        className="mt-5 inline-flex rounded-full border border-violet-300/40 bg-violet-500/20 px-5 py-2.5 text-sm font-semibold text-violet-50 transition hover:bg-violet-500/30"
      >
        {open ? hideLabel : showLabel}
      </button>
      {open ? (
        <div id={panelId} className="mt-6 max-w-3xl text-lg leading-8 text-white">
          {children}
        </div>
      ) : null}
    </section>
  );
}
