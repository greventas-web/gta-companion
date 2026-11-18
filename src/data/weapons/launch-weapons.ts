/**
 * GTA 6 weapons confirmed in the release build (launch day, Nov 18, 2026).
 * Fact check: /workspace/launch-prep/content-batch-1-factcheck.md (section 1).
 * Stats are the in-game stat-card bars (out of 10) as published by DayOne;
 * prices only where PowerPyx or Beebom published them. No other numbers.
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
  | "lucia";

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
};

export const launchWeapons: LaunchWeapon[] = [
  { slug: "scorpio-nipper-38", name: "Scorpio Nipper .38", manufacturer: "Scorpio", category: "Handgun", caliber: ".380", magazine: 8, fireMode: "Semi-automatic", stats: { damage: 2.8, accuracy: 3.0, handling: 9.0, range: 3.0 }, how: "ammu" },
  { slug: "klose-k17", name: "Klose K17", manufacturer: "Klose", category: "Handgun", caliber: "9mm", magazine: 17, fireMode: "Semi-automatic", stats: { damage: 4.0, accuracy: 4.2, handling: 8.5, range: 3.8 }, how: "lucia" },
  { slug: "duke-1922", name: "Duke 1922", manufacturer: "Duke", category: "Handgun", caliber: ".45", magazine: 8, fireMode: "Semi-automatic", stats: { damage: 5.5, accuracy: 4.8, handling: 8.0, range: 4.6 }, how: "ammu" },
  { slug: "girardi-es9", name: "Girardi ES9", manufacturer: "Girardi", category: "Handgun", caliber: "9mm", magazine: 15, fireMode: "Semi-automatic", stats: { damage: 4.2, accuracy: 5.2, handling: 8.4, range: 4.4 }, how: "jason" },
  { slug: "girardi-es18", name: "Girardi ES18", manufacturer: "Girardi", category: "Handgun", caliber: "9mm", magazine: 30, fireMode: "3-round burst", stats: { damage: 4.2, accuracy: 4.4, handling: 8.2, range: 4.8 }, how: "ammu" },
  { slug: "klose-k17-mcd", name: "Klose K17 MCD", manufacturer: "Klose", category: "Handgun", caliber: "9mm", magazine: 24, fireMode: "Fully automatic", stats: { damage: 4.0, accuracy: 3.2, handling: 8.0, range: 4.2 }, how: "ammu" },
  { slug: "fairview-kalinga-50", name: "Fairview Kalinga .50", manufacturer: "Fairview Firearms", category: "Handgun", caliber: ".50 Magnum", magazine: 7, fireMode: "Semi-automatic", stats: { damage: 7.0, accuracy: 4.0, handling: 7.8, range: 5.0 }, how: "ammu" },
  { slug: "hawk-little-38", name: "Hawk & Little .38", manufacturer: "Hawk & Little", category: "Handgun", type: "Revolver", caliber: ".38 Special", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 2.5, accuracy: 5.0, handling: 8.6, range: 4.5 }, how: "ammu" },
  { slug: "duke-mustang-357", name: "Duke Mustang .357", manufacturer: "Duke", category: "Handgun", type: "Revolver", caliber: ".357 Magnum", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 5.7, accuracy: 4.5, handling: 8.0, range: 5.5 }, how: "ammu" },
  { slug: "wortham-wcr1", name: "Wortham WCR1", manufacturer: "Wortham", category: "Handgun", type: "Revolver", caliber: ".38 Special", magazine: 5, fireMode: "Semi-automatic", stats: { damage: 2.2, accuracy: 3.8, handling: 9.0, range: 4.5 }, how: "ammu" },
  { slug: "scorpio-akulus", name: "Scorpio Akulus", manufacturer: "Scorpio", category: "Handgun", type: "Revolver", caliber: ".44 Magnum", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 7.0, accuracy: 4.2, handling: 7.6, range: 6.0 }, how: "ammu" },
  { slug: "vom-feuer-vf5", name: "Vom Feuer VF5", manufacturer: "Vom Feuer", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 5.0, handling: 6.7, range: 4.5 }, how: "ammu" },
  { slug: "wortham-w-10", name: "Wortham W-10", manufacturer: "Wortham", category: "SMG", caliber: "9mm", magazine: 20, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 3.2, handling: 7.5, range: 3.5 }, how: "ammu" },
  { slug: "zhang-wu-type-9", name: "Zhang Wu Type 9", manufacturer: "Zhang Wu", category: "SMG", caliber: "9mm", magazine: 10, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 3.8, handling: 7.8, range: 3.5 }, how: "ammu" },
  { slug: "deever-tech-dsg", name: "Deever Tech DSG", manufacturer: "Deever Tech", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "3-round burst", stats: { damage: 4.2, accuracy: 4.2, handling: 6.9, range: 4.0 }, how: "ammu" },
  { slug: "vom-feuer-vf5c", name: "Vom Feuer VF5C", manufacturer: "Vom Feuer", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 5.0, handling: 6.9, range: 4.0 }, how: "ammu" },
  { slug: "schlamm-dw-9", name: "Schlamm DW-9", manufacturer: "Schlamm", category: "SMG", caliber: "9mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 4.5, handling: 6.8, range: 4.0 }, how: "ammu" },
  { slug: "bzi-vatra", name: "BZI Vatra", manufacturer: "Bohemia Zbran Industries", category: "SMG", caliber: "9mm", magazine: 20, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 3.8, handling: 6.5, range: 4.0 }, how: "ammu" },
  { slug: "adb-pd-80", name: "AdB PD-80", manufacturer: "Armurerie de Belgique", category: "SMG", caliber: "5.7x28mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 4.2, accuracy: 4.8, handling: 6.6, range: 4.2 }, how: "ammu" },
  { slug: "mason-keen-longshot", name: "Mason & Keen Longshot", manufacturer: "Mason & Keen", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 4.1, handling: 5.0, range: 2.5 }, how: "ammu" },
  { slug: "fortune-son-moreland-850", name: "Fortune & Son Moreland 850", manufacturer: "Fortune & Son", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Pump action", stats: { damage: 7.5, accuracy: 4.2, handling: 5.6, range: 2.5 }, price: "$350", how: "gearup" },
  { slug: "girardi-verro", name: "Girardi Verro", manufacturer: "Girardi", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Semi-automatic", stats: { damage: 7.4, accuracy: 3.9, handling: 6.5, range: 2.0 }, how: "ammu" },
  { slug: "girardi-az1200", name: "Girardi AZ1200", manufacturer: "Girardi", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Semi-automatic", stats: { damage: 7.4, accuracy: 4.5, handling: 5.8, range: 2.5 }, how: "ammu" },
  { slug: "fortune-son-gorse-425", name: "Fortune & Son Gorse 425", manufacturer: "Fortune & Son", category: "Shotgun", caliber: "12-gauge", magazine: 5, fireMode: "Pump action", stats: { damage: 7.5, accuracy: 3.8, handling: 6.2, range: 2.0 }, how: "ammu" },
  { slug: "shrewsbury-drifter", name: "Shrewsbury Drifter", manufacturer: "Shrewsbury", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 4.1, handling: 5.0, range: 2.5 }, how: "ammu" },
  { slug: "shrewsbury-hobo", name: "Shrewsbury Hobo", manufacturer: "Shrewsbury", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 3.6, handling: 6.4, range: 2.0 }, how: "ammu" },
  { slug: "mason-keen-shortstraw", name: "Mason & Keen Shortstraw", manufacturer: "Mason & Keen", category: "Shotgun", caliber: "12-gauge", magazine: 2, fireMode: "Break action", stats: { damage: 8.0, accuracy: 3.6, handling: 6.4, range: 2.0 }, how: "cheat-shotgun" },
  { slug: "goodwin-comshot-12", name: "Goodwin Comshot 12", manufacturer: "Goodwin", category: "Shotgun", caliber: "12-gauge", magazine: 7, fireMode: "Semi-automatic", stats: { damage: 7.7, accuracy: 4.2, handling: 4.0, range: 2.5 }, how: "ammu" },
  { slug: "girardi-super400", name: "Girardi Super400", manufacturer: "Girardi", category: "Shotgun", caliber: "12-gauge", magazine: 7, fireMode: "Semi-automatic", stats: { damage: 7.4, accuracy: 4.2, handling: 5.3, range: 2.5 }, how: "ammu" },
  { slug: "kozlov-kvga-12", name: "Kozlov KVGA-12", manufacturer: "Kozlov", category: "Shotgun", caliber: "12-gauge", magazine: 8, fireMode: "Fully automatic", stats: { damage: 7.2, accuracy: 4.5, handling: 5.1, range: 2.5 }, how: "ammu" },
  { slug: "kozlov-kz-59", name: "Kozlov KZ-59", manufacturer: "Kozlov", category: "Assault Rifle", caliber: "7.62x39mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.4, accuracy: 5.2, handling: 5.2, range: 6.5 }, how: "ammu" },
  { slug: "hillinger-heathen", name: "Hillinger Heathen", manufacturer: "Hillinger", category: "Assault Rifle", caliber: "5.56x45mm", fireMode: "3-round burst", stats: { damage: 5.0, accuracy: 6.2, handling: 5.8, range: 6.2 }, how: "ammu" },
  { slug: "duke-556", name: "Duke 556", manufacturer: "Duke", category: "Assault Rifle", caliber: "5.56x45mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.0, accuracy: 6.0, handling: 5.8, range: 6.2 }, how: "ammu" },
  { slug: "kozlov-hind", name: "Kozlov Hind", manufacturer: "Kozlov", category: "Assault Rifle", caliber: "7.62x39mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.4, accuracy: 4.5, handling: 6.1, range: 4.5 }, how: "ammu" },
  { slug: "vom-feuer-vf-g1", name: "Vom Feuer VF-G1", manufacturer: "Vom Feuer", category: "Assault Rifle", caliber: "5.56x45mm", magazine: 30, fireMode: "Fully automatic", stats: { damage: 5.0, accuracy: 6.2, handling: 5.8, range: 6.5 }, how: "ammu" },
  { slug: "adb-fra", name: "AdB FRA", manufacturer: "Armurerie de Belgique", category: "Assault Rifle", caliber: "7.62x51mm", magazine: 20, fireMode: "Fully automatic", stats: { damage: 5.8, accuracy: 5.0, handling: 5.3, range: 6.9 }, how: "ammu" },
  { slug: "wortham-w-22", name: "Wortham W-22", manufacturer: "Wortham", category: "Tactical Rifle", caliber: ".22 LR", magazine: 15, fireMode: "Semi-automatic", stats: { damage: 1.5, accuracy: 8.0, handling: 5.8, range: 7.0 }, how: "ammu" },
  { slug: "hillinger-m306", name: "Hillinger M306", manufacturer: "Hillinger", category: "Tactical Rifle", caliber: "7.62x51mm", magazine: 20, fireMode: "Semi-automatic", stats: { damage: 6.2, accuracy: 7.5, handling: 4.8, range: 7.5 }, how: "ammu" },
  { slug: "hawk-little-mediator", name: "Hawk & Little Mediator", manufacturer: "Hawk & Little", category: "Tactical Rifle", caliber: "9mm", magazine: 17, fireMode: "Semi-automatic", stats: { damage: 4.8, accuracy: 7.8, handling: 5.6, range: 7.0 }, price: "$450", how: "gearup" },
  { slug: "wortham-w-14", name: "Wortham W-14", manufacturer: "Wortham", category: "Tactical Rifle", caliber: "5.56x45mm", magazine: 20, fireMode: "Semi-automatic", stats: { damage: 5.8, accuracy: 7.5, handling: 5.2, range: 7.2 }, how: "ammu" },
  { slug: "hillinger-m306-tmr", name: "Hillinger M306 TMR", manufacturer: "Hillinger", category: "Tactical Rifle", caliber: "7.62x51mm", magazine: 20, fireMode: "Semi-automatic", stats: { damage: 6.2, accuracy: 7.8, handling: 5.5, range: 7.5 }, how: "ammu" },
  { slug: "fairview-ff-sr", name: "Fairview FF-SR", manufacturer: "Fairview Firearms", category: "Sniper Rifle", caliber: ".338 Magnum", magazine: 10, fireMode: "Bolt action", stats: { damage: 8.0, accuracy: 7.5, handling: 3.8, range: 7.5 }, price: "$2,950", how: "expanded" },
  { slug: "shrewsbury-sm-69", name: "Shrewsbury SM-69", manufacturer: "Shrewsbury", category: "Sniper Rifle", caliber: "7.62x51mm", magazine: 5, fireMode: "Bolt action", stats: { damage: 6.8, accuracy: 7.6, handling: 4.0, range: 7.5 }, price: "$1,850", how: "expanded" },
  { slug: "fortune-son-laird-350", name: "Fortune & Son Laird 350", manufacturer: "Fortune & Son", category: "Sniper Rifle", caliber: "6.5mm", magazine: 5, fireMode: "Bolt action", stats: { damage: 6.5, accuracy: 8.0, handling: 4.5, range: 7.5 }, price: "$950", how: "expanded" },
  { slug: "fairview-ff-50", name: "Fairview FF-50", manufacturer: "Fairview Firearms", category: "Sniper Rifle", caliber: ".50 BFG", magazine: 5, fireMode: "Bolt action", stats: { damage: 8.5, accuracy: 7.0, handling: 3.5, range: 7.5 }, price: "$3,975", how: "expanded" },
  { slug: "goodwin-lmg-6", name: "Goodwin LMG 6", manufacturer: "Goodwin", category: "LMG", caliber: "7.62x51mm", magazine: 100, fireMode: "Fully automatic", stats: { damage: 6.8, accuracy: 2.8, handling: 2.8, range: 6.5 }, how: "expanded" },
  { slug: "adb-m350", name: "AdB M350", manufacturer: "Armurerie de Belgique", category: "LMG", caliber: "5.56x45mm", magazine: 100, fireMode: "Fully automatic", stats: { damage: 6.5, accuracy: 3.0, handling: 3.2, range: 6.2 }, how: "expanded" },
  { slug: "hillinger-boomer", name: "Hillinger Boomer", manufacturer: "Hillinger", category: "Launcher", caliber: "40mm grenade", magazine: 1, fireMode: "Single shot", stats: { damage: 9.2, accuracy: 5.0, handling: 6.0, range: 4.0 }, price: "$12,000", how: "expanded" },
  { slug: "deever-tech-glr40", name: "Deever Tech GLR40", manufacturer: "Deever Tech", category: "Launcher", caliber: "40mm grenade", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 9.2, accuracy: 6.0, handling: 5.0, range: 4.0 }, price: "$15,500", how: "expanded" },
  { slug: "hauners-h-at", name: "Hauners H-AT", manufacturer: "Hauners", category: "Launcher", caliber: "66mm rocket", magazine: 1, fireMode: "Single shot", stats: { damage: 9.6, accuracy: 4.5, handling: 3.0, range: 8.0 }, price: "$16,000", how: "expanded+cheat" },
  { slug: "hawk-little-morgan", name: "Hawk & Little Morgan", manufacturer: "Hawk & Little", category: "Handgun", type: "Revolver", caliber: ".44 Magnum", magazine: 6, fireMode: "Semi-automatic", stats: { damage: 5.7, accuracy: 5.4, handling: 7.8, range: 6.0 }, how: "ue" },
  { slug: "shrewsbury-sms-01", name: "Shrewsbury SMS-01", manufacturer: "Shrewsbury", category: "Sniper Rifle", price: "$2,150", how: "bret" },
];
