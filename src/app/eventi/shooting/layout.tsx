import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noleggio Ferrari per Shooting Fotografico e Videoclip | Altitudo",
  description:
    "Noleggia la Ferrari 296 GTS per shooting di moda, campagne pubblicitarie, videoclip musicali e produzioni branded. L'auto che non ha bisogno di effetti speciali. Preventivo rapido.",
  keywords: [
    "noleggio Ferrari shooting fotografico",
    "Ferrari per videoclip",
    "auto lusso set fotografico",
    "noleggio supercar pubblicità",
    "Ferrari per campagna pubblicitaria",
    "noleggio Ferrari produzione video",
  ],
  alternates: {
    canonical: "/eventi/shooting",
  },
  openGraph: {
    title: "Noleggio Ferrari per Shooting e Videoclip | Altitudo Luxury Rent",
    description:
      "La Ferrari 296 GTS trasforma ogni scatto in un capolavoro. Per shooting di moda, spot, videoclip e produzioni branded.",
    url: "https://altitudo.club/eventi/shooting",
    type: "website",
    images: [
      {
        url: "https://altitudo.club/images/ferrari_home_scritte.png",
      },
    ],
  },
};

export default function ShootingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
