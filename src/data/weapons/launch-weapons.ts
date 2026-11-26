/**
 * GTA 6 weapons confirmed in the release build (launch day, Nov 18, 2026).
 * Fact check: /workspace/launch-prep/content-batch-1-factcheck.md (section 1).
 * Stats are the in-game stat-card bars (out of 10) as published by DayOne;
 * prices only where PowerPyx or Beebom published them, plus launch-week store
 * prices that Game-Checklists and Clutchbase both list (see PRICE_CHECKED below).
 * No other numbers.
 */
export type LaunchWeaponHow =
  | "ammu"
  | "expanded"
  | "gearup"
  | "cheat-shotgun"
  | "expanded+cheat"
  | "bret"
  | "ue"
  | "jason"
  | "lucia"
  | "ammu-explosive"
  | "ammu-cheat-shotgun"
  | "ammu-melee"
  | "ammu-sticky";

export type LaunchWeapon = {
  slug: string;
  name: string;
  manufacturer: string;
  category: string;
  type?: string;
  caliber?: string;
  magazine?: number;
  fireMode?: string;
  stats?: { damage: number; accuracy: number; handling: number; range: number };
  price?: string;
  how: LaunchWeaponHow;
  /**
   * Stats, price or name checked against our own Iron & Oak shop footage
   * (raw neer_dfCUIA, 4:41-6:42). Where set, the stat bars come from that
   * footage, not from DayOne.
   */
  footage?: boolean;
  /** Hobo-style cutout from our own shop still: the weapon alone, with no menu UI. */
  image?: string;
  imageAlt?: string;
};

