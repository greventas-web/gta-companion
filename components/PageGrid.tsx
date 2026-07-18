import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function PageGrid({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
}