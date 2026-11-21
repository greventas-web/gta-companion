import type { ComponentType } from "react";
import { Coffee, type LucideProps } from "lucide-react";

import { SOCIAL_PROFILES, type SocialProfileId } from "@/lib/site";

const socialIcons = {
  youtube: YouTubeIcon,
  discord: DiscordIcon,
  kofi: Coffee,
} satisfies Record<SocialProfileId, ComponentType<LucideProps>>;

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export default function SocialLinks({
  className,
  linkClassName = "inline-flex items-center gap-2 text-zinc-400 transition hover:text-pink-400",
}: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className={className}>
      {SOCIAL_PROFILES.map((profile) => {
        const Icon = socialIcons[profile.id];

        return (
          <a
            key={profile.id}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            title={profile.title}
            className={linkClassName}
          >
            <Icon size={16} aria-hidden="true" className="shrink-0" />
            {profile.label}
          </a>
        );
      })}
    </nav>
  );
}

function BrandIcon({ size = 16, children, ...props }: LucideProps) {
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
      {children}
    </svg>
  );
}

function YouTubeIcon(props: LucideProps) {
  return (
    <BrandIcon {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </BrandIcon>
  );
}

function DiscordIcon(props: LucideProps) {
  return (
    <BrandIcon {...props}>
      <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M7 16.5c3.5 1 6.5 1 10 0" />
      <path d="M8.5 17c0 1-1.4 3-3.5 3-1.5 0-2.8-1.7-3.5-3-.7-1.7-.5-5.8 1.5-11.5C4.5 4.5 6 4.2 7.5 4l.5 1.5" />
      <path d="M15.5 17c0 1 1.4 3 3.5 3 1.5 0 2.8-1.7 3.5-3 .7-1.7.5-5.8-1.5-11.5C19.5 4.5 18 4.2 16.5 4l-.5 1.5" />
    </BrandIcon>
  );
}
