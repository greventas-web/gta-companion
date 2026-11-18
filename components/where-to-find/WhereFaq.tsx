import FaqSection from "@/components/intent/FaqSection";
import type { WhereFaq as Faq } from "@/src/data/launch/where-to-find";

export default function WhereFaq({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return <FaqSection faqs={faqs} heading="Quick answers" />;
}
