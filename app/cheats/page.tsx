import type { Metadata } from "next";

import { ConfirmedEntries, LaunchPage } from "@/components/launch/LaunchBoard";
import { cheatEntries, cheatTopics, cheatsSection } from "@/src/data/launch/cheats";

export const metadata: Metadata = {
  title: cheatsSection.seoTitle,
  description: cheatsSection.seoDescription,
};

export default function CheatsPage() {
  return (
    <LaunchPage
      title={cheatsSection.title}
      description={cheatsSection.heroDescription}
      topics={cheatTopics}
    >
      <ConfirmedEntries
        entries={cheatEntries.map((entry) => ({
          id: entry.id,
          title: entry.name,
          status: entry.status,
          detail: [
            entry.input ? `Input: ${entry.input}.` : null,
            entry.effect,
            entry.platforms.length > 0
              ? `Platforms: ${entry.platforms.join(", ")}.`
              : null,
          ]
            .filter(Boolean)
            .join(" "),
        }))}
        empty="No confirmed cheat codes yet. Button combos and phone numbers are not listed until they are confirmed."
      />
    </LaunchPage>
  );
}
