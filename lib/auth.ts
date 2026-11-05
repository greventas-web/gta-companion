import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "./firebase";

const googleProvider = new GoogleAuthProvider();

function requireFirebase() {
  if (!auth || !db) {
    throw new Error("Accounts are not configured.");
  }

  return { auth, db };
}

export async function registerUser(
  displayName: string,
  email: string,
  password: string
) {
  const { auth: firebaseAuth, db: firestore } = requireFirebase();

  const credential = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  if (firebaseAuth.currentUser) {
    await updateProfile(firebaseAuth.currentUser, {
      displayName,
    });
  }

  await setDoc(doc(firestore, "users", credential.user.uid), {
    uid: credential.user.uid,
    displayName,
    email,
    role: "member",
    createdAt: serverTimestamp(),
    favorites: [],
    savedGuides: [],
    recentViews: [],
    settings: {
      notifications: true,
      darkMode: true,
    },
    progress: {
      completed: 0,
      collectibles: 0,
      missions: 0,
    },
  });

  return credential.user;
}

export async function loginUser(
  email: string,
  password: string
) {
  const { auth: firebaseAuth } = requireFirebase();

  const credential = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  return credential.user;
}

export async function loginWithGoogle() {
  const { auth: firebaseAuth, db: firestore } = requireFirebase();

  const credential = await signInWithPopup(
    firebaseAuth,
    googleProvider
  );

  const userRef = doc(firestore, "users", credential.user.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    await setDoc(userRef, {
      uid: credential.user.uid,
      displayName: credential.user.displayName ?? "Player",
      email: credential.user.email,
      role: "member",
      createdAt: serverTimestamp(),
      favorites: [],
      savedGuides: [],
      recentViews: [],
      settings: {
        notifications: true,
        darkMode: true,
      },
      progress: {
        completed: 0,
        collectibles: 0,
        missions: 0,
      },
    });
  }

  return credential.user;
}

export async function logoutUser() {
  const { auth: firebaseAuth } = requireFirebase();
  await signOut(firebaseAuth);
}