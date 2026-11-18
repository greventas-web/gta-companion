import Link from "next/link";

import { trophies, trophyPlatformLabel } from "@/src/data/trophies";

export default function TrophyTable() {
  return (
    <div className="mt-10 overflow-x-auto rounded-[32px] border border-white/10 bg-[#0B0B0D]">
      <table className="w-full min-w-[760px] text-left text-sm">
        <caption className="sr-only">
          GTA 6 trophies and achievements. Empty until an official list is published.
        </caption>
        <thead className="border-b border-white/10 text-xs font-black uppercase tracking-[0.16em] text-violet-300">
          <tr>
            <th scope="col" className="px-5 py-4">Name</th>
            <th scope="col" className="px-5 py-4">Description</th>
            <th scope="col" className="px-5 py-4">PS / Xbox</th>
            <th scope="col" className="px-5 py-4">Tips</th>
            <th scope="col" className="px-5 py-4">Missable</th>
          </tr>
        </thead>
        <tbody>
          {trophies.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-5 py-8 leading-7 text-zinc-400">
                No trophies or achievements to list. A row is added only after
                PlayStation, Xbox, or Rockstar publishes it.
              </td>
            </tr>
          ) : (
            trophies.map((trophy) => (
              <tr key={trophy.slug} className="border-t border-white/10 align-top">
                <th scope="row" className="px-5 py-4 font-semibold text-white">
                  <Link
                    href={`/trophies/${trophy.slug}`}
                    className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
                  >
                    {trophy.name}
                  </Link>
                </th>
                <td className="px-5 py-4 leading-6 text-zinc-300">{trophy.description}</td>
                <td className="px-5 py-4 text-zinc-200">{trophyPlatformLabel(trophy)}</td>
                <td className="px-5 py-4 leading-6 text-zinc-300">
                  {trophy.tips
                    ? trophy.tipsSpoiler
                      ? "Hidden on the trophy page"
                      : trophy.tips
                    : "—"}
                </td>
                <td className="px-5 py-4 text-zinc-200">
                  {trophy.missable ? "Missable" : "Not marked missable"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
