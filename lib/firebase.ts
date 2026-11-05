import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseApp,
} from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(
  (value) => typeof value === "string" && value.length > 0
);

function createApp(): FirebaseApp | null {
  if (!isFirebaseConfigured) {
    return null;
  }

  if (getApps().length > 0) {
    return getApp();
  }

  return initializeApp({
    apiKey: firebaseConfig.apiKey as string,
    authDomain: firebaseConfig.authDomain as string,
    projectId: firebaseConfig.projectId as string,
    storageBucket: firebaseConfig.storageBucket as string,
    messagingSenderId: firebaseConfig.messagingSenderId as string,
    appId: firebaseConfig.appId as string,
  });
}

const app = createApp();

export const auth: Auth | null = app ? getAuth(app) : null;

export const db: Firestore | null = app ? getFirestore(app) : null;

export default app;
