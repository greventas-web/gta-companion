import Link from "next/link";

import type { SourceRef } from "@/components/SourceLink";

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

/**
 * FAQ blocks are off: the site keeps pages to pictures and short facts.
 * Kept as a component so existing pages compile; it renders nothing.
 */
export default function FaqSection(_props: { faqs: readonly FaqItem[]; heading?: string }) {
  return null;
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
