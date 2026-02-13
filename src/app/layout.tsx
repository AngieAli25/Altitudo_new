import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altitudo - Noleggio Ferrari 296 GTS",
  description: "Vivi l'adrenalina, guida l'esclusività. Noleggio Ferrari 296 GTS per eventi, matrimoni, shooting e compleanni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
