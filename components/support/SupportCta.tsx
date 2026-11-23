import { Heart } from "lucide-react";
import { SUPPORT_URL } from "@/lib/site";

type Props = { placement: "home" | "map" | "guide"; className?: string };

/** In-page Ko-fi card. Never placed directly next to an ad unit. */
export default function SupportCta({ placement, className = "" }: Props) {
  return (
    <aside
      aria-label="Support GTA Companion"
      data-testid={`support-cta-${placement}`}
      className={`mx-auto mt-10 w-full max-w-3xl rounded-[24px] border border-pink-400/25 bg-pink-500/[0.06] p-5 sm:p-6 ${className}`}
    >
      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-pink-300">Support GTA Companion</p>
      <p className="mt-2 text-base font-semibold leading-7 text-zinc-100 sm:text-lg">
        GTA Companion is an unofficial fan project. If the map and guides
        helped you, you can back the project on Ko-fi.
      </p>
      <a
        href={`${SUPPORT_URL}?utm_source=site&utm_medium=cta&utm_campaign=${placement}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-2xl bg-pink-500 px-5 py-2.5 text-sm font-black text-white transition hover:bg-pink-400"
      >
        <Heart size={16} aria-hidden="true" />
        Support on Ko-fi
      </a>
    </aside>
  );
}
