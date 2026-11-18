"use client";

import { useCallback, useSyncExternalStore } from "react";

import { INSTALL_DISMISS_KEY } from "@/lib/pwa";

export type InstallOutcome = "accepted" | "dismissed" | "unavailable";

type Snapshot = {
  installed: boolean;
  ios: boolean;
  dismissed: boolean;
  canPrompt: boolean;
};

const empty: Snapshot = {
  installed: false,
  ios: false,
  dismissed: false,
  canPrompt: false,
};

let snapshot: Snapshot = empty;
let forcedDismiss = false;
let acceptedInstall = false;
const listeners = new Set<() => void>();
let displayMode: MediaQueryList | null = null;

function isStandalone() {
  const nav = navigator as Navigator & { standalone?: boolean };
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    nav.standalone === true
  );
}

function isIosDevice() {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}

function readDismissed() {
  try {
    return localStorage.getItem(INSTALL_DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function readSnapshot(): Snapshot {
  if (typeof window === "undefined") return empty;
  return {
    installed: acceptedInstall || isStandalone(),
    ios: isIosDevice(),
    dismissed: forcedDismiss || readDismissed(),
    canPrompt: Boolean(window.__gtaInstallPrompt),
  };
}

function sameSnapshot(left: Snapshot, right: Snapshot) {
  return (
    left.installed === right.installed &&
    left.ios === right.ios &&
    left.dismissed === right.dismissed &&
    left.canPrompt === right.canPrompt
  );
}

function publish() {
  const next = readSnapshot();
  if (sameSnapshot(snapshot, next)) return;
  snapshot = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    window.addEventListener("gta-install-prompt", publish);
    window.addEventListener("appinstalled", publish);
    displayMode = window.matchMedia("(display-mode: standalone)");
    displayMode.addEventListener("change", publish);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("gta-install-prompt", publish);
      window.removeEventListener("appinstalled", publish);
      displayMode?.removeEventListener("change", publish);
      displayMode = null;
    }
  };
}

function getSnapshot() {
  const next = readSnapshot();
  if (!sameSnapshot(snapshot, next)) snapshot = next;
  return snapshot;
}

function getServerSnapshot() {
  return empty;
}

function subscribeMounted() {
  return () => undefined;
}

function rememberDismissal() {
  forcedDismiss = true;
  try {
    localStorage.setItem(INSTALL_DISMISS_KEY, "1");
  } catch {
    // Private mode can block storage. forcedDismiss still hides the banner.
  }
}

export function useInstallPrompt() {
  const ready = useSyncExternalStore(subscribeMounted, () => true, () => false);
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const dismiss = useCallback(() => {
    rememberDismissal();
    publish();
  }, []);

  const promptInstall = useCallback(async (): Promise<InstallOutcome> => {
    const event = window.__gtaInstallPrompt;
    if (!event) return "unavailable";
    try {
      const choice = event.userChoice;
      await event.prompt();
      const result = await choice;
      window.__gtaInstallPrompt = undefined;
      if (result.outcome === "accepted") {
        acceptedInstall = true;
        rememberDismissal();
      }
      publish();
      return result.outcome;
    } catch {
      window.__gtaInstallPrompt = undefined;
      publish();
      return "unavailable";
    }
  }, []);

  return {
    ready,
    installed: ready && state.installed,
    ios: ready && state.ios,
    dismissed: ready && state.dismissed,
    canPrompt: ready && state.canPrompt,
    dismiss,
    promptInstall,
  };
}
