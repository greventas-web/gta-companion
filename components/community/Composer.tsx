"use client";

import type { User } from "firebase/auth";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  CATEGORIES,
  CREDIT_COPY,
  IMAGE_ACCEPT,
  IMAGE_LIMIT_LABEL,
  LIMITS,
  type CommunityCategory,
} from "@/lib/community/shared";

type Props = {
  user: User | null;
  authLoading: boolean;
  storageReady: boolean;
  onPosted: () => void;
};

async function authHeader(user: User): Promise<Record<string, string>> {
  return { Authorization: `Bearer ${await user.getIdToken()}` };
}

export default function Composer({ user, authLoading, storageReady, onPosted }: Props) {
  const router = useRouter();
  const [category, setCategory] = useState<CommunityCategory>("tip");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [credit, setCredit] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [fileKey, setFileKey] = useState(0);

  const screenshot = category === "screenshot";
  const placeholder =
    category === "feedback"
      ? "What should we change on the site?"
      : screenshot
        ? "Where is this, and what are we looking at?"
        : "What should other players know?";

  function choose(next: CommunityCategory) {
    setCategory(next);
    setError("");
    if (next !== "screenshot") {
      setFile(null);
      setCredit(false);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    if (!user) {
      router.push("/login?next=/community");
      return;
    }
    if (!storageReady) {
      setError("Posting is offline right now.");
      return;
    }
    if (title.trim().length < LIMITS.titleMin) {
      setError(`Give the post a title (${LIMITS.titleMin}–${LIMITS.titleMax} characters).`);
      return;
    }
    if (body.trim().length < LIMITS.bodyMin) {
      setError(`Write a little more (${LIMITS.bodyMin}–${LIMITS.bodyMax} characters).`);
      return;
    }
    if (screenshot && !file) {
      setError("Add a screenshot to this post.");
      return;
    }
    if (file && file.size > LIMITS.imageBytes) {
      setError(IMAGE_LIMIT_LABEL);
      return;
    }
    if (screenshot && !credit) {
      setError("Confirm that GTA Companion may use this screenshot, with credit to you.");
      return;
    }

    const form = new FormData();
    form.set("category", category);
    form.set("title", title);
    form.set("body", body);
    if (screenshot && file) {
      form.set("credit", "yes");
      form.set("image", file);
    }

    setBusy(true);
    try {
      const response = await fetch("/api/community/posts", {
        method: "POST",
        headers: await authHeader(user),
        body: form,
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(payload?.error || "Could not save that post.");
        return;
      }
      setTitle("");
      setBody("");
      setFile(null);
      setCredit(false);
      setFileKey((current) => current + 1);
      setNotice("Sent for review. It stays hidden until a moderator approves it.");
      onPosted();
    } catch {
      setError("Could not save that post.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-[28px] border border-pink-500/20 bg-gradient-to-b from-pink-500/10 to-[#0c0c10] p-5">
      <h2 className="text-lg font-black tracking-tight text-white">Share something</h2>
      <p className="mt-1 text-sm leading-6 text-zinc-400">
        Updates, tips, screenshots, and site ideas. A moderator reads each one first.
      </p>
      <form onSubmit={onSubmit} className="mt-4 space-y-4">
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Category">
          {CATEGORIES.map((item) => {
            const selected = item.id === category;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => choose(item.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  selected
                    ? "border-pink-400/60 bg-pink-500 text-white"
                    : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-pink-400/40"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-zinc-500">{CATEGORIES.find((item) => item.id === category)?.blurb}</p>
        <label className="block text-sm text-zinc-300">
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={LIMITS.titleMax}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white outline-none ring-pink-400/40 focus:ring-2"
          />
        </label>
        <label className="block text-sm text-zinc-300">
          {screenshot ? "Caption" : "Post"}
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            maxLength={LIMITS.bodyMax}
            required
            rows={5}
            placeholder={placeholder}
            className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white outline-none ring-pink-400/40 placeholder:text-zinc-600 focus:ring-2"
          />
        </label>
        {screenshot ? (
          <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-3">
            <label className="block text-sm text-zinc-300">
              Screenshot
              <input
                key={fileKey}
                type="file"
                accept={IMAGE_ACCEPT}
                onChange={(event) => {
                  const next = event.target.files?.[0] ?? null;
                  setFile(next);
                  setError("");
                }}
                className="mt-2 block w-full text-sm text-zinc-400 file:mr-3 file:rounded-full file:border-0 file:bg-pink-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
              />
            </label>
            <p className="text-xs text-zinc-500">{IMAGE_LIMIT_LABEL}</p>
            {file ? <p className="truncate text-xs text-zinc-400">{file.name}</p> : null}
            <label className="flex items-start gap-3 text-sm leading-6 text-zinc-200">
              <input
                type="checkbox"
                checked={credit}
                onChange={(event) => setCredit(event.target.checked)}
                className="mt-1 h-4 w-4 accent-pink-500"
              />
              <span>{CREDIT_COPY}</span>
            </label>
          </div>
        ) : null}
        {error ? (
          <p role="alert" className="text-sm text-rose-300">
            {error}
          </p>
        ) : null}
        {notice ? (
          <p role="status" className="text-sm text-emerald-300">
            {notice}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={busy || authLoading || (Boolean(user) && !storageReady)}
          className="w-full rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-50"
        >
          {busy ? "Sending…" : user ? "Submit for review" : "Sign in to post"}
        </button>
        {user ? null : (
          <p className="text-center text-xs leading-5 text-zinc-500">
            Visitors can read. Posting is for signed-in players.
          </p>
        )}
      </form>
    </section>
  );
}
