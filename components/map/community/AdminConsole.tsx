"use client";

import { useEffect, useState, type FormEvent } from "react";
import { MAP_CATEGORIES } from "@/lib/map/model";
import type { Submission } from "@/lib/map/store";

export default function AdminConsole() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [configured, setConfigured] = useState(true);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [busyId, setBusyId] = useState("");

  async function loadQueue() {
    const response = await fetch("/api/map/admin/submissions", { cache: "no-store" });
    if (!response.ok) {
      setAuthed(false);
      return;
    }
    const body = (await response.json()) as { submissions: Submission[] };
    setSubmissions(body.submissions ?? []);
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
        setAuthed(response.ok);
        setReady(true);
        if (response.ok) {
          const queue = await fetch("/api/map/admin/submissions", { cache: "no-store" });
          if (!queue.ok || cancel) return;
          const body = (await queue.json()) as { submissions: Submission[] };
          setSubmissions(body.submissions ?? []);
        }
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

  async function review(id: string, status: "approved" | "rejected") {
    setBusyId(id);
    setError("");
    const response = await fetch("/api/map/admin/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setBusyId("");
    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error || "Could not update that suggestion.");
      return;
    }
    await loadQueue();
  }

  async function signOut() {
    await fetch("/api/map/admin/session", { method: "DELETE" });
    setAuthed(false);
    setSubmissions([]);
  }

  if (!ready) {
    return <p className="text-sm text-zinc-400">Loading moderation…</p>;
  }

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
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white outline-none ring-violet-400/40 focus:ring-2"
          />
        </label>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Open queue
        </button>
      </form>
    );
  }

  const pending = submissions.filter((item) => item.status === "pending");
  const reviewed = submissions.filter((item) => item.status !== "pending");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-zinc-400">{pending.length} waiting for review.</p>
        <button type="button" onClick={signOut} className="text-sm text-violet-200 underline">
          Sign out
        </button>
      </div>
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Pending</h2>
        {pending.length === 0 ? <p className="text-sm text-zinc-500">Nothing pending.</p> : null}
        {pending.map((item) => (
          <SuggestionCard
            key={item.id}
            item={item}
            busy={busyId === item.id}
            onReview={review}
          />
        ))}
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Reviewed</h2>
        {reviewed.length === 0 ? <p className="text-sm text-zinc-500">No reviewed suggestions yet.</p> : null}
        {reviewed.map((item) => (
          <SuggestionCard
            key={item.id}
            item={item}
            busy={busyId === item.id}
            onReview={review}
          />
        ))}
      </section>
    </div>
  );
}

function SuggestionCard({
  item,
  busy,
  onReview,
}: {
  item: Submission;
  busy: boolean;
  onReview: (id: string, status: "approved" | "rejected") => void;
}) {
  const label = MAP_CATEGORIES.find((category) => category.id === item.category)?.label ?? item.category;
  return (
    <article className="rounded-3xl border border-white/10 bg-[#120c18] p-4">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-violet-200">
        <span>{label}</span>
        <span className="text-zinc-500">{item.status}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{item.description}</p>
      <p className="mt-2 text-xs text-zinc-500">
        {item.x.toFixed(1)}, {item.y.toFixed(1)}
        {item.entitySlug ? ` · slug ${item.entitySlug}` : ""}
        {item.submitterName ? ` · ${item.submitterName}` : ""}
      </p>
      {item.sourceUrl ? (
        <a href={item.sourceUrl} className="mt-1 inline-flex text-xs text-violet-200 underline" rel="noopener noreferrer">
          Source
        </a>
      ) : null}
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          disabled={busy}
          onClick={() => onReview(item.id, "approved")}
          className="rounded-full bg-violet-500 px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          Approve
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => onReview(item.id, "rejected")}
          className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-zinc-200 disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </article>
  );
}
