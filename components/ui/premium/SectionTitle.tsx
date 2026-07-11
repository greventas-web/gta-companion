import { ReactNode } from "react";

type Props = {
  badge: string;
  title: ReactNode;
  description: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  badge,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-20 max-w-4xl text-center"
          : "mb-20 max-w-4xl"
      }
    >
      <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-400">
        {badge}
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
        {title}
      </h2>

      <p className="mt-8 text-xl leading-9 text-zinc-400">
        {description}
      </p>
    </div>
  );
}