'use client';

import { usePathname } from 'next/navigation';
import CurrentHeader from "@/shared/CurrentHeader";
import FooterEncrypted from "@/shared/FooterEncrypted/FooterEncrypted";

export default function GlobalHeaderFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname.includes("/home");

  return (
    <>
      {!isHomePage && <CurrentHeader />}
      {children}
      {!isHomePage && <FooterEncrypted />}
    </>
  );
}
