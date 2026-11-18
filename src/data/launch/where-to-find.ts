/**
 * "Where to find" search pages, written on launch day (November 18, 2026,
 * US time). Every line comes from the sources listed on the same topic.
 * The fact check lives in launch-prep/where-to-find-factcheck.md.
 *
 * `pin` is a map pin id exactly as /map uses it (`confirmed:<locations.json id>`).
 * The topic page fails the build if a pin id does not exist, so a typo cannot
 * ship a dead map link.
 */
export type WhereSource = { label: string; href: string };

export type WherePlace = {
  name: string;
  area?: string;
  detail?: string;
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
    metaTitle: "GTA 6 Garage Locations and Prices – All 10 Garages",
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
      "There are 10 garages in GTA 6. Eight are for sale, from $4,000 (Mitchel Auto Center) to $40,000 (Atlantic Court), and two come with the story. You can buy one after Jason and Lucia leave Key Lento, in the Vice City Real Estate phone app or at the garage.",
    facts: [
      "A garage keeps any vehicle you park there, stolen or owned.",
      "You can open your weapon loadout in a garage and leave illegal goods there for NPCs to sell.",
      "Garages near Vice City cost the most.",
      "GameSpot found no garages in Lummox County.",
      "Your first safehouse is Jason’s house in Key Lento. In Chapter 2 you stay at the Starlet Motel on Historic Route 628.",
    ],
    groups: [
      {
        heading: "Garages for sale",
        places: [
          { name: "Mitchel Auto Center", area: "Central Kelly County, east of Port Gellhorn", detail: "$4,000", areaPin: pin("port-gellhorn") },
          { name: "Persistence Road Garage", area: "Western Belville, Leonard County", detail: "$9,500", areaPin: pin("belville") },
          { name: "7th Avenue Garage", area: "East of Vice City International Airport, northwest of Tequesta", detail: "$12,000", areaPin: pin("vice-city-international-airport") },
          { name: "Store ’N’ Bolt", area: "Northern Ambrosia", detail: "$16,800", areaPin: pin("ambrosia") },
          { name: "Wyatt Motors", area: "Central Ambrosia, near the Pay ’n’ Spray", detail: "$21,600", areaPin: pin("ambrosia") },
          { name: "Vela Rota Drive Garage", area: "Middle of Capri", detail: "$30,000", areaPin: pin("capri") },
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
        answer: "There are 10 garages: 8 you can buy and 2 you get during the story.",
      },
      {
        question: "When can you buy a garage in GTA 6?",
        answer:
          "After Jason and Lucia leave Key Lento. You can buy one in the Vice City Real Estate phone app or by visiting it.",
      },
      {
        question: "What is the cheapest garage in GTA 6?",
        answer: "Mitchel Auto Center in central Kelly County, for $4,000.",
      },
      {
        question: "What is the most expensive garage in GTA 6?",
        answer: "Atlantic Court Garage in Ocean Beach, for $40,000.",
      },
    ],
    sources: [src.gamespotGarages, src.gamespotFirst, src.rockstarKeys, src.bigLead, src.gtadb],
    related: [
      { href: "/properties", label: "Properties" },
      { href: "/where-to-find/mod-shops", label: "Mod shops" },
      { href: "/vehicles", label: "Vehicles database" },
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
      "PowerPyx says the Progress database lists 9 melee weapons and 4 explosives, and that you can buy them at Ammu-Nation or pick one up if an enemy drops it. A launch-day guide has not published the full named list. The Molotov and the Grenade are confirmed by cheat unlocks.",
    facts: [
      "PowerPyx’s Progress database lists 196 weapon entries: 53 guns, 9 melee, 4 explosives, and 130 variants. The 9 / 4 split is single-source.",
      "PowerPyx says the 100% list asks you to find 50 of 66 standard-issue weapons, which includes those melee weapons and explosives, and that buying one at Ammu-Nation or picking up a dropped weapon both count. Single-source.",
      "Insider Gaming says Ammu-Nation also sells packs of explosives. Single-source wording.",
      "The Molotov and the Grenade are confirmed by cheat unlocks published by PowerPyx and GamesRadar+: throwing 100 molotovs unlocks Exploding Bottles, and throwing 100 grenades unlocks All Explosive Weapons. Those cheats only work after the story.",
      "A price, manufacturer, stat card, or named store tier for the Molotov or the Grenade has not been published by a launch-day guide we trust.",
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
        answer:
          "PowerPyx’s Progress database lists 9 melee weapons and 4 explosives, as part of 196 weapon entries. A launch-day guide has not published the full named list of those 13 items.",
      },
      {
        question: "Where do you buy melee weapons and explosives in GTA 6?",
        answer:
          "PowerPyx says you can buy them at Ammu-Nation, or pick one up if an enemy drops it. Insider Gaming also says Ammu-Nation sells packs of explosives. A price for a named melee weapon or thrown explosive has not been published yet.",
      },
      {
        question: "Are the Molotov and the Grenade in GTA 6?",
        answer:
          "Yes. PowerPyx and GamesRadar+ both list cheat unlocks that require throwing 100 molotovs or 100 grenades. Those cheats only work after the story.",
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
];

export function findWhereTopic(slug: string) {
  return whereToFindTopics.find((topic) => topic.slug === slug);
}
