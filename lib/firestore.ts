import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";
import type { UserProfile } from "@/types/user";

function requireDb() {
  if (!db) {
    throw new Error("Accounts are not configured.");
  }

  return db;
}

export async function getUserProfile(uid: string) {
  const snapshot = await getDoc(doc(requireDb(), "users", uid));

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProfile;
}

export function subscribeToUser(
  uid: string,
  callback: (user: UserProfile | null) => void
) {
  return onSnapshot(doc(requireDb(), "users", uid), (snapshot) => {
    if (!snapshot.exists()) {
      callback(null);
      return;
    }

    callback(snapshot.data() as UserProfile);
  });
}

export async function addFavorite(uid: string, id: string) {
  await updateDoc(doc(requireDb(), "users", uid), {
    favorites: arrayUnion(id),
  });
}

export async function removeFavorite(uid: string, id: string) {
  await updateDoc(doc(requireDb(), "users", uid), {
    favorites: arrayRemove(id),
  });
}

export async function saveGuide(uid: string, guideId: string) {
  await updateDoc(doc(requireDb(), "users", uid), {
    savedGuides: arrayUnion(guideId),
  });
}

export async function unsaveGuide(uid: string, guideId: string) {
  await updateDoc(doc(requireDb(), "users", uid), {
    savedGuides: arrayRemove(guideId),
  });
}

export async function addRecentView(uid: string, slug: string) {
  const profile = await getUserProfile(uid);

  if (!profile) return;

  const recent = profile.recentViews.filter((item) => item !== slug);

  recent.unshift(slug);

  await updateDoc(doc(requireDb(), "users", uid), {
    recentViews: recent.slice(0, 20),
  });
}

export async function updateProgress(
  uid: string,
  progress: UserProfile["progress"]
) {
  await updateDoc(doc(requireDb(), "users", uid), {
    progress,
  });
}

export async function updateDisplayName(
  uid: string,
  displayName: string
) {
  await updateDoc(doc(requireDb(), "users", uid), {
    displayName,
  });
}

export async function updateUserSettings(
  uid: string,
  settings: Partial<UserProfile["settings"]>
) {
  const profile = await getUserProfile(uid);

  await updateDoc(doc(requireDb(), "users", uid), {
    settings: {
      notifications: profile?.settings?.notifications ?? true,
      darkMode: profile?.settings?.darkMode ?? true,
      ...settings,
    },
  });
}