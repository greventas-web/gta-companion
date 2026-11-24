"use client";

import { useEffect, useState, type FormEvent } from "react";
import { fieldClass, primaryButtonClass, quietButtonClass } from "./ui";

type Item = {
  kind: "post" | "comment";
  id: string;
  postId: string;
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  locked: boolean;
  reports: { reason: string; createdAt: string }[];
};

type Recent = { id: string; title: string; authorUid: string; authorName: string; locked: boolean; score: number };
type Ban = { uid: string; name: string };

export default function AdminQueue() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [configured, setConfigured] = useState(true);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [reported, setReported] = useState<Item[]>([]);
  const [recent, setRecent] = useState<Recent[]>([]);
  const [bans, setBans] = useState<Ban[]>([]);

  async function load() {
    const response = await fetch("/api/community/admin", { cache: "no-store" });
    if (!response.ok) {
      setAuthed(false);
      return;
    }
    const body = (await response.json()) as { reported?: Item[]; recent?: Recent[]; bans?: Ban[] };
    setReported(body.reported ?? []);
    setRecent(body.recent ?? []);
    setBans(body.bans ?? []);
    setAuthed(true);
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
        setReady(true);
        if (response.ok) await load();
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
      setError("Could not sign in.");
      return;
    }
    setSecret("");
    await load();
  }

  async function act(action: string, extra: { id?: string; uid?: string }) {
    setError("");
    const response = await fetch("/api/community/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, ...extra }),
    });
    if (!response.ok) {
      setError("Could not update that.");
      return;
    }
    await load();
  }

  async function signOut() {
    await fetch("/api/map/admin/session", { method: "DELETE" });
    setAuthed(false);
  }

  if (!ready) return <p className="text-sm text-zinc-400">Loading moderation…</p>;
  if (!configured) return <p className="text-sm text-zinc-300">Set the MAP_ADMIN_SECRET environment variable, then reload this page.</p>;
  if (!authed) {
    return (
      <form onSubmit={signIn} className="max-w-md space-y-3">
        <label className="block text-sm text-zinc-300">
          Moderator secret
          <input type="password" value={secret} onChange={(event) => setSecret(event.target.value)} autoComplete="current-password" className={`${fieldClass} mt-2`} />
        </label>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        <button type="submit" className={primaryButtonClass}>Open tools</button>
      </form>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">{reported.length} reported.</p>
        <button type="button" onClick={() => void signOut()} className="text-sm text-violet-200 underline">Sign out</button>
      </div>
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Reported</h2>
        {reported.length === 0 ? <p className="text-sm text-zinc-500">Nothing reported.</p> : null}
        {reported.map((item) => (
          <article key={`${item.kind}-${item.id}`} className="rounded-[24px] border border-white/10 bg-[#120c18] p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-violet-200">{item.kind}</p>
            <h3 className="mt-1 font-bold">{item.title}</h3>
            <p className="mt-2 whitespace-pre-wrap text-sm text-zinc-300">{item.body}</p>
            <p className="mt-2 text-xs text-zinc-500">{item.authorName}</p>
            <ul className="mt-2 text-sm text-rose-100">
              {item.reports.map((report) => <li key={report.createdAt + report.reason}>{report.reason}</li>)}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" className={quietButtonClass} onClick={() => void act(item.kind === "post" ? "remove-post" : "remove-comment", { id: item.id })}>Remove</button>
              {item.kind === "post" ? (
                <button type="button" className={quietButtonClass} onClick={() => void act(item.locked ? "unlock" : "lock", { id: item.id })}>{item.locked ? "Unlock" : "Lock"}</button>
              ) : null}
              <button type="button" className={quietButtonClass} onClick={() => void act("ban", { uid: item.authorUid })}>Ban</button>
            </div>
          </article>
        ))}
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Recent posts</h2>
        {recent.map((item) => (
          <article key={item.id} className="rounded-[24px] border border-white/10 p-4">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-xs text-zinc-500">{item.authorName} · {item.score}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button type="button" className={quietButtonClass} onClick={() => void act("remove-post", { id: item.id })}>Remove</button>
              <button type="button" className={quietButtonClass} onClick={() => void act(item.locked ? "unlock" : "lock", { id: item.id })}>{item.locked ? "Unlock" : "Lock"}</button>
              <button type="button" className={quietButtonClass} onClick={() => void act("ban", { uid: item.authorUid })}>Ban</button>
            </div>
          </article>
        ))}
      </section>
      <section>
        <h2 className="text-xl font-semibold">Bans</h2>
        {bans.length === 0 ? <p className="mt-2 text-sm text-zinc-500">No bans.</p> : null}
        <ul className="mt-3 space-y-2">
          {bans.map((ban) => (
            <li key={ban.uid} className="flex items-center justify-between gap-3 text-sm">
              <span>{ban.name}</span>
              <button type="button" className="text-pink-300" onClick={() => void act("unban", { uid: ban.uid })}>Unban</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
