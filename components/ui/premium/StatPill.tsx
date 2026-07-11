type Props = {
  value: string;
  label: string;
};

export default function StatPill({
  value,
  label,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-7 backdrop-blur-xl transition duration-300 hover:border-pink-500/40">

      <h3 className="text-4xl font-black">
        {value}
      </h3>

      <p className="mt-2 text-zinc-400">
        {label}
      </p>

    </div>
  );
}