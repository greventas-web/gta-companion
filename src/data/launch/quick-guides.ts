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
const TREASURE = "/images/footage/activities/treasure-diving.webp";
const COASTAL = "/images/footage/places/coastal-auto-care.webp";
const FITNESS_APP = "/images/footage/phone/fitness-app.webp";
const HUNTING = "/images/official/frames/hunting.webp";
const JEWELRY = "/images/official/frames/jewelry-robbery.webp";
const ROBBERY_ART = "/images/official/media/artwork-jason-and-lucia-robbery-jason-and-lucia-robbery-landscape.webp";

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
  // Batch 2
  vehiclesHub: { href: "/vehicles", title: "Vehicles", kind: "vehicle" },
  mapHub: { href: "/map", title: "Map", kind: "location" },
  labFees: { href: "/guides/lab-fees-codes", title: "Lab Fees codes", kind: "mission" },
  pipework: { href: "/guides/pipework", title: "Pipework", kind: "mission" },
  heyArnold: { href: "/guides/hey-arnold", title: "Kill or spare Arnold?", kind: "mission" },
  fengShui: { href: "/guides/feng-shui", title: "Feng Shui puzzle", image: JASONS_PLACE, imageAlt: "Jason's place in Key Lento", kind: "mission" },
  islandDreams: { href: "/guides/island-dreams", title: "Island Dreams treasure", image: TREASURE, imageAlt: "Jason diving for treasure at a shipwreck", kind: "mission" },
  groceries: { href: "/guides/pick-up-groceries", title: "Pick up groceries", kind: "mission" },
  scuba: { href: "/guides/scuba-gear", title: "Scuba gear", image: TREASURE, imageAlt: "Jason diving for treasure at a shipwreck", kind: "activity" },
  refuel: { href: "/guides/refuel", title: "Gas and refueling", kind: "vehicle" },
  repairCar: { href: "/guides/repair-car", title: "Repair your car", kind: "vehicle" },
  customize: { href: "/guides/customize-car", title: "Customize your car", image: COASTAL, imageAlt: "Coastal Auto Care in Key Lento", kind: "mod" },
  headphones: { href: "/guides/headphones", title: "Headphones", kind: "radio" },
  plane: { href: "/guides/plane", title: "Get a plane", kind: "vehicle" },
  mapFog: { href: "/guides/unlock-map", title: "Unlock the map", kind: "location" },
  fishing: { href: "/guides/fishing", title: "Fishing", kind: "activity" },
  hunting: { href: "/guides/hunting", title: "Hunting", image: HUNTING, imageAlt: "Hunting in Leonida, official Rockstar still", kind: "activity" },
  sellGuns: { href: "/guides/sell-guns", title: "Sell guns?", kind: "weapon" },
  sellCars: { href: "/guides/sell-cars", title: "Sell cars", image: PAY_N_SPRAY, imageAlt: "Pay 'n' Spray in Key Lento", kind: "money" },
  moneyGlitch: { href: "/guides/money-glitch", title: "Money glitch?", image: JEWELRY, imageAlt: "A jewelry store robbery, official Rockstar still", kind: "money" },
  workout: { href: "/guides/workout", title: "Workouts", image: FITNESS_APP, imageAlt: "The Fitness app on the in-game phone", kind: "activity" },
  stealth: { href: "/guides/stealth-takedown", title: "Stealth takedown", kind: "weapon" },
  cover: { href: "/guides/take-cover", title: "Take cover", kind: "weapon" },
  newGame: { href: "/guides/new-game", title: "New game", kind: "mission" },
  snake: { href: "/guides/pet-snake", title: "Dolores the snake", kind: "animal" },
  robStore: { href: "/guides/rob-store", title: "Rob a store", image: ROBBERY_ART, imageAlt: "Jason and Lucia robbery, official Rockstar artwork", kind: "money" },
  kenton: { href: "/characters/kenton-rees", title: "Kenton Rees", image: "/images/footage/characters/kenton-rees.webp", imageAlt: "Kenton Rees", kind: "character" },
  treasureDiving: { href: "/money-methods/kenton-treasure-diving", title: "Treasure diving", image: "/images/footage/money-methods/kenton-treasure-diving.webp", imageAlt: "Jason pulling a treasure chest out of a shipwreck", kind: "money" },
  modShops: { href: "/where-to-find/mod-shops", title: "Mod shops", image: COASTAL, imageAlt: "Coastal Auto Care in Key Lento", kind: "mod" },
  storeRobberies: { href: "/money-methods/store-robberies", title: "Store robberies", kind: "money" },
  jewelry: { href: "/money-methods/jewelry-store-robberies", title: "Jewelry stores", image: JEWELRY, imageAlt: "A jewelry store robbery, official Rockstar still", kind: "money" },
  sellPayNSpray: { href: "/money-methods/sell-cars-at-pay-n-spray", title: "Sell at Pay 'n' Spray", kind: "money" },
  labFeesMission: { href: "/missions/lab-fees", title: "Lab Fees", line: "Chapter 1", kind: "mission" },
  pipeworkMission: { href: "/missions/pipework", title: "Pipework", line: "Chapter 1", kind: "mission" },
  arnoldMission: { href: "/missions/hey-arnold", title: "Hey Arnold!", line: "Chapter 1", kind: "mission" },
  fengShuiMission: { href: "/missions/feng-shui", title: "Feng Shui", line: "Chapter 1", kind: "mission" },
  islandMission: { href: "/missions/island-dreams", title: "Island Dreams", line: "Chapter 1", kind: "mission" },
  shootingRanges: { href: "/shooting-ranges", title: "Shooting ranges", kind: "range" },
  animals: { href: "/animals", title: "Animals", kind: "animal" },
  shark: { href: "/animals", title: "Sharks and sea life", image: "/images/footage/animals/shark.webp", imageAlt: "A shark near Jason underwater", kind: "animal" },
  phoneHeadphones: { href: "/phone/headphones", title: "Headphones app page", kind: "phone" },
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
  // Batch 2 (November 19, 2026)
  {
    slug: "lab-fees-codes",
    title: "GTA 6 Lab Fees Codes: Lab Door 0420 and Brian's Lockup 7700",
    heading: "Lab Fees door codes",
    description:
      "GTA 6 Lab Fees codes: the gift shop lab door is 0420 and Brian's lockup is 7700. Where to use each code in the Chapter 1 rent mission. Unofficial guide.",
    keywords: ["GTA 6 lab fees code", "GTA 6 brian rent code", "GTA 6 brian rent door code", "GTA 6 lab fees door code", "GTA 6 lab code", "GTA 6 brian lockup code"],
    kind: "mission",
    price: "Pays $600",
    answer: [
      "The lab door in the gift shop is 0420. The clerk tells you, and it's also on the back of a notepad in the shop.",
      "Brian's lockup is 7700. Brian gives it to you on the phone after you grab the acid.",
      "Your $600 lands in the mailbox outside Jason's house, since you don't have a bank account yet.",
    ],
    facts: [
      { label: "Lab door", value: "0420" },
      { label: "Brian's lockup", value: "7700" },
      { label: "Pay", value: "$600, in Jason's mailbox" },
    ],
    faqs: [
      { question: "What is the lab code in GTA 6 Lab Fees?", answer: "The lab door code is 0420. The clerk gives it to you, and it's also written on the back of a notepad in the shop." },
      { question: "What is Brian's lockup code in GTA 6?", answer: "Brian's lockup code is 7700. He tells you on the phone during Lab Fees." },
    ],
    related: [L.labFeesMission, L.pipework, L.robStore, L.missions],
  },
  {
    slug: "pipework",
    title: "GTA 6 Pipework: Mandy's Sink, Plunger and House Location",
    heading: "Pipework (Mandy's rent)",
    description:
      "GTA 6 Pipework walkthrough: Mandy's house is a short drive from Jason's place. Take the plunger from her bathroom, then fix the kitchen sink. Unofficial guide.",
    keywords: ["GTA 6 pipework", "GTA 6 pipework mission", "GTA 6 mandy house location", "GTA 6 mandy sink", "GTA 6 what was in mandy's sink", "GTA 6 can you romance mandy"],
    kind: "mission",
    answer: [
      "Mandy's house is a short drive from Jason's place in Key Lento. Follow the Collect Mandy's Rent marker.",
      "The plunger is on the bathroom floor next to the toilet. Take it to the kitchen sink and click the right stick to plunge.",
      "When Jason gets under the sink, hold R2 or RT to use the wrench. You can't romance Mandy, whatever you say.",
    ],
    facts: [
      { label: "Chapter", value: "1" },
      { label: "Plunger", value: "Bathroom, next to the toilet" },
      { label: "Wrench", value: "Hold R2 / RT" },
    ],
    faqs: [
      { question: "Where is the plunger in GTA 6 Pipework?", answer: "On the bathroom floor next to the toilet, across the hall from Mandy's bedroom." },
      { question: "Can you romance Mandy in GTA 6?", answer: "No. Mandy flirts with Jason during Pipework, but no dialogue choice leads to a romance." },
    ],
    related: [L.pipeworkMission, L.labFees, L.heyArnold, L.missions],
  },
  {
    slug: "hey-arnold",
    title: "GTA 6 Hey Arnold: Should You Kill or Spare Arnold?",
    heading: "Kill or spare Arnold?",
    description:
      "GTA 6 Arnold decision: the story goes on the same either way. Sparing him points you toward a Restrained profile and pays off later. Unofficial guide.",
    keywords: ["GTA 6 arnold decision", "GTA 6 kill or spare arnold", "GTA 6 what to do with arnold", "GTA 6 hey arnold", "GTA 6 arnold spare"],
    kind: "mission",
    answer: [
      "It's your call. The story carries on the same way whether you kill or spare Arnold.",
      "Sparing him counts toward a Restrained criminal profile. Killing him counts toward Hardened.",
      "If you spare him, Arnold sends Jason $10,000 as a thank-you later in the game.",
    ],
    facts: [
      { label: "Chapter", value: "1" },
      { label: "Spare", value: "Restrained, $10,000 later" },
      { label: "Kill", value: "Hardened" },
    ],
    faqs: [
      { question: "Should you kill or spare Arnold in GTA 6?", answer: "Sparing him is the better pick. The story is the same either way, but Arnold later sends Jason $10,000 as a thank-you." },
      { question: "Does killing Arnold matter in GTA 6?", answer: "Only a little. It counts toward a Hardened criminal profile, while sparing him counts toward Restrained." },
    ],
    related: [L.arnoldMission, L.islandDreams, L.wanted, L.missions],
  },
  {
    slug: "feng-shui",
    title: "GTA 6 Feng Shui: Tenebrae Lux Puzzle Solution in 3 Moves",
    heading: "Feng Shui puzzle",
    description:
      "GTA 6 Feng Shui puzzle solution: in Tenebrae Lux, move the bottom-left tower up, the middle tower down, then the top-right tower down. Unofficial guide.",
    keywords: ["GTA 6 feng shui puzzle", "GTA 6 feng shui mission", "GTA 6 tenebrae lux", "GTA 6 tenebrae lux puzzle", "GTA 6 feng shui game"],
    image: JASONS_PLACE,
    imageAlt: "Jason's place in Key Lento",
    kind: "mission",
    answer: [
      "In Tenebrae Lux, walk to the hut and use the board inside. Start from a fresh board with all six pieces.",
      "Move the bottom-left tower up, then the middle tower down, then the top-right tower down.",
      "Towers clear the pieces they pass. Clear the board, then Cal switches to Street Trash III.",
    ],
    facts: [
      { label: "Move 1", value: "Bottom-left tower up" },
      { label: "Move 2", value: "Middle tower down" },
      { label: "Move 3", value: "Top-right tower down" },
    ],
    faqs: [
      { question: "How do you solve the Feng Shui puzzle in GTA 6?", answer: "On a fresh Tenebrae Lux board, move the bottom-left tower up, the middle tower down, then the top-right tower down." },
      { question: "Can you play Tenebrae Lux again in GTA 6?", answer: "Yes. After Feng Shui you can play the console games on the TV at Jason's place." },
    ],
    related: [L.fengShuiMission, L.jasonsPlace, L.railing, L.missions],
  },
  {
    slug: "island-dreams",
    title: "GTA 6 Island Dreams: Where to Find All 3 Treasures",
    heading: "Island Dreams treasure",
    description:
      "GTA 6 Island Dreams treasure locations: use the metal detector outside the wreck. One by the flat wreck plates, one at the rock wall, one by a crate. Unofficial.",
    keywords: ["GTA 6 island dreams", "GTA 6 island dreams treasure", "GTA 6 island dreams where is the treasure", "GTA 6 island dreams walkthrough", "GTA 6 scuba diving mission"],
    image: TREASURE,
    imageAlt: "Jason diving for treasure at a shipwreck",
    kind: "mission",
    answer: [
      "Equip the metal detector and search the pink area outside the wreck. The light turns green when you're close.",
      "One treasure is by the flat wreck plates, one at the foot of the rock wall, and one by a crate on the sandy floor.",
      "A shark shows up after you pull Dobbs out of the grate. Switch to the harpoon gun and shoot it.",
    ],
    facts: [
      { label: "Treasure 1", value: "Flat wreck plates" },
      { label: "Treasure 2", value: "Base of the rock wall" },
      { label: "Treasure 3", value: "Crate on the sandy floor" },
    ],
    faqs: [
      { question: "Where are the treasures in GTA 6 Island Dreams?", answer: "Outside the wreck, not inside. One is by the flat wreck plates, one at the base of the rock wall and one by a crate on the sandy floor." },
      { question: "How do you find treasure in GTA 6?", answer: "Equip the metal detector and sweep the seabed. When its light turns green, swim closer until the gold chest prompt appears." },
    ],
    related: [L.islandMission, L.kenton, L.treasureDiving, L.shark, L.scuba],
  },
  {
    slug: "pick-up-groceries",
    title: "GTA 6 How to Buy Groceries (Pick Up Groceries)",
    heading: "How to buy groceries",
    description:
      "How to buy groceries in GTA 6: take any three marked items off the shelf, put the bags in your trunk and carry them into Jason's house. Unofficial guide.",
    keywords: ["GTA 6 how to buy groceries", "GTA 6 groceries", "GTA 6 pick up groceries", "GTA 6 grocery store", "GTA 6 buying groceries"],
    kind: "mission",
    answer: [
      "Go to the marked grocery store in Key Lento and take any three items with pink markers.",
      "Each item is paid for when you take it off the shelf. You don't need the register.",
      "Put the bags in your car's trunk, drive home and carry them into Jason's house.",
    ],
    facts: [
      { label: "Items", value: "Any 3 with pink markers" },
      { label: "Pay", value: "Automatic, off the shelf" },
      { label: "Drop off", value: "Jason's house" },
    ],
    faqs: [
      { question: "How do you buy groceries in GTA 6?", answer: "Take any three items with pink markers off the shelf. Each one is paid for automatically, so you don't need the register." },
      { question: "Where do you drop off the groceries in GTA 6?", answer: "Put them in your trunk, drive back to Jason's house and carry the bags inside." },
    ],
    related: [L.railing, L.jasonsPlace, L.tips, L.missions],
  },
  {
    slug: "scuba-gear",
    title: "GTA 6 Where to Get Scuba Gear for Treasure Diving",
    heading: "Where to get scuba gear",
    description:
      "Where to get scuba gear in GTA 6: on Kenton's charter boat at Island Dreams in Key Lento, or the spare set on the dock. It adds a metal detector. Unofficial.",
    keywords: ["GTA 6 scuba gear", "GTA 6 where to get scuba gear", "GTA 6 scuba gear location", "GTA 6 scuba diving", "GTA 6 how to dive underwater"],
    image: TREASURE,
    imageAlt: "Jason diving for treasure at a shipwreck",
    kind: "activity",
    answer: [
      "Go to Kenton's Island Dreams boat charters in Key Lento after the Island Dreams mission.",
      "Use the Scuba Gear prompt by the yellow tanks at the back of the charter boat. There's also a spare set on the dock.",
      "The gear adds a metal detector and a speargun. Hold R1 or RB to dive.",
    ],
    facts: [
      { label: "Where", value: "Island Dreams dock, Key Lento" },
      { label: "Adds", value: "Metal detector and speargun" },
      { label: "Dive", value: "Hold R1 / RB" },
    ],
    faqs: [
      { question: "Where do you get scuba gear in GTA 6?", answer: "At Kenton's Island Dreams dock in Key Lento. Use the prompt by the yellow tanks on the charter boat, or the spare set on the dock." },
      { question: "How do you dive underwater in GTA 6?", answer: "Put on the scuba gear, get in the water and hold R1 on PS5 or RB on Xbox." },
    ],
    related: [L.treasureDiving, L.islandDreams, L.kenton, L.shark],
  },
  {
    slug: "refuel",
    title: "GTA 6 Gas: How to Refuel and Find Gas Stations",
    heading: "Gas and refueling",
    description:
      "Do cars need gas in GTA 6? Yes. Press Down on the D-pad to check fuel, then pull up to a pump at any gas station to refuel. Unofficial guide.",
    keywords: ["GTA 6 gas", "GTA 6 gas stations", "GTA 6 gas station locations", "GTA 6 where to get gas", "GTA 6 gas gauge", "GTA 6 refuel"],
    kind: "vehicle",
    answer: [
      "Yes, cars use fuel in GTA 6. Press Down on the D-pad to see the pump icon: green is fine, yellow is low, red is empty.",
      "Pull up to a pump at a gas station and press X or A to refuel for a small fee.",
      "Find stations in the map's Vehicles tab. Electric cars use chargers instead.",
    ],
    facts: [
      { label: "Check fuel", value: "Down on the D-pad" },
      { label: "Refuel", value: "X / A at a pump" },
      { label: "Find one", value: "Map > Vehicles > Gas Stations" },
    ],
    faqs: [
      { question: "Do cars run out of gas in GTA 6?", answer: "Yes. Gas cars need fuel. The pump icon turns yellow when you're low and red when the tank is empty." },
      { question: "How do you refuel in GTA 6?", answer: "Drive up to a pump at a gas station and press X on PS5 or A on Xbox, then pick refuel." },
    ],
    related: [L.repairCar, L.customize, L.callCar, L.register],
  },
  {
    slug: "repair-car",
    title: "GTA 6 How to Repair Your Car",
    heading: "How to repair your car",
    description:
      "How to repair your car in GTA 6: use the repair option at a gas station pump. In Chapter 1, call Joey. Later, Scooter Bros brings back wrecked cars. Unofficial.",
    keywords: ["GTA 6 how to repair car", "GTA 6 repair car", "GTA 6 fix car", "GTA 6 car damage"],
    kind: "vehicle",
    answer: [
      "Pull up to a pump at any gas station and pick the repair option for a fee.",
      "In Chapter 1, call Joey from your contacts. He fixes your car and brings it to you.",
      "From Chapter 2, Scooter Bros brings back a wrecked personal car for a fee. A wrecked stolen car is gone for good.",
    ],
    facts: [
      { label: "Anytime", value: "Gas station pump" },
      { label: "Chapter 1", value: "Call Joey" },
      { label: "Wrecked", value: "Scooter Bros, owned cars only" },
    ],
    faqs: [
      { question: "How do you repair your car in GTA 6?", answer: "Drive up to a pump at a gas station and choose repair. In Chapter 1 you can also call Joey." },
      { question: "What happens if your car is destroyed in GTA 6?", answer: "A registered car comes back through Scooter Bros for a fee. A stolen car you haven't registered is lost, with anything in its trunk." },
    ],
    related: [L.refuel, L.callCar, L.register, L.customize],
  },
  {
    slug: "customize-car",
    title: "GTA 6 How to Customize Your Car at a Mod Shop",
    heading: "Customize your car",
    description:
      "How to customize cars in GTA 6: drive to a mod shop that fits your vehicle type. A tracked car must be registered before you can mod it. Unofficial guide.",
    keywords: ["GTA 6 customize car", "GTA 6 car customization", "GTA 6 mod shop", "GTA 6 how to customize car", "GTA 6 tuning"],
    image: COASTAL,
    imageAlt: "Coastal Auto Care in Key Lento",
    kind: "mod",
    answer: [
      "Drive to a mod shop. There are 14, and each one works on a type of vehicle. Coastal Auto Care is the one in Key Lento.",
      "A car with a tracker can't be modded until you register it, which turns the tracker off.",
      "Repair the car first if it's damaged.",
    ],
    facts: [
      { label: "Mod shops", value: "14" },
      { label: "Key Lento", value: "Coastal Auto Care" },
      { label: "Tracked car", value: "Register it first" },
    ],
    faqs: [
      { question: "How do you customize cars in GTA 6?", answer: "Take the car to a mod shop that works on that type of vehicle and pick parts, paint and wheels from the menu." },
      { question: "Why can't I mod my car in GTA 6?", answer: "Cars with a tracker can't be modded until you register them, and some shops only work on certain vehicle types." },
    ],
    related: [L.modShops, L.register, L.repairCar, L.fastestCars],
  },
  {
    slug: "headphones",
    title: "GTA 6 Where to Get Headphones and Listen to Music",
    heading: "Where to get headphones",
    description:
      "Where to get headphones in GTA 6: electronics stores sell them. Zeke's Gadgets in Hamlet has them for $119. Hold Left on the D-pad to play music. Unofficial.",
    keywords: ["GTA 6 headphones", "GTA 6 where to get headphones", "GTA 6 earphones", "GTA 6 listen to music walking", "GTA 6 headphones in game"],
    kind: "radio",
    price: "$119",
    answer: [
      "Buy headphones at an electronics store. One of the first is Zeke's Gadgets in Hamlet, at $119.",
      "With them on, hold Left on the D-pad and press X or A to turn music on or off.",
      "You can then listen to radio stations and podcasts on foot.",
    ],
    facts: [
      { label: "Where", value: "Electronics stores" },
      { label: "First shop", value: "Zeke's Gadgets, Hamlet" },
      { label: "Price", value: "$119" },
    ],
    faqs: [
      { question: "Where do you get headphones in GTA 6?", answer: "At electronics stores. Zeke's Gadgets in Hamlet sells them for $119." },
      { question: "How do you listen to music on foot in GTA 6?", answer: "Wear headphones, then hold Left on the D-pad and press X or A to turn the music on." },
    ],
    related: [L.phoneHeadphones, L.radio, L.radioHub, L.fastTravel],
  },
  {
    slug: "plane",
    title: "GTA 6 How to Get a Plane Early and Fly It",
    heading: "Get a plane",
    description:
      "How to get a plane in GTA 6: a Bottcher Duster sits at a small airstrip off Boundary Road, near Key Lento, from Chapter 1. Flying controls inside. Unofficial.",
    keywords: ["GTA 6 where to find planes", "GTA 6 how to fly the plane", "GTA 6 plane locations", "GTA 6 how to get a plane", "GTA 6 planes"],
    kind: "vehicle",
    answer: [
      "A Bottcher Duster crop plane sits at a small airstrip off Boundary Road in Mariana County, about 1.4 km from Jason's house.",
      "You can take it as soon as you're in the open world as Jason.",
      "Hold R2 or RT to speed up and pull back on the left stick to lift off. L3 raises the landing gear.",
    ],
    facts: [
      { label: "Early plane", value: "Bottcher Duster" },
      { label: "Where", value: "Airstrip off Boundary Road" },
      { label: "Throttle", value: "R2 / RT" },
    ],
    faqs: [
      { question: "Where can you find a plane in GTA 6?", answer: "A Bottcher Duster is parked at a small airstrip off Boundary Road in Mariana County, about 1.4 km from Jason's house." },
      { question: "How do you fly a plane in GTA 6?", answer: "Hold R2 or RT to build speed on the runway, then pull back on the left stick to take off. Use the left stick to pitch and roll." },
    ],
    related: [L.mapFog, L.fastTravel, L.vehiclesHub, L.wanted],
  },
  {
    slug: "unlock-map",
    title: "GTA 6 How to Unlock the Whole Map (Remove Map Fog)",
    heading: "Unlock the map",
    description:
      "How to unlock the map in GTA 6: the fog clears as you visit each area. The fastest way is flying a plane over the dark parts. No cheat does it. Unofficial.",
    keywords: ["GTA 6 how to unlock map", "GTA 6 map unlocked", "GTA 6 map fog", "GTA 6 unfog map", "GTA 6 reveal map"],
    kind: "location",
    answer: [
      "The map is covered in fog until you visit each area yourself. No cheat clears it.",
      "The fastest way is to fly a plane over the dark parts of the map.",
      "Take the Bottcher Duster near Key Lento and land for a new plane when the fuel gets low.",
    ],
    facts: [
      { label: "Clears by", value: "Visiting each area" },
      { label: "Fastest", value: "Fly a plane" },
      { label: "Cheat", value: "None" },
    ],
    faqs: [
      { question: "How do you unlock the whole map in GTA 6?", answer: "Visit every area. Flying a plane over the fogged parts is the quickest way." },
      { question: "Is there a cheat to reveal the map in GTA 6?", answer: "No. You have to clear the fog by going there." },
    ],
    related: [L.plane, L.mapHub, L.fastTravel, L.tips],
  },
  {
    slug: "fishing",
    title: "GTA 6 How to Fish: Rod, Casting and Reeling",
    heading: "How to fish",
    description:
      "How to fish in GTA 6: fishing is open from the start. Pick the rod in your loadout near water, cast with L2 and R2, then reel with the right stick. Unofficial.",
    keywords: ["GTA 6 how to fish", "GTA 6 fishing", "GTA 6 fishing rod", "GTA 6 fishing guide", "GTA 6 fishing mechanic"],
    kind: "activity",
    answer: [
      "Fishing is open as soon as you're in the open world as Jason. The dock at his house works.",
      "Near water, hold L1 or LB, pick the fishing rod from Equipment, then hold L2 and press R2 to cast.",
      "Press R2 when a fish bites, pull the left stick against it, and turn the right stick to reel when it rests.",
      "Chuck's Tackle & Shot in Key Lento sells better lures.",
    ],
    facts: [
      { label: "Unlock", value: "From the start" },
      { label: "Cast", value: "Hold L2, press R2" },
      { label: "Lures", value: "Chuck's Tackle & Shot" },
    ],
    faqs: [
      { question: "When can you fish in GTA 6?", answer: "Right away. As soon as you're in the open world as Jason, walk to a dock and pick the rod from your loadout." },
      { question: "Does fishing help in GTA 6?", answer: "Yes. Catching fish raises your Focus." },
    ],
    related: [L.focus, L.hunting, L.mask, L.animals],
  },
  {
    slug: "hunting",
    title: "GTA 6 Hunting: How to Unlock It and Sell Animals",
    heading: "Hunting",
    description:
      "How to hunt in GTA 6: meet Bret in Chapter 2. Use a scoped rifle for one clean shot, then sell animals in good shape to Bret. Unofficial guide.",
    keywords: ["GTA 6 hunting", "GTA 6 how to hunt", "GTA 6 hunting animals", "GTA 6 sell animals", "GTA 6 hunting system"],
    image: HUNTING,
    imageAlt: "Hunting in Leonida, official Rockstar still",
    kind: "activity",
    answer: [
      "Hunting opens when you meet Bret in Chapter 2.",
      "Use a scoped hunting rifle and take one clean shot. Extra shots lower the animal's quality.",
      "Bret only buys animals in good or pristine shape. Carry small ones yourself and let his truck pick up big ones.",
    ],
    facts: [
      { label: "Unlock", value: "Meet Bret, Chapter 2" },
      { label: "Weapon", value: "Scoped hunting rifle" },
      { label: "Sell to", value: "Bret" },
    ],
    faqs: [
      { question: "How do you unlock hunting in GTA 6?", answer: "Meet Bret during Chapter 2. He buys the animals you hunt." },
      { question: "Why won't Bret buy my animal in GTA 6?", answer: "He only takes animals in good or pristine condition. Use one clean shot with a scoped rifle." },
    ],
    related: [L.animals, L.fishing, L.gunStores, L.money],
  },
  {
    slug: "sell-guns",
    title: "Can You Sell Guns in GTA 6?",
    heading: "Can you sell guns?",
    description:
      "Can you sell guns in GTA 6? No. Ammu-Nation and fences don't buy weapons. Store long guns in your car's trunk or a locker instead. Unofficial guide.",
    keywords: ["GTA 6 can i sell guns", "GTA 6 sell guns", "GTA 6 sell weapons", "GTA 6 where to sell guns"],
    image: CHUCKS,
    imageAlt: "Ammu-Nation sign at Chuck's Tackle & Shot",
    kind: "weapon",
    answer: [
      "No. You can't sell guns in GTA 6, at Ammu-Nation or anywhere else.",
      "Keep spare long guns in your personal car's trunk or an Ammu-Nation locker.",
      "For cash, sell stolen cars or rob stores instead.",
    ],
    facts: [
      { label: "Sell guns", value: "No" },
      { label: "Store them", value: "Car trunk or locker" },
    ],
    faqs: [
      { question: "Can you sell guns in GTA 6?", answer: "No. Neither Ammu-Nation nor fences buy weapons." },
      { question: "Where do you keep guns in GTA 6?", answer: "In your personal car's trunk or in an Ammu-Nation locker." },
    ],
    related: [L.gunStores, L.weapons, L.sellCars, L.moneyGlitch],
  },
  {
    slug: "sell-cars",
    title: "GTA 6 How to Sell Cars and Where to Sell Stolen Cars",
    heading: "How to sell cars",
    description:
      "Where to sell cars in GTA 6: Moses buys cars with no tracker from Chapter 2, any Pay 'n' Spray from Chapter 3, and Randy buys high-end cars. Unofficial.",
    keywords: ["GTA 6 how to sell cars", "GTA 6 where to sell cars", "GTA 6 can i sell stolen cars", "GTA 6 sell stolen cars", "GTA 6 selling cars"],
    image: PAY_N_SPRAY,
    imageAlt: "Pay 'n' Spray in Key Lento",
    kind: "money",
    answer: [
      "From Chapter 2, sell cars with no tracker to Moses in Port Gellhorn.",
      "From early Chapter 3, any of the 19 Pay 'n' Sprays buys stolen cars. Newer cars pay more.",
      "Mid Chapter 3, Randy buys high-end cars from his wish list. Scan cars with WAiNK to see their value.",
    ],
    facts: [
      { label: "Moses", value: "$1,000 to $10,000+" },
      { label: "Pay 'n' Spray", value: "$4,000+" },
      { label: "Randy", value: "$30,000+" },
    ],
    faqs: [
      { question: "Where do you sell cars in GTA 6?", answer: "Moses buys cars with no tracker from Chapter 2, any Pay 'n' Spray buys stolen cars from Chapter 3, and Randy buys high-end cars." },
      { question: "How do you know what a car is worth in GTA 6?", answer: "Scan it with the WAiNK app. It shows the sell value and the tracker." },
    ],
    related: [L.sellMoses, L.sellPayNSpray, L.randy, L.waink, L.register],
  },
  {
    slug: "money-glitch",
    title: "GTA 6 Money Glitch? Best Legit Ways to Make Money Fast",
    heading: "Is there a money glitch?",
    description:
      "Is there a GTA 6 money glitch? No working one. The fastest legit money: sell cars, rob jewelry stores, raid gang hideouts and dive for treasure. Unofficial.",
    keywords: ["GTA 6 money glitch", "GTA 6 best way to make money", "GTA 6 fastest way to make money", "GTA 6 money cheat code", "GTA 6 how to make money fast"],
    image: JEWELRY,
    imageAlt: "A jewelry store robbery, official Rockstar still",
    kind: "money",
    answer: [
      "There's no working money glitch, and there's no money cheat. Skip tools or tricks that risk your save.",
      "Early on, rob stores and dive for treasure. From Chapter 2, sell stolen cars.",
      "From Chapter 3, rob jewelry stores for $10,000 to $25,000 and sell high-end cars to Randy for $30,000+.",
    ],
    facts: [
      { label: "Money glitch", value: "None" },
      { label: "Jewelry stores", value: "$10,000 to $25,000" },
      { label: "Randy's cars", value: "$30,000+" },
    ],
    faqs: [
      { question: "Is there a money glitch in GTA 6?", answer: "No working money glitch has been found, and there is no money cheat. Stick to legit methods so you don't risk your save." },
      { question: "What is the fastest way to make money in GTA 6?", answer: "From Chapter 3, jewelry store robberies and Randy's high-end cars pay the most. Earlier, sell stolen cars and dive for treasure." },
    ],
    related: [L.money, L.jewelry, L.sellCars, L.treasureDiving, L.robStore],
  },
  {
    slug: "workout",
    title: "GTA 6 Workout Window: How to Complete Workouts",
    heading: "Workouts",
    description:
      "GTA 6 workout window explained: finish three strength or cardio exercises before the timer ends to level up. A protein bar speeds up recovery. Unofficial.",
    keywords: ["GTA 6 workout window", "GTA 6 workout", "GTA 6 how to complete workout", "GTA 6 how to increase cardio", "GTA 6 how to do bench press", "GTA 6 workout not working"],
    image: FITNESS_APP,
    imageAlt: "The Fitness app on the in-game phone",
    kind: "activity",
    answer: [
      "Open the Fitness app to see your workout windows. Each exercise adds about 11%, up to 33% a day.",
      "Finish the full workout before the timer runs out, or you lose the gains.",
      "Cardio is running, cycling, swimming or the treadmill. Strength is weights like the bench press. Jason's balcony has gear at the start.",
      "A protein bar or shake halves the wait for the next window.",
    ],
    facts: [
      { label: "Per exercise", value: "About 11%" },
      { label: "Daily cap", value: "33%" },
      { label: "Max level", value: "4" },
    ],
    faqs: [
      { question: "How does the workout window work in GTA 6?", answer: "Each exercise in the window adds about 11%, up to 33% a day. Finish the workout before the timer ends or you lose the gains." },
      { question: "How do you increase cardio in GTA 6?", answer: "Run, cycle, swim, kayak or use the treadmill, bike or punching bag at a gym during a cardio workout window." },
    ],
    related: [L.focus, L.snake, L.jasonsPlace, L.heal],
  },
  {
    slug: "stealth-takedown",
    title: "GTA 6 How to Stealth Kill (Stealth Takedown)",
    heading: "Stealth takedown",
    description:
      "How to stealth kill in GTA 6: crouch with Circle or B, sneak up behind the enemy, grab with R2 or RT and press Square or X for the takedown. Unofficial.",
    keywords: ["GTA 6 stealth kill", "GTA 6 how to stealth kill", "GTA 6 stealth takedown", "GTA 6 stealth", "GTA 6 how to crouch"],
    kind: "weapon",
    answer: [
      "Press Circle (B on Xbox) to crouch and sneak up behind the enemy.",
      "Hold R2 (RT) to grab them, then press Square (X) to take them down.",
      "Stay out of sight while you move in. A guard who turns around breaks the takedown.",
    ],
    facts: [
      { label: "Crouch", value: "Circle / B" },
      { label: "Grab", value: "Hold R2 / RT" },
      { label: "Takedown", value: "Square / X" },
    ],
    faqs: [
      { question: "How do you stealth kill in GTA 6?", answer: "Crouch, sneak up behind the enemy, hold R2 or RT to grab them, then press Square or X." },
      { question: "How do you crouch in GTA 6?", answer: "Press Circle on PS5 or B on Xbox." },
    ],
    related: [L.cover, L.focus, L.weapons, L.wanted],
  },
  {
    slug: "take-cover",
    title: "GTA 6 How to Take Cover, Dodge and Block",
    heading: "Take cover",
    description:
      "How to take cover in GTA 6: stand next to a wall or car and press R1 or RB. Hold L2 to peek and aim. In fist fights, X or A blocks and dodges. Unofficial.",
    keywords: ["GTA 6 how to take cover", "GTA 6 cover", "GTA 6 how to dodge", "GTA 6 how to block", "GTA 6 controls"],
    kind: "weapon",
    answer: [
      "Move next to a wall, car or tree and press R1 (RB on Xbox) to take cover.",
      "Hold L2 (LT) to peek out and aim, then shoot with R2 (RT).",
      "In a fist fight, press X (A on Xbox) to block or dodge.",
    ],
    facts: [
      { label: "Cover", value: "R1 / RB" },
      { label: "Aim", value: "Hold L2 / LT" },
      { label: "Block or dodge", value: "X / A in melee" },
    ],
    faqs: [
      { question: "How do you take cover in GTA 6?", answer: "Stand next to cover and press R1 on PS5 or RB on Xbox. Hold L2 or LT to peek out and aim." },
      { question: "How do you dodge in GTA 6?", answer: "In a fist fight, press X on PS5 or A on Xbox to block or dodge." },
    ],
    related: [L.stealth, L.heal, L.focus, L.weapons],
  },
  {
    slug: "new-game",
    title: "GTA 6 New Game Plus? How to Start a New Game",
    heading: "New game and New Game Plus",
    description:
      "Does GTA 6 have New Game Plus? No. A new game starts again from the Prologue without your upgrades. Keep your old run in another save slot. Unofficial.",
    keywords: ["GTA 6 new game plus", "GTA 6 how to start new game", "GTA 6 new game", "GTA 6 restart story"],
    kind: "mission",
    answer: [
      "GTA 6 has no New Game Plus at launch.",
      "A new game starts again from the Prologue, without your money, upgrades or cars.",
      "Keep your old run safe in one of the 15 save slots before you start over.",
    ],
    facts: [
      { label: "New Game Plus", value: "No" },
      { label: "New game", value: "Starts at the Prologue" },
      { label: "Save slots", value: "15" },
    ],
    faqs: [
      { question: "Does GTA 6 have New Game Plus?", answer: "No. There is no New Game Plus at launch, so a new game starts from the beginning without your upgrades." },
      { question: "Can you keep playing after finishing GTA 6?", answer: "Yes. You can keep playing the open world after the story." },
    ],
    related: [L.save, L.replay, L.howLong, L.tips],
  },
  {
    slug: "pet-snake",
    title: "GTA 6 Snake: Jason's Pet Dolores and the Focus Boost",
    heading: "Jason's snake",
    description:
      "GTA 6 pet snake: Jason's snake Dolores lives in a terrarium by his kitchen. Feed her once a day for a 3% Focus boost. Unofficial guide.",
    keywords: ["GTA 6 snake", "GTA 6 snake name", "GTA 6 pet snake", "GTA 6 feed snake", "GTA 6 Dolores"],
    image: JASONS_PLACE,
    imageAlt: "Jason's place in Key Lento",
    kind: "animal",
    answer: [
      "Jason's pet snake is Dolores. Her terrarium is near the kitchen in his house in Key Lento.",
      "Feed her once a day for a 3% boost to Focus.",
      "Shooting hoops below the house also raises Focus early on.",
    ],
    facts: [
      { label: "Name", value: "Dolores" },
      { label: "Where", value: "Jason's place, by the kitchen" },
      { label: "Feed her", value: "+3% Focus, once a day" },
    ],
    faqs: [
      { question: "What is the snake's name in GTA 6?", answer: "Jason's pet snake is called Dolores." },
      { question: "Why feed the snake in GTA 6?", answer: "Feeding Dolores once a day gives Jason a 3% Focus boost." },
    ],
    related: [L.focus, L.jasonsPlace, L.workout, L.tips],
  },
  {
    slug: "rob-store",
    title: "GTA 6 How to Rob a Store and Open the Safe",
    heading: "How to rob a store",
    description:
      "How to rob a store in GTA 6: aim at the clerk so he empties the register, turn off the alarm, find the safe code and wipe the camera footage. Unofficial.",
    keywords: ["GTA 6 how to rob", "GTA 6 how to rob a store", "GTA 6 cash register", "GTA 6 how to open cash register", "GTA 6 safe codes", "GTA 6 store robbery"],
    image: ROBBERY_ART,
    imageAlt: "Jason and Lucia robbery, official Rockstar artwork",
    kind: "money",
    answer: [
      "Store robberies are open from Chapter 1. Wear a mask, walk in and aim at the clerk so he empties the register.",
      "For the back-room safe, turn off the alarm panel first. The code is on a note or screen nearby, or the staff will tell you.",
      "Destroy the camera recording before you leave, then lose the cops.",
    ],
    facts: [
      { label: "Unlock", value: "Chapter 1" },
      { label: "Register", value: "Aim at the clerk" },
      { label: "Safe code", value: "Note, screen or staff" },
    ],
    faqs: [
      { question: "How do you rob a store in GTA 6?", answer: "Aim your gun at the clerk and he empties the register. For more cash, turn off the alarm and open the back-room safe." },
      { question: "Where are safe codes in GTA 6?", answer: "Each store's code is on a note or screen nearby, or an employee gives it up when threatened." },
    ],
    related: [L.storeRobberies, L.mask, L.wanted, L.moneyGlitch],
  },
];

/** Story missions that have a quick guide (Chapters 1 to 3 only). */
export const missionGuides: Record<string, string> = {
  "lab-fees": "lab-fees-codes",
  pipework: "pipework",
  "hey-arnold": "hey-arnold",
  "feng-shui": "feng-shui",
  "island-dreams": "island-dreams",
  "coming-home": "fix-railing",
  "buck-me": "bank-account-atm",
  "down-to-earth": "focus",
  moses: "slim-jim",
  "steal-the-zorrusso-for-randy": "key-cloner",
};

export function findQuickGuide(slug: string) {
  return quickGuides.find((guide) => guide.slug === slug);
}

/** Card links for hub pages. */
export function quickGuideCards(slugs: readonly string[]) {
  return slugs
    .map((slug) => findQuickGuide(slug))
    .filter((guide): guide is QuickGuide => Boolean(guide));
}
