import type { Metadata } from "next";

import { ConfirmedEntries, LaunchPage } from "@/components/launch/LaunchBoard";
import {
  moneyMethods,
  moneySection,
  moneyTopics,
} from "@/src/data/launch/money";

export const metadata: Metadata = {
  title: moneySection.seoTitle,
  description: moneySection.seoDescription,
};

export default function MoneyMakingPage() {
  return (
    <LaunchPage
      title={moneySection.title}
      description={moneySection.heroDescription}
      topics={moneyTopics}
    >
      <ConfirmedEntries
        entries={moneyMethods.map((method) => ({
          id: method.id,
          title: method.title,
          status: method.status,
          detail: method.payout
            ? `${method.summary} Payout: ${method.payout}.`
            : method.summary,
        }))}
        empty="No confirmed money methods yet. Amounts stay off this page until they can be checked."
      />
    </LaunchPage>
  );
}
