/**
 * "Where to find" search pages, written on launch day (November 18, 2026,
 * US time). Every line comes from the sources listed on the same topic.
 * The fact check lives in launch-prep/where-to-find-factcheck.md.
 *
 * `pin` is a map pin id exactly as /map uses it (`confirmed:<locations.json id>`).
 * The topic page fails the build if a pin id does not exist, so a typo cannot
 * ship a dead map link.
 */
import { carWashSources, gasSources } from "./batch5-sources";
import {
  barSources,
  convenienceSources,
  electronicsSources,
  fastFoodSources,
  footwearSources,
  liquorSources,
  streetFoodSources,
} from "./batch6-sources";
import { cafeSources } from "./batch7-sources";

export type WhereSource = { label: string; href: string };

export type WherePlace = {
  name: string;
  area?: string;
  detail?: string;
  /** One-line timing note shown with this place in its group. */
  note?: string;
  /** Exact point pin for this place. */
  pin?: string;
  /** Area pin used when the exact building is not on the map yet. */
  areaPin?: string;
};

export type WhereGroup = {
  heading: string;
  places: WherePlace[];
};

export type WhereFaq = { question: string; answer: string };

export type WhereTopic = {
  slug: string;
  /** H1, written as the search query. */
  heading: string;
  /** Short label for cards and links. */
  label: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answer: string;
  facts: string[];
  groups: WhereGroup[];
  /** Main "see it on the map" pin. */
  mapPin: string;
  mapPinLabel: string;
  faqs: WhereFaq[];
  sources: WhereSource[];
  related: { href: string; label: string }[];
};

const src = {
  powerpyxClothing: {
    label: "PowerPyx, all clothing stores",
    href: "https://www.powerpyx.com/gta-6-all-clothing-stores-locations/",
  },
  screenrantClothes: {
    label: "ScreenRant, how to change clothes",
    href: "https://screenrant.com/gta-6-how-to-change-your-clothes-save-outfits/",
  },
  powerpyxAmmu: {
    label: "PowerPyx, all Ammu-Nation stores",
    href: "https://www.powerpyx.com/gta-6-all-ammu-nation-gun-stores-locations/",
  },
  dayOneAmmu: {
    label: "DayOne, every Ammu-Nation store",
    href: "https://playday.one/2026/11/18/every-ammu-nation-store-in-gta-6/",
  },
  gamespotFirst: {
    label: "GameSpot, best things to do first",
    href: "https://www.gamespot.com/articles/5-best-things-to-do-first-in-gta-6/",
  },
  gamespotUltimate: {
    label: "GameSpot, Ultimate Edition bonuses",
    href: "https://www.gamespot.com/articles/how-to-get-all-gta-6-ultimate-edition-bonuses/",
  },
  gamespotGarages: {
    label: "GameSpot, all garage locations and prices",
    href: "https://www.gamespot.com/articles/all-garage-locations-and-prices-in-gta-6/",
  },
  powerpyxGarages: {
    label: "PowerPyx, all garage locations",
    href: "https://www.powerpyx.com/gta-6-all-garage-locations/",
  },
  pcgamerFences: {
    label: "PC Gamer, fence locations",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-fence-locations/",
  },
  powerpyxFences: {
    label: "PowerPyx, all fence locations",
    href: "https://www.powerpyx.com/gta-6-all-fence-locations-how-to-fence-stolen-goods/",
  },
  powerpyxSpray: {
    label: "PowerPyx, all Pay ’n’ Spray locations",
    href: "https://www.powerpyx.com/gta-6-all-pay-n-spray-locations/",
  },
  destructoidHeat: {
    label: "Destructoid, wanted level and Heat",
    href: "https://www.destructoid.com/gta-6-wanted-level-stars-and-heat-level-explained/",
  },
  gamesradarHeat: {
    label: "GamesRadar+, wanted levels and Heat",
    href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-wanted-levels-heat/",
  },
  powerpyxMods: {
    label: "PowerPyx, all mod shops",
    href: "https://www.powerpyx.com/gta-6-all-mod-shops-locations/",
  },
  pcgamerUltimate: {
    label: "PC Gamer, Ultimate Edition bonuses",
    href: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-ultimate-edition-bonuses/",
  },
  powerpyxSalons: {
    label: "PowerPyx, all hair and beauty salons",
    href: "https://www.powerpyx.com/gta-6-all-hair-beauty-salon-locations/",
  },
  rockstarKeys: {
    label: "Rockstar Games, Leonida Keys",
    href: "https://www.rockstargames.com/VI/only-in-leonida/leonida-keys",
  },
  bigLead: {
    label: "The Big Lead, collectibles guide",
    href: "https://www.thebiglead.com/gta-6-collectibles-guide-cards-styles-meteorite-chunks-landmark-scans/",
  },
  gtadb: {
    label: "gtadb.org landmarks (map positions)",
    href: "https://github.com/rolux/gtadb.org/blob/main/map/data/6/landmarks.json",
  },
} as const satisfies Record<string, WhereSource>;

const pin = (id: string) => `confirmed:${id}`;

