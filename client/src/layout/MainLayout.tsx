import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen max-w-full pl-4 pr-4 sm:pl-8 sm:pr-8">
      {children}
    </div>
  );
}
