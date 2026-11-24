import { RULES } from "@/lib/community/shared";

export default function RulesCard() {
  return (
    <section className="rounded-[28px] border border-white/10 bg-[#0c0c10] p-5">
      <h2 className="text-[11px] font-black uppercase tracking-[0.32em] text-pink-300">Posting rules</h2>
      <ul className="mt-4 space-y-3">
        {RULES.map((rule) => (
          <li key={rule} className="flex gap-3 text-sm leading-6 text-zinc-200">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" aria-hidden />
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
