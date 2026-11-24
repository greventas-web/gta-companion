"use client";

import { useCallback, useEffect, useState } from "react";
import Composer from "@/components/community/Composer";
import EmptyBoard from "@/components/community/EmptyBoard";
import PostCard from "@/components/community/PostCard";
import RulesCard from "@/components/community/RulesCard";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  CATEGORIES,
  categoryLabel,
  type CommunityCategory,
  type OwnPost,
  type PublicPost,
} from "@/lib/community/shared";

type Filter = "all" | CommunityCategory;

export default function CommunityBoard({
  initialPosts,
  storageReady,
}: {
  initialPosts: PublicPost[];
  storageReady: boolean;
}) {
  const { user, loading } = useAuth();
  const [posts, setPosts] = useState(initialPosts);
  const [ready, setReady] = useState(storageReady);
  const [mineState, setMineState] = useState<{ uid: string; posts: OwnPost[] }>({ uid: "", posts: [] });
  const [filter, setFilter] = useState<Filter>("all");
  const [reported, setReported] = useState<string[]>([]);
  const mine = user && mineState.uid === user.uid ? mineState.posts : [];

  const loadMine = useCallback(async () => {
    if (!user) return [] as OwnPost[];
    const response = await fetch("/api/community/mine", {
      headers: { Authorization: `Bearer ${await user.getIdToken()}` },
      cache: "no-store",
    });
    if (!response.ok) return [] as OwnPost[];
    const body = (await response.json()) as { posts?: OwnPost[] };
    return body.posts ?? [];
  }, [user]);

  useEffect(() => {
    let cancel = false;
    fetch("/api/community/posts", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok || cancel) return;
        const body = (await response.json()) as { posts?: PublicPost[] };
        if (Array.isArray(body.posts)) setPosts(body.posts);
      })
      .catch(() => undefined);
    return () => {
      cancel = true;
    };
  }, []);

  useEffect(() => {
    if (loading || !user) return;
    let cancel = false;
    const uid = user.uid;
    loadMine()
      .then((next) => {
        if (!cancel) setMineState({ uid, posts: next });
      })
      .catch(() => {
        if (!cancel) setMineState({ uid, posts: [] });
      });
    return () => {
      cancel = true;
    };
  }, [loading, loadMine, user]);

  const waiting = mine.filter((post) => post.status !== "approved");
  const visible = filter === "all" ? posts : posts.filter((post) => post.category === filter);

  return (
    <div className="min-w-0">
      <p className="text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">Unofficial</p>
      <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Community</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Share an update, a tip, a screenshot, or an idea for the site. Nothing is public until a moderator approves it.
      </p>
      <p className="mt-3 text-sm text-zinc-500">Unofficial fan site. Not affiliated with Rockstar Games.</p>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="order-2 min-w-0 space-y-5 lg:order-1">
          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter posts">
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </FilterButton>
            {CATEGORIES.map((item) => (
              <FilterButton key={item.id} active={filter === item.id} onClick={() => setFilter(item.id)}>
                {item.label}
              </FilterButton>
            ))}
          </div>

          {waiting.length > 0 ? (
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Your posts in review</h2>
              {waiting.map((post) => (
                <PostCard key={post.id} post={post} user={user} reported={false} onReported={() => undefined} />
              ))}
            </section>
          ) : null}

          {posts.length === 0 ? (
            <EmptyBoard signedIn={Boolean(user)} />
          ) : filter !== "all" && visible.length === 0 ? (
            <p className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-14 text-center text-zinc-400">
              No {categoryLabel(filter).toLowerCase()} posts yet.
            </p>
          ) : (
            <div className="space-y-4">
              {visible.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  user={user}
                  reported={reported.includes(post.id)}
                  onReported={(id) => setReported((current) => (current.includes(id) ? current : [...current, id]))}
                />
              ))}
            </div>
          )}
        </div>

        <aside className="order-1 min-w-0 space-y-4 lg:sticky lg:top-32 lg:order-2">
          <RulesCard />
          <Composer
            user={user}
            authLoading={loading}
            storageReady={ready}
            onPosted={() => {
              setReady(true);
              if (!user) return;
              const uid = user.uid;
              loadMine()
                .then((next) => setMineState({ uid, posts: next }))
                .catch(() => setMineState({ uid, posts: [] }));
            }}
          />
        </aside>
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
        active
          ? "border-pink-400/50 bg-white text-black"
          : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-pink-400/30 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
