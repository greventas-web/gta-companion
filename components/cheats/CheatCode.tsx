"use client";

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, Copy } from "lucide-react";
import { useState } from "react";

const ICON = { Up: ArrowUp, Down: ArrowDown, Left: ArrowLeft, Right: ArrowRight } as const;

/** Big D-pad arrows with tap-to-copy and the "how to enter" line. */
export default function CheatCode({ code, unlock }: { code?: string[]; unlock: string }) {
  const [copied, setCopied] = useState(false);
  const text = code?.join(", ") ?? "";

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="mt-10 overflow-hidden rounded-[24px] border border-white/5 bg-[#08080A] p-5 sm:p-6">
      <h2 className="text-2xl font-black tracking-[-0.03em] text-white">How to enter</h2>
      <ol className="mt-3 grid gap-1 text-sm font-semibold text-zinc-300 sm:text-base">
        <li>
          1.{" "}
          {/^finish the story/i.test(unlock)
            ? "Finish the story."
            : `Finish the story, then ${unlock.replace(/\.$/, "").replace(/^./, (c) => c.toLowerCase())}.`}
        </li>
        <li>2. Press D-pad Up to open the phone.</li>
        <li>3. Hold L1 and press R1 (Xbox: hold LB, press RB).</li>
        <li>4. {code ? "Press the D-pad buttons below in order." : "Its button code will show here once it is out."}</li>
      </ol>
      {code ? (
        <>
          <div className="mt-5 flex flex-wrap gap-2" aria-label={text}>
            {code.map((step, index) => {
              const Icon = ICON[step as keyof typeof ICON];
              return (
                <span
                  key={`${step}-${index}`}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-400/30 bg-pink-500/10 text-pink-200 sm:h-14 sm:w-14"
                >
                  {Icon ? <Icon size={26} strokeWidth={3} aria-hidden /> : step}
                </span>
              );
            })}
          </div>
          <button
            type="button"
            onClick={copy}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-pink-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-pink-500 active:scale-95"
          >
            {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
            {copied ? "Copied" : "Tap to copy the code"}
          </button>
        </>
      ) : null}
    </section>
  );
}
