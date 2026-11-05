"use client";

import { useState } from "react";

type Props = {
  videoId: string;
};

export default function LaunchTrailer({ videoId }: Props) {
  const [playing, setPlaying] = useState(false);

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black text-left"
      >
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 bg-black/35" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full bg-white px-5 py-3 text-sm font-black text-black">
            Play trailer
          </span>
        </span>
      </button>
    );
  }

  return (
    <iframe
      className="aspect-video h-full w-full rounded-2xl"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
      title="Grand Theft Auto VI Launch Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
