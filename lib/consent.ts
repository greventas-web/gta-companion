export const CONSENT_COOKIE = "gta_consent";
export const CONSENT_GEO_COOKIE = "gta_geo";
export const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 180;
export const OPEN_CONSENT_EVENT = "gta-open-cookie-settings";

/**
 * EEA + UK + Switzerland. Google requires a certified TCF CMP for
 * personalized ads in these regions, and Consent Mode v2 defaults
 * should be denied here until the visitor chooses.
 * With NEXT_PUBLIC_USE_GOOGLE_CMP=1, Google's CMP collects consent, and
 * the defaults script still sets EEA/UK/CH to denied until the CMP
 * updates them (Consent Mode v2 "advanced").
 * https://support.google.com/adsense/answer/13554116
 * https://developers.google.com/tag-platform/security/guides/consent
 */
export const CONSENT_REGIONS = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "NL",
  "NO",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "GB",
  "CH",
] as const;

export type ConsentChoice = {
  analytics: boolean;
  ad: boolean;
};

export const CONSENT_ACCEPTED: ConsentChoice = { analytics: true, ad: true };
export const CONSENT_REJECTED: ConsentChoice = { analytics: false, ad: false };

type ConsentState = "granted" | "denied";

type GtagConsentUpdate = {
  ad_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
  analytics_storage: ConsentState;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "consent" | "js" | "config" | "event" | "set",
      action: string | Date | Record<string, unknown>,
      params?: GtagConsentUpdate | Record<string, unknown>,
    ) => void;
    googlefc?: {
      showRevocationMessage?: () => void;
      callbackQueue?: unknown[];
    };
  }
}

export function serializeConsent(choice: ConsentChoice): string {
  return `v1:${choice.analytics ? "1" : "0"}:${choice.ad ? "1" : "0"}`;
}

export function parseConsentValue(raw: string): ConsentChoice | null {
  const parts = raw.split(":");
  if (
    parts.length !== 3 ||
    parts[0] !== "v1" ||
    (parts[1] !== "0" && parts[1] !== "1") ||
    (parts[2] !== "0" && parts[2] !== "1")
  ) {
    return null;
  }

  return {
    analytics: parts[1] === "1",
    ad: parts[2] === "1",
  };
}

export function readConsentCookie(): ConsentChoice | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`),
  );
  if (!match) return null;
  try {
    return parseConsentValue(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

export function writeConsentCookie(choice: ConsentChoice): void {
  if (typeof document === "undefined") return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(serializeConsent(choice))}; Path=/; Max-Age=${CONSENT_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function readConsentGeo(): "EEA" | "OTHER" | "UNKNOWN" {
  if (typeof document === "undefined") return "UNKNOWN";
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_GEO_COOKIE}=([^;]*)`),
  );
  const value = match ? decodeURIComponent(match[1]) : "";
  if (value === "EEA" || value === "OTHER") return value;
  return "UNKNOWN";
}

export function isGoogleCmpEnabled(): boolean {
  const flag = process.env.NEXT_PUBLIC_USE_GOOGLE_CMP?.trim().toLowerCase();
  return flag === "1" || flag === "true";
}

export function updateGtagConsent(choice: ConsentChoice): void {
  const ad: ConsentState = choice.ad ? "granted" : "denied";
  const analytics: ConsentState = choice.analytics ? "granted" : "denied";
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("consent", "update", {
    ad_storage: ad,
    ad_user_data: ad,
    ad_personalization: ad,
    analytics_storage: analytics,
  });
}

export function applyConsent(choice: ConsentChoice): void {
  writeConsentCookie(choice);
  updateGtagConsent(choice);
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  const show = window.googlefc?.showRevocationMessage;
  if (typeof show === "function") {
    show();
    return;
  }
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

export const CONSENT_DEFAULTS_SCRIPT = `(function(){window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.gtag=gtag;gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",wait_for_update:500,region:${JSON.stringify([...CONSENT_REGIONS])}});gtag("consent","default",{ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",analytics_storage:"granted"});try{var m=document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=([^;]*)/);if(!m)return;var p=decodeURIComponent(m[1]).split(":");if(p[0]!=="v1"||(p[1]!=="0"&&p[1]!=="1")||(p[2]!=="0"&&p[2]!=="1"))return;var ad=p[2]==="1"?"granted":"denied";gtag("consent","update",{ad_storage:ad,ad_user_data:ad,ad_personalization:ad,analytics_storage:p[1]==="1"?"granted":"denied"});}catch(e){}})();`;
