import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { news } from "@/data/news";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  if (!article) return {};
  return detailMetadata(article.title, shortText(article.summary, 2) || article.title);
}

function longDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  if (!article) notFound();
  const others = news.filter((item) => item.slug !== article.slug).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }, { label: article.title }]}
        eyebrow={longDate(article.date)}
        title={article.title}
        image={article.image}
        imageAlt={article.imageAlt}
        summary={article.summary}
        facts={[{ label: "Type", value: article.category }]}
        related={others.map((item) => ({
          href: `/news/${item.slug}`,
          title: item.title,
          image: item.image,
          tag: item.category,
          eyebrow: longDate(item.date),
          kind: "news",
        }))}
        relatedHeading="More news"
      />
    </PageShell>
  );
}
