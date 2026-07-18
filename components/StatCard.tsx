type Props = {
  value: string | number;
  label: string;
  accent?: boolean;
};

export default function StatCard({
  value,
  label,
  accent = false,
}: Props) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0B0B0D] p-8">
      <div
        className={`text-5xl font-black ${
          accent ? "text-pink-400" : "text-white"
        }`}
      >
        {value}
      </div>

      <p className="mt-3 text-lg text-zinc-400">
        {label}
      </p>
    </div>
  );
}