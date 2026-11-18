export {};

type GtaInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
};

declare global {
  interface Window {
    __gtaInstallPrompt?: GtaInstallPromptEvent;
  }
}
