import Link from "next/link";

import type { Weapon } from "@/types/weapon";

const ORDER = [
  "Handgun",
  "SMG",
  "Shotgun",
  "Assault Rifle",
  "Tactical Rifle",
  "Sniper Rifle",
  "LMG",
  "Launcher",
];

/** Server-rendered list of every named GTA 6 weapon with its stat card. */
export default function WeaponListTable({ weapons }: { weapons: Weapon[] }) {
  const named = weapons.filter((weapon) => weapon.sources && weapon.sources.length > 0);
  const groups = ORDER.map((category) => ({
    category,
    items: named.filter((weapon) => weapon.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <section className="mt-12 grid gap-10">
      {groups.map((group) => (
        <div key={group.category}>
          <h2 className="text-3xl font-black tracking-[-0.03em]">
            {group.category === "SMG"
              ? "SMGs"
              : group.category === "LMG"
                ? "LMGs"
                : `${group.category}s`}{" "}
            <span className="text-zinc-500">({group.items.length})</span>
          </h2>
          <div className="mt-5 overflow-x-auto rounded-[24px] border border-white/10">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.18em] text-zinc-400">
                <tr>
                  <th className="px-4 py-3">Weapon</th>
                  <th className="px-4 py-3">Caliber</th>
                  <th className="px-4 py-3">Mag</th>
                  <th className="px-4 py-3">Dmg</th>
                  <th className="px-4 py-3">Acc</th>
                  <th className="px-4 py-3">Hnd</th>
                  <th className="px-4 py-3">Rng</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((weapon) => (
                  <tr key={weapon.slug} className="border-t border-white/5 text-zinc-300">
                    <td className="px-4 py-3 font-bold">
                      <Link
                        href={`/weapons/${weapon.slug}`}
                        className="text-white underline decoration-white/20 underline-offset-4 hover:text-violet-200"
                      >
                        {weapon.name}
                      </Link>
                      {weapon.type ? (
                        <span className="ml-2 text-xs text-zinc-500">{weapon.type}</span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">{weapon.caliber ?? "–"}</td>
                    <td className="px-4 py-3">{weapon.magazine ?? "–"}</td>
                    <td className="px-4 py-3">{weapon.stats?.damage.toFixed(1) ?? "–"}</td>
                    <td className="px-4 py-3">{weapon.stats?.accuracy.toFixed(1) ?? "–"}</td>
                    <td className="px-4 py-3">{weapon.stats?.handling.toFixed(1) ?? "–"}</td>
                    <td className="px-4 py-3">{weapon.stats?.range.toFixed(1) ?? "–"}</td>
                    <td className="px-4 py-3">{weapon.price ?? "–"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}
