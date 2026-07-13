import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[1800px] px-6 py-24 sm:px-8 lg:px-14 xl:px-20">
      {children}
    </div>
  );
}