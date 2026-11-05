import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-44 pb-28 sm:px-10 lg:px-14">
      {children}
    </div>
  );
}