import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HomeContainer({
  children,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6">
      {children}
    </div>
  );
}