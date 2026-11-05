type Props = {
  title: string;
  youtubeId: string;
  releaseDate: string;
};

export default function TrailerCard({
  title,
  youtubeId,
  releaseDate,
}: Props) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[#09090B] transition duration-300 hover:border-pink-500/40">

      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div className="p-8">

        <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
          {releaseDate}
        </p>

        <h3 className="mt-4 text-3xl font-black text-white">
          {title}
        </h3>

        <p className="mt-4 text-zinc-400">
          Watch the official trailer directly from Rockstar Games' YouTube channel.
        </p>

      </div>

    </article>
  );
}