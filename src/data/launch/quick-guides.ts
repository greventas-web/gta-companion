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
const PARACHUTE = "/images/official/frames/parachuting.webp";
const SNAPMATIC = "/images/footage/phone/snapmatic.webp";
const UE_SAFEHOUSE = "/images/official/editions/ultimate_edition_safehouse_vehicles_01.webp";
const JET_SKIS = "/images/official/activities/jet-skis.webp";
const VICE_CITY = "/images/official/locations/vice-city.webp";
const VICE_DAY = "/images/official/media/screenshots-places-vice-city-vice-city-03.webp";
const VICE_NIGHT = "/images/official/media/screenshots-places-vice-city-vice-city-08.webp";
const VICE_DETAIL = "/images/official/media/screenshots-places-vice-city-vice-city-04.webp";
const IMPOUND = "/images/footage/guides/police-impound-hamlet.webp";
const KEY_CLONER = "/images/footage/guides/key-cloner-schafter.webp";
const BUY_OUTFIT = "/images/footage/guides/big-shots-outfit.webp";
const GAS_STATION = "/images/footage/guides/gas-station-services.webp";
const REFUEL = "/images/footage/guides/refuel-nozzle.webp";
const TAKE_COVER = "/images/footage/guides/take-cover.webp";
const WANTED = "/images/footage/places/wanted-hamlet-police.webp";
const SARAS_SALON = "/images/official/editions/ultimate_edition_saras_salon_02.webp";
const LEONIDA_KEYS = "/images/official/locations/leonida-keys.webp";
const WATCHING_TV = "/images/official/frames/watching-tv.webp";
const FLAMINGO = "/images/official/frames/flamingo.webp";
const BASKETBALL = "/images/official/activities/basketball.webp";
const MINI_GOLF = "/images/official/frames/mini-golf.webp";
const SHOOTING_RANGE = "/images/official/frames/shooting-range.webp";
const TRACK_RACING = "/images/official/frames/track-racing.webp";
const GYM = "/images/official/frames/gym-workout.webp";
const STORE_ROBBERY = "/images/official/frames/store-robbery.webp";
const GRASSRIVERS = "/images/official/locations/grassrivers.webp";

