import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Noleggio Ferrari per Compleanno | Regala un'Esperienza Unica – Altitudo",
  description:
    "Festeggia il tuo compleanno al volante di una Ferrari 296 GTS. Noleggio a ore, giornata o weekend: il regalo perfetto per vivere 830 CV di pura emozione. Prenota ora.",
  keywords: [
    "noleggio Ferrari compleanno",
    "regalo Ferrari compleanno",
    "Ferrari per festeggiare",
    "regalo supercar lusso",
    "esperienza Ferrari compleanno",
    "noleggio auto lusso compleanno",
  ],
  alternates: {
    canonical: "/eventi/compleanno",
  },
  openGraph: {
    title: "Noleggio Ferrari per Compleanno | Altitudo Luxury Rent",
    description:
      "Spegni le candeline. Accendi il motore. Ferrari 296 GTS a ore o per l'intera giornata. Il regalo che non dimenticherai.",
    url: "https://altitudo.club/eventi/compleanno",
    type: "website",
    images: [
      {
        url: "https://altitudo.club/images/ferrari_home_scritte.png",
      },
    ],
  },
};

export default function CompleannoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
