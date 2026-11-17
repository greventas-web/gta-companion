import { Heart } from "lucide-react";

import { SUPPORT_URL } from "@/lib/site";

export { SUPPORT_URL };

type SupportLinkProps = {
  className?: string;
  onClick?: () => void;
};

export default function SupportLink({ className, onClick }: SupportLinkProps) {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      <Heart size={14} aria-hidden="true" className="shrink-0" />
      Support us
    </a>
  );
}
