"use client";

import { useEffect, useRef, useState, type DragEvent, type FormEvent } from "react";
import Link from "next/link";
import { ImagePlus, X } from "lucide-react";
import type { User } from "firebase/auth";
import { authHeader } from "@/lib/pro/client";
import { FLAIRS, MAX_IMAGE_BYTES, POST_KINDS, TITLE_MAX, type FlairId, type PostKind } from "@/lib/community/types";
import { fieldClass, flairClass, primaryButtonClass, quietButtonClass } from "./ui";

type Props = {
  user: User | null;
  onPosted: (id: string) => void;
};

const ACCEPT = "image/jpeg,image/png,image/webp";

export default function Composer({ user, onPosted }: Props) {
  const [kind, setKind] = useState<PostKind>("text");
  const [flair, setFlair] = useState<FlairId>("general");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const previewRef = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    if (!next && inputRef.current) inputRef.current.value = "";
  }

  function takeFile(next: File | null) {
    if (!next) return;
    if (next.size > MAX_IMAGE_BYTES) {
      setError("That image must be a JPG, PNG, or WebP, up to 4 MB.");
      return;
    }
    setError("");
    setKind("image");
    chooseFile(next);
  }

  function onDrop(event: DragEvent) {
    event.preventDefault();
    setDragOver(false);
    takeFile(event.dataTransfer.files?.[0] ?? null);
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!user) {
      setError("Sign in to post.");
      return;
    }
    setBusy(true);
    const data = new FormData();
    data.set("kind", kind);
    data.set("flair", flair);
    data.set("title", title);
    data.set("body", body);
    if (kind === "link") data.set("linkUrl", linkUrl);
    if (kind === "image" && file) data.set("image", file);
    try {
      const response = await fetch("/api/community/posts", {
        method: "POST",
        headers: await authHeader(user),
        body: data,
      });
      const payload = (await response.json().catch(() => null)) as { error?: string; id?: string } | null;
      if (!response.ok || !payload?.id) {
        setError(payload?.error || "Could not save that post.");
        return;
      }
      setTitle("");
      setBody("");
      setLinkUrl("");
      chooseFile(null);
      setKind("text");
      onPosted(payload.id);
    } catch {
      setError("Could not save that post.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="share" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-6">
      <h2 className="text-lg font-bold text-white">New post</h2>
      <form onSubmit={submit} className="mt-4 space-y-4">
        <fieldset>
          <legend className="text-sm font-medium text-zinc-300">Flair</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {FLAIRS.map((item) => (
              <label key={item.id} className={`min-h-10 cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold ${flair === item.id ? flairClass(item.id) : "border-white/10 text-zinc-300"}`}>
                <input type="radio" name="flair" value={item.id} checked={flair === item.id} onChange={() => setFlair(item.id)} className="sr-only" />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-medium text-zinc-300">Type</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {POST_KINDS.map((item) => (
              <label key={item.id} className={`min-h-10 cursor-pointer rounded-full border px-4 py-1.5 text-sm font-semibold ${kind === item.id ? "border-pink-400/50 bg-pink-500/15 text-white" : "border-white/10 text-zinc-300"}`}>
                <input type="radio" name="kind" value={item.id} checked={kind === item.id} onChange={() => setKind(item.id)} className="sr-only" />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block text-sm font-medium text-zinc-300">
          Title
          <input value={title} onChange={(event) => setTitle(event.target.value)} maxLength={TITLE_MAX} required className={`${fieldClass} mt-2`} placeholder="A short headline" />
        </label>
        {kind !== "image" ? (
          <label className="block text-sm font-medium text-zinc-300">
            {kind === "text" ? "Body" : "Body, optional"}
            <textarea value={body} onChange={(event) => setBody(event.target.value)} required={kind === "text"} rows={5} className={`${fieldClass} mt-2`} placeholder="What should other players know?" />
          </label>
        ) : (
          <label className="block text-sm font-medium text-zinc-300">
            Caption, optional
            <textarea value={body} onChange={(event) => setBody(event.target.value)} rows={3} className={`${fieldClass} mt-2`} />
          </label>
        )}
        {kind === "link" ? (
          <label className="block text-sm font-medium text-zinc-300">
            Link
            <input value={linkUrl} onChange={(event) => setLinkUrl(event.target.value)} required type="url" placeholder="https://" className={`${fieldClass} mt-2`} />
          </label>
        ) : null}
        {kind === "image" ? (
          <div>
            <div
              onDragOver={(event) => {
                event.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              className={`rounded-[24px] border border-dashed p-4 transition ${dragOver ? "border-pink-400 bg-pink-500/10" : "border-white/15 bg-black/30"}`}
            >
              {preview ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  {/* Local preview of a file the browser already has. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="Selected upload preview" className="max-h-48 w-full rounded-2xl border border-white/10 object-contain sm:w-48" />
                  <button type="button" onClick={() => chooseFile(null)} className={quietButtonClass}>
                    <X size={16} aria-hidden />
                    Remove
                  </button>
                </div>
              ) : (
                <label htmlFor="community-image" className="flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 text-center">
                  <ImagePlus className="text-pink-300" aria-hidden />
                  <span className="text-sm font-semibold text-white">Add screenshot</span>
                  <span className="text-xs text-zinc-400">Drag and drop, or choose a file</span>
                </label>
              )}
              <input
                ref={inputRef}
                id="community-image"
                type="file"
                accept={ACCEPT}
                className="sr-only"
                onChange={(event) => takeFile(event.target.files?.[0] ?? null)}
              />
            </div>
            <p className="mt-2 text-xs leading-5 text-zinc-500">JPG, PNG or WebP, up to 4 MB. Images are checked before they appear.</p>
          </div>
        ) : null}
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        {!user ? (
          <p className="text-sm text-zinc-400">
            <Link href="/login?next=/community" className="font-semibold text-pink-300">
              Sign in
            </Link>{" "}
            to post.
          </p>
        ) : null}
        <button type="submit" disabled={busy} className={primaryButtonClass}>
          {busy ? "Posting…" : "Post"}
        </button>
      </form>
    </section>
  );
}
