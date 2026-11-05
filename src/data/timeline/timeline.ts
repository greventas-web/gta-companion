export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

export const timeline: TimelineEvent[] = [
  {
    date: "December 4, 2023",
    title: "Trailer 1",
    description:
      "Rockstar Games reveals Grand Theft Auto VI, Jason and Lucia, and the state of Leonida.",
  },
  {
    date: "May 6, 2025",
    title: "Trailer 2",
    description:
      "Trailer 2 introduces more of Vice City, Leonida, and the story of Jason Duval and Lucia Caminos.",
  },
  {
    date: "August 27, 2026",
    title: "An Extended Look",
    description:
      "Rockstar releases a 26-minute extended look, captured from PlayStation 5 footage.",
  },
  {
    date: "October 15, 2026",
    title: "Launch Trailer",
    description:
      "The launch trailer confirms the November 19, 2026 release for PlayStation 5 and Xbox Series X|S.",
  },
  {
    date: "November 19, 2026",
    title: "Grand Theft Auto VI launches",
    description:
      "The game releases for PlayStation 5 and Xbox Series X|S. A PC date has not been announced.",
  },
];
