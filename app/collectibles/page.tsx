import CitedNotes from "@/components/CitedNotes";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";
import {
  gameInformerAnimals,
  gamespotTgg,
} from "@/src/data/gameplay/confirmed";
import { animalPrintNotes } from "@/src/data/gameplay/guardian";

export const metadata = pageMetadata(
  "GTA 6 collectibles",
  "What Rockstar has said so far about Grand Theft Auto VI collectibles: fishing challenges, tracked animals, and a bird logbook. Unofficial fan site."
);

const birdLog = animalPrintNotes[0];

export default function Page() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan notes"
        title="Collectibles"
        description="Rockstar has not published a full collectibles list. These are the notes that are public so far."
      />

      <CitedNotes
        eyebrow="Confirmed so far"
        title="What Rockstar has said so far"
        intro="A complete list is not on the Rockstar site. The notes below are from interviews Rockstar gave."
        notes={[
          {
            title: "Fishing challenges and collectibles",
            body: "Rob Nelson told TGG that fishing is catch-and-release, and that players can complete fishing challenges and collectibles. GameSpot reported the interview.",
            source: gamespotTgg,
          },
          {
            title: "Rare, Discoverable, and Legendary animals",
            body: "Game Informer's Rockstar cover story says you can track certain animals categorized as Rare, Discoverable, and Legendary. Rockstar has not named those animals.",
            source: gameInformerAnimals,
          },
          {
            title: birdLog.title,
            body: birdLog.body,
            source: birdLog.source,
          },
        ]}
      />
    </PageShell>
  );
}
