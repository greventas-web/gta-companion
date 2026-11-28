/**
 * Fence guide copy. Facts are the where-to-find fence list, the money
 * methods, character lines and the Chapter 1–3 mission notes already in
 * the repo. No later-chapter plot.
 */

export type FenceSection = {
  slug: string;
  name: string;
  paragraphs: string[];
  links: { href: string; label: string }[];
};

export const fenceIntro: string[] = [
  "Fences are how you turn a bag of stolen goods into cash. They buy narcotics, jewelry and marked bills. They do not buy guns, and Ammu-Nation does not buy guns either. Spare long guns go in your personal car's trunk or in a weapon locker at Ammu-Nation.",
  "On the map a goods fence is a green icon with their initials. Walk the bag to that icon and drop it in their container. Some of them pay right away. Others pay later. Your partner can carry the bag and sell it for you, for a bit less than you would get in person. Update 01.002.002 fixed partners not handing those bags over.",
  "In Chapter 3, after you have done jobs for Yasmani, you can also leave goods in a garage for pickup. That pickup costs a fee. It is the way to sell without driving to the icon.",
  "New fences open as the story moves, and early ones close. The two in the Keys are the Chapter 1 pair. Dunk opens in Chapter 2. Tyrone and Yasmani open in Chapter 3, and they are the ones who pay best: Tyrone for narcotics, Yasmani for jewelry and marked bills. The early fences pay little, so they are a place to unload a bag while you are still in the Keys, not the buyer to save a big score for.",
  "Marked bills are a Chapter 3 sale. You cannot fence them until you have the Dye Pack Jammer, which Credit Check gives you. Banks and payday loan shops are the jobs that produce them. Jewelry stores open in Chapter 3 after Yasmani's Jewelry Jobs, and a robbery there pays about $10,000 to $25,000 once you sell the loot. Yasmani is the buyer for that.",
  "Two names on this list are not goods fences. Moses and Randy buy stolen cars. Moses wants cars with no tracker. Randy wants the high-end cars on his list. A Pay 'n' Spray is the third place that buys a stolen car, from early Chapter 3, and it will not take a car with a high-end tracker.",
];

