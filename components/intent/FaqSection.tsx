import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { SourceList, type SourceRef } from "@/components/SourceLink";

export type FaqItem = {
  question: string;
  answer: string;
  sources?: readonly SourceRef[];
};

export function faqPageJsonLd(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function FaqSection({
  faqs,
  heading = "Questions",
}: {
  faqs: readonly FaqItem[];
  heading?: string;
}) {
  return (
    <section className="mt-16">
      <JsonLd data={faqPageJsonLd(faqs)} />
      <h2 className="text-3xl font-black tracking-[-0.03em]">{heading}</h2>
      <div className="mt-8 grid gap-6">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
          >
            <h3 className="text-2xl font-black">{faq.question}</h3>
            <p className="mt-4 leading-8 text-zinc-400">{faq.answer}</p>
            {faq.sources && faq.sources.length > 0 ? (
              <SourceList className="mt-4" sources={faq.sources} />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function RelatedLinks({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  if (links.length === 0) return null;

  return (
    <p className="mt-10 text-zinc-400">
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? " · " : null}
          <Link
            href={link.href}
            className="underline decoration-white/20 underline-offset-4 hover:text-violet-200"
          >
            {link.label}
          </Link>
        </span>
      ))}
    </p>
  );
}
