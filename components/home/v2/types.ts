export interface Trailer {
  id: number;
  title: string;
  youtubeId: string;
  releaseDate: string;
  thumbnail: string;
}

export interface HomeCharacter {
  name: string;
  role: string;
  description: string;
  image: string;
  href: string;
}

export interface HomeLocation {
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface ComingSoonItem {
  title: string;
  description: string;
}