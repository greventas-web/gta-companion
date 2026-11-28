import Link from "next/link";

import { arrowCode, cheatSlug, groupForCheat } from "@/src/data/launch/cheats";
import { cheatList } from "@/src/data/launch/cheat-list";

const order = ["player", "combat", "vehicle", "environment", "filter"] as const;

/** One table of every cheat, using the button codes already stored on each cheat. */
export default function CheatTable() {
  const rows = [...cheatList].sort(
    (a, b) => order.indexOf(a.category) - order.indexOf(b.category) || a.name.localeCompare(b.name)
  );

  return (
    <div className="mt-10 overflow-x-auto rounded-[24px] border border-white/10">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <caption className="border-b border-white/10 px-4 py-3 text-left text-base font-black text-white">
          All {rows.length} cheat codes
        </caption>
        <thead className="bg-white/[0.04] text-xs font-black uppercase tracking-[0.14em] text-zinc-400">
          <tr>
            <th scope="col" className="px-4 py-3">Cheat</th>
            <th scope="col" className="px-4 py-3">What it does</th>
            <th scope="col" className="px-4 py-3">How to unlock</th>
            <th scope="col" className="px-4 py-3">Button code</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((cheat) => {
            const group = groupForCheat(cheat.category);
            const note = cheat.codeNote ?? cheat.unlockNote;
            return (
              <tr key={cheat.name} className="border-t border-white/10 align-top">
                <th scope="row" className="px-4 py-3 font-bold text-white">
                  <Link href={`/cheats/${group.slug}/${cheatSlug(cheat.name)}`} className="hover:text-pink-300">
                    {cheat.name}
                  </Link>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">{group.label}</span>
                </th>
                <td className="px-4 py-3 text-zinc-300">{cheat.effect}</td>
                <td className="px-4 py-3 text-zinc-300">{cheat.unlock}</td>
                <td className="px-4 py-3 font-semibold text-zinc-100">
                  {cheat.code ? arrowCode(cheat.code) : "Not confirmed yet"}
                  {note ? <span className="mt-1 block text-xs font-medium text-amber-200">{note}</span> : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
