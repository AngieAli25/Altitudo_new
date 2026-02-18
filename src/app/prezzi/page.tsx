"use client";

import { useEffect } from "react";
import TermsConsent from "@/components/TermsConsent";
import DateTimeField from "@/components/DateTimeField";
import SiteHeader from "@/components/SiteHeader";

export default function Prezzi() {
  useEffect(() => {}, []);

  const pricingData = [
    { period: "1 giorno", km: "150 km", priceDay: "€ 1.700", priceTotal: "€ 1.700", priceExtra: "€ 5 / km" },
    { period: "2 giorni", km: "300 km", priceDay: "€ 1.500", priceTotal: "€ 3.000", priceExtra: "€ 5 / km" },
    { period: "5 giorni", km: "750 km", priceDay: "€ 1.200", priceTotal: "€ 6.000", priceExtra: "€ 5 / km" },
    { period: "7 giorni", km: "1.050 km", priceDay: "€ 1.050", priceTotal: "€ 7.350", priceExtra: "€ 5 / km" },
    { period: "1 mese", km: "4.500 km", priceDay: "€ 550", priceTotal: "€ 16.500", priceExtra: "€ 5 / km" },
  ];

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="/images/ferrari_prezzi.png"
            alt="Ferrari 296 GTS"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 96%)'
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-[6vh]">
          <h1 className="font-itc-blair text-white text-[22px] md:text-[32px] lg:text-[38px] leading-[1.2] tracking-tight mb-4 max-w-[900px] uppercase">
            Personalizza la tua esperienza
          </h1>
          <div className="font-aeonik text-white/85 text-[12px] md:text-[13px] lg:text-[16px] leading-[1.45] max-w-[900px]">
            <p className="mb-2">
              Se stai cercando un&apos;esperienza unica ed esclusiva, il nostro servizio di <span className="font-aeonik-bold">noleggio Ferrari</span> è la scelta perfetta. Che sia per un <span className="font-aeonik-bold">compleanno, un matrimonio, uno shooting fotografico o un videoclip</span>, una Ferrari aggiunge stile, potenza ed emozione a ogni occasione.
            </p>
            <p>
              Offriamo la possibilità di noleggiare una Ferrari con diverse formule, in base alle tue esigenze:
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative w-full py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/logo_altitudo.png"
              alt="Altitudo Logo"
              className="w-[40px] lg:w-[50px] h-auto"
            />
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 text-center">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
              <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] leading-tight mb-4">
                noleggio orario
              </h3>
              <p className="font-aeonik-bold text-white text-[14px] mb-1">a partire da:</p>
              <p className="font-aeonik-bold text-white text-[20px] mb-4">150€</p>
              <p className="font-aeonik text-white text-[13px] leading-[1.5]">
                Vuoi assaporare l&apos;adrenalina anche solo per un momento? Ideale per un regalo a effetto, un ingresso esclusivo o uno shooting.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 text-center">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
              <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] leading-tight mb-4">
                intera giornata
              </h3>
              <p className="font-aeonik-bold text-white text-[14px] mb-1">a partire da:</p>
              <div className="font-aeonik text-white text-[14px] mb-4">
                <p>Lun - gio: <span className="font-aeonik-bold">1.400€</span></p>
                <p>Ven - Dom: <span className="font-aeonik-bold">1.900€</span></p>
              </div>
              <p className="font-aeonik text-white text-[13px] leading-[1.5]">
                Una giornata intera con la Ferrari 296 GTS a tua disposizione. Perfetta per eventi, cerimonie o un&apos;intera esperienza da vivere al volante.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 text-center">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
              <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] leading-tight mb-4">
                weekend completo
              </h3>
              <p className="font-aeonik-bold text-white text-[14px] mb-1">a partire da:</p>
              <p className="font-aeonik-bold text-white text-[20px] mb-4">3.400€</p>
              <p className="font-aeonik text-white text-[13px] leading-[1.5]">
                Due giorni di emozione, libertà e presenza scenica. Ideale per chi vuole trasformare un&apos;occasione in un&apos;avventura.
              </p>
            </div>
          </div>

          {/* Full Width Card */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 text-center">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
            <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] leading-tight mb-3">
              settimana completa
            </h3>
            <p className="font-aeonik-bold text-white text-[14px] mb-1">a partire da:</p>
            <p className="font-aeonik-bold text-white text-[20px] mb-3">9.800€</p>
            <p className="font-aeonik text-white text-[13px] leading-[1.5] max-w-[500px] mx-auto">
              Sette giorni di pura potenza. Soluzione perfetta per eventi estesi, progetti creativi o chi vuole semplicemente esagerare.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table Section */}
      <section className="relative w-full py-12 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] text-center mb-12 uppercase">
            noleggio orario
          </h2>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-5 gap-4 pb-4 border-b border-white/30 mb-2">
            <div className="text-center">
              <p className="font-aeonik-bold text-white text-[14px] lg:text-[16px] leading-tight">
                Periodo<br />noleggio
              </p>
            </div>
            <div className="text-center">
              <p className="font-aeonik-bold text-white text-[14px] lg:text-[16px] leading-tight">
                Km<br />inclusi
              </p>
            </div>
            <div className="text-center">
              <p className="font-aeonik-bold text-white text-[14px] lg:text-[16px] leading-tight">
                Prezzo<br />al giorno
              </p>
            </div>
            <div className="text-center">
              <p className="font-aeonik-bold text-white text-[14px] lg:text-[16px] leading-tight">
                Prezzo<br />totale
              </p>
            </div>
            <div className="text-center">
              <p className="font-aeonik-bold text-white text-[14px] lg:text-[16px] leading-tight">
                Prezzo<br />km extra
              </p>
            </div>
          </div>

          {/* Table Rows */}
          {pricingData.map((row, index) => (
            <div key={index} className="py-4 border-b border-white/20">
              {/* Mobile layout: 30% period, 70% data grid 2x2 */}
              <div className="md:hidden flex">
                <div className="w-[30%] pr-3">
                  <p className="font-aeonik-bold text-white text-[15px] leading-tight">
                    {row.period}
                  </p>
                </div>
                <div className="w-[70%]">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[12px]">
                    <span className="text-white/60">Km inclusi</span>
                    <span className="text-white text-right">{row.km}</span>
                    <span className="text-white/60">Prezzo/giorno</span>
                    <span className="text-white text-right">{row.priceDay}</span>
                    <span className="text-white/60">Totale</span>
                    <span className="text-white text-right">{row.priceTotal}</span>
                    <span className="text-white/60">Km extra</span>
                    <span className="text-white text-right">{row.priceExtra}</span>
                  </div>
                </div>
              </div>

              {/* Desktop/tablet layout unchanged */}
              <div className="hidden md:grid grid-cols-5 gap-4">
                <div className="text-center">
                  <p className="font-aeonik text-white text-[14px] lg:text-[16px]">
                    {row.period}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-aeonik text-white text-[14px] lg:text-[16px]">
                    {row.km}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-aeonik text-white text-[14px] lg:text-[16px]">
                    {row.priceDay}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-aeonik text-white text-[14px] lg:text-[16px]">
                    {row.priceTotal}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-aeonik text-white text-[14px] lg:text-[16px]">
                    {row.priceExtra}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <p className="font-aeonik-bold text-white text-[13px] lg:text-[14px] text-center mt-8">
            I prezzi sono indicativi, possono subire variazioni rispetto al periodo di noleggio.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="relative w-full py-14">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-itc-blair text-white text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-2">
            PRENOTA ORA LA
          </h2>
          <h2 className="font-itc-blair text-white text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-4">
            TUA ESPERIENZA DI GUIDA
          </h2>
          <p className="font-aeonik text-white text-[12px] lg:text-[13px] leading-[1.5] mb-8 max-w-[500px] mx-auto">
            Scegli il pacchetto che fa per te e regalati un esperienza fuori dal comune!<br />
            Compila il modulo per ricevere un preventivo personalizzato.
          </p>

          {/* Form Fields */}
          <form action="/api/send-email" method="post" className="space-y-4 mb-8">
            <input type="hidden" name="formName" value="booking-prezzi" />
            <input type="hidden" name="pageTitle" value="Prezzi - Prenotazione" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Nome"
                required
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Cognome"
                required
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefono"
                required
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DateTimeField ariaLabel="Dal" title="Dal (data e ora)" nameCombined="fromDateTime" required />
              <DateTimeField ariaLabel="Al" title="Al (data e ora)" nameCombined="toDateTime" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="pickupPlace"
                placeholder="Luogo di ritiro"
                required
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <input
                type="text"
                name="dropoffPlace"
                placeholder="Luogo di consegna"
                required
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div className="mb-6">
              <TermsConsent checkboxId="terms-prezzi" />
            </div>
            <button type="submit" className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors">
              PRENOTA LA TUA ESPERIENZA
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
            {/* Newsletter */}
            <div className="hidden">
              <h3 className="font-itc-blair text-white text-[13px] uppercase mb-4 leading-[1.4] max-w-[280px]">
                ISCRIVITI ALLA NEWSLETTER PER PROMOZIONI E OFFERTE ESCLUSIVE
              </h3>
              <form action="/api/send-email" method="post" className="flex gap-2">
                <input type="hidden" name="formName" value="newsletter" />
                <input type="hidden" name="pageTitle" value="Prezzi - Newsletter" />
                <input
                  type="email"
                  name="newsletterEmail"
                  placeholder="Enter Your Email"
                  required
                  className="flex-1 h-11 bg-white/[0.05] backdrop-blur-md rounded-lg px-4 text-white text-[13px] placeholder-white/60 focus:outline-none"
                />
                <button type="submit" className="bg-white text-black font-itc-blair px-4 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
                  iscriviti
                </button>
              </form>
            </div>

            {/* Links - Eventi */}
            <div className="text-center lg:text-center lg:justify-self-center">
              <h3 className="font-itc-blair text-white text-[13px] mb-3">EVENTI</h3>
              <ul className="font-aeonik text-white text-[12px] space-y-2">
                <li><a href="/eventi/compleanno" className="hover:opacity-80 transition-opacity">COMPLEANNO</a></li>
                <li><a href="/eventi/shooting" className="hover:opacity-80 transition-opacity">SHOOTING</a></li>
                <li><a href="/eventi/matrimonio" className="hover:opacity-80 transition-opacity">MATRIMONI</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div className="text-center lg:text-center lg:justify-self-center">
              <h3 className="font-itc-blair text-white text-[13px] mb-3">CONTATTI</h3>
              <ul className="font-aeonik text-white text-[12px] space-y-2">
                <li>
                  <a href="tel:+393453096645" className="hover:opacity-80 transition-opacity">
                    345 3096645
                  </a>
                </li>
                <li className="hidden">
                  <a
                    href="https://wa.me/393453096645"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contattaci su WhatsApp"
                    className="inline-flex items-center justify-center"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.76a11.7 11.7 0 0 0 5.7 1.5h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.34ZM12.07 21.1h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.2-3.78 1.04 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.55-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7.01 2.9a9.85 9.85 0 0 1 2.92 7.02c0 5.47-4.45 9.92-9.9 9.92Zm5.72-7.4c-.31-.16-1.83-.9-2.12-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.73-.98-2.37-.26-.64-.53-.55-.71-.55-.18 0-.39-.03-.6-.03-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.04 1.28 3.24.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@altitudo.club" className="hover:opacity-80 transition-opacity">
                    info@altitudo.club
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/393453096645"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contattaci su WhatsApp"
                    className="inline-flex items-center gap-2 bg-white text-black font-itc-blair px-3 py-1.5 rounded-md text-[12px] hover:bg-gray-100 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.76a11.7 11.7 0 0 0 5.7 1.5h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.34ZM12.07 21.1h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.2-3.78 1.04 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.55-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7.01 2.9a9.85 9.85 0 0 1 2.92 7.02c0 5.47-4.45 9.92-9.9 9.92Zm5.72-7.4c-.31-.16-1.83-.9-2.12-1.01-.29-.11-.5-.16-.71 .16-.21 .31-.81 1-.99 1.21-.18 .21-.36 .24-.67 .08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48 .14-.64.14-.14 .31-.36 .47-.54.16-.18 .21-.31 .31-.52.1-.21 .05-.39-.03-.54-.08-.16-.71-1.73-.98-2.37-.26-.64-.53-.55-.71-.55-.18 0-.39-.03-.6-.03-.21 0-.55 .08-.84 .39-.29 .31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.04 1.28 3.24.16 .21 2.2 3.36 5.33 4.71.75 .32 1.33 .51 1.78 .66.75 .24 1.43 .21 1.97 .13.6-.09 1.83-.75 2.09-1.48.26-.73 .26-1.36 .18-1.49-.08-.13-.29-.21-.6-.37Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Tagline */}
            <div className="text-center lg:text-right">
              <p className="font-itc-blair text-white text-[13px] leading-[1.5] uppercase">
                GUIDA L&apos;EMOZIONE,<br />
                VIVI IL LUSSO.<br />
                LA TUA ESPERIENZA IN FERRARI INIZIA QUI
              </p>
            </div>
          </div>

          {/* Logo & Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <img
              src="/images/logo_altitudo_esteso.png"
              alt="Altitudo"
              className="h-[24px] w-auto mx-auto mb-4"
            />
            <p className="font-aeonik text-white/70 text-[11px]">
              2026 - ALTITUDO LUXURY RENT - All rights Reserved - Produced by meravigliä Lab
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
