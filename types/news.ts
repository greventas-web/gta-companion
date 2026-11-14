export interface NewsArticle {
  id: number;

  slug: string;

  title: string;

  category: string;

  image: string;

  summary: string;

  date: string;

  paragraphs?: string[];

  points?: string[];

  sources?: { label: string; href: string }[];

  sourceName?: string;
}