const L = {
  save: { href: "/guides/how-to-save", title: "How to save", kind: "mission" },
  replay: { href: "/guides/replay-missions", title: "Replay missions?", kind: "mission" },
  register: { href: "/guides/register-car", title: "Register a car", image: PAY_N_SPRAY, imageAlt: "Pay 'n' Spray in Key Lento", kind: "vehicle" },
  impound: { href: "/guides/impounded-car", title: "Impounded car", image: IMPOUND, imageAlt: "The police impound lot in Hamlet", kind: "vehicle" },
  callCar: { href: "/guides/call-your-car", title: "Call your car", kind: "phone" },
  keyCloner: { href: "/guides/key-cloner", title: "Key cloner", image: KEY_CLONER, imageAlt: "Jason cloning the key of a Benefactor Schafter V12", kind: "vehicle" },
  slimJim: { href: "/guides/slim-jim", title: "Slim jim", kind: "vehicle" },
  buyCar: { href: "/guides/buy-a-car", title: "Buy a car?", kind: "vehicle" },
  buyHouse: { href: "/guides/buy-a-house", title: "Buy a house?", image: JASONS_PLACE, imageAlt: "Jason's place in Key Lento", kind: "property" },
  bank: { href: "/guides/bank-account-atm", title: "Bank account and ATMs", kind: "money" },
  fastTravel: { href: "/guides/fast-travel", title: "Fast travel", image: RYDE_ME, imageAlt: "The RydeMe app on Jason's phone", kind: "phone" },
  railing: { href: "/guides/fix-railing", title: "Fix the railing", image: JASONS_PLACE, imageAlt: "Jason's place in Key Lento", kind: "property" },
  mask: { href: "/guides/mask", title: "Get a mask", image: CHUCKS, imageAlt: "Chuck's Tackle & Shot in Key Lento", kind: "clothing" },
  clothes: { href: "/guides/change-clothes", title: "Change clothes", image: BUY_OUTFIT, imageAlt: "Jason buying the Big Shots Tactical Gear outfit", kind: "clothing" },
  heal: { href: "/guides/how-to-heal", title: "How to heal", kind: "activity" },
  focus: { href: "/guides/focus", title: "Focus", kind: "activity" },
  switchChar: { href: "/guides/switch-characters", title: "Switch characters", image: JASON_AND_LUCIA, imageAlt: "Jason and Lucia, official Rockstar artwork", kind: "character" },
  firstPerson: { href: "/guides/first-person", title: "First person?", kind: "activity" },
  radio: { href: "/guides/change-radio-station", title: "Change the radio", image: FLASH_FM, imageAlt: "Flash FM, official Rockstar art", kind: "radio" },
  online: { href: "/guides/online", title: "GTA 6 Online?", kind: "activity" },
  tips: { href: "/guides/beginner-tips", title: "What to do first", image: KEY_LENTO, imageAlt: "Key Lento", kind: "location" },
  // Existing site pages
  wanted: { href: "/wanted-system", title: "Wanted system", image: WANTED, imageAlt: "Jason escaping the Hamlet Police Department with a wanted level", kind: "activity" },
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
  refuel: { href: "/guides/refuel", title: "Gas and refueling", image: REFUEL, imageAlt: "Jason filling up at a gas pump", kind: "vehicle" },
  repairCar: { href: "/guides/repair-car", title: "Repair your car", image: GAS_STATION, imageAlt: "The services prompt at a gas station pump", kind: "vehicle" },
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
  cover: { href: "/guides/take-cover", title: "Take cover", image: TAKE_COVER, imageAlt: "Jason in cover behind a wall during a shootout", kind: "weapon" },
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
  // Batch 3
  loseWanted: { href: "/guides/lose-wanted", title: "Lose the cops", image: WANTED, imageAlt: "Jason escaping the Hamlet Police Department with a wanted level", kind: "activity" },
  helicopter: { href: "/guides/helicopter", title: "Get a helicopter", kind: "vehicle" },
  boat: { href: "/guides/boat", title: "Get a boat", image: JET_SKIS, imageAlt: "Jet skis among boats in the Leonida Keys, official Rockstar still", kind: "vehicle" },
  parachute: { href: "/guides/parachute", title: "Get a parachute", image: PARACHUTE, imageAlt: "A parachute jump, official Rockstar still", kind: "activity" },
  armor: { href: "/guides/body-armor", title: "Body armor", image: CHUCKS, imageAlt: "Ammu-Nation sign at Chuck's Tackle & Shot", kind: "weapon" },
  usePhone: { href: "/guides/use-phone", title: "Use the phone", image: SNAPMATIC, imageAlt: "The Snapmatic app on the in-game phone", kind: "phone" },
  turnSignals: { href: "/guides/turn-signals", title: "Turn signals", kind: "vehicle" },
  ultimateEdition: { href: "/guides/ultimate-edition", title: "Ultimate Edition bonuses", image: UE_SAFEHOUSE, imageAlt: "Jason's Ultimate Edition safehouse vehicles, official Rockstar still", kind: "vehicle" },
  haircut: { href: "/guides/haircut", title: "Haircut and appearance", image: SARAS_SALON, imageAlt: "Jason at Sara's Unisex Salon (official Rockstar image)", kind: "clothing" },
  skipTime: { href: "/guides/skip-time", title: "Skip time", image: WATCHING_TV, imageAlt: "Watching TV, official Rockstar still", kind: "activity" },
  swimming: { href: "/guides/swimming", title: "Swimming and diving", image: TREASURE, imageAlt: "Jason diving for treasure at a shipwreck", kind: "activity" },
  fileSize: { href: "/guides/file-size", title: "How many GB?", kind: "activity" },
  platforms: { href: "/guides/platforms", title: "What can you play it on?", kind: "activity" },
  physicalCopy: { href: "/guides/physical-copy", title: "Is there a disc?", kind: "activity" },
  performance: { href: "/guides/performance-mode", title: "30 fps and performance", kind: "activity" },
  ps5Pro: { href: "/guides/ps5-pro", title: "Do you need a PS5 Pro?", kind: "activity" },
  chapters: { href: "/guides/how-many-chapters", title: "How many chapters?", image: JASON_AND_LUCIA, imageAlt: "Jason and Lucia, official Rockstar artwork", kind: "mission" },
  jewelryGuide: { href: "/guides/jewelry-robbery", title: "Rob a jewelry store", image: JEWELRY, imageAlt: "A jewelry store robbery, official Rockstar still", kind: "money" },
  whereBased: { href: "/guides/where-is-it-based", title: "Where is GTA 6 based?", image: VICE_CITY, imageAlt: "Vice City, official Rockstar still", kind: "location" },
  cheatsLocked: { href: "/guides/cheats-locked", title: "Cheats locked?", kind: "cheat" },
  gangHideouts: { href: "/guides/gang-hideouts", title: "Raid gang hideouts", kind: "money" },
  controls: { href: "/guides/controls", title: "PS5 and Xbox controls", kind: "activity" },
  launchPage: { href: "/gta-6-launch", title: "Launch facts", image: LEONIDA_KEYS, imageAlt: "Leonida Keys, official Rockstar still", kind: "location" },
  editions: { href: "/launch", title: "Editions", image: UE_SAFEHOUSE, imageAlt: "Jason's Ultimate Edition safehouse vehicles, official Rockstar still", kind: "vehicle" },
  hairSalons: { href: "/where-to-find/hair-salons", title: "Hair salons", kind: "clothingstore" },
  gangOps: { href: "/money-methods/gang-operations", title: "Gang operations", kind: "money" },
  gta6Apps: { href: "/gta-6-apps", title: "Phone apps", image: SNAPMATIC, imageAlt: "The Snapmatic app on the in-game phone", kind: "phone" },
  boating: { href: "/activities/boating", title: "Boating", image: JET_SKIS, imageAlt: "Jet skis among boats in the Leonida Keys, official Rockstar still", kind: "activity" },
  locationsHub: { href: "/locations", title: "Locations", image: VICE_CITY, imageAlt: "Vice City, official Rockstar still", kind: "location" },
  // Batch 4
  streetRaces: { href: "/guides/street-races", title: "Street races", image: TRACK_RACING, imageAlt: "Track racing, official Rockstar still", kind: "activity" },
  headlights: { href: "/guides/headlights", title: "Headlights", kind: "vehicle" },
  autoDrive: { href: "/guides/auto-drive", title: "Auto-drive", kind: "vehicle" },
  stuntJumps: { href: "/guides/stunt-jumps", title: "Stunt jumps", kind: "activity" },
  collectibleCards: { href: "/guides/collectible-cards", title: "Collectible cards", kind: "activity" },
  flamingos: { href: "/guides/flamingos", title: "Cocaine Flamingos", image: FLAMINGO, imageAlt: "A flamingo, official Rockstar still", kind: "activity" },
  shootingRangesGuide: { href: "/guides/shooting-ranges", title: "Shooting ranges", image: SHOOTING_RANGE, imageAlt: "A shooting range, official Rockstar still", kind: "range" },
  skipCutscenes: { href: "/guides/skip-cutscenes", title: "Skip cutscenes", kind: "mission" },
  wastedBusted: { href: "/guides/wasted-busted", title: "Wasted and Busted", kind: "activity" },
  photoMode: { href: "/guides/photo-mode", title: "Photo mode", image: SNAPMATIC, imageAlt: "The Snapmatic app on the in-game phone", kind: "phone" },
  tattoos: { href: "/guides/tattoos", title: "Tattoos", kind: "clothing" },
  basketball: { href: "/guides/basketball", title: "Basketball", image: BASKETBALL, imageAlt: "An outdoor basketball court in Vice City, official Rockstar still", kind: "activity" },
  unwantedAttention: { href: "/guides/unwanted-attention", title: "Unwanted Attention", kind: "mission" },
  justAScratch: { href: "/guides/just-a-scratch", title: "Just A Scratch", image: COASTAL, imageAlt: "Coastal Auto Care in Key Lento", kind: "mission" },
  accessibility: { href: "/guides/accessibility", title: "Accessibility settings", kind: "activity" },
  trophiesGuide: { href: "/guides/trophies", title: "Trophies and platinum", kind: "activity" },
  miniGolf: { href: "/guides/mini-golf", title: "Mini-golf", image: MINI_GOLF, imageAlt: "Cal Hampton on an alligator-themed mini-golf course, official Rockstar still", kind: "activity" },
  wainkScans: { href: "/guides/waink-scans", title: "WAiNK scans", kind: "phone" },
  horn: { href: "/guides/horn", title: "Horn and nitrous", kind: "vehicle" },
  minimap: { href: "/guides/minimap", title: "Minimap and waypoints", kind: "location" },
  aimAssist: { href: "/guides/aim-assist", title: "Aim assist", kind: "weapon" },
  collectiblesHub: { href: "/collectibles", title: "Collectibles", image: FLAMINGO, imageAlt: "A flamingo, official Rockstar still", kind: "activity" },
  cardsHub: { href: "/collectibles/card-sets", title: "Card sets", kind: "activity" },
  flamingosHub: { href: "/collectibles/cocaine-flamingos", title: "Cocaine Flamingos", image: FLAMINGO, imageAlt: "A flamingo, official Rockstar still", kind: "activity" },
  stuntsHub: { href: "/collectibles/stunt-jumps", title: "Stunt jumps", kind: "activity" },
  rangesHub: { href: "/shooting-ranges", title: "Shooting ranges", image: SHOOTING_RANGE, imageAlt: "A shooting range, official Rockstar still", kind: "range" },
  trophiesHub: { href: "/trophies", title: "Trophies list", kind: "activity" },
  basketballHub: { href: "/activities/basketball", title: "Basketball", image: BASKETBALL, imageAlt: "An outdoor basketball court in Vice City, official Rockstar still", kind: "activity" },
  miniGolfHub: { href: "/activities/mini-golf", title: "Mini-golf", image: MINI_GOLF, imageAlt: "Cal Hampton on an alligator-themed mini-golf course, official Rockstar still", kind: "activity" },
  racesMoney: { href: "/money-methods/street-races", title: "Win street races", image: TRACK_RACING, imageAlt: "Track racing, official Rockstar still", kind: "money" },
  coastalShop: { href: "/where-to-find/mod-shops", title: "Mod shops", image: COASTAL, imageAlt: "Coastal Auto Care in Key Lento", kind: "mod" },
  unwantedMission: { href: "/missions/unwanted-attention", title: "Unwanted Attention", line: "Chapter 1", kind: "mission" },
  scratchMission: { href: "/missions/just-a-scratch", title: "Just A Scratch", line: "Chapter 1", kind: "mission" },
  activities: { href: "/activities", title: "Activities", kind: "activity" },
  hamlet: { href: "/locations/hamlet", title: "Hamlet", kind: "location" },
  keyLento: { href: "/locations/key-lento", title: "Key Lento", image: KEY_LENTO, imageAlt: "Key Lento", kind: "location" },
  // Batch 5
  partnerDrive: { href: "/guides/partner-drive", title: "Partner drive", image: JASON_AND_LUCIA, imageAlt: "Jason and Lucia, official Rockstar artwork", kind: "character" },
  bigfoot: { href: "/guides/bigfoot", title: "Bigfoot", image: GRASSRIVERS, imageAlt: "Grassrivers, official Rockstar still", kind: "activity" },
  weather: { href: "/guides/weather", title: "Weather", kind: "location" },
  policeScanner: { href: "/guides/police-scanner", title: "Police scanner", kind: "phone" },
  bankJobs: { href: "/guides/bank-jobs", title: "Bank jobs", image: STORE_ROBBERY, imageAlt: "A store robbery, official Rockstar still", kind: "money" },
  relationship: { href: "/guides/relationship", title: "Relationship status", image: JASON_AND_LUCIA, imageAlt: "Jason and Lucia, official Rockstar artwork", kind: "character" },
  callPartner: { href: "/guides/call-partner", title: "Call your partner", image: JASON_AND_LUCIA, imageAlt: "Jason and Lucia, official Rockstar artwork", kind: "phone" },
  characterStats: { href: "/guides/character-stats", title: "Health, stamina and Focus", image: GYM, imageAlt: "A gym workout, official Rockstar still", kind: "activity" },
  climbing: { href: "/guides/climbing", title: "Climbing", kind: "activity" },
  scanCar: { href: "/guides/scan-car", title: "Scan a car with WAiNK", kind: "vehicle" },
  whatup: { href: "/guides/whatup", title: "WhatUp", kind: "phone" },
  meditation: { href: "/guides/meditation", title: "Meditation", kind: "activity" },
  handbrake: { href: "/guides/handbrake", title: "Handbrake and U-turn", kind: "vehicle" },
  loadout: { href: "/guides/loadout", title: "Loadout", kind: "weapon" },
  hotwire: { href: "/guides/hotwire", title: "Hotwire a car", kind: "vehicle" },
  carjack: { href: "/guides/carjack", title: "Carjack", kind: "vehicle" },
  criminalProfile: { href: "/guides/criminal-profile", title: "Criminal profile", kind: "activity" },
  publicTransport: { href: "/guides/public-transport", title: "Buses and trains", kind: "location" },
  driveBy: { href: "/guides/drive-by", title: "Drive-by shooting", kind: "weapon" },
  crouch: { href: "/guides/crouch", title: "Crouch", kind: "activity" },
  meditationHub: { href: "/activities/meditation", title: "Meditation spots", kind: "activity" },
  grassrivers: { href: "/locations/grassrivers", title: "Grassrivers", image: GRASSRIVERS, imageAlt: "Grassrivers, official Rockstar still", kind: "location" },
  creditCheck: { href: "/missions/credit-check", title: "Credit Check", line: "Chapter 3", kind: "mission" },
  smashGrabs: { href: "/where-to-find/jewelry-stores-and-pawn-shops", title: "All 35 jewelry stores and pawn shops", image: JEWELRY, imageAlt: "A jewelry store robbery, official Rockstar still", kind: "money" },
  paydayLoans: { href: "/where-to-find/payday-loans", title: "All 7 Payday Loans", kind: "money" },
  gyms: { href: "/where-to-find/gyms", title: "All 9 gyms", image: GYM, imageAlt: "A gym workout, official Rockstar still", kind: "activity" },
  hundred: { href: "/guides/100-percent-completion", title: "100% checklist", kind: "trophy" },
  ufo: { href: "/guides/ufo", title: "UFO easter egg", kind: "activity" },
  wainkLocations: { href: "/collectibles/waink-locations", title: "WAiNK locations", line: "Landmarks, sculptures, curiosities", kind: "collectible" },
  magazines: { href: "/collectibles/magazines-books-comics", title: "Magazines, books and comics", line: "27 to read", kind: "collectible" },
  uniqueRaces: { href: "/collectibles/unique-races", title: "All 40 unique races", image: TRACK_RACING, imageAlt: "Track racing, official Rockstar still", kind: "activity" },
  gasStations: { href: "/where-to-find/gas-stations", title: "All 57 gas stations", image: GAS_STATION, imageAlt: "The services prompt at a gas station pump", kind: "vehicle" },
  carWashes: { href: "/where-to-find/car-washes", title: "All 6 car washes", kind: "vehicle" },
  shipwrecks: { href: "/guides/shipwrecks", title: "Kenton's shipwrecks", image: TREASURE, imageAlt: "Jason diving for treasure at a shipwreck", kind: "activity" },
  bars: { href: "/where-to-find/bars", title: "All bars", kind: "business" },
  convenienceStores: { href: "/where-to-find/convenience-stores", title: "All 72 convenience stores", kind: "store" },
  streetFood: { href: "/where-to-find/street-food", title: "All street food vendors", kind: "store" },
  liquorStores: { href: "/where-to-find/liquor-stores", title: "All 14 liquor stores", kind: "store" },
  fastFood: { href: "/where-to-find/fast-food", title: "All 21 fast food stores", kind: "store" },
  militaryBase: { href: "/guides/military-base", title: "Military base (Mile Zero)", kind: "location" },
  tank: { href: "/guides/tank", title: "Get a tank", kind: "vehicle" },
  fighterJet: { href: "/guides/fighter-jet", title: "Get a fighter jet", kind: "vehicle" },
  rocketLauncher: { href: "/guides/rocket-launcher", title: "Get a rocket launcher", kind: "weapon" },
  cafes: { href: "/where-to-find/cafes", title: "All 87 cafes and takeout", kind: "store" },
  rhino: { href: "/vehicles/hauners-rhino-tank", title: "Hauners Rhino Tank", kind: "vehicle" },
  lazer: { href: "/vehicles/hauners-p-996-lazer", title: "Hauners P-996 Lazer", kind: "vehicle" },
  hat: { href: "/weapons/hauners-h-at", title: "Hauners H-AT", kind: "weapon" },
  griffinRange: { href: "/shooting-ranges/griffin-shooting-range", title: "Griffin Shooting Range", image: SHOOTING_RANGE, imageAlt: "A shooting range, official Rockstar still", kind: "range" },
  southwindMap: { href: "/map?pin=confirmed%3Asouthwind", title: "Southwind on the map", kind: "location" },
  fastFurious: { href: "/guides/fast-and-furious-car", title: "Fast and Furious car", kind: "vehicle" },
  dexter: { href: "/guides/dexter-apartment", title: "Dexter's apartment", kind: "location" },
  easterEggs: { href: "/guides/easter-eggs", title: "All Easter eggs", kind: "location" },
  robCopCar: { href: "/guides/rob-police-car", title: "Rob a police car", kind: "weapon" },
  petAnimals: { href: "/guides/pet-animals", title: "Pet dogs and cats", kind: "animal" },
  carTrackers: { href: "/guides/car-trackers", title: "Car trackers explained", kind: "vehicle" },
  jetSki: { href: "/guides/jet-ski", title: "Ride the jet ski", image: JET_SKIS, imageAlt: "Jet skis among boats in the Leonida Keys, official Rockstar still", kind: "vehicle" },
  viceCity: { href: "/locations/vice-city", title: "Vice City", image: VICE_CITY, imageAlt: "Vice City, official Rockstar still", kind: "location" },
  jasonsPlaceMap: { href: "/map?pin=confirmed%3Ajasons-place", title: "Jason's house on the map", kind: "location" },
  millportMap: { href: "/map?pin=confirmed%3Amillport", title: "Millport on the map", kind: "location" },
  charactersHub: { href: "/characters", title: "Characters", image: JASON_AND_LUCIA, imageAlt: "Jason and Lucia, official Rockstar artwork", kind: "character" },
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
    related: [L.payNSpray, L.waink, L.garages, L.moses, L.callCar, L.buyCar, L.carTrackers, L.fastFurious],
  },
  {
    slug: "key-cloner",
    title: "GTA 6 Key Cloner: How to Unlock It and Steal Keyless Cars",
    heading: "Key cloner",
    description:
      "How to get the key cloner in GTA 6: it comes in the Chapter 3 mission Steal The Zorrusso For Randy and opens and starts keyless cars. Unofficial guide.",
    keywords: ["GTA 6 key cloner", "GTA 6 how to get key cloner", "GTA 6 how to unlock key cloner", "GTA 6 clone key", "GTA 6 keyless cars"],
    image: KEY_CLONER,
    imageAlt: "Jason cloning the key of a Benefactor Schafter V12",
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
    related: [L.zorrusso, L.randy, L.slimJim, L.waink, L.register, L.fastestCars, L.carTrackers],
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
    image: IMPOUND,
    imageAlt: "The police impound lot in Hamlet",
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
    related: [L.focus, L.weapons, L.wanted, L.tips, L.convenienceStores, L.streetFood, L.cafes],
  },
  {
    slug: "change-clothes",
    title: "GTA 6 How to Change Clothes and Save Outfits",
    heading: "How to change clothes",
    description:
      "How to change clothes in GTA 6: use the wardrobe at your safehouse, or save outfits to your car's trunk and change there. It also lowers Heat. Unofficial.",
    keywords: ["GTA 6 how to change clothes", "GTA 6 change outfit", "GTA 6 save outfits", "GTA 6 wardrobe", "GTA 6 how to change appearance"],
    image: BUY_OUTFIT,
    imageAlt: "Jason buying the Big Shots Tactical Gear outfit",
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
    related: [L.moses, L.keyCloner, L.register, L.sellMoses, L.robCopCar, L.carTrackers],
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
    related: [L.downToEarth, L.heal, L.weapons, L.tips, L.petAnimals],
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
    related: [L.fengShuiMission, L.jasonsPlace, L.jasonsPlaceMap, L.railing, L.missions],
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
    related: [L.islandMission, L.kenton, L.treasureDiving, L.shark, L.scuba, L.shipwrecks],
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
    related: [L.treasureDiving, L.islandDreams, L.kenton, L.shark, L.shipwrecks],
  },
  {
    slug: "refuel",
    title: "GTA 6 Gas: How to Refuel and Find Gas Stations",
    heading: "Gas and refueling",
    description:
      "Do cars need gas in GTA 6? Yes. Press Down on the D-pad to check fuel, then pull up to a pump at any gas station to refuel. Unofficial guide.",
    keywords: ["GTA 6 gas", "GTA 6 gas stations", "GTA 6 gas station locations", "GTA 6 where to get gas", "GTA 6 gas gauge", "GTA 6 refuel"],
    image: REFUEL,
    imageAlt: "Jason filling up at a gas pump",
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
    related: [L.gasStations, L.repairCar, L.customize, L.callCar, L.register],
  },
  {
    slug: "repair-car",
    title: "GTA 6 How to Repair Your Car",
    heading: "How to repair your car",
    description:
      "How to repair your car in GTA 6: use the repair option at a gas station pump. In Chapter 1, call Joey. Later, Scooter Bros brings back wrecked cars. Unofficial.",
    keywords: ["GTA 6 how to repair car", "GTA 6 repair car", "GTA 6 fix car", "GTA 6 car damage"],
    image: GAS_STATION,
    imageAlt: "The services prompt at a gas station pump",
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
    related: [L.refuel, L.carWashes, L.callCar, L.register, L.customize],
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
    related: [L.mapFog, L.fastTravel, L.vehiclesHub, L.wanted, L.fighterJet],
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
    related: [L.gyms, L.focus, L.snake, L.jasonsPlace, L.heal],
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
    image: TAKE_COVER,
    imageAlt: "Jason in cover behind a wall during a shootout",
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
    related: [L.focus, L.jasonsPlace, L.workout, L.tips, L.petAnimals],
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
    related: [L.storeRobberies, L.mask, L.wanted, L.moneyGlitch, L.liquorStores],
  },
  {
    slug: "lose-wanted",
    title: "GTA 6 How to Lose the Cops and Wanted Level",
    heading: "How to lose the cops",
    description:
      "How to lose the cops in GTA 6: break line of sight, leave the marked heat area, then change your outfit, look or car so the police description no longer matches. Unofficial.",
    keywords: ["GTA 6 how to lose wanted level", "GTA 6 how to lose cops", "GTA 6 how to lose 6 stars", "GTA 6 how to lose red stars", "GTA 6 heat system", "GTA 6 wanted level"],
    image: WANTED,
    imageAlt: "Jason escaping the Hamlet Police Department with a wanted level",
    kind: "activity",
    answer: [
      "Break the cops' line of sight, then leave the marked heat area on the map. Wanted status is tied to that area, not the whole map, until the stars get very high.",
      "Icons under your stars show what the police have on you. Change your whole outfit, get a new haircut, switch or respray the car, hide the weapon, or split up if they have you as a pair.",
      "Red stars mean the chase has stopped but you are still inside the search area. Stay out, or go back only after you no longer match the description. Don't kill cops: that raises the level. There are up to six stars.",
    ],
    facts: [
      { label: "Stars", value: "Up to 6" },
      { label: "Leave", value: "The marked heat area" },
      { label: "Red stars", value: "Chase over, still in the search area" },
    ],
    faqs: [
      { question: "How do you lose the cops in GTA 6?", answer: "Break line of sight, leave the marked heat area, then change whatever the icons under your stars show: outfit, look, car or weapon." },
      { question: "What do red stars mean in GTA 6?", answer: "The chase has stopped, but you are still inside the area the police are searching. Leave that area or change your description before you go back." },
    ],
    related: [L.wanted, L.clothes, L.mask, L.haircut],
  },
  {
    slug: "helicopter",
    title: "GTA 6 How to Get a Helicopter Early",
    heading: "Get a helicopter",
    description:
      "How to get a helicopter in GTA 6: a Buckingham Maverick sits on the Southwind dock by Sherwin Boatworks, southwest of Key Lento. Rooftop helipads have more. Unofficial.",
    keywords: ["GTA 6 helicopter", "GTA 6 helicopter location", "GTA 6 how to get a helicopter", "GTA 6 helicopter spawn", "GTA 6 chopper"],
    kind: "vehicle",
    answer: [
      "An early Buckingham Maverick sits on a dock in Southwind, southwest of Key Lento along Sunbelt Highway (Route 1).",
      "Turn into the parking lot by the Sherwin Boatworks and Chicki's Tiki Bar signs, then go east through the open gate onto the dock.",
      "Helicopters also sit on some rooftop helipads, including in Vice City. Fly with R2 or RT for throttle, like a plane.",
    ],
    facts: [
      { label: "Early chopper", value: "Buckingham Maverick" },
      { label: "Where", value: "Southwind dock, by Sherwin Boatworks" },
      { label: "Throttle", value: "R2 / RT" },
    ],
    faqs: [
      { question: "Where can you find a helicopter in GTA 6?", answer: "A Buckingham Maverick is on the Southwind dock east of the Sherwin Boatworks parking lot, southwest of Key Lento. Some rooftop helipads have one too." },
      { question: "How do you fly a helicopter in GTA 6?", answer: "Hold R2 on PS5 or RT on Xbox to add throttle, and use the left stick to tilt. Same idea as the plane controls." },
    ],
    related: [L.plane, L.parachute, L.vehiclesHub, L.mapFog, L.militaryBase],
  },
  {
    slug: "boat",
    title: "GTA 6 How to Get a Boat and Drive It",
    heading: "Get a boat",
    description:
      "How to get a boat in GTA 6: take small boats from docks and marinas around Leonida. A fishing boat sits behind Jason's house in Key Lento. You can't register boats. Unofficial.",
    keywords: ["GTA 6 boats", "GTA 6 how to get a boat", "GTA 6 boat controls", "GTA 6 boat location", "GTA 6 can you own a boat"],
    image: JET_SKIS,
    imageAlt: "Jet skis among boats in the Leonida Keys, official Rockstar still",
    kind: "vehicle",
    answer: [
      "Take a small boat from a dock or marina. There is one on the dock behind Jason's house in Key Lento from the start.",
      "You can't register a boat as a personal vehicle the way you can with cars.",
      "On the water, use the same vehicle controls: R2 or RT to accelerate, L2 or LT to brake.",
    ],
    facts: [
      { label: "Early boat", value: "Dock behind Jason's house" },
      { label: "Register?", value: "No, boats can't be personal vehicles" },
      { label: "Throttle", value: "R2 / RT" },
    ],
    faqs: [
      { question: "How do you get a boat in GTA 6?", answer: "Steal a small boat from a dock or marina. A fishing boat sits behind Jason's house in Key Lento early on." },
      { question: "Can you own a boat in GTA 6?", answer: "You can use boats you find, but you can't register one as a personal vehicle." },
    ],
    related: [L.boating, L.fishing, L.jasonsPlace, L.scuba, L.jetSki],
  },
  {
    slug: "parachute",
    title: "GTA 6 How to Get a Parachute and Use It",
    heading: "Get a parachute",
    description:
      "How to get a parachute in GTA 6: pick one up at Ammu-Nation or from a box on a base-jump rooftop. Press Cross or A to open it in freefall. Unofficial.",
    keywords: ["GTA 6 parachute", "GTA 6 how to get a parachute", "GTA 6 parachute jump", "GTA 6 where to buy parachute", "GTA 6 base jump"],
    image: PARACHUTE,
    imageAlt: "A parachute jump, official Rockstar still",
    kind: "activity",
    answer: [
      "Pick up a parachute at an Ammu-Nation, from the rack, often near the body armor.",
      "Base-jump rooftops and the peak in Mount Kalaga also have a pack you can take.",
      "In freefall, press Cross or A to open it. After you land, get another pack at a gun store or rooftop before you jump again.",
    ],
    facts: [
      { label: "Buy", value: "Ammu-Nation rack" },
      { label: "Also", value: "Base-jump rooftops, Mount Kalaga" },
      { label: "Open", value: "Cross / A in freefall" },
    ],
    faqs: [
      { question: "Where do you get a parachute in GTA 6?", answer: "At Ammu-Nation stores, or from a supply box on a base-jump rooftop. There is also one on the peak in Mount Kalaga National Park." },
      { question: "How do you use a parachute in GTA 6?", answer: "Jump from a plane or a high roof, then press Cross on PS5 or A on Xbox in freefall to open it. Steer with the left stick." },
    ],
    related: [L.gunStores, L.plane, L.helicopter, L.armor],
  },
  {
    slug: "body-armor",
    title: "GTA 6 How to Get and Equip Body Armor",
    heading: "Body armor",
    description:
      "How to get body armor in GTA 6: buy a vest at Ammu-Nation, including Chuck's Tackle & Shot in Key Lento, then turn it on from the item wheel. Unofficial.",
    keywords: ["GTA 6 body armor", "GTA 6 armor", "GTA 6 how to get armor", "GTA 6 bulletproof vest", "GTA 6 how to equip armor"],
    image: CHUCKS,
    imageAlt: "Ammu-Nation sign at Chuck's Tackle & Shot",
    kind: "weapon",
    answer: [
      "Buy body armor at Ammu-Nation. Chuck's Tackle & Shot in Key Lento keeps vests on the right wall, and clerks also sell them under Equipment.",
      "Hold L1 or LB, open the item wheel and switch the vest on. A blue bar appears above your health.",
      "The vest soaks up bullets until it is used up. Then you need another one.",
    ],
    facts: [
      { label: "Where", value: "Ammu-Nation" },
      { label: "Early shop", value: "Chuck's Tackle & Shot, Key Lento" },
      { label: "Equip", value: "Item wheel, switch on" },
    ],
    faqs: [
      { question: "Where do you buy body armor in GTA 6?", answer: "At Ammu-Nation stores. Chuck's Tackle & Shot in Key Lento has vests on the right wall, and clerks sell them under Equipment." },
      { question: "How do you equip body armor in GTA 6?", answer: "Open the item wheel with L1 or LB, select the vest and switch it on. A blue bar appears above your health until the vest is spent." },
    ],
    related: [L.gunStores, L.heal, L.parachute, L.wanted],
  },
  {
    slug: "use-phone",
    title: "GTA 6 How to Use and Open the Phone",
    heading: "How to use the phone",
    description:
      "How to use the phone in GTA 6: press Up on the D-pad to open it, pick an app, and press Circle or B to put it away. Hold Up for WAiNK. Unofficial.",
    keywords: ["GTA 6 how to use phone", "GTA 6 how to open phone", "GTA 6 phone", "GTA 6 phone apps", "GTA 6 cellphone"],
    image: SNAPMATIC,
    imageAlt: "The Snapmatic app on the in-game phone",
    kind: "phone",
    answer: [
      "Press Up on the D-pad to open the phone, even in a vehicle. The world does not pause.",
      "Move to an app and press X or A to open it. Press Circle or B to put the phone away.",
      "Hold Up to jump into the WAiNK scanner. More apps, like BuckMe and RydeMe, unlock as you play.",
    ],
    facts: [
      { label: "Open", value: "D-pad Up" },
      { label: "WAiNK", value: "Hold D-pad Up" },
      { label: "Close", value: "Circle / B" },
    ],
    faqs: [
      { question: "How do you open the phone in GTA 6?", answer: "Press Up on the D-pad. Hold Up to open the WAiNK scanner. Press Circle on PS5 or B on Xbox to put it away." },
      { question: "Does opening the phone pause GTA 6?", answer: "No. The game keeps running, so don't open it in the middle of a fight." },
    ],
    related: [L.gta6Apps, L.waink, L.bank, L.fastTravel],
  },
  {
    slug: "turn-signals",
    title: "GTA 6 How to Use Turn Signals and Blinkers",
    heading: "Turn signals",
    description:
      "How to use turn signals in GTA 6: tap Left or Right on the D-pad while driving. A short tap is enough; holding Left opens the vehicle menu. Unofficial.",
    keywords: ["GTA 6 how to use turn signals", "GTA 6 blinkers", "GTA 6 indicators", "GTA 6 turn signals", "GTA 6 car blinkers"],
    kind: "vehicle",
    answer: [
      "While driving, tap Left on the D-pad for the left signal and Right for the right signal.",
      "Keep the tap short. Holding Left opens the radio and vehicle menu instead.",
      "The signal turns off after you turn that way, or tap the same side again to cancel it.",
    ],
    facts: [
      { label: "Left signal", value: "Tap D-pad Left" },
      { label: "Right signal", value: "Tap D-pad Right" },
      { label: "Hold Left", value: "Opens the vehicle menu" },
    ],
    faqs: [
      { question: "How do you use turn signals in GTA 6?", answer: "Tap Left or Right on the D-pad while driving. Don't hold the button, or you will open the vehicle menu." },
      { question: "How do you turn off blinkers in GTA 6?", answer: "They switch off after you turn that way. You can also tap the same D-pad direction again to cancel them." },
    ],
    related: [L.radio, L.controls, L.register, L.repairCar],
  },
  {
    slug: "ultimate-edition",
    title: "GTA 6 Where to Get Ultimate Edition Items and Guns",
    heading: "Ultimate Edition bonuses",
    description:
      "Where to get GTA 6 Ultimate Edition items: the Dinka Enduro and Crest Kayak are at Jason's house in Chapter 1. Personalized pistols and Chapter 2 revolvers are in the Ammu-Nation locker. Unofficial.",
    keywords: ["GTA 6 where to get ultimate edition items", "GTA 6 how to get ultimate edition guns", "GTA 6 ultimate edition bonuses", "GTA 6 ultimate edition weapons", "GTA 6 ultimate edition vehicles"],
    image: UE_SAFEHOUSE,
    imageAlt: "Jason's Ultimate Edition safehouse vehicles, official Rockstar still",
    kind: "vehicle",
    answer: [
      "If you have the Ultimate Edition, a Dinka Enduro motorcycle and a Crest Kayak are at Jason's house from Chapter 1.",
      "Personalized pistols are in the weapon locker at any Ammu-Nation: Jason's Girardi ES9 from Chapter 1, Lucia's Klose K17 from Chapter 2.",
      "Hawk & Little Morgan revolvers for both characters are in that same locker from Chapter 2. Other bonuses unlock later in the story.",
    ],
    facts: [
      { label: "Chapter 1", value: "Enduro, kayak, Jason's pistol" },
      { label: "Chapter 2", value: "Morgan revolvers, Lucia's pistol" },
      { label: "Where", value: "Jason's house and Ammu-Nation lockers" },
    ],
    faqs: [
      { question: "Where are the Ultimate Edition guns in GTA 6?", answer: "In the weapon locker at any Ammu-Nation. Jason's personalized pistol is there in Chapter 1. Lucia's pistol and the Morgan revolvers unlock in Chapter 2." },
      { question: "Where are the Ultimate Edition vehicles at the start of GTA 6?", answer: "The Dinka Enduro and Crest Kayak are at Jason's house in Key Lento from Chapter 1. More vehicles unlock later in the story." },
    ],
    related: [L.editions, L.jasonsPlace, L.gunStores, L.launchPage],
  },
  {
    slug: "haircut",
    title: "GTA 6 How to Get a Haircut and Change Appearance",
    heading: "Haircut and appearance",
    description:
      "How to get a haircut in GTA 6: visit a hair and beauty salon on the map. You can change hair, Jason's facial hair and Lucia's makeup. Unofficial.",
    keywords: ["GTA 6 how to get a haircut", "GTA 6 how to change appearance", "GTA 6 barber", "GTA 6 hair salon", "GTA 6 facial hair", "GTA 6 tattoos"],
    image: SARAS_SALON,
    imageAlt: "Jason with a new mullet at Sara's Unisex Salon (official Rockstar image)",
    kind: "clothing",
    answer: [
      "Open the map, go to the Style legend and pick Hair and Beauty. Salons use an orange scissors icon. There are 18, including 4 barber shops.",
      "Any of those shops can change your hairstyle. Jason can change facial hair, and Lucia can change makeup.",
      "A new haircut can help clear a police description, but a hat, glasses or a mask is faster mid-chase. Tattoo shops are listed under Style too.",
    ],
    facts: [
      { label: "Salons", value: "18, including 4 barbers" },
      { label: "Map", value: "Style > Hair and Beauty" },
      { label: "Also", value: "Tattoos under Style" },
    ],
    faqs: [
      { question: "Where do you get a haircut in GTA 6?", answer: "At any of the 18 hair and beauty salons, marked with a scissors icon. Open the map, go to Style, and pick Hair and Beauty." },
      { question: "Does a haircut help you lose the cops in GTA 6?", answer: "Yes, a new hairstyle can clear a physical description, but changing a hat, glasses or outfit is faster if you are still in a chase." },
    ],
    related: [L.hairSalons, L.clothes, L.mask, L.loseWanted],
  },
  {
    slug: "skip-time",
    title: "GTA 6 How to Skip Time and Sleep",
    heading: "How to skip time",
    description:
      "How to skip time in GTA 6: sleep in the bed at your safehouse and pick the time of day you want. You can only do this at an unlocked safehouse. Unofficial.",
    keywords: ["GTA 6 how to skip time", "GTA 6 how to sleep", "GTA 6 change time of day", "GTA 6 rest", "GTA 6 wait"],
    image: WATCHING_TV,
    imageAlt: "Watching TV, official Rockstar still",
    kind: "activity",
    answer: [
      "Go to the bed in your current safehouse, interact with it, then choose to sleep.",
      "Pick the time of day you want the clock to jump to.",
      "You can only do this at an unlocked safehouse, not in a random bed out in the world.",
    ],
    facts: [
      { label: "Where", value: "Safehouse bed" },
      { label: "Does", value: "Jumps to the time of day you pick" },
      { label: "Not at", value: "Random beds in the world" },
    ],
    faqs: [
      { question: "How do you skip time in GTA 6?", answer: "Sleep in the bed at your safehouse and pick the time of day you want." },
      { question: "Can you sleep anywhere in GTA 6?", answer: "No. You can only sleep at an unlocked safehouse." },
    ],
    related: [L.jasonsPlace, L.buyHouse, L.save, L.fastTravel],
  },
  {
    slug: "swimming",
    title: "GTA 6 How to Swim and Dive Underwater",
    heading: "Swimming and diving",
    description:
      "How to swim in GTA 6: enter the water, click L3 to swim faster, hold R1 or RB to dive, and press Cross or A to surface. Unofficial.",
    keywords: ["GTA 6 swimming", "GTA 6 how to swim", "GTA 6 how to dive", "GTA 6 underwater", "GTA 6 dive controls"],
    image: TREASURE,
    imageAlt: "Jason diving for treasure at a shipwreck",
    kind: "activity",
    answer: [
      "Walk or jump into deep water to start swimming. Move with the left stick.",
      "Click L3 to swim faster. Hold R1 on PS5 or RB on Xbox to dive.",
      "Press Cross or A to surface. For longer dives, put on scuba gear first.",
    ],
    facts: [
      { label: "Faster", value: "Click L3" },
      { label: "Dive", value: "Hold R1 / RB" },
      { label: "Surface", value: "Cross / A" },
    ],
    faqs: [
      { question: "How do you swim in GTA 6?", answer: "Enter deep water and move with the left stick. Click L3 to swim faster." },
      { question: "How do you dive underwater in GTA 6?", answer: "Hold R1 on PS5 or RB on Xbox to dive, and press Cross or A to surface." },
    ],
    related: [L.scuba, L.treasureDiving, L.fishing, L.boat],
  },
  {
    slug: "file-size",
    title: "GTA 6 File Size: How Many GB Do You Need?",
    heading: "How many GB is GTA 6?",
    description:
      "How many GB is GTA 6? Rockstar says the game needs up to 212 GB of storage, depending on the device. PlayStation uses the same 212 GB figure for PS5. Unofficial.",
    keywords: ["GTA 6 how many GB", "GTA 6 file size", "GTA 6 how much space", "GTA 6 storage", "GTA 6 download size"],
    kind: "activity",
    answer: [
      "Rockstar says the game needs up to 212 GB of storage, depending on the device. That figure is from the pre-load notice.",
      "PlayStation also tells PS5 players to clear at least 212 GB.",
      "Leave a little extra room for updates after that.",
    ],
    facts: [
      { label: "Storage", value: "Up to 212 GB" },
      { label: "Applies to", value: "PS5 and Xbox Series X|S" },
      { label: "Updates", value: "Leave extra room" },
    ],
    faqs: [
      { question: "How many GB is GTA 6?", answer: "Rockstar says the game needs up to 212 GB of storage, depending on the device. PlayStation uses the same 212 GB figure on PS5." },
      { question: "Does GTA 6 fit on a standard PS5?", answer: "Yes, if you have at least 212 GB of storage clear. The 825 GB PS5 model has about 667 GB usable after system software." },
    ],
    related: [L.launchPage, L.platforms, L.physicalCopy, L.performance],
  },
  {
    slug: "platforms",
    title: "GTA 6 Platforms: PC, PS4, Xbox One and Switch",
    heading: "What can you play GTA 6 on?",
    description:
      "Can you play GTA 6 on PC, PS4 or Xbox One? It is on PS5 and Xbox Series X|S. Not on PS4. Xbox One can stream it with Xbox Cloud Gaming. No PC date yet. Unofficial.",
    keywords: ["GTA 6 can I play on PC", "GTA 6 can I play on PS4", "GTA 6 can I play on xbox one", "GTA 6 what consoles", "GTA 6 release date PC", "GTA 6 Switch 2"],
    image: VICE_DAY,
    imageAlt: "Vice City in daylight, official Rockstar still",
    kind: "activity",
    answer: [
      "GTA 6 is out on PlayStation 5 and Xbox Series X|S.",
      "It is not on PS4. Xbox One can stream it through Xbox Cloud Gaming; it does not run natively on that console.",
      "A PC release date has not been announced, and there is no Switch or Switch 2 version.",
    ],
    facts: [
      { label: "At launch", value: "PS5 and Xbox Series X|S" },
      { label: "PS4", value: "No" },
      { label: "PC", value: "No date announced" },
    ],
    faqs: [
      { question: "Can you play GTA 6 on PC?", answer: "Not yet. Rockstar has not announced a PC release date." },
      { question: "Can you play GTA 6 on PS4 or Xbox One?", answer: "It is not on PS4. Xbox One can stream it with Xbox Cloud Gaming, but there is no native Xbox One version." },
    ],
    related: [L.launchPage, L.ps5Pro, L.physicalCopy, L.online],
  },
  {
    slug: "physical-copy",
    title: "Does GTA 6 Have a Disc? Physical Copy Explained",
    heading: "Is there a disc?",
    description:
      "Does GTA 6 have a disc? No. The boxed copy is a download code, not a disc. Activate the code on PS5 or Xbox Series X|S to install the game. Unofficial.",
    keywords: ["GTA 6 is there a disc", "GTA 6 physical copy", "GTA 6 boxed copy", "GTA 6 is there a physical copy", "GTA 6 download code"],
    kind: "activity",
    answer: [
      "The boxed copy has a download code, not a disc.",
      "Activate the code on a PlayStation 5 or Xbox Series X|S to install the game.",
      "Once the code is active, the game installs the same way as a digital purchase.",
    ],
    facts: [
      { label: "In the box", value: "Download code, no disc" },
      { label: "Works on", value: "PS5 and Xbox Series X|S" },
      { label: "Install", value: "After the code is activated" },
    ],
    faqs: [
      { question: "Does GTA 6 have a disc?", answer: "No. Rockstar says the boxed copy contains a download code and does not include a disc." },
      { question: "Can you install a physical copy of GTA 6?", answer: "Yes, after you activate the download code on your console." },
    ],
    related: [L.launchPage, L.fileSize, L.platforms, L.editions],
  },
  {
    slug: "performance-mode",
    title: "GTA 6 Performance Mode and 30 FPS, Explained",
    heading: "Is there a performance mode?",
    description:
      "Does GTA 6 have a performance mode? No. The game targets 30 frames per second on PS5 and Xbox Series X|S, including PS5 Pro. There is no 60 fps option. Unofficial.",
    keywords: ["GTA 6 best settings", "GTA 6 best settings PS5", "GTA 6 performance mode", "GTA 6 30 fps", "GTA 6 locked on 30 fps", "GTA 6 60 fps"],
    image: VICE_NIGHT,
    imageAlt: "Vice City at night, official Rockstar still",
    kind: "activity",
    answer: [
      "GTA 6 targets 30 frames per second on PlayStation 5 and Xbox Series X|S.",
      "There is no 60 fps performance mode, and Rockstar has said one is not planned, even on PS5 Pro.",
      "The Pro improves how the game looks with PSSR and ray-traced shadows, not the frame rate.",
    ],
    facts: [
      { label: "Frame rate", value: "30 fps target" },
      { label: "Performance mode", value: "None" },
      { label: "PS5 Pro", value: "Still 30 fps; sharper picture" },
    ],
    faqs: [
      { question: "Does GTA 6 have a performance mode?", answer: "No. The game targets 30 frames per second on PS5 and Xbox Series X|S, and there is no 60 fps option." },
      { question: "Is GTA 6 60 fps on PS5 Pro?", answer: "No. The Pro still targets 30 fps. It adds PSSR and ray-traced shadows for a sharper picture." },
    ],
    related: [L.ps5Pro, L.launchPage, L.platforms, L.fileSize],
  },
  {
    slug: "ps5-pro",
    title: "Do You Need a PS5 Pro to Play GTA 6?",
    heading: "Do you need a PS5 Pro?",
    description:
      "Do you need a PS5 Pro for GTA 6? No. A standard PS5 plays the game. The Pro adds PSSR and ray-traced shadows, and still targets 30 fps. Unofficial.",
    keywords: ["GTA 6 do you need PS5 Pro", "GTA 6 PS5 Pro", "GTA 6 standard PS5", "GTA 6 PS5 Pro features", "will GTA 6 play on PS5"],
    image: VICE_DETAIL,
    imageAlt: "A close Vice City street scene, official Rockstar still",
    kind: "activity",
    answer: [
      "You don't need a PS5 Pro. A standard PlayStation 5 plays GTA 6.",
      "The Pro adds PlayStation Spectral Super Resolution (PSSR) and ray-traced shadows.",
      "Those extras improve the picture. The frame rate still targets 30 fps.",
    ],
    facts: [
      { label: "Required?", value: "No, standard PS5 is enough" },
      { label: "Pro adds", value: "PSSR and ray-traced shadows" },
      { label: "Frame rate", value: "30 fps on both" },
    ],
    faqs: [
      { question: "Do you need a PS5 Pro to play GTA 6?", answer: "No. A standard PS5 plays the game. The Pro is optional." },
      { question: "What does PS5 Pro add in GTA 6?", answer: "PSSR for a sharper picture and ray-traced shadows. It still targets 30 frames per second." },
    ],
    related: [L.performance, L.platforms, L.launchPage, L.fileSize],
  },
  {
    slug: "how-many-chapters",
    title: "GTA 6 How Many Chapters and How Long to Beat",
    heading: "How many chapters?",
    description:
      "How many chapters are in GTA 6? Five, with about 91 to 93 story missions. The story takes roughly 50 to 80 hours. Unofficial.",
    keywords: ["GTA 6 how many chapters", "GTA 6 how many missions", "GTA 6 how long to complete", "GTA 6 how long to beat", "GTA 6 hours to complete story"],
    image: JASON_AND_LUCIA,
    imageAlt: "Jason and Lucia, official Rockstar artwork",
    kind: "mission",
    answer: [
      "The story has a short prologue and five chapters.",
      "Guides count about 91 to 93 story missions in all.",
      "A story playthrough takes roughly 50 to 80 hours, depending on how much else you do.",
    ],
    facts: [
      { label: "Chapters", value: "5" },
      { label: "Story missions", value: "About 91 to 93" },
      { label: "Story time", value: "About 50 to 80 hours" },
    ],
    faqs: [
      { question: "How many chapters are in GTA 6?", answer: "Five, plus a short prologue." },
      { question: "How long does it take to beat GTA 6?", answer: "The story takes roughly 50 to 80 hours, with about 91 to 93 story missions." },
    ],
    related: [L.howLong, L.missions, L.save, L.newGame],
  },
  {
    slug: "jewelry-robbery",
    title: "GTA 6 How to Rob a Jewelry Store",
    heading: "Rob a jewelry store",
    description:
      "How to rob a jewelry store in GTA 6: these jobs open in early Chapter 3. Sell the loot to Yasmani for $10,000 to $25,000, and crack the back-room safe if you can. Unofficial.",
    keywords: ["GTA 6 jewelry store", "GTA 6 jewelry robbery", "GTA 6 rob jewelry store", "GTA 6 Yasmani", "GTA 6 jewelry store locations"],
    image: JEWELRY,
    imageAlt: "A jewelry store robbery, official Rockstar still",
    kind: "money",
    answer: [
      "Jewelry store jobs open in early Chapter 3. Wear a mask, go in and grab the goods.",
      "Crack the back-room safe if you can, then get out and lose the cops.",
      "Sell the loot to Yasmani for $10,000 to $25,000 a store. Capri, Ocean Beach and downtown Vice City pay well.",
    ],
    facts: [
      { label: "Unlocks", value: "Early Chapter 3" },
      { label: "Pays", value: "$10,000 to $25,000" },
      { label: "Buyer", value: "Yasmani" },
    ],
    faqs: [
      { question: "When can you rob jewelry stores in GTA 6?", answer: "From early Chapter 3. Sell the loot to Yasmani." },
      { question: "How much do jewelry store robberies pay in GTA 6?", answer: "About $10,000 to $25,000 per store, more if you open the back-room safe." },
    ],
    related: [L.smashGrabs, L.jewelry, L.robStore, L.mask, L.loseWanted],
  },
  {
    slug: "where-is-it-based",
    title: "Where Is GTA 6 Based? Leonida and Vice City",
    heading: "Where is GTA 6 based?",
    description:
      "Where is GTA 6 based? In Leonida, a fictional US state inspired by Florida. Vice City is its main city, inspired by Miami. Unofficial.",
    keywords: ["GTA 6 where is it based", "GTA 6 where does it take place", "GTA 6 what city", "GTA 6 where is it located", "GTA 6 Leonida", "GTA 6 Vice City"],
    image: VICE_CITY,
    imageAlt: "Vice City, official Rockstar still",
    kind: "location",
    answer: [
      "GTA 6 takes place in Leonida, a fictional US state inspired by Florida.",
      "Vice City is the main city, inspired by Miami.",
      "The map also covers the Leonida Keys, the Grassrivers, Port Gellhorn and more.",
    ],
    facts: [
      { label: "State", value: "Leonida (inspired by Florida)" },
      { label: "Main city", value: "Vice City (inspired by Miami)" },
      { label: "Also", value: "Keys, Grassrivers, Port Gellhorn" },
    ],
    faqs: [
      { question: "Where is GTA 6 based?", answer: "In Leonida, a fictional state inspired by Florida. Its main city, Vice City, is inspired by Miami." },
      { question: "Is GTA 6 set in Vice City?", answer: "Yes. Vice City is the main city in Leonida, alongside the Keys, the Grassrivers and other regions." },
    ],
    related: [L.mapHub, L.locationsHub, L.mapFog, L.launchPage],
  },
  {
    slug: "cheats-locked",
    title: "GTA 6 Cheats Locked? How to Enter Cheat Codes",
    heading: "Why are cheats locked?",
    description:
      "Why are GTA 6 cheats locked? They unlock after you finish the story. Enter a code on the phone by holding L1 and R1, then the inputs. Saving and trophies turn off for that session. Unofficial.",
    keywords: ["GTA 6 cheats locked", "GTA 6 how to use cheat codes", "GTA 6 cheats", "GTA 6 cheats PS5", "GTA 6 cheat codes", "GTA 6 cheats xbox"],
    kind: "cheat",
    answer: [
      "Cheats unlock after you finish the story. Until then the Cheats menu does not appear, and codes do nothing.",
      "To enter a code, open the phone, hold L1 and R1 (or LB and RB), then put in the inputs.",
      "Using a cheat turns off trophies, achievements and saving for the rest of that session.",
    ],
    facts: [
      { label: "Unlocks", value: "After you finish the story" },
      { label: "Enter", value: "Phone, hold L1/LB + R1/RB" },
      { label: "Catch", value: "No trophies or saving that session" },
    ],
    faqs: [
      { question: "Why are cheats locked in GTA 6?", answer: "They stay locked until you finish the story. Before that, the Cheats menu does not appear and codes do nothing." },
      { question: "How do you enter cheat codes in GTA 6?", answer: "Open the phone, hold L1 and R1 on PS5 or LB and RB on Xbox, then enter the code. Trophies and saving turn off for that session." },
    ],
    related: [L.cheats, L.save, L.moneyGlitch, L.newGame],
  },
  {
    slug: "gang-hideouts",
    title: "GTA 6 How to Raid Gang Hideouts for Money",
    heading: "Raid gang hideouts",
    description:
      "How to raid gang hideouts in GTA 6: yellow map icons mark 39 operations, open from Chapter 1. Clear the place, take the cash and goods, and sell the goods to a dealer. Unofficial.",
    keywords: ["GTA 6 gang hideouts", "GTA 6 gang operations", "GTA 6 yellow icons", "GTA 6 raid hideout", "GTA 6 early money"],
    kind: "money",
    answer: [
      "Yellow icons on the map mark 39 gang hideouts. They are open from Chapter 1.",
      "Clear the place, then grab the cash and any goods you can carry.",
      "Sell those goods to a dealer. Some hideouts also have guns or a vehicle you can take.",
    ],
    facts: [
      { label: "Unlocks", value: "Chapter 1" },
      { label: "How many", value: "39 hideouts" },
      { label: "Map", value: "Yellow icons" },
    ],
    faqs: [
      { question: "How do you raid gang hideouts in GTA 6?", answer: "Find a yellow icon on the map, clear the hideout, take the cash and goods, and sell the goods to a dealer." },
      { question: "When can you raid gang operations in GTA 6?", answer: "From Chapter 1. There are 39 of them on the map." },
    ],
    related: [L.gangOps, L.money, L.loseWanted, L.robStore],
  },
  {
    slug: "controls",
    title: "GTA 6 Controls: Sprint, Phone and Classic Layout",
    heading: "PS5 and Xbox controls",
    description:
      "GTA 6 controls on PS5 and Xbox: default sprint is L3, jump is Cross or A, and the phone is Up on the D-pad. Switch to Classic in settings if you want the old layout. Unofficial.",
    keywords: ["GTA 6 controls", "GTA 6 controls PS5", "GTA 6 controller settings", "GTA 6 how to sprint", "GTA 6 classic controls"],
    kind: "activity",
    answer: [
      "On the default layout, click L3 to run and sprint. Cross on PS5 or A on Xbox is jump and climb, not sprint.",
      "Press Up on the D-pad to open the phone. A Classic control scheme in Settings puts sprint back on Cross or A if you want the older feel.",
      "In a car, tap Left or Right on the D-pad for turn signals, and hold Left for the radio and vehicle menu.",
    ],
    facts: [
      { label: "Sprint (default)", value: "L3" },
      { label: "Jump / climb", value: "Cross / A" },
      { label: "Phone", value: "D-pad Up" },
    ],
    faqs: [
      { question: "How do you sprint in GTA 6?", answer: "On the default layout, click L3 (the left stick). Cross or A is jump and climb. Switch to Classic in Settings if you want sprint on that button instead." },
      { question: "Can you change GTA 6 to the old controls?", answer: "Yes. Open Settings, go to Control Scheme and pick Classic." },
    ],
    related: [L.usePhone, L.turnSignals, L.cover, L.firstPerson],
  },
  {
    slug: "street-races",
    title: "GTA 6 Street Races: How to Unlock and Win",
    heading: "Street races",
    description:
      "How to unlock street races in GTA 6: there are 40 unique races in several groups. Vice City street races open in Chapter 3 after Dealer's Choice. Unofficial.",
    keywords: ["GTA 6 street races", "GTA 6 how to unlock street races", "GTA 6 racing", "GTA 6 Hit n Run", "GTA 6 how to race"],
    image: TRACK_RACING,
    imageAlt: "Track racing, official Rockstar still",
    kind: "activity",
    answer: [
      "There are 40 unique races in several groups around Leonida. Find them under Activities, then Racing, on the map.",
      "The Vice City street-race series unlocks in Chapter 3 after the mission Dealer's Choice, when you get a text about the races.",
      "Mud-club races open in Chapter 2 from the Thrillbillies mission. Other tracks can be found as you explore. You pay an entry or rental fee, and winning pays prize money.",
    ],
    facts: [
      { label: "Unique races", value: "40, in several groups" },
      { label: "Vice City series", value: "Chapter 3, after Dealer's Choice" },
      { label: "Mud-club races", value: "Chapter 2, Thrillbillies" },
    ],
    faqs: [
      { question: "How do you unlock street races in GTA 6?", answer: "The Vice City street-race series unlocks in Chapter 3 after Dealer's Choice. Mud-club races open in Chapter 2 from Thrillbillies. Other tracks can be found around Leonida." },
      { question: "How many races are in GTA 6?", answer: "There are 40 unique races in several groups. You pay an entry or rental fee, and winning pays prize money." },
    ],
    related: [L.uniqueRaces, L.racesMoney, L.vehiclesHub, L.register, L.money],
  },
  {
    slug: "headlights",
    title: "GTA 6 How to Turn On Headlights",
    heading: "How to use headlights",
    description:
      "How to turn on headlights in GTA 6: tap Circle on PS5 or B on Xbox while driving. Hold the button to duck instead. Unofficial.",
    keywords: ["GTA 6 headlights", "GTA 6 how to turn on headlights", "GTA 6 lights", "GTA 6 high beams", "GTA 6 car lights"],
    kind: "vehicle",
    answer: [
      "While driving, tap Circle on PS5 or B on Xbox to toggle the headlights.",
      "Don't hold the button. A hold makes you duck in the car instead.",
      "Turn signals are a short tap of Left or Right on the D-pad.",
    ],
    facts: [
      { label: "Toggle lights", value: "Tap Circle / B" },
      { label: "Hold Circle / B", value: "Duck" },
      { label: "Turn signals", value: "Tap D-pad Left or Right" },
    ],
    faqs: [
      { question: "How do you turn on headlights in GTA 6?", answer: "Tap Circle on PS5 or B on Xbox while driving. Holding the button makes you duck instead." },
      { question: "How do you duck in a car in GTA 6?", answer: "Hold Circle on PS5 or B on Xbox." },
    ],
    related: [L.turnSignals, L.controls, L.radio, L.autoDrive],
  },
  {
    slug: "auto-drive",
    title: "GTA 6 How to Auto-Drive and Use the Cinematic Camera",
    heading: "Auto-drive",
    description:
      "How to auto-drive in GTA 6: set a waypoint, hold Down on the D-pad and press Options or Menu for cinematic mode, then hold Circle or B. Unofficial.",
    keywords: ["GTA 6 auto drive", "GTA 6 cinematic camera", "GTA 6 cinematic mode", "GTA 6 how to auto drive", "GTA 6 self driving"],
    kind: "vehicle",
    answer: [
      "Set a waypoint on the map first, then get in a vehicle and start moving.",
      "Hold Down on the D-pad and press Options on PS5 or Menu on Xbox to enter cinematic mode.",
      "When the prompt appears, hold Circle or B to turn on auto-drive. Use L2 and R2, or LT and RT, to change speed. Hold Down on the D-pad to take back control.",
    ],
    facts: [
      { label: "Need", value: "A map waypoint" },
      { label: "Cinematic", value: "Hold D-pad Down + Options / Menu" },
      { label: "Auto-drive", value: "Hold Circle / B" },
    ],
    faqs: [
      { question: "How do you auto-drive in GTA 6?", answer: "Set a waypoint, hold Down on the D-pad and press Options or Menu for cinematic mode, then hold Circle or B when the prompt appears." },
      { question: "How do you turn on the cinematic camera in GTA 6?", answer: "In a moving vehicle, hold Down on the D-pad and press Options on PS5 or Menu on Xbox. Hold Down again to exit." },
    ],
    related: [L.fastTravel, L.minimap, L.mapFog, L.controls],
  },
  {
    slug: "stunt-jumps",
    title: "GTA 6 Stunt Jumps: How Many and How to Track Them",
    heading: "Stunt jumps",
    description:
      "How many stunt jumps are in GTA 6? 130 jumps, plus under-the-bridge, knife-flight and base-jump stunts, for 397 in all. 250 for the trophy, 300 for 100%. Unofficial.",
    keywords: ["GTA 6 stunt jumps", "GTA 6 how many stunt jumps", "GTA 6 under the bridge", "GTA 6 knife flights", "GTA 6 base jumps", "GTA 6 cunning stunts"],
    kind: "activity",
    answer: [
      "There are 130 stunt jumps, 202 under-the-bridge stunts, 40 knife flights and 25 base jumps, for 397 stunts in all.",
      "Do a stunt once and it counts. You need 250 for the Cunning Stunts trophy, and any 300 for 100%.",
      "Track them under Progress, Activities, Stunts. On the map, look in Exploration, then Stunt Spots.",
    ],
    facts: [
      { label: "Stunt jumps", value: "130" },
      { label: "All stunts", value: "397" },
      { label: "Trophy / 100%", value: "250 / any 300" },
    ],
    faqs: [
      { question: "How many stunt jumps are in GTA 6?", answer: "130 stunt jumps, plus 202 under-the-bridge stunts, 40 knife flights and 25 base jumps, for 397 stunts in total." },
      { question: "How many stunts do you need for 100% in GTA 6?", answer: "Any 300 of the 397. The Cunning Stunts trophy needs 250." },
    ],
    related: [L.stuntsHub, L.collectiblesHub, L.parachute, L.plane, L.militaryBase],
  },
  {
    slug: "collectible-cards",
    title: "GTA 6 Collectible Cards: How Many Sets and Where to Find Them",
    heading: "Collectible cards",
    description:
      "GTA 6 collectible cards: 18 sets and 480 cards. Look on shelves and walls indoors, and in yellow phone boxes and tool boxes outside. Unofficial.",
    keywords: ["GTA 6 collectible cards", "GTA 6 card sets", "GTA 6 trading cards", "GTA 6 Vice City Flamingos cards", "GTA 6 don't touch my deck"],
    kind: "activity",
    answer: [
      "There are 18 collectible card sets and 480 cards hidden around Leonida.",
      "Look on shelves and walls indoors, and in yellow phone boxes and tool boxes outside. You can't buy them.",
      "Finish 3 sets for the Don't Touch My Deck trophy, and 15 sets for 100%. Track them under Progress, Collections.",
    ],
    facts: [
      { label: "Sets / cards", value: "18 / 480" },
      { label: "Trophy", value: "3 sets" },
      { label: "For 100%", value: "15 sets" },
    ],
    faqs: [
      { question: "How many collectible cards are in GTA 6?", answer: "18 sets and 480 cards. You need 3 sets for a trophy and 15 sets for 100%." },
      { question: "Where do you find collectible cards in GTA 6?", answer: "On shelves and walls indoors, and in yellow phone boxes and tool boxes outside. You can't buy them." },
    ],
    related: [L.cardsHub, L.collectiblesHub, L.flamingos, L.stuntJumps],
  },
  {
    slug: "flamingos",
    title: "GTA 6 Cocaine Flamingos: How Many and How to Break Them",
    heading: "Cocaine Flamingos",
    description:
      "GTA 6 Cocaine Flamingos: 125 hidden figures. Shoot a real one in the body to break it. Real ones have a black-and-white beak. Unofficial.",
    keywords: ["GTA 6 flamingos", "GTA 6 cocaine flamingos", "GTA 6 how many flamingos", "GTA 6 pink flamingos", "GTA 6 inflatable flamingo"],
    image: FLAMINGO,
    imageAlt: "A flamingo, official Rockstar still",
    kind: "activity",
    answer: [
      "There are 125 Cocaine Flamingos hidden around Leonida. You need any 100 for 100%.",
      "Real ones have a black-and-white beak. Shoot the body to break it. Yellow-and-black beaks are only decoration.",
      "Track them under Progress, Exploration. Breaking 50 unlocks the Inflatable Flamingo cheat after you finish the story.",
    ],
    facts: [
      { label: "Total", value: "125" },
      { label: "For 100%", value: "Any 100" },
      { label: "Real ones", value: "Black-and-white beak" },
    ],
    faqs: [
      { question: "How many Cocaine Flamingos are in GTA 6?", answer: "125. You need any 100 for 100%." },
      { question: "How do you break Cocaine Flamingos in GTA 6?", answer: "Shoot a real one in the body. Real figures have a black-and-white beak; yellow-and-black beaks can't be broken." },
    ],
    related: [L.flamingosHub, L.collectiblesHub, L.collectibleCards, L.cheats],
  },
  {
    slug: "shooting-ranges",
    title: "GTA 6 Shooting Ranges: Locations, Waiver Pass and Gold Medals",
    heading: "Shooting ranges",
    description:
      "GTA 6 shooting ranges: Griffin in north-west Vice City and Rodgers Ranch in north-east Port Gellhorn. Buy the $5 waiver pass, then run the courses. Unofficial.",
    keywords: ["GTA 6 shooting range", "GTA 6 shooting ranges", "GTA 6 Griffin shooting range", "GTA 6 Rodgers Ranch", "GTA 6 gold medals shooting"],
    image: SHOOTING_RANGE,
    imageAlt: "A shooting range, official Rockstar still",
    kind: "weapon",
    answer: [
      "There are two ranges: Griffin in north-west Vice City and Rodgers Ranch in north-east Port Gellhorn.",
      "Buy the $5 waiver pass from the clerk and the courses show up on your map. You can rent a gun for $10 if you need one.",
      "Griffin has 18 gold medals on timed courses. Rodgers Ranch has 24 golds on score courses. That's 42 golds in all.",
    ],
    facts: [
      { label: "Ranges", value: "Griffin and Rodgers Ranch" },
      { label: "Waiver pass", value: "$5" },
      { label: "Gold medals", value: "42 in all" },
    ],
    faqs: [
      { question: "Where are the shooting ranges in GTA 6?", answer: "Griffin Shooting Range in north-west Vice City, and Rodgers Ranch in north-east Port Gellhorn." },
      { question: "How do you unlock shooting range courses in GTA 6?", answer: "Buy the $5 waiver pass from the clerk. The courses then appear on your map." },
    ],
    related: [L.rangesHub, L.weapons, L.focus, L.trophiesGuide],
  },

  {
    slug: "skip-cutscenes",
    title: "GTA 6 How to Skip Cutscenes",
    heading: "How to skip a cutscene",
    description:
      "How to skip a cutscene in GTA 6: hold Cross on PS5 or A on Xbox during the scene. You can't skip from the pause menu or the map. Unofficial.",
    keywords: ["GTA 6 skip cutscene", "GTA 6 how to skip cutscenes", "GTA 6 skip scene", "GTA 6 skip cinematic", "GTA 6 skip intro"],
    kind: "mission",
    answer: [
      "During a cutscene, hold Cross on PS5 or A on Xbox to skip it.",
      "You can't skip from the pause menu or the map. If you need a break, pause first, then skip when you come back.",
    ],
    facts: [
      { label: "Skip", value: "Hold Cross / A during the scene" },
      { label: "Pause or map", value: "No skip button there" },
    ],
    faqs: [
      { question: "How do you skip a cutscene in GTA 6?", answer: "Hold Cross on PS5 or A on Xbox during the scene." },
      { question: "Can you skip a cutscene from the pause menu in GTA 6?", answer: "No. Skip during the scene itself. Pause if you need a break, then skip when you come back." },
    ],
    related: [L.replay, L.skipTime, L.controls, L.accessibility],
  },
  {
    slug: "wasted-busted",
    title: "GTA 6 What Happens When You Die or Get Arrested",
    heading: "Wasted and Busted",
    description:
      "What happens when you die or get arrested in GTA 6: you lose cash on you, but money in the bank stays. After Wasted you respawn nearby. After Busted you go to your last safehouse. Unofficial.",
    keywords: ["GTA 6 wasted", "GTA 6 busted", "GTA 6 what happens when you die", "GTA 6 arrested", "GTA 6 lose money death", "GTA 6 hospital"],
    kind: "activity",
    answer: [
      "After Wasted you respawn nearby, not at a hospital. After Busted you go back to your last safehouse. Your car may be sent to the impound.",
      "You lose cash on you either way. Money in the bank stays, so deposit what you can first.",
      "Guns you picked up but don't own are gone after Wasted. Owned guns can be taken from your car's trunk or from your locker at Ammu-Nation.",
    ],
    facts: [
      { label: "Cash on you", value: "Lost after Wasted or Busted" },
      { label: "Banked cash", value: "Safe" },
      { label: "Wasted / Busted", value: "Nearby / last safehouse" },
    ],
    faqs: [
      { question: "What happens when you die in GTA 6?", answer: "You respawn nearby, not at a hospital. You lose cash on you, but money in the bank stays. Guns you don't own are gone; owned guns can be taken from your trunk or Ammu-Nation locker." },
      { question: "What happens when you get arrested in GTA 6?", answer: "You go back to your last safehouse and lose cash on you. Money in the bank stays. Your car may be sent to the impound." },
    ],
    related: [L.wanted, L.bank, L.loseWanted, L.impound],
  },
  {
    slug: "photo-mode",
    title: "GTA 6 Photo Mode and How to Take Pictures",
    heading: "Photo mode",
    description:
      "How to use photo mode in GTA 6: pause and open Photo Studio for the full tool. The Camera app on your phone is the quick way to take a picture. Unofficial.",
    keywords: ["GTA 6 photo mode", "GTA 6 photo studio", "GTA 6 how to take pictures", "GTA 6 camera", "GTA 6 selfie", "GTA 6 Snapmatic"],
    image: SNAPMATIC,
    imageAlt: "The Snapmatic app on the in-game phone",
    kind: "phone",
    answer: [
      "Pause the game and open Photo Studio for the full photo-mode tool.",
      "For a quick shot, open the Camera app on your in-game phone.",
      "Pictures you take go in your Gallery on the phone.",
    ],
    facts: [
      { label: "Full tool", value: "Pause, then Photo Studio" },
      { label: "Quick shot", value: "Camera app on the phone" },
      { label: "Saved in", value: "Gallery" },
    ],
    faqs: [
      { question: "How do you use photo mode in GTA 6?", answer: "Pause the game and open Photo Studio. For a quick shot, use the Camera app on your phone." },
      { question: "Where do pictures go in GTA 6?", answer: "Pictures you take are saved in the Gallery on your in-game phone." },
    ],
    related: [L.usePhone, L.wainkScans, L.gta6Apps],
  },
  {
    slug: "tattoos",
    title: "GTA 6 How to Get a Tattoo",
    heading: "How to get a tattoo",
    description:
      "How to get a tattoo in GTA 6: shops open after the Prologue. Find them on the map under Style, then Tattoos. Inked Mermaid is just east of Jason's house in Key Lento. Unofficial.",
    keywords: ["GTA 6 tattoos", "GTA 6 how to get a tattoo", "GTA 6 tattoo shop", "GTA 6 Inked Mermaid"],
    image: "/images/official/editions/ultimate_edition_electric_fang_02.webp",
    imageAlt: "A tattoo in progress at Electric Fang, official Rockstar still",
    kind: "clothing",
    answer: [
      "Tattoo shops open after the Prologue. On the map, look under Style, then Tattoos. The icon is a heart with a bar through it.",
      "Inked Mermaid is just east of Jason's house in Key Lento, on the same street as his gym. Walk in and talk to the staff.",
      "Some designs and shops need a bank account before you can use them.",
    ],
    facts: [
      { label: "Opens", value: "After the Prologue" },
      { label: "Map", value: "Style, then Tattoos" },
      { label: "Near Jason", value: "Inked Mermaid, east of his house" },
    ],
    faqs: [
      { question: "How do you get a tattoo in GTA 6?", answer: "Find a shop on the map under Style, then Tattoos, walk in and talk to the staff. Shops open after the Prologue. Some designs need a bank account." },
      { question: "Where is the first tattoo shop in GTA 6?", answer: "Inked Mermaid is just east of Jason's house in Key Lento, on the same street as his gym." },
    ],
    related: [L.clothes, L.haircut, L.bank, L.clothing],
  },
  {
    slug: "basketball",
    title: "GTA 6 How to Play Basketball",
    heading: "Basketball",
    description:
      "How to play basketball in GTA 6: find a hoop and a ball around Vice City and the rest of Leonida. Games can also train Jason and Lucia's Focus. Unofficial.",
    keywords: ["GTA 6 basketball", "GTA 6 how to play basketball", "GTA 6 hoops", "GTA 6 basketball courts"],
    image: BASKETBALL,
    imageAlt: "An outdoor basketball court in Vice City, official Rockstar still",
    kind: "activity",
    answer: [
      "Basketball hoops are around Vice City and the rest of Leonida. Walk up to a hoop with a ball to start.",
      "Playing can also train Jason and Lucia's Focus.",
    ],
    facts: [
      { label: "Where", value: "Hoops around Leonida" },
      { label: "Also trains", value: "Focus" },
    ],
    faqs: [
      { question: "Can you play basketball in GTA 6?", answer: "Yes. Find a hoop and a ball around Vice City and the rest of Leonida." },
      { question: "Does basketball train Focus in GTA 6?", answer: "Yes. Games can train Jason and Lucia's Focus, the same way some other activities do." },
    ],
    related: [L.basketballHub, L.focus, L.activities, L.miniGolf],
  },
  {
    slug: "unwanted-attention",
    title: "GTA 6 Unwanted Attention: Where to Find the Phoenix",
    heading: "Unwanted Attention",
    description:
      "GTA 6 Unwanted Attention: a Chapter 1 mission with Cal. The red Phoenix is often on a tow truck at the Hamlet impound. Repair and respray it, then take it to Brian. Unofficial.",
    keywords: ["GTA 6 Unwanted Attention", "GTA 6 Phoenix mission", "GTA 6 Hamlet impound", "GTA 6 steal the Phoenix", "GTA 6 Cal mission"],
    kind: "mission",
    answer: [
      "Unwanted Attention is a Chapter 1 mission with Cal. After you talk to him, go to the impound in Hamlet.",
      "The red Phoenix is often already loaded on a tow truck. Steal it, leave the search area, then repair and respray the car.",
      "Take the finished car to Brian. Change your look afterward so you are harder to recognize.",
    ],
    facts: [
      { label: "Chapter", value: "1, with Cal" },
      { label: "Car", value: "Red Phoenix, often on a tow truck" },
      { label: "Where", value: "Hamlet impound" },
    ],
    faqs: [
      { question: "Where is the Phoenix in Unwanted Attention?", answer: "At the impound in Hamlet. It is often already loaded on a tow truck." },
      { question: "What do you do after you steal the Phoenix?", answer: "Leave the search area, repair and respray the car, then take it to Brian. Change your look afterward." },
    ],
    related: [L.unwantedMission, L.repairCar, L.impound, L.hamlet, L.loseWanted],
  },
  {
    slug: "just-a-scratch",
    title: "GTA 6 Just A Scratch: Take Jason's Truck to Coastal Auto Care",
    heading: "Just A Scratch",
    description:
      "GTA 6 Just A Scratch: a Chapter 1 mission. Drive Jason's Vapid Ganado to Coastal Auto Care in Key Lento, talk to Joey, and get the truck repaired and resprayed. Unofficial.",
    keywords: ["GTA 6 Just A Scratch", "GTA 6 Coastal Auto Care", "GTA 6 Jason truck", "GTA 6 Vapid Ganado", "GTA 6 Joey garage"],
    image: COASTAL,
    imageAlt: "Coastal Auto Care in Key Lento",
    kind: "mission",
    answer: [
      "Just A Scratch is a Chapter 1 mission. Drive Jason's Vapid Ganado to Coastal Auto Care in Key Lento.",
      "Talk to Joey inside. The shop repairs and resprays the truck.",
      "Coastal Auto Care stays on your map as a body shop after the mission.",
    ],
    facts: [
      { label: "Chapter", value: "1" },
      { label: "Vehicle", value: "Jason's Vapid Ganado" },
      { label: "Shop", value: "Coastal Auto Care, Key Lento" },
    ],
    faqs: [
      { question: "What do you do in Just A Scratch in GTA 6?", answer: "Drive Jason's Vapid Ganado to Coastal Auto Care in Key Lento, talk to Joey, and get the truck repaired and resprayed." },
      { question: "Where is Coastal Auto Care in GTA 6?", answer: "In Key Lento. It stays on your map as a body shop after Just A Scratch." },
    ],
    related: [L.scratchMission, L.coastalShop, L.repairCar, L.railing, L.keyLento],
  },

  {
    slug: "accessibility",
    title: "GTA 6 Accessibility Settings: Subtitles, Assist and Motion",
    heading: "Accessibility settings",
    description:
      "GTA 6 accessibility settings: change subtitles and captions under Settings, then UI. Tap Assist and Hold Assist are under Gameplay. Motion blur can be turned down to zero. Unofficial.",
    keywords: ["GTA 6 accessibility", "GTA 6 subtitles", "GTA 6 captions", "GTA 6 tap assist", "GTA 6 hold assist", "GTA 6 motion blur", "GTA 6 camera shake"],
    kind: "activity",
    answer: [
      "Open Settings, then UI, for subtitles, captions, text size, speaker names and a caption background.",
      "Under Gameplay you can turn on Tap Assist or Hold Assist if you want a lighter touch on long button holds.",
      "Under Display you can lower Motion Blur Strength, including all the way to zero. Camera shake and camera bob also have their own sliders.",
    ],
    facts: [
      { label: "Subtitles", value: "Settings, then UI" },
      { label: "Assist", value: "Gameplay, Tap or Hold Assist" },
      { label: "Motion blur", value: "Display, can go to 0" },
    ],
    faqs: [
      { question: "Where are the subtitle settings in GTA 6?", answer: "Open Settings, then UI. You can change subtitles, captions, text size, speaker names and the caption background." },
      { question: "Can you turn off motion blur in GTA 6?", answer: "Yes. Under Settings, then Display, lower Motion Blur Strength, including all the way to zero. Camera shake and bob have their own sliders too." },
    ],
    related: [L.controls, L.aimAssist, L.performance, L.firstPerson],
  },
  {
    slug: "trophies",
    title: "GTA 6 Trophies: How Many and How to Get the Platinum",
    heading: "Trophies and platinum",
    description:
      "How many trophies are in GTA 6? 55 including the platinum, and 28 of them are hidden. Hidden story trophies stay hidden, so this guide does not name them. Unofficial.",
    keywords: ["GTA 6 trophies", "GTA 6 platinum", "GTA 6 how many trophies", "GTA 6 hidden trophies", "GTA 6 achievements", "GTA 6 100 percent trophies"],
    kind: "activity",
    answer: [
      "There are 55 trophies including the platinum, and 28 of them are hidden.",
      "Hidden story trophies stay hidden here. This site does not name late-story or ending trophies.",
      "See the full list we can show on the trophies page. Collectibles, stunts and ranges also have their own trophies.",
    ],
    facts: [
      { label: "Total", value: "55, including platinum" },
      { label: "Hidden", value: "28" },
    ],
    faqs: [
      { question: "How many trophies are in GTA 6?", answer: "55 including the platinum. 28 of them are hidden." },
      { question: "Does this site list every hidden trophy in GTA 6?", answer: "No. Hidden story trophies stay hidden. Collectible, stunt and range trophies are covered on their own pages." },
    ],
    related: [L.hundred, L.trophiesHub, L.howLong, L.collectiblesHub, L.stuntJumps],
  },
  {
    slug: "mini-golf",
    title: "GTA 6 Mini-Golf: Can You Play It?",
    heading: "Mini-golf",
    description:
      "Can you play mini-golf in GTA 6? Yes. Courses are around Leonida, including an alligator-themed one. It is a side activity, not a required story mission. Unofficial.",
    keywords: ["GTA 6 mini golf", "GTA 6 minigolf", "GTA 6 golf", "GTA 6 alligator golf", "GTA 6 putt putt"],
    image: MINI_GOLF,
    imageAlt: "Cal Hampton on an alligator-themed mini-golf course, official Rockstar still",
    kind: "activity",
    answer: [
      "Yes. Mini-golf courses are around Leonida, including an alligator-themed one.",
      "It is a side activity, not a required story mission.",
    ],
    facts: [
      { label: "In the game", value: "Yes" },
      { label: "Required?", value: "No, it is a side activity" },
    ],
    faqs: [
      { question: "Can you play mini-golf in GTA 6?", answer: "Yes. Courses are around Leonida, including an alligator-themed one." },
      { question: "Is mini-golf required in GTA 6?", answer: "No. It is a side activity, not a required story mission." },
    ],
    related: [L.miniGolfHub, L.basketball, L.activities, L.fishing],
  },
  {
    slug: "waink-scans",
    title: "GTA 6 WAiNK Scans: How to Scan and How Many You Need",
    heading: "WAiNK scans",
    description:
      "How to scan with WAiNK in GTA 6: hold Up on the D-pad to open the camera, then scan the animal, plant or object. 100 scans unlock a trophy. Unofficial.",
    keywords: ["GTA 6 WAiNK", "GTA 6 how to scan", "GTA 6 WAiNK scans", "GTA 6 scan animals", "GTA 6 wildlife camera"],
    kind: "phone",
    answer: [
      "Hold Up on the D-pad to open the WAiNK camera, then scan the animal, plant or object in front of you.",
      "You need 100 WAiNK locations for a trophy: landmarks, sculptures, curiosities and No Flusher tags. Track them under Progress > Collections > WAiNK Locations.",
    ],
    facts: [
      { label: "Open camera", value: "Hold D-pad Up" },
      { label: "Trophy", value: "100 scans" },
    ],
    faqs: [
      { question: "How do you scan with WAiNK in GTA 6?", answer: "Hold Up on the D-pad to open the camera, then scan the animal, plant or object in front of you." },
      { question: "How many WAiNK scans do you need in GTA 6?", answer: "100 WAiNK locations unlock a trophy. Track them under Progress > Collections > WAiNK Locations." },
    ],
    related: [L.wainkLocations, L.waink, L.usePhone, L.collectiblesHub, L.trophiesGuide],
  },
  {
    slug: "horn",
    title: "GTA 6 How to Honk and Use Nitrous",
    heading: "Horn and nitrous",
    description:
      "How to honk in GTA 6: press L3, the left stick. The same button is nitrous if the car has it. Check Control Scheme if you remapped the controls. Unofficial.",
    keywords: ["GTA 6 horn", "GTA 6 how to honk", "GTA 6 nitrous", "GTA 6 nos", "GTA 6 how to use nitrous"],
    kind: "vehicle",
    answer: [
      "Press L3, the left stick, to honk the horn.",
      "If the car has nitrous, the same button fires it.",
      "If that does nothing, open Settings, then Control Scheme, and check what Horn / Nitrous is bound to.",
    ],
    facts: [
      { label: "Horn", value: "L3" },
      { label: "Nitrous", value: "Same button, if the car has it" },
    ],
    faqs: [
      { question: "How do you honk in GTA 6?", answer: "Press L3, the left stick. Check Control Scheme if you remapped the controls." },
      { question: "How do you use nitrous in GTA 6?", answer: "Press L3 if the car has nitrous. The horn and nitrous share the same button." },
    ],
    related: [L.controls, L.headlights, L.turnSignals, L.vehiclesHub],
  },
  {
    slug: "minimap",
    title: "GTA 6 Minimap, Waypoints and Quick Navigation",
    heading: "Minimap and waypoints",
    description:
      "How the minimap works in GTA 6: press Down on the D-pad to cycle the objective and the radar. Hold Down for Quick Navigation. Set a waypoint on the full map before you auto-drive. Unofficial.",
    keywords: ["GTA 6 minimap", "GTA 6 waypoint", "GTA 6 radar", "GTA 6 quick navigation", "GTA 6 how to set waypoint", "GTA 6 GPS"],
    kind: "location",
    answer: [
      "Press Down on the D-pad to cycle the objective and what the minimap shows. Hold Down to open Quick Navigation.",
      "Open the full map with the Touchpad on PS5 or View on Xbox to set a waypoint.",
      "Auto-drive needs a waypoint first.",
    ],
    facts: [
      { label: "Cycle minimap", value: "D-pad Down" },
      { label: "Quick Navigation", value: "Hold D-pad Down" },
      { label: "Full map", value: "Touchpad / View" },
    ],
    faqs: [
      { question: "How do you change the minimap in GTA 6?", answer: "Press Down on the D-pad to cycle the objective and the radar. Hold Down for Quick Navigation." },
      { question: "How do you set a waypoint in GTA 6?", answer: "Open the full map with the Touchpad on PS5 or View on Xbox, then set a waypoint. Auto-drive needs one first." },
    ],
    related: [L.mapFog, L.autoDrive, L.fastTravel, L.controls],
  },
  {
    slug: "aim-assist",
    title: "GTA 6 Aim Assist and Targeting Settings",
    heading: "Aim assist",
    description:
      "How to change aim assist in GTA 6: open Settings, then Gameplay. Targeting can be Lock-On, Partial or no lock-on. Partial is the default. Unofficial.",
    keywords: ["GTA 6 aim assist", "GTA 6 targeting", "GTA 6 lock on", "GTA 6 shooting assist", "GTA 6 how to change aim"],
    kind: "weapon",
    answer: [
      "Open Settings, then Gameplay, to change targeting and aim assist.",
      "Targeting can be Lock-On, Partial or no lock-on. Partial is the default. There is also an Aim Assist Strength slider.",
      "Shooting Assist and Drive-By Assist can be turned on or off in the same menu.",
    ],
    facts: [
      { label: "Menu", value: "Settings, then Gameplay" },
      { label: "Targeting", value: "Lock-On, Partial or no lock-on" },
      { label: "Default", value: "Partial" },
    ],
    faqs: [
      { question: "How do you change aim assist in GTA 6?", answer: "Open Settings, then Gameplay. You can pick Lock-On, Partial or no lock-on, and change Aim Assist Strength." },
      { question: "What is the default targeting mode in GTA 6?", answer: "Partial. Shooting Assist and Drive-By Assist can also be turned on or off in the same menu." },
    ],
    related: [L.controls, L.accessibility, L.weapons, L.focus],
  },
  {
    slug: "partner-drive",
    title: "GTA 6 How to Let Your Partner Drive",
    heading: "Partner drive",
    description:
      "How to let your partner drive in GTA 6: when Jason and Lucia are together, hold Right on the D-pad to ask them to take the wheel, then set a waypoint. Unofficial.",
    keywords: ["GTA 6 partner drive", "GTA 6 let Lucia drive", "GTA 6 switch seats", "GTA 6 passenger shoot", "GTA 6 AI drive"],
    image: JASON_AND_LUCIA,
    imageAlt: "Jason and Lucia, official Rockstar artwork",
    kind: "character",
    answer: [
      "When Jason and Lucia are together, hold Right on the D-pad to open partner commands and ask them to drive. Set a waypoint so they have a destination.",
      "You can also hold Right and press R1 on PS5 or RB on Xbox to switch characters in the car, so the other one is at the wheel.",
      "While they drive, hold Right again to change speed or to split up. You can shoot from the passenger seat.",
    ],
    facts: [
      { label: "Partner commands", value: "Hold D-pad Right" },
      { label: "Switch in the car", value: "Hold Right + R1 / RB" },
      { label: "Need", value: "A waypoint helps" },
    ],
    faqs: [
      { question: "How do you let your partner drive in GTA 6?", answer: "When you are together, hold Right on the D-pad to ask them to take the wheel, and set a waypoint. You can also switch characters in the car with hold Right and R1 or RB." },
      { question: "Can you shoot while your partner drives in GTA 6?", answer: "Yes. Sit in the passenger seat and shoot while they drive. Hold Right on the D-pad for speed commands or to split up." },
    ],
    related: [L.switchChar, L.callPartner, L.autoDrive, L.relationship],
  },
  {
    slug: "bigfoot",
    title: "GTA 6 Bigfoot: Where to Find the Easter Egg",
    heading: "Where to find Bigfoot",
    description:
      "Where to find Bigfoot in GTA 6: drive to Cottonmouth Lake, just south of Hamlet. You will hear a growl, then see the creature by an animal carcass. Unofficial.",
    keywords: ["GTA 6 Bigfoot", "GTA 6 where to find Bigfoot", "GTA 6 sasquatch", "GTA 6 Cottonmouth Lake", "GTA 6 easter egg Bigfoot", "GTA 6 skunk ape"],
    image: GRASSRIVERS,
    imageAlt: "Grassrivers, official Rockstar still",
    kind: "activity",
    answer: [
      "Drive to Cottonmouth Lake, just south of Hamlet. You can go there early, once you can drive around.",
      "Listen for a deep growl. Bigfoot is often standing over an animal carcass on a dirt road, then runs into the swamp.",
      "If you follow it you may find a strange effigy on a tree. Stay there and a short scene plays, then you wake up nearby.",
    ],
    facts: [
      { label: "Where", value: "Cottonmouth Lake, south of Hamlet" },
      { label: "When", value: "Available early, once you can drive around" },
      { label: "Clue", value: "A deep growl" },
    ],
    faqs: [
      { question: "Is there Bigfoot in GTA 6?", answer: "Yes. There is a Bigfoot easter egg at Cottonmouth Lake, just south of Hamlet." },
      { question: "How do you find Bigfoot in GTA 6?", answer: "Go to Cottonmouth Lake south of Hamlet, listen for a growl, and look for the creature by an animal carcass. Following it into the swamp triggers a short scene." },
    ],
    related: [L.hamlet, L.grassrivers, L.hunting, L.animals, L.ufo, L.easterEggs],
  },
  {
    slug: "ufo",
    title: "GTA 6 UFO Location: How to Find the Aliens",
    heading: "Where to find the UFO",
    description:
      "Where to find the UFO in GTA 6: the road northwest of the Starlet Motel in Kelly County, after 2 AM, alone. Look for a car with flashing lights. Unofficial.",
    keywords: ["GTA 6 UFO", "GTA 6 UFO location", "GTA 6 aliens", "GTA 6 alien abduction", "GTA 6 easter egg UFO", "GTA 6 Starlet Motel UFO"],
    kind: "activity",
    answer: [
      "Once Chapter 1 is done, go to the road northwest of the Starlet Motel in Kelly County after 2:00 AM. Go alone.",
      "Look for a stranded car with flashing lights by the road. If it isn't there, drive away and come back later. It doesn't show up every time.",
      "Follow the trail next to the car into the woods toward a blue light. The UFO drops a woman it was abducting. Offer to help and go back to her car, and the aliens take you instead.",
    ],
    facts: [
      { label: "Where", value: "Road northwest of the Starlet Motel, Kelly County" },
      { label: "When", value: "After 2:00 AM, after Chapter 1" },
      { label: "Clue", value: "A stranded car with flashing lights" },
      { label: "Go", value: "Alone" },
    ],
    faqs: [
      { question: "Are there UFOs in GTA 6?", answer: "Yes. There is a UFO encounter on the road northwest of the Starlet Motel in Kelly County, at night after 2:00 AM." },
      { question: "How do you find the UFO in GTA 6?", answer: "Go alone after 2:00 AM and look for a stranded car with flashing lights. Follow the trail into the woods toward the blue light, help the woman, then go back to her car." },
      { question: "Why can't I find the UFO in GTA 6?", answer: "It doesn't spawn every time. If the car with flashing lights isn't there, drive away and come back later. Make sure it's after 2:00 AM and you're alone." },
    ],
    related: [L.bigfoot, L.wainkLocations, L.grassrivers, L.hundred, L.easterEggs],
  },
  {
    slug: "shipwrecks",
    title: "GTA 6 Shipwreck Locations: Kenton's Treasures",
    heading: "Kenton's shipwrecks",
    description:
      "GTA 6 shipwreck locations: six wrecks off Key Lento for Kenton's Treasures, what to bring, and how the metal detector works. Unofficial.",
    keywords: ["GTA 6 shipwreck locations", "GTA 6 Kenton's Treasures", "GTA 6 underwater discoveries", "GTA 6 treasure hunting", "GTA 6 metal detector", "GTA 6 doubloons"],
    image: TREASURE,
    imageAlt: "Jason diving for treasure at a shipwreck",
    kind: "activity",
    answer: [
      "Kenton's Treasures start in Chapter 1 with the mission Island Dreams. Kenton marks a shipwreck, you dive down, collect what's there, and bring it back to him for cash. Later he offers new wrecks.",
      "The first six wrecks are all off Key Lento in Mariana County: Nuestra Señora de la Noche, Nuestra Señora de la Ética Laxa, Nuestra Señora Lujuriosa, Urca de Cinco Torres, Urca de Santa Sierra, and the wreck you visit in Island Dreams. They sit south and east of Key Lento.",
      "Island Dreams gives you scuba gear, the Arras Bullhead (a harpoon gun for sharks) and a metal detector. Pan the detector until you see a green flash, head that way as the pings speed up, then grab the treasure when the prompt shows.",
    ],
    facts: [
      { label: "Starts", value: "Island Dreams, Chapter 1" },
      { label: "First six wrecks", value: "Off Key Lento, Mariana County" },
      { label: "You get", value: "Scuba gear, Arras Bullhead, metal detector" },
      { label: "Track it", value: "Progress > Collections > Kenton's Treasures" },
    ],
    faqs: [
      { question: "Where are the shipwrecks in GTA 6?", answer: "The first six are off Key Lento in Mariana County, to the south and east of the island. You visit the first one during the Chapter 1 mission Island Dreams." },
      { question: "How do you find treasure in GTA 6?", answer: "Take out the metal detector at a wreck and pan it around. A green flash shows the direction, and the pings get faster as you get close. Grab the treasure when the prompt appears." },
      { question: "What do you need for Kenton's Treasures in GTA 6?", answer: "Scuba gear, a metal detector and the Arras Bullhead harpoon gun for sharks. Island Dreams gives you all three. If you use another boat, Kenton has them delivered to it." },
      { question: "What do you do with the treasure in GTA 6?", answer: "Bring it back to Kenton in exchange for cash. Once you've found everything at a wreck, that wreck counts as complete." },
    ],
    related: [L.islandMission, L.islandDreams, L.treasureDiving, L.scuba, L.kenton, L.shark],
  },
  {
    slug: "military-base",
    title: "GTA 6 Military Base Location: How to Get Into Mile Zero",
    heading: "Military base (Mile Zero)",
    description:
      "Where the GTA 6 military base is: Mile Zero Air Station on Goose Key, south-west of Key Lento. What's parked there and the stunt jump that gets you over the fence. Unofficial.",
    keywords: ["GTA 6 military base", "GTA 6 military base location", "GTA 6 Mile Zero Air Station", "GTA 6 army base", "GTA 6 Goose Key", "GTA 6 how to get into the military base"],
    kind: "location",
    answer: [
      "The military base is Mile Zero Air Station, on Goose Key in the far south-west corner of the map, in Mariana County. It isn't far from Jason's house in Key Lento, next to Southwind.",
      "You can go there from Chapter 1, once you can roam the open world as Jason. It's the most heavily guarded place in Leonida, with soldiers on the ground and armed helicopters overhead. Get spotted and you get a high wanted level straight away.",
      "The easiest way in is the Mile Zero Air Station Southeast stunt jump. Drive along the southern access road to the south-east corner, get past a few checkpoints, and hit the dirt ramp at speed to clear the barbed-wire fence. You can also drive through the gate.",
      "Parked on the base: the Hauners P-996 Lazer jet, Botticher 015A planes, Hauners Rhino tanks, Hauners APCs, Botticher Buzzard helicopters and Mammoth Patriot trucks.",
    ],
    facts: [
      { label: "Name", value: "Mile Zero Air Station" },
      { label: "Where", value: "Goose Key, Mariana County (far south-west)" },
      { label: "Open from", value: "Chapter 1" },
      { label: "Way in", value: "Southeast stunt jump, or the gate" },
    ],
    faqs: [
      { question: "Where is the military base in GTA 6?", answer: "Mile Zero Air Station is on Goose Key in the far south-west of the map, in Mariana County. It's close to Key Lento and next to Southwind." },
      { question: "How do you get into the military base in GTA 6?", answer: "Use the Mile Zero Air Station Southeast stunt jump at the south-east corner of the base to fly over the fence, or drive through the gate. Expect gunfire either way." },
      { question: "What vehicles are at the GTA 6 military base?", answer: "Hauners P-996 Lazer jets, Botticher 015A planes, Hauners Rhino tanks, Hauners APCs, Botticher Buzzard helicopters and Mammoth Patriot trucks." },
      { question: "Can you go to the military base early in GTA 6?", answer: "Yes. You can reach Mile Zero Air Station from Chapter 1, once you can roam the open world as Jason. It's very well guarded, so save first." },
    ],
    related: [L.tank, L.fighterJet, L.stuntJumps, L.loseWanted, L.wanted, L.southwindMap, L.keyLento],
  },
  {
    slug: "tank",
    title: "GTA 6 Tank Location: How to Get the Rhino Tank",
    heading: "Get a tank",
    description:
      "How to get a tank in GTA 6: Hauners Rhino tanks are parked at Mile Zero Air Station, the military base south-west of Key Lento. Where to look and what happens next. Unofficial.",
    keywords: ["GTA 6 tank", "GTA 6 tank location", "GTA 6 how to get a tank", "GTA 6 Rhino tank", "GTA 6 where to find a tank", "GTA 6 steal a tank"],
    kind: "vehicle",
    answer: [
      "Tanks are at Mile Zero Air Station, the military base on Goose Key in the far south-west of the map. It's the only place a tank has been found so far. The tank is the Hauners Rhino.",
      "Look on the south side of the base, often in or by a hangar. Some spawn on the north side too. The tanks are unlocked, so you just get in. If soldiers drive one at you, you can also pull the driver out.",
      "Taking a tank gets you a high wanted level straight away. A tank won't fit in your garage, so you can't keep it.",
      "After the story, the Hauners Rhino Tank cheat unlocks once you complete all survival challenges.",
    ],
    facts: [
      { label: "Tank", value: "Hauners Rhino" },
      { label: "Where", value: "Mile Zero Air Station" },
      { label: "Look", value: "South side, in or by the hangars" },
      { label: "Keep it?", value: "No, too big for a garage" },
    ],
    faqs: [
      { question: "Where is the tank in GTA 6?", answer: "At Mile Zero Air Station, the military base on Goose Key in the far south-west of the map. Check the south side of the base, often in or by a hangar. Some spawn on the north side too." },
      { question: "Can you keep a tank in GTA 6?", answer: "No. A tank is too big for your garage, so you can't save it as a personal vehicle." },
      { question: "Is there a tank cheat in GTA 6?", answer: "Yes, but only after the story. The Hauners Rhino Tank cheat unlocks when you complete all survival challenges." },
      { question: "What tank is in GTA 6?", answer: "The Hauners Rhino. So far it has only been found at Mile Zero Air Station." },
    ],
    related: [L.militaryBase, L.fighterJet, L.rhino, L.cheats, L.loseWanted, L.vehiclesHub],
  },
  {
    slug: "fighter-jet",
    title: "GTA 6 Fighter Jet Location: How to Get the Lazer",
    heading: "Get a fighter jet",
    description:
      "How to get a fighter jet in GTA 6: Hauners P-996 Lazer jets sit around the runway at Mile Zero Air Station. How to reach one, take off and survive the chase. Unofficial.",
    keywords: ["GTA 6 fighter jet", "GTA 6 jet location", "GTA 6 how to get a jet", "GTA 6 Lazer", "GTA 6 military jet", "GTA 6 steal a jet"],
    kind: "vehicle",
    answer: [
      "Fighter jets are at Mile Zero Air Station, the military base on Goose Key in the far south-west of the map. The jet is the Hauners P-996 Lazer, parked around the airfield and runway.",
      "Get over the fence with the Mile Zero Air Station Southeast stunt jump or drive through the gate, then head for the runway. The jets are unlocked, so get in like any other vehicle and take off right away.",
      "You get a high wanted level, and military fighter jets come after you once you're in the air. Stay low and fast. Save before you try.",
      "After the story, the Hauners P-996 Lazer cheat unlocks once you complete all challenges.",
    ],
    facts: [
      { label: "Jet", value: "Hauners P-996 Lazer" },
      { label: "Where", value: "Mile Zero Air Station runway" },
      { label: "Open from", value: "Chapter 1" },
      { label: "Watch out", value: "Fighter jets chase you" },
    ],
    faqs: [
      { question: "Where is the fighter jet in GTA 6?", answer: "Hauners P-996 Lazer jets are parked around the airfield and runway at Mile Zero Air Station, the military base in the far south-west of the map." },
      { question: "How do you steal a jet in GTA 6?", answer: "Get into Mile Zero Air Station with the southeast stunt jump or through the gate, drive to the runway, climb into a Lazer and take off straight away. Fighter jets will chase you." },
      { question: "When can you get a jet in GTA 6?", answer: "From Chapter 1, once you can roam the open world as Jason. The base is open, just very well guarded." },
      { question: "Is there a jet cheat in GTA 6?", answer: "Yes, after the story. The Hauners P-996 Lazer cheat unlocks when you complete all challenges." },
    ],
    related: [L.militaryBase, L.tank, L.lazer, L.plane, L.helicopter, L.parachute, L.loseWanted],
  },
  {
    slug: "rocket-launcher",
    title: "GTA 6 Rocket Launcher: Where to Buy It and Get One Early",
    heading: "Get a rocket launcher",
    description:
      "How to get a rocket launcher in GTA 6: buy the Hauners H-AT at an Expanded Ammu-Nation, or find one early in a bunker near the Griffin range. Grenade launchers too. Unofficial.",
    keywords: ["GTA 6 rocket launcher", "GTA 6 how to get a rocket launcher", "GTA 6 RPG", "GTA 6 grenade launcher", "GTA 6 Hauners H-AT", "GTA 6 rocket launcher early"],
    kind: "weapon",
    answer: [
      "There's one rocket launcher, the Hauners H-AT, for $16,000. The two grenade launchers are the Hillinger Boomer ($12,000) and the Deever Tech GLR40 ($15,500).",
      "Only the six Expanded Ammu-Nations sell them: Big Shots in Hamlet, Woodhatch in Capri, Phil's Ammu-Nation, Iron & Oak and Prestige Firearms in Vice City, and Black Eagle in north-west Vice City. Hover a gun store on the map to see its tier.",
      "You can also find an H-AT early. Go to the impound lot just south-west of the Griffin Shooting Range in north-west Vice City. Enter the old RV covered in antennas and go down the hatch into the bunker. The H-AT leans against a safe with four rockets.",
      "Do it after the Chapter 1 step Building a Life, which unlocks weapon storage in Jason's car. The bunker also has the Conspiracist (a unique Type 9 SMG), frag grenades, adrenaline and Zombix.",
    ],
    facts: [
      { label: "Rocket launcher", value: "Hauners H-AT, $16,000" },
      { label: "Grenade launchers", value: "Hillinger Boomer $12,000, Deever Tech GLR40 $15,500" },
      { label: "Sold at", value: "Expanded Ammu-Nations (6)" },
      { label: "Early one", value: "Bunker south-west of the Griffin range" },
    ],
    faqs: [
      { question: "Where do you get a rocket launcher in GTA 6?", answer: "Buy the Hauners H-AT for $16,000 at an Expanded Ammu-Nation, or pick one up early in the bunker under an antenna-covered RV, in the impound lot south-west of the Griffin Shooting Range." },
      { question: "Which Ammu-Nation sells rocket launchers in GTA 6?", answer: "The six Expanded stores: Big Shots (Hamlet), Woodhatch (Capri), Phil's Ammu-Nation, Iron & Oak, Prestige Firearms (Ocean Beach) and Black Eagle (north-west Vice City)." },
      { question: "How do you get a grenade launcher in GTA 6?", answer: "Buy the Hillinger Boomer for $12,000 or the Deever Tech GLR40 for $15,500 at an Expanded Ammu-Nation." },
      { question: "How do you get a rocket launcher early in GTA 6?", answer: "After the Chapter 1 step Building a Life, go to the impound lot south-west of the Griffin Shooting Range, enter the antenna-covered RV and drop through the hatch. The H-AT is inside with four rockets." },
    ],
    related: [L.gunStores, L.hat, L.griffinRange, L.weapons, L.loadout, L.cheats],
  },
  {
    slug: "fast-and-furious-car",
    title: "GTA 6 Paul Walker Fast and Furious Car Location (Green Eclipse)",
    heading: "Fast and Furious car",
    description:
      "Where to find Paul Walker's green Fast and Furious car in GTA 6: a villa garage on Vespucci Island, Vice City. How to take it quietly, register it, and its stats. Unofficial.",
    keywords: ["GTA 6 Paul Walker car", "GTA 6 Fast and Furious car", "GTA 6 Eclipse location", "GTA 6 Brian O'Conner car", "GTA 6 Vespucci Island garage", "GTA 6 secret car"],
    kind: "vehicle",
    answer: [
      "A green tribute to Brian O'Conner's 1995 Eclipse from The Fast and the Furious is hidden in a villa garage near the middle of Vespucci Island. The island is part of the Rialto Islands, between Vice City and Vice Beach, just west of Vice Beach.",
      "It isn't tied to the story, so you can go as soon as you can roam the open world. Getting to Vice City early is fine.",
      "Guides differ on the quiet way in. The small side door can set off the garage alarm, so either use the big front shutter or cut the alarm on the garage wall straight away. Then smash the window or use the Slim Jim, and hotwire the car.",
      "Drive it to a Pay 'n' Spray and register it for $6,750 to keep it. Its stats: speed 7.2, acceleration 7.6, asphalt handling 5.8, off-road 1.9, strength 3.0.",
    ],
    facts: [
      { label: "Where", value: "Villa garage, Vespucci Island (Vice City)" },
      { label: "Story lock", value: "None" },
      { label: "Register", value: "$6,750 at a Pay 'n' Spray" },
      { label: "Stats", value: "Speed 7.2, Acceleration 7.6, Strength 3.0" },
    ],
    faqs: [
      { question: "Where is Paul Walker's car in GTA 6?", answer: "In a villa garage near the middle of Vespucci Island, in the Rialto Islands just west of Vice Beach in Vice City." },
      { question: "How do you get the Fast and Furious car in GTA 6?", answer: "Get into the villa garage on Vespucci Island without leaving the alarm on, smash the window or use the Slim Jim, hotwire it and drive out. Register it at a Pay 'n' Spray for $6,750 to keep it." },
      { question: "Can you get the Fast and Furious Eclipse early in GTA 6?", answer: "Yes. It isn't tied to a mission, so you can drive to Vespucci Island as soon as you can roam the open world." },
      { question: "Is the Fast and Furious car fast in GTA 6?", answer: "It's quick for an early car: speed 7.2 and acceleration 7.6. Strength is only 3.0, so it gets damaged fast, and off-road handling is 1.9." },
    ],
    related: [L.easterEggs, L.dexter, L.register, L.slimJim, L.hotwire, L.payNSpray, L.fastestCars, L.viceCity],
  },
  {
    slug: "dexter-apartment",
    title: "GTA 6 Dexter Morgan's Apartment Location (Easter Egg)",
    heading: "Dexter's apartment",
    description:
      "Where Dexter Morgan's apartment is in GTA 6: Trinity Apartments on Washington Island, Vice City, with his tools on the roof and a boat like Slice of Life. Unofficial.",
    keywords: ["GTA 6 Dexter apartment", "GTA 6 Dexter easter egg", "GTA 6 Dexter Morgan", "GTA 6 Trinity Apartments", "GTA 6 Washington Island", "GTA 6 Slice of Life boat"],
    kind: "location",
    answer: [
      "Dexter Morgan's apartment is on Washington Island, on the Vice Beach side of Vice City. The building sits between the Vice Beach Top Fun Drones icon and the Pay 'n' Spray icon on the map.",
      "Look for a small light-blue building. Take the stairs on its south side to the second floor and follow the outside walkway. Dexter's door is the last one at the end.",
      "You can't go inside. The complex is called Trinity Apartments, there are syringes, gloves and other tools on the roof, and a boat that looks like his Slice of Life is docked on the water nearby.",
    ],
    facts: [
      { label: "Where", value: "Washington Island, Vice City" },
      { label: "Building", value: "Trinity Apartments, second floor" },
      { label: "Go inside", value: "No" },
      { label: "Also there", value: "Tools on the roof, a Slice of Life boat" },
    ],
    faqs: [
      { question: "Where is Dexter's apartment in GTA 6?", answer: "On Washington Island in Vice City, between the Vice Beach Top Fun Drones and Pay 'n' Spray icons. It's on the second floor of a light-blue building called Trinity Apartments." },
      { question: "Can you go inside Dexter's apartment in GTA 6?", answer: "No. The door doesn't open, but the roof and the dock next to the building have more Dexter nods." },
      { question: "Is Dexter's boat in GTA 6?", answer: "A boat that looks like Dexter's Slice of Life is docked on the water by the apartment building." },
    ],
    related: [L.easterEggs, L.fastFurious, L.viceCity, L.payNSpray, L.locationsHub],
  },
  {
    slug: "easter-eggs",
    title: "GTA 6 Easter Eggs and Secrets: Every One Found So Far",
    heading: "Easter eggs",
    description:
      "GTA 6 Easter eggs found so far: Bigfoot, the UFO, Paul Walker's Fast and Furious car, Dexter's apartment, a dog on a jet ski, a real egg on a Vice City tower and more. Unofficial.",
    keywords: ["GTA 6 easter eggs", "GTA 6 secrets", "GTA 6 easter egg locations", "GTA 6 hidden secrets", "GTA 6 references", "GTA 6 Red Dead easter egg"],
    kind: "location",
    answer: [
      "Bigfoot is back, with a full encounter in the swamps, and aliens return with a UFO you can see at night. Both have their own guides.",
      "Paul Walker's green Fast and Furious car is hidden in a villa garage on Vespucci Island, and you can keep it. Dexter Morgan's apartment is on Washington Island in Vice City.",
      "Swim far out to sea and a dog riding a jet ski can turn up. On top of the tallest tower in Vice City there's reported to be a real Easter egg in a nest that you can pick up and throw.",
      "Books link the games: a Western about New Austin from Red Dead Redemption (one is in Jacob's Tavern in Millport) and a Liberty City crime memoir on the table by Jason's back door in Chapter 1. More are still being found.",
    ],
    facts: [
      { label: "Monsters", value: "Bigfoot, the UFO" },
      { label: "Film and TV", value: "Fast and Furious car, Dexter's apartment" },
      { label: "Animals", value: "A dog on a jet ski" },
      { label: "Series nods", value: "Red Dead and Liberty City books" },
    ],
    faqs: [
      { question: "What Easter eggs are in GTA 6?", answer: "So far: Bigfoot, a UFO, Paul Walker's Fast and Furious car on Vespucci Island, Dexter's apartment on Washington Island, a dog on a jet ski out at sea, an egg on top of Vice City's tallest tower, and books that nod to Red Dead Redemption and Liberty City." },
      { question: "Is Bigfoot in GTA 6?", answer: "Yes. Bigfoot has a full encounter in the swamps. See the Bigfoot guide for where to go." },
      { question: "Is there a Red Dead Redemption easter egg in GTA 6?", answer: "Yes. A Western novel tells the story of a cowboy in New Austin, a place from Red Dead Redemption. One copy is in Jacob's Tavern in Millport, and you can read excerpts." },
      { question: "Is there a dog on a jet ski in GTA 6?", answer: "Yes. If you swim far out to sea, a dog riding a jet ski can show up." },
    ],
    related: [L.bigfoot, L.ufo, L.fastFurious, L.dexter, L.jetSki, L.magazines, L.millportMap, L.jasonsPlace],
  },
  {
    slug: "rob-police-car",
    title: "GTA 6 How to Rob a Police Car (Trunk Loot)",
    heading: "Rob a police car",
    description:
      "How to rob a police car in GTA 6: use the Slim Jim on a parked cop car, sit inside to switch off the trunk alarm, then loot guns, ammo and body armor. Unofficial.",
    keywords: ["GTA 6 rob police car", "GTA 6 police car trunk", "GTA 6 steal from police car", "GTA 6 cop car loot", "GTA 6 police car weapons"],
    kind: "weapon",
    answer: [
      "You need the Slim Jim, which Moses gives you in Chapter 2. Find a parked police car with no officers close by.",
      "Use the Slim Jim on the driver's door to get in without the alarm. Sitting inside switches off the trunk alarm.",
      "Get out, open the trunk and take everything. Cop cars usually carry a gun, most often an assault rifle and sometimes a shotgun, plus ammo, body armor and other police gear.",
    ],
    facts: [
      { label: "Needs", value: "Slim Jim (Chapter 2)" },
      { label: "Trunk alarm", value: "Off once you sit inside" },
      { label: "Loot", value: "Assault rifles, shotguns, ammo, armor" },
    ],
    faqs: [
      { question: "How do you rob a police car in GTA 6?", answer: "Use the Slim Jim on the driver's door of a parked cop car with no officers nearby, sit inside to switch off the trunk alarm, then open the trunk and loot it." },
      { question: "What's in a police car trunk in GTA 6?", answer: "Usually a gun, most often an assault rifle and sometimes a shotgun, plus ammo, body armor and other police gear." },
      { question: "Do you need the Slim Jim to rob a police car in GTA 6?", answer: "Yes. It opens the door without the alarm. Moses gives it to you in Chapter 2." },
    ],
    related: [L.slimJim, L.moses, L.armor, L.weapons, L.wanted, L.loseWanted, L.carTrackers],
  },
  {
    slug: "pet-animals",
    title: "GTA 6 How to Pet Dogs and Cats",
    heading: "Pet animals",
    description:
      "How to pet animals in GTA 6: focus on a dog or cat, praise it until the Pet option shows, and get a small Focus boost. Where to find a pettable gator. Unofficial.",
    keywords: ["GTA 6 pet animals", "GTA 6 pet dog", "GTA 6 pet cat", "GTA 6 how to pet", "GTA 6 pet treats", "GTA 6 pet gator"],
    kind: "animal",
    answer: [
      "Walk up to a dog or cat and focus on it with L2 (PS5) or LT (Xbox). Choose Praise a few times and the Pet option appears. It doesn't work on every animal.",
      "The same menu lets you Study an animal you haven't logged yet, which adds it to your animal log, or Scold it. Wild animals can't be petted.",
      "Petting gives a small Focus boost. Pet treats from convenience stores can be given too, and with a dog it's best to have the owner's OK first.",
      "There's reported to be a gator you can pet at the yard sale round the corner from Jason's house, and a store cat in the Key Lento Mini Mart.",
    ],
    facts: [
      { label: "How", value: "Focus (L2 or LT), Praise, then Pet" },
      { label: "Who", value: "Dogs, cats and other tame animals" },
      { label: "Reward", value: "Small Focus boost" },
    ],
    faqs: [
      { question: "How do you pet a dog in GTA 6?", answer: "Focus on it with L2 or LT, choose Praise a few times, then pick Pet when it appears." },
      { question: "Can you pet cats in GTA 6?", answer: "Yes. Same as dogs: focus, praise, then pet. It gives a small Focus boost." },
      { question: "Does petting animals do anything in GTA 6?", answer: "It gives a small Focus boost. Use Study in the same menu to add new animals to your log." },
      { question: "Can you pet an alligator in GTA 6?", answer: "There's reported to be one pettable gator, at the yard sale round the corner from Jason's house in Key Lento." },
    ],
    related: [L.focus, L.snake, L.animals, L.convenienceStores, L.characterStats, L.keyLento],
  },
  {
    slug: "car-trackers",
    title: "GTA 6 Car Trackers Explained: Standard vs Advanced",
    heading: "Car trackers",
    description:
      "GTA 6 car trackers explained: standard and advanced trackers, why the police find you when you slow down, and how registering a car turns its tracker off. Unofficial.",
    keywords: ["GTA 6 trackers", "GTA 6 tracker", "GTA 6 remove tracker", "GTA 6 advanced tracker", "GTA 6 standard tracker", "GTA 6 how to disable tracker"],
    kind: "vehicle",
    answer: [
      "Nicer cars can have a standard tracker or an advanced tracker. An icon above the minimap shows which one your car has. Scan a car with WAiNK first to check.",
      "You can't rip a tracker out. Registering the car switches it off. A standard tracker stops you modding the car until it's registered, and from Chapter 3 any Pay 'n' Spray registers cars with one.",
      "An advanced tracker sends your location to the police if you slow down or stop for a few seconds. Keep your speed up, freeways help, and ditch the car well away from where you're going.",
      "Guides differ on whether you can ever keep an advanced-tracker car, so for now treat it as a getaway car only. Keyless high-end cars also need the key cloner from Chapter 3.",
    ],
    facts: [
      { label: "Kinds", value: "Standard, advanced" },
      { label: "Turn it off", value: "Register the car" },
      { label: "Standard", value: "No mods until registered" },
      { label: "Advanced", value: "Pings police when you slow down" },
    ],
    faqs: [
      { question: "How do you remove a tracker in GTA 6?", answer: "You can't take it out. Registering the car at a Pay 'n' Spray switches a standard tracker off. From Chapter 3 any Pay 'n' Spray registers standard-tracker cars." },
      { question: "What does an advanced tracker do in GTA 6?", answer: "It tells the police where you are if you slow down or stop for a few seconds. Keep driving fast and ditch the car far from where you're headed." },
      { question: "Why can't I mod my stolen car in GTA 6?", answer: "It has a tracker. Register it first, which switches the tracker off." },
    ],
    related: [L.register, L.scanCar, L.keyCloner, L.payNSpray, L.sellCars, L.loseWanted, L.randy],
  },
  {
    slug: "jet-ski",
    title: "GTA 6 How to Ride the Jet Ski at Jason's House",
    heading: "Jet ski",
    description:
      "How to ride the jet ski at Jason's house in GTA 6: hitch its trailer to Jason's truck, back it down the ramp into the water, unhook it and swim out. Unofficial.",
    keywords: ["GTA 6 jet ski", "GTA 6 jet ski Jason's house", "GTA 6 how to ride jet ski", "GTA 6 jet ski trailer", "GTA 6 jet ski location"],
    image: JET_SKIS,
    imageAlt: "Jet skis among boats in the Leonida Keys, official Rockstar still",
    kind: "vehicle",
    answer: [
      "A jet ski sits on a metal trailer by the driveway at Jason's house in Key Lento. You can't ride it while it's on the trailer.",
      "Get in Jason's Vapid Ganado and reverse up to the trailer. The hitch connects on its own when you're close.",
      "Drive forward in a straight line until the trailer faces the ramp, then reverse without steering to back it into the water. Press O (PS5) or B (Xbox) to unhook it.",
      "Park the truck out of the way, swim to the jet ski and climb on.",
    ],
    facts: [
      { label: "Where", value: "Jason's house, Key Lento" },
      { label: "Tow with", value: "Jason's Vapid Ganado" },
      { label: "Unhook", value: "O (PS5) or B (Xbox)" },
    ],
    faqs: [
      { question: "Where is the jet ski in GTA 6?", answer: "On a metal trailer by the driveway at Jason's house in Key Lento." },
      { question: "Why can't I get on the jet ski in GTA 6?", answer: "It's on a trailer. Hitch the trailer to Jason's truck, back it into the water and unhook it, then swim out and climb on." },
      { question: "How do you unhook the jet ski trailer in GTA 6?", answer: "Back the trailer into the water, then press O on PS5 or B on Xbox." },
    ],
    related: [L.boat, L.jasonsPlace, L.jasonsPlaceMap, L.swimming, L.boating, L.easterEggs],
  },
  {
    slug: "weather",
    title: "GTA 6 Weather: Rain, Storms and the Weather App",
    heading: "Weather",
    description:
      "GTA 6 weather: Leonida has changing, local weather, including rain and storms. Check the Weather app on your phone for the conditions around you. Unofficial.",
    keywords: ["GTA 6 weather", "GTA 6 rain", "GTA 6 storms", "GTA 6 weather app", "GTA 6 rainstorm"],
    image: VICE_CITY,
    imageAlt: "Vice City, official Rockstar still",
    kind: "location",
    answer: [
      "Weather in Leonida changes as you play, and it can differ from one area to another. Rain and storms are part of that system.",
      "Open the Weather app on your in-game phone to check the conditions around you.",
    ],
    facts: [
      { label: "System", value: "Changing, and local" },
      { label: "Includes", value: "Rain and storms" },
      { label: "Check", value: "Weather app on the phone" },
    ],
    faqs: [
      { question: "Does GTA 6 have dynamic weather?", answer: "Yes. Weather changes as you play and can differ from place to place, including rain and storms." },
      { question: "How do you check the weather in GTA 6?", answer: "Open the Weather app on your in-game phone." },
    ],
    related: [L.usePhone, L.skipTime, L.locationsHub, L.whatup],
  },
  {
    slug: "police-scanner",
    title: "GTA 6 Police Scanner: How You Hear Dispatch",
    heading: "Police scanner",
    description:
      "GTA 6 police scanner: Cal installs a cop scanner on Jason's phone during the Chapter 1 mission Unwanted Attention. It runs in the background and lets you hear dispatch. Unofficial.",
    keywords: ["GTA 6 police scanner", "GTA 6 cop scanner", "GTA 6 police radio", "GTA 6 dispatch", "GTA 6 police chatter"],
    kind: "phone",
    answer: [
      "During the Chapter 1 mission Unwanted Attention, Cal installs a cop scanner on Jason's phone.",
      "You don't have to turn it on. After that, you can hear police dispatch during crimes and chases, including when they call out your car or clothes.",
    ],
    facts: [
      { label: "Unlock", value: "Unwanted Attention, Chapter 1" },
      { label: "Where", value: "On Jason's phone" },
      { label: "Activate", value: "It runs in the background" },
    ],
    faqs: [
      { question: "Why can you hear police radio in GTA 6?", answer: "Cal installs a cop scanner on Jason's phone during Unwanted Attention in Chapter 1. It runs in the background." },
      { question: "Do you have to turn on the police scanner in GTA 6?", answer: "No. Once it is installed, you hear dispatch during crimes and chases without opening an app." },
    ],
    related: [L.unwantedAttention, L.loseWanted, L.wanted, L.usePhone],
  },
  {
    slug: "bank-jobs",
    title: "GTA 6 Bank Jobs: Dye Pack Jammer and Chapter 3 Unlocks",
    heading: "Bank jobs",
    description:
      "How to unlock bank jobs in GTA 6: they open in Chapter 3 after the mission Credit Check, when you get the Dye Pack Jammer you need to fence marked bills. Unofficial.",
    keywords: ["GTA 6 bank heist", "GTA 6 rob a bank", "GTA 6 bank jobs", "GTA 6 Dye Pack Jammer", "GTA 6 payday loans", "GTA 6 Credit Check"],
    image: STORE_ROBBERY,
    imageAlt: "A store robbery, official Rockstar still",
    kind: "money",
    answer: [
      "Bank jobs and payday loan robberies open in Chapter 3 after Credit Check, when you meet Raul's crew.",
      "That mission also gives you the Dye Pack Jammer, which you need to fence marked bills from banks and payday loan shops.",
      "The jobs then show up on the map. A typical job means threatening the teller, taking the counter cash and robbing the back-room safe, then losing the cops.",
    ],
    facts: [
      { label: "Unlocks", value: "Credit Check, Chapter 3" },
      { label: "Need", value: "Dye Pack Jammer, for marked bills" },
      { label: "On the map", value: "Banks and payday loan shops" },
    ],
    faqs: [
      { question: "How do you unlock bank jobs in GTA 6?", answer: "They open in Chapter 3 after the mission Credit Check, when you meet Raul's crew and get the Dye Pack Jammer." },
      { question: "What is the Dye Pack Jammer in GTA 6?", answer: "It is the tool you need to fence marked bills taken from banks and payday loan shops. You get it in Credit Check." },
    ],
    related: [L.paydayLoans, L.creditCheck, L.robStore, L.jewelryGuide, L.money],
  },
  {
    slug: "relationship",
    title: "GTA 6 Relationship Status: How to Raise or Ruin It",
    heading: "Relationship status",
    description:
      "How Jason and Lucia's relationship works in GTA 6: there are four statuses, from Running on Empty to Hot Together. Spend time together to raise it. You can't romance anyone else. Unofficial.",
    keywords: ["GTA 6 relationship", "GTA 6 romance", "GTA 6 relationship status", "GTA 6 Hot Together", "GTA 6 can you romance Mandy", "GTA 6 hold hands"],
    image: JASON_AND_LUCIA,
    imageAlt: "Jason and Lucia, official Rockstar artwork",
    kind: "character",
    answer: [
      "Jason and Lucia have four relationship statuses: Running on Empty, Partners in Crime, Crazy in Love and Hot Together. Check them in the Jason & Lucia menu, or hold Right on the D-pad.",
      "Spend time together, do jobs and activities as a pair, and show affection — hold hands, talk, and offer food or a drink. A heart icon appears when something helps.",
      "Ignoring calls and messages, or leaving one of them out of the story, will lower the status. You can't romance other characters.",
    ],
    facts: [
      { label: "Statuses", value: "Four, from Running on Empty to Hot Together" },
      { label: "Check", value: "Jason & Lucia menu, or hold D-pad Right" },
      { label: "Other romances", value: "No" },
    ],
    faqs: [
      { question: "How do you improve Jason and Lucia's relationship in GTA 6?", answer: "Spend time together, do activities and jobs as a pair, and show affection. Check the status in the Jason & Lucia menu." },
      { question: "Can you romance other characters in GTA 6?", answer: "No. You can raise or neglect the relationship between Jason and Lucia, but you can't romance anyone else." },
    ],
    related: [L.callPartner, L.switchChar, L.charactersHub, L.criminalProfile],
  },
  {
    slug: "call-partner",
    title: "GTA 6 How to Call Jason or Lucia",
    heading: "Call your partner",
    description:
      "How to call your partner in GTA 6: open Contacts on the phone, or hold Right on the D-pad and ask them to meet up. They will come to you. Unofficial.",
    keywords: ["GTA 6 how to call Lucia", "GTA 6 how to call Jason", "GTA 6 meet up", "GTA 6 summon partner", "GTA 6 Contacts app"],
    image: JASON_AND_LUCIA,
    imageAlt: "Jason and Lucia, official Rockstar artwork",
    kind: "phone",
    answer: [
      "Open the Contacts app on your phone and call your partner, or hold Right on the D-pad and ask them to meet up.",
      "They will come to your location. If you have a waypoint set, they can meet you there instead.",
      "You can also message them on WhatUp. Answering their messages helps the relationship.",
    ],
    facts: [
      { label: "Call", value: "Contacts app, or hold D-pad Right" },
      { label: "They go to", value: "You, or your waypoint" },
      { label: "Message", value: "WhatUp" },
    ],
    faqs: [
      { question: "How do you call your partner in GTA 6?", answer: "Open Contacts on the phone and call them, or hold Right on the D-pad and ask them to meet up. They will come to you." },
      { question: "How do you get Jason or Lucia to come to you?", answer: "Call them or use the partner menu to meet up. If a waypoint is set, they can meet you there." },
    ],
    related: [L.switchChar, L.whatup, L.relationship, L.partnerDrive],
  },
  {
    slug: "character-stats",
    title: "GTA 6 Stats: Health, Stamina and Focus",
    heading: "Health, stamina and Focus",
    description:
      "GTA 6 character stats: health, stamina and Focus are tracked in the Fitness app. Jason and Lucia each have their own levels. Train to raise them for good. Unofficial.",
    keywords: ["GTA 6 stats", "GTA 6 health bar", "GTA 6 stamina", "GTA 6 how to increase health", "GTA 6 fitness app", "GTA 6 gym"],
    image: GYM,
    imageAlt: "A gym workout, official Rockstar still",
    kind: "activity",
    answer: [
      "There are three main stats: health, stamina and Focus. The Fitness app on your phone tracks them. Jason and Lucia do not share levels.",
      "Food and drinks can give a short boost. Lasting upgrades come from training: strength work for health, cardio for stamina, and Focus activities for Focus.",
      "Find gyms on the map under Activities, then Fitness. At the start, Jason's balcony already has gear. See the workout and Focus guides for the details.",
    ],
    facts: [
      { label: "Stats", value: "Health, stamina and Focus" },
      { label: "Check", value: "Fitness app" },
      { label: "Shared?", value: "No, each character has their own" },
    ],
    faqs: [
      { question: "What stats are in GTA 6?", answer: "Health, stamina and Focus. Check them in the Fitness app. Jason and Lucia each have their own levels." },
      { question: "How do you increase health and stamina in GTA 6?", answer: "Train. Strength work raises health, and cardio raises stamina. Food and drinks only help for a short time. The Fitness app and the workout guide cover the windows." },
    ],
    related: [L.workout, L.focus, L.heal, L.basketball],
  },

  {
    slug: "climbing",
    title: "GTA 6 How to Climb and Vault",
    heading: "How to climb",
    description:
      "How to climb in GTA 6: walk up to a fence, wall or ledge and press Cross on PS5 or A on Xbox. That button is jump and climb on the default scheme. Unofficial.",
    keywords: ["GTA 6 how to climb", "GTA 6 climb", "GTA 6 vault", "GTA 6 jump fence", "GTA 6 clamber"],
    kind: "activity",
    answer: [
      "Walk up to a fence, wall or ledge and press Cross on PS5 or A on Xbox to climb or vault it.",
      "On the default scheme, that button is jump and climb. If you switched to Classic, jump and climb moves to Square or X.",
    ],
    facts: [
      { label: "Default", value: "Cross / A" },
      { label: "Classic scheme", value: "Square / X" },
    ],
    faqs: [
      { question: "How do you climb in GTA 6?", answer: "Walk up to a fence, wall or ledge and press Cross on PS5 or A on Xbox." },
      { question: "Why can't I climb in GTA 6?", answer: "On the default scheme, climb is Cross or A, the same as jump. If you turned on Classic controls, it is Square or X instead." },
    ],
    related: [L.controls, L.cover, L.stealth, L.crouch],
  },
  {
    slug: "scan-car",
    title: "GTA 6 How to Scan a Car with WAiNK",
    heading: "Scan a car with WAiNK",
    description:
      "How to scan a car in GTA 6: use the WAiNK app on your phone. It shows if the car is locked, alarmed or keyless, whether it has a tracker, its value and the registration fee. Unofficial.",
    keywords: ["GTA 6 scan car", "GTA 6 WAiNK car", "GTA 6 vehicle scanner", "GTA 6 how to scan a vehicle", "GTA 6 car tracker", "GTA 6 Waink It"],
    kind: "vehicle",
    answer: [
      "Open the WAiNK app and scan the car in front of you. Cal adds it to Jason's phone during the Chapter 1 mission Unwanted Attention.",
      "The scan shows the make, whether it is locked, alarmed or keyless, if it has a tracker, what it can sell for and what it costs to register.",
    ],
    facts: [
      { label: "App", value: "WAiNK" },
      { label: "Unlock", value: "Unwanted Attention, Chapter 1" },
      { label: "Shows", value: "Locks, trackers, value and registration fee" },
    ],
    faqs: [
      { question: "How do you scan a car in GTA 6?", answer: "Use the WAiNK app on your phone. It is added during Unwanted Attention in Chapter 1." },
      { question: "What does a WAiNK car scan show in GTA 6?", answer: "Whether the car is locked, alarmed or keyless, if it has a tracker, its value and the cost to register it." },
    ],
    related: [L.waink, L.wainkScans, L.register, L.sellCars, L.slimJim],
  },
  {
    slug: "whatup",
    title: "GTA 6 WhatUp: The Messaging App",
    heading: "WhatUp",
    description:
      "WhatUp in GTA 6 is the phone messaging app. Use it for texts from characters, new missions, side-activity tips and to check in with your partner. Unofficial.",
    keywords: ["GTA 6 WhatUp", "GTA 6 What Up", "GTA 6 messaging app", "GTA 6 texts", "GTA 6 how to text"],
    kind: "phone",
    answer: [
      "WhatUp is the instant messaging app on your in-game phone. Open the phone with Up on the D-pad and tap it.",
      "Characters text you there with missions, tips and side activities. You can also message your partner to check in.",
    ],
    facts: [
      { label: "What it is", value: "The phone messaging app" },
      { label: "Open", value: "D-pad Up, then WhatUp" },
    ],
    faqs: [
      { question: "What is WhatUp in GTA 6?", answer: "It is the messaging app on your phone. Characters use it to send missions, tips and side-activity leads." },
      { question: "Can you text your partner in GTA 6?", answer: "Yes. Message them on WhatUp to check in. That also helps the relationship." },
    ],
    related: [L.usePhone, L.callPartner, L.gta6Apps, L.relationship],
  },
  {
    slug: "meditation",
    title: "GTA 6 Meditation: How It Works and Why to Do It",
    heading: "Meditation",
    description:
      "GTA 6 meditation: find meditation spots around Leonida and complete a session to raise Focus. Jason and Lucia can both use the spots. Unofficial.",
    keywords: ["GTA 6 meditation", "GTA 6 meditation spots", "GTA 6 how to meditate", "GTA 6 Positive Mental Attitude"],
    kind: "activity",
    answer: [
      "Meditation spots are around Leonida. Walk up, start a session and finish it to raise Focus.",
      "Jason and Lucia can both meditate. There is a trophy for meditating at every spot.",
    ],
    facts: [
      { label: "Raises", value: "Focus" },
      { label: "Who", value: "Jason and Lucia can both use the spots" },
      { label: "Trophy", value: "Meditate at every spot" },
    ],
    faqs: [
      { question: "Does meditation do anything in GTA 6?", answer: "Yes. Completing a session at a meditation spot raises Focus." },
      { question: "Can both characters meditate in GTA 6?", answer: "Yes. Jason and Lucia can both use the spots. There is a trophy for meditating at every one." },
    ],
    related: [L.meditationHub, L.focus, L.characterStats, L.collectiblesHub],
  },
  {
    slug: "handbrake",
    title: "GTA 6 How to Handbrake and Make a U-Turn",
    heading: "Handbrake and U-turn",
    description:
      "How to handbrake in GTA 6: hold Cross on PS5 or A on Xbox while driving. Add a hard steer to make a quick U-turn when you are losing the cops. Unofficial.",
    keywords: ["GTA 6 handbrake", "GTA 6 emergency brake", "GTA 6 U-turn", "GTA 6 how to drift", "GTA 6 e-brake"],
    kind: "vehicle",
    answer: [
      "Hold Cross on PS5 or A on Xbox to pull the handbrake.",
      "Steer hard left or right at the same time to make a sharp U-turn. That is a useful way to create space in a chase.",
    ],
    facts: [
      { label: "Handbrake", value: "Hold Cross / A" },
      { label: "U-turn", value: "Handbrake and a hard steer" },
    ],
    faqs: [
      { question: "How do you handbrake in GTA 6?", answer: "Hold Cross on PS5 or A on Xbox while driving." },
      { question: "How do you make a U-turn in GTA 6?", answer: "Hold the handbrake and steer hard left or right. It helps you create space when the cops are behind you." },
    ],
    related: [L.loseWanted, L.controls, L.headlights, L.horn],
  },
  {
    slug: "loadout",
    title: "GTA 6 How to Open Your Loadout and Item Wheel",
    heading: "Loadout",
    description:
      "How to open your loadout in GTA 6: hold L1 on PS5 or LB on Xbox. Tap the button to holster. Use the loadout for weapons, items, hats and Zombix. Unofficial.",
    keywords: ["GTA 6 loadout", "GTA 6 weapon wheel", "GTA 6 item wheel", "GTA 6 inventory", "GTA 6 how to holster", "GTA 6 how to use items"],
    kind: "weapon",
    answer: [
      "Hold L1 on PS5 or LB on Xbox to open your loadout. Tap L1 or LB to holster your weapon.",
      "Press R1 or RB to move to the items tab for things like Zombix, hats and glasses.",
    ],
    facts: [
      { label: "Open loadout", value: "Hold L1 / LB" },
      { label: "Holster", value: "Tap L1 / LB" },
      { label: "Items tab", value: "R1 / RB" },
    ],
    faqs: [
      { question: "How do you open the weapon wheel in GTA 6?", answer: "Hold L1 on PS5 or LB on Xbox to open your loadout. Tap the same button to holster." },
      { question: "How do you use items in GTA 6?", answer: "Open the loadout, then press R1 or RB to reach the items tab. That is where Zombix, hats and glasses sit." },
    ],
    related: [L.controls, L.heal, L.armor, L.clothes, L.mask],
  },

  {
    slug: "hotwire",
    title: "GTA 6 How to Hotwire a Car",
    heading: "How to hotwire a car",
    description:
      "How to hotwire a car in GTA 6: after you break in, use both sticks to find the sweet spots and start the engine. Keyless cars cannot be hotwired. Unofficial.",
    keywords: ["GTA 6 hotwire", "GTA 6 how to hotwire", "GTA 6 start stolen car", "GTA 6 keyless car", "GTA 6 break into car"],
    kind: "vehicle",
    answer: [
      "If the car is locked, smash a window or use a slim jim, then climb in. Use both sticks to find the sweet spots and fill the bars to start the engine.",
      "Keyless cars cannot be hotwired. Those need the key cloner from Chapter 3. Smashing a window on an alarmed car will set the alarm off.",
    ],
    facts: [
      { label: "How", value: "Both sticks, find the sweet spots" },
      { label: "Keyless cars", value: "Need the key cloner, Chapter 3" },
    ],
    faqs: [
      { question: "How do you hotwire a car in GTA 6?", answer: "Get in, then use both sticks to find the sweet spots and start the engine." },
      { question: "Why can't I hotwire a car in GTA 6?", answer: "Keyless cars cannot be hotwired. You need the key cloner, which you get in Chapter 3." },
    ],
    related: [L.slimJim, L.keyCloner, L.scanCar, L.carjack],
  },
  {
    slug: "carjack",
    title: "GTA 6 How to Carjack and Pull a Driver Out",
    heading: "How to carjack",
    description:
      "How to carjack in GTA 6: walk up to a moving or stopped car and pull the driver out. Many drivers will fight back, and some are armed. Unofficial.",
    keywords: ["GTA 6 carjack", "GTA 6 hijack", "GTA 6 pull driver out", "GTA 6 steal a car from driver", "GTA 6 carjacking"],
    kind: "vehicle",
    answer: [
      "Walk up to an occupied car and pull the driver out. In a chase, this is often faster than breaking into a parked car.",
      "Many drivers fight back, so be ready to win that struggle. Some are armed. You can't use a slim jim on a car someone is already sitting in.",
    ],
    facts: [
      { label: "How", value: "Pull the driver out" },
      { label: "Watch for", value: "Drivers who fight back, and some who are armed" },
    ],
    faqs: [
      { question: "How do you carjack in GTA 6?", answer: "Walk up to an occupied car and pull the driver out. It is often faster than breaking into a parked car." },
      { question: "Do drivers fight back in GTA 6?", answer: "Yes. Many will struggle with you, and some are armed. You can't slim jim a car while someone is in it." },
    ],
    related: [L.hotwire, L.slimJim, L.loseWanted, L.scanCar],
  },
  {
    slug: "criminal-profile",
    title: "GTA 6 Criminal Profile: The Five Tiers Explained",
    heading: "Criminal profile",
    description:
      "GTA 6 criminal profile: Jason and Lucia each have a reputation with five tiers, from Professional to Irredeemable. The first four can change. Irredeemable stays. Unofficial.",
    keywords: ["GTA 6 criminal profile", "GTA 6 honor system", "GTA 6 reputation", "GTA 6 Irredeemable", "GTA 6 Professional profile", "GTA 6 how to change criminal profile"],
    kind: "activity",
    answer: [
      "Jason and Lucia each have a criminal profile. The five tiers are Professional, Hardened, Violent, Psycho and Irredeemable. Check them in the Jason & Lucia menu, or hold Right on the D-pad.",
      "You can move between the first four. Less violence and cleaner jobs push you toward Professional. More cruelty pushes you toward Psycho.",
      "Irredeemable is permanent. It can hurt your relationship, change how civilians and cops treat you, and block surrender.",
    ],
    facts: [
      { label: "Tiers", value: "Professional, Hardened, Violent, Psycho, Irredeemable" },
      { label: "Check", value: "Jason & Lucia menu, or hold D-pad Right" },
      { label: "Irredeemable", value: "Permanent" },
    ],
    faqs: [
      { question: "How do you check your criminal profile in GTA 6?", answer: "Open the Jason & Lucia menu, or hold Right on the D-pad. Jason and Lucia each have their own profile." },
      { question: "Can you change an Irredeemable criminal profile in GTA 6?", answer: "No. You can move between Professional, Hardened, Violent and Psycho, but Irredeemable stays." },
    ],
    related: [L.relationship, L.wanted, L.loseWanted, L.stealth],
  },
  {
    slug: "public-transport",
    title: "GTA 6 Buses and Trains: How to Ride and Skip the Trip",
    heading: "Buses and trains",
    description:
      "How to ride buses and trains in GTA 6: find a stop or station on the map, wait for the service, board and sit down. You can pay to skip the journey. Unofficial.",
    keywords: ["GTA 6 trains", "GTA 6 bus", "GTA 6 public transport", "GTA 6 metro", "GTA 6 how to ride the train", "GTA 6 skip bus"],
    image: VICE_CITY,
    imageAlt: "Vice City, official Rockstar still",
    kind: "location",
    answer: [
      "Leonida has buses and trains, but they are not on demand. Find a stop or station on the map under Vehicles, then Buses or Trains. Hold Down on the D-pad to see nearby stops.",
      "Wait for the service, hop on and sit down. Set a destination on the route, then hold Triangle or Y to skip the journey for a fee. Longer trips cost more, but they are cheaper than a RydeMe skip.",
    ],
    facts: [
      { label: "Find stops", value: "Map, Vehicles, then Buses or Trains" },
      { label: "Nearby", value: "Hold D-pad Down" },
      { label: "Skip", value: "Hold Triangle / Y, for a fee" },
    ],
    faqs: [
      { question: "Can you ride buses and trains in GTA 6?", answer: "Yes. Find a stop or station, wait for the service, board and sit down. They are not on demand like a taxi." },
      { question: "Can you skip a bus or train ride in GTA 6?", answer: "Yes. Once you are on board, set a destination and hold Triangle or Y to skip the journey for a fee. Longer trips cost more." },
    ],
    related: [L.fastTravel, L.minimap, L.mapFog, L.rydeMe],
  },
  {
    slug: "drive-by",
    title: "GTA 6 How to Shoot from a Car",
    heading: "Drive-by shooting",
    description:
      "How to shoot from a car in GTA 6: press R1 on PS5 or RB on Xbox while driving. Hold L1 or LB if you need to aim. You can also shoot from the passenger seat. Unofficial.",
    keywords: ["GTA 6 drive by", "GTA 6 shoot from car", "GTA 6 passenger shooting", "GTA 6 how to shoot while driving"],
    kind: "weapon",
    answer: [
      "While driving, press R1 on PS5 or RB on Xbox to shoot. Hold L1 or LB if you need to aim first.",
      "You can also sit in the passenger seat and shoot while your partner drives. Hold Circle or B to duck if someone is shooting back.",
    ],
    facts: [
      { label: "Shoot", value: "R1 / RB" },
      { label: "Aim", value: "Hold L1 / LB" },
      { label: "Duck", value: "Hold Circle / B" },
    ],
    faqs: [
      { question: "How do you shoot from a car in GTA 6?", answer: "Press R1 on PS5 or RB on Xbox while driving. Hold L1 or LB to aim." },
      { question: "Can the passenger shoot in GTA 6?", answer: "Yes. Let your partner drive and shoot from the passenger seat." },
    ],
    related: [L.partnerDrive, L.aimAssist, L.controls, L.headlights],
  },
  {
    slug: "crouch",
    title: "GTA 6 How to Crouch",
    heading: "How to crouch",
    description:
      "How to crouch in GTA 6: press Circle on PS5 or B on Xbox. Holding the button makes you rest on foot, or duck if you are in a car. Unofficial.",
    keywords: ["GTA 6 crouch", "GTA 6 how to crouch", "GTA 6 sneak", "GTA 6 duck", "GTA 6 stealth walk"],
    kind: "activity",
    answer: [
      "Press Circle on PS5 or B on Xbox to crouch.",
      "Hold the button to rest when you are on foot. In a car, a hold makes you duck.",
    ],
    facts: [
      { label: "Crouch", value: "Circle / B" },
      { label: "Hold, on foot", value: "Rest" },
      { label: "Hold, in a car", value: "Duck" },
    ],
    faqs: [
      { question: "How do you crouch in GTA 6?", answer: "Press Circle on PS5 or B on Xbox." },
      { question: "How do you duck in a car in GTA 6?", answer: "Hold Circle on PS5 or B on Xbox. A short tap of the same button toggles the headlights." },
    ],
    related: [L.stealth, L.cover, L.headlights, L.controls],
  },
  {
    slug: "100-percent-completion",
    title: "GTA 6 100% Completion Checklist: Everything You Need",
    heading: "100% completion checklist",
    description:
      "The full GTA 6 100% completion checklist for the A Long Road trophy: every requirement and how many you need, from 34 Smash 'n' Grabs to 300 stunts. Many lists only need part done. Unofficial.",
    keywords: [
      "GTA 6 100% completion",
      "GTA 6 100 percent checklist",
      "GTA 6 A Long Road",
      "GTA 6 100% requirements",
      "GTA 6 completion checklist",
      "GTA 6 what counts for 100%",
    ],
    kind: "trophy",
    answer: [
      "100% completion unlocks the A Long Road trophy. Progress counts from the start, but the checklist itself only shows up in Progress > Stats after you finish the story.",
      "Many lists only need part done, like 200 of the base model vehicles and 100 animals. Animals only need studying with binoculars, not hunting.",
      "Gang operations, bank jobs, Payday Loans, vaults, underwater discoveries, shooting ranges, drone races and Bret's target decks need every one. Nothing on the list can be missed for good.",
    ],
    facts: [
      { label: "Story", value: "Finish the story" },
      { label: "Optional tasks", value: "100" },
      { label: "Gang operations", value: "39 of 39" },
      { label: "Bank jobs", value: "22 of 22" },
      { label: "Payday Loans", value: "7 of 7" },
      { label: "Smash 'n' Grabs", value: "34 of 35" },
      { label: "Stick ups", value: "50" },
      { label: "Fenced", value: "$100,000 narcotics, $100,000 jewelry, $250,000 marked bills, $200,000 vehicles" },
      { label: "Vaults", value: "8 of 8" },
      { label: "Kenton sets", value: "5" },
      { label: "Card sets", value: "15 of 18" },
      { label: "WAiNK scans", value: "100" },
      { label: "Underwater discoveries", value: "33 of 33" },
      { label: "Magazines, books and comics", value: "30 (Book Swaps count)" },
      { label: "Meditations", value: "15 of 18" },
      { label: "Cocaine Flamingos", value: "100" },
      { label: "Unique playlists", value: "2 of 2" },
      { label: "Styles", value: "70" },
      { label: "Unique races won", value: "30" },
      { label: "Race challenge golds", value: "10 of 13" },
      { label: "Shooting range golds", value: "42 of 42" },
      { label: "Video games", value: "4 of 4" },
      { label: "Pool opponents", value: "5 of 7" },
      { label: "Mini golf courses", value: "2 of 3" },
      { label: "Basketball hoops", value: "90" },
      { label: "Drone time trials", value: "42 of 42" },
      { label: "Stunts", value: "300 of 397" },
      { label: "Challenges", value: "70 of 80" },
      { label: "Bret's target decks", value: "15 of 15" },
      { label: "Base model vehicles scanned", value: "200" },
      { label: "Standard weapons", value: "50" },
      { label: "Animals studied", value: "100" },
    ],
    faqs: [
      {
        question: "What do you need for 100% in GTA 6?",
        answer: "Finish the story, then complete the checklist: robberies, fencing totals, collectibles, races, ranges, stunts, 70 challenges, 200 vehicle scans, 50 weapons and 100 animals. Many lists only need part done.",
      },
      {
        question: "Where is the 100% checklist in GTA 6?",
        answer: "Under Progress > Stats > 100% Completion. It only shows after you finish the story, but everything you do before that already counts.",
      },
      {
        question: "Can you miss anything for 100% in GTA 6?",
        answer: "No. Everything on the checklist can still be done after the story.",
      },
      {
        question: "How many Smash 'n' Grabs do you need for 100% in GTA 6?",
        answer: "34 of the 35 jewelry stores and pawn shops. Rob the back-room safe too or it may not count.",
      },
    ],
    related: [
      { href: "/where-to-find/jewelry-stores-and-pawn-shops", title: "Jewelry stores and pawn shops", line: "34 of 35", kind: "money" },
      { href: "/where-to-find/payday-loans", title: "Payday Loans", line: "7 of 7", kind: "money" },
      { href: "/collectibles/pool-opponents", title: "Pool opponents", line: "5 of 7", kind: "collectible" },
      { href: "/collectibles/video-games", title: "Video games", line: "4 of 4", kind: "collectible" },
      { href: "/collectibles/book-swaps", title: "Book Swaps", line: "Count with magazines", kind: "collectible" },
      { href: "/collectibles/unique-playlists", title: "Unique playlists", line: "2 of 2", kind: "collectible" },
      { href: "/collectibles/waink-locations", title: "WAiNK locations", line: "100", kind: "collectible" },
      { href: "/collectibles/magazines-books-comics", title: "Magazines, books and comics", line: "30 of 34 with Book Swaps", kind: "collectible" },
      { href: "/collectibles/unique-races", title: "Unique races", line: "30 of 40", kind: "collectible" },
      { href: "/challenges", title: "Challenges", line: "70 of 80", kind: "challenge" },
      { href: "/collectibles", title: "Collectibles", kind: "collectible" },
      { href: "/pro", title: "Completion tracker", kind: "trophy" },
    ],
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
  "unwanted-attention": "unwanted-attention",
  "just-a-scratch": "just-a-scratch",
  "credit-check": "bank-jobs",
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
