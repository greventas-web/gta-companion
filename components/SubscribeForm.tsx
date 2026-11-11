"use client";

import { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalized = email.trim().toLowerCase();

    if (!emailPattern.test(normalized)) {
      setIsError(true);
      setMessage("Enter a valid email address.");
      return;
    }

    setPending(true);
    setMessage("");
    setIsError(false);

    try {
      const firebase = await import("@/lib/firebase");
      const ready = await firebase.ensureFirebase();
      const database = firebase.db;

      if (!ready || !database) {
        setIsError(true);
        setMessage("Signups are not available yet.");
        return;
      }

      const { doc, serverTimestamp, setDoc } = await import("firebase/firestore");

      await setDoc(doc(database, "subscribers", normalized), {
        email: normalized,
        createdAt: serverTimestamp(),
      });

      setEmail("");
      setMessage("You are on the list.");
    } catch {
      setIsError(true);
      setMessage("Could not save that email. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email..."
          aria-label="Email address"
          autoComplete="email"
          className="min-w-0 w-full flex-1 rounded-xl border border-white/10 bg-[#0B0B0D] px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-pink-500"
        />

        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Saving..." : "Subscribe"}
        </button>
      </div>

      <p className="text-sm text-zinc-500">
        Fan-site updates only. Read the{" "}
        <a href="/privacy" className="text-zinc-300 hover:text-white">
          privacy policy
        </a>
        .
      </p>

      {message ? (
        <p
          role="status"
          className={isError ? "text-sm text-red-300" : "text-sm text-pink-300"}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
