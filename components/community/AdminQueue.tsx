"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ProName } from "@/components/pro/ProBadge";
import type { AdminPost } from "@/lib/community/types";
import { fieldClass, formatWhen, primaryButtonClass, quietButtonClass, typePillClass } from "./ui";

type Action = "approve" | "reject" | "delete";

export default function AdminQueue() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [configured, setConfigured] = useState(true);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [busyId, setBusyId] = useState("");

  async function loadQueue() {
    const response = await fetch("/api/community/admin/posts", { cache: "no-store" });
    if (!response.ok) {
      setAuthed(false);
      return;
    }
    const body = (await response.json()) as { posts?: AdminPost[] };
    setPosts(body.posts ?? []);
  }

  useEffect(() => {
    let cancel = false;
    fetch("/api/map/admin/session", { cache: "no-store" })
      .then(async (response) => {
        if (cancel) return;
        if (response.status === 503) {
          setConfigured(false);
          setReady(true);
          return;
        }
        const signedIn = response.ok;
        setAuthed(signedIn);
        setReady(true);
        if (!signedIn) return;
        const queue = await fetch("/api/community/admin/posts", { cache: "no-store" });
        if (!queue.ok || cancel) return;
        const body = (await queue.json()) as { posts?: AdminPost[] };
        setPosts(body.posts ?? []);
      })
      .catch(() => {
        if (!cancel) setReady(true);
      });
    return () => {
      cancel = true;
    };
  }, []);

  async function signIn(event: FormEvent) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/map/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret }),
    });
    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error || "Could not sign in.");
      return;
    }
    setSecret("");
    setAuthed(true);
    await loadQueue();
  }

  async function review(id: string, action: Action) {
    if (action === "delete" && !window.confirm("Delete this post and its image?")) return;
    setBusyId(id);
    setError("");
    const response = await fetch("/api/community/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    setBusyId("");
    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error || "Could not update that post.");
      return;
    }
    await loadQueue();
  }

  async function signOut() {
    await fetch("/api/map/admin/session", { method: "DELETE" });
    setAuthed(false);
    setPosts([]);
  }

  if (!ready) return <p className="text-sm text-zinc-400">Loading moderation…</p>;

  if (!configured) {
    return (
      <p className="max-w-xl text-sm leading-6 text-zinc-300">
        Set the MAP_ADMIN_SECRET environment variable, then reload this page.
      </p>
    );
  }

  if (!authed) {
    return (
      <form onSubmit={signIn} className="max-w-md space-y-3">
        <label className="block text-sm text-zinc-300">
          Moderator secret
          <input
            type="password"
            value={secret}
            onChange={(event) => setSecret(event.target.value)}
            autoComplete="current-password"
            className={`${fieldClass} mt-2`}
          />
        </label>
        <p className="text-xs leading-5 text-zinc-500">Uses the same moderator sign-in as the map queue.</p>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        <button type="submit" className={primaryButtonClass}>
          Open queue
        </button>
      </form>
    );
  }

  const pending = posts.filter((post) => post.status === "pending");
  const reported = posts.filter((post) => post.status === "approved" && post.reports.length > 0);
  const reviewed = posts.filter(
    (post) => post.status !== "pending" && !(post.status === "approved" && post.reports.length > 0)
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-400">
          {pending.length} waiting. Pending posts and images stay hidden until you approve them.
        </p>
        <button type="button" onClick={signOut} className="min-h-11 text-sm font-semibold text-violet-200 underline">
          Sign out
        </button>
      </div>
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      <QueueSection title="Pending" empty="Nothing waiting. New posts show up here before anyone else can see them." posts={pending} busyId={busyId} onReview={review} />
      <QueueSection title="Reported" empty="No reports on live posts." posts={reported} busyId={busyId} onReview={review} />
      <QueueSection title="Reviewed" empty="No reviewed posts yet." posts={reviewed} busyId={busyId} onReview={review} />
    </div>
  );
}

function QueueSection({
  title,
  empty,
  posts,
  busyId,
  onReview,
}: {
  title: string;
  empty: string;
  posts: AdminPost[];
  busyId: string;
  onReview: (id: string, action: Action) => void;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">
        {title}
        <span className="ml-2 text-sm font-medium text-zinc-500">{posts.length}</span>
      </h2>
      {posts.length === 0 ? (
        <p className="rounded-3xl border border-dashed border-white/15 px-4 py-8 text-sm text-zinc-400">{empty}</p>
      ) : null}
      {posts.map((post) => (
        <ReviewCard key={post.id} post={post} busy={busyId === post.id} onReview={onReview} />
      ))}
    </section>
  );
}

function ReviewCard({
  post,
  busy,
  onReview,
}: {
  post: AdminPost;
  busy: boolean;
  onReview: (id: string, action: Action) => void;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article className="rounded-[28px] border border-white/10 bg-[#120c18] p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${typePillClass(post.type)}`}>
          {post.typeLabel}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">{post.status}</span>
        <time dateTime={post.createdAt} className="text-xs text-zinc-500">
          {formatWhen(post.createdAt)}
        </time>
      </div>
      <h3 className="mt-3 text-lg font-bold [overflow-wrap:anywhere]">{post.title}</h3>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-zinc-300 [overflow-wrap:anywhere]">{post.body}</p>
      {post.imageUrl && !imageFailed ? (
        <figure className="mt-3">
          {/* The admin cookie has to reach this route, so the optimizer must not fetch it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="max-h-80 w-full rounded-2xl border border-white/10 bg-black object-contain"
            onError={() => setImageFailed(true)}
          />
        </figure>
      ) : null}
      {post.credit ? <p className="mt-2 text-sm text-zinc-300">{post.credit}</p> : null}
      <div className="mt-3">
        <ProName name={post.authorName} pro={post.pro} className="text-sm font-semibold" />
      </div>
      {post.reports.length > 0 ? (
        <ul className="mt-3 space-y-1 rounded-2xl border border-rose-400/20 bg-rose-500/5 p-3 text-sm text-rose-100">
          {post.reports.map((report) => (
            <li key={report.id}>
              {report.reason}
              <span className="ml-2 text-xs text-rose-200/70">{formatWhen(report.createdAt)}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.status !== "approved" ? (
          <button type="button" disabled={busy} onClick={() => onReview(post.id, "approve")} className={primaryButtonClass}>
            Approve
          </button>
        ) : null}
        {post.status !== "rejected" ? (
          <button type="button" disabled={busy} onClick={() => onReview(post.id, "reject")} className={quietButtonClass}>
            Reject
          </button>
        ) : null}
        <button
          type="button"
          disabled={busy}
          onClick={() => onReview(post.id, "delete")}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-rose-400/30 px-4 py-2 text-sm font-semibold text-rose-200 disabled:opacity-50"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
