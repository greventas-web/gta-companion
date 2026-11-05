const colors: Record<string, string> = {
  piswasser: "from-amber-600 to-amber-950",
  sprunk: "from-green-500 to-emerald-950",
  ecola: "from-red-600 to-red-950",
  "burger-shot": "from-orange-600 to-red-950",
  "up-n-atom": "from-yellow-400 to-amber-800",
  "only-raw-records": "from-zinc-600 to-black",
  "high-rollerz-lifestyle": "from-yellow-200 to-amber-700",
  nine1nine: "from-fuchsia-500 to-violet-950",
};

export default function BrandMark({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  const color = colors[slug] ?? "from-zinc-700 to-black";

  return (
    <div
      className={`flex h-full w-full items-end bg-gradient-to-br ${color} p-8`}
    >
      <span className="text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl">
        {name}
      </span>
    </div>
  );
}
