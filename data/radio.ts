export type RadioStation = {
  name: string;
  hosts: string;
  summary: string;
};

export const radioSource = {
  label: "Rockstar Games — The Music of Grand Theft Auto VI: In-Game Radio Stations",
  href: "https://www.rockstargames.com/VI",
  published: "October 8, 2026",
};

export const radioStations: RadioStation[] = [
  {
    name: "Cocoteo FM",
    hosts: "El Martillo and La Gata",
    summary:
      "Leonida's station for modern Latin music, from bachata and merengue to dembow and reggaeton. Rockstar calls it el party que nunca se apaga.",
  },
  {
    name: "Back Country Radio",
    hosts: "MW and Delta Dawne",
    summary:
      "Renegade country for the Grassrivers, Port Gellhorn, and beyond. Mud Dog Mike, the roving reporter and swamp meteorologist, calls in from his airboat.",
  },
  {
    name: "AfroBank FM",
    hosts: "Burna and Palmsy",
    summary:
      "African music from 20th-century classics and lesser-known records to newer styles such as amapiano and 3-step.",
  },
  {
    name: "The Chamber 106.6",
    hosts: "DJ Kerry and DJ Tom",
    summary:
      "Metal from the 1980s onward. Rockstar describes it as crushing metal that draws on Leonida's metal roots.",
  },
  {
    name: "Flash FM",
    hosts: "Robyn and Alex",
    summary:
      "The Vice City pop station. Rockstar calls it a Vice City institution.",
  },
  {
    name: "Dirty South Classics",
    hosts: "Trick and Trina",
    summary:
      "Regional rap and hip-hop. Rockstar describes it as southern hospitality from the beach to the block.",
  },
];

export const radioNotes = [
  "Grand Theft Auto VI adds on-demand podcasts. Rockstar says both radio and podcasts can be heard in vehicles or on foot, through headphones or earbuds connected to the characters' phones.",
  "Rockstar has said these six stations are the first look, not a promise that the dial ends there.",
  "On-air names are the ones Rockstar published. Off-air performer names reported by other outlets are not listed here.",
];
