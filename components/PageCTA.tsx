type Props = {
  title: string;
  description: string;
};

export default function PageCTA({
  title,
  description,
}: Props) {
  return (
    <section className="mt-28 rounded-[40px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-transparent to-violet-500/10 p-14 text-center">
      <h2 className="text-5xl font-black">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
        {description}
      </p>
    </section>
  );
}