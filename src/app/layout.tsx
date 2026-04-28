import type { Metadata } from "next";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";
import CookieBanner from "@/components/CookieBanner";
import ConditionalWelcomePopup from "@/components/ConditionalWelcomePopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://altitudo.club"),
  title: "Noleggio Ferrari 296 GTS | Altitudo Luxury Rent – Da 150€",
  description:
    "Noleggia la Ferrari 296 GTS con Altitudo Luxury Rent. 830 CV, tetto retrattile, disponibile a ore, giornata o weekend. Ideale per matrimoni, compleanni, shooting. Prenota ora.",
  keywords: [
    "noleggio Ferrari 296 GTS",
    "noleggio supercar lusso",
    "noleggio Ferrari Milano",
    "noleggio Ferrari matrimonio",
    "noleggio Ferrari compleanno",
    "Ferrari a ore",
    "Ferrari per shooting",
    "noleggio auto lusso Italia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Noleggio Ferrari 296 GTS | Altitudo Luxury Rent",
    description:
      "Vivi l'emozione di guidare una Ferrari 296 GTS. Noleggio a ore, giornata o weekend. A partire da 150€.",
    url: "https://altitudo.club/",
    type: "website",
    images: [
      {
        url: "https://altitudo.club/images/ferrari_home_scritte.png",
      },
    ],
  },
  icons: {
    icon: "/images/logo_altitudo.png",
  },
  other: {
    "facebook-domain-verification": "r4cv5e60aobemy63ukgtztl89khf6g",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Altitudo Luxury Rent",
  description:
    "Noleggio Ferrari 296 GTS a ore, giornata e weekend in Italia. Ideale per matrimoni, compleanni, shooting fotografici ed eventi esclusivi.",
  url: "https://altitudo.club",
  logo: "https://altitudo.club/images/logo_altitudo_esteso.png",
  image: "https://altitudo.club/images/ferrari_home_scritte.png",
  telephone: "+393453096645",
  email: "info@altitudo.club",
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [
    "https://www.instagram.com/altitudo.luxury.rent/",
    "https://www.facebook.com/profile.php?id=61579178040735",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pacchetti noleggio Ferrari 296 GTS",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Noleggio orario Ferrari 296 GTS",
        price: "150",
        priceCurrency: "EUR",
        description:
          "Noleggio a ore. Ideale per shooting, regali o ingressi esclusivi.",
      },
      {
        "@type": "Offer",
        name: "Noleggio giornaliero Ferrari 296 GTS",
        price: "1400",
        priceCurrency: "EUR",
        description:
          "Intera giornata con Ferrari 296 GTS. Perfetta per eventi e matrimoni.",
      },
      {
        "@type": "Offer",
        name: "Noleggio weekend Ferrari 296 GTS",
        price: "3400",
        priceCurrency: "EUR",
        description:
          "Weekend completo con Ferrari 296 GTS. Due giorni di emozione.",
      },
      {
        "@type": "Offer",
        name: "Noleggio settimanale Ferrari 296 GTS",
        price: "9800",
        priceCurrency: "EUR",
        description:
          "Sette giorni con Ferrari 296 GTS. Per eventi estesi o esperienze prolungate.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <LayoutChrome />
        <CookieBanner />
        <ConditionalWelcomePopup />
      </body>
    </html>
  );
}
