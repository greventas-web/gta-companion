"use client";

import { useState, type FormEvent } from "react";
import { Flag } from "lucide-react";
import { ProName } from "@/components/pro/ProBadge";
import type { PublicPost } from "@/lib/community/types";
import { fieldClass, formatWhen, quietButtonClass, typePillClass } from "./ui";

const REPORT_REASONS = [
  "Spoiler past Chapter 3",
  "Piracy, cheats, or leaks",
  "Spam",
  "Screenshot is not theirs",
  "Disrespectful",
] as const;

type Props = {
  post: PublicPost;
  onReported: (message: string) => void;
};

export default function PostCard({ post, onReported }: Props) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  async function submitReport(event: FormEvent) {
    event.preventDefault();
    if (!reason) {
      setError("Choose a reason.");
      return;
    }
    setBusy(true);
    setError("");
    const text = note.trim() ? `${reason}: ${note.trim()}` : reason;
    const response = await fetch(`/api/community/posts/${post.id}/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason: text }),
    });
    setBusy(false);
    const body = (await response.json().catch(() => null)) as { error?: string } | null;
    if (!response.ok) {
      setError(body?.error || "Could not send that report.");
      return;
    }
    setOpen(false);
    setReason("");
    setNote("");
    onReported("Report sent. A moderator will review it.");
  }

  return (
    <article className="rounded-[28px] border border-white/10 bg-[#120c18]/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${typePillClass(post.type)}`}>
          {post.typeLabel}
        </span>
        <time dateTime={post.createdAt} className="text-xs text-zinc-500">
          {formatWhen(post.createdAt)}
        </time>
      </div>
      <h2 className="mt-3 text-xl font-bold tracking-tight text-white [overflow-wrap:anywhere] sm:text-2xl">
        {post.title}
      </h2>
      <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-zinc-300 [overflow-wrap:anywhere] sm:text-[15px]">
        {post.body}
      </p>
      {post.imageUrl && !imageFailed ? (
        <figure className="mt-4">
          {/* User images stay on this route so a rejected upload is not cached by the image optimizer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="max-h-[28rem] w-full rounded-2xl border border-white/10 bg-black object-contain"
            onError={() => setImageFailed(true)}
          />
          {post.credit ? (
            <figcaption className="mt-2 text-sm text-zinc-300">{post.credit}</figcaption>
          ) : null}
        </figure>
      ) : post.credit ? (
        <p className="mt-4 text-sm text-zinc-300">{post.credit}</p>
      ) : null}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <ProName name={post.authorName} pro={post.pro} className="text-sm font-semibold text-white" />
        <button
          type="button"
          onClick={() => {
            setOpen((value) => !value);
            setError("");
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-zinc-300 transition hover:text-white"
          aria-expanded={open}
        >
          <Flag size={15} aria-hidden />
          Report
        </button>
      </div>
      {open ? (
        <form onSubmit={submitReport} className="mt-3 space-y-3 rounded-2xl border border-white/10 bg-black/30 p-3">
          <label className="block text-sm text-zinc-300">
            Why are you reporting this?
            <select
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              className={`${fieldClass} mt-2`}
            >
              <option value="">Choose a reason</option>
              {REPORT_REASONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm text-zinc-300">
            Details, if you want
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              maxLength={200}
              rows={3}
              className={`${fieldClass} mt-2`}
            />
          </label>
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <button type="submit" disabled={busy} className={quietButtonClass}>
            {busy ? "Sending…" : "Send report"}
          </button>
        </form>
      ) : null}
    </article>
  );
}