export const fenceSections: FenceSection[] = [
  {
    slug: "brian",
    name: "Brian",
    paragraphs: [
      "Brian is a Key Lento fence, and he opens in Chapter 1 after the mission Lab Fees. Look for the green icon with his initials. Drop the bag in his container. He is one of the early fences, and the early fences pay little. He buys the same classes of stolen goods the others buy: narcotics, jewelry and marked bills. He is not the best price for any of them.",
      "Use him while the story is still in the Keys. Once Dunk is open in Port Gellhorn, and later Tyrone and Yasmani in Vice City, a bag is worth more there. Tyrone pays best for narcotics. Yasmani pays best for jewelry and marked bills. Brian is the local option, not the one to hold a score for.",
      "He is Brian Heder, the smuggler who lets Jason stay at one of his properties in the Keys and who moves product through Brian's Boat Works & Marina with Lori. The fence marker is the green initials icon in Key Lento. The boat yard is his business, and the character page is the place for who he is. This page is only the sale.",
      "Your partner can fence the bag for a bit less, and from Chapter 3 you can leave goods in a garage for a paid pickup after Yasmani's jobs. Neither of those replaces Brian in Chapter 1, because those later options are not open yet. Fences still do not buy weapons. If the bag is a gun, it does not go to him.",
      "Lab Fees is the Chapter 1 mission that opens him, and he is the giver on that job. The sale is still the green initials icon in Key Lento. Bring narcotics, jewelry or marked bills. If you send the bag with your partner, the payout is a bit less than doing it yourself. Once Tyrone and Yasmani are open in Chapter 3, Brian is the buyer you use when you are already in the Keys, not the one you drive back to for a big score.",
    ],
    links: [
      { href: "/characters/brian-heder", label: "Brian Heder" },
      { href: "/missions/lab-fees", label: "Lab Fees" },
      { href: "/money-methods", label: "Money methods" },
    ],
  },
  {
    slug: "donnie",
    name: "Donnie",
    paragraphs: [
      "Donnie is the other Key Lento fence, and he is Chapter 1 only. The green icon with his initials is how you find him while he is open. Drop the bag in his container, the same way you do with Brian. He is an early fence, so the pay is the low early rate, not Tyrone's price on narcotics or Yasmani's price on jewelry and marked bills.",
      "Early fences close as later ones open. Donnie is the one the list marks as Chapter 1 only, so do not plan a Chapter 2 sale around him. When you leave the Keys, Dunk in Port Gellhorn is the next goods fence, after the Chapter 2 mission Slam Dunk.",
      "Clean Up After Donnie is a Chapter 1 story mission that uses his name. It does not change what he buys. He is a goods fence: narcotics, jewelry and marked bills, at the early rate, in Key Lento, and then he is gone. Guns are not on that list. Your partner can sell a bag for you for a bit less while Donnie is still around.",
      "If you are holding marked bills in Chapter 1, hang on to them. You cannot fence marked bills until Chapter 3, when Credit Check gives you the Dye Pack Jammer. Donnie will not be open by then.",
      "Clean Up After Donnie is Chapter 1, mission 13, in the chapter Just Like Paradise. The mission name is not a menu of prices. While his icon is up he buys narcotics, jewelry and marked bills at the early rate, the same classes Brian buys, and then the list marks him Chapter 1 only. Dunk is the next goods buyer, and Dunk waits until Slam Dunk in Chapter 2. Do the Donnie sale before you leave that first chapter.",
    ],
    links: [
      { href: "/missions/clean-up-after-donnie", label: "Clean Up After Donnie" },
      { href: "/guides/bank-jobs", label: "Marked bills and the Dye Pack Jammer" },
      { href: "/money-methods", label: "Money methods" },
    ],
  },
  {
    slug: "dunk",
    name: "Dunk",
    paragraphs: [
      "Dunk opens in Chapter 2, after the story mission Slam Dunk. He is in Port Gellhorn, Kelly County. The map mark is the green icon with his initials. Slam Dunk is set at Dunk's trailer, and that mission is what unlocks him as a buyer.",
      "He buys drugs, jewelry and marked bills. That is the goods list, stated on his character line, not a car list. The early fences pay little, and Dunk is the Chapter 2 buyer, so he is the step up from Brian and Donnie while you are working out of Port Gellhorn. He is still not the Chapter 3 ceiling. Tyrone, in La Perle, pays best for narcotics. Yasmani, in Little Cuba, pays best for jewelry and marked bills.",
      "Port Gellhorn is also where Moses works, and it is easy to mix them up. Moses buys stolen cars with no tracker, from the mission Moses onward, at his garage. Dunk buys the bag of goods. A car does not go in Dunk's container, and a bag of jewelry does not go to Moses.",
      "Drop the bag in the container. Some fences pay on the spot and some pay later. Your partner can take it for a bit less money. Marked bills still wait for the Dye Pack Jammer in Chapter 3, so a Chapter 2 bag of marked bills is not a Dunk sale yet. Guns are never a Dunk sale.",
      "Slam Dunk is Chapter 2, mission 7, and Dunk gives that mission at his trailer. Finishing it is what opens the fence. Port Gellhorn then has two buyers who do different work: Dunk for the bag, and Moses at Watkins Auto Parts for a car with no tracker. Gang hideouts and convenience-store robberies are both open from Chapter 1, so you may already be holding goods when he unlocks. He buys drugs, jewelry and marked bills. He does not buy the gun from the same hideout.",
    ],
    links: [
      { href: "/characters/dunk-porter", label: "Dunk Porter" },
      { href: "/missions/slam-dunk", label: "Slam Dunk" },
      { href: "/money-methods/sell-cars-to-moses", label: "Sell cars to Moses" },
      { href: "/where-to-find/fences/moses", label: "Moses" },
    ],
  },
  {
    slug: "tyrone",
    name: "Tyrone",
    paragraphs: [
      "Tyrone is the Chapter 3 fence in La Perle, Vice City, and he pays best for narcotics. Find the green icon with his initials. Jewelry and marked bills still sell to a fence, but Yasmani in Little Cuba is the better price for those two. If the bag is narcotics, Tyrone is the buyer to use once he is open.",
      "The early fences pay little, and they close as the story moves. By the time Tyrone is on the map, Key Lento is the wrong place to haul a drug bag. Dunk in Port Gellhorn is the Chapter 2 goods fence, and he does buy drugs, but he is not the best price. Save the narcotics run for La Perle.",
      "His own jobs start in Chapter 3. They do not count toward Strangers & Freaks, and the last of them earns the Spin On This! trophy. There is also a Chapter 3 story mission under his name. The job names that sit behind the spoiler on his mission page stay there. You do not need them to find the fence icon.",
      "The drop is the same as the others: bag in the container, pay now or pay later. Your partner can sell it for a bit less. From Chapter 3, after Yasmani's jobs, a garage pickup is the other option, and it charges a fee. Fences do not buy weapons, so a gun in the bag is not part of Tyrone's price.",
      "The Chapter 3 story mission named Tyrone is mission 7 of that chapter. His side work starts in the same chapter, does not count for Strangers & Freaks, and the last of those jobs earns Spin On This! The fence icon in La Perle is how you sell, and you do not need the hidden job names to find it. Narcotics go to him. Jewelry and marked bills pay better at Yasmani's icon in Little Cuba. The container, the partner sale and the paid garage pickup all still apply.",
    ],
    links: [
      { href: "/missions/tyrone", label: "Tyrone" },
      { href: "/missions/strangers-tyrone", label: "Tyrone's side missions" },
      { href: "/money-methods/gang-operations", label: "Gang operations" },
      { href: "/where-to-find/fences/yasmani", label: "Yasmani" },
    ],
  },
  {
    slug: "yasmani",
    name: "Yasmani",
    paragraphs: [
      "Yasmani is the Chapter 3 fence in Little Cuba, Vice City, and he pays best for jewelry and marked bills. The green icon with his initials is the drop. He is your jewelry buyer from early Chapter 3, and he sends tips on stores to rob. A jewelry-store robbery pays about $10,000 to $25,000 once the loot is sold, and he is who you sell it to.",
      "Jewelry stores open after Yasmani's Jewelry Jobs. Pawn shops are already open from Chapter 2, after Coffee Break, and they are Smash 'n' Grabs too, but the jewelry-store wave is his Chapter 3 work. His robbery jobs start in Chapter 3 and cover jewelry stores, ATMs and payday loans. They do not count for Strangers & Freaks.",
      "Marked bills need the Dye Pack Jammer from the Chapter 3 mission Credit Check. Payday loan shops and bank jobs are where those bills come from. Until you have the jammer, do not count on fencing them, even at Yasmani's icon. After Credit Check, he is the best price on that pile, the same way he is the best price on jewelry.",
      "Narcotics are the exception. Tyrone in La Perle pays best for those. Bring Yasmani the jewelry and the marked bills, and take the narcotics to Tyrone.",
      "After you have done jobs for him, you can leave goods in a garage for pickup, for a fee, instead of driving to Little Cuba every time. Your partner can still fence a bag for a bit less. He also gives you the Snap Gun for his jewelry jobs after the mission Boobie Time. The Snap Gun opens locked doors without the alarm. It is a tool, not a second buyer. Guns themselves are still not something he purchases.",
      "Capri, Ocean Beach and downtown Vice City are the jewelry stores called out as the better robbery targets, and the payout on a jewelry job is about $10,000 to $25,000 after the sale. Payday Loans in Little Cuba holds the most of those seven shops, at $15,000 to $25,000, and Cash Flow in Kelly County holds the least. Lose the police before you fence the marked bills. Yasmani is the buyer for both piles. Tyrone still wins on narcotics.",
    ],
    links: [
      { href: "/characters/yasmani-cabrera", label: "Yasmani Cabrera" },
      { href: "/money-methods/jewelry-store-robberies", label: "Jewelry store robberies" },
      { href: "/where-to-find/jewelry-stores-and-pawn-shops", label: "Jewelry stores and pawn shops" },
      { href: "/where-to-find/payday-loans", label: "Payday Loans" },
      { href: "/guides/bank-jobs", label: "Bank jobs" },
      { href: "/guides/equipment", label: "Snap Gun" },
    ],
  },
  {
    slug: "moses",
    name: "Moses",
    paragraphs: [
      "Moses buys stolen cars, not bags of goods. He is in Port Gellhorn, Kelly County, and he opens in Chapter 2 with the mission Moses. His garage is the drop. Scan a car with the WAiNK app first. He wants a car with no tracker. Steal one off the main road rather than right next to his garage.",
      "Pay depends on the car, about $1,000 to $10,000 or more. There is a cooldown of about two minutes between sales. The Declasse Vamos he asks for, behind garage code 2727 on the eastern edge of Grayson, pays about $4,100 in top condition. That Vamos is one of his requests after you have brought him the first three.",
      "He also gives you the tools for mid-range cars. The Slim Jim, which opens a locked car without the alarm, comes from him in Chapter 2. That is a theft tool. The sale is still the garage in Port Gellhorn, and only for a car with no tracker.",
      "Do not bring him narcotics, jewelry or marked bills. Those go to a goods fence: Brian or Donnie in Chapter 1, Dunk after Slam Dunk, then Tyrone and Yasmani in Chapter 3. Dunk is in Port Gellhorn too, which is why the two get mixed up. Dunk's icon takes the bag. Moses's garage takes the car.",
      "The mission that opens him is Chapter 2, and the place on that mission is Watkins Auto Parts. WAiNK is how you check the tracker before you steal. A car with a tracker is the wrong car. From early Chapter 3 the Pay 'n' Spray is another buyer, around $4,000 or more for a good car, and it refuses a high-end tracker. Randy is the later buyer for the expensive list. Moses is the Chapter 2 car fence in between.",
      "From early Chapter 3 a Pay 'n' Spray will also buy a stolen car, around $4,000 or more for a good one, and it will not take a high-end tracker. Randy, in western Vice City from the middle of Chapter 3, is the buyer for the expensive list, usually $30,000 or more when the car is clean. Moses is the Chapter 2 car fence, not that list.",
    ],
    links: [
      { href: "/characters/moses-watkins", label: "Moses Watkins" },
      { href: "/money-methods/sell-cars-to-moses", label: "Sell cars to Moses" },
      { href: "/missions/moses", label: "Mission: Moses" },
      { href: "/guides/declasse-vamos", label: "Declasse Vamos" },
      { href: "/gta-6-apps", label: "WAiNK" },
      { href: "/money-methods/sell-cars-at-pay-n-spray", label: "Sell cars at Pay 'n' Spray" },
    ],
  },
  {
    slug: "randy",
    name: "Randy",
    paragraphs: [
      "Randy buys high-end cars, not bags of goods. He works in western Vice City, and the fence list places him in Balsero. He opens in the middle of Chapter 3, with the mission that gives you the key cloner. The money-method note calls that mission Clonin' Keys, Makin' GS. The cloner itself is handed over in Steal The Zorrusso For Randy, and the Zorrusso is the first car on his list.",
      "The list is 20 cars. The other 19 are optional, and finishing the list earns the Supply & Demand trophy. He usually pays $30,000 or more when the car is in perfect condition, and he pays more for a clean one. Dents lower the pay, so repair the car before the handoff. The gas station across the street from his place is the repair stop the Infernus notes use. Text him from the phone's Reminders when you want a hint.",
      "A Benefactor Dubsta is one of the 20 names. That is a delivery on his list, not the ruby gold Red Queen parked in the Leaf Links garage. The Red Queen is a separate hidden car: climb the gate wall, do the garage-door minigame, lockpick or clone the key, and drive out. His Dubsta is the wish-list car. The wish-list guide has the fixed spots and the Capri streets where the random ones show up.",
      "He does not buy narcotics, jewelry or marked bills. Yasmani is the best price on jewelry and marked bills. Tyrone is the best price on narcotics. Moses, back in Port Gellhorn, is the Chapter 2 buyer for ordinary cars with no tracker. Randy is the Chapter 3 buyer for the expensive ones, and a Pay 'n' Spray still will not take a car that has a high-end tracker.",
      "Repair before you deliver, because he pays more for a clean car and dents cut the price. The wish-list page has every name and the fixed spots. This page is only who he is as a buyer: western Vice City, Balsero on the fence list, mid Chapter 3, high-end cars, usually $30,000 or more when the car is perfect. Goods stay with Tyrone and Yasmani.",
    ],
    links: [
      { href: "/characters/randy-kozlov", label: "Randy Kozlov" },
      { href: "/money-methods/randy-wish-list", label: "Randy's wish list payout" },
      { href: "/guides/randys-wish-list", label: "All 20 cars" },
      { href: "/guides/red-queen-dubsta", label: "Red Queen Dubsta" },
      { href: "/guides/key-cloner", label: "Key cloner" },
      { href: "/missions/steal-the-zorrusso-for-randy", label: "Steal The Zorrusso For Randy" },
    ],
  },
];

export const fenceGuidePaths = fenceSections.map((section) => `/where-to-find/fences/${section.slug}`);

export function fenceSection(slug: string) {
  return fenceSections.find((section) => section.slug === slug);
}
