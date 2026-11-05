type Props = {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  badge,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={
        centered
          ? "mx-auto mb-20 max-w-5xl text-center"
          : "mb-20 max-w-5xl"
      }
    >
      <div
        className={`flex ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <div className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-7 py-3 shadow-[0_0_40px_rgba(236,72,153,.15)] backdrop-blur-2xl">
          <span className="text-[11px] font-black uppercase tracking-[0.42em] text-pink-400">
            {badge}
          </span>
        </div>
      </div>

      <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
        {title}
      </h2>

      <p
        className={`mt-8 text-lg leading-9 text-zinc-400 lg:text-[20px] ${
          centered ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {description}
      </p>

      <div
        className={`mt-10 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent ${
          centered ? "mx-auto w-44" : "w-44"
        }`}
      />
    </div>
  );
}