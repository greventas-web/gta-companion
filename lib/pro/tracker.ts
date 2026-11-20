"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { BASIC_MARK_LIMIT, PRO_CHANGE_EVENT, PRO_HINT_KEY } from "@/lib/pro/config";
import type { Marks } from "@/lib/pro/marks";

/**
 * Tap-to-track storage on this device.
 *
 * KEY keeps the original array of done ids, so marks made before Pro still
 * load. META_KEY adds a change time per id so cloud sync can merge devices.
 */
export const TRACK_KEY = "gta-companion-tracked";
const META_KEY = "gta-companion-tracked-meta";
export const TRACK_EVENT = "gta-companion-tracked-change";
export const LIMIT_EVENT = "gta-companion-mark-limit";

function readIds(): Set<string> {
  try {
    const raw = localStorage.getItem(TRACK_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function readMeta(): Marks {
  try {
    const raw = localStorage.getItem(META_KEY);
    const parsed = raw ? (JSON.parse(raw) as Marks) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function save(ids: Set<string>, meta: Marks) {
  try {
    localStorage.setItem(TRACK_KEY, JSON.stringify([...ids]));
    localStorage.setItem(META_KEY, JSON.stringify(meta));
  } catch {
    /* storage full or blocked */
  }
  window.dispatchEvent(new Event(TRACK_EVENT));
}

/** Every mark on this device, including un-marks, for sync. */
export function readLocalMarks(): Marks {
  const meta = readMeta();
  const ids = readIds();
  const out: Marks = { ...meta };
  // Marks saved before timestamps existed count as done at time 0.
  for (const id of ids) {
    if (!out[id]) out[id] = [1, 0];
  }
  return out;
}

/** Replace this device's marks with a merged set from the cloud. */
export function writeLocalMarks(marks: Marks) {
  const ids = new Set(
    Object.entries(marks)
      .filter(([, entry]) => entry[0] === 1)
      .map(([id]) => id)
  );
  save(ids, marks);
}

export function readProHint(): boolean {
  try {
    return localStorage.getItem(PRO_HINT_KEY) === "1";
  } catch {
    return false;
  }
}

export type ToggleResult = "marked" | "unmarked" | "limit";

/**
 * Toggle one id. Without Pro, a new mark past BASIC_MARK_LIMIT is refused
 * and a LIMIT_EVENT is raised so the Pro card can show.
 */
export function toggleMark(id: string): ToggleResult {
  const ids = readIds();
  const meta = readMeta();
  const now = Date.now();
  if (ids.has(id)) {
    ids.delete(id);
    meta[id] = [0, now];
    save(ids, meta);
    return "unmarked";
  }
  if (!readProHint() && ids.size >= BASIC_MARK_LIMIT) {
    window.dispatchEvent(new Event(LIMIT_EVENT));
    return "limit";
  }
  ids.add(id);
  meta[id] = [1, now];
  save(ids, meta);
  return "marked";
}

export function useTracked() {
  const [set, setSet] = useState<Set<string>>(() => new Set());
  useEffect(() => {
    const sync = () => setSet(readIds());
    sync();
    window.addEventListener(TRACK_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(TRACK_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const toggle = useCallback((id: string) => toggleMark(id), []);
  return { set, toggle };
}

function subscribeProHint(onChange: () => void) {
  window.addEventListener(PRO_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(PRO_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Pro flag as last confirmed by the server for this device. Null while rendering on the server. */
export function useProHintState(): boolean | null {
  return useSyncExternalStore(subscribeProHint, readProHint, () => null);
}

export function useProHint(): boolean {
  return useProHintState() === true;
}
