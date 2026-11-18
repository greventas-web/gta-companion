import Link from "next/link";

import type { Cheat } from "@/src/data/launch/cheat-list";

export default function CheatTable({ cheats }: { cheats: Cheat[] }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-[24px] border border-white/10">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.18em] text-zinc-400">
          <tr>
            <th className="px-4 py-3">Cheat</th>
            <th className="px-4 py-3">Code (D-pad)</th>
            <th className="px-4 py-3">How to unlock</th>
          </tr>
        </thead>
        <tbody>
          {cheats.map((cheat) => (
            <tr key={cheat.name} className="border-t border-white/5 align-top text-zinc-300">
              <td className="px-4 py-3">
                <p className="font-bold text-white">
                  {cheat.link ? (
                    <Link
                      href={cheat.link}
                      className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
                    >
                      {cheat.name}
                    </Link>
                  ) : (
                    cheat.name
                  )}
                </p>
                <p className="mt-1 text-zinc-400">{cheat.effect}</p>
              </td>
              <td className="px-4 py-3">
                {cheat.code ? (
                  <span className="font-mono text-violet-200">{cheat.code.join(", ")}</span>
                ) : (
                  <span className="text-zinc-500">Not published yet</span>
                )}
                {cheat.codeNote ? (
                  <p className="mt-1 text-xs text-amber-300/80">{cheat.codeNote}</p>
                ) : null}
              </td>
              <td className="px-4 py-3">
                {cheat.unlock}
                {cheat.unlockNote ? (
                  <p className="mt-1 text-xs text-amber-300/80">{cheat.unlockNote}</p>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
