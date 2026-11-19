/**
 * Quick answer guides for the most searched GTA 6 questions at launch
 * (Google suggest, November 19, 2026). Each page answers one question in a
 * few short sentences. Facts were checked before writing against two or more
 * reputable guides, or one outlet that played the release build. The fact
 * check lives outside the repo (launch-prep/seo-guides/factcheck.md); public
 * pages never list sources. Nothing past Chapter 3.
 */

export type QuickGuideLink = {
  href: string;
  title: string;
  line?: string;
  image?: string;
  imageAlt?: string;
  kind?: string;
};

export type QuickGuide = {
  slug: string;
  /** SEO title, without the site name. */
  title: string;
  /** Short page heading. */
  heading: string;
  /** Meta description. Starts or ends with "Unofficial". */
  description: string;
  keywords: string[];
  /** Existing confirmed site image or official Rockstar image. Blank card when missing. */
  image?: string;
  imageAlt?: string;
  /** Icon kind for cards. */
  kind: string;
  /** 2 to 4 short plain sentences that answer the question. */
  answer: string[];
  price?: string;
  facts?: { label: string; value: string }[];
  /** Questions for FAQ schema. Answers repeat the page text. */
  faqs: { question: string; answer: string }[];
  related: QuickGuideLink[];
};

const JASONS_PLACE = "/images/footage/properties/jasons-place.webp";
const PAY_N_SPRAY = "/images/footage/places/pay-n-spray-key-lento.webp";
const PAY_N_SPRAY_HAMLET = "/images/footage/places/pay-n-spray-hamlet.webp";
const RYDE_ME = "/images/footage/phone/ryde-me.webp";
const KEY_LENTO = "/images/footage/locations/key-lento.webp";
const CHUCKS = "/images/footage/brands/ammu-nation.webp";
const JASON_AND_LUCIA = "/images/official/media/artwork-jason-and-lucia-01-jason-and-lucia-01-landscape.webp";
const FLASH_FM = "/images/official/radio/flash-background.webp";

const L = {
  save: { href: "/guides/how-to-save", title: "How to save", kind: "mission" },
  replay: { href: "/guides/replay-missions", title: "Replay missions?", kind: "mission" },
  register: { href: "/guides/register-car", title: "Register a car", image: PAY_N_SPRAY, imageAlt: "Pay 'n' Spray in Key Lento", kind: "vehicle" },
  impound: { href: "/guides/impounded-car", title: "Impounded car", kind: "vehicle" },
  callCar: { href: "/guides/call-your-car", title: "Call your car", kind: "phone" },
  keyCloner: { href: "/guides/key-cloner", title: "Key cloner", kind: "vehicle" },
  slimJim: { href: "/guides/slim-jim", title: "Slim jim", kind: "vehicle" },
  buyCar: { href: "/guides/buy-a-car", title: "Buy a car?", kind: "vehicle" },
  buyHouse: { href: "/guides/buy-a-house", title: "Buy a house?", image: JASONS_PLACE, imageAlt: "Jason's place in Key Lento", kind: "property" },
  bank: { href: "/guides/bank-account-atm", title: "Bank account and ATMs", kind: "money" },
  fastTravel: { href: "/guides/fast-travel", title: "Fast travel", image: RYDE_ME, imageAlt: "The RydeMe app on Jason's phone", kind: "phone" },
  railing: { href: "/guides/fix-railing", title: "Fix the railing", image: JASONS_PLACE, imageAlt: "Jason's place in Key Lento", kind: "property" },
  mask: { href: "/guides/mask", title: "Get a mask", image: CHUCKS, imageAlt: "Chuck's Tackle & Shot in Key Lento", kind: "clothing" },
  clothes: { href: "/guides/change-clothes", title: "Change clothes", kind: "clothing" },
  heal: { href: "/guides/how-to-heal", title: "How to heal", kind: "activity" },
  focus: { href: "/guides/focus", title: "Focus", kind: "activity" },
  switchChar: { href: "/guides/switch-characters", title: "Switch characters", image: JASON_AND_LUCIA, imageAlt: "Jason and Lucia, official Rockstar artwork", kind: "character" },
  firstPerson: { href: "/guides/first-person", title: "First person?", kind: "activity" },
  radio: { href: "/guides/change-radio-station", title: "Change the radio", image: FLASH_FM, imageAlt: "Flash FM, official Rockstar art", kind: "radio" },
  online: { href: "/guides/online", title: "GTA 6 Online?", kind: "activity" },
  tips: { href: "/guides/beginner-tips", title: "What to do first", image: KEY_LENTO, imageAlt: "Key Lento", kind: "location" },
  // Existing site pages
  wanted: { href: "/wanted-system", title: "Wanted system", kind: "activity" },
  payNSpray: { href: "/where-to-find/pay-n-spray", title: "Pay 'n' Spray shops", image: PAY_N_SPRAY_HAMLET, imageAlt: "Pay 'n' Spray in Hamlet", kind: "mod" },
  garages: { href: "/where-to-find/garages", title: "Garages", kind: "garage" },
  scooterBros: { href: "/phone/scooter-bros", title: "Scooter Bros", kind: "phone" },
  buckMe: { href: "/phone/banking-app", title: "BuckMe", kind: "phone" },
  waink: { href: "/phone/waink", title: "WAiNK", kind: "phone" },
  rydeMe: { href: "/phone/ryde-me", title: "RydeMe", image: RYDE_ME, imageAlt: "The RydeMe app on Jason's phone", kind: "phone" },
  jasonsPlace: { href: "/properties/jasons-place", title: "Jason's place", image: JASONS_PLACE, imageAlt: "Jason's place in Key Lento", kind: "property" },
  missions: { href: "/missions", title: "Missions", kind: "mission" },
  moses: { href: "/missions/moses", title: "Moses", line: "Chapter 2", kind: "mission" },
  buckMeMission: { href: "/missions/buck-me", title: "Buck Me", line: "Chapter 1", kind: "mission" },
  zorrusso: { href: "/missions/steal-the-zorrusso-for-randy", title: "Steal The Zorrusso For Randy", line: "Chapter 3", kind: "mission" },
  downToEarth: { href: "/missions/down-to-earth", title: "Down To Earth", line: "Chapter 1", kind: "mission" },
  sellMoses: { href: "/money-methods/sell-cars-to-moses", title: "Sell cars to Moses", kind: "money" },
  randy: { href: "/money-methods/randy-wish-list", title: "Randy's wish list", kind: "money" },
  money: { href: "/money-methods", title: "Make money", kind: "money" },
  gunStores: { href: "/ammu-nation-locations", title: "Ammu-Nation stores", image: CHUCKS, imageAlt: "Ammu-Nation sign at Chuck's Tackle & Shot", kind: "gunstore" },
  clothing: { href: "/where-to-find/clothing-stores", title: "Clothing stores", kind: "clothingstore" },
  radioHub: { href: "/radio", title: "Radio stations", image: FLASH_FM, imageAlt: "Flash FM, official Rockstar art", kind: "radio" },
  cheats: { href: "/cheats", title: "Cheats", kind: "cheat" },
  characters: { href: "/characters", title: "Characters", kind: "character" },
  howLong: { href: "/how-long-is-gta-6", title: "How long is GTA 6?", kind: "mission" },
  weapons: { href: "/weapons", title: "Weapons", kind: "weapon" },
  fastestCars: { href: "/fastest-cars", title: "Fastest cars", kind: "vehicle" },
} satisfies Record<string, QuickGuideLink>;

