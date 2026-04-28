import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noleggio Ferrari per Matrimonio | Ingresso da Sogno – Altitudo",
  description:
    "Rendi indimenticabile il tuo matrimonio con la Ferrari 296 GTS. Arrivo degli sposi, foto esclusive, autista disponibile. Noleggio Ferrari per matrimoni con servizio personalizzato.",
  keywords: [
    "noleggio Ferrari matrimonio",
    "Ferrari per matrimonio",
    "auto sposi lusso",
    "noleggio supercar matrimonio",
    "Ferrari per cerimonia",
    "auto lusso per sposi",
    "Ferrari matrimonio con autista",
  ],
  alternates: {
    canonical: "/eventi/matrimonio",
  },
  openGraph: {
    title: "Noleggio Ferrari per Matrimonio | Altitudo Luxury Rent",
    description:
      "Un'auto. Una promessa. Un sogno su quattro ruote. Ferrari 296 GTS per il giorno più importante della tua vita.",
    url: "https://altitudo.club/eventi/matrimonio",
    type: "website",
    images: [
      {
        url: "https://altitudo.club/images/ferrari_home_scritte.png",
      },
    ],
  },
};

export default function MatrimonioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
