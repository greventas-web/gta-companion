"use client";

import type { User } from "firebase/auth";
import { Flag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { ProBadge } from "@/components/community/ProBadge";
import { categoryLabel, formatPostDate, type OwnPost, type PublicPost } from "@/lib/community/shared";

const TONE: Record<PublicPost["category"], string> = {
  update: "border-pink-400/40 bg-pink-500/15 text-pink-100",
  tip: "border-fuchsia-400/40 bg-fuchsia-500/15 text-fuchsia-100",
  screenshot: "border-violet-400/40 bg-violet-500/15 text-violet-100",
  feedback: "border-white/15 bg-white/10 text-zinc-100",
};

type CardPost = PublicPost & { status?: OwnPost["status"] };

export default function PostCard({
  post,
  user,
  reported,
  onReported,
}: {
  post: CardPost;
  user: User | null;
  reported: boolean;
  onReported: (id: string) => void;
}) {
  const held = post.status === "pending" || post.status === "rejected";
  return (
    <article className="min-w-0 rounded-[28px] border border-white/10 bg-[#0c0c10] p-5 shadow-[0_20px_60px_rgba(0,0,0,.25)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${TONE[post.category]}`}>
          {categoryLabel(post.category)}
        </span>
        {post.status === "pending" ? (
          <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
            Waiting for review
          </span>
        ) : null}
        {post.status === "rejected" ? (
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-semibold text-zinc-400">
            Not published
          </span>
        ) : null}
        <time dateTime={post.createdAt} className="text-xs text-zinc-500">
          {formatPostDate(post.createdAt)}
        </time>
      </div>
      <h3 className="mt-3 break-words text-xl font-black tracking-tight text-white">{post.title}</h3>
      <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-7 text-zinc-300">{post.body}</p>
      {post.imageUrl ? <PostImage post={post} tokenNeeded={held} user={user} /> : null}
      <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
        <p className="flex items-center gap-2 text-sm text-zinc-200">
          <span className="max-w-[14rem] truncate font-semibold">{post.authorName}</span>
          {post.pro ? <ProBadge /> : null}
        </p>
        {held ? (
          <p className="text-xs text-zinc-500">
            {post.status === "pending" ? "Only you can see this until it is approved." : "A moderator held this post back."}
          </p>
        ) : (
          <ReportControl postId={post.id} user={user} reported={reported} onReported={onReported} />
        )}
      </footer>
    </article>
  );
}

function PostImage({
  post,
  tokenNeeded,
  user,
}: {
  post: CardPost;
  tokenNeeded: boolean;
  user: User | null;
}) {
  const [src, setSrc] = useState(tokenNeeded ? "" : post.imageUrl);
  useEffect(() => {
    if (!tokenNeeded || !post.imageUrl || !user) return;
    let cancelled = false;
    let objectUrl = "";
    user
      .getIdToken()
      .then((token) => fetch(post.imageUrl as string, { headers: { Authorization: `Bearer ${token}` } }))
      .then(async (response) => (response.ok ? response.blob() : null))
      .then((blob) => {
        if (!blob || cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setSrc(objectUrl);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [post.imageUrl, tokenNeeded, user]);

  if (!src) return null;
  return (
    <figure className="mt-4">
      {/* User uploads are served by our API and must not go through image optimization. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={post.title} className="max-h-[28rem] w-full rounded-2xl object-cover" />
      <figcaption className="mt-2 text-xs text-zinc-500">Screenshot by {post.authorName}</figcaption>
    </figure>
  );
}

function ReportControl({
  postId,
  user,
  reported,
  onReported,
}: {
  postId: string;
  user: User | null;
  reported: boolean;
  onReported: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (reported) return <p className="text-xs text-zinc-500">Reported. A moderator will see it.</p>;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-pink-400/40 hover:text-white"
      >
        <Flag size={13} aria-hidden />
        Report
      </button>
    );
  }

  if (!user) {
    return (
      <p className="text-xs text-zinc-400">
        Sign in to report this post.{" "}
        <Link href="/login?next=/community" className="font-semibold text-pink-300 underline">
          Sign in
        </Link>
      </p>
    );
  }

  const player = user;

  async function send(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/api/community/posts/${postId}/report`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await player.getIdToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reason }),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(payload?.error || "Could not send that report.");
        return;
      }
      onReported(postId);
    } catch {
      setError("Could not send that report.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={send} className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-64">
      <label className="text-xs text-zinc-400">
        What is wrong with this post?
        <input
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          maxLength={240}
          className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-pink-400/40 focus:ring-2"
        />
      </label>
      {error ? <p className="text-xs text-rose-300">{error}</p> : null}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={busy}
          className="rounded-full bg-pink-500 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
        >
          {busy ? "Sending…" : "Send report"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="text-xs text-zinc-400">
          Cancel
        </button>
      </div>
    </form>
  );
}
