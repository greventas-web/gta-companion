/**
 * All 61 GTA 6 cheats (launch day, Nov 18, 2026). Cheats work only after the story.
 * Button codes are listed only where two guides print the same sequence
 * (checked line by line). Other codes are left out until confirmed.
 * Fact check: /workspace/launch-prep/content-batch-1-factcheck.md (section 2).
 */
export type CheatCategory = "player" | "combat" | "vehicle" | "environment" | "filter";

export type Cheat = {
  name: string;
  category: CheatCategory;
  effect: string;
  unlock: string;
  /** D-pad sequence, only when two outlets agree (or flagged in codeNote). */
  code?: string[];
  codeNote?: string;
  unlockNote?: string;
  /** Internal page for the vehicle or weapon this cheat gives. */
  link?: string;
};

export const cheatList: Cheat[] = [
  { name: "$250,000", category: "player", effect: "Instantly gives you $250,000.", unlock: "Finish the story.", code: ["Up", "Right", "Down", "Left", "Up", "Left", "Down", "Right"] },
  { name: "Drunk", category: "player", effect: "Instantly makes you and your partner drunk.", unlock: "Spend $2,500 on alcohol." },
  { name: "Raise Heat Level", category: "player", effect: "Raises your level of heat across the map.", unlock: "Lose a 3-star wanted level 25 times.", code: ["Left", "Down", "Right", "Down", "Up", "Down", "Up"] },
  { name: "Raise Wanted Level", category: "player", effect: "Raises your wanted level across the map.", unlock: "Lose a 3-star wanted level 50 times.", code: ["Left", "Down", "Right", "Down", "Up", "Right", "Up"] },
  { name: "Unlimited Focus", category: "player", effect: "Focus never runs out.", unlock: "Finish the story.", code: ["Down", "Up", "Up", "Down", "Up", "Down", "Up", "Down", "Up", "Right"] },
  { name: "No Fall Damage", category: "player", effect: "You are immune to fall damage.", unlock: "Survive a freefall from 40 feet 20 times." },
  { name: "Parachute", category: "player", effect: "Adds a parachute to your loadout.", unlock: "Complete 50 skydives or base jumps from 300 feet or higher." },
  { name: "Body Armor", category: "player", effect: "Adds body armor to your loadout.", unlock: "Complete 100 workouts.", code: ["Down", "Up", "Left", "Up", "Up", "Up", "Up", "Up", "Down", "Down"] },
  { name: "Repair Vehicle", category: "player", effect: "Fully repairs your current vehicle.", unlock: "Get 1st place in 10 races at Gellhorn Raceway, Thrillbilly Mud Club, and Boone Speedway." },
  { name: "Unlimited Nitrous", category: "player", effect: "Nitrous and fuel never runs out on vehicles.", unlock: "Complete 50 stunt jumps." },
  { name: "Max Ammo", category: "combat", effect: "Fills all ammo to maximum.", unlock: "Win 25 bronze medals or higher at shooting ranges.", code: ["Down", "Up", "Right", "Down", "Left", "Left", "Up", "Up", "Down", "Left"] },
  { name: "Infinite Ammo", category: "combat", effect: "Ammo never runs out.", unlock: "Win 25 silver medals or higher at shooting ranges.", code: ["Down", "Up", "Right", "Down", "Left", "Left", "Up", "Down", "Down", "Down"] },
  { name: "No Reload", category: "combat", effect: "Ammo never runs out with no need to reload.", unlock: "Win 25 gold medals at shooting ranges.", code: ["Down", "Up", "Right", "Down", "Left", "Left", "Up", "Down", "Down", "Up"] },
  { name: "All Explosive Weapons", category: "combat", effect: "Adds all explosive weapons to your loadout with full ammo.", unlock: "Throw 100 grenades." },
  { name: "Incendiary Ammo", category: "combat", effect: "All ammo is incendiary.", unlock: "Burn 100 enemies with fire damage." },
  { name: "Exploding Bottles", category: "combat", effect: "All bottles explode when damaged.", unlock: "Throw 100 molotovs." },
  { name: "Explosive Shotgun", category: "combat", effect: "Adds a Mason & Keen Shortstraw to your loadout that fires explosive shells.", unlock: "Hit 100 enemies with explosive damage.", link: "/weapons/mason-keen-shortstraw" },
  { name: "Hauners H-AT", category: "combat", effect: "Adds a Hauners H-AT to your loadout.", unlock: "Blow up 100 vehicles.", link: "/weapons/hauners-h-at" },
  { name: "Attack Force", category: "combat", effect: "Bullets and melee attacks launch targets on impact.", unlock: "Finish the story.", code: ["Down", "Up", "Left", "Left", "Right", "Down", "Down", "Up", "Down"] },
  { name: "Exploding Balls", category: "combat", effect: "Sports balls explode on impact.", unlock: "Hit 20 enemies with explosive damage.", code: ["Down", "Up", "Left", "Left", "Right", "Down", "Down", "Up", "Right"] },
  { name: "Vehicle Force", category: "combat", effect: "Vehicle collisions launch targets.", unlock: "Kill 25 enemies with a vehicle (civilians count too).", code: ["Down", "Up", "Left", "Left", "Right", "Down", "Left", "Up", "Down"] },
  { name: "Interstate Ambulance", category: "vehicle", effect: "Spawns an Interstate Ambulance.", unlock: "Discover the Interstate Ambulance in the Progress menu.", link: "/vehicles/interstate-ambulance" },
  { name: "Airboat 09", category: "vehicle", effect: "Spawns an Airboat 09.", unlock: "Complete 5 survival challenges.", link: "/vehicles/airboat-09" },
  { name: "Bravado Banshee", category: "vehicle", effect: "Spawns a Bravado Banshee.", unlock: "Complete all combat challenges.", link: "/vehicles/bravado-banshee" },
  { name: "Tuff BMX", category: "vehicle", effect: "Spawns a Tuff BMX.", unlock: "Complete 5 fitness challenges.", link: "/vehicles/tuff-bmx" },
  { name: "Maibatsu Boomazoom", category: "vehicle", effect: "Spawns a Maibatsu Boomazoom.", unlock: "Complete 5 shopping challenges.", code: ["Left", "Up", "Right", "Down", "Left", "Left", "Up", "Left"], link: "/vehicles/maibatsu-boomazoom" },
  { name: "Nagasaki Carbon RS", category: "vehicle", effect: "Spawns a Nagasaki Carbon RS.", unlock: "Complete all exploration challenges.", link: "/vehicles/nagasaki-carbon-rs" },
  { name: "'65 Vapid Dominator", category: "vehicle", effect: "Spawns a '65 Vapid Dominator.", unlock: "Complete all fitness challenges.", link: "/vehicles/vapid-dominator-65" },
  { name: "Progen Emerus", category: "vehicle", effect: "Spawns a Progen Emerus.", unlock: "Complete all vehicle challenges.", link: "/vehicles/progen-emerus" },
  { name: "Inflatable Flamingo", category: "vehicle", effect: "Spawns an Inflatable Flamingo.", unlock: "Destroy 50 cocaine flamingos.", link: "/vehicles/inflatable-flamingo" },
  { name: "MTL Pumper", category: "vehicle", effect: "Spawns an MTL Pumper.", unlock: "Discover the MTL Pumper in the Progress menu.", code: ["Left", "Up", "Right", "Down", "Left", "Right", "Right", "Up"], unlockNote: "Unlock not fully confirmed yet.", link: "/vehicles/mtl-pumper" },
  { name: "Vapid Stanier G2 Taxi", category: "vehicle", effect: "Spawns a Vapid Stanier G2 Taxi.", unlock: "Complete 5 sports challenges.", link: "/vehicles/vapid-stanier-g2-taxi" },
  { name: "Hauners P-996 Lazer", category: "vehicle", effect: "Spawns a Hauners P-996 Lazer.", unlock: "Complete all challenges.", link: "/vehicles/hauners-p-996-lazer" },
  { name: "HVY Bulldozer", category: "vehicle", effect: "Spawns an HVY Bulldozer.", unlock: "Discover the HVY Bulldozer in the Progress menu.", code: ["Left", "Up", "Right", "Down", "Left", "Right", "Right", "Down"], link: "/vehicles/hvy-bulldozer" },
  { name: "Lapwing Mallard", category: "vehicle", effect: "Spawns a Lapwing Mallard.", unlock: "Complete 5 vehicle challenges.", link: "/vehicles/lapwing-mallard" },
  { name: "Brimstone Golfer", category: "vehicle", effect: "Spawns a Brimstone Golfer.", unlock: "Complete all sports challenges.", link: "/vehicles/brimstone-golfer" },
  { name: "Hauners Rhino Tank", category: "vehicle", effect: "Spawns a Hauners Rhino Tank.", unlock: "Complete all survival challenges.", link: "/vehicles/hauners-rhino-tank" },
  { name: "Maibatsu Sanchez", category: "vehicle", effect: "Spawns a Maibatsu Sanchez.", unlock: "Complete 5 criminal challenges.", link: "/vehicles/maibatsu-sanchez" },
  { name: "Nagasaki Sea Sparrow", category: "vehicle", effect: "Spawns a Nagasaki Sea Sparrow.", unlock: "Complete 5 exploration challenges.", link: "/vehicles/nagasaki-sea-sparrow" },
  { name: "Speeder 700 GT", category: "vehicle", effect: "Spawns a Speeder 700 GT.", unlock: "Complete 5 combat challenges.", link: "/vehicles/speeder-700-gt" },
  { name: "Truffade Thrax", category: "vehicle", effect: "Spawns a Truffade Thrax.", unlock: "Complete all shopping challenges.", link: "/vehicles/truffade-thrax" },
  { name: "Western Zombie Bobber", category: "vehicle", effect: "Spawns a Western Zombie Bobber.", unlock: "Complete all criminal challenges.", link: "/vehicles/western-zombie-bobber" },
  { name: "Move Time Forward", category: "environment", effect: "Moves the time of day forward.", unlock: "Find 10 collectible watches." },
  { name: "Pause Time of Day", category: "environment", effect: "Pauses the current time of day.", unlock: "Find 20 collectible watches." },
  { name: "Cycle Weather", category: "environment", effect: "Changes the weather.", unlock: "Finish the story.", code: ["Down", "Right", "Up", "Down", "Right", "Up", "Right"], unlockNote: "Some players say revealing the whole map unlocks it instead." },
  { name: "Golden Hour", category: "filter", effect: "Applies a golden filter with a widescreen aspect ratio.", unlock: "Spend 4 hours holding hands." },
  { name: "Powdered Sugar", category: "filter", effect: "Turns the world white with sparkling highlights.", unlock: "Scan all space debris with WAiNK." },
  { name: "Pinhole", category: "filter", effect: "Applies a pinhole camera filter.", unlock: "Clear 25 gang operations with your partner." },
  { name: "Neon Jungle", category: "filter", effect: "Applies neon highlights to the world.", unlock: "Discover all 16 Girlypop Vehicles." },
  { name: "Yesteryear", category: "filter", effect: "Applies a black and white CRT TV filter.", unlock: "Discover the Ridgeway." },
  { name: "Cataclysm", category: "filter", effect: "Fills the world with murky smoke.", unlock: "Discover Martha's Vamos in the Progress menu.", code: ["Down", "Down", "Up", "Right", "Right", "Up", "Left", "Left", "Right", "Right"] },
  { name: "Videotape", category: "filter", effect: "Applies a videotape-style filter.", unlock: "Complete 50 activities with your partner." },
  { name: "Dark Mirror", category: "filter", effect: "Flips the world upside down and turns it black.", unlock: "Make $500,000 selling vehicles." },
  { name: "Migraine", category: "filter", effect: "Applies a blurred, distorted filter.", unlock: "Survive 6 minutes with a 6-star wanted level." },
  { name: "Dollhouse", category: "filter", effect: "Applies a vivid filter with a narrow aspect ratio.", unlock: "Spend 8 hours with your partner.", code: ["Down", "Down", "Up", "Right", "Right", "Up", "Left", "Left", "Down", "Right"] },
  { name: "Bubblegum", category: "filter", effect: "Turns the world purple and yellow with sparkling highlights.", unlock: "Find all 24 collectible cards for the Vice City Flamingos." },
  { name: "Fast Forward", category: "filter", effect: "Applies a motion blur and accelerates cloud movements.", unlock: "Complete 50 meditations." },
  { name: "Fisheye", category: "filter", effect: "Applies a fisheye filter.", unlock: "Catch 100 fish." },
  { name: "Faded Glory", category: "filter", effect: "Applies a color CRT TV filter.", unlock: "Rob 50 stores with your partner.", code: ["Down", "Down", "Up", "Right", "Right", "Up", "Left", "Left", "Left", "Right"] },
  { name: "Pixel Art", category: "filter", effect: "Applies a pixelated filter.", unlock: "Make $250,000 selling collectibles." },
  { name: "Hellscape", category: "filter", effect: "Turns the world red and orange with a heat haze.", unlock: "Steal 100 cop vehicles." },
];
