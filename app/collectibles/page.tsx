import CitedNotes from "@/components/CitedNotes";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import {
  gameInformerAnimals,
  gamespotTgg,
} from "@/src/data/gameplay/confirmed";
import { animalPrintNotes } from "@/src/data/gameplay/guardian";

export const metadata = pageMetadata(
  "GTA 6 collectibles",
  "GTA 6 collectibles confirmed at launch: Collectible Cards, WAiNK It scans, meditation spots, Cocaine Flamingos, and more, with sources. Unofficial fan site."
);

const birdLog = animalPrintNotes[0];

const cultr = {
  label: "CULTR trophy list",
  href: "https://www.cultr.com/news/complete-gta-6-trophy-list-every-trophy-and-achievement/",
};
const gamespew = {
  label: "GameSpew trophy list",
  href: "https://www.gamespew.com/2026/11/heres-the-full-trophy-achievement-list-for-grand-theft-auto-vi/",
};
const powerpyx = {
  label: "PowerPyx collectible guide",
  href: "https://www.powerpyx.com/gta-6-collectible-guide-progress-database/",
};
const bigLead = {
  label: "The Big Lead collectibles guide",
  href: "https://www.thebiglead.com/gta-6-collectibles-guide-cards-styles-meteorite-chunks-landmark-scans/",
};

const launchNotes = [
  {
    title: "Collectible Cards",
    body: "Cards come in named sets, such as the Vice City Flamingos. The trophy Don’t Touch My Deck asks you to complete 3 Collectible Card sets.",
    source: cultr,
    sources: [cultr, gamespew, powerpyx, bigLead],
  },
  {
    title: "WAiNK It scans",
    body: "You scan landmarks, curiosities, and sculptures with the WAiNK phone app. The trophy You WAiNKer! asks for WAiNK It at 100 locations.",
    source: cultr,
    sources: [cultr, gamespew, powerpyx, bigLead],
  },
  {
    title: "Meditation spots",
    body: "Meditation spots are spread across Leonida. The trophy Positive Mental Attitude asks you to meditate at every spot.",
    source: cultr,
    sources: [cultr, gamespew, powerpyx, bigLead],
  },
  {
    title: "Cocaine Flamingos",
    body: "Hidden Cocaine Flamingo collectibles show up across the map.",
    source: powerpyx,
    sources: [powerpyx, bigLead],
  },
  {
    title: "Styles",
    body: "Some hair, makeup, and clothing styles are found as collectibles, including magazine styles for Jason and Lucia.",
    source: powerpyx,
    sources: [powerpyx, bigLead],
  },
  {
    title: "Vehicle discovery",
    body: "Vehicles you find are logged in the in-game progress menu. The trophy Whip It Good asks you to discover 100 vehicles.",
    source: cultr,
    sources: [cultr, gamespew, powerpyx],
  },
];

export default function Page() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 collectibles",
          "/collectibles",
          launchNotes.map((note) => ({ name: note.title }))
        )}
      />
      <PageHero
        badge="Unofficial fan notes"
        title="Collectibles"
        description="Collectible types confirmed by launch coverage and the published trophy list, plus what Rockstar said before launch."
      />

      <CitedNotes
        eyebrow="Confirmed at launch"
        title="Collectibles in the game"
        intro="Each type below is reported by at least two independent sources. Counts per type will be added when two sources agree."
        notes={launchNotes}
      />

      <CitedNotes
        eyebrow="Confirmed so far"
        title="What Rockstar said before launch"
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
