import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Altitudo - Noleggio Ferrari 296 GTS",
  description: "Vivi l'adrenalina, guida l'esclusività. Noleggio Ferrari 296 GTS per eventi, matrimoni, shooting e compleanni.",
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
      <head>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N5WPQVDH');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '950155784247081');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=950155784247081&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5WPQVDH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <SiteFooter />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/393453096645"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.76a11.7 11.7 0 0 0 5.7 1.5h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.34ZM12.07 21.1h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.2-3.78 1.04 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.55-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7.01 2.9a9.85 9.85 0 0 1 2.92 7.02c0 5.47-4.45 9.92-9.9 9.92Zm5.72-7.4c-.31-.16-1.83-.9-2.12-1.01-.29-.11-.5-.16-.71 .16-.21 .31-.81 1-.99 1.21-.18 .21-.36 .24-.67 .08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48 .14-.64.14-.14 .31-.36 .47-.54.16-.18 .21-.31 .31-.52.1-.21 .05-.39-.03-.54-.08-.16-.71-1.73-.98-2.37-.26-.64-.53-.55-.71-.55-.18 0-.39-.03-.6-.03-.21 0-.55 .08-.84 .39-.29 .31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.04 1.28 3.24.16 .21 2.2 3.36 5.33 4.71.75 .32 1.33 .51 1.78 .66.75 .24 1.43 .21 1.97 .13.6-.09 1.83-.75 2.09-1.48.26-.73 .26-1.36 .18-1.49-.08-.13-.29-.21-.6-.37Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
