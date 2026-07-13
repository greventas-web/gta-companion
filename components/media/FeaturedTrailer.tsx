type Props = {
  title: string;
  youtubeId: string;
  releaseDate: string;
};

export default function FeaturedTrailer({
  title,
  youtubeId,
  releaseDate,
}: Props) {
  return (
    <section className="mb-24 overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B] shadow-[0_40px_100px_rgba(0,0,0,.45)]">

      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div className="p-10 lg:p-14">

        <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-pink-400">
          Featured Trailer
        </div>

        <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-white">
          {title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-400">
          Experience the latest official Grand Theft Auto VI trailer directly
          from Rockstar Games. Every future trailer will automatically appear
          here as the game gets closer to release.
        </p>

        <div className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-zinc-500">
          Released • {releaseDate}
        </div>

      </div>

    </section>
  );
}