import { Clock3 } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export default function ComingSoonCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#09090B] p-8 transition hover:border-pink-500/40">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
        <Clock3 size={28} />
      </div>

      <h3 className="mt-8 text-3xl font-black text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        {description}
      </p>

      <div className="mt-8 inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-400">
        Coming Soon
      </div>

    </div>
  );
}