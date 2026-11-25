"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { ProName } from "@/components/pro/ProBadge";
import { authHeader } from "@/lib/pro/client";
import type { FeedCard } from "@/lib/community/present";
import PostCard from "./PostCard";

type Props = {
  uid: string;
  name: string;
  pro: boolean;
  points: number;
  banned: boolean;
  initialPosts: FeedCard[];
};

export default function ProfileView({ uid, name, pro, points, banned, initialPosts }: Props) {
  const { user } = useAuth();
  const [posts, setPosts] = useState(initialPosts);
  const [score, setScore] = useState(points);

  async function vote(id: string, value: -1 | 0 | 1) {
    if (!user) return;
    await fetch(`/api/community/posts/${id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ value }),
    });
    const headers: Record<string, string> = await authHeader(user);
    const response = await fetch(`/api/community/users/${uid}`, { headers, cache: "no-store" });
    if (!response.ok) return;
    const body = (await response.json()) as { posts?: FeedCard[]; points?: number };
    setPosts(body.posts ?? []);
    setScore(body.points ?? score);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300">Member</p>
      <h1 className="mt-3 text-4xl font-black">
        <ProName name={name} pro={pro} />
      </h1>
      <p className="mt-3 text-sm text-zinc-400">{score} points</p>
      {banned ? <p className="mt-3 text-sm text-rose-300">This account can&apos;t post right now.</p> : null}
      <div className="mt-8 space-y-4">
        {posts.length === 0 ? <p className="text-sm text-zinc-400">No posts yet.</p> : posts.map((post) => (
          <PostCard key={post.id} post={post} signedIn={Boolean(user)} onVote={(id, value) => void vote(id, value)} />
        ))}
      </div>
    </div>
  );
}
