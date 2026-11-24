"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import type { User } from "firebase/auth";
import { authHeader } from "@/lib/pro/client";
import { BODY_MAX, MAX_IMAGE_BYTES, POST_TYPES, TITLE_MAX, type PostType } from "@/lib/community/types";
import { fieldClass, primaryButtonClass, quietButtonClass } from "./ui";

type Props = {
  user: User | null;
  authLoading: boolean;
  storageReady: boolean;
  onPosted: () => void;
};

export default function Composer({ user, authLoading, storageReady, onPosted }: Props) {
  const [type, setType] = useState<PostType>("tip");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [uploadKey, setUploadKey] = useState(0);
  const previewRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    };
  }, []);

  function chooseFile(next: File | null) {
    if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    const url = next ? URL.createObjectURL(next) : null;
    previewRef.current = url;
    setPreview(url);
    setFile(next);
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!user) return;
    setError("");
    setNotice("");
    if (file && (file.size > MAX_IMAGE_BYTES || (file.type && !["image/jpeg", "image/png", "image/webp"].includes(file.type)))) {
      setError("That image must be a JPG, PNG, or WebP, up to 4 MB.");
      return;
    }
    setBusy(true);
    const data = new FormData();
    data.set("type", type);
    data.set("title", title);
    data.set("body", body);
    if (file) data.set("image", file);
    try {
      const response = await fetch("/api/community/posts", {
        method: "POST",
        headers: await authHeader(user),
        body: data,
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(payload?.error || "Could not save that post.");
        return;
      }
      setTitle("");
      setBody("");
      chooseFile(null);
      setUploadKey((value) => value + 1);
      setType("tip");
      setNotice("Sent for review. It stays hidden until a moderator approves it.");
      onPosted();
    } catch {
      setError("Could not save that post.");
    } finally {
      setBusy(false);
    }
  }

  if (authLoading) {
    return (
      <section id="share" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-400">
        Checking your account…
      </section>
    );
  }

  if (!storageReady) {
    return (
      <section id="share" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-zinc-300">
        Sharing is offline until storage is configured.
      </section>
    );
  }

  if (!user) {
    return (
      <section id="share" className="rounded-[28px] border border-white/10 bg-gradient-to-br from-pink-500/10 via-white/[0.03] to-violet-500/10 p-5 sm:p-6">
        <h2 className="text-lg font-bold text-white">Sign in to post</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-300">
          Share a tip, a screenshot, or feedback on the site. Posts and images stay hidden until a moderator approves them.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/login?next=/community" className={primaryButtonClass}>
            Sign in
          </Link>
          <Link href="/register?next=/community" className={quietButtonClass}>
            Create an account
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="share" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-6">
      <h2 className="text-lg font-bold text-white">Share something</h2>
      <p className="mt-1 text-sm leading-6 text-zinc-400">
        It stays hidden until a moderator approves it. After that, the post and image are public, so leave out personal details.
      </p>
      <form onSubmit={submit} className="mt-4 space-y-4">
        <fieldset>
          <legend className="text-sm font-medium text-zinc-300">Post type</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {POST_TYPES.map((item) => {
              const selected = type === item.id;
              return (
                <label
                  key={item.id}
                  className={`min-h-11 cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selected
                      ? "border-pink-400/50 bg-pink-500/15 text-white"
                      : "border-white/10 bg-black/30 text-zinc-300 hover:border-white/25"
                  }`}
                >
                  <input
                    type="radio"
                    name="post-type"
                    value={item.id}
                    checked={selected}
                    onChange={() => setType(item.id)}
                    className="sr-only"
                  />
                  {item.label}
                </label>
              );
            })}
          </div>
        </fieldset>
        <label className="block text-sm font-medium text-zinc-300">
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={TITLE_MAX}
            required
            className={`${fieldClass} mt-2`}
            placeholder="A short headline"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-300">
          Body
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            maxLength={BODY_MAX}
            required
            rows={5}
            className={`${fieldClass} mt-2`}
            placeholder="What should other players know?"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-300">
          Image, optional
          <input
            key={uploadKey}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) => chooseFile(event.target.files?.[0] ?? null)}
            className="mt-2 block w-full text-sm text-zinc-300 file:mr-3 file:rounded-full file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
          <span className="mt-1 block text-xs text-zinc-500">JPG, PNG, or WebP. 4 MB max. Your own screenshot only.</span>
        </label>
        {preview ? (
          // Local preview of a file the browser already has. Not a remote image.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="Selected upload preview" className="max-h-56 w-full rounded-2xl border border-white/10 object-contain" />
        ) : null}
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        {notice ? (
          <p className="text-sm text-teal-200" role="status">
            {notice}
          </p>
        ) : null}
        <button type="submit" disabled={busy} className={primaryButtonClass}>
          {busy ? "Sending…" : "Share for review"}
        </button>
      </form>
    </section>
  );
}
