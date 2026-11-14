export type Trailer = {
  id: number;
  title: string;
  youtubeId: string;
  releaseDate: string;
  thumbnail: string;
  duration: string;
};

export const trailers: Trailer[] = [
  {
    id: 4,
    title: "Grand Theft Auto VI Launch Trailer",
    youtubeId: "rz1B4B2yBZY",
    releaseDate: "October 15, 2026",
    thumbnail: "/images/official/news/trailer.webp",
    duration: "1:31",
  },
  {
    id: 5,
    title: "Grand Theft Auto VI: Pre-Load Now",
    youtubeId: "TIPlpDAsfWo",
    releaseDate: "November 10, 2026",
    thumbnail: "/images/official/news/trailer.webp",
    duration: "0:30",
  },
  {
    id: 3,
    title: "Grand Theft Auto VI: An Extended Look",
    youtubeId: "tJbzMqJGH4k",
    releaseDate: "August 27, 2026",
    thumbnail: "/images/official/news/gallery.webp",
    duration: "26:48",
  },
  {
    id: 2,
    title: "Grand Theft Auto VI Trailer 2",
    youtubeId: "VQRLujxTm3c",
    releaseDate: "May 6, 2025",
    thumbnail: "/images/official/news/trailer.webp",
    duration: "2:47",
  },
  {
    id: 1,
    title: "Grand Theft Auto VI Trailer 1",
    youtubeId: "QdBZY2fkU-0",
    releaseDate: "December 4, 2023",
    thumbnail: "/images/official/news/announcement.webp",
    duration: "1:31",
  },
];
