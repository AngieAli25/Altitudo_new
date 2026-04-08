import type { Metadata } from "next";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";
import CookieBanner from "@/components/CookieBanner";
import ConditionalWelcomePopup from "@/components/ConditionalWelcomePopup";

export const metadata: Metadata = {
  title: "Altitudo - Noleggio Ferrari 296 GTS",
  description: "Vivi l'adrenalina, guida l'esclusività. Noleggio Ferrari 296 GTS per eventi, matrimoni, shooting e compleanni.",
  icons: {
    icon: "/images/logo_altitudo.png",
  },
  other: {
    "facebook-domain-verification": "r4cv5e60aobemy63ukgtztl89khf6g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        {children}
        <LayoutChrome />
        <ConditionalWelcomePopup />
        <CookieBanner />
      </body>
    </html>
  );
}
