"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/components/auth/AuthProvider";
import { subscribeToUser } from "@/lib/firestore";
import type { UserProfile } from "@/types/user";

export function useUserProfile() {
  const { user } = useAuth();
  const uid = user?.uid ?? null;

  const [trackedUid, setTrackedUid] = useState<string | null>(uid);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(uid !== null);

  if (uid !== trackedUid) {
    setTrackedUid(uid);
    setProfile(null);
    setLoading(uid !== null);
  }

  useEffect(() => {
    if (!user) return;

    const unsubscribe = subscribeToUser(user.uid, (data) => {
      setProfile(data);
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  return {
    profile,
    loading,
  };
}