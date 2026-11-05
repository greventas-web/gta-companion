import NewsDatabase from "@/components/NewsDatabase";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PageStats from "@/components/PageStats";

import { news } from "@/data/news";

export default function NewsPage() {
  const categories = new Set(
    news.map((article) => article.category)
  ).size;

  return (
    <PageShell>

      <PageHero
        badge="Unofficial fan notes"
        title="News"
        description="Stay up to date with official GTA VI announcements, Rockstar Games Newswire posts, trailers, screenshots and every verified update as soon as it is released."
      />

      <PageStats
        stats={[
          {
            value: news.length,
            label: "News Articles",
          },
          {
            value: categories,
            label: "Categories",
          },
          {
            value: "Official",
            label: "Rockstar Sources",
            accent: true,
          },
        ]}
      />

      <NewsDatabase />

      <PageCTA
        title="Never Miss A GTA VI Update"
        description="Every official Rockstar announcement, trailer, screenshot and Newswire article will be added to GTA Companion with detailed summaries, media and related content."
      />

    </PageShell>
  );
}