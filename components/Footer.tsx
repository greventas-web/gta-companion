import Link from "next/link";
import { X, type LucideProps } from "lucide-react";

import SiteLogo from "@/components/SiteLogo";
import SubscribeForm from "@/components/SubscribeForm";
import { IMAGE_CREDIT, SITE, SOCIAL_PROFILES } from "@/lib/site";

const socialIcons = {
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
  X,
  Reddit: RedditIcon,
} as const;

const socialLinks = SOCIAL_PROFILES.map((profile) => ({
  ...profile,
  icon: socialIcons[profile.label],
}));

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-[1700px] px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
          <div>
            <Link href="/" aria-label="GTA Companion" className="inline-flex items-center">
              <SiteLogo large />
            </Link>

            <p className="mt-6 max-w-[360px] text-lg leading-8 text-zinc-400">
              {SITE.slogan}. An unofficial fan site, not affiliated with
              Rockstar Games or Take-Two.
            </p>

            <nav aria-label="Social links" className="mt-8 space-y-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="flex items-center gap-2 text-zinc-400 transition hover:text-pink-400"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">
              <Link href="/" className="block text-zinc-400 transition hover:text-pink-400">
                Home
              </Link>

              <Link href="/gta-6-launch" className="block text-zinc-400 transition hover:text-pink-400">
                Launch hub
              </Link>

              <Link href="/news" className="block text-zinc-400 transition hover:text-pink-400">
                News
              </Link>

              <Link href="/media" className="block text-zinc-400 transition hover:text-pink-400">
                Media
              </Link>

              <Link href="/timeline" className="block text-zinc-400 transition hover:text-pink-400">
                Timeline
              </Link>

              <Link href="/launch" className="block text-zinc-400 transition hover:text-pink-400">
                Editions
              </Link>

              <Link href="/about" className="block text-zinc-400 transition hover:text-pink-400">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Explore
            </h3>

            <div className="space-y-4">
              <Link href="/vehicles" className="block text-zinc-400 transition hover:text-pink-400">
                Vehicles
              </Link>

              <Link href="/characters" className="block text-zinc-400 transition hover:text-pink-400">
                Characters
              </Link>

              <Link href="/locations" className="block text-zinc-400 transition hover:text-pink-400">
                Locations
              </Link>

              <Link href="/guides" className="block text-zinc-400 transition hover:text-pink-400">
                Guides
              </Link>

              <Link href="/money-methods" className="block text-zinc-400 transition hover:text-pink-400">
                Money
              </Link>

              <Link href="/fastest-cars" className="block text-zinc-400 transition hover:text-pink-400">
                Fastest Cars
              </Link>

              <Link href="/map-locations" className="block text-zinc-400 transition hover:text-pink-400">
                Map Locations
              </Link>

              <Link href="/cheats" className="block text-zinc-400 transition hover:text-pink-400">
                Cheats
              </Link>

              <Link href="/radio" className="block text-zinc-400 transition hover:text-pink-400">
                Radio
              </Link>

              <Link href="/faq" className="block text-zinc-400 transition hover:text-pink-400">
                FAQ
              </Link>

              <Link href="/contact" className="block text-zinc-400 transition hover:text-pink-400">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Stay Updated
            </h3>

            <p className="mb-6 text-zinc-400">
              Get fan-site updates. This is not a Rockstar mailing list.
            </p>

            <SubscribeForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row">
          <div>
            © 2026 GTA Companion. Unofficial fan project. Not affiliated with, endorsed, or connected to Rockstar Games or Take-Two Interactive. {IMAGE_CREDIT}.
          </div>

          <div className="flex gap-8">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/cookies" className="transition hover:text-white">
              Cookie Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RedditIcon({ size = 16, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="14" r="7" />
      <circle cx="9" cy="13.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M9.5 16.2c.8.7 1.6 1 2.5 1s1.7-.3 2.5-1" />
      <path d="M15.5 9.2 16.8 5.8" />
      <circle cx="18.2" cy="5.2" r="1.2" />
      <path d="M7.2 9.4a2.2 2.2 0 1 1 2.4-3.2" />
      <path d="M16.8 9.4a2.2 2.2 0 1 0-2.4-3.2" />
    </svg>
  );
}

function InstagramIcon({ size = 16, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function YouTubeIcon({ size = 16, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}