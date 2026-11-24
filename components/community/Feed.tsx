"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { authHeader } from "@/lib/pro/client";
import { COMMUNITY_RULES, FLAIRS, type FeedSort, type FlairId, type TopRange } from "@/lib/community/types";
import type { FeedCard } from "@/lib/community/present";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import Composer from "./Composer";
import PostCard from "./PostCard";

type Props = {
  initialPosts: FeedCard[];
  storageReady: boolean;
};

export default function Feed({ initialPosts, storageReady }: Props) {
  const router = useRouter();
  const { user } = useAuth();
  const [posts, setPosts] = useState(initialPosts);
  const [ready, setReady] = useState(storageReady);
  const [sort, setSort] = useState<FeedSort>("hot");
  const [range, setRange] = useState<TopRange>("day");
  const [flair, setFlair] = useState<FlairId | "all">("all");
  const [error, setError] = useState("");

  const load = useCallback(
    async (next: { sort: FeedSort; range: TopRange; flair: FlairId | "all" }) => {
      const params = new URLSearchParams({ sort: next.sort, range: next.range });
      if (next.flair !== "all") params.set("flair", next.flair);
      const headers: Record<string, string> = {};
      if (user) Object.assign(headers, await authHeader(user));
      const response = await fetch(`/api/community/posts?${params}`, { headers, cache: "no-store" });
      if (!response.ok) return;
      const body = (await response.json()) as { posts?: FeedCard[]; storageReady?: boolean };
      setPosts(body.posts ?? []);
      setReady(body.storageReady !== false);
    },
    [user]
  );

  async function vote(id: string, value: -1 | 0 | 1) {
    if (!user) {
      setError("Sign in to vote.");
      return;
    }
    setError("");
    const response = await fetch(`/api/community/posts/${id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ value }),
    });
    if (!response.ok) {
      setError("Could not save that vote.");
      return;
    }
    await load({ sort, range, flair });
  }

  function chooseSort(next: FeedSort) {
    setSort(next);
    void load({ sort: next, range, flair });
  }

  function chooseRange(next: TopRange) {
    setRange(next);
    void load({ sort, range: next, flair });
  }

  function chooseFlair(next: FlairId | "all") {
    setFlair(next);
    void load({ sort, range, flair: next });
  }

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300">Unofficial</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Community</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">Notes, shots, and questions from players.</p>
      <p className="mt-2 text-sm text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-3">
        {COMMUNITY_RULES.map((rule) => (
          <li key={rule} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-200">
            {rule}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Composer user={user} onPosted={(id) => router.push(`/community/p/${id}`)} />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {(["hot", "new", "top"] as const).map((item) => (
          <button key={item} type="button" aria-pressed={sort === item} onClick={() => chooseSort(item)} className={`min-h-10 rounded-full px-4 text-sm font-semibold capitalize ${sort === item ? "bg-white text-black" : "border border-white/10 text-zinc-300"}`}>
            {item}
          </button>
        ))}
        {sort === "top" ? (
          <span className="flex flex-wrap gap-2">
            {(["day", "week", "all"] as const).map((item) => (
              <button key={item} type="button" aria-pressed={range === item} onClick={() => chooseRange(item)} className={`min-h-10 rounded-full px-3 text-sm ${range === item ? "text-pink-200" : "text-zinc-500"}`}>
                {item === "day" ? "Today" : item === "week" ? "Week" : "All"}
              </button>
            ))}
          </span>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by flair">
        <button type="button" aria-pressed={flair === "all"} onClick={() => chooseFlair("all")} className={`min-h-10 rounded-full border px-3 text-xs font-semibold ${flair === "all" ? "border-white/30 bg-white text-black" : "border-white/10 text-zinc-300"}`}>
          All
        </button>
        {FLAIRS.map((item) => (
          <button key={item.id} type="button" aria-pressed={flair === item.id} onClick={() => chooseFlair(item.id)} className={`min-h-10 rounded-full border px-3 text-xs font-semibold ${flair === item.id ? "border-white/30 bg-white text-black" : "border-white/10 text-zinc-300"}`}>
            {item.label}
          </button>
        ))}
      </div>
      {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}
      {!ready ? <p className="mt-6 text-sm text-zinc-400">The board is offline until storage is configured.</p> : null}
      {ready && posts.length === 0 ? (
        <p className="mt-6 rounded-[28px] border border-dashed border-pink-400/30 px-5 py-12 text-center text-sm text-zinc-300">Nothing in this view yet. Be the first to post.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} signedIn={Boolean(user)} onVote={(id, value) => void vote(id, value)} />
          ))}
        </div>
      )}
    </div>
  );
}
