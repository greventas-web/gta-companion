"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";

import AccountPrompt from "@/components/account/AccountPrompt";
import PageTitle from "@/components/PageTitle";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  Badge,
  Button,
  Card,
  Container,
  Input,
  Section,
} from "@/components/ui";
import { useUserProfile } from "@/hooks/useUserProfile";
import { logoutUser } from "@/lib/auth";
import {
  updateDisplayName,
  updateUserSettings,
} from "@/lib/firestore";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-2xl bg-pink-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-pink-500 disabled:hover:shadow-none";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/60 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500 hover:bg-zinc-900 hover:text-pink-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:border-zinc-700 disabled:hover:text-white";

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const { profile, loading: profileLoading } = useUserProfile();
  const router = useRouter();

  const uid = user?.uid ?? null;
  const [draftUid, setDraftUid] = useState<string | null>(uid);
  const [draft, setDraft] = useState<string | null>(null);
  const [pending, setPending] = useState<
    "name" | "notifications" | "signout" | null
  >(null);
  const [error, setError] = useState("");
  const pendingRef = useRef(false);

  if (draftUid !== uid) {
    setDraftUid(uid);
    setDraft(null);
    setError("");
    setPending(null);
    pendingRef.current = false;
  }

  if (loading || (user && profileLoading)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-white">
        <p className="text-zinc-400">Loading...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-background text-white">
        <Section>
          <Container>
            <Badge>Account Settings</Badge>

            <PageTitle
              title="Settings"
              description="Sign in to manage your display name and notifications."
            />

            <AccountPrompt
              title="Sign in to open settings"
              description="Accounts are live. Sign in to update your display name and choose whether you get notifications."
            />
          </Container>
        </Section>
      </main>
    );
  }

  const account = user;
  const displayName =
    draft ?? profile?.displayName ?? account.displayName ?? "";
  const notifications = profile?.settings?.notifications ?? true;
  const email = account.email || profile?.email || "No email on this account";
  const busy = pending !== null;

  async function handleSaveName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = displayName.trim();

    if (!name) {
      setError("Enter a display name.");
      return;
    }

    if (pendingRef.current) return;

    pendingRef.current = true;
    setPending("name");
    setError("");

    try {
      await updateDisplayName(account.uid, name);
      setDraft(name);

      try {
        await updateProfile(account, { displayName: name });
      } catch {
        setError("Name saved, but the sign-in profile could not be updated.");
      }
    } catch {
      setError("Could not save your display name.");
    } finally {
      pendingRef.current = false;
      setPending(null);
    }
  }

  async function handleNotifications() {
    if (pendingRef.current) return;

    const nextValue = !notifications;

    pendingRef.current = true;
    setPending("notifications");
    setError("");

    try {
      await updateUserSettings(account.uid, { notifications: nextValue });
    } catch {
      setError("Could not update notifications.");
    } finally {
      pendingRef.current = false;
      setPending(null);
    }
  }

  async function handleSignOut() {
    if (pendingRef.current) return;

    pendingRef.current = true;
    setPending("signout");
    setError("");

    try {
      await logoutUser();
      router.push("/");
    } catch {
      pendingRef.current = false;
      setError("Could not sign out.");
      setPending(null);
    }
  }

  return (
    <main className="min-h-screen bg-background text-white">
      <Section>
        <Container>
          <Badge>Account Settings</Badge>

          <PageTitle
            title="Settings"
            description="Update your display name, notifications, and account session."
          />

          {error ? (
            <div
              role="alert"
              className="mb-8 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300"
            >
              {error}
            </div>
          ) : null}

          <div className="space-y-8">
            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
              <h2 className="text-3xl font-black">Account</h2>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Email
              </p>
              <p className="mt-2 text-lg text-zinc-300">{email}</p>

              <form onSubmit={handleSaveName} className="mt-8 space-y-6">
                <label className="block">
                  <span className="mb-3 block text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Display name
                  </span>
                  <Input
                    placeholder="Display name"
                    value={displayName}
                    onChange={setDraft}
                  />
                </label>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="submit"
                    disabled={busy || !displayName.trim()}
                    className={primaryButtonClass}
                  >
                    {pending === "name" ? "Saving..." : "Save name"}
                  </button>

                  <Button href="/profile" variant="secondary">
                    View profile
                  </Button>
                </div>
              </form>
            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
              <h2 className="text-3xl font-black">Notifications</h2>

              <p className="mt-4 text-zinc-400">
                News alerts and account updates for this profile.
              </p>

              <div className="mt-8 flex items-center justify-between gap-6">
                <p className="text-lg text-zinc-300">
                  {notifications ? "On" : "Off"}
                </p>

                <button
                  type="button"
                  role="switch"
                  aria-checked={notifications}
                  aria-label="Notifications"
                  disabled={busy}
                  onClick={handleNotifications}
                  className={`relative h-8 w-14 shrink-0 rounded-full transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    notifications ? "bg-pink-500" : "bg-zinc-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                      notifications ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </Card>

            <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-8">
              <h2 className="text-3xl font-black">Sign out</h2>

              <p className="mt-4 text-zinc-400">
                End this session on this device.
              </p>

              <button
                type="button"
                onClick={handleSignOut}
                disabled={busy}
                className={`mt-8 ${secondaryButtonClass}`}
              >
                {pending === "signout" ? "Signing out..." : "Sign out"}
              </button>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
