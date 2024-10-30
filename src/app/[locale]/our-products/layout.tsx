"use client";

import { ReactNode } from "react";
import BannerOurSims from "./components/BannerOurProducts";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <BannerOurSims />
      <div className="p-8">{children}</div>
    </div>
  );
}
