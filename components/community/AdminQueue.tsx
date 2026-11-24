"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { ProBadge } from "@/components/community/ProBadge";
import { categoryLabel, formatPostDate, type AdminPost } from "@/lib/community/shared";

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
    fetch("/api/community/admin/session", { cache: "no-store" })
      .then(async (response) => {
        if (cancel) return;
        if (response.status === 503) {
          setConfigured(false);
          setReady(true);
          return;
        }
        setAuthed(response.ok);
        setReady(true);
        if (!response.ok) return;
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
    const response = await fetch("/api/community/admin/session", {
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
    if (action === "delete" && !window.confirm("Delete this post for good?")) return;
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
    await fetch("/api/community/admin/session", { method: "DELETE" });
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
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white outline-none ring-pink-400/40 focus:ring-2"
          />
        </label>
        {error ? (
          <p role="alert" className="text-sm text-rose-300">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Open queue
        </button>
      </form>
    );
  }

  const pending = posts.filter((item) => item.status === "pending");
  const reviewed = posts.filter((item) => item.status !== "pending");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-400">{pending.length} waiting for review.</p>
        <div className="flex items-center gap-4">
          <Link href="/community" className="text-sm text-pink-300 underline">
            Public board
          </Link>
          <button type="button" onClick={signOut} className="text-sm text-zinc-300 underline">
            Sign out
          </button>
        </div>
      </div>
      {error ? (
        <p role="alert" className="text-sm text-rose-300">
          {error}
        </p>
      ) : null}
      <Queue title="Pending" posts={pending} empty="Nothing is waiting." busyId={busyId} onReview={review} />
      <Queue title="Reviewed" posts={reviewed} empty="No reviewed posts yet." busyId={busyId} onReview={review} />
    </div>
  );
}

function Queue({
  title,
  posts,
  empty,
  busyId,
  onReview,
}: {
  title: string;
  posts: AdminPost[];
  empty: string;
  busyId: string;
  onReview: (id: string, action: Action) => void;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {posts.length === 0 ? <p className="text-sm text-zinc-500">{empty}</p> : null}
      {posts.map((post) => (
        <AdminCard key={post.id} post={post} busy={busyId === post.id} onReview={onReview} />
      ))}
    </section>
  );
}

function AdminCard({
  post,
  busy,
  onReview,
}: {
  post: AdminPost;
  busy: boolean;
  onReview: (id: string, action: Action) => void;
}) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-[#120c14] p-4">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-pink-200">
        <span>{categoryLabel(post.category)}</span>
        <span className="text-zinc-500">{post.status}</span>
        {post.reportCount > 0 ? <span className="text-rose-300">{post.reportCount} reports</span> : null}
      </div>
      <h3 className="mt-2 break-words text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-zinc-300">{post.body}</p>
      {post.imageUrl ? (
        <figure className="mt-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.imageUrl} alt={post.title} className="max-h-64 w-full rounded-2xl object-cover" />
        </figure>
      ) : null}
      <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
        <span>{post.authorName}</span>
        {post.pro ? <ProBadge /> : null}
        <span>{formatPostDate(post.createdAt)}</span>
      </p>
      {post.reports.length > 0 ? (
        <ul className="mt-3 space-y-1 text-xs text-rose-200">
          {post.reports.map((report, index) => (
            <li key={`${report.at}-${index}`}>{report.reason || "Reported with no note."}</li>
          ))}
        </ul>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={busy}
          onClick={() => onReview(post.id, "approve")}
          className="rounded-full bg-pink-500 px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          Approve
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => onReview(post.id, "reject")}
          className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-zinc-200 disabled:opacity-50"
        >
          Reject
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => onReview(post.id, "delete")}
          className="rounded-full border border-rose-400/40 px-3 py-1.5 text-sm text-rose-200 disabled:opacity-50"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