export const quickGuides: QuickGuide[] = [
  {
    slug: "how-to-save",
    title: "GTA 6 How to Save: Manual Save, Autosave and 15 Slots",
    heading: "How to save in GTA 6",
    description:
      "How to save in GTA 6: pause, open Game, pick Save Game and a slot. 15 manual slots plus one autosave. No saving in missions or the Prologue. Unofficial guide.",
    keywords: ["GTA 6 how to save", "GTA 6 save game", "GTA 6 how to save game", "GTA 6 autosave", "GTA 6 save slots", "GTA 6 save greyed out"],
    kind: "mission",
    answer: [
      "Press Options (PS5) or Menu (Xbox), open Game, pick Save Game and choose a slot.",
      "You get 15 manual slots plus one autosave slot that updates after missions.",
      "Save Game is greyed out during the Prologue and during any mission.",
      "Using a cheat turns off saving for the rest of that session.",
    ],
    facts: [
      { label: "Where", value: "Pause > Game > Save Game" },
      { label: "Manual slots", value: "15" },
      { label: "Autosave", value: "1 slot, after missions" },
      { label: "Greyed out", value: "Prologue and missions" },
    ],
    faqs: [
      { question: "How do you save in GTA 6?", answer: "Press Options on PS5 or Menu on Xbox, open the Game tab, pick Save Game and choose one of the 15 slots. It works anywhere in the open world." },
      { question: "Does GTA 6 autosave?", answer: "Yes. GTA 6 keeps one autosave slot that updates after missions. Each new autosave replaces the last one." },
      { question: "Why is Save Game greyed out in GTA 6?", answer: "You can't save during the Prologue or during a mission. Using a cheat also turns off saving for that session." },
    ],
    related: [L.replay, L.tips, L.missions, L.cheats],
  },
  {
    slug: "fix-railing",
    title: "GTA 6 How to Fix the Railing (All 4 House Repairs)",
    heading: "How to fix the railing",
    description:
      "GTA 6 fix railing location: behind Jason's house in Key Lento, down at the outdoor gym, face the house and fix the gap by the ladder. All 4 repairs. Unofficial.",
    keywords: ["GTA 6 fix railing", "GTA 6 how to fix railing", "GTA 6 where is the railing", "GTA 6 railing location", "GTA 6 house repair", "GTA 6 fix steps", "GTA 6 fix leaky roof"],
    image: JASONS_PLACE,
    imageAlt: "Jason's place in Key Lento",
    kind: "property",
    answer: [
      "Go behind Jason's house in Key Lento and take the stairs down to the outdoor gym.",
      "Turn to face the house. The gap in the railing is next to the ladder.",
      "Hold Triangle or Y to fix it. Do all four repairs before Lucia comes home.",
    ],
    facts: [
      { label: "Railing", value: "Outdoor gym, next to the ladder" },
      { label: "Steps", value: "Wood pile by the front stairs" },
      { label: "Leaky roof", value: "Ladder by the front door" },
      { label: "Wall", value: "Planks in the bedroom" },
    ],
    faqs: [
      { question: "Where is the railing to fix in GTA 6?", answer: "Behind Jason's house in Key Lento. Go down to the outdoor gym, face the house, and the gap in the railing is next to the ladder." },
      { question: "What are the house repairs in GTA 6?", answer: "There are four: the railing, the front steps, the leaky roof and the bedroom wall. Do them before Lucia comes home." },
    ],
    related: [L.jasonsPlace, L.tips, L.focus, L.missions],
  },
  {
    slug: "register-car",
    title: "GTA 6 How to Register a Car and Keep Stolen Cars",
    heading: "How to register a car",
    description:
      "How to keep stolen cars in GTA 6: register them with Moses in Chapter 2 or at any Pay 'n' Spray in Chapter 3. Fee depends on the car. Unofficial guide.",
    keywords: ["GTA 6 register car", "GTA 6 how to register a car", "GTA 6 keep stolen cars", "GTA 6 how to save cars", "GTA 6 register stolen cars", "GTA 6 registration price"],
    image: PAY_N_SPRAY,
    imageAlt: "Pay 'n' Spray in Key Lento",
    kind: "vehicle",
    answer: [
      "A stolen car is only yours once you register it.",
      "From Chapter 2, Moses in Port Gellhorn registers cars with no tracker after a respray.",
      "From Chapter 3, any Pay 'n' Spray registers cars with a standard tracker. Randy takes the high-end cars.",
      "Scan the car with WAiNK first to see its tracker and fee. You need an open garage spot.",
    ],
    facts: [
      { label: "Chapter 2", value: "Moses, no tracker" },
      { label: "Chapter 3", value: "Any Pay 'n' Spray" },
      { label: "Fee", value: "Depends on the car, up to $20,000+" },
      { label: "Needs", value: "An open garage spot" },
    ],
    faqs: [
      { question: "How do you keep stolen cars in GTA 6?", answer: "Register them. From Chapter 2 Moses registers cars with no tracker, and from Chapter 3 any Pay 'n' Spray registers cars with a standard tracker." },
      { question: "How much does it cost to register a car in GTA 6?", answer: "It depends on the car. Most cost a few thousand dollars and high-end cars can cost over $20,000. The WAiNK app shows the fee before you steal it." },
    ],
    related: [L.payNSpray, L.waink, L.garages, L.moses, L.callCar, L.buyCar],
  },
  {
    slug: "key-cloner",
    title: "GTA 6 Key Cloner: How to Unlock It and Steal Keyless Cars",
    heading: "Key cloner",
    description:
      "How to get the key cloner in GTA 6: it comes in the Chapter 3 mission Steal The Zorrusso For Randy and opens and starts keyless cars. Unofficial guide.",
    keywords: ["GTA 6 key cloner", "GTA 6 how to get key cloner", "GTA 6 how to unlock key cloner", "GTA 6 clone key", "GTA 6 keyless cars"],
    kind: "vehicle",
    answer: [
      "You get the key cloner in the Chapter 3 story mission Steal The Zorrusso For Randy.",
      "It installs on your phone and opens and starts keyless cars.",
      "Scan a car with WAiNK to see if it needs the cloner. Many keyless cars have an advanced tracker, so keep your speed up or the police get your location.",
    ],
    facts: [
      { label: "Unlock", value: "Chapter 3 story mission" },
      { label: "Opens", value: "Keyless cars" },
      { label: "Watch out", value: "Advanced trackers" },
    ],
    faqs: [
      { question: "How do you get the key cloner in GTA 6?", answer: "It's a story unlock in the Chapter 3 mission Steal The Zorrusso For Randy. It installs on your phone and stays for good." },
      { question: "What does the key cloner do in GTA 6?", answer: "It opens and starts keyless cars, which you can't take any other way. The WAiNK app shows which cars need it." },
    ],
    related: [L.zorrusso, L.randy, L.slimJim, L.waink, L.register, L.fastestCars],
  },
  {
    slug: "first-person",
    title: "Does GTA 6 Have First Person? How to Go First Person",
    heading: "First person in GTA 6",
    description:
      "Does GTA 6 have first person? No full first-person mode. Hold L2 or LT and click the right stick for a still eye-level view. Unofficial guide.",
    keywords: ["GTA 6 first person", "GTA 6 how to go first person", "GTA 6 first person mode", "GTA 6 is there first person", "GTA 6 change camera", "GTA 6 first person driving"],
    kind: "activity",
    answer: [
      "GTA 6 has no full first-person mode at launch.",
      "Stand still, hold L2 or LT and click the right stick for an eye-level view. You can look and zoom, but not move.",
      "Click the right stick while aiming a scoped gun to look down the sights.",
      "Driving stays third person. Hold Down on the D-pad in a car to pick a camera distance.",
    ],
    facts: [
      { label: "First-person mode", value: "No" },
      { label: "Eye-level view", value: "Hold L2/LT + click R3" },
      { label: "Car cameras", value: "Hold Down on the D-pad" },
    ],
    faqs: [
      { question: "Does GTA 6 have first person?", answer: "No. There is no full first-person mode at launch. You can only use a still eye-level view and scoped aiming." },
      { question: "How do you go first person in GTA 6?", answer: "Stand still, hold L2 on PS5 or LT on Xbox and click the right stick. You can look around and zoom, but you can't walk." },
    ],
    related: [L.radio, L.focus, L.weapons, L.tips],
  },
  {
    slug: "change-radio-station",
    title: "GTA 6 How to Change the Radio Station and Turn It On",
    heading: "How to change the radio",
    description:
      "How to change the radio station in GTA 6: in a vehicle, hold Left on the D-pad and pick a station with the right stick or L1 and R1. Unofficial guide.",
    keywords: ["GTA 6 how to change radio station", "GTA 6 how to turn on radio", "GTA 6 change radio", "GTA 6 radio controls", "GTA 6 how to use radio in car"],
    image: FLASH_FM,
    imageAlt: "Flash FM, official Rockstar art",
    kind: "radio",
    answer: [
      "In a vehicle, hold Left on the D-pad to open the radio wheel.",
      "Pick a station with the right stick, or with L1 and R1 (LB and RB on Xbox).",
      "Press X or A on the wheel to turn the radio on or off. Settings > Audio > Vehicle Radio turns it on by itself.",
    ],
    facts: [
      { label: "Open radio", value: "Hold Left on the D-pad" },
      { label: "Switch station", value: "Right stick or L1/R1" },
      { label: "On or off", value: "X / A" },
    ],
    faqs: [
      { question: "How do you change the radio station in GTA 6?", answer: "Get in a vehicle, hold Left on the D-pad and pick a station with the right stick or L1 and R1 (LB and RB on Xbox)." },
      { question: "How do you turn on the radio in GTA 6?", answer: "Hold Left on the D-pad in a vehicle and press X on PS5 or A on Xbox. You can also set Vehicle Radio to On in the Audio settings." },
    ],
    related: [L.radioHub, L.firstPerson, L.tips, L.fastTravel],
  },
  {
    slug: "impounded-car",
    title: "GTA 6 Impounded Car: How to Get Your Car Back",
    heading: "Get your car back",
    description:
      "GTA 6 car impounded? Request it in the Scooter Bros app for a fee, or find the impound lot in the map's Personal tab and take it back. Unofficial guide.",
    keywords: ["GTA 6 impound", "GTA 6 how to get car out of impound", "GTA 6 how to get my car back", "GTA 6 impound lot location", "GTA 6 where is my car", "GTA 6 car impounded"],
    kind: "vehicle",
    answer: [
      "Police impound your registered car if you're Wasted or Busted in it, or ditch it during a chase.",
      "Open Scooter Bros on your phone, pick the car and request it. It costs a fee.",
      "Or open the map, go to the Personal tab, find the impound lot and steal the car back.",
      "In Chapter 1, before Scooter Bros, call Joey from your contacts.",
    ],
    facts: [
      { label: "Quick fix", value: "Scooter Bros app, for a fee" },
      { label: "Find it", value: "Map > Personal tab" },
      { label: "Chapter 1", value: "Call Joey" },
    ],
    faqs: [
      { question: "How do you get your car out of impound in GTA 6?", answer: "Open the Scooter Bros app, pick the impounded car and request it for a fee. You can also find the impound lot in the map's Personal tab and steal it back." },
      { question: "Where is my car in GTA 6?", answer: "Open the map and go to the Personal tab. It marks your personal vehicle and the last car you left." },
    ],
    related: [L.callCar, L.scooterBros, L.register, L.wanted],
  },
  {
    slug: "bank-account-atm",
    title: "GTA 6 Bank Account and ATM Locations: How to Deposit Cash",
    heading: "Bank account and ATMs",
    description:
      "How to get a bank account in GTA 6: finish the Chapter 1 mission Buck Me. Find an ATM with BuckMe's ATM Finder and deposit your cash. Unofficial guide.",
    keywords: ["GTA 6 bank account", "GTA 6 how to get a bank account", "GTA 6 ATM locations", "GTA 6 how to use ATM", "GTA 6 where to find ATM", "GTA 6 deposit cash"],
    kind: "money",
    answer: [
      "You open your BuckMe bank account in the Chapter 1 story mission Buck Me.",
      "To find an ATM, open BuckMe on your phone and pick ATM Finder. It sets a route to the closest one.",
      "Press Triangle or Y at the ATM to deposit or withdraw. You lose the cash you carry when Wasted or Busted, so bank it.",
    ],
    facts: [
      { label: "Unlock", value: "Buck Me, Chapter 1" },
      { label: "Find an ATM", value: "BuckMe > ATM Finder" },
      { label: "Max cash on you", value: "$20,000" },
    ],
    faqs: [
      { question: "How do you get a bank account in GTA 6?", answer: "Finish the Chapter 1 story mission Buck Me. It opens your BuckMe account and adds the app to your phone." },
      { question: "Where are ATMs in GTA 6?", answer: "Open BuckMe on your phone and pick ATM Finder to get a route to the closest one. The map's Personal tab also lists every deposit spot." },
    ],
    related: [L.buckMe, L.buckMeMission, L.money, L.fastTravel],
  },
  {
    slug: "mask",
    title: "GTA 6 Where to Buy a Mask and How to Wear It",
    heading: "Where to get a mask",
    description:
      "Where to buy a mask in GTA 6: Chuck's Tackle & Shot in Key Lento sells gaiters that work as masks, and many Ammu-Nations have face coverings. Unofficial.",
    keywords: ["GTA 6 mask", "GTA 6 where to buy a mask", "GTA 6 how to get a mask", "GTA 6 mask location", "GTA 6 mask store", "GTA 6 bandana"],
    image: CHUCKS,
    imageAlt: "Chuck's Tackle & Shot in Key Lento",
    kind: "clothing",
    answer: [
      "The first place to buy one is Chuck's Tackle & Shot in Key Lento, east of Jason's house.",
      "It sells gaiters that work as a mask. Many Ammu-Nation stores also sell face coverings.",
      "To wear it, hold L1 or LB, move to Items with R1 or RB and pick the mask slot. Use the D-pad to pull it up or down.",
    ],
    facts: [
      { label: "First store", value: "Chuck's Tackle & Shot, Key Lento" },
      { label: "Also", value: "Many Ammu-Nations" },
      { label: "Wear it", value: "Hold L1/LB > Items" },
    ],
    faqs: [
      { question: "Where do you buy a mask in GTA 6?", answer: "Chuck's Tackle & Shot in Key Lento, east of Jason's house, sells gaiters that work as a mask. Many Ammu-Nation stores sell face coverings too." },
      { question: "How do you wear a mask in GTA 6?", answer: "Hold L1 or LB for the loadout, move to Items with R1 or RB and pick the mask slot. The D-pad changes how you wear it." },
    ],
    related: [L.gunStores, L.wanted, L.clothes, L.clothing],
  },
  {
    slug: "switch-characters",
    title: "GTA 6 How to Switch Characters and Play as Lucia",
    heading: "Switch between Jason and Lucia",
    description:
      "How to switch characters in GTA 6: press Right on the D-pad once both are open in Chapter 2. When you can play as Lucia, spoiler-light. Unofficial guide.",
    keywords: ["GTA 6 switch characters", "GTA 6 how to switch characters", "GTA 6 how to play as Lucia", "GTA 6 unlock Lucia", "GTA 6 do you play as both characters", "GTA 6 can you play as Lucia"],
    image: JASON_AND_LUCIA,
    imageAlt: "Jason and Lucia, official Rockstar artwork",
    kind: "character",
    answer: [
      "Press Right on the D-pad to switch between Jason and Lucia.",
      "Early on you play Jason in the open world. Lucia joins some Chapter 1 missions, and you first explore as her after Chapter 1.",
      "You can switch back and forth during Chapter 2. A greyed-out character is busy for a story reason.",
    ],
    facts: [
      { label: "Button", value: "Right on the D-pad" },
      { label: "Both open", value: "During Chapter 2" },
      { label: "Greyed out", value: "Busy for a story reason" },
    ],
    faqs: [
      { question: "How do you switch characters in GTA 6?", answer: "Press Right on the D-pad and pick Jason or Lucia. It works once both are open to you during Chapter 2." },
      { question: "When can you play as Lucia in GTA 6?", answer: "Lucia is playable in some Chapter 1 missions. You first explore the open world as her after Chapter 1." },
    ],
    related: [L.characters, L.missions, L.howLong, L.save],
  },
  {
    slug: "replay-missions",
    title: "Can You Replay Missions in GTA 6? No, Here's What to Do",
    heading: "Can you replay missions?",
    description:
      "Can you replay missions in GTA 6? No. There is no mission replay menu. Keep a manual save before big missions so you can go back. Unofficial guide.",
    keywords: ["GTA 6 replay missions", "GTA 6 can you replay missions", "GTA 6 mission replay", "GTA 6 how to replay missions", "GTA 6 restart mission"],
    kind: "mission",
    answer: [
      "No. GTA 6 has no menu to replay finished story missions.",
      "The only way back is to load a manual save made before that mission.",
      "During a mission, the pause menu has Retry Checkpoint and Restart Mission.",
    ],
    facts: [
      { label: "Replay menu", value: "No" },
      { label: "Workaround", value: "Load an older manual save" },
      { label: "In a mission", value: "Retry Checkpoint or Restart" },
    ],
    faqs: [
      { question: "Can you replay missions in GTA 6?", answer: "No. There is no mission replay option. To play a mission again, load a manual save from before it." },
      { question: "How do you restart a mission in GTA 6?", answer: "Pause during the mission and pick Restart Mission, or Retry Checkpoint to go back to the last checkpoint." },
    ],
    related: [L.save, L.missions, L.howLong, L.tips],
  },
  {
    slug: "buy-a-house",
    title: "Can You Buy Houses in GTA 6? Safehouses and Garages",
    heading: "Can you buy a house?",
    description:
      "Can you buy houses in GTA 6? No. Safehouses come with the story. You can buy garages in the Vice City Real Estate app from Chapter 2. Unofficial guide.",
    keywords: ["GTA 6 can you buy houses", "GTA 6 buy a house", "GTA 6 buying property", "GTA 6 houses", "GTA 6 safehouses", "GTA 6 property"],
    image: JASONS_PLACE,
    imageAlt: "Jason's place in Key Lento",
    kind: "property",
    answer: [
      "No. You can't buy houses in GTA 6. Safehouses come with the story.",
      "You start at Jason's place in Key Lento and move as the story goes on.",
      "The only property you can buy is garages, through the Vice City Real Estate app in Chapter 2.",
    ],
    facts: [
      { label: "Buy a house", value: "No" },
      { label: "Safehouses", value: "Come with the story" },
      { label: "Buyable", value: "Garages, from Chapter 2" },
    ],
    faqs: [
      { question: "Can you buy houses in GTA 6?", answer: "No. Safehouses come with the story. The only property you can buy is garages." },
      { question: "How do you buy a garage in GTA 6?", answer: "Use the Vice City Real Estate app on your phone. It opens during Chapter 2." },
    ],
    related: [L.jasonsPlace, L.garages, L.register, L.railing],
  },
  {
    slug: "buy-a-car",
    title: "How to Buy a Car in GTA 6 (and Get a New Car)",
    heading: "How to get a new car",
    description:
      "How to buy a car in GTA 6: you don't buy from a dealer. Steal one, then register it with Moses or at a Pay 'n' Spray to keep it. Unofficial guide.",
    keywords: ["GTA 6 how to buy a car", "GTA 6 how to get a new car", "GTA 6 car dealership", "GTA 6 buying cars", "GTA 6 how to get a different car"],
    image: PAY_N_SPRAY_HAMLET,
    imageAlt: "Pay 'n' Spray in Hamlet",
    kind: "vehicle",
    answer: [
      "You don't buy cars from a dealer in GTA 6. You steal one and register it.",
      "Registering makes it your personal car, and the fee depends on the car.",
      "Moses registers cars from Chapter 2, and any Pay 'n' Spray from Chapter 3.",
    ],
    facts: [
      { label: "Dealer", value: "No" },
      { label: "Keep a car", value: "Steal it, then register it" },
      { label: "Where", value: "Moses or Pay 'n' Spray" },
    ],
    faqs: [
      { question: "Can you buy cars in GTA 6?", answer: "Not from a dealer. You steal a car and register it with Moses or at a Pay 'n' Spray to make it yours." },
      { question: "How do you get a new car in GTA 6?", answer: "Steal the car you want, then register it. Moses registers cars from Chapter 2 and any Pay 'n' Spray from Chapter 3." },
    ],
    related: [L.register, L.payNSpray, L.fastestCars, L.slimJim, L.keyCloner],
  },
  {
    slug: "how-to-heal",
    title: "GTA 6 How to Heal: Zombix, Food and Health Regen",
    heading: "How to heal",
    description:
      "How to heal in GTA 6: take Zombix from your loadout, eat or drink something with a heart icon, or stay out of fights so health refills a little. Unofficial.",
    keywords: ["GTA 6 how to heal", "GTA 6 health", "GTA 6 Zombix", "GTA 6 how to use medkit", "GTA 6 health regen"],
    kind: "activity",
    answer: [
      "Take Zombix from your loadout to heal, even in a fight.",
      "Food and drinks with a heart icon also refill health.",
      "Out of a fight, health slowly refills on its own, but only part of the bar.",
      "Buy Zombix from convenience store clerks.",
    ],
    facts: [
      { label: "Fastest", value: "Zombix" },
      { label: "Also", value: "Food and drinks" },
      { label: "Buy Zombix", value: "Convenience stores" },
    ],
    faqs: [
      { question: "How do you heal in GTA 6?", answer: "Take Zombix from your loadout, or eat and drink items with a heart icon. Out of combat, health slowly refills part of the way on its own." },
      { question: "Where do you get Zombix in GTA 6?", answer: "Buy it from the clerk at convenience stores." },
    ],
    related: [L.focus, L.weapons, L.wanted, L.tips],
  },
  {
    slug: "change-clothes",
    title: "GTA 6 How to Change Clothes and Save Outfits",
    heading: "How to change clothes",
    description:
      "How to change clothes in GTA 6: use the wardrobe at your safehouse, or save outfits to your car's trunk and change there. It also lowers Heat. Unofficial.",
    keywords: ["GTA 6 how to change clothes", "GTA 6 change outfit", "GTA 6 save outfits", "GTA 6 wardrobe", "GTA 6 how to change appearance"],
    kind: "clothing",
    answer: [
      "Your safehouse wardrobe holds every piece of clothing you own.",
      "Save outfits to your personal car's trunk from the safehouse, then change from the trunk anywhere.",
      "Changing your outfit is the quickest way to lower Heat after the cops see you.",
    ],
    facts: [
      { label: "All clothes", value: "Safehouse wardrobe" },
      { label: "On the go", value: "Your car's trunk" },
      { label: "Bonus", value: "Lowers Heat" },
    ],
    faqs: [
      { question: "How do you change clothes in GTA 6?", answer: "Use the wardrobe at your safehouse. You can also save outfits to your car's trunk and change there." },
      { question: "Does changing clothes lower your wanted level in GTA 6?", answer: "Yes. Changing your outfit is one of the quickest ways to lower Heat after the police have seen you." },
    ],
    related: [L.wanted, L.clothing, L.mask, L.jasonsPlace],
  },
  {
    slug: "slim-jim",
    title: "GTA 6 How to Get the Slim Jim and Open Locked Cars",
    heading: "Slim jim",
    description:
      "How to get a slim jim in GTA 6: Moses gives it to you in the Chapter 2 mission Moses. It opens locked cars without the alarm. Unofficial guide.",
    keywords: ["GTA 6 slim jim", "GTA 6 how to get a slim jim", "GTA 6 how to steal locked cars", "GTA 6 car alarm"],
    kind: "vehicle",
    answer: [
      "Moses gives you the slim jim in the Chapter 2 story mission Moses, right after Girls' Trip.",
      "It opens locked cars without setting off the alarm. Find the sweet spot with the stick to pop the door.",
      "It won't start keyless cars. Those need the key cloner from Chapter 3.",
    ],
    facts: [
      { label: "Unlock", value: "Moses, Chapter 2" },
      { label: "Opens", value: "Locked cars, no alarm" },
      { label: "Keyless cars", value: "Need the key cloner" },
    ],
    faqs: [
      { question: "How do you get a slim jim in GTA 6?", answer: "Moses gives it to you in the Chapter 2 story mission Moses, which comes after Girls' Trip." },
      { question: "What does the slim jim do in GTA 6?", answer: "It opens locked cars without setting off the alarm. It can't start keyless cars." },
    ],
    related: [L.moses, L.keyCloner, L.register, L.sellMoses],
  },
  {
    slug: "call-your-car",
    title: "GTA 6 How to Call Your Car with Scooter Bros",
    heading: "How to call your car",
    description:
      "How to call your car in GTA 6: open the Scooter Bros app, pick a registered car and tap Request. In Chapter 1, call Joey instead. Unofficial guide.",
    keywords: ["GTA 6 how to call your car", "GTA 6 call car", "GTA 6 summon car", "GTA 6 Scooter Bros", "GTA 6 how to call a tow truck"],
    kind: "phone",
    price: "Premium $12,500",
    answer: [
      "Open Scooter Bros on your phone, pick a registered car and choose Request. It costs a small fee.",
      "You get the app at the end of the Chapter 2 mission Moses.",
      "Scooter Bros Premium costs $12,500 and covers three deliveries a day. In Chapter 1, call Joey from your contacts.",
    ],
    facts: [
      { label: "App", value: "Scooter Bros" },
      { label: "Unlock", value: "Moses, Chapter 2" },
      { label: "Premium", value: "$12,500, 3 deliveries a day" },
    ],
    faqs: [
      { question: "How do you call your car in GTA 6?", answer: "Open the Scooter Bros app, pick a registered car and choose Request. It arrives for a small fee." },
      { question: "Is Scooter Bros Premium worth it in GTA 6?", answer: "Premium costs $12,500 and covers three deliveries a day, including impounded cars, so it pays off if you call your car often." },
    ],
    related: [L.scooterBros, L.impound, L.register, L.fastTravel],
  },
  {
    slug: "fast-travel",
    title: "GTA 6 Fast Travel: How to Use RydeMe (Taxi)",
    heading: "Fast travel",
    description:
      "How to fast travel in GTA 6: order a RydeMe from your phone after the Chapter 1 mission Buck Me, then pay $100 more to skip the ride. Unofficial guide.",
    keywords: ["GTA 6 fast travel", "GTA 6 how to fast travel", "GTA 6 taxi", "GTA 6 how to get a taxi", "GTA 6 RydeMe", "GTA 6 how to call taxi"],
    image: RYDE_ME,
    imageAlt: "The RydeMe app on Jason's phone",
    kind: "phone",
    price: "Skip +$100",
    answer: [
      "RydeMe is the fast travel in GTA 6. It's added to your phone after the Chapter 1 mission Buck Me.",
      "Open RydeMe and pick your safehouse, your map marker or a new destination.",
      "Ride along, or pay $100 more to skip the trip.",
    ],
    facts: [
      { label: "App", value: "RydeMe" },
      { label: "Unlock", value: "Buck Me, Chapter 1" },
      { label: "Skip the ride", value: "+$100" },
    ],
    faqs: [
      { question: "Is there fast travel in GTA 6?", answer: "Yes. Order a RydeMe from your phone and skip the ride for $100 extra." },
      { question: "How do you get a taxi in GTA 6?", answer: "Open the RydeMe app on your phone. It unlocks after the Chapter 1 mission Buck Me, which opens your bank account." },
    ],
    related: [L.rydeMe, L.callCar, L.bank, L.buckMeMission],
  },
  {
    slug: "focus",
    title: "GTA 6 Focus: How to Use It and Level It Up",
    heading: "Focus",
    description:
      "How to use Focus in GTA 6: press both sticks (L3 + R3). It slows time in fights and spots weak points. Level it up with Focus training. Unofficial guide.",
    keywords: ["GTA 6 how to use focus", "GTA 6 focus", "GTA 6 focus mode", "GTA 6 dead eye", "GTA 6 how to level up focus"],
    kind: "activity",
    answer: [
      "Press both sticks at once (L3 + R3) to use Focus.",
      "In a gunfight it slows time and shows weak spots. It also helps you spot fish and track animals.",
      "Focus for gunfights unlocks in the Chapter 1 mission Down To Earth.",
      "Train to get more Focus. Feeding Jason's snake and shooting hoops at his house both help early on.",
    ],
    facts: [
      { label: "Button", value: "L3 + R3" },
      { label: "Combat Focus", value: "Down To Earth, Chapter 1" },
      { label: "Level up", value: "Focus training" },
    ],
    faqs: [
      { question: "How do you use Focus in GTA 6?", answer: "Press both thumbsticks together, L3 and R3 on PS5 or LS and RS on Xbox." },
      { question: "When do you unlock Focus in GTA 6?", answer: "Focus for gunfights unlocks in the Chapter 1 story mission Down To Earth." },
    ],
    related: [L.downToEarth, L.heal, L.weapons, L.tips],
  },
  {
    slug: "online",
    title: "Does GTA 6 Have Online? GTA 6 Online at Launch",
    heading: "Does GTA 6 have online?",
    description:
      "Does GTA 6 have online? No. GTA 6 is single player at launch, with no online or co-op. Rockstar hasn't given a date for an online mode. Unofficial guide.",
    keywords: ["GTA 6 online", "does GTA 6 have online", "GTA 6 is there online", "GTA 6 multiplayer", "GTA 6 co-op"],
    kind: "activity",
    answer: [
      "No. GTA 6 is single player at launch.",
      "There is no online mode and no local co-op.",
      "Rockstar hasn't given a date for an online mode.",
    ],
    facts: [
      { label: "Online at launch", value: "No" },
      { label: "Co-op", value: "No" },
      { label: "Online date", value: "Not announced" },
    ],
    faqs: [
      { question: "Does GTA 6 have online?", answer: "No. GTA 6 launched as a single-player game with no online mode." },
      { question: "Can you play GTA 6 co-op?", answer: "No. There is no online or local co-op. Jason and Lucia are both played by you." },
    ],
    related: [L.howLong, L.switchChar, L.tips, L.cheats],
  },
  {
    slug: "beginner-tips",
    title: "What to Do First in GTA 6: 7 Beginner Tips",
    heading: "What to do first",
    description:
      "What to do first in GTA 6: save after the Prologue, bank your cash, fix Jason's house, feed the snake for Focus and scan cars before you steal. Unofficial.",
    keywords: ["GTA 6 what to do first", "GTA 6 beginner tips", "GTA 6 tips and tricks", "GTA 6 tips for beginners", "GTA 6 tips no spoilers"],
    image: KEY_LENTO,
    imageAlt: "Key Lento",
    kind: "location",
    answer: [
      "Make a manual save after the Prologue. Hold on to early cash, since some missions need it.",
      "Bank your money after Buck Me. You lose the cash you carry when Wasted or Busted.",
      "Fix Jason's house before Lucia comes home, and feed his snake and shoot hoops for Focus.",
      "Scan cars with WAiNK before you steal them, and stick with the story until the map opens up.",
    ],
    facts: [
      { label: "1", value: "Save after the Prologue" },
      { label: "2", value: "Bank your cash" },
      { label: "3", value: "Fix Jason's house" },
      { label: "4", value: "Feed the snake for Focus" },
      { label: "5", value: "Scan cars first" },
    ],
    faqs: [
      { question: "What should you do first in GTA 6?", answer: "Save after the Prologue, keep your early cash for missions, bank it once you have an account, and fix Jason's house before Lucia comes home." },
      { question: "How do you get more Focus early in GTA 6?", answer: "Feed the snake at Jason's house once a day and shoot hoops at the basketball hoop below the house." },
    ],
    related: [L.save, L.bank, L.railing, L.focus, L.register, L.money],
  },
];

export function findQuickGuide(slug: string) {
  return quickGuides.find((guide) => guide.slug === slug);
}

/** Card links for hub pages. */
export function quickGuideCards(slugs: readonly string[]) {
  return slugs
    .map((slug) => findQuickGuide(slug))
    .filter((guide): guide is QuickGuide => Boolean(guide));
}
