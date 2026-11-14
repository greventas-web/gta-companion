import PageTitle from "@/components/PageTitle";
import { SourceList, type SourceRef } from "@/components/SourceLink";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";
import {
  characterSwitching,
  esrbRating,
  esrbSources,
  gameplaySources,
  playstationStandard,
  playstationUltimate,
  rockstarSupportEditions,
  xboxStandard,
  xboxUltimate,
  xboxUpgrade,
  gameplaySystems,
  relationshipSystem,
  switchingSources,
} from "@/src/data/gameplay/confirmed";
import {
  guardianApart,
  guardianCharacterSources,
  guardianHands,
  guardianRelationship,
  guardianSwitching,
} from "@/src/data/gameplay/guardian";

const faqs: {
  question: string;
  answer: string;
  points?: readonly string[];
  sources?: readonly SourceRef[];
}[] = [
  {
    question: "When does GTA VI come out?",
    answer:
      "Rockstar Games and Take-Two set Grand Theft Auto VI for November 19, 2026 on PlayStation 5 and Xbox Series X|S. Digital pre-orders can begin pre-loading on November 10, 2026. A PC release date has not been announced.",
  },
  {
    question: "How much does GTA VI cost?",
    answer:
      `The PlayStation Store lists the Standard Edition at $79.99 (US). The PlayStation Store and the Xbox Store list the Ultimate Edition at $99.99 (US). Standard owners can upgrade later. The Xbox Store lists the Ultimate Edition Upgrade at $20.00 (US). There is no physical Ultimate Edition. Check your store; PlayStation and Xbox list November 19, 2026 at 23:59:59. 1 month of GTA+ included with digital pre-orders. It auto-renews and isn't included with physical pre-orders.`,
    sources: [
      playstationStandard,
      playstationUltimate,
      xboxUltimate,
      xboxUpgrade,
      rockstarSupportEditions,
    ],
  },
  {
    question: "What is in each edition?",
    answer:
      `Both editions include the game. There is no physical Ultimate Edition. The Vintage Vice City Pack adds the '55 Vapid Stanier, the Shore Court garage, outfits and hairstyles, and a tropical weapon pattern. Check your store; PlayStation and Xbox list November 19, 2026 at 23:59:59. 1 month of GTA+ included with digital pre-orders. It auto-renews and isn't included with physical pre-orders. The Ultimate Edition adds the Hawk & Little Morgan Revolvers, the '67 Vapid Dominator Buggy and Garage, Electric Fang Tattoo Parlor, Jason's Girardi ES9, Lucia's Klose K17, and other items. The full list is on the Editions page.`,
    sources: [rockstarSupportEditions, playstationUltimate, xboxStandard],
  },
  {
    question: "Where can I buy or pre-order it?",
    answer:
      "Take-Two says the game is available from the PlayStation Store, the Microsoft Store, the Rockstar Games Store, and other retailers. The physical box contains a download code.",
  },
  {
    question: "Who are the main characters?",
    answer: `The two playable protagonists are Jason Duval and Lucia Caminos. Their story is set in Vice City and the state of Leonida. ${characterSwitching} ${relationshipSystem} Those notes are from Rob Nelson's Famitsu interview. ${guardianSwitching} ${guardianApart} ${guardianRelationship} ${guardianHands}`,
    sources: [...switchingSources, ...guardianCharacterSources],
  },
  {
    question: "What gameplay systems has Rockstar confirmed?",
    answer:
      "Rob Nelson has described these systems in interviews, including Famitsu, IGN, and Edge.",
    points: gameplaySystems,
    sources: gameplaySources,
  },
  {
    question: "What is the age rating?",
    answer: esrbRating,
    sources: esrbSources,
  },
  {
    question: "What is GTA Companion?",
    answer:
      "GTA Companion is an independent companion platform that organizes officially released Rockstar Games information into one fast, beautiful and easy-to-use experience. Our goal is to help players explore Grand Theft Auto VI through databases, guides, news and more.",
  },
  {
    question: "Does GTA Companion cost anything to use?",
    answer:
      "You can use the site without paying. Optional paid features may be introduced later.",
  },
  {
    question: "Is this affiliated with Rockstar Games?",
    answer:
      "No. GTA Companion is an independent fan project and is not affiliated with or endorsed by Rockstar Games or Take-Two Interactive.",
  },
  {
    question: "How often is the database updated?",
    answer:
      "The database is updated whenever Rockstar Games officially releases new information.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Support</Badge>

          <PageTitle
            title="Frequently Asked Questions"
            description="Answers to the most common questions about GTA Companion."
          />

          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <Card
                key={faq.question}
                className="rounded-[32px] border-zinc-800 bg-zinc-900 p-8"
              >
                <h2 className="text-2xl font-black">
                  {faq.question}
                </h2>

                <p className="mt-5 text-lg leading-8 text-zinc-400">
                  {faq.answer}
                </p>
                {faq.points && faq.points.length > 0 ? (
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-zinc-400">
                    {faq.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                {faq.sources && faq.sources.length > 0 ? (
                  <SourceList sources={faq.sources} className="mt-5" />
                ) : null}
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}