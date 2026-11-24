import Link from "next/link";
import { CATEGORIES } from "@/lib/community/shared";

export default function EmptyBoard({ signedIn }: { signedIn: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-pink-500/25 bg-gradient-to-br from-pink-500/15 via-[#140810] to-violet-600/10 px-6 py-16 text-center sm:px-12">
      <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-pink-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl" />
      <p className="relative text-[11px] font-black uppercase tracking-[0.4em] text-pink-300">The board is open</p>
      <h2 className="relative mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        Be one of the first to share
      </h2>
      <p className="relative mx-auto mt-4 max-w-md text-base leading-7 text-zinc-300">
        Updates, tips, screenshots, and ideas for the site show up here after a moderator approves them.
      </p>
      <div className="relative mt-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((item) => (
          <span
            key={item.id}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-zinc-200"
          >
            {item.label}
          </span>
        ))}
      </div>
      {signedIn ? (
        <p className="relative mt-8 text-sm text-zinc-400">Use the form to send your first post for review.</p>
      ) : (
        <Link
          href="/login?next=/community"
          className="relative mt-8 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-bold text-white"
        >
          Sign in to post
        </Link>
      )}
    </div>
  );
}
