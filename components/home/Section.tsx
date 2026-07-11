import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`relative overflow-hidden py-28 md:py-32 xl:py-36 ${className}`}
    >
      {children}
    </section>
  );
}