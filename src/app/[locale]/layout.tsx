import localFont from "next/font/local";
import "../globals.css";
import { getMessages } from "next-intl/server";
import {} from "../";

import { NextIntlClientProvider } from "next-intl";
import HeaderEncrypted from "@/shared/components/HeaderEncrypted";
import FooterEncrypted from "@/shared/FooterEncrypted/FooterEncrypted";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <HeaderEncrypted />
          {children}
          <FooterEncrypted />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
