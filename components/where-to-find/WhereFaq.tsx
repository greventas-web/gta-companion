import JsonLd from "@/components/JsonLd";
import type { WhereFaq as Faq } from "@/src/data/launch/where-to-find";

export function whereFaqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export default function WhereFaq({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-10 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-8">
      <JsonLd data={whereFaqJsonLd(faqs)} />
      <h2 className="text-2xl font-black tracking-[-0.02em]">FAQ</h2>
      <dl className="mt-6 grid gap-5">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-bold text-white">{faq.question}</dt>
            <dd className="mt-1 leading-7 text-zinc-300">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
