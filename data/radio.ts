export type RadioStation = {
  name: string;
  hosts: string;
  /** Genre or format already listed on the stations guide. */
  genre: string;
  /** Rockstar blurb, or an extra fact the stations guide already stores. */
  summary?: string;
};

export const radioSource = {
  label: "Rockstar Games",
  href: "https://www.rockstargames.com/VI",
  published: "October 8, 2026",
};

export const radioStations: RadioStation[] = [
  {
    name: "AfroBank FM",
    hosts: "Burna and Palmsy",
    genre: "African music",
    summary:
      "African music from 20th-century classics and lesser-known records to newer styles such as amapiano and 3-step.",
  },
  {
    name: "Back Country Radio",
    hosts: "MW and Delta Dawne",
    genre: "Country",
    summary:
      "Renegade country for the Grassrivers, Port Gellhorn, and beyond. Mud Dog Mike, the roving reporter and swamp meteorologist, calls in from his airboat.",
  },
  {
    name: "The Chamber 106.6",
    hosts: "DJ Kerry and DJ Tom",
    genre: "Metal",
    summary:
      "Metal from the 1980s onward. Rockstar describes it as crushing metal that draws on Leonida's metal roots.",
  },
  {
    name: "CircoLoco Records Radio",
    hosts: "DJ Seth and DJ Antonio",
    genre: "Electronic",
  },
  {
    name: "Cocoteo FM",
    hosts: "El Martillo and La Gata",
    genre: "Modern Latin",
    summary:
      "Leonida's station for modern Latin music, from bachata and merengue to dembow and reggaeton. Rockstar calls it el party que nunca se apaga.",
  },
  {
    name: "Dirty South Classics",
    hosts: "Trick and Trina",
    genre: "Southern rap",
    summary:
      "Regional rap and hip-hop. Rockstar describes it as southern hospitality from the beach to the block.",
  },
  {
    name: "Emotion 98.3",
    hosts: "Doug Van Dyke",
    genre: "Soft rock",
  },
  {
    name: "Flash FM",
    hosts: "Robyn and Alex",
    genre: "Pop",
    summary: "The Vice City pop station. Rockstar calls it a Vice City institution.",
  },
  {
    name: "Gloriana Blues Radio",
    hosts: "DJ Buddy and DJ Keith",
    genre: "Blues",
  },
  {
    name: "Honey FM",
    hosts: "Chilli and T-Boz of TLC",
    genre: "R&B",
    summary: "Craig Robinson hosts Honey FM: Liquid City.",
  },
  {
    name: "Kaleidoscope FM",
    hosts: "DJ Dicky",
    genre: "Pop covers from around the world",
  },
  {
    name: "Leonida Jazz Radio",
    hosts: "DJ Randy and DJ Stanley",
    genre: "Jazz",
  },
  {
    name: "Radio La Ola",
    hosts: "Gloria and Emilio Estefan",
    genre: "Classic Latin",
  },
  {
    name: "Radio On-U",
    hosts: "Adrian Sherwood",
    genre: "Reggae and dub",
  },
  {
    name: "Stockyard FM",
    hosts: "Victoria and Harrison",
    genre: "Electronic and indie",
  },
  {
    name: "Symphony FM",
    hosts: "Yuja",
    genre: "Classical",
  },
  {
    name: "V-Rock",
    hosts: "The Buck and Skipper McD",
    genre: "Classic rock",
  },
  {
    name: "Vice City FM",
    hosts: "DJ Al and Madame Brigitte",
    genre: "'80s",
  },
  {
    name: "Vice City Rap Radio",
    hosts: "DJ JT and DJ Stevie",
    genre: "Hip-hop",
    summary: "Early AF with Charlamagne tha God and Ivy Rivera.",
  },
  {
    name: "Worldwide FM",
    hosts: "Gilles Peterson",
    genre: "Jazz, funk and soul",
  },
  {
    name: "WKTT",
    hosts: 'Richard Bastion and Dominic "The Brick" Brizzolato',
    genre: "Talk",
  },
  {
    name: "The Wipe",
    hosts: "Anitta",
    genre: "Talk",
  },
];

export const radioNotes = [
  "Grand Theft Auto VI adds on-demand podcasts. Rockstar says both radio and podcasts can be heard in vehicles or on foot, through headphones or earbuds connected to the characters' phones.",
  "Rockstar has said these six stations are the first look, not a promise that the dial ends there.",
  "On-air names are the ones Rockstar published. Off-air performer names reported by other outlets are not listed here.",
];
