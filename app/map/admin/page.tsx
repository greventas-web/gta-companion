import type { Metadata } from "next";
import AdminConsole from "@/components/map/community/AdminConsole";

export const metadata: Metadata = {
  title: "Map moderation",
  robots: { index: false, follow: false },
};

export default function MapAdminPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07060c] px-4 pb-16 pt-32 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300">
          Unofficial
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">Map moderation</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
          Approve a suggestion to show it on the Leonida map. Pending suggestions stay hidden.
        </p>
        <div className="mt-8">
          <AdminConsole />
        </div>
      </div>
    </main>
  );
}
