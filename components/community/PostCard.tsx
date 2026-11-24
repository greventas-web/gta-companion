"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { ProName } from "@/components/pro/ProBadge";
import type { FeedCard } from "@/lib/community/present";
import { ageLabel, flairClass, hostOf } from "./ui";
import VoteControl from "./VoteControl";

type Props = {
  post: FeedCard;
  signedIn: boolean;
  onVote: (id: string, value: -1 | 0 | 1) => void;
};

export default function PostCard({ post, signedIn, onVote }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="flex gap-3 rounded-[28px] border border-white/10 bg-[#120c18]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-5">
      <VoteControl score={post.score} vote={post.myVote} disabled={!signedIn} onVote={(value) => onVote(post.id, value)} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${flairClass(post.flair)}`}>{post.flairLabel}</span>
          <Link href={`/community/u/${post.authorUid}`} className="font-semibold text-zinc-200 hover:text-white">
            <ProName name={post.authorName} pro={post.pro} />
          </Link>
          <span>{ageLabel(post.createdAt)}</span>
          {post.locked ? <span className="uppercase tracking-[0.12em] text-zinc-400">Locked</span> : null}
        </div>
        <h2 className="mt-2 text-lg font-bold tracking-tight text-white [overflow-wrap:anywhere] sm:text-xl">
          <Link href={`/community/p/${post.id}`} className="hover:text-pink-100">
            {post.title}
          </Link>
        </h2>
        {post.linkUrl ? (
          <a href={post.linkUrl} className="mt-1 inline-flex text-sm text-pink-300 hover:text-pink-200" rel="noopener noreferrer">
            {hostOf(post.linkUrl)}
          </a>
        ) : null}
        {post.body ? <p className="mt-2 line-clamp-4 whitespace-pre-wrap text-sm leading-6 text-zinc-300 [overflow-wrap:anywhere]">{post.body}</p> : null}
        {post.imageUrl && !failed ? (
          <Link href={`/community/p/${post.id}`} className="mt-3 block">
            {/* Served from the checked image route, not the optimizer. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.imageUrl} alt="" className="max-h-56 w-full rounded-2xl border border-white/10 object-cover" onError={() => setFailed(true)} />
          </Link>
        ) : null}
        <Link href={`/community/p/${post.id}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-white">
          <MessageSquare size={15} aria-hidden />
          {post.commentCount} {post.commentCount === 1 ? "comment" : "comments"}
        </Link>
      </div>
    </article>
  );
}
