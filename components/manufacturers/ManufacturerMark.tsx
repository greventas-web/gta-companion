import { manufacturerMarkFor } from "@/lib/media/manufacturerMarks";

type Props = {
  name: string;
  slug: string;
  variant?: "badge" | "lockup";
};

const frames = {
  round: "rounded-full",
  square: "rounded-xl",
  cut: "rounded-md",
};

export default function ManufacturerMark({
  name,
  slug,
  variant = "badge",
}: Props) {
  const mark = manufacturerMarkFor(slug, name);
  const lockup = variant === "lockup";
  const compactName = name.length > 11;

  return (
    <div
      className={
        lockup
          ? "flex w-full flex-col items-center text-center"
          : "inline-flex max-w-full items-center gap-3 rounded-2xl border border-white/15 bg-black/70 py-1.5 pl-1.5 pr-4 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-xl"
      }
    >
      <span
        className={`flex shrink-0 items-center justify-center border border-pink-400/50 bg-gradient-to-br from-pink-500/35 via-fuchsia-500/15 to-violet-500/25 font-black tracking-tight text-white ${frames[mark.frame]} ${
          lockup ? "h-28 w-28 text-4xl" : "h-10 w-10 text-[11px]"
        }`}
      >
        {mark.monogram}
      </span>

      <span
        className={
          lockup
            ? "mt-6 text-3xl font-black uppercase tracking-[0.22em] text-white"
            : `min-w-0 truncate font-black uppercase text-white ${
                compactName
                  ? "text-[11px] tracking-[0.12em]"
                  : "text-sm tracking-[0.18em]"
              }`
        }
      >
        {name}
      </span>

      {lockup && (
        <span className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
      )}
    </div>
  );
}