export const whereToFindTopics: WhereTopic[] = [
  {
    slug: "clothing-stores",
    heading: "Where to buy clothes in GTA 6",
    label: "Clothing stores",
    metaTitle: "Where to Buy Clothes in GTA 6 – All 67 Clothing Stores",
    metaDescription:
      "Where to buy clothes in GTA 6: 67 clothing stores in 5 types, the chains in each area, and the ones already pinned on our Leonida map.",
    keywords: [
      "where to buy clothes in GTA 6",
      "GTA 6 clothing stores",
      "GTA 6 clothing store locations",
      "GTA 6 change outfit",
    ],
    answer:
      "Buy clothes at any store with a T-shirt icon on the map. There are 67 clothing stores in 5 types: 17 Casual & Street, 11 Sportswear, 10 Formal, 24 Souvenir & Swimwear, and 5 Thrift. Most are in Vice-Dale County. Gun stores sell some clothes too.",
    facts: [
      "Filter the map with Map > Style (T-shirt icon), then pick a clothing type.",
      "Branches of the same brand usually sell the same clothes, so one visit per brand is enough.",
      "Gun stores also sell camo and tactical clothes.",
      "You can keep outfits in the trunk of a registered car and change on the road.",
      "Changing clothes removes the outfit Heat icon when the police know what you are wearing.",
    ],
    groups: [
      {
        heading: "Casual & Street (17)",
        places: [
          { name: "Slinger", area: "Southside, Peacock Bay, Tequesta, Downtown, Decor District, Ocean Beach", areaPin: pin("peacock-bay") },
          { name: "This / That", area: "Decor District, Ocean Beach (2), Waning Sands", areaPin: pin("decor-district") },
          { name: "Mid", area: "Ocean Beach (2), Waning Sands", areaPin: pin("ocean-beach") },
          { name: "Stock 305", area: "Stockyard", detail: "Ultimate Edition", pin: pin("stock-305") },
          { name: "Suburban, Urban Legendz, Drip Drops", area: "Vice-Dale County" },
        ],
      },
      {
        heading: "Sportswear (11)",
        places: [
          { name: "Alpha Sports", area: "Downtown, Ocean Beach (4), Waning Sands", areaPin: pin("downtown-vice-city") },
          { name: "Endzone", area: "Downtown, Ocean Beach (2), Washington Beach", areaPin: pin("washington-beach") },
          { name: "Eris", area: "Vice-Dale County" },
        ],
      },
      {
        heading: "Formal (10)",
        places: [
          { name: "Nola", area: "Capri, Peacock Bay, Ocean Beach (2), Decor District", areaPin: pin("capri") },
          { name: "Ferruccio Tucci", area: "Capri, Ocean Beach (2), Decor District, Waning Sands", areaPin: pin("waning-sands") },
        ],
      },
      {
        heading: "Souvenir & Swimwear (24)",
        places: [
          { name: "The Wonder Whale", area: "Key Lento", pin: pin("wonder-whale") },
          { name: "Little Cuba Souvenir Store", area: "Little Cuba, Vice City", pin: pin("little-cuba-souvenir-shop") },
          { name: "Leroy’s, Billie’s Key Lento Gift Shop, Key Lento Kahuna, Lost Mines Souvenirs", area: "Mariana County" },
          { name: "Dollar Domain, Telegraphe, Sea Swell Gifts, Vice Style, Sunshine Sally’s, De’luge Swimwear, Gifts A GoGo, Beach Please and more", area: "Vice-Dale County" },
        ],
      },
      {
        heading: "Thrift (5)",
        places: [
          { name: "Nifty Threads Island Wear", area: "Mariana County" },
          { name: "Hamlet Thrift", area: "Hamlet", areaPin: pin("hamlet") },
          { name: "Aline’s Thrift Store, Dr Froogal", area: "Vice-Dale County" },
          { name: "Bargain World", area: "Kelly County" },
        ],
      },
    ],
    mapPin: pin("stock-305"),
    mapPinLabel: "Stock 305, Stockyard",
    faqs: [
      {
        question: "How many clothing stores are in GTA 6?",
        answer:
          "There are 67 clothing stores: 17 Casual & Street, 11 Sportswear, 10 Formal, 24 Souvenir & Swimwear, and 5 Thrift.",
      },
      {
        question: "How do I find clothing stores on the GTA 6 map?",
        answer:
          "Clothing stores show a T-shirt icon. Open Map > Style and choose a clothing type to list every store of that type.",
      },
      {
        question: "Can I change clothes without going to a store?",
        answer:
          "Yes. You can change at your wardrobe at home, or save outfits to the trunk of a registered car and change there.",
      },
      {
        question: "Does changing clothes help lose the police in GTA 6?",
        answer:
          "Yes. If the police have your outfit as a clue, changing clothes out of sight removes that Heat icon.",
      },
    ],
    sources: [src.powerpyxClothing, src.screenrantClothes, src.destructoidHeat, src.gamesradarHeat, src.gtadb],
    related: [
      { href: "/where-to-find/hair-salons", label: "Hair salons and barbers" },
      { href: "/activities/clothing-stores-and-hair-salons", label: "Clothing and salons activity" },
      { href: "/where-to-find/footwear-stores", label: "Footwear stores" },
      { href: "/where-to-find/gun-stores", label: "Gun stores" },
    ],
  },
  {
    slug: "gun-stores",
    heading: "Where to buy guns in GTA 6",
    label: "Gun stores",
    metaTitle: "Where to Buy Guns in GTA 6 – First Gun Store and Suppressors",
    metaDescription:
      "Where to buy guns in GTA 6: the first Ammu-Nation in Key Lento, what each store tier sells, where the Expanded stores are, and where to get a suppressor.",
    keywords: [
      "where to buy guns in GTA 6",
      "GTA 6 gun store",
      "GTA 6 suppressor",
      "GTA 6 first gun store",
    ],
    answer:
      "Buy guns at Ammu-Nation. There are 24 gun stores across Leonida, and the first one you can reach is in Key Lento right after the tutorial. They sell weapons, ammo, body armor, parachutes, and suppressors for most weapons.",
    facts: [
      "The Key Lento branch is Chuck’s Tackle & Shot, a Limited store.",
      "Hover a store’s map icon to see its tier: Limited, Standard, Hunting, or Expanded.",
      "Expanded stores carry the most, including LMGs, sniper rifles, grenade launchers, and rocket launchers.",
      "Suppressors are cheap, so one is worth buying early.",
      "Each store sells its own unique weapon variant.",
      "The orange gun icon appears as you uncover the map. Map > Ammu-Nations lists every store and counts the ones you have found.",
    ],
    groups: [
      {
        heading: "Start here",
        places: [
          { name: "Chuck’s Tackle & Shot", area: "Key Lento", detail: "Limited", areaPin: pin("leonida-keys") },
        ],
      },
      {
        heading: "Expanded stores (widest range)",
        places: [
          { name: "Phil’s Ammu-Nation", area: "South Vice City", detail: "Expanded", pin: pin("phils-ammu-nation") },
          { name: "Big Shots", area: "Hamlet", detail: "Expanded", areaPin: pin("hamlet") },
          { name: "Woodhatch", area: "Capri", detail: "Expanded", areaPin: pin("capri") },
          { name: "Prestige Firearms", area: "Ocean Beach, Vice City", detail: "Expanded", areaPin: pin("ocean-beach") },
          { name: "Black Eagle", area: "Northwest Vice City", detail: "Expanded" },
          { name: "Iron & Oak", area: "North Vice City", detail: "Expanded" },
        ],
      },
      {
        heading: "Outside Vice City",
        places: [
          { name: "Pawn & Gun – Port Gellhorn", area: "Port Gellhorn", detail: "Standard", pin: pin("pawn-and-gun-port-gellhorn") },
          { name: "Gellhorn Outfitters", area: "Port Gellhorn", detail: "Standard", areaPin: pin("port-gellhorn") },
          { name: "Tactical Outlet Guns", area: "Belville", detail: "Standard", areaPin: pin("belville") },
          { name: "Biff’s Gun Supply", area: "Ambrosia", detail: "Standard", areaPin: pin("ambrosia") },
          { name: "Rusty Willis Jr. Hunting Supplies", area: "Mount Kalaga National Park", detail: "Hunting", areaPin: pin("mount-kalaga-national-park") },
        ],
      },
    ],
    mapPin: pin("phils-ammu-nation"),
    mapPinLabel: "Phil’s Ammu-Nation",
    faqs: [
      {
        question: "Where is the first gun store in GTA 6?",
        answer:
          "There is an Ammu-Nation in Key Lento you can visit right after the tutorial. The Key Lento branch is Chuck’s Tackle & Shot, a Limited store.",
      },
      {
        question: "How many gun stores are in GTA 6?",
        answer: "There are 24 Ammu-Nation gun stores across Leonida.",
      },
      {
        question: "Where do I buy a suppressor in GTA 6?",
        answer:
          "Ammu-Nation sells suppressors for most weapons, and they do not cost much, so you can buy one at the start of the game.",
      },
      {
        question: "Which gun stores sell sniper rifles and rocket launchers?",
        answer:
          "Expanded stores: Woodhatch, Big Shots, Phil’s Ammu-Nation, Black Eagle, Iron & Oak, and Prestige Firearms.",
      },
    ],
    sources: [src.powerpyxAmmu, src.dayOneAmmu, src.gamespotFirst, src.gtadb],
    related: [
      { href: "/ammu-nation-locations", label: "All 24 Ammu-Nation locations" },
      { href: "/weapons", label: "Weapons database" },
      { href: "/where-to-find/melee-and-explosives", label: "Melee and explosives" },
      { href: "/shooting-ranges", label: "Shooting ranges" },
      { href: "/where-to-find/clothing-stores", label: "Clothing stores" },
      { href: "/guides/rocket-launcher", label: "Get a rocket launcher" },
    ],
  },
  {
    slug: "pay-n-spray",
    heading: "GTA 6 Pay ’n’ Spray locations",
    label: "Pay ’n’ Spray",
    metaTitle: "GTA 6 Pay ’n’ Spray Locations – All 19 (Map)",
    metaDescription:
      "All 19 Pay ’n’ Spray locations in GTA 6 by county, how a respray loses the police, and which ones are on our Leonida map.",
    keywords: [
      "GTA 6 Pay n Spray",
      "GTA 6 Pay n Spray locations",
      "GTA 6 repair car",
      "GTA 6 change car color",
    ],
    answer:
      "There are 19 Pay ’n’ Spray shops in GTA 6. They repair your vehicle and change its color, and after a respray the police no longer recognize the car. Most are in Vice-Dale County, and there is one in Key Lento, where the story starts.",
    facts: [
      "Pay ’n’ Sprays show an orange spray-can icon once you uncover that part of the map.",
      "Map > Vehicles (car icon) > Pay ’n’ Sprays lists all of them with a counter.",
      "A new paint job removes the vehicle Heat icon, so the car is not a clue anymore.",
    ],
    groups: [
      {
        heading: "Mariana County (4)",
        places: [
          { name: "Southwind", areaPin: pin("southwind") },
          { name: "Key Lento", areaPin: pin("leonida-keys") },
          { name: "Watson Bay", areaPin: pin("watson-bay") },
          { name: "Grassrivers", areaPin: pin("grassrivers") },
        ],
      },
      {
        heading: "Vice-Dale County (10)",
        places: [
          { name: "Hamlet", areaPin: pin("hamlet") },
          { name: "Salton", areaPin: pin("salton") },
          { name: "West Vice-Dale County" },
          { name: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Balsero", areaPin: pin("balsero") },
          { name: "La Perle", pin: pin("pay-n-spray-la-perle") },
          { name: "Stockyard", areaPin: pin("stockyard") },
          { name: "Waxman Island" },
          { name: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Washington Beach", areaPin: pin("washington-beach") },
        ],
      },
      {
        heading: "Leonard County (1)",
        places: [{ name: "Waning Sands", areaPin: pin("waning-sands") }],
      },
      {
        heading: "Kelly County (2)",
        places: [
          { name: "Port Gellhorn", detail: "Watkins Auto Parts", pin: pin("pay-n-spray-port-gellhorn") },
          { name: "Ambrosia", areaPin: pin("ambrosia") },
        ],
      },
      {
        heading: "Lummox County (2)",
        places: [
          { name: "Grayson" },
          { name: "Millport", areaPin: pin("millport") },
        ],
      },
    ],
    mapPin: pin("pay-n-spray-la-perle"),
    mapPinLabel: "Pay ’n’ Spray, La Perle",
    faqs: [
      {
        question: "How many Pay ’n’ Sprays are in GTA 6?",
        answer:
          "There are 19: 4 in Mariana County, 10 in Vice-Dale County, 1 in Leonard County, 2 in Kelly County, and 2 in Lummox County.",
      },
      {
        question: "Does Pay ’n’ Spray lose the cops in GTA 6?",
        answer:
          "A respray changes your car’s color so the police stop recognizing it, which removes the vehicle Heat icon. Other clues, such as your outfit, still count.",
      },
      {
        question: "Where is the closest Pay ’n’ Spray at the start?",
        answer: "There is a Pay ’n’ Spray in Key Lento, the island where the story starts.",
      },
    ],
    sources: [src.powerpyxSpray, src.destructoidHeat, src.gamespotFirst, src.gtadb],
    related: [
      { href: "/where-to-find/mod-shops", label: "Mod shops" },
      { href: "/where-to-find/garages", label: "Garages" },
      { href: "/vehicles", label: "Vehicles database" },
    ],
  },
  {
    slug: "mod-shops",
    heading: "GTA 6 mod shop locations",
    label: "Mod shops",
    metaTitle: "GTA 6 Mod Shop Locations – All 14 and What Each Tunes",
    metaDescription:
      "All 14 mod shops in GTA 6, what kind of vehicle each one specializes in, and which ones are Ultimate Edition only. With map pins.",
    keywords: [
      "GTA 6 mod shop",
      "GTA 6 mod shop locations",
      "GTA 6 customize car",
      "GTA 6 Rideout Customs",
    ],
    answer:
      "There are 14 mod shops in GTA 6, and each one specializes in a type of vehicle. The one in Key Lento, where the story starts, is Coastal Auto Care. Rideout Customs (Crosstown) and One-Eyed Willie’s (Lake Leonida) are Ultimate Edition only.",
    facts: [
      "Mod shops sell performance upgrades and visual mods.",
      "They show an orange car icon. Map > Vehicles > Mod Shops lists them all.",
      "Each shop specializes in one type of vehicle, so find the one that matches your car.",
    ],
    groups: [
      {
        heading: "Mariana County",
        places: [
          { name: "Coastal Auto Care", area: "Key Lento", detail: "Retro; Ganado Retro Build (Ultimate Edition)", areaPin: pin("leonida-keys") },
          { name: "Capri Classic", area: "Capri", detail: "Muscle cars", areaPin: pin("capri") },
        ],
      },
      {
        heading: "Vice-Dale County",
        places: [
          { name: "Euroform Automotive", area: "Little Cuba", detail: "Luxury cars", pin: pin("euroform-automotive") },
          { name: "Vice Vinyl", area: "Stockyard", detail: "Wraps and liveries", pin: pin("vice-vinyl") },
          { name: "Rideout Customs", area: "Crosstown", detail: "Donks, rims, interiors (Ultimate Edition)", pin: pin("rideout-customs") },
          { name: "Stockyard Speedshop", area: "Stockyard", detail: "Hot rods", areaPin: pin("stockyard") },
          { name: "Two Wheel Fury Motorsport", detail: "Sports bikes" },
          { name: "Vice Auto Customs", detail: "Tuners" },
          { name: "Lowballers Customs", detail: "Lowriders" },
        ],
      },
      {
        heading: "Kelly County",
        places: [
          { name: "Whisler Motorsport", detail: "Racing cars" },
          { name: "Dirt Merchants", area: "Port Gellhorn", detail: "Dirt bikes", areaPin: pin("port-gellhorn") },
          { name: "Wasteland Off-Road", detail: "Off-road cars" },
        ],
      },
      {
        heading: "Leonard County",
        places: [
          { name: "One-Eyed Willie’s Auto Shop", area: "Lake Leonida", detail: "Off-road, hand-painted liveries (Ultimate Edition)", areaPin: pin("lake-leonida") },
        ],
      },
      {
        heading: "Lummox County",
        places: [{ name: "Ledford Motorcycle Workshop", detail: "Choppers and classic American bikes" }],
      },
    ],
    mapPin: pin("rideout-customs"),
    mapPinLabel: "Rideout Customs, Crosstown",
    faqs: [
      {
        question: "How many mod shops are in GTA 6?",
        answer: "There are 14 mod shops, each specializing in a type of vehicle.",
      },
      {
        question: "Where is the mod shop in Key Lento?",
        answer:
          "Coastal Auto Care in Key Lento. Ultimate Edition owners pick up the Ganado Retro Build there.",
      },
      {
        question: "Is Rideout Customs only in the Ultimate Edition?",
        answer:
          "Yes. Rideout Customs in Crosstown and One-Eyed Willie’s at Lake Leonida are Ultimate Edition mod shops.",
      },
    ],
    sources: [src.powerpyxMods, src.pcgamerUltimate, src.gamespotUltimate, src.bigLead, src.gtadb],
    related: [
      { href: "/where-to-find/pay-n-spray", label: "Pay ’n’ Spray" },
      { href: "/where-to-find/garages", label: "Garages" },
      { href: "/vehicles", label: "Vehicles database" },
    ],
  },
  {
    slug: "garages",
    heading: "GTA 6 garage locations and prices",
    label: "Garages and safehouses",
    metaTitle: "GTA 6 Garage Locations and Prices – All 8 Garages for Sale",
    metaDescription:
      "Every GTA 6 garage with its price and where to find it, when you can buy one, and where the safehouses are. With map pins.",
    keywords: [
      "GTA 6 garage",
      "GTA 6 garage locations",
      "GTA 6 how to buy a garage",
      "GTA 6 Paradise Garage",
      "GTA 6 safehouse",
    ],
    answer:
      "Eight garages are for sale in GTA 6, from $4,000 (Mitchell Auto Center) to $40,000 (Atlantic Court). Each one holds one more vehicle. You can buy them in Chapter 2, after the mission Daily Driver, in the Vice City Real Estate phone app or at the garage. The story gives you more garages as you go.",
    facts: [
      "A garage keeps any vehicle you park there, stolen or owned.",
      "You can open your weapon loadout in a garage and leave illegal goods there for NPCs to sell.",
      "Garages near Vice City cost the most.",
      "There are no garages in Lummox County.",
      "Your first safehouse is Jason’s house in Key Lento. In Chapter 2 you stay at the Starlet Motel on Historic Route 628.",
    ],
    groups: [
      {
        heading: "Garages for sale",
        places: [
          { name: "Mitchell Auto Center", area: "Central Kelly County, east of Port Gellhorn", detail: "$4,000", areaPin: pin("port-gellhorn") },
          { name: "Persistence Road Garage", area: "Western Belville, Leonard County", areaPin: pin("belville") },
          { name: "7th Avenue Garage", area: "East of Vice City International Airport, northwest of Tequesta", detail: "$12,000", areaPin: pin("vice-city-international-airport") },
          { name: "Store ’N’ Bolt", area: "Northern Ambrosia", detail: "$16,800", areaPin: pin("ambrosia") },
          { name: "Wyatt Motors", area: "Central Ambrosia, near the Pay ’n’ Spray", detail: "$21,600", areaPin: pin("ambrosia") },
          { name: "Vela Rota Drive Garage", area: "Middle of Capri", areaPin: pin("capri") },
          { name: "Bonita Court Garage", area: "Center of Washington Island", detail: "$34,000", areaPin: pin("washington-beach") },
          { name: "Atlantic Court Garage", area: "Ocean Beach, south of the Y Hotel", detail: "$40,000", areaPin: pin("y-hotel") },
        ],
      },
      {
        heading: "Garages from the story",
        places: [
          { name: "Port Gellhorn Station Garage", area: "Port Gellhorn, west of Delights", detail: "From Moses in the story", areaPin: pin("delights") },
          { name: "Paradise Garage", area: "Northeastern Watson Bay", detail: "From Wyman; holds the Ultimate Edition ’67 Dominator Buggy", pin: pin("paradise-garage") },
        ],
      },
      {
        heading: "Hidden garages (keypad code)",
        places: [
          { name: "Del Rio Boulevard Garage", area: "Southern La Perle, by Auntie’s Place", detail: "Code 92665 from the Chapter 3 laptop; holds Vanessa’s Pfister Growler", note: "Do this before finishing Chapter 3, otherwise you won't be able to get the garage or Vanessa's Pfister Growler.", areaPin: pin("la-perle") },
          { name: "Southside Storage", area: "South tip of Salton, north of Slator Towing Inc", detail: "Code 1010 after the 1010 Murals; holds the 1010 Cheetah", areaPin: pin("salton") },
        ],
      },
      {
        heading: "Safehouses",
        places: [
          { name: "Jason’s house", area: "Key Lento", detail: "Starting safehouse", pin: pin("jasons-place") },
          { name: "Starlet Motel", area: "Historic Route 628, Kelly County", detail: "Chapter 2", pin: pin("starlet-motel") },
        ],
      },
    ],
    mapPin: pin("paradise-garage"),
    mapPinLabel: "Paradise Garage, Watson Bay",
    faqs: [
      {
        question: "How many garages are in GTA 6?",
        answer: "8 garages are for sale. The story gives you more as you go, the Ultimate Edition adds Paradise Garage, and the Vintage Vice City Pack adds Shore Court.",
      },
      {
        question: "When can you buy a garage in GTA 6?",
        answer:
          "In Chapter 2, shortly after the mission Daily Driver. That's when the Vice City Real Estate app shows up on your phone. You can also buy one at the garage.",
      },
      {
        question: "What is the cheapest garage in GTA 6?",
        answer: "Mitchell Auto Center in central Kelly County, for $4,000.",
      },
      {
        question: "What is the most expensive garage in GTA 6?",
        answer: "Atlantic Court Garage in Ocean Beach, for $40,000.",
      },
      {
        question: "How do you get the Little Boxes trophy in GTA 6?",
        answer: "Buy all 8 garages that are for sale. Garages the story gives you don't count.",
      },
    ],
    sources: [src.gamespotGarages, src.powerpyxGarages, src.gamespotFirst, src.rockstarKeys, src.bigLead, src.gtadb],
    related: [
      { href: "/guides/garage-codes", label: "Hidden garage codes" },
      { href: "/properties", label: "Properties" },
      { href: "/where-to-find/fences", label: "Fences" },
      { href: "/where-to-find/mod-shops", label: "Mod shops" },
      { href: "/vehicles", label: "Vehicles database" },
    ],
  },
  {
    slug: "fences",
    heading: "GTA 6 fence locations",
    label: "Fences",
    metaTitle: "GTA 6 Fence Locations – Where to Sell Stolen Goods",
    metaDescription:
      "Where to sell stolen goods in GTA 6: every fence up to Chapter 3, where they are, when they unlock, and who pays best for narcotics, jewelry, and marked bills. With map links.",
    keywords: [
      "GTA 6 fence",
      "GTA 6 fence locations",
      "GTA 6 where to sell stolen goods",
      "GTA 6 how to sell jewelry",
      "GTA 6 sell stolen cars",
    ],
    answer:
      "Fences buy the narcotics, jewelry, and marked bills you steal. They show on the map as a green icon with their initials. New fences open as the story goes on, and early ones close.",
    facts: [
      "Drop your bag in the fence's container. Some pay right away, others pay later.",
      "In Chapter 3, after jobs for Yasmani, you can leave goods in a garage for pickup, for a fee.",
      "Your partner can fence the goods for you, for a bit less money.",
      "Moses and Randy buy stolen cars, not goods.",
    ],
    groups: [
      {
        heading: "Fences for goods",
        places: [
          { name: "Brian", area: "Key Lento", detail: "Chapter 1, after Lab Fees", areaPin: pin("leonida-keys") },
          { name: "Donnie", area: "Key Lento", detail: "Chapter 1 only", areaPin: pin("leonida-keys") },
          { name: "Dunk", area: "Port Gellhorn, Kelly County", detail: "Chapter 2, after Slam Dunk", areaPin: pin("port-gellhorn") },
          { name: "Tyrone", area: "La Perle, Vice City", detail: "Chapter 3. Best for narcotics", areaPin: pin("la-perle") },
          { name: "Yasmani", area: "Little Cuba, Vice City", detail: "Chapter 3. Best for jewelry and marked bills", areaPin: pin("little-cuba") },
        ],
      },
      {
        heading: "Stolen car buyers",
        places: [
          { name: "Moses", area: "Port Gellhorn, Kelly County", detail: "Chapter 2. Cars with no tracker", areaPin: pin("port-gellhorn") },
          { name: "Randy", area: "Balsero, Vice City", detail: "Chapter 3. High-end cars", areaPin: pin("balsero") },
        ],
      },
    ],
    mapPin: pin("little-cuba"),
    mapPinLabel: "Yasmani, Little Cuba",
    faqs: [
      {
        question: "Where do you sell stolen goods in GTA 6?",
        answer: "At a fence. Brian and Donnie in Key Lento, Dunk in Port Gellhorn, Tyrone in La Perle, and Yasmani in Little Cuba. Look for the green icon with their initials.",
      },
      {
        question: "Which fence pays the most in GTA 6?",
        answer: "Tyrone pays best for narcotics. Yasmani pays best for jewelry and marked bills. The early fences pay little.",
      },
      {
        question: "Where do you sell stolen cars in GTA 6?",
        answer: "Moses in Port Gellhorn buys cars with no tracker. Randy in Balsero buys high-end cars from Chapter 3. You can also sell stolen cars at a Pay 'n' Spray.",
      },
      {
        question: "Can you fence goods without driving to the fence?",
        answer: "Yes. Your partner can take the bag and sell it for you for a bit less. From Chapter 3 you can also leave goods in a garage for pickup, for a fee.",
      },
    ],
    sources: [src.pcgamerFences, src.powerpyxFences],
    related: [
      { href: "/money-methods", label: "Make money" },
      { href: "/where-to-find/garages", label: "Garages" },
      { href: "/where-to-find/pay-n-spray", label: "Pay 'n' Spray" },
      { href: "/characters/yasmani-cabrera", label: "Yasmani" },
      { href: "/characters/moses-watkins", label: "Moses" },
      { href: "/characters/randy-kozlov", label: "Randy" },
    ],
  },
  {
    slug: "hair-salons",
    heading: "Where to change your hairstyle in GTA 6",
    label: "Barbers and salons",
    metaTitle: "GTA 6 Barber Shop and Hair Salon Locations – All 18",
    metaDescription:
      "Where to get a haircut in GTA 6: all 18 hair and beauty salons, the 4 barber shops, and the Ultimate Edition salon. With map pins.",
    keywords: [
      "GTA 6 barber shop",
      "GTA 6 hair salon",
      "GTA 6 change hairstyle",
      "GTA 6 haircut",
    ],
    answer:
      "Change your hairstyle at any of the 18 hair and beauty salons, marked with an orange scissors icon. Every salon has the standard styles; only the signature styles differ. Four are barber shops, all in Vice-Dale County.",
    facts: [
      "Map > Style (T-shirt icon) > Hair & Beauty lists every salon with a counter.",
      "At beauty salons, Lucia can also change her nails and makeup.",
      "Barbers change hair and facial hair for Jason.",
      "Sara’s Unisex Salon in Hamlet is Ultimate Edition only. It opens in Chapter 1, and its signature styles come in Chapter 2.",
    ],
    groups: [
      {
        heading: "Barber shops (Vice-Dale County)",
        places: [
          { name: "Kurt’s Barber Shop", area: "Route 61, Hamlet", pin: pin("kurts-barber-shop") },
          { name: "Salon Pérez" },
          { name: "Crosstown Cutz" },
          { name: "Clip & Fade" },
        ],
      },
      {
        heading: "Mariana County",
        places: [
          { name: "Barnacle Beauties", detail: "Unisex" },
          { name: "Lori Scott Hair & Beauty", detail: "Unisex" },
          { name: "Hair By Clair", detail: "Beauty salon" },
        ],
      },
      {
        heading: "Vice-Dale County salons",
        places: [
          { name: "Sara’s Unisex Salon", area: "Hamlet", detail: "Ultimate Edition", pin: pin("saras-unisex-salon") },
          { name: "AU Courant, Bellissima Hair Salon", detail: "Unisex" },
          { name: "Salon Belle, Fabiola’s Unisex Salon, Onyx Salon, Oomph!, Gabriel Wexler", detail: "Beauty salons" },
        ],
      },
      {
        heading: "Leonard and Kelly County",
        places: [
          { name: "A Better You", area: "Leonard County", detail: "Beauty salon" },
          { name: "Pearl House Hair Salon", area: "Kelly County", detail: "Unisex" },
          { name: "Captain Starlings Barber Shop", area: "Kelly County", detail: "Unisex" },
        ],
      },
    ],
    mapPin: pin("kurts-barber-shop"),
    mapPinLabel: "Kurt’s Barber Shop, Hamlet",
    faqs: [
      {
        question: "How many hair salons are in GTA 6?",
        answer: "There are 18 hair and beauty salons, including 4 barber shops.",
      },
      {
        question: "Do all GTA 6 salons have the same haircuts?",
        answer:
          "The standard hairstyles are at every salon. Some salons add their own signature styles.",
      },
      {
        question: "Where is Sara’s Unisex Salon?",
        answer:
          "In Hamlet. It is an Ultimate Edition salon you can visit from Chapter 1.",
      },
    ],
    sources: [src.powerpyxSalons, src.gamespotUltimate, src.screenrantClothes, src.gtadb],
    related: [
      { href: "/where-to-find/clothing-stores", label: "Clothing stores" },
      { href: "/activities/clothing-stores-and-hair-salons", label: "Clothing and salons activity" },
      { href: "/where-to-find/garages", label: "Garages and safehouses" },
    ],
  },
  {
    slug: "melee-and-explosives",
    heading: "Where to get melee and explosives in GTA 6",
    label: "Melee and explosives",
    metaTitle: "Where to Get Melee Weapons and Explosives in GTA 6",
    metaDescription:
      "Where to get melee weapons and explosives in GTA 6: Ammu-Nation sells them, how they count on the weapons list, and the named Molotov and Grenade. Unofficial.",
    keywords: [
      "GTA 6 melee weapons",
      "GTA 6 explosives",
      "GTA 6 molotov",
      "GTA 6 grenades",
      "where to get melee GTA 6",
    ],
    answer:
      "Buy melee weapons and explosives at any Ammu-Nation, or grab one when an enemy drops it. There are 9 melee weapons and 4 explosives, including the Molotov and the Grenade.",
    facts: [
      "The game lists 196 weapon entries: 53 guns, 9 melee, 4 explosives, and 130 variants.",
      "For 100% you need 50 of the 66 standard weapons. Buying one or picking one up both count.",
      "Ammu-Nation also sells packs of explosives.",
      "Throw 100 molotovs to unlock Exploding Bottles, or 100 grenades for All Explosive Weapons (cheats work after the story).",
    ],
    groups: [
      {
        heading: "Where to buy them",
        places: [
          { name: "Phil’s Ammu-Nation", area: "South Vice City", detail: "Expanded", pin: pin("phils-ammu-nation") },
          { name: "Pawn & Gun – Port Gellhorn", area: "Port Gellhorn", detail: "Standard", pin: pin("pawn-and-gun-port-gellhorn") },
          { name: "Chuck’s Tackle & Shot", area: "Key Lento", detail: "Limited; first gun store", areaPin: pin("leonida-keys") },
        ],
      },
    ],
    mapPin: pin("phils-ammu-nation"),
    mapPinLabel: "Phil’s Ammu-Nation",
    faqs: [
      {
        question: "How many melee weapons and explosives are in GTA 6?",
        answer: "9 melee weapons and 4 explosives, out of 196 weapon entries in total.",
      },
      {
        question: "Where do you buy melee weapons and explosives in GTA 6?",
        answer: "At Ammu-Nation, which also sells packs of explosives. You can also pick one up when an enemy drops it.",
      },
      {
        question: "Are the Molotov and the Grenade in GTA 6?",
        answer: "Yes. Throwing 100 of either one unlocks a cheat that works after the story.",
      },
    ],
    sources: [
      src.powerpyxAmmu,
      {
        label: "PowerPyx, Progress Database",
        href: "https://www.powerpyx.com/gta-6-collectible-guide-progress-database/",
      },
      {
        label: "PowerPyx, 100% completion checklist",
        href: "https://www.powerpyx.com/gta-6-100-completion-checklist-guide/",
      },
      {
        label: "Insider Gaming, how weapons work",
        href: "https://insider-gaming.com/gta-6-full-weapons-guide-types-and-how-to-buy/",
      },
      {
        label: "PowerPyx, all cheats",
        href: "https://www.powerpyx.com/gta-6-all-cheats/",
      },
      {
        label: "GamesRadar+, all GTA 6 cheats",
        href: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-cheats/",
      },
    ],
    related: [
      { href: "/weapons", label: "Weapons database" },
      { href: "/weapons/molotov", label: "Molotov" },
      { href: "/weapons/grenade", label: "Grenade" },
      { href: "/where-to-find/gun-stores", label: "Gun stores" },
      { href: "/ammu-nation-locations", label: "All 24 Ammu-Nation locations" },
      { href: "/cheats/combat-cheats", label: "Combat cheats" },
    ],
  },
  {
    slug: "jewelry-stores-and-pawn-shops",
    heading: "GTA 6 jewelry store and pawn shop locations",
    label: "Jewelry stores and pawn shops",
    metaTitle: "GTA 6 Jewelry Store and Pawn Shop Locations – All 35 Smash 'n' Grabs",
    metaDescription:
      "All 35 GTA 6 Smash 'n' Grabs: 20 jewelry stores and 15 pawn shops by county, when they unlock, what each one holds, and how to make a robbery count for 100%. Unofficial.",
    keywords: [
      "GTA 6 jewelry store locations",
      "GTA 6 pawn shop locations",
      "GTA 6 smash and grab",
      "GTA 6 smash n grab locations",
      "GTA 6 all jewelry stores",
    ],
    answer:
      "There are 35 Smash 'n' Grabs: 20 jewelry stores and 15 pawn shops. Pawn shops open in Chapter 2 after Coffee Break. Jewelry stores open in Chapter 3 after Yasmani's Jewelry Jobs. You need 34 of the 35 for 100%.",
    facts: [
      "Find them under Map > Robberies (money bag icon) > Smash 'n' Grabs. They show as green icons once you uncover the area.",
      "Smash the cases, then go into the back room and rob the safe. A store may not count if you skip the safe.",
      "Bright green means done. Dark green means you still need it.",
      "Sell the jewelry at a fence. Yasmani in Little Cuba pays best for jewelry.",
    ],
    groups: [
      {
        heading: "Mariana County (3)",
        places: [
          { name: "The Siren’s Chest", detail: "$1k–$10k", area: "Mariana County" },
          { name: "Timeless Peculiars", detail: "$4.5k–$12k", area: "Mariana County" },
          { name: "Victoria Lee Jeweler", detail: "$9k–$20k", area: "Mariana County" },
        ],
      },
      {
        heading: "Vice-Dale County jewelry stores (15)",
        places: [
          { area: "Vice-Dale County", name: "Donovan Banks & Co.", detail: "$14k–$25k" },
          { area: "Vice-Dale County", name: "Plush", detail: "$9k–$20k" },
          { area: "Vice-Dale County", name: "Icegem Diamonds & Watches", detail: "$14k–$25k" },
          { area: "Vice-Dale County", name: "Richardson Jewelry & Diamonds", detail: "$4.5k–$12k" },
          { area: "Vice-Dale County", name: "All That Glitters", detail: "$9k–$20k" },
          { area: "Vice-Dale County", name: "Peacock", detail: "$9k–$20k" },
          { area: "Vice-Dale County", name: "The Jewelry Place", detail: "$1k–$10k" },
          { area: "Vice-Dale County", name: "Crown Jewels", detail: "$1k–$10k" },
          { area: "Vice-Dale County", name: "Blanc & Giroux", detail: "$14k+ (top tier)" },
          { area: "Vice-Dale County", name: "Roval Jewelry", detail: "$14k+ (top tier)" },
          { area: "Vice-Dale County", name: "Covgari", detail: "$14k+ (top tier)" },
          { area: "Vice-Dale County", name: "Akoya Jewelers", detail: "$14k–$25k" },
          { area: "Vice-Dale County", name: "Marshal’s", detail: "$9k–$20k" },
          { area: "Vice-Dale County", name: "Rococo Rich", detail: "$14k–$25k" },
          { area: "Vice-Dale County", name: "Legendary Custom Jewelry", detail: "$14k–$25k" },
        ],
      },
      {
        heading: "Vice-Dale County pawn shops (11)",
        places: [
          { area: "Vice-Dale County", name: "Hamlet Pawn", detail: "$4.5k–$12k", areaPin: pin("hamlet") },
          { area: "Vice-Dale County", name: "Joyeria Empenos", detail: "$4.5k–$12k" },
          { area: "Vice-Dale County", name: "Ernesto’s Pawn", detail: "$4.5k–$12k" },
          { area: "Vice-Dale County", name: "Pawn City", detail: "$1k–$10k" },
          { area: "Vice-Dale County", name: "Fast Cash", detail: "$1k–$10k" },
          { area: "Vice-Dale County", name: "Dorado Pawn Shop", detail: "$4.5k–$12k" },
          { area: "Vice-Dale County", name: "White Sands Jewelry Pawn", detail: "$4.5k–$12k" },
          { area: "Vice-Dale County", name: "Down Town Pawn", detail: "$1k–$10k" },
          { area: "Vice-Dale County", name: "Vice City Pawn", detail: "$4.5k–$12k" },
          { area: "Vice-Dale County", name: "Pawn Stash", detail: "$4.5k–$12k" },
          { area: "Vice-Dale County", name: "Casa De Empeno", detail: "$4.5k–$12k" },
        ],
      },
      {
        heading: "Leonard County jewelry stores (3)",
        places: [
          { area: "Leonard County", name: "Brilliant Cuts", detail: "$9k–$20k" },
          { area: "Leonard County", name: "Skala", detail: "$14k–$25k" },
          { area: "Leonard County", name: "Kowalski", detail: "$14k–$25k" },
        ],
      },
      {
        heading: "Kelly County pawn shops (3)",
        places: [
          { area: "Kelly County", name: "Buck’s Jewelry & Pawn", detail: "$1k–$10k" },
          { area: "Kelly County", name: "Avery Pawn", detail: "$1k–$10k" },
          { area: "Kelly County", name: "Florence & Co.", detail: "$4.5k–$12k" },
        ],
      },
    ],
    mapPin: pin("little-cuba"),
    mapPinLabel: "Yasmani, Little Cuba (sell jewelry)",
    faqs: [
      {
        question: "How many jewelry stores are in GTA 6?",
        answer: "20 jewelry stores and 15 pawn shops, 35 Smash 'n' Grabs in total. You need 34 of them for 100% completion.",
      },
      {
        question: "When can you rob jewelry stores in GTA 6?",
        answer: "Pawn shops open in Chapter 2 after the mission Coffee Break. Jewelry stores open in Chapter 3 after Yasmani's Jewelry Jobs.",
      },
      {
        question: "Why didn't my Smash 'n' Grab count in GTA 6?",
        answer: "Rob the safe in the back room as well as the display cases. Check the map icon after: bright green is done, dark green is not.",
      },
      {
        question: "Where do you sell stolen jewelry in GTA 6?",
        answer: "At a fence. Yasmani in Little Cuba pays best for jewelry.",
      },
    ],
    sources: [
      { label: "PowerPyx, all Smash 'n' Grabs", href: "https://www.powerpyx.com/gta-6-all-smash-n-grabs-locations/" },
      { label: "GAMES.GG, jewelry stores guide", href: "https://games.gg/grand-theft-auto-vi/guides/grand-theft-auto-6-jewelry-stores-guide-locations-codes/" },
      { label: "Insider Gaming, 100% completion", href: "https://insider-gaming.com/gta-6-100-completion-a-long-road-trophy/" },
    ],
    related: [
      { href: "/guides/jewelry-robbery", label: "Rob a jewelry store" },
      { href: "/where-to-find/fences", label: "Fences" },
      { href: "/where-to-find/payday-loans", label: "Payday Loans" },
      { href: "/money-methods/jewelry-store-robberies", label: "Jewelry robberies for money" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
      { href: "/characters/yasmani-cabrera", label: "Yasmani" },
    ],
  },
  {
    slug: "payday-loans",
    heading: "GTA 6 Payday Loans locations",
    label: "Payday Loans",
    metaTitle: "GTA 6 Payday Loans Locations – All 7 Stores and How to Rob Them",
    metaDescription:
      "All 7 GTA 6 Payday Loans stores, what each one holds, when they unlock in Chapter 3, and how to rob one. All 7 count for 100%. Unofficial.",
    keywords: [
      "GTA 6 payday loans",
      "GTA 6 payday loans locations",
      "GTA 6 payday loan robbery",
      "GTA 6 Dye Pack Jammer",
      "GTA 6 Quick Buck",
    ],
    answer:
      "There are 7 Payday Loans stores: 6 in Vice-Dale County and 1 in Kelly County. They open in Chapter 3 after Credit Check, which also gives you the Dye Pack Jammer you need to sell marked bills. You need all 7 for 100%.",
    facts: [
      "They show as a green hand icon. Filter with Map > Robberies (money bag icon) > Payday Loans.",
      "Aim a gun at the teller, take the cash he puts on the counter, then rob the safe in the back room.",
      "Lose the cops, then sell the marked bills at a fence.",
      "The Little Cuba store holds the most. Cash Flow in Kelly County holds the least.",
    ],
    groups: [
      {
        heading: "Vice-Dale County (6)",
        places: [
          { name: "Quick Buck – Hamlet", area: "Hamlet", detail: "$5,000–$15,000", areaPin: pin("hamlet") },
          { name: "Payline Loans 247", area: "Vice-Dale County", detail: "$5,000–$15,000" },
          { name: "Payday Loans Store – Southside", area: "Southside, Vice City", detail: "$5,000–$15,000", areaPin: pin("southside-vice-city") },
          { name: "Payday Loans Store – Little Cuba", area: "Little Cuba, Vice City", detail: "$15,000–$25,000", areaPin: pin("little-cuba") },
          { name: "Payday Loans Store – Rockridge", area: "Rockridge, Vice City", detail: "$5,000–$15,000" },
          { name: "Quick Buck – La Perle", area: "La Perle, Vice City", detail: "$5,000–$15,000", areaPin: pin("la-perle") },
        ],
      },
      {
        heading: "Kelly County (1)",
        places: [{ name: "Cash Flow", area: "Kelly County", detail: "$2,000–$10,000" }],
      },
    ],
    mapPin: pin("little-cuba"),
    mapPinLabel: "Little Cuba",
    faqs: [
      {
        question: "How many Payday Loans are in GTA 6?",
        answer: "Seven. Six are in Vice-Dale County and one, Cash Flow, is in Kelly County. All seven count for 100% completion.",
      },
      {
        question: "How do you unlock Payday Loans in GTA 6?",
        answer: "They open in Chapter 3 after the mission Credit Check. That mission also gives you the Dye Pack Jammer for selling marked bills.",
      },
      {
        question: "Which Payday Loans store pays the most in GTA 6?",
        answer: "The Payday Loans Store in Little Cuba, at $15,000 to $25,000. Cash Flow in Kelly County holds the least.",
      },
    ],
    sources: [
      { label: "PowerPyx, all Payday Loans jobs", href: "https://www.powerpyx.com/gta-6-all-payday-loans-jobs-locations/" },
      { label: "Insider Gaming, 100% completion", href: "https://insider-gaming.com/gta-6-100-completion-a-long-road-trophy/" },
    ],
    related: [
      { href: "/guides/bank-jobs", label: "Bank jobs" },
      { href: "/missions/credit-check", label: "Credit Check" },
      { href: "/where-to-find/fences", label: "Fences" },
      { href: "/activities/laundering-marked-bills", label: "Marked bills" },
      { href: "/where-to-find/jewelry-stores-and-pawn-shops", label: "Jewelry stores and pawn shops" },
      { href: "/guides/100-percent-completion", label: "100% checklist" },
    ],
  },
  {
    slug: "gyms",
    heading: "GTA 6 gym locations",
    label: "Gyms",
    metaTitle: "GTA 6 Gym Locations – All 9 Gyms and Membership Prices",
    metaDescription:
      "All 9 GTA 6 gyms (fitness centers) in Vice City with their one-time membership prices, plus what working out does for health and stamina. Unofficial.",
    keywords: [
      "GTA 6 gym",
      "GTA 6 gym locations",
      "GTA 6 where to work out",
      "GTA 6 fitness center",
      "GTA 6 gym membership",
    ],
    answer:
      "There are 9 gyms, all in Vice City. Pay a one-time membership fee and you can use that gym whenever you like. Strength workouts raise health and cardio raises stamina.",
    facts: [
      "Gyms show as a blue dumbbell icon. Filter with Map > Activities > Fitness > Gyms.",
      "Jason's house in Key Lento has basic weights, but no cardio gear. Join a gym for cardio.",
      "Muscle Sands has no membership fee. Ajax Gym is the most expensive at $1,800.",
      "Gyms are not part of the 100% checklist.",
    ],
    groups: [
      {
        heading: "Vice City gyms (9)",
        places: [
          { name: "Grand Majestic Gym", detail: "$250" },
          { name: "Vice Seven Condominiums Gym", detail: "$450" },
          { name: "Zenith", detail: "$750" },
          { name: "Dynamix Fitness", detail: "$600" },
          { name: "Venus Fitness", detail: "$600" },
          { name: "Muscle Sands", detail: "$0 (no fee)" },
          { name: "Y Hotel Fitness Club", detail: "$1,200", areaPin: pin("y-hotel") },
          { name: "Ajax Gym / Lawton Theater", detail: "$1,800" },
          { name: "Aichi Condominiums Outdoor Gym", detail: "$950" },
        ],
      },
    ],
    mapPin: pin("vice-city"),
    mapPinLabel: "Vice City",
    faqs: [
      {
        question: "How many gyms are in GTA 6?",
        answer: "Nine, all in Vice City. Each one charges a one-time membership fee, and Muscle Sands has none.",
      },
      {
        question: "What is the cheapest gym in GTA 6?",
        answer: "Muscle Sands has no fee. The cheapest paid gym is Grand Majestic Gym at $250.",
      },
      {
        question: "Can you work out at home in GTA 6?",
        answer: "Yes, Jason's house in Key Lento has basic weights. It has no cardio gear, so join a gym for cardio.",
      },
    ],
    sources: [{ label: "PowerPyx, all gym locations", href: "https://www.powerpyx.com/gta-6-all-gym-locations-fitness-centers/" }],
    related: [
      { href: "/guides/workout", label: "Workouts" },
      { href: "/activities/gym-workouts", label: "Gym workouts" },
      { href: "/guides/character-stats", label: "Health and stamina" },
      { href: "/phone/fitness-app", label: "Fitness app" },
      { href: "/properties/jasons-place", label: "Jason's place" },
    ],
  },
  {
    slug: "clubs",
    heading: "GTA 6 strip club and nightclub locations",
    label: "Clubs",
    metaTitle: "GTA 6 Strip Club and Nightclub Locations – All 5 Clubs",
    metaDescription:
      "All 5 GTA 6 clubs: the 3 strip clubs (Nine1Nine, Jack of Hearts, Delights) plus The Vault nightclub and The Rusty Anchor. Where they are, with map links. Unofficial.",
    keywords: [
      "GTA 6 strip club",
      "GTA 6 strip club locations",
      "GTA 6 nightclub",
      "GTA 6 clubs",
      "GTA 6 Jack of Hearts location",
    ],
    answer:
      "There are 3 strip clubs and 2 other clubs. Nine1Nine and Jack of Hearts are in Crosstown, Vice City, and Delights is in Port Gellhorn. The other two are The Vault nightclub in Vice City and The Rusty Anchor in Key Lento.",
    facts: [
      "Clubs show as a blue icon. Filter with Map > Activities > Clubs.",
      "The Vault has its own radio playlist. Scan the red poster inside to unlock it.",
      "The Jack of Hearts has one of the Sniper of La Perle playlist posters.",
    ],
    groups: [
      {
        heading: "Strip clubs (3)",
        places: [
          { name: "Nine1Nine", area: "Crosstown, Vice City", pin: pin("nine1nine") },
          { name: "Jack of Hearts", area: "Crosstown, Vice City", pin: pin("jack-of-hearts") },
          { name: "Delights Cabaret", area: "Port Gellhorn", pin: pin("delights") },
        ],
      },
      {
        heading: "Other clubs (2)",
        places: [
          { name: "The Vault", area: "Vice City", detail: "Nightclub" },
          { name: "The Rusty Anchor", area: "Key Lento", detail: "Tavern", pin: pin("the-rusty-anchor") },
        ],
      },
    ],
    mapPin: pin("jack-of-hearts"),
    mapPinLabel: "Jack of Hearts",
    faqs: [
      {
        question: "How many strip clubs are in GTA 6?",
        answer: "Three: Nine1Nine and Jack of Hearts in Crosstown, Vice City, and Delights in Port Gellhorn.",
      },
      {
        question: "Are there nightclubs in GTA 6?",
        answer: "Yes. The Vault is a nightclub in Vice City, and The Rusty Anchor is a tavern in Key Lento.",
      },
    ],
    sources: [
      { label: "PowerPyx, all strip club locations", href: "https://www.powerpyx.com/gta-6-all-strip-club-locations/" },
      { label: "PowerPyx, unique playlists", href: "https://www.powerpyx.com/gta-6-all-unique-playlist-collectible-locations/" },
    ],
    related: [
      { href: "/businesses/jack-of-hearts", label: "Jack of Hearts" },
      { href: "/businesses/nine1nine", label: "Nine1Nine" },
      { href: "/businesses/delights", label: "Delights" },
      { href: "/businesses/the-rusty-anchor", label: "The Rusty Anchor" },
      { href: "/collectibles/unique-playlists", label: "Unique playlists" },
      { href: "/activities/nightlife", label: "Nightlife" },
      { href: "/where-to-find/bars", label: "Bars" },
    ],
  },
  {
    slug: "car-washes",
    heading: "GTA 6 car wash locations",
    label: "Car washes",
    metaTitle: "GTA 6 Car Wash Locations – All 6 Car Washes",
    metaDescription:
      "All 6 GTA 6 car wash locations in Vice City: RON, Xero and Park N Glow. How to find them on the map, plus the other way to clean your car. Unofficial.",
    keywords: [
      "GTA 6 car wash",
      "GTA 6 car wash locations",
      "GTA 6 how to wash car",
      "GTA 6 clean car",
      "GTA 6 where is the car wash",
    ],
    answer:
      "There are 6 car washes, all in Vice City. Drive through one to clean your car. Repairing your car cleans it too, so a car wash is optional.",
    facts: [
      "Car washes show as a blue car icon once you uncover that part of the map.",
      "Filter with Map > Vehicles > Car Washes. A counter shows how many you've found.",
      "Washing your car isn't part of the 100% checklist.",
    ],
    groups: [
      {
        heading: "Vice City car washes (6)",
        places: [
          { name: "RON Car Wash – Salton", area: "Salton, Vice City", areaPin: pin("salton") },
          { name: "Park N Glow", area: "Vice City" },
          { name: "RON Car Wash – Balsero", area: "Balsero, Vice City", areaPin: pin("balsero") },
          { name: "Xero Car Wash – Southside", area: "Southside, Vice City", areaPin: pin("southside-vice-city") },
          { name: "Xero Car Wash – La Perle", area: "La Perle, Vice City", areaPin: pin("la-perle") },
          { name: "RON Car Wash – Bayside", area: "Bayside, Vice City" },
        ],
      },
    ],
    mapPin: pin("salton"),
    mapPinLabel: "Salton",
    faqs: [
      {
        question: "Is there a car wash in GTA 6?",
        answer: "Yes, 6 of them, all in Vice City: RON Car Wash in Salton, Balsero and Bayside, Xero Car Wash in Southside and La Perle, and Park N Glow.",
      },
      {
        question: "How do you clean your car in GTA 6?",
        answer: "Drive through a car wash, or repair the car, for example at a gas station pump. Repairing it cleans it too.",
      },
      {
        question: "How do you find car washes on the map?",
        answer: "Open the map and filter Vehicles > Car Washes. They show as a blue car icon once you've uncovered the area.",
      },
    ],
    sources: carWashSources,
    related: [
      { href: "/guides/repair-car", label: "Repair your car" },
      { href: "/where-to-find/pay-n-spray", label: "Pay 'n' Spray" },
      { href: "/where-to-find/mod-shops", label: "Mod shops" },
      { href: "/where-to-find/gas-stations", label: "Gas stations" },
      { href: "/guides/customize-car", label: "Customize your car" },
    ],
  },
  {
    slug: "gas-stations",
    heading: "GTA 6 gas station locations",
    label: "Gas stations",
    metaTitle: "GTA 6 Gas Station Locations – All 57 Gas Stations",
    metaDescription:
      "All 57 GTA 6 gas stations by county, how to check your fuel, and what happens when you run out of gas. With map links. Unofficial.",
    keywords: [
      "GTA 6 gas station",
      "GTA 6 gas station locations",
      "GTA 6 where to get gas",
      "GTA 6 fuel",
      "GTA 6 run out of gas",
    ],
    answer:
      "There are 57 gas stations across Leonida, 26 of them in Vice-Dale County. Every vehicle uses gas, and a car that runs dry stops. When you're low, the gauge turns yellow and nearby stations get marked for you.",
    facts: [
      "Gas stations show as a blue pump icon. Filter with Map > Vehicles > Gas Stations.",
      "Check fuel with D-pad Down, if the gauge is turned on in the UI settings.",
      "Pull up to a pump to refuel. See the refuel guide for the buttons.",
    ],
    groups: [
      {
        heading: "Mariana County (7)",
        places: [
          { name: "Xero Gas – Southwind", areaPin: pin("southwind") },
          { name: "247 Gas – Key Lento", areaPin: pin("leonida-keys") },
          { name: "Globe Oil Gas – Watson Bay", areaPin: pin("watson-bay") },
          { name: "Xero Gas – Grassrivers", areaPin: pin("grassrivers") },
          { name: "Xero Gas – Grassrivers 2", areaPin: pin("grassrivers") },
          { name: "Xero Gas – Capri", areaPin: pin("capri") },
          { name: "LTD Gas – Capri", areaPin: pin("capri") },
        ],
      },
      {
        heading: "Vice-Dale County (26)",
        places: [
          { name: "Xero Gas – Hamlet", areaPin: pin("hamlet") },
          { name: "Globe Oil Gas – Hamlet", areaPin: pin("hamlet") },
          { name: "LTD Gas – Hamlet", areaPin: pin("hamlet") },
          { name: "Arrow Gas – Hamlet", areaPin: pin("hamlet") },
          { name: "Xero Gas – Southside", areaPin: pin("southside-vice-city") },
          { name: "Ron Gas – Southside", areaPin: pin("southside-vice-city") },
          { name: "Xero Gas – Tequesta", areaPin: pin("tequesta") },
          { name: "Arrow Gas – VCIA", areaPin: pin("vice-city-international-airport") },
          { name: "Xero Gas – Salton", areaPin: pin("salton") },
          { name: "Ron Gas – Salton", areaPin: pin("salton") },
          { name: "247 Gas – West Vice-Dale County" },
          { name: "Ron Gas – Balsero 1" },
          { name: "Ron Gas – Balsero 2" },
          { name: "Ron Gas – Little Cuba", areaPin: pin("little-cuba") },
          { name: "Emilio's Auto Center Gas" },
          { name: "Globe Oil Gas – Crosstown", areaPin: pin("crosstown") },
          { name: "Xero Gas – Rockridge" },
          { name: "Vargo's Gas" },
          { name: "Xero Gas – Crosstown", areaPin: pin("crosstown") },
          { name: "Arrow Gas – La Perle", areaPin: pin("la-perle") },
          { name: "Xero Gas – La Perle", areaPin: pin("la-perle") },
          { name: "Ron Gas – Bayside" },
          { name: "Arrow Gas – Decor District", areaPin: pin("decor-district") },
          { name: "Xero Gas – Washington Beach", areaPin: pin("washington-beach") },
          { name: "Ron Gas – Washington Beach", areaPin: pin("washington-beach") },
          { name: "LTD Gas – Ocean Beach", areaPin: pin("ocean-beach") },
        ],
      },
      {
        heading: "Kelly County (12)",
        places: [
          { name: "Xero Gas – Buckskin Swamp 1" },
          { name: "Xero Gas – Buckskin Swamp 2" },
          { name: "Xero Gas – South Kelly County" },
          { name: "Emerald Springs Country Store Gas" },
          { name: "247 Gas – Emerald Springs" },
          { name: "Alpha Gas – Gellhorn" },
          { name: "Eager Beaver Gas" },
          { name: "Oyster Point Gas Stop" },
          { name: "Arrow Gas – Port Gellhorn", areaPin: pin("port-gellhorn") },
          { name: "Vortex & Percy's General Store" },
          { name: "Jackson's Tire Co." },
          { name: "Xero Gas – Ambrosia", areaPin: pin("ambrosia") },
        ],
      },
      {
        heading: "Leonard County (6)",
        places: [
          { name: "Xero Gas – Belville", areaPin: pin("belville") },
          { name: "247 Gas – Belville", areaPin: pin("belville") },
          { name: "Arrow Gas – Belville", areaPin: pin("belville") },
          { name: "Alpha Gas – Belville", areaPin: pin("belville") },
          { name: "Xero Gas – Waning Sands", areaPin: pin("waning-sands") },
          { name: "Arrow Gas – Waning Sands", areaPin: pin("waning-sands") },
        ],
      },
      {
        heading: "Lummox County (6)",
        places: [
          { name: "Globe Oil Gas – Grayson" },
          { name: "247 Gas – West Kalaga" },
          { name: "Buck Creek Country Store" },
          { name: "Redshaw's Gasoline" },
          { name: "247 Gas – Millport", areaPin: pin("millport") },
          { name: "Xero Gas – Millport", areaPin: pin("millport") },
        ],
      },
    ],
    mapPin: pin("hamlet"),
    mapPinLabel: "Hamlet",
    faqs: [
      {
        question: "How many gas stations are in GTA 6?",
        answer: "57: 7 in Mariana County, 26 in Vice-Dale County, 12 in Kelly County, 6 in Leonard County and 6 in Lummox County.",
      },
      {
        question: "What happens if you run out of gas in GTA 6?",
        answer: "The vehicle stops and you can't drive it any further. When fuel is low the gauge turns yellow and nearby gas stations get marked.",
      },
      {
        question: "How do you find gas stations in GTA 6?",
        answer: "Open the map and filter Vehicles > Gas Stations. They show as a blue pump icon.",
      },
    ],
    sources: gasSources,
    related: [
      { href: "/guides/refuel", label: "How to refuel" },
      { href: "/where-to-find/car-washes", label: "Car washes" },
      { href: "/guides/repair-car", label: "Repair your car" },
      { href: "/where-to-find/convenience-stores", label: "Convenience stores" },
      { href: "/where-to-find/pay-n-spray", label: "Pay 'n' Spray" },
      { href: "/where-to-find/mod-shops", label: "Mod shops" },
    ],
  },
  {
    slug: "bars",
    heading: "GTA 6 bar locations",
    label: "Bars",
    metaTitle: "GTA 6 Bar Locations – All 122 Bars on the Map",
    metaDescription:
      "Every GTA 6 bar by county: tiki bars, rooftop bars, hotel pool bars and dive bars like The Rusty Anchor. How to find them on the map. Unofficial.",
    keywords: ["GTA 6 bars", "GTA 6 bar locations", "GTA 6 where to get a drink", "GTA 6 Rusty Anchor", "GTA 6 rooftop bar", "GTA 6 tiki bar"],
    answer:
      "The in-game map counts 122 bars across Leonida, and most of them are in Vice-Dale County. Bars are shops where you buy and drink alcohol. The full list below follows the map, including a few extra bars the counter skips.",
    facts: [
      "Bars show as a blue drink icon once you uncover that part of the map.",
      "Filter with Map > Food & Drink > Bars. A counter in the bottom left shows how many you've found.",
      "The map counter stops at 122. A few more bars are marked on the map but not counted, and they're listed here too.",
      "Some places the map files under bars are also restaurants or ice cream shops. They're listed here as the map shows them.",
    ],
    groups: [
      {
        heading: "Mariana County (13)",
        places: [
          { name: "Chicky's Tiki Bar" },
          { name: "La Medusa" },
          { name: "The Wonder Whale Picnic Area", areaPin: pin("wonder-whale") },
          { name: "Castenburg Hotel Poolside Bar" },
          { name: "The Cheeky Mutineer" },
          { name: "Tiki Touchdown" },
          { name: "Manatee's Rest" },
          { name: "The Rusty Anchor Outdoor Bar", areaPin: pin("the-rusty-anchor") },
          { name: "The Rusty Anchor", pin: pin("the-rusty-anchor") },
          { name: "Paradise RV Park Bar" },
          { name: "Nate's Bar" },
          { name: "The Pier Hotel Poolside Bar" },
          { name: "La Costa Poolside Bar" },
        ],
      },
      {
        heading: "Vice-Dale County (103)",
        places: [
          { name: "Peacock Bay South Tower Rooftop Bar", areaPin: pin("peacock-bay") },
          { name: "Peacock Bay North Rooftop Bar", areaPin: pin("peacock-bay") },
          { name: "The Fitz-Gerald Rooftop Bar" },
          { name: "Bogeda De Mora" },
          { name: "Bonds Bistro" },
          { name: "Voodoo Tiki" },
          { name: "Milk King – Peacock Bay", area: "Peacock Bay", areaPin: pin("peacock-bay") },
          { name: "Full Plate Brasserie Bar" },
          { name: "Grand Majestic Lobby Bar" },
          { name: "Tequesta East Bar", areaPin: pin("tequesta") },
          { name: "Gino's Nitrogen Ice Cream" },
          { name: "Vice Seven Condominiums Bar" },
          { name: "Vesper Rooftop Bar" },
          { name: "Neo Paloma Rooftop Bar" },
          { name: "Tides Bar" },
          { name: "Akio Hotel Poolside Bar" },
          { name: "Monezza Heights Deck Bar" },
          { name: "Rico Huxley Hotels Rooftop Bar", areaPin: pin("y-hotel") },
          { name: "Rico Huxley Hotels Poolside Bar", areaPin: pin("y-hotel") },
          { name: "La Terraza Bar" },
          { name: "El Jardin" },
          { name: "Spicy Mermaid Outdoor Bar" },
          { name: "Flavors Bar" },
          { name: "Milk King – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Arcadian Bar" },
          { name: "Poppin' Caps" },
          { name: "Trouble & Strife" },
          { name: "El Rincon Notorio Restaurant" },
          { name: "La Vaca Sabrosa" },
          { name: "Riverbank Waterside Bar" },
          { name: "Pink Deck Bar" },
          { name: "Dunk's Bar" },
          { name: "Jagua Club Lounge" },
          { name: "Future Leonida Art Museum Bar" },
          { name: "Wildland Zoo Beach Bar" },
          { name: "The Savannah Restaurant & Bar" },
          { name: "Igigi Food & Wine" },
          { name: "Mariposa Bar" },
          { name: "Zotico's" },
          { name: "Conch King Outdoor Bar" },
          { name: "Lot6" },
          { name: "Tamarro Bar" },
          { name: "Courtyard Bar\nOcean Beach:" },
          { name: "Brandy Carmine Hotel Bar" },
          { name: "Zaffre Poolside Bar" },
          { name: "La Villette Poolside Bar" },
          { name: "La Cabine" },
          { name: "High Tide Hotel Poolside Bar" },
          { name: "High Tide Hotel Restaurant" },
          { name: "High Tide Hotel Rooftop Bar" },
          { name: "La Villette Rooftop Bar" },
          { name: "Albany Hotel Poolside Bar", areaPin: pin("y-hotel") },
          { name: "Albany Hotel Outdoor Bar", areaPin: pin("y-hotel") },
          { name: "Y Hotel Outdoor Bar", areaPin: pin("y-hotel") },
          { name: "Y Hotel Indoor Bar", areaPin: pin("y-hotel") },
          { name: "Hotel Valetta Poolside Bar" },
          { name: "Hotel Sapphire Poolside Bar" },
          { name: "Hotel Sapphire Lounge Bar" },
          { name: "Effluvia" },
          { name: "Lickety Split" },
          { name: "Beach Rose Apartments Poolside Bar 1" },
          { name: "Beach Rose Apartments Poolside Bar 2" },
          { name: "The Emerald Rooftop Bar" },
          { name: "Milk King – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Crystal Beach Club Outdoor Bar" },
          { name: "The Atoll" },
          { name: "Eden Grove" },
          { name: "Ocean Bay Apartments Rooftop Bar" },
          { name: "Golden Sands Poolside Bar" },
          { name: "Hamilton Hotel Rooftop Bar" },
          { name: "Calique Rooftop Bar" },
          { name: "Calique Rooftop Pool Bar" },
          { name: "The Shores Poolsie Bar" },
          { name: "Cirque De Cuisine" },
          { name: "Glaims Hotel Rooftop Bar" },
          { name: "Ocean View Rooftop Bar" },
          { name: "Ocean View Poolside Bar" },
          { name: "The Banana Hole Main Bar" },
          { name: "The Banana Hole" },
          { name: "Milk King – Ocean Beach 2", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Harrison Harbor Rooftop Bar" },
          { name: "Ocean West Poolside Bar" },
          { name: "Basica Living Bar" },
          { name: "The Sumerian Poolside Bar" },
          { name: "Romeo Cole Beachside Bar" },
          { name: "Romeo Cole Cocktail Hut" },
          { name: "Romeo Cole Restaurant Bar" },
          { name: "Acai Dreams Balcony VIP Bar" },
          { name: "Acai Dreams VIP Bar" },
          { name: "Acai Dreams Rooftop Pool Bar" },
          { name: "Acai Dreams Rooftop Bar 1" },
          { name: "Acai Dreams Indoor Bar" },
          { name: "Acai Dreams Rooftop Bar 2" },
          { name: "Janus Bar" },
          { name: "Milk King – Ocean Beach 3", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Barra Rosa Drinks Stand" },
          { name: "Barra Rosa Pool Bar" },
          { name: "Fin & Farm Bar" },
          { name: "Lucciano's" },
          { name: "Beach Club Cafe" },
          { name: "Vice Rowing Club Bar" },
          { name: "Mojito Mae's" },
          { name: "Tipsy Palms Beach Bar" },
        ],
      },
      {
        heading: "Leonard County (2)",
        places: [
          { name: "Milk King – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "The Thirsty Wolf" },
        ],
      },
      {
        heading: "Kelly County (7)",
        places: [
          { name: "The Hog House Bar" },
          { name: "Home Bar" },
          { name: "Anakala Sam's" },
          { name: "Ambrosia Raceway Park Bar" },
          { name: "Thrillbilly Mud Club Drinks Tent" },
          { name: "Thrillbilly Mud Club Bar" },
          { name: "Paradise Wines Vineyard Bar" },
        ],
      },
      {
        heading: "Lummox County (2)",
        places: [
          { name: "Jacob's Tavern" },
          { name: "The Steel Drop" },
        ],
      },
    ],
    mapPin: pin("vice-city"),
    mapPinLabel: "Vice City",
    faqs: [
      {
        question: "How many bars are in GTA 6?",
        answer: "The map counter tracks 122 bars. A few extra bars are marked on the map but not counted, so the list below is a little longer.",
      },
      {
        question: "Where can you buy a drink in GTA 6?",
        answer: "At any bar. Open the map and filter Food & Drink > Bars to see every one you've found. Look for the blue drink icon.",
      },
      {
        question: "Where is The Rusty Anchor in GTA 6?",
        answer: "The Rusty Anchor is a tavern in Key Lento, in Mariana County. There is also a separate Rusty Anchor Outdoor Bar.",
      },
    ],
    sources: barSources,
    related: [
      { href: "/where-to-find/clubs", label: "Clubs" },
      { href: "/where-to-find/liquor-stores", label: "Liquor stores" },
      { href: "/where-to-find/street-food", label: "Street food" },
      { href: "/where-to-find/fast-food", label: "Fast food" },
      { href: "/where-to-find/gyms", label: "Gyms" },
    ],
  },
  {
    slug: "convenience-stores",
    heading: "GTA 6 convenience store locations",
    label: "Convenience stores",
    metaTitle: "GTA 6 Convenience Store Locations – All 72 Stores",
    metaDescription:
      "All 72 GTA 6 convenience stores by county: Xero Food Mart, 247, LTD, Ron Stop'N'Snack and more. Where to buy Zombix, pet food and groceries. Unofficial.",
    keywords: ["GTA 6 convenience stores", "GTA 6 convenience store locations", "GTA 6 where to buy Zombix", "GTA 6 pet food", "GTA 6 groceries", "GTA 6 247"],
    answer:
      "There are 72 convenience stores across Leonida, 37 of them in Vice-Dale County. They sell Zombix (a healing item), pet food for the animals you meet, and groceries you can keep in the fridge at home.",
    facts: [
      "Convenience stores show as a blue shopping bag icon.",
      "Filter with Map > Food & Drink > Convenience Stores. A counter shows how many you've found.",
      "Buy Zombix to heal, pet food to feed to domestic animals, and groceries for your fridge at home.",
      "Chains include Xero Food Mart, 247, LTD Food Mart, Ron Stop'N'Snack, Globe Oil Food Center and Alpha Convenience Store.",
    ],
    groups: [
      {
        heading: "Mariana County (10)",
        places: [
          { name: "Xero Food Mart – Southwind", area: "Southwind", areaPin: pin("southwind") },
          { name: "Leonida Key Lento Mini Mart" },
          { name: "247 – Key Lento", area: "Key Lento", areaPin: pin("leonida-keys") },
          { name: "Randy's Big Gas Mart" },
          { name: "Poppers Convenience Store" },
          { name: "Jim's Mini Mart" },
          { name: "Xero Food Mart – Grassrivers 1", area: "Grassrivers", areaPin: pin("grassrivers") },
          { name: "Xero Food Mart – Grassrivers 2", area: "Grassrivers", areaPin: pin("grassrivers") },
          { name: "Xero Food Mart – Capri", area: "Capri", areaPin: pin("capri") },
          { name: "LTD Food Mart – Capri", area: "Capri", areaPin: pin("capri") },
        ],
      },
      {
        heading: "Vice-Dale County (37)",
        places: [
          { name: "Leonida Truck Stop" },
          { name: "Globe Oil Food Center – Hamlet", area: "Hamlet", areaPin: pin("hamlet") },
          { name: "Righto Cash & Carry" },
          { name: "Ramon's Groceries" },
          { name: "LTD Food Mart – Hamlet", area: "Hamlet", areaPin: pin("hamlet") },
          { name: "247 – Hamlet", area: "Hamlet", areaPin: pin("hamlet") },
          { name: "Xero Food Mart – Southside", area: "Southside", areaPin: pin("southside-vice-city") },
          { name: "Ron Stop'N'Snack – Southside", area: "Southside", areaPin: pin("southside-vice-city") },
          { name: "Wells Rosa" },
          { name: "247 – West Vice-Dale County", area: "West Vice-Dale County" },
          { name: "Xero Food Mart – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Quick Picks Mini Mart" },
          { name: "247 – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Ron Stop'N'Snack – Little Cuba", area: "Little Cuba", areaPin: pin("little-cuba") },
          { name: "Xero Food Mart – Salton", area: "Salton", areaPin: pin("salton") },
          { name: "Ron Stop'N'Snack – Salton", area: "Salton", areaPin: pin("salton") },
          { name: "Delgado & Sons" },
          { name: "Ron Stop'N'Snack – Balsero 1", area: "Balsero", areaPin: pin("balsero") },
          { name: "Ron Stop'N'Snack – Balsero 2", area: "Balsero", areaPin: pin("balsero") },
          { name: "Globe Oil Food Center – Crosstown", area: "Crosstown", areaPin: pin("crosstown") },
          { name: "Hugo's Quick-Mart" },
          { name: "XYZ Market" },
          { name: "Xero Food Mart – Crosstown", area: "Crosstown", areaPin: pin("crosstown") },
          { name: "Emilio's Auto Center Food Store" },
          { name: "Rico's Convenience Store" },
          { name: "Xero Food Mart – Rockridge", area: "Rockridge" },
          { name: "Blessed Food Market" },
          { name: "Vetiver Minimarket" },
          { name: "247 – Bayside", area: "Bayside" },
          { name: "Xero Food Mart – La Perle", area: "La Perle", areaPin: pin("la-perle") },
          { name: "Ron Stop'N'Snack – Bayside", area: "Bayside" },
          { name: "247 – Washington Beach", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "Ron Stop'N'Snack – Washington Beach", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "A&L Surf Mart" },
          { name: "247 – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "LTD Food Mart – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "!Superprecious! Market" },
        ],
      },
      {
        heading: "Leonard County (5)",
        places: [
          { name: "Xero Food Mart – Belville", area: "Belville", areaPin: pin("belville") },
          { name: "247 – Belville", area: "Belville", areaPin: pin("belville") },
          { name: "Alpha Convenience Store – Belville", area: "Belville", areaPin: pin("belville") },
          { name: "Xero Food Mart – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "247 – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
        ],
      },
      {
        heading: "Kelly County (14)",
        places: [
          { name: "Xero Food Mart – Buckskin Swamp 1", area: "Buckskin Swamp" },
          { name: "Xero Food Mart – Buckskin Swamp 2", area: "Buckskin Swamp" },
          { name: "Xero Food Mart – South Kelly County", area: "South Kelly County" },
          { name: "Emerald Springs Country Store" },
          { name: "Tucker's Citrus Farms" },
          { name: "247 – Emerald Springs", area: "Emerald Springs" },
          { name: "Xero Food Mart – Ambrosia", area: "Ambrosia", areaPin: pin("ambrosia") },
          { name: "Cane Grocery" },
          { name: "Bunch Farms Country Store" },
          { name: "Alpha Convenience Store – Gellhorn", area: "Gellhorn", areaPin: pin("port-gellhorn") },
          { name: "Sarena's Bargain Store" },
          { name: "247 – Port Gellhorn", area: "Port Gellhorn", areaPin: pin("port-gellhorn") },
          { name: "Dale's Shopwell" },
          { name: "Eager Beaver Express" },
        ],
      },
      {
        heading: "Lummox County (6)",
        places: [
          { name: "Huck's Pump N Go" },
          { name: "247 – West Kalaga", area: "West Kalaga" },
          { name: "Redshaw's General Store" },
          { name: "247 – Millport", area: "Millport", areaPin: pin("millport") },
          { name: "Xero Food Mart – Millport", area: "Millport", areaPin: pin("millport") },
          { name: "Trotman's Supermarket" },
        ],
      },
    ],
    mapPin: pin("downtown-vice-city"),
    mapPinLabel: "Downtown Vice City",
    faqs: [
      {
        question: "How many convenience stores are in GTA 6?",
        answer: "72: 10 in Mariana County, 37 in Vice-Dale County, 5 in Leonard County, 14 in Kelly County and 6 in Lummox County.",
      },
      {
        question: "Where do you buy Zombix in GTA 6?",
        answer: "At convenience stores. Zombix is the healing item they sell, alongside pet food and groceries.",
      },
      {
        question: "What can you buy at a convenience store in GTA 6?",
        answer: "Zombix, pet food for domestic animals you meet in the world, and groceries to put in the fridge at home.",
      },
    ],
    sources: convenienceSources,
    related: [
      { href: "/guides/how-to-heal", label: "How to heal" },
      { href: "/where-to-find/gas-stations", label: "Gas stations" },
      { href: "/where-to-find/liquor-stores", label: "Liquor stores" },
      { href: "/where-to-find/street-food", label: "Street food" },
      { href: "/guides/rob-store", label: "Rob a store" },
      { href: "/where-to-find/cafes", label: "Cafes & takeout" },
    ],
  },
  {
    slug: "street-food",
    heading: "GTA 6 street food vendor locations",
    label: "Street food",
    metaTitle: "GTA 6 Street Food Vendor Locations – 118 Food Carts",
    metaDescription:
      "Every GTA 6 street food vendor by county: hot dog carts, juice huts, coffee stands and more. Food gives a temporary stat buff. Unofficial.",
    keywords: ["GTA 6 street food", "GTA 6 food vendors", "GTA 6 food cart", "GTA 6 hot dog", "GTA 6 stat buff food", "GTA 6 where to eat"],
    answer:
      "The map counts 118 street food vendors, and 148 are marked in total once you include the extras the counter skips. Food from a vendor gives your character a temporary stat buff. Vice-Dale County has the most, with a lot of them around Ocean Beach and Washington Beach.",
    facts: [
      "Street food vendors show as a white food cart icon.",
      "Filter with Map > Food & Drink > Street Food. A counter shows how many you've found.",
      "The counter stops at 118. The list below includes the extra vendors that are marked but not counted.",
      "Some names repeat because each stall counts separately. Repeats are numbered here.",
    ],
    groups: [
      {
        heading: "Mariana County (22)",
        places: [
          { name: "Chihuahua Hotdogs – Key Lento", area: "Key Lento", areaPin: pin("leonida-keys") },
          { name: "Kiosk" },
          { name: "Under the Bun" },
          { name: "Deja Brew Coffee" },
          { name: "Chihuahua Hotdogs – Grassrivers", area: "Grassrivers", areaPin: pin("grassrivers") },
          { name: "Marshland Burger Shack" },
          { name: "Snappy's Meat Shack" },
          { name: "Boiled Peanuts Stand" },
          { name: "Cash's Crawfish" },
          { name: "The Salty Nut Shack" },
          { name: "Crop Circles Donuts & Coffee" },
          { name: "The Toss Spot – Capri", area: "Capri", areaPin: pin("capri") },
          { name: "Better Bread" },
          { name: "A-Roamer Wild Coffee" },
          { name: "Pip Slip" },
          { name: "Alleway Coffee" },
          { name: "Miller Designs" },
          { name: "The Lock Box" },
          { name: "Sweet Releaf" },
          { name: "Janet's Bakery" },
          { name: "Rise and Roast" },
          { name: "Coffee Bandstand" },
        ],
      },
      {
        heading: "Vice-Dale County (89)",
        places: [
          { name: "Chumbox Seafood" },
          { name: "Ladonna's Soul Food" },
          { name: "Produce Stall" },
          { name: "Tropical Juice Stand" },
          { name: "Boiled Peanuts Stand 2" },
          { name: "Chihuahua Hotdogs – Southside", area: "Southside", areaPin: pin("southside-vice-city") },
          { name: "Lucky Longhorn" },
          { name: "The Good Dough Bagel Co. – Peacock Bay", area: "Peacock Bay", areaPin: pin("peacock-bay") },
          { name: "Chihuahua Hotdogs – Salton", area: "Salton", areaPin: pin("salton") },
          { name: "Dave's Pit Stop" },
          { name: "Volcano Coffee Co. – Salton", area: "Salton", areaPin: pin("salton") },
          { name: "Alderney Joe's – Salton", area: "Salton", areaPin: pin("salton") },
          { name: "The Best Burgers" },
          { name: "Watering Hole Coffee" },
          { name: "Fresh Mexican Food" },
          { name: "Hernandez Produce" },
          { name: "Chicha's Cuban Cafe" },
          { name: "Elena's Fruit Market" },
          { name: "J'American Roots" },
          { name: "Chihuahua Hotdogs – Balsero", area: "Balsero", areaPin: pin("balsero") },
          { name: "Flea Market BBQ Stand" },
          { name: "Tisha-Wocka Soul Food" },
          { name: "Restaurant Santiago" },
          { name: "Antonio Produce" },
          { name: "Boiled Peanuts Stand 2" },
          { name: "Flea Market Fruit Stalls 2" },
          { name: "Las Palomas Restaurant" },
          { name: "The Good Dough Bagel Co. – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Coffee Break Cafe & Deli" },
          { name: "The Metro Snack Bar" },
          { name: "Chihuahua Hotdogs – Downtown 1", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Senorita Co." },
          { name: "Chihuahua Hotdogs – Downtown 2", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Blazed Burgers" },
          { name: "Lizzy's Glizzies" },
          { name: "Aficiona Dough" },
          { name: "Peewees – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Pollo Diablo – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Brodies Snack Bar – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Big City Coconuts" },
          { name: "Claws N' All" },
          { name: "Bembe's Kitchen" },
          { name: "Marbles – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Cup & Squeeze" },
          { name: "Slushsquatch" },
          { name: "Burger Shot – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Chacey's – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Re:Pear" },
          { name: "Crust Fund – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Homeslice – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Blazed Burgers 2" },
          { name: "Big City Coconuts – Waxman Island", area: "Waxman Island" },
          { name: "Chihuahua Hotdogs – Waxman Island", area: "Waxman Island" },
          { name: "Deja Brew Coffee 2" },
          { name: "Jeudy's Restaurant" },
          { name: "Slam Coffee Co." },
          { name: "Crust Fund – Stockyard", area: "Stockyard", areaPin: pin("stockyard") },
          { name: "Sugar Hook'd" },
          { name: "Bakery Stall" },
          { name: "The Toss Spot – Decor District", area: "Decor District", areaPin: pin("decor-district") },
          { name: "Wine Stall" },
          { name: "Burger Stall" },
          { name: "Juice Stall" },
          { name: "Produce Stall 2" },
          { name: "Coffee Stall\nOcean Beach:" },
          { name: "La Sombrilla – Washington Beach", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "Refreshments Stand" },
          { name: "Basic Beach – Washington Beach 1", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "Tamarro – Washington Beach", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "Juice Hut – Washington Beach", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "La Sombrilla – Washington Beach", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "Basic Beach – Washington Beach 2", area: "Washington Beach", areaPin: pin("washington-beach") },
          { name: "Y Hotel Beach Bar", areaPin: pin("y-hotel") },
          { name: "Ice City Creamery" },
          { name: "Ocean Beach Refreshments" },
          { name: "Juice Hut – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Basic Beach – Ocean Beach 1", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Juice Hut – Ocean Beach 1", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Refreshments Stand 2" },
          { name: "Ice City Creamery 1" },
          { name: "Basic Beach – Ocean Beach 2", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "La Sombrilla – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Ocean Beach Refreshments 2" },
          { name: "Juice Hut – Ocean Beach 2", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Tamarro – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Ice City Creamery 2" },
          { name: "Burger Shot – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Chacey's – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Plantfaced Vegan Burgers" },
        ],
      },
      {
        heading: "Leonard County (7)",
        places: [
          { name: "Brodies Snack Bar – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Cup & Squeeze 2" },
          { name: "Big City Coconuts – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Re:Pear 2" },
          { name: "Slushsquatch 2" },
          { name: "Boiled Peanuts Stand 3" },
          { name: "La Parrilla Cubana" },
        ],
      },
      {
        heading: "Kelly County (25)",
        places: [
          { name: "Cody's Famous Fresh Road Grill – Gellhorn", area: "Gellhorn", areaPin: pin("port-gellhorn") },
          { name: "Po' Co Po'Boys" },
          { name: "Grill Seekers Bar & Grill" },
          { name: "Boiled Peanuts Stand 4" },
          { name: "Orange Juice Stall" },
          { name: "Chihuahua Hotdogs – Emerald Springs", area: "Emerald Springs" },
          { name: "Refreshments Stall" },
          { name: "Home Grown Produce" },
          { name: "Rustler's Grill" },
          { name: "The Salty Nut Shack 2" },
          { name: "Cody's Famous Fresh Road Grill – Ambrosia", area: "Ambrosia", areaPin: pin("ambrosia") },
          { name: "Mamma B's Homemade Wine" },
          { name: "Rib It Up" },
          { name: "Bareback Bronc BBQ 1" },
          { name: "Bareback Bronc BBQ 2 (two icons next to each other)" },
          { name: "Skully's Pizza" },
          { name: "Boiled Peanut Stand" },
          { name: "Buck's Burgers" },
          { name: "Thrillbilly Mud Club BBQ Tent" },
          { name: "Thrillbilly Mud Club Merch Stall" },
          { name: "Dicken Buns" },
          { name: "Juice Stall 2" },
          { name: "Produce Stall 1" },
          { name: "Wine Stand" },
          { name: "Produce Stall 2" },
        ],
      },
      {
        heading: "Lummox County (5)",
        places: [
          { name: "Lennie's Diner" },
          { name: "Boiled Peanuts Stand 5" },
          { name: "A-Roamer Wild Coffee 2" },
          { name: "Boiled Peanuts Stand 6" },
          { name: "Tropical Juice Stand 2" },
        ],
      },
    ],
    mapPin: pin("ocean-beach"),
    mapPinLabel: "Ocean Beach",
    faqs: [
      {
        question: "How many street food vendors are in GTA 6?",
        answer: "The map counter tracks 118. Including extra vendors the counter doesn't count, 148 are marked on the map.",
      },
      {
        question: "What does street food do in GTA 6?",
        answer: "Food from a street food vendor gives your character a temporary stat buff.",
      },
      {
        question: "How do you find street food in GTA 6?",
        answer: "Open the map and filter Food & Drink > Street Food. Vendors show as a white food cart icon.",
      },
    ],
    sources: streetFoodSources,
    related: [
      { href: "/where-to-find/fast-food", label: "Fast food" },
      { href: "/where-to-find/convenience-stores", label: "Convenience stores" },
      { href: "/where-to-find/bars", label: "Bars" },
      { href: "/guides/how-to-heal", label: "How to heal" },
      { href: "/where-to-find/cafes", label: "Cafes & takeout" },
    ],
  },
  {
    slug: "liquor-stores",
    heading: "GTA 6 liquor store locations",
    label: "Liquor stores",
    metaTitle: "GTA 6 Liquor Store Locations – All 14 Liquor Stores",
    metaDescription:
      "All 14 GTA 6 liquor stores by county, what they sell, and which ones you can rob. With map links. Unofficial.",
    keywords: ["GTA 6 liquor stores", "GTA 6 liquor store locations", "GTA 6 rob liquor store", "GTA 6 where to buy alcohol"],
    answer:
      "There are 14 liquor stores in Leonida. They sell alcohol and snacks that give a temporary stat buff, and the stores can be robbed for between $100 and $3,000, depending on the store.",
    facts: [
      "Liquor stores show as a blue bottle icon.",
      "Filter with Map > Food & Drink > Liquor Stores. A counter shows how many you've found.",
      "They sell alcohol and snacks that temporarily buff your stats.",
      "A robbery pays from $100 to $3,000, depending on the store.",
    ],
    groups: [
      {
        heading: "Mariana County (2)",
        places: [
          { name: "One Stop Liquor – Key Lento", area: "Key Lento", areaPin: pin("leonida-keys") },
          { name: "Three Sheets Liquor" },
        ],
      },
      {
        heading: "Vice-Dale County (10)",
        places: [
          { name: "Discount Liquors" },
          { name: "Uncle Jack's Liquor – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Liquor Store" },
          { name: "Palmis Liquor" },
          { name: "Dutch Courage" },
          { name: "Uncle Jack's Liquor – Bayside", area: "Bayside" },
          { name: "Zak's Liquor" },
          { name: "One Stop Liquor – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Corked Wine Bank" },
          { name: "Ocean Beach Liquor" },
        ],
      },
      {
        heading: "Kelly County (2)",
        places: [
          { name: "Uncle Jack's Liquor – Port Gellhorn", area: "Port Gellhorn", pin: pin("uncle-jacks-liquor") },
          { name: "Ambrosia Liquors" },
        ],
      },
    ],
    mapPin: pin("ocean-beach"),
    mapPinLabel: "Ocean Beach",
    faqs: [
      {
        question: "How many liquor stores are in GTA 6?",
        answer: "14: 2 in Mariana County, 10 in Vice-Dale County and 2 in Kelly County.",
      },
      {
        question: "Can you rob liquor stores in GTA 6?",
        answer: "Yes. Liquor stores can be robbed for $100 to $3,000, depending on the store. See the rob a store guide.",
      },
      {
        question: "What do liquor stores sell in GTA 6?",
        answer: "Alcohol, and snacks that give a temporary stat buff.",
      },
    ],
    sources: liquorSources,
    related: [
      { href: "/guides/rob-store", label: "Rob a store" },
      { href: "/money-methods/store-robberies", label: "Store robberies" },
      { href: "/where-to-find/bars", label: "Bars" },
      { href: "/where-to-find/convenience-stores", label: "Convenience stores" },
    ],
  },
  {
    slug: "fast-food",
    heading: "GTA 6 fast food locations",
    label: "Fast food",
    metaTitle: "GTA 6 Fast Food Locations – All 21 Restaurants",
    metaDescription:
      "All 21 GTA 6 fast food stores by county: Burger Shot, Pollo Diablo, Taco Bomb, Marbles, Chacey's, Peewees and the waffle shops. Unofficial.",
    keywords: ["GTA 6 fast food", "GTA 6 Burger Shot", "GTA 6 Pollo Diablo", "GTA 6 Taco Bomb", "GTA 6 fast food locations"],
    answer:
      "There are 21 fast food stores in Leonida. Buying food there gives your character a temporary stat buff. Look for Marbles, Pollo Diablo, Chacey's, Peewees, Burger Shot, Taco Bomb and two waffle shops.",
    facts: [
      "Fast food stores show as a blue burger icon.",
      "Filter with Map > Food & Drink > Fast Food. A counter shows how many you've found.",
      "Food gives a temporary stat buff.",
    ],
    groups: [
      {
        heading: "Mariana County (1)",
        places: [
          { name: "Marbles – Key Lento", area: "Key Lento", areaPin: pin("leonida-keys") },
        ],
      },
      {
        heading: "Vice-Dale County (11)",
        places: [
          { name: "Pollo Diablo – Hamlet", area: "Hamlet", areaPin: pin("hamlet") },
          { name: "Chacey's – Southside", area: "Southside", areaPin: pin("southside-vice-city") },
          { name: "Peewees – Southside", area: "Southside", areaPin: pin("southside-vice-city") },
          { name: "Frank's Waffles" },
          { name: "Marbles – Salton", area: "Salton", areaPin: pin("salton") },
          { name: "Pollo Diablo – VCIA", area: "VCIA", areaPin: pin("vice-city-international-airport") },
          { name: "Chacey's – Salton", area: "Salton", areaPin: pin("salton") },
          { name: "Marbles – West Vice-Dale County", area: "West Vice-Dale County" },
          { name: "Peewees – Rockridge", area: "Rockridge" },
          { name: "Burger Shot – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Pollo Diablo – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
        ],
      },
      {
        heading: "Leonard County (4)",
        places: [
          { name: "Taco Bomb – Belville", area: "Belville", areaPin: pin("belville") },
          { name: "Peewees – Belville", area: "Belville", areaPin: pin("belville") },
          { name: "Taco Bomb – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Pollo Diablo – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
        ],
      },
      {
        heading: "Kelly County (3)",
        places: [
          { name: "Taco Bomb – Gellhorn", area: "Gellhorn", areaPin: pin("port-gellhorn") },
          { name: "Marbles – Ambrosia", area: "Ambrosia", areaPin: pin("ambrosia") },
          { name: "Hank's Waffles" },
        ],
      },
      {
        heading: "Lummox County (2)",
        places: [
          { name: "Taco Bomb – West Kalaga", area: "West Kalaga" },
          { name: "Pollo Diablo – Millport", area: "Millport", areaPin: pin("millport") },
        ],
      },
    ],
    mapPin: pin("ocean-beach"),
    mapPinLabel: "Ocean Beach",
    faqs: [
      {
        question: "How many fast food places are in GTA 6?",
        answer: "21: 1 in Mariana County, 11 in Vice-Dale County, 4 in Leonard County, 3 in Kelly County and 2 in Lummox County.",
      },
      {
        question: "Where is Burger Shot in GTA 6?",
        answer: "A Burger Shot is on the Fast Food list in Ocean Beach, and there are also Burger Shot stalls in the street food list.",
      },
      {
        question: "What does fast food do in GTA 6?",
        answer: "It gives your character a temporary stat buff.",
      },
    ],
    sources: fastFoodSources,
    related: [
      { href: "/where-to-find/street-food", label: "Street food" },
      { href: "/where-to-find/convenience-stores", label: "Convenience stores" },
      { href: "/where-to-find/bars", label: "Bars" },
      { href: "/guides/how-to-heal", label: "How to heal" },
      { href: "/where-to-find/cafes", label: "Cafes & takeout" },
    ],
  },
  {
    slug: "electronics-stores",
    heading: "GTA 6 electronics store locations",
    label: "Electronics stores",
    metaTitle: "GTA 6 Electronics Store Locations – All 15 Stores",
    metaDescription:
      "All 15 GTA 6 electronics stores by county. Buy phone cases to customize your phone and headphones you can wear. Unofficial.",
    keywords: ["GTA 6 electronics stores", "GTA 6 phone case", "GTA 6 headphones", "GTA 6 electronics store locations"],
    answer:
      "There are 15 electronics stores in Leonida, 13 of them in Vice-Dale County. They sell accessories, including phone cases to customize your phone and headphones you can wear.",
    facts: [
      "Electronics stores show as an orange headphone icon.",
      "Filter with Map > Style > Electronics. A counter shows how many you've found.",
      "Buy phone cases to customize your phone, and headphones you can wear.",
    ],
    groups: [
      {
        heading: "Vice-Dale County (13)",
        places: [
          { name: "Zekes Gadgets" },
          { name: "Tech Point – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Electronick" },
          { name: "Simply Sound" },
          { name: "Super Friki Inc." },
          { name: "Cell Phone Zone" },
          { name: "Electric Boulevard" },
          { name: "Best Priced Electrical Supplies" },
          { name: "Tech Point – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Beta Audio and Electronics" },
          { name: "Easy Electronics" },
          { name: "ACPC" },
          { name: "Aural Expert" },
        ],
      },
      {
        heading: "Leonard County (1)",
        places: [
          { name: "Empowered Electronics" },
        ],
      },
      {
        heading: "Kelly County (1)",
        places: [
          { name: "Game Horde" },
        ],
      },
    ],
    mapPin: pin("tequesta"),
    mapPinLabel: "Tequesta",
    faqs: [
      {
        question: "How many electronics stores are in GTA 6?",
        answer: "15: 13 in Vice-Dale County, 1 in Leonard County and 1 in Kelly County.",
      },
      {
        question: "Where do you buy a phone case in GTA 6?",
        answer: "At an electronics store. They sell phone cases to customize your phone.",
      },
      {
        question: "Where do you buy headphones in GTA 6?",
        answer: "At an electronics store. They sell headphones you can wear.",
      },
    ],
    sources: electronicsSources,
    related: [
      { href: "/guides/headphones", label: "Headphones" },
      { href: "/guides/use-phone", label: "Use the phone" },
      { href: "/where-to-find/clothing-stores", label: "Clothing stores" },
      { href: "/where-to-find/footwear-stores", label: "Footwear stores" },
    ],
  },
  {
    slug: "footwear-stores",
    heading: "GTA 6 footwear store locations",
    label: "Footwear stores",
    metaTitle: "GTA 6 Footwear Store Locations – All 17 Shoe Shops",
    metaDescription:
      "All 17 GTA 6 footwear stores by county: Podium Sports, WHS, Callus and Flip Flop House. Where to buy shoes. Unofficial.",
    keywords: ["GTA 6 shoe store", "GTA 6 footwear stores", "GTA 6 where to buy shoes", "GTA 6 sneakers", "GTA 6 Podium Sports"],
    answer:
      "There are 17 footwear stores in Leonida, 12 of them in Vice-Dale County. They sell shoes. Many clothing stores sell shoes too, so check the clothing stores list if one isn't close.",
    facts: [
      "Footwear stores show as an orange shoe icon.",
      "Filter with Map > Style > Footwear. A counter shows how many you've found.",
      "Hover over an icon on the map to see which brand the store belongs to.",
      "Many clothing stores also sell shoes.",
    ],
    groups: [
      {
        heading: "Mariana County (2)",
        places: [
          { name: "Flip Flop House" },
          { name: "Callus – Capri", area: "Capri", areaPin: pin("capri") },
        ],
      },
      {
        heading: "Vice-Dale County (12)",
        places: [
          { name: "Podium Sports – Southside", area: "Southside", areaPin: pin("southside-vice-city") },
          { name: "Podium Sports – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "WHS – Little Cuba", area: "Little Cuba", areaPin: pin("little-cuba") },
          { name: "WHS – Downtown 1", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Podium Sports – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "WHS – Downtown 2", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Callus – Decor District", area: "Decor District", areaPin: pin("decor-district") },
          { name: "Callus – Ocean Beach 1", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Podium Sports – Ocean Beach 1", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "WHS – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Callus – Ocean Beach 2", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Podium Sports – Ocean Beach 2", area: "Ocean Beach", areaPin: pin("ocean-beach") },
        ],
      },
      {
        heading: "Leonard County (2)",
        places: [
          { name: "Podium Sports – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Callus – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
        ],
      },
      {
        heading: "Kelly County (1)",
        places: [
          { name: "WHS – Port Gellhorn", area: "Port Gellhorn", areaPin: pin("port-gellhorn") },
        ],
      },
    ],
    mapPin: pin("ocean-beach"),
    mapPinLabel: "Ocean Beach",
    faqs: [
      {
        question: "How many shoe stores are in GTA 6?",
        answer: "17: 2 in Mariana County, 12 in Vice-Dale County, 2 in Leonard County and 1 in Kelly County.",
      },
      {
        question: "Where do you buy shoes in GTA 6?",
        answer: "At a footwear store, or at many clothing stores. Filter Style > Footwear on the map.",
      },
      {
        question: "What are the shoe brands in GTA 6?",
        answer: "The footwear stores on the map belong to Podium Sports, WHS and Callus, plus Flip Flop House.",
      },
    ],
    sources: footwearSources,
    related: [
      { href: "/where-to-find/clothing-stores", label: "Clothing stores" },
      { href: "/where-to-find/electronics-stores", label: "Electronics stores" },
      { href: "/where-to-find/hair-salons", label: "Hair salons" },
    ],
  },
  {
    slug: "cafes",
    heading: "GTA 6 cafe and takeout locations",
    label: "Cafes & takeout",
    metaTitle: "GTA 6 Cafe Locations – All 87 Cafes & Takeout on the Map",
    metaDescription:
      "Every GTA 6 cafe and takeout spot by county: coffee shops, Cuban cafes, bakeries, delis and ice cream. How to find them on the map and what food does. Unofficial.",
    keywords: ["GTA 6 cafes", "GTA 6 cafe locations", "GTA 6 takeout", "GTA 6 coffee shop", "GTA 6 where to buy food", "GTA 6 Milk King", "GTA 6 Mezzasega Espresso"],
    answer:
      "The in-game map counts 87 cafes and takeout spots, and most of them are in Vice-Dale County. Buying food there gives your character a temporary stat buff. 86 of the 87 have been named so far, and the list below also includes a few extra spots the counter skips.",
    facts: [
      "Cafes and takeout spots show as a blue cutlery icon once you uncover that part of the map.",
      "Filter with Map > Food & Drink > Cafes & Takeout. A counter in the bottom left shows how many you've found.",
      "The counter stops at 87. Spots with a white icon are marked on the map but not counted, and they're tagged \"Not on the counter\" here.",
      "By county: Mariana 9, Vice-Dale 65, Leonard 5, Kelly 7. Lummox County has none.",
      "Food gives a temporary stat buff.",
    ],
    groups: [
      {
        heading: "Mariana County (15)",
        places: [
          { name: "Shrimp & Save" },
          { name: "Grassrivers Cafe & Deli" },
          { name: "Carla’s Pantry" },
          { name: "Gator Shack" },
          { name: "Chang Thai & Sushi" },
          { name: "Vivi’s Vegan Deli & Bakery" },
          { name: "Brewtiful Coffee Co. – Capri", area: "Capri", areaPin: pin("capri") },
          { name: "Mezzasega Espresso – Capri", area: "Capri", areaPin: pin("capri") },
          { name: "Volcano Coffee Co. – Capri", area: "Capri", areaPin: pin("capri") },
          { name: "Key Lento Candy", detail: "Not on the counter" },
          { name: "Jeb’s Snack Bar", detail: "Not on the counter" },
          { name: "Queen’s Cream", detail: "Not on the counter" },
          { name: "The Cherry Popper", detail: "Not on the counter" },
          { name: "Cone Castle", detail: "Not on the counter" },
          { name: "Sugar Shack", detail: "Not on the counter" },
        ],
      },
      {
        heading: "Vice-Dale County (72)",
        places: [
          { name: "Valentin’s Cuban Cuisine" },
          { name: "Mariana’s Cafeteria" },
          { name: "Reggie’s Family Soul Food" },
          { name: "Los Bollos – Peacock Bay", area: "Peacock Bay", areaPin: pin("peacock-bay") },
          { name: "Milk King – Peacock Bay", area: "Peacock Bay", areaPin: pin("peacock-bay") },
          { name: "Blend Coffee House" },
          { name: "Spin-Itch! – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Los Bollos – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Mezzasega Espresso – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Tasty Temaki – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Gino’s Nitrogen Ice Cream" },
          { name: "Mamma Cita’s Cafe – Tequesta", area: "Tequesta", areaPin: pin("tequesta") },
          { name: "Bimyou" },
          { name: "Mamma Cita’s Cafe – Downtown 1", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Volcano Coffee Co. – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Mamma Cita’s Cafe – Downtown 2", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Down Time Café" },
          { name: "The Baker’s Rack" },
          { name: "Milk King – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Lovemunch" },
          { name: "Spin-Itch – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Brewtiful Coffee Co. – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Alderney Joe’s – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Torreri Bread – Downtown", area: "Downtown", areaPin: pin("downtown-vice-city") },
          { name: "Safia Restaurant" },
          { name: "Aleja’s Cafe" },
          { name: "Rosita’s Cuban Cafe" },
          { name: "La Madre Cafeteria" },
          { name: "Bump & Grind Coffee" },
          { name: "Cuban Food Counter" },
          { name: "Aletha’s Panaderia Y Cafeteria" },
          { name: "Chez Lovelie Restaurant" },
          { name: "Aunt Zola’s Soul Food" },
          { name: "Calypso’s Crab House" },
          { name: "Pizza Pete" },
          { name: "Galina Ballet Opera House Deli" },
          { name: "Alderney Joe’s – Bayside", area: "Bayside" },
          { name: "Perkins Deli" },
          { name: "Fresco" },
          { name: "Chido! – Stockyard", area: "Stockyard", areaPin: pin("stockyard") },
          { name: "Pith Heads" },
          { name: "Mezzasega Espresso – Decor District", area: "Decor District", areaPin: pin("decor-district") },
          { name: "Robinsons Bakery" },
          { name: "Sipster" },
          { name: "Milk King – Ocean Beach 1", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Mamma Cita’s Cafe – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Marzoli Italian Cafe" },
          { name: "Chido! – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Mezzasega Espresso – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Lickety Split" },
          { name: "Urban Edge Food Counter" },
          { name: "Torreri Bread – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Homeslice – Ocean Beach 1", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Craw Mama!" },
          { name: "Cafe Orquidea" },
          { name: "Taco Jonudo" },
          { name: "Homeslice – Ocean Beach 2", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Yuma Taco" },
          { name: "Promenade Bistro" },
          { name: "Robusta Coffee House" },
          { name: "Milk King – Ocean Beach 2", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Tasty Temaki – Ocean Beach", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "Fate’s Brew" },
          { name: "Grubbies" },
          { name: "Milk King – Ocean Beach 3", area: "Ocean Beach", areaPin: pin("ocean-beach") },
          { name: "The Ripe Guys", detail: "Not on the counter" },
          { name: "Ron Stop’N’Snack – Bayside", area: "Bayside", detail: "Not on the counter" },
          { name: "Ajax Gym Deli/Cafe", detail: "Not on the counter" },
          { name: "Ajax Gym Poolside Bar", detail: "Not on the counter" },
          { name: "Romeo Cole Ice Cream", detail: "Not on the counter" },
          { name: "Merry Berry", detail: "Not on the counter" },
          { name: "Scoop Daddy", detail: "Not on the counter" },
        ],
      },
      {
        heading: "Leonard County (6)",
        places: [
          { name: "Health Self & Happiness" },
          { name: "Mezzasega Espresso – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Tasty Temaki – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Alderney Joe’s – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Milk King – Waning Sands", area: "Waning Sands", areaPin: pin("waning-sands") },
          { name: "Ice Cream Cafe", detail: "Not on the counter" },
        ],
      },
      {
        heading: "Kelly County (8)",
        places: [
          { name: "Adventure Golf Desk Deli" },
          { name: "Kowaachobee Cafe & Bar" },
          { name: "The Chomp Stop" },
          { name: "Black Bear Cafe" },
          { name: "Asian Fusion" },
          { name: "Lola’s Cantina" },
          { name: "The Sweetie Pie Cafe" },
          { name: "Tucker’s Citrus Farms Cafe", detail: "Not on the counter" },
        ],
      },
    ],
    mapPin: pin("ocean-beach"),
    mapPinLabel: "Ocean Beach",
    faqs: [
      {
        question: "How many cafes are in GTA 6?",
        answer: "The map counter tracks 87 cafes and takeout spots: 9 in Mariana County, 65 in Vice-Dale County, 5 in Leonard County and 7 in Kelly County. A few extra spots with a white icon aren't counted.",
      },
      {
        question: "What do cafes do in GTA 6?",
        answer: "You buy food there, and eating it gives your character a temporary stat buff.",
      },
      {
        question: "How do you find cafes on the GTA 6 map?",
        answer: "Uncover the map and look for the blue cutlery icon, or filter Food & Drink > Cafes & Takeout to see every one you've found.",
      },
      {
        question: "Are there cafes in Lummox County in GTA 6?",
        answer: "No. The map lists cafes and takeout spots in Mariana, Vice-Dale, Leonard and Kelly counties, but none in Lummox County.",
      },
    ],
    sources: cafeSources,
    related: [
      { href: "/where-to-find/fast-food", label: "Fast food" },
      { href: "/where-to-find/street-food", label: "Street food" },
      { href: "/where-to-find/convenience-stores", label: "Convenience stores" },
      { href: "/where-to-find/bars", label: "Bars" },
      { href: "/guides/how-to-heal", label: "How to heal" },
    ],
  },
];

export function findWhereTopic(slug: string) {
  return whereToFindTopics.find((topic) => topic.slug === slug);
}

export type WherePlaceCard = {
  slug: string;
  name: string;
  area?: string;
  /** "$4,000" style price when the detail is a price. */
  price?: string;
  /** Short tag such as "Expanded" or "Ultimate Edition". */
  tag?: string;
  /** One-line timing note for this place. */
  note?: string;
  pin?: string;
  areaPin?: string;
  group: string;
};

function placeSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’'!]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** One card per place. Lists like "A, B and more" become separate places. */
export function wherePlaces(topic: WhereTopic): WherePlaceCard[] {
  const seen = new Set<string>();
  return topic.groups.flatMap((group) => {
    const county = /county/i.test(group.heading) ? group.heading.replace(/\s*\(.*\)$/, "").replace(/ salons$/i, "") : undefined;
    return group.places.flatMap((place) => {
      const names = place.name
        .split(/,\s*/)
        .map((name) => name.replace(/\s+and more$/i, "").trim())
        .filter(Boolean);
      const isPrice = place.detail?.startsWith("$");
      return names.map((name) => {
        let slug = placeSlug(name);
        if (seen.has(slug)) slug = `${slug}-${placeSlug(place.area ?? group.heading)}`;
        seen.add(slug);
        return {
          slug,
          name,
          area: place.area ?? county,
          price: isPrice ? place.detail : undefined,
          tag: isPrice ? undefined : place.detail,
          note: place.note,
          pin: place.pin,
          areaPin: place.areaPin,
          group: group.heading.replace(/\s*\(\d+\)$/, ""),
        };
      });
    });
  });
}

export function findWherePlace(topicSlug: string, placeSlugValue: string) {
  const topic = findWhereTopic(topicSlug);
  if (!topic) return undefined;
  const place = wherePlaces(topic).find((item) => item.slug === placeSlugValue);
  return place ? { topic, place } : undefined;
}
