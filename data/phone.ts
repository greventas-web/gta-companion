import { radioNewswire } from "@/data/music";
import {
  edgeViaVice,
  famitsuSources,
  ignBigInterview,
  type CitedSource,
} from "@/src/data/gameplay/confirmed";
import { launchSources } from "@/src/data/launch/launch-facts";

export type PhoneItem = {
  slug: string;
  name: string;
  group: "App" | "Listening";
  kind: string;
  origin: string;
  related: string;
  summary: string;
  description: string;
  details: readonly string[];
  sources: readonly CitedSource[];
  links: readonly { href: string; label: string }[];
  /** Real in-game still of this app, from our own footage. */
  image?: string;
};

const famitsuAndTranslation = famitsuSources;

export const phoneIntro =
  "Rob Nelson told Famitsu that the phone is a physical object in the world, handled more like a real smartphone than the flat on-screen phone in GTA V.";

export const phoneItems: PhoneItem[] = [
  {
    slug: "snapmatic",
    name: "Snapmatic",
    image: "/images/footage/phone/snapmatic.webp",
    group: "App",
    kind: "Social app",
    origin: "Interview",
    related: "Social media",
    summary:
      "Follow people and browse their posts. Jason and Lucia do not post, because they are on the run.",
    description:
      "Snapmatic is the social app Rob Nelson named in IGN's interview. Jason and Lucia can follow people and browse, and they do not post.",
    details: [
      "In IGN's interview, Rob Nelson said: \"We have Snapmatic. You have people that you follow and you can also just browse it.\" Asked whether you can post as Jason or Lucia, he said no, because they are a couple on the run, and that you just lurk.",
      "Famitsu's interview covers the same limit without using the name Snapmatic. Nelson said you can send photographs to your partner, and you can check other people's social media, but you cannot upload photos because Jason and Lucia are being pursued.",
    ],
    sources: [ignBigInterview, ...famitsuAndTranslation],
    links: [{ href: "/phone/video-app", label: "Video app" }],
  },
  {
    slug: "ryde-me",
    name: "Ryde Me",
    image: "/images/footage/phone/ryde-me.webp",
    group: "App",
    kind: "Ride-share app",
    origin: "Interview",
    related: "Getting around",
    summary:
      "A ride-share you can stay in for the whole trip, chat during the ride, and use to cross the map.",
    description:
      "Ryde Me is the ride-share IGN's interview identifies on the phone. You can ride the whole way with the passenger and use the trip to cross the map.",
    details: [
      "During IGN's interview, Rob Nelson and Lucia take Ryde Me to a pawn shop. Nelson said you can ride the whole way with the passenger and chat with them, and that it is a good way to do fast travel.",
      "Rockstar has not published a list of pickup points.",
    ],
    sources: [ignBigInterview],
    links: [],
  },
  {
    slug: "waink",
    name: "WAINK",
    group: "App",
    kind: "Vehicle app",
    origin: "Interview",
    related: "Vehicles and money",
    summary:
      "Vice's report on the Edge interview names WAINK as the app for cars that fences want. Pay depends on the car's condition.",
    description:
      "WAINK is the phone app the Edge interview, reported by Vice, names for finding vehicles that fences want. A separate IGN passage describes a phone scanner and does not use this name.",
    details: [
      "Vice's write-up of the Edge interview says players use WAINK to locate specific vehicles that criminal fences want, and that a car's condition changes how much money you receive.",
      "In the IGN interview, Rob Nelson showed a scanner on the phone. He said it reports whether a car is locked, whether it has an alarm or a tracker, what it is worth at Pay 'n' Spray or a specialty fence, what it costs to register, and which tool it needs, such as a key cloner or a slim-jim. That passage does not call the scanner WAINK.",
      "Confirmed at launch: you scan vehicles with WAiNK to log them in the Progress menu, and 200 base-model scans count toward 100% completion.",
      "Confirmed at launch: WAiNK It scans also cover landmarks, curiosities, and sculptures. The trophy You WAiNKer! asks for WAiNK It at 100 locations.",
    ],
    sources: [
      edgeViaVice,
      ignBigInterview,
      launchSources.cultrTrophies,
      launchSources.gamespewTrophies,
      launchSources.powerpyxHundred,
    ],
    links: [
      { href: "/phone/scooter-bros", label: "Scooter Bros" },
      { href: "/vehicles", label: "Vehicles" },
    ],
  },
  {
    slug: "scooter-bros",
    name: "Scooter Bros",
    group: "App",
    kind: "Vehicle app",
    origin: "Interview",
    related: "Vehicles",
    summary:
      "Delivers your personal vehicle. The Edge interview, via Vice, says the weapons in the trunk come with it.",
    description:
      "Scooter Bros is the phone app that delivers your personal vehicle. Famitsu names it, and the Edge interview adds the weapons stored in the trunk.",
    details: [
      "Rob Nelson told Famitsu the phone includes an app called Scooter Bros that delivers your car.",
      "Vice's report on the Edge interview says Scooter Bros brings your vehicles to you, including the weapons stored in the trunk.",
      "In the IGN interview, Nelson said you can call your personal vehicle at any time, and that purchased weapons are available in the back of that vehicle. He did not say the service name in that passage.",
      "Confirmed at launch: you register vehicles to the Scooter Bros app. The trophy On the Spot asks you to register 10 vehicles.",
    ],
    sources: [
      ...famitsuAndTranslation,
      edgeViaVice,
      ignBigInterview,
      launchSources.cultrTrophies,
      launchSources.gamespewTrophies,
    ],
    links: [
      { href: "/phone/waink", label: "WAINK" },
      { href: "/vehicles", label: "Vehicles" },
    ],
  },
  {
    slug: "video-app",
    name: "Video app",
    group: "App",
    kind: "Video app",
    origin: "Interview",
    related: "Phone",
    summary:
      "Famitsu lists a video app on the phone. Rockstar has not published its name.",
    description:
      "Rob Nelson told Famitsu the phone includes a video app. Rockstar has not published the app's name or a feature list.",
    details: [
      "In the Famitsu interview, Nelson listed a video app among the phone apps, along with a fitness app, a banking app, and Scooter Bros. He did not name the video app.",
      "Asked about social posts and messaging in missions, he said livestreaming shows up in playful ways, including when you meet someone who is livestreaming. He did not say that livestreaming is the video app.",
    ],
    sources: famitsuAndTranslation,
    links: [{ href: "/phone/snapmatic", label: "Snapmatic" }],
  },
  {
    slug: "fitness-app",
    name: "Fitness app",
    image: "/images/footage/phone/fitness-app.webp",
    group: "App",
    kind: "Fitness app",
    origin: "Interview",
    related: "Phone",
    summary:
      "Famitsu lists a fitness app on the phone. Rockstar has not published its name or what it does.",
    description:
      "Rob Nelson told Famitsu the phone includes a fitness app. Rockstar has not published the app's name or what it does.",
    details: [
      "The Famitsu interview names a fitness app as one of the phone apps and stops there.",
      "Gym workouts are a separate system in that interview: three exercises, and three days in a row levels up health and strength. Nelson did not say the fitness app runs those workouts.",
    ],
    sources: famitsuAndTranslation,
    links: [{ href: "/activities", label: "Activities" }],
  },
  {
    slug: "banking-app",
    name: "BuckMe",
    group: "App",
    kind: "Banking app",
    origin: "Launch",
    related: "Money",
    summary:
      "BuckMe is the banking app. Money in your BuckMe account is safer than the cash you carry.",
    description:
      "Launch coverage names the banking app BuckMe. Story missions have you open an account and deposit cash at an ATM. Rob Nelson told Famitsu you lose the cash you carry when Wasted or Busted.",
    details: [
      "Confirmed at launch: the Chapter 1 story has a mission called Buck Me, followed by the tasks Deposit Cash Into BuckMe (at any ATM) and Save for the Future.",
      "The Famitsu interview lists a banking app among the phone apps. Nelson said you have a bank account in addition to the cash you are carrying. If you are Wasted or Busted, you lose the cash you are carrying, so he said you are better off depositing it somewhere safe.",
    ],
    sources: [
      launchSources.gtabaseMissions,
      launchSources.powerpyxWalkthrough,
      launchSources.beebomApps,
      ...famitsuAndTranslation,
    ],
    links: [{ href: "/money-methods", label: "Money" }],
  },
  {
    slug: "podcasts",
    name: "On-demand podcasts",
    group: "Listening",
    kind: "Audio",
    origin: "Rockstar Newswire",
    related: "Radio",
    summary:
      "Rockstar's October 8, 2026 newswire adds on-demand podcasts, heard through the phone in a vehicle or on foot.",
    description:
      "Grand Theft Auto VI adds on-demand podcasts. Rockstar says radio and podcasts can be heard in a vehicle or on foot, through headphones or earbuds connected to the characters' phones.",
    details: [
      "The October 8, 2026 Rockstar Newswire says players can listen to radio and on-demand podcasts in a vehicle or on foot. The audio goes through headphones or earbuds connected to the characters' phones.",
      "Rockstar has not published podcast show names. The six named radio stations are a first look, not a full dial, and they stay on the radio page.",
    ],
    sources: [radioNewswire],
    links: [
      { href: "/phone/headphones", label: "Headphones and earbuds" },
      { href: "/radio", label: "Radio stations" },
    ],
  },
  {
    slug: "headphones",
    name: "Headphones and earbuds",
    group: "Listening",
    kind: "Phone audio",
    origin: "Rockstar Newswire",
    related: "Radio",
    summary:
      "Headphones or earbuds connected to the characters' phones play radio and podcasts, in a vehicle or on foot.",
    description:
      "Rockstar says headphones or earbuds connected to the characters' phones play radio and podcasts, whether the character is in a vehicle or on foot.",
    details: [
      "The October 8, 2026 Rockstar Newswire is the official note: radio and on-demand podcasts can be heard in a vehicle or on foot, through headphones or earbuds connected to the characters' phones.",
      "Rockstar has not published a headphone model, a shop list, or a control layout for this.",
    ],
    sources: [radioNewswire],
    links: [
      { href: "/phone/podcasts", label: "On-demand podcasts" },
      { href: "/radio", label: "Radio stations" },
    ],
  },
];

export function findPhoneItem(slug: string) {
  return phoneItems.find((item) => item.slug === slug);
}
