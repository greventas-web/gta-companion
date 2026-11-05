import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

function requireDb() {
  if (!db) {
    throw new Error("Accounts are not configured.");
  }

  return db;
}

export type UserProfile = {
  uid: string;
  displayName: string;
  email: string;
  role: string;
  favorites: string[];
  savedGuides: string[];
  recentViews: string[];
  settings: {
    darkMode: boolean;
    notifications: boolean;
  };
};

export async function getUserProfile(
  uid: string
): Promise<UserProfile | null> {
  const snapshot = await getDoc(
    doc(requireDb(), "users", uid)
  );

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProfile;
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>
) {
  await updateDoc(
    doc(requireDb(), "users", uid),
    data
  );
}