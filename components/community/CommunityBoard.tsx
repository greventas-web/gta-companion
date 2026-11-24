"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquarePlus } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { authHeader } from "@/lib/pro/client";
import { COMMUNITY_RULES, POST_TYPES, type MinePost, type PostType, type PublicPost } from "@/lib/community/types";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import Composer from "./Composer";
import PostCard from "./PostCard";
import { formatWhen, primaryButtonClass, typePillClass } from "./ui";

type Filter = "all" | PostType;

type Props = {
  initialPosts: PublicPost[];
  storageReady: boolean;
};

export default function CommunityBoard({ initialPosts, storageReady }: Props) {
  const { user, loading: authLoading } = useAuth();
  const [posts, setPosts] = useState(initialPosts);
  const [mine, setMine] = useState<MinePost[]>([]);
  const [ready, setReady] = useState(storageReady);
  const [filter, setFilter] = useState<Filter>("all");
  const [notice, setNotice] = useState("");

  const load = useCallback(async () => {
    const headers: Record<string, string> = {};
    if (user) Object.assign(headers, await authHeader(user));
    const response = await fetch("/api/community/posts", { headers, cache: "no-store" });
    if (!response.ok) return;
    const body = (await response.json()) as {
      posts?: PublicPost[];
      mine?: MinePost[];
      storageReady?: boolean;
    };
    setPosts(body.posts ?? []);
    setMine(body.mine ?? []);
    setReady(body.storageReady !== false);
  }, [user]);

  useEffect(() => {
    if (authLoading) return;
    let cancel = false;
    const headersPromise = user ? authHeader(user) : Promise.resolve({} as Record<string, string>);
    headersPromise
      .then(async (headers) => {
        const response = await fetch("/api/community/posts", { headers, cache: "no-store" });
        if (cancel || !response.ok) return;
        const body = (await response.json()) as {
          posts?: PublicPost[];
          mine?: MinePost[];
          storageReady?: boolean;
        };
        if (cancel) return;
        setPosts(body.posts ?? []);
        setMine(body.mine ?? []);
        setReady(body.storageReady !== false);
      })
      .catch(() => undefined);
    return () => {
      cancel = true;
    };
  }, [authLoading, user]);

  const visible = posts.filter((post) => filter === "all" || post.type === filter);
  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...POST_TYPES.map((item) => ({ id: item.id, label: item.id === "tip" ? "Tips" : item.id === "screenshot" ? "Screenshots" : "Feedback" })),
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300">Unofficial</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Community</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
        Tips, screenshots, and notes from players. Every post and image is reviewed before it shows up here.
      </p>
      <p className="mt-2 text-sm text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>

      <section aria-labelledby="community-rules" className="mt-8">
        <h2 id="community-rules" className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
          House rules
        </h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {COMMUNITY_RULES.map((rule) => (
            <li
              key={rule}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-200"
            >
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8">
        <Composer
          user={user}
          authLoading={authLoading}
          storageReady={ready}
          onPosted={() => {
            void load();
          }}
        />
      </div>

      {notice ? (
        <p className="mt-4 text-sm text-teal-200" role="status">
          {notice}
        </p>
      ) : null}

      {mine.length > 0 ? (
        <section className="mt-8" aria-labelledby="your-posts">
          <h2 id="your-posts" className="text-lg font-bold text-white">
            Your posts
          </h2>
          <ul className="mt-3 space-y-3">
            {mine.map((post) => (
              <li key={post.id} className="rounded-[24px] border border-dashed border-white/15 bg-black/30 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${typePillClass(post.type)}`}>
                    {post.typeLabel}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
                    {post.statusLabel}
                  </span>
                  <time dateTime={post.createdAt} className="text-xs text-zinc-500">
                    {formatWhen(post.createdAt)}
                  </time>
                </div>
                <h3 className="mt-2 font-semibold text-white [overflow-wrap:anywhere]">{post.title}</h3>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">{post.body}</p>
                {post.hasImage ? (
                  <p className="mt-2 text-xs text-zinc-500">Image attached. It stays hidden until the post is approved.</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10" aria-labelledby="community-feed">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="community-feed" className="text-lg font-bold text-white">
            From players
          </h2>
          {posts.length > 0 ? (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts">
              {filters.map((item) => {
                const selected = filter === item.id;
                const count =
                  item.id === "all" ? posts.length : posts.filter((post) => post.type === item.id).length;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setFilter(item.id)}
                    className={`min-h-11 rounded-full border px-3 text-sm font-semibold transition ${
                      selected
                        ? "border-white/30 bg-white text-black"
                        : "border-white/10 text-zinc-300 hover:border-white/25"
                    }`}
                  >
                    {item.label}
                    <span className="ml-1.5 text-xs opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        {posts.length === 0 && ready ? (
          <div className="relative mt-4 overflow-hidden rounded-[28px] border border-dashed border-pink-400/35 bg-gradient-to-br from-pink-500/15 via-[#120c18] to-violet-500/15 px-6 py-14 text-center">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl" />
            <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 text-white shadow-[0_12px_40px_rgba(236,72,153,0.4)]">
              <MessageSquarePlus size={26} aria-hidden />
            </div>
            <h3 className="relative mt-5 text-2xl font-black tracking-tight">Be the first to share a tip</h3>
            <p className="relative mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-300">
              A Vice City shortcut, a shot you took yourself, or a note about the site. Moderators approve it before anyone else can see it.
            </p>
            <Link href="#share" className={`${primaryButtonClass} relative mt-6`}>
              Share a tip
            </Link>
          </div>
        ) : posts.length === 0 ? (
          <p className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-10 text-center text-sm leading-6 text-zinc-300">
            Approved posts will show up here.
          </p>
        ) : visible.length === 0 ? (
          <p className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-10 text-center text-sm text-zinc-300">
            Nothing in this category yet. Another kind of post might already be up.
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {visible.map((post) => (
              <PostCard key={post.id} post={post} onReported={setNotice} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
