"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  score: number;
  vote: -1 | 0 | 1;
  disabled?: boolean;
  onVote: (value: -1 | 0 | 1) => void;
};

export default function VoteControl({ score, vote, disabled, onVote }: Props) {
  function choose(next: 1 | -1) {
    onVote(vote === next ? 0 : next);
  }

  const up = vote === 1 ? "text-pink-300" : "text-zinc-400 hover:text-pink-200";
  const down = vote === -1 ? "text-violet-300" : "text-zinc-400 hover:text-violet-200";

  return (
    <div className="flex items-center gap-0.5 sm:flex-col">
      <button
        type="button"
        aria-label="Upvote"
        aria-pressed={vote === 1}
        disabled={disabled}
        onClick={() => choose(1)}
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full disabled:opacity-40 ${up}`}
      >
        <ChevronUp size={18} aria-hidden />
      </button>
      <span className="min-w-6 text-center text-sm font-bold tabular-nums text-white">{score}</span>
      <button
        type="button"
        aria-label="Downvote"
        aria-pressed={vote === -1}
        disabled={disabled}
        onClick={() => choose(-1)}
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full disabled:opacity-40 ${down}`}
      >
        <ChevronDown size={18} aria-hidden />
      </button>
    </div>
  );
}
