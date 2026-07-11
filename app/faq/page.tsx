import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Card,
  Container,
  Section,
} from "@/components/ui";

const faqs = [
  {
    question: "What is GTA Companion?",
    answer:
      "GTA Companion is a community-driven companion platform built to help players explore Grand Theft Auto VI with guides, databases, maps and tools.",
  },
  {
    question: "Is GTA Companion free?",
    answer:
      "Yes. The core platform will always be free. Optional premium features may be introduced in the future.",
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
      "The database is updated whenever Rockstar officially reveals new information.",
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