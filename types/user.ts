export interface UserProgress {
  completed: number;
  collectibles: number;
  missions: number;
}

export interface UserSettings {
  notifications: boolean;
  darkMode: boolean;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  role: "member" | "admin";

  favorites: string[];
  savedGuides: string[];
  recentViews: string[];

  progress: UserProgress;

  settings: UserSettings;

  createdAt?: unknown;
}