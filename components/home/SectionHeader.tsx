type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mb-14">

      <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
        {badge}
      </p>

      <h2 className="mt-4 text-5xl font-black tracking-tight text-white">
        {title}
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
        {description}
      </p>

    </div>
  );
}