import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

const faqs = [
  {
    question: "When does GTA VI come out?",
    answer:
      "Rockstar Games and Take-Two set Grand Theft Auto VI for November 19, 2026 on PlayStation 5 and Xbox Series X|S. Digital pre-orders can begin pre-loading on November 10, 2026. A PC release date has not been announced.",
  },
  {
    question: "How much does GTA VI cost?",
    answer:
      "Take-Two announced the standard edition at $79.99 in the United States. The Ultimate Edition is $99.99 and adds vehicles, weapons, apparel, and story content for Jason and Lucia. Purchases before November 20, 2026 include the Vintage Vice City Pack, and digital pre-orders include one month of GTA+.",
  },
  {
    question: "What is in each edition?",
    answer:
      "Both editions include the game. Purchases before November 20, 2026 add the Vintage Vice City Pack: the '55 Vapid Stanier, the Shore Court garage, outfits and hairstyles, and a tropical weapon pattern. Digital pre-orders also include one month of GTA+. The Ultimate Edition, at $99.99 in the United States, adds named vehicles, the Hawk & Little Morgan revolvers, Jason's Girardi ES9, Lucia's Klose K17, and extra shops. The full list is on the Editions page.",
  },
  {
    question: "Where can I buy or pre-order it?",
    answer:
      "Take-Two says the game is available from the PlayStation Store, the Microsoft Store, the Rockstar Games Store, and other retailers. The physical box contains a download code.",
  },
  {
    question: "Who are the main characters?",
    answer:
      "The two playable protagonists are Jason Duval and Lucia Caminos. Their story is set in Vice City and the state of Leonida.",
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
    question: "Will there be a mobile app?",
    answer:
      "Yes. iOS and Android apps are planned after the web platform is established.",
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
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}