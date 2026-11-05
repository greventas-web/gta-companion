"use client";

import type { User } from "firebase/auth";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let unsubscribe = () => {};
    let cancelled = false;

    async function start() {
      const { auth, db } = await import("@/lib/firebase");

      if (cancelled) return;

      if (!auth || !db) {
        setUser(null);
        setLoading(false);
        return;
      }

      const { onAuthStateChanged } = await import("firebase/auth");
      const { doc, getDoc, serverTimestamp, setDoc } = await import(
        "firebase/firestore"
      );

      if (cancelled) return;

      unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser);

        if (currentUser) {
          const ref = doc(db, "users", currentUser.uid);
          const snapshot = await getDoc(ref);

          if (!snapshot.exists()) {
            await setDoc(ref, {
              uid: currentUser.uid,
              displayName: currentUser.displayName ?? "",
              email: currentUser.email ?? "",
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
        }

        setLoading(false);
      });
    }

    start();

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}