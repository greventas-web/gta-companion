type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "mx-auto max-w-4xl text-center" : ""
      }`}
    >
      <div className="text-xs font-black uppercase tracking-[0.5em] text-pink-400">
        {eyebrow}
      </div>

      <h2 className="mt-5 text-6xl font-black tracking-[-0.05em] text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}