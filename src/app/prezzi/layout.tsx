import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prezzi Noleggio Ferrari 296 GTS | Da 150€ all'ora – Altitudo",
  description:
    "Scopri tutti i pacchetti di noleggio Ferrari 296 GTS: orario da 150€, giornaliero da 1.400€, weekend da 3.400€, settimana da 9.800€. Preventivo personalizzato senza impegno.",
  keywords: [
    "prezzi noleggio Ferrari",
    "Ferrari 296 GTS costo",
    "noleggio Ferrari giornaliero",
    "noleggio Ferrari weekend",
    "Ferrari a ore prezzo",
    "noleggio supercar tariffe",
  ],
  alternates: {
    canonical: "/prezzi",
  },
  openGraph: {
    title: "Prezzi Noleggio Ferrari 296 GTS | Altitudo Luxury Rent",
    description:
      "Pacchetti flessibili per ogni esigenza: orario, giornaliero, weekend o settimana. Ferrari 296 GTS da 150€.",
    url: "https://altitudo.club/prezzi",
    type: "website",
    images: [
      {
        url: "https://altitudo.club/images/ferrari_home_scritte.png",
      },
    ],
  },
};

export default function PrezziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
