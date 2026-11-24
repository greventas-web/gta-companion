"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { ProName } from "@/components/pro/ProBadge";
import { authHeader } from "@/lib/pro/client";
import { REPORT_REASONS, type CommentSort } from "@/lib/community/types";
import type { FeedCard, PublicComment } from "@/lib/community/present";
import { ageLabel, fieldClass, flairClass, hostOf, quietButtonClass } from "./ui";
import VoteControl from "./VoteControl";

type Props = {
  initialPost: FeedCard;
  initialComments: PublicComment[];
};

export default function ThreadView({ initialPost, initialComments }: Props) {
  const router = useRouter();
  const { user } = useAuth();
  const [post, setPost] = useState(initialPost);
  const [comments, setComments] = useState(initialComments);
  const [sort, setSort] = useState<CommentSort>("best");
  const [error, setError] = useState("");
  const [replyBody, setReplyBody] = useState("");
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  async function reload() {
    const headers: Record<string, string> = {};
    if (user) Object.assign(headers, await authHeader(user));
    const response = await fetch(`/api/community/posts/${post.id}`, { headers, cache: "no-store" });
    if (!response.ok) return;
    const next = (await response.json()) as { post: FeedCard; comments: PublicComment[] };
    setPost(next.post);
    setComments(next.comments);
    setTitle(next.post.title);
    setBody(next.post.body);
  }

  async function votePost(value: -1 | 0 | 1) {
    if (!user) return setError("Sign in to vote.");
    setError("");
    const response = await fetch(`/api/community/posts/${post.id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ value }),
    });
    if (!response.ok) return setError("Could not save that vote.");
    await reload();
  }

  async function sendComment(event: FormEvent, parentId?: string) {
    event.preventDefault();
    if (!user) return setError("Sign in to comment.");
    setError("");
    const response = await fetch(`/api/community/posts/${post.id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ body: replyBody, parentId: parentId ?? null }),
    });
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    if (!response.ok) return setError(payload?.error || "Could not save that comment.");
    setReplyBody("");
    await reload();
  }

  async function saveEdit(event: FormEvent) {
    event.preventDefault();
    if (!user) return;
    const response = await fetch(`/api/community/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ kind: post.kind, flair: post.flair, title, body, linkUrl: post.linkUrl }),
    });
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    if (!response.ok) return setError(payload?.error || "Could not save that edit.");
    setEditing(false);
    await reload();
  }

  async function removePost() {
    if (!user || !window.confirm("Delete this post?")) return;
    const response = await fetch(`/api/community/posts/${post.id}`, { method: "DELETE", headers: await authHeader(user) });
    if (response.ok) router.push("/community");
  }

  async function report(reason: string) {
    const response = await fetch(`/api/community/posts/${post.id}/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason }),
    });
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    setError(response.ok ? "Report sent." : payload?.error || "Could not send that report.");
  }

  const mine = user?.uid === post.authorUid;

  return (
    <div className="mx-auto max-w-3xl">
      <Link href="/community" className="text-sm font-semibold text-pink-300">
        Back to Community
      </Link>
      <article className="mt-4 rounded-[28px] border border-white/10 bg-[#120c18]/90 p-4 sm:p-6">
        <div className="flex gap-3">
          <VoteControl score={post.score} vote={post.myVote} disabled={!user} onVote={(value) => void votePost(value)} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span className={`rounded-full border px-2 py-0.5 font-semibold ${flairClass(post.flair)}`}>{post.flairLabel}</span>
              <Link href={`/community/u/${post.authorUid}`} className="text-zinc-200">
                <ProName name={post.authorName} pro={post.pro} />
              </Link>
              <span>{ageLabel(post.createdAt)}</span>
              {post.editedAt ? <span>edited</span> : null}
              {post.locked ? <span>Locked</span> : null}
            </div>
            {editing ? (
              <form onSubmit={saveEdit} className="mt-3 space-y-3">
                <input value={title} onChange={(event) => setTitle(event.target.value)} className={fieldClass} />
                <textarea value={body} onChange={(event) => setBody(event.target.value)} rows={5} className={fieldClass} />
                <button type="submit" className={quietButtonClass}>Save</button>
              </form>
            ) : (
              <>
                <h1 className="mt-2 text-2xl font-black tracking-tight [overflow-wrap:anywhere] sm:text-3xl">{post.title}</h1>
                {post.linkUrl ? (
                  <a href={post.linkUrl} className="mt-2 inline-flex text-sm text-pink-300" rel="noopener noreferrer">{hostOf(post.linkUrl)}</a>
                ) : null}
                {post.body ? <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-zinc-200 [overflow-wrap:anywhere]">{post.body}</p> : null}
                {post.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.imageUrl} alt="" className="mt-4 max-h-[32rem] w-full rounded-2xl border border-white/10 object-contain" />
                ) : null}
              </>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {mine ? (
                <>
                  <button type="button" onClick={() => setEditing((value) => !value)} className="text-sm font-semibold text-zinc-300">Edit</button>
                  <button type="button" onClick={() => void removePost()} className="text-sm font-semibold text-rose-300">Delete</button>
                </>
              ) : null}
              <ReportMenu onReport={(reason) => void report(reason)} />
            </div>
          </div>
        </div>
      </article>

      {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}

      <section className="mt-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold">Comments</h2>
          <div className="flex gap-2">
            {(["best", "new"] as const).map((item) => (
              <button key={item} type="button" aria-pressed={sort === item} onClick={() => setSort(item)} className={`text-sm font-semibold capitalize ${sort === item ? "text-white" : "text-zinc-500"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        {post.locked ? <p className="mt-3 text-sm text-zinc-400">This thread is locked.</p> : (
          <form onSubmit={(event) => void sendComment(event)} className="mt-3 space-y-3">
            <textarea value={replyBody} onChange={(event) => setReplyBody(event.target.value)} rows={3} placeholder="Add a comment" className={fieldClass} />
            <button type="submit" className={quietButtonClass}>Comment</button>
          </form>
        )}
        <div className="mt-4 space-y-3">
          <CommentList comments={comments} parentId={null} depth={0} sort={sort} postId={post.id} locked={post.locked} onChange={() => void reload()} />
        </div>
      </section>
    </div>
  );
}

function CommentList({
  comments,
  parentId,
  depth,
  sort,
  postId,
  locked,
  onChange,
}: {
  comments: PublicComment[];
  parentId: string | null;
  depth: number;
  sort: CommentSort;
  postId: string;
  locked: boolean;
  onChange: () => void;
}) {
  const items = useMemo(() => {
    const rows = comments.filter((comment) => comment.parentId === parentId);
    rows.sort((left, right) => (sort === "new" ? right.createdAt.localeCompare(left.createdAt) : right.score - left.score || left.createdAt.localeCompare(right.createdAt)));
    return rows;
  }, [comments, parentId, sort]);

  return (
    <>
      {items.map((comment) => (
        <CommentItem key={comment.id} comment={comment} comments={comments} depth={depth} sort={sort} postId={postId} locked={locked} onChange={onChange} />
      ))}
    </>
  );
}

function CommentItem({
  comment,
  comments,
  depth,
  sort,
  postId,
  locked,
  onChange,
}: {
  comment: PublicComment;
  comments: PublicComment[];
  depth: number;
  sort: CommentSort;
  postId: string;
  locked: boolean;
  onChange: () => void;
}) {
  const { user } = useAuth();
  const [open, setOpen] = useState(true);
  const [replying, setReplying] = useState(false);
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(comment.body);
  const hasChildren = comments.some((item) => item.parentId === comment.id);

  async function vote(value: -1 | 0 | 1) {
    if (!user) return;
    await fetch(`/api/community/comments/${comment.id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ value }),
    });
    onChange();
  }

  async function send(event: FormEvent) {
    event.preventDefault();
    if (!user) return;
    await fetch(`/api/community/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ body: text, parentId: comment.id }),
    });
    setText("");
    setReplying(false);
    onChange();
  }

  async function save(event: FormEvent) {
    event.preventDefault();
    if (!user) return;
    await fetch(`/api/community/comments/${comment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...(await authHeader(user)) },
      body: JSON.stringify({ body: draft }),
    });
    setEditing(false);
    onChange();
  }

  async function remove() {
    if (!user || !window.confirm("Delete this comment?")) return;
    await fetch(`/api/community/comments/${comment.id}`, { method: "DELETE", headers: await authHeader(user) });
    onChange();
  }

  return (
    <div className={depth > 0 ? "border-l border-white/10 pl-3" : ""}>
      <div className="rounded-2xl bg-black/20 p-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <Link href={`/community/u/${comment.authorUid}`} className="text-zinc-200">
            <ProName name={comment.authorName} pro={comment.pro} />
          </Link>
          <span>{ageLabel(comment.createdAt)}</span>
          {hasChildren ? (
            <button type="button" onClick={() => setOpen((value) => !value)} className="font-semibold text-zinc-400">
              {open ? "Collapse" : "Expand"}
            </button>
          ) : null}
        </div>
        {comment.removed ? <p className="mt-2 text-sm text-zinc-500">Removed</p> : editing ? (
          <form onSubmit={(event) => void save(event)} className="mt-2 space-y-2">
            <textarea value={draft} onChange={(event) => setDraft(event.target.value)} rows={3} className={fieldClass} />
            <button type="submit" className={quietButtonClass}>Save</button>
          </form>
        ) : (
          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-zinc-200 [overflow-wrap:anywhere]">{comment.body}</p>
        )}
        {!comment.removed ? (
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <VoteControl score={comment.score} vote={comment.myVote} disabled={!user} onVote={(value) => void vote(value)} />
            {!locked ? <button type="button" onClick={() => setReplying((value) => !value)} className="text-sm font-semibold text-zinc-300">Reply</button> : null}
            {user?.uid === comment.authorUid ? (
              <>
                <button type="button" onClick={() => setEditing((value) => !value)} className="text-sm text-zinc-400">Edit</button>
                <button type="button" onClick={() => void remove()} className="text-sm text-rose-300">Delete</button>
              </>
            ) : null}
            <ReportMenu
              onReport={(reason) => {
                void fetch(`/api/community/comments/${comment.id}/report`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ reason }),
                });
              }}
            />
          </div>
        ) : null}
        {replying ? (
          <form onSubmit={(event) => void send(event)} className="mt-2 space-y-2">
            <textarea value={text} onChange={(event) => setText(event.target.value)} rows={2} className={fieldClass} placeholder={`Reply to ${comment.authorName}`} />
            <button type="submit" className={quietButtonClass}>Reply</button>
          </form>
        ) : null}
      </div>
      {open ? <div className="mt-2"><CommentList comments={comments} parentId={comment.id} depth={Math.min(depth + 1, 6)} sort={sort} postId={postId} locked={locked} onChange={onChange} /></div> : null}
    </div>
  );
}

function ReportMenu({ onReport }: { onReport: (reason: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setOpen((value) => !value)} className="text-sm font-semibold text-zinc-400">Report</button>
      {open ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {REPORT_REASONS.map((reason) => (
            <button key={reason} type="button" onClick={() => { setOpen(false); onReport(reason); }} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-200">
              {reason}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
