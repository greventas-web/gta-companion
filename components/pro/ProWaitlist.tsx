"use client";

import { FormEvent, useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ProWaitlist() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = email.trim().toLowerCase();
    if (!EMAIL.test(normalized) || normalized.length > 254) {
      setDone(false);
      setError("Enter a valid email address.");
      return;
    }
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/pro/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalized, company }),
      });
      const body = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !body?.ok) {
        setError(body?.error || "Could not save that email. Try again.");
        return;
      }
      setEmail("");
      setDone(true);
    } catch {
      setError("Could not save that email. Try again.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <p role="status" className="max-w-xl text-sm font-semibold text-pink-200">
        You&apos;re on the list. We&apos;ll email you when Pro opens.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            aria-invalid={error ? true : undefined}
            aria-describedby="pro-waitlist-note"
            className="h-12 w-full rounded-full border border-white/15 bg-black/40 px-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-pink-400"
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="h-12 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-5 text-sm font-black text-white transition hover:brightness-110 disabled:opacity-60"
        >
          {pending ? "Saving…" : "Join the supporter list"}
        </button>
      </div>
      <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        Company
        <input
          tabIndex={-1}
          autoComplete="off"
          name="company"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </label>
      <p id="pro-waitlist-note" className="mt-2 text-xs leading-5 text-zinc-500">
        We&apos;ll only email you about the Pro launch. Unsubscribe any time.{" "}
        <a href="/privacy" className="font-semibold text-pink-300 underline-offset-4 hover:underline">
          Privacy policy
        </a>
      </p>
      {error ? (
        <p role="alert" className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </form>
  );
}
