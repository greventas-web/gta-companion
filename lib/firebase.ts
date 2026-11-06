import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseApp,
} from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

export type FirebaseWebConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

function readConfig(source: {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}): FirebaseWebConfig | null {
  const config = {
    apiKey: source.apiKey ?? "",
    authDomain: source.authDomain ?? "",
    projectId: source.projectId ?? "",
    storageBucket: source.storageBucket ?? "",
    messagingSenderId: source.messagingSenderId ?? "",
    appId: source.appId ?? "",
  };

  const complete = Object.values(config).every(
    (value) => typeof value === "string" && value.length > 0
  );

  return complete ? config : null;
}

function configFromEnv(): FirebaseWebConfig | null {
  return readConfig({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  });
}

export let isFirebaseConfigured = false;
export let auth: Auth | null = null;
export let db: Firestore | null = null;

let app: FirebaseApp | null = null;
let starting: Promise<boolean> | null = null;

function applyConfig(config: FirebaseWebConfig) {
  if (app) return;

  app = getApps().length > 0 ? getApp() : initializeApp(config);
  auth = getAuth(app);
  db = getFirestore(app);
  isFirebaseConfigured = true;
}

async function configFromServer(): Promise<FirebaseWebConfig | null> {
  if (typeof window === "undefined") return null;

  const response = await fetch("/api/firebase-config", { cache: "no-store" });

  if (!response.ok) return null;

  const body = (await response.json()) as Partial<FirebaseWebConfig>;

  return readConfig(body);
}

export function ensureFirebase() {
  if (isFirebaseConfigured) return Promise.resolve(true);
  if (starting) return starting;

  starting = (async () => {
    try {
      const config = configFromEnv() ?? (await configFromServer());

      if (!config) return false;

      applyConfig(config);
      return true;
    } catch {
      return false;
    } finally {
      starting = null;
    }
  })();

  return starting;
}

const builtIn = configFromEnv();

if (builtIn) {
  applyConfig(builtIn);
}

export default app;