export const launchWeapons: LaunchWeapon[] = [
  { slug: "scorpio-nipper-38", name: "Scorpio Nipper .38", manufacturer: "Scorpio", category: "Handgun", caliber: ".380", magazine: 8, fireMode: "Semi-automatic", stats: { damage: 2.8, accuracy: 3.0, handling: 9.0, range: 3.0 }, price: "$550", how: "ammu", image: "/images/footage/weapons/scorpio-nipper-38-designed.webp", imageAlt: "Scorpio Nipper .38" },
  { slug: "klose-k17", name: "Klose K17", manufacturer: "Klose", category: "Handgun", caliber: "9mm", magazine: 17, fireMode: "Semi-automatic", stats: { damage: 4.0, accuracy: 4.2, handling: 8.5, range: 3.8 }, price: "$975", how: "lucia" },
  { slug: "duke-1922", name: "Duke 1922", manufacturer: "Duke", category: "Handgun", caliber: ".45", magazine: 8, fireMode: "Semi-automatic", stats: { damage: 5.5, accuracy: 4.8, handling: 8.0, range: 4.6 }, price: "$1,050", how: "ammu", image: "/images/footage/weapons/duke-1922.webp", imageAlt: "Duke 1922" },
  { slug: "girardi-es9", name: "Girardi ES9", manufacturer: "Girardi", category: "Handgun", caliber: "9mm", magazine: 15, fireMode: "Semi-automatic", stats: { damage: 4.2, accuracy: 5.2, handling: 8.4, range: 4.4 }, price: "$700", how: "jason", image: "/images/footage/weapons/girardi-es9.webp", imageAlt: "Girardi ES9" },
  { slug: "girardi-es18", name: "Girardi ES18", manufacturer: "Girardi", category: "Handgun", caliber: "9mm", magazine: 30, fireMode: "3-round burst", stats: { damage: 4.2, accuracy: 4.6, handling: 7.7, range: 4.8 }, price: "$1,550", footage: true, how: "ammu", image: "/images/footage/weapons/girardi-es18.webp", imageAlt: "Girardi ES18" },
  { slug: "klose-k17-mcd", name: "Klose K17 MCD", manufacturer: "Klose", category: "Handgun", caliber: "9mm", magazine: 24, fireMode: "Fully automatic", stats: { damage: 4.0, accuracy: 3.2, handling: 7.7, range: 4.2 }, price: "$1,700", footage: true, how: "ammu", image: "/images/footage/weapons/klose-k17-mcd.webp", imageAlt: "Klose K17 MCD" },
  { slug: "schlamm-drx", name: "Schlamm DRX", manufacturer: "Schlamm", category: "Handgun", type: "Tactical Pistol", stats: { damage: 4.0, accuracy: 4.2, handling: 8.2, range: 4.2 }, price: "$2,100", footage: true, how: "ammu", image: "/images/footage/weapons/schlamm-drx.webp", imageAlt: "Schlamm DRX" },
  { slug: "fairview-kalinga-50", name: "Fairview Kalinga .50", manufacturer: "Fairview Firearms", category: "Handgun", caliber: ".50 Magnum", magazine: 7, fireMode: "Semi-automatic", stats: { damage: 7.0, accuracy: 4.0, handling: 7.8, range: 5.0 }, price: "$3,100", how: "ammu", image: "/images/footage/weapons/fairview-kalinga-50.webp", imageAlt: "Fairview Kalinga .50" },
  { slug: "hawk-little-38", name: "Hawk & Little .38", manufacturer: "Hawk & Little", category: "Handgun", type: "Revolver", caliber: ".38 Special", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 2.5, accuracy: 5.0, handling: 8.6, range: 4.5 }, price: "$1,075", how: "ammu", image: "/images/footage/weapons/hawk-little-38-v2.webp", imageAlt: "Hawk & Little .38" },
  { slug: "duke-mustang-357", name: "Duke Mustang .357", manufacturer: "Duke", category: "Handgun", type: "Revolver", caliber: ".357 Magnum", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 5.7, accuracy: 4.5, handling: 8.0, range: 5.5 }, price: "$1,800", how: "ammu", image: "/images/footage/weapons/duke-mustang-357-cutout.webp", imageAlt: "Duke Mustang .357" },
  { slug: "wortham-wcr1", name: "Wortham WCR1", manufacturer: "Wortham", category: "Handgun", type: "Revolver", caliber: ".38 Special", magazine: 5, fireMode: "Semi-automatic", stats: { damage: 2.2, accuracy: 3.8, handling: 9.0, range: 4.5 }, price: "$600", how: "ammu", image: "/images/footage/weapons/wortham-wcr1.webp", imageAlt: "Wortham WCR1" },
  { slug: "scorpio-akulus", name: "Scorpio Akulus", manufacturer: "Scorpio", category: "Handgun", type: "Revolver", caliber: ".44 Magnum", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 7.0, accuracy: 4.2, handling: 7.6, range: 6.0 }, price: "$3,000", how: "ammu", image: "/images/footage/weapons/scorpio-akulus.webp", imageAlt: "Scorpio Akulus" },
  { slug: "vom-feuer-vf5", name: "Vom Feuer VF5", manufacturer: "Vom Feuer", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 5.0, handling: 6.7, range: 4.5 }, price: "$2,325", how: "ammu", image: "/images/footage/weapons/vom-feuer-vf5.webp", imageAlt: "Vom Feuer VF5" },
  { slug: "wortham-w-10", name: "Wortham W-10", manufacturer: "Wortham", category: "SMG", caliber: "9mm", magazine: 20, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 3.2, handling: 7.5, range: 3.5 }, price: "$825", how: "ammu", image: "/images/footage/weapons/wortham-w-10.webp", imageAlt: "Wortham W-10" },
  { slug: "zhang-wu-type-9", name: "Zhang Wu Type 9", manufacturer: "Zhang Wu", category: "SMG", caliber: "9mm", magazine: 10, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 3.8, handling: 7.8, range: 3.5 }, price: "$1,100", how: "ammu", image: "/images/footage/weapons/zhang-wu-type-9.webp", imageAlt: "Zhang Wu Type 9" },
  { slug: "deever-tech-dsg", name: "Deever Tech DSG", manufacturer: "Deever Tech", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "3-round burst", stats: { damage: 4.2, accuracy: 4.2, handling: 6.9, range: 4.0 }, price: "$1,350", how: "ammu", image: "/images/footage/weapons/deever-tech-dsg.webp", imageAlt: "Deever Tech DSG" },
  { slug: "vom-feuer-vf5c", name: "Vom Feuer VF5C", manufacturer: "Vom Feuer", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 4.0, handling: 7.9, range: 4.0 }, price: "$2,600", footage: true, how: "ammu", image: "/images/footage/weapons/vom-feuer-vf5c.webp", imageAlt: "Vom Feuer VF5C" },
  { slug: "schlamm-dw-9", name: "Schlamm DW-9", manufacturer: "Schlamm", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 4.5, handling: 6.8, range: 4.0 }, price: "$1,750", how: "ammu", image: "/images/footage/weapons/schlamm-dw-9.webp", imageAlt: "Schlamm DW-9" },
  { slug: "bzi-vatra", name: "BZI Vatra", manufacturer: "Bohemia Zbran Industries", category: "SMG", caliber: "9mm", magazine: 20, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 3.8, handling: 6.5, range: 4.0 }, price: "$1,200", how: "ammu", image: "/images/footage/weapons/bzi-vatra.webp", imageAlt: "BZI Vatra" },
  { slug: "adb-pd-90", name: "AdB PD-90", manufacturer: "Armurerie de Belgique", category: "SMG", caliber: "5.7x28mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 4.8, handling: 6.6, range: 4.2 }, price: "$3,350", footage: true, how: "ammu", image: "/images/footage/weapons/adb-pd-90.webp", imageAlt: "AdB PD-90" },
  { slug: "mason-keen-longshot", name: "Mason & Keen Longshot", manufacturer: "Mason & Keen", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 4.1, handling: 5.0, range: 2.5 }, price: "$1,425", how: "ammu", image: "/images/footage/weapons/mason-keen-longshot.webp", imageAlt: "Mason & Keen Longshot" },
  { slug: "fortune-son-moreland-850", name: "Fortune & Son Moreland 850", manufacturer: "Fortune & Son", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Pump action", stats: { damage: 7.5, accuracy: 4.2, handling: 5.6, range: 2.5 }, price: "$700", how: "gearup", image: "/images/footage/weapons/fortune-son-moreland-850.webp", imageAlt: "Fortune & Son Moreland 850" },
  { slug: "girardi-verro", name: "Girardi Verro", manufacturer: "Girardi", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Semi-automatic", stats: { damage: 7.4, accuracy: 3.9, handling: 6.5, range: 2.0 }, price: "$2,700", how: "ammu", image: "/images/footage/weapons/girardi-verro.webp", imageAlt: "Girardi Verro" },
  { slug: "girardi-az1200", name: "Girardi AZ1200", manufacturer: "Girardi", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Semi-automatic", stats: { damage: 7.4, accuracy: 4.5, handling: 5.8, range: 2.5 }, price: "$2,300", how: "ammu", image: "/images/footage/weapons/girardi-az1200.webp", imageAlt: "Girardi AZ1200" },
  { slug: "fortune-son-gorse-425", name: "Fortune & Son Gorse 425", manufacturer: "Fortune & Son", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Pump action", stats: { damage: 7.5, accuracy: 3.8, handling: 6.2, range: 2.0 }, price: "$850", how: "ammu", image: "/images/footage/weapons/fortune-son-gorse-425.webp", imageAlt: "Fortune & Son Gorse 425" },
  { slug: "shrewsbury-drifter", name: "Shrewsbury Drifter", manufacturer: "Shrewsbury", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 4.1, handling: 5.0, range: 2.5 }, price: "$1,150", how: "ammu", image: "/images/footage/weapons/shrewsbury-drifter-v2.webp", imageAlt: "Shrewsbury Drifter" },
  { slug: "shrewsbury-hobo", name: "Shrewsbury Hobo", manufacturer: "Shrewsbury", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 3.6, handling: 6.4, range: 2.0 }, price: "$1,325", how: "ammu", image: "/images/footage/weapons/shrewsbury-hobo-v2.webp", imageAlt: "Shrewsbury Hobo" },
  { slug: "mason-keen-shortstraw", name: "Mason & Keen Shortstraw", manufacturer: "Mason & Keen", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 3.6, handling: 6.4, range: 2.0 }, price: "$1,625", footage: true, how: "ammu-cheat-shotgun", image: "/images/footage/weapons/mason-keen-shortstraw.webp", imageAlt: "Mason & Keen Shortstraw" },
  { slug: "goodwin-comshot-12", name: "Goodwin Comshot 12", manufacturer: "Goodwin", category: "Shotgun", caliber: "12-gauge", magazine: 7, fireMode: "Semi-automatic", stats: { damage: 7.7, accuracy: 4.2, handling: 4.0, range: 2.5 }, price: "$3,825", how: "ammu", image: "/images/footage/weapons/goodwin-comshot-12.webp", imageAlt: "Goodwin Comshot 12" },
  { slug: "girardi-super400", name: "Girardi Super400", manufacturer: "Girardi", category: "Shotgun", caliber: "12-gauge", magazine: 7, fireMode: "Semi-automatic", stats: { damage: 7.4, accuracy: 4.2, handling: 5.3, range: 2.5 }, price: "$2,825", how: "ammu", image: "/images/footage/weapons/girardi-super400.webp", imageAlt: "Girardi Super400" },
  { slug: "kozlov-kvga-12", name: "Kozlov KVGA-12", manufacturer: "Kozlov", category: "Shotgun", caliber: "12-gauge", magazine: 8, fireMode: "Fully automatic", stats: { damage: 7.2, accuracy: 4.5, handling: 5.1, range: 2.5 }, price: "$3,650", how: "ammu", image: "/images/footage/weapons/kozlov-kvga-12.webp", imageAlt: "Kozlov KVGA-12" },
  { slug: "kozlov-kz-59", name: "Kozlov KZ-59", manufacturer: "Kozlov", category: "Assault Rifle", caliber: "7.62x39mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.4, accuracy: 5.2, handling: 5.2, range: 6.5 }, price: "$1,250", how: "ammu", image: "/images/footage/weapons/kozlov-kz-59.webp", imageAlt: "Kozlov KZ-59" },
  { slug: "hillinger-heathen", name: "Hillinger Heathen", manufacturer: "Hillinger", category: "Assault Rifle", caliber: "5.56x45mm", fireMode: "3-round burst", stats: { damage: 5.0, accuracy: 6.2, handling: 5.8, range: 6.2 }, price: "$2,450", how: "ammu", image: "/images/footage/weapons/hillinger-heathen.webp", imageAlt: "Hillinger Heathen" },
  { slug: "duke-556", name: "Duke 556", manufacturer: "Duke", category: "Assault Rifle", caliber: "5.56x45mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.0, accuracy: 6.0, handling: 5.8, range: 6.2 }, price: "$1,450", how: "ammu", image: "/images/footage/weapons/duke-556.webp", imageAlt: "Duke 556" },
  { slug: "kozlov-hind", name: "Kozlov Hind", manufacturer: "Kozlov", category: "Assault Rifle", caliber: "7.62x39mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.4, accuracy: 3.5, handling: 7.1, range: 4.5 }, price: "$1,700", footage: true, how: "ammu", image: "/images/footage/weapons/kozlov-hind.webp", imageAlt: "Kozlov Hind" },
  { slug: "vom-feuer-vf-g1", name: "Vom Feuer VF-G1", manufacturer: "Vom Feuer", category: "Assault Rifle", caliber: "5.56x45mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.0, accuracy: 6.2, handling: 5.8, range: 6.5 }, price: "$3,700", how: "ammu", image: "/images/footage/weapons/vom-feuer-vf-g1.webp", imageAlt: "Vom Feuer VF-G1" },
  { slug: "adb-fra", name: "AdB FRA", manufacturer: "Armurerie de Belgique", category: "Assault Rifle", caliber: "7.62x51mm", magazine: 20, fireMode: "Fully automatic", stats: { damage: 5.8, accuracy: 5.0, handling: 5.3, range: 6.9 }, price: "$2,900", how: "ammu", image: "/images/footage/weapons/adb-fra.webp", imageAlt: "AdB FRA" },
  { slug: "wortham-w-22", name: "Wortham W-22", manufacturer: "Wortham", category: "Tactical Rifle", caliber: ".22 LR", magazine: 15, fireMode: "Semi-automatic", stats: { damage: 1.5, accuracy: 8.0, handling: 5.8, range: 7.0 }, how: "ammu" },
  { slug: "hillinger-m306", name: "Hillinger M306", manufacturer: "Hillinger", category: "Tactical Rifle", caliber: "7.62x51mm", magazine: 20, fireMode: "Semi-automatic", stats: { damage: 6.2, accuracy: 7.5, handling: 4.8, range: 7.5 }, price: "$2,375", how: "ammu", image: "/images/footage/weapons/hillinger-m306.webp", imageAlt: "Hillinger M306" },
  { slug: "hawk-little-mediator", name: "Hawk & Little Mediator", manufacturer: "Hawk & Little", category: "Tactical Rifle", caliber: "9mm", magazine: 17, fireMode: "Semi-automatic", stats: { damage: 4.8, accuracy: 7.8, handling: 5.6, range: 7.0 }, price: "$900", how: "gearup", image: "/images/footage/weapons/hawk-little-mediator.webp", imageAlt: "Hawk & Little Mediator" },
  { slug: "wortham-w-14", name: "Wortham W-14", manufacturer: "Wortham", category: "Tactical Rifle", caliber: "5.56x45mm", magazine: 20, fireMode: "Semi-automatic", stats: { damage: 5.8, accuracy: 7.5, handling: 5.2, range: 7.2 }, price: "$1,400", how: "ammu", image: "/images/footage/weapons/wortham-w-14.webp", imageAlt: "Wortham W-14" },
  { slug: "hillinger-m306-tmr", name: "Hillinger M306 TMR", manufacturer: "Hillinger", category: "Tactical Rifle", caliber: "7.62x51mm", magazine: 20, fireMode: "Semi-automatic", stats: { damage: 6.2, accuracy: 7.8, handling: 5.5, range: 7.5 }, price: "$2,550", how: "ammu", image: "/images/footage/weapons/hillinger-m306-tmr.webp", imageAlt: "Hillinger M306 TMR" },
  { slug: "fairview-ff-sr", name: "Fairview FF-SR", manufacturer: "Fairview Firearms", category: "Sniper Rifle", caliber: ".338 Magnum", magazine: 10, fireMode: "Bolt action", stats: { damage: 8.0, accuracy: 8.3, handling: 2.9, range: 8.4 }, price: "$2,950", footage: true, how: "expanded", image: "/images/footage/weapons/fairview-ff-sr.webp", imageAlt: "Fairview FF-SR" },
  { slug: "shrewsbury-sm-69", name: "Shrewsbury SM-69", manufacturer: "Shrewsbury", category: "Sniper Rifle", caliber: "7.62x51mm", magazine: 5, fireMode: "Bolt action", stats: { damage: 6.8, accuracy: 8.4, handling: 3.1, range: 8.4 }, price: "$1,850", footage: true, how: "expanded", image: "/images/footage/weapons/shrewsbury-sm-69.webp", imageAlt: "Shrewsbury SM-69" },
  { slug: "fortune-son-laird-350", name: "Fortune & Son Laird 350", manufacturer: "Fortune & Son", category: "Sniper Rifle", caliber: "6.5mm", magazine: 5, fireMode: "Bolt action", stats: { damage: 6.5, accuracy: 8.8, handling: 3.6, range: 8.4 }, price: "$950", footage: true, how: "expanded", image: "/images/footage/weapons/fortune-son-laird-350.webp", imageAlt: "Fortune & Son Laird 350" },
  { slug: "fairview-ff-50", name: "Fairview FF-50", manufacturer: "Fairview Firearms", category: "Sniper Rifle", caliber: ".50 BFG", magazine: 5, fireMode: "Bolt action", stats: { damage: 8.5, accuracy: 7.8, handling: 2.5, range: 8.5 }, price: "$3,975", footage: true, how: "expanded", image: "/images/footage/weapons/fairview-ff-50.webp", imageAlt: "Fairview FF-50" },
  { slug: "goodwin-lmg-6", name: "Goodwin LMG 6", manufacturer: "Goodwin", category: "LMG", caliber: "7.62x51mm", magazine: 100, fireMode: "Fully automatic", stats: { damage: 6.8, accuracy: 2.8, handling: 2.8, range: 6.5 }, how: "expanded" },
  { slug: "adb-m350", name: "AdB M350", manufacturer: "Armurerie de Belgique", category: "LMG", caliber: "5.56x45mm", magazine: 100, fireMode: "Fully automatic", stats: { damage: 6.5, accuracy: 3.0, handling: 3.2, range: 6.2 }, price: "$10,000", footage: true, how: "expanded", image: "/images/footage/weapons/adb-m350.webp", imageAlt: "AdB M350" },
  { slug: "hillinger-boomer", name: "Hillinger Boomer", manufacturer: "Hillinger", category: "Launcher", caliber: "40mm grenade", magazine: 1, fireMode: "Single shot", stats: { damage: 9.2, accuracy: 5.0, handling: 6.0, range: 4.0 }, price: "$12,000", how: "expanded", image: "/images/footage/weapons/hillinger-boomer.webp", imageAlt: "Hillinger Boomer" },
  { slug: "deever-tech-glr40", name: "Deever Tech GLR40", manufacturer: "Deever Tech", category: "Launcher", caliber: "40mm grenade", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 9.2, accuracy: 6.0, handling: 5.0, range: 4.0 }, price: "$15,500", how: "expanded" },
  { slug: "hauners-h-at", name: "Hauners H-AT", manufacturer: "Hauners", category: "Launcher", caliber: "66mm rocket", magazine: 1, fireMode: "Single shot", stats: { damage: 9.6, accuracy: 4.5, handling: 3.0, range: 8.0 }, price: "$16,000", how: "expanded+cheat" },
  { slug: "hawk-little-morgan", name: "Hawk & Little Morgan", manufacturer: "Hawk & Little", category: "Handgun", type: "Revolver", caliber: ".44 Magnum", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 5.7, accuracy: 5.4, handling: 7.8, range: 6.0 }, how: "ue" },
  { slug: "shrewsbury-sms-01", name: "Shrewsbury SMS-01", manufacturer: "Shrewsbury", category: "Sniper Rifle", stats: { damage: 6.8, accuracy: 8.6, handling: 3.3, range: 8.4 }, price: "$2,150", footage: true, how: "bret", image: "/images/footage/weapons/shrewsbury-sms-01.webp", imageAlt: "Shrewsbury SMS-01" },
  // Nine standard melee weapons and the Sticky Bomb, as listed at Iron & Oak (our footage, 5:37-6:03).
  { slug: "brass-knuckles", name: "Brass Knuckles", manufacturer: "Not named", category: "Melee", type: "Melee", price: "$95", footage: true, how: "ammu-melee", image: "/images/footage/weapons/brass-knuckles.webp", imageAlt: "Brass Knuckles" },
  { slug: "hunting-knife", name: "Hunting Knife", manufacturer: "Not named", category: "Melee", type: "Knife", price: "$125", footage: true, how: "ammu-melee", image: "/images/footage/weapons/hunting-knife.webp", imageAlt: "Hunting Knife" },
  { slug: "baton", name: "Baton", manufacturer: "Not named", category: "Melee", type: "Baton", price: "$160", footage: true, how: "ammu-melee", image: "/images/footage/weapons/baton.webp", imageAlt: "Baton" },
  { slug: "bushcraft-knife", name: "Bushcraft Knife", manufacturer: "Not named", category: "Melee", type: "Knife", price: "$230", footage: true, how: "ammu-melee", image: "/images/footage/weapons/bushcraft-knife.webp", imageAlt: "Bushcraft Knife" },
  { slug: "edc-knife", name: "EDC Knife", manufacturer: "Not named", category: "Melee", type: "Knife", price: "$275", footage: true, how: "ammu-melee", image: "/images/footage/weapons/edc-knife.webp", imageAlt: "EDC Knife" },
  { slug: "combat-knife", name: "Combat Knife", manufacturer: "Not named", category: "Melee", type: "Knife", price: "$285", footage: true, how: "ammu-melee", image: "/images/footage/weapons/combat-knife.webp", imageAlt: "Combat Knife" },
  { slug: "switchblade", name: "Switchblade", manufacturer: "Not named", category: "Melee", type: "Knife", price: "$290", footage: true, how: "ammu-melee", image: "/images/footage/weapons/switchblade.webp", imageAlt: "Switchblade" },
  { slug: "diving-knife", name: "Diving Knife", manufacturer: "Not named", category: "Melee", type: "Knife", price: "$300", footage: true, how: "ammu-melee", image: "/images/footage/weapons/diving-knife.webp", imageAlt: "Diving Knife" },
  { slug: "survival-knife", name: "Survival Knife", manufacturer: "Not named", category: "Melee", type: "Knife", price: "$315", footage: true, how: "ammu-melee", image: "/images/footage/weapons/survival-knife.webp", imageAlt: "Survival Knife" },
  { slug: "sticky-bomb", name: "Sticky Bomb", manufacturer: "Not named", category: "Explosives", type: "Thrown", price: "$185", footage: true, how: "ammu-sticky", image: "/images/footage/weapons/sticky-bomb.webp", imageAlt: "Sticky Bomb" },
  { slug: "molotov", name: "Molotov", manufacturer: "Not named", category: "Explosives", type: "Thrown", how: "ammu-explosive" },
  { slug: "grenade", name: "Frag Grenade", manufacturer: "Not named", category: "Explosives", type: "Thrown", price: "$140", footage: true, how: "ammu-explosive", image: "/images/footage/weapons/frag-grenade.webp", imageAlt: "Frag Grenade" },
];

/** Weapons whose price comes from the launch-week checklists (two guides agree). */
export const PRICE_CHECKED = new Set<string>([
  "scorpio-nipper-38",
  "klose-k17",
  "duke-1922",
  "girardi-es9",
  "girardi-es18",
  "klose-k17-mcd",
  "fairview-kalinga-50",
  "hawk-little-38",
  "duke-mustang-357",
  "wortham-wcr1",
  "scorpio-akulus",
  "vom-feuer-vf5",
  "wortham-w-10",
  "zhang-wu-type-9",
  "deever-tech-dsg",
  "vom-feuer-vf5c",
  "schlamm-dw-9",
  "bzi-vatra",
  "adb-pd-90",
  "mason-keen-longshot",
  "girardi-verro",
  "girardi-az1200",
  "fortune-son-gorse-425",
  "shrewsbury-drifter",
  "shrewsbury-hobo",
  "goodwin-comshot-12",
  "girardi-super400",
  "kozlov-kvga-12",
  "kozlov-kz-59",
  "hillinger-heathen",
  "duke-556",
  "kozlov-hind",
  "vom-feuer-vf-g1",
  "adb-fra",
  "hillinger-m306",
  "wortham-w-14",
  "hillinger-m306-tmr",
]);
