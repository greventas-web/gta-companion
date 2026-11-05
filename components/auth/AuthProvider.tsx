"use client";

import {
  onAuthStateChanged,
  User,
} from "firebase/auth";

import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { auth, db } from "@/lib/firebase";

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
    if (!auth || !db) {
      setUser(null);
      setLoading(false);
      return;
    }

    const firebaseAuth = auth;
    const firestore = db;

    const unsubscribe =
      onAuthStateChanged(
        firebaseAuth,
        async (currentUser) => {
          setUser(currentUser);

          if (currentUser) {
            const ref = doc(
              firestore,
              "users",
              currentUser.uid
            );

            const snapshot =
              await getDoc(ref);

            if (!snapshot.exists()) {
              await setDoc(ref, {
                uid: currentUser.uid,

                displayName:
                  currentUser.displayName ??
                  "",

                email:
                  currentUser.email ??
                  "",

                role: "member",

                createdAt:
                  serverTimestamp(),

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
        }
      );

    return unsubscribe;
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