"use client";

import { useEffect, useState } from "react";

import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import { db, ensureFirebase } from "@/lib/firebase";
import { useAuth } from "@/components/auth/AuthProvider";

export function useFavorites() {
  const { user } = useAuth();

  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    let unsubscribe = () => {};
    let cancelled = false;

    ensureFirebase().then((ready) => {
      if (cancelled || !ready || !db) {
        setFavorites([]);
        setLoading(false);
        return;
      }

      const ref = doc(db, "users", user.uid);

      unsubscribe = onSnapshot(ref, (snapshot) => {
        if (!snapshot.exists()) {
          setFavorites([]);
          setLoading(false);
          return;
        }

        const data = snapshot.data();

        setFavorites(data.favorites ?? []);

        setLoading(false);
      });
    });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [user]);

  async function toggleFavorite(id: string) {
    if (!user) return;

    const ready = await ensureFirebase();

    if (!ready || !db) return;

    const ref = doc(db, "users", user.uid);

    if (favorites.includes(id)) {
      await updateDoc(ref, {
        favorites: arrayRemove(id),
      });
    } else {
      await updateDoc(ref, {
        favorites: arrayUnion(id),
      });
    }
  }

  return {
    favorites,
    loading,
    toggleFavorite,
  };
}