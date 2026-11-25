import type { Metadata } from "next";
import AdminQueue from "@/components/community/AdminQueue";

export const metadata: Metadata = {
  title: "Community review",
  robots: { index: false, follow: false },
};

export default function CommunityAdminPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07060c] px-4 pb-16 pt-32 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300">Unofficial</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Community review</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
          Remove a post, lock a thread, or ban an account. Reported items are listed first.
        </p>
        <div className="mt-8">
          <AdminQueue />
        </div>
      </div>
    </main>
  );
}
