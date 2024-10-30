import localFont from "next/font/local";
import "../globals.css";
import { getMessages } from "next-intl/server";
import {} from "../";

import { NextIntlClientProvider } from "next-intl";

import FooterEncrypted from "@/shared/FooterEncrypted/FooterEncrypted";
import DashboardHeader from "@/shared/components/DashboardHeader";
import EncryptedHeader from "@/shared/components/EncryptedHeader";
import { usePathname } from "next/navigation";
import CurrentHeader from "@/shared/CurrentHeader";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  const userLogged = false;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <CurrentHeader />
          {children}
          <FooterEncrypted />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
