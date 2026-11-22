import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { news } from "@/data/news";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { shortDate } from "@/lib/simple/text";

export const metadata = pageMetadata(
  "GTA 6 news",
  "Unofficial GTA 6 news: Rockstar trailers, the launch, the album and site updates. Not affiliated with Rockstar Games."
);

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
            tag={article.category}
            eyebrow={shortDate(article.date)}
            kind="news"
          />
        ))}
      </CardGrid>
    </PageShell>
  );
}
