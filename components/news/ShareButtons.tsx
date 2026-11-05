"use client";

import { useState } from "react";
import {
  Check,
  Link2,
  Share2,
} from "lucide-react";

type Props = {
  title: string;
};

export default function ShareButtons({
  title,
}: Props) {
  const [copied, setCopied] = useState(false);

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(currentUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Ignore clipboard failures
    }
  }

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: currentUrl,
        });
        return;
      } catch {
        // User cancelled sharing
      }
    }

    copyLink();
  }

  return (
    <div className="mt-14">
      <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-zinc-500">
        Share Article
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={copyLink}
          aria-label="Copy link"
          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-pink-500 hover:bg-pink-500/10"
        >
          {copied ? (
            <>
              <Check size={18} className="text-green-400" />
              <span className="text-sm font-medium text-green-400">
                Copied
              </span>
            </>
          ) : (
            <>
              <Link2 size={18} />
              <span className="text-sm font-medium">
                Copy Link
              </span>
            </>
          )}
        </button>

        <button
          onClick={share}
          aria-label="Share article"
          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-pink-500 hover:bg-pink-500/10"
        >
          <Share2 size={18} />
          <span className="text-sm font-medium">
            Share
          </span>
        </button>
      </div>
    </div>
  );
}