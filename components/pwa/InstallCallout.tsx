"use client";

import Image from "next/image";

import { useInstallPrompt } from "@/hooks/useInstallPrompt";

export default function InstallCallout() {
  const { ready, installed, ios, canPrompt, promptInstall } = useInstallPrompt();

  return (
    <div
      data-testid="install-callout"
      className="flex flex-col gap-4 rounded-[28px] border border-violet-300/25 bg-black/40 p-4 sm:flex-row sm:items-center"
    >
      <Image
        src="/logo/logo-night.jpg"
        alt=""
        width={72}
        height={72}
        className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-full object-cover ring-1 ring-white/20"
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">
          {installed
            ? "GTA Companion is installed on this device."
            : ios
              ? "On iPhone and iPad, add it from Safari."
              : "Install GTA Companion on this device."}
        </p>
        <p className="mt-1 text-sm leading-6 text-zinc-400">
          {installed
            ? "Open it from your home screen. Pages you have already opened stay available without a connection."
            : "The steps for iPhone, Android, and PC are below. Unofficial fan app, not affiliated with Rockstar Games."}
        </p>
      </div>
      {ready && canPrompt && !installed ? (
        <button
          type="button"
          onClick={() => void promptInstall()}
          className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#6d28d9] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7c3aed]"
        >
          Install the app
        </button>
      ) : null}
    </div>
  );
}
