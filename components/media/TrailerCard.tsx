import { Play } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  youtubeId: string;
  releaseDate: string;
  /** The video's own official thumbnail. */
  thumbnail: string;
};

/** Browse-style video card: the video's official thumbnail, opens the video on YouTube. */
export default function TrailerCard({ title, youtubeId, releaseDate, thumbnail }: Props) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[24px] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 active:scale-[0.99]"
    >
      <article className="relative aspect-video overflow-hidden rounded-[24px] border border-white/5 bg-[#08080A] transition duration-300 group-hover:-translate-y-1 group-hover:border-pink-500/40">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/20 to-transparent" />
        <span className="absolute left-4 top-4 z-[2] rounded-full border border-pink-500/30 bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-pink-300 backdrop-blur">
          Trailer
        </span>
        <div className="relative z-20 flex h-full flex-col justify-end p-5">
          <Play size={22} className="mb-3 fill-pink-400 text-pink-400" aria-hidden />
          <h3 className="break-words text-2xl font-black leading-none tracking-[-0.03em] text-white">{title}</h3>
          <p className="mt-2 text-sm font-semibold text-pink-300">{releaseDate}</p>
        </div>
      </article>
    </a>
  );
}
