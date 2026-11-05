"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/components/auth/AuthProvider";
import { subscribeToUser } from "@/lib/firestore";
import type { UserProfile } from "@/types/user";

export function useUserProfile() {
  const { user } = useAuth();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

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