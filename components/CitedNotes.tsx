import { SourceList, type SourceRef } from "@/components/SourceLink";

export type CitedNote = {
  title: string;
  body: string;
  source: SourceRef;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  notes: readonly CitedNote[];
};

export default function CitedNotes({ eyebrow, title, intro, notes }: Props) {
  return (
    <section className="mt-16">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-violet-300 sm:tracking-[0.22em]">
        {eyebrow}
      </p>
      <h2 className="mt-3 break-words text-3xl font-black tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">{intro}</p>
      <div className="mt-8 grid gap-4">
        {notes.map((note) => (
          <article
            key={note.title}
            className="rounded-[28px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8"
          >
            <h3 className="break-words text-xl font-black">{note.title}</h3>
            <p className="mt-3 text-base leading-7 text-zinc-400">{note.body}</p>
            <SourceList sources={[note.source]} className="mt-4" />
          </article>
        ))}
      </div>
    </section>
  );
}
