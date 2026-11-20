import { SourceList } from "@/components/SourceLink";
import type { SourcedFact } from "@/types/cited";

/** Launch-week details under a detail page: short labeled notes with their sources. */
export default function FactNotes({ facts, heading = "Good to know" }: { facts?: readonly SourcedFact[]; heading?: string }) {
  if (!facts || facts.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="text-xl font-black tracking-[-0.02em] text-white">{heading}</h2>
      <dl className="mt-4 grid gap-3">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <dt className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-300">{fact.label}</dt>
            <dd className="mt-2 leading-7 text-zinc-200">{fact.value}</dd>
            <SourceList sources={fact.sources} className="mt-2" />
          </div>
        ))}
      </dl>
    </section>
  );
}
