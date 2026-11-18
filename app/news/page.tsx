import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { news } from "@/data/news";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  "GTA 6 news",
  "Unofficial GTA 6 news: trailers, launch, music and site updates."
);

function shortDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function NewsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 news",
          "/news",
          news.map((article) => ({ name: article.title, url: `/news/${article.slug}` }))
        )}
      />
      <SimpleHero title="News" />
      <CardGrid count={news.length}>
        {news.map((article) => (
          <SimpleCard
            key={article.slug}
            href={`/news/${article.slug}`}
            title={article.title}
            image={article.image}
            imageAlt={article.imageAlt}
            eyebrow={shortDate(article.date)}
          />
        ))}
      </CardGrid>
    </PageShell>
  );
}
