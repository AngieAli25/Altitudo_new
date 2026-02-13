"use client";

import { useState } from "react";

export default function Prezzi() {
  const [eventiOpen, setEventiOpen] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="h-[30px] lg:h-[36px]">
              <img
                src="/images/logo_altitudo_esteso.png"
                alt="Altitudo"
                className="h-full w-auto object-contain"
              />
            </a>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/" className="font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                HOME
              </a>
              <div className="relative flex items-center gap-1.5">
                <a href="/eventi" className="font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                  EVENTI
                </a>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  className={`cursor-pointer hover:opacity-80 transition-transform ${eventiOpen ? 'rotate-180' : ''}`}
                  onClick={() => setEventiOpen(!eventiOpen)}
                >
                  <path d="M4 5L0 0H8L4 5Z" fill="white"/>
                </svg>
                {eventiOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-lg py-2 min-w-[160px] border border-white/10">
                    <a
                      href="/eventi/compleanno"
                      className="block px-4 py-2 font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                    >
                      Compleanno
                    </a>
                    <a
                      href="/eventi/shooting"
                      className="block px-4 py-2 font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                    >
                      Shooting
                    </a>
                    <a
                      href="/eventi/matrimonio"
                      className="block px-4 py-2 font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                    >
                      Matrimonio
                    </a>
                  </div>
                )}
              </div>
              <a href="/prezzi" className="font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                PREZZI
              </a>
              <a href="#" className="font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                CONTATTI
              </a>
            </nav>
            <a href="/prezzi" className="bg-white text-black font-itc-blair px-5 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
              guidala ora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
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

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-[8vh]">
          <h1 className="font-itc-blair text-white text-[22px] md:text-[32px] lg:text-[38px] leading-[1.2] tracking-tight mb-6 max-w-[900px] uppercase">
            Personalizza la tua esperienza
          </h1>
          <div className="font-aeonik text-white/80 text-[13px] lg:text-[16px] leading-[1.4] max-w-[900px]">
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
            <div className="backdrop-blur-[20px] bg-white/[0.04] p-6 text-center">
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
            <div className="backdrop-blur-[20px] bg-white/[0.04] p-6 text-center">
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
            <div className="backdrop-blur-[20px] bg-white/[0.04] p-6 text-center">
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
          <div className="backdrop-blur-[20px] bg-white/[0.04] p-6 text-center">
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
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4 border-b border-white/20"
            >
              {/* Mobile: Period label */}
              <div className="md:hidden col-span-2 mb-2">
                <p className="font-aeonik-bold text-white text-[16px]">{row.period}</p>
              </div>

              {/* Desktop: Period */}
              <div className="hidden md:block text-center">
                <p className="font-aeonik text-white text-[14px] lg:text-[16px]">{row.period}</p>
              </div>

              {/* Km inclusi */}
              <div className="text-center">
                <p className="md:hidden font-aeonik text-white/60 text-[12px] mb-1">Km inclusi</p>
                <p className="font-aeonik text-white text-[14px] lg:text-[16px]">{row.km}</p>
              </div>

              {/* Prezzo al giorno */}
              <div className="text-center">
                <p className="md:hidden font-aeonik text-white/60 text-[12px] mb-1">Prezzo/giorno</p>
                <p className="font-aeonik text-white text-[14px] lg:text-[16px]">{row.priceDay}</p>
              </div>

              {/* Prezzo totale */}
              <div className="text-center">
                <p className="md:hidden font-aeonik text-white/60 text-[12px] mb-1">Totale</p>
                <p className="font-aeonik text-white text-[14px] lg:text-[16px]">{row.priceTotal}</p>
              </div>

              {/* Prezzo km extra */}
              <div className="text-center">
                <p className="md:hidden font-aeonik text-white/60 text-[12px] mb-1">Km extra</p>
                <p className="font-aeonik text-white text-[14px] lg:text-[16px]">{row.priceExtra}</p>
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
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <input
                type="text"
                placeholder="Cognome"
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <input
                type="tel"
                placeholder="Telefono"
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white/50 text-[13px] focus:outline-none focus:ring-1 focus:ring-white/30 appearance-none cursor-pointer">
                <option value="">Seleziona pacchetto</option>
                <option value="orario">Noleggio Orario</option>
                <option value="giornata">Intera Giornata</option>
                <option value="weekend">Weekend Completo</option>
                <option value="settimana">Settimana Completa</option>
                <option value="1giorno">1 Giorno</option>
                <option value="2giorni">2 Giorni</option>
                <option value="5giorni">5 Giorni</option>
                <option value="7giorni">7 Giorni</option>
                <option value="1mese">1 Mese</option>
              </select>
              <input
                type="date"
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white/50 text-[13px] focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
          </div>

          <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA LA TUA ESPERIENZA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-12 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
            {/* Newsletter */}
            <div>
              <h3 className="font-itc-blair text-white text-[13px] uppercase mb-4 leading-[1.4] max-w-[280px]">
                ISCRIVITI ALLA NEWSLETTER PER PROMOZIONI E OFFERTE ESCLUSIVE
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 h-11 bg-white/[0.05] backdrop-blur-md rounded-lg px-4 text-white text-[13px] placeholder-white/60 focus:outline-none"
                />
                <button className="bg-white text-black font-itc-blair px-4 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
                  iscriviti
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="text-center lg:text-left">
              <h3 className="font-itc-blair text-white text-[13px] mb-3">EVENTI</h3>
              <ul className="font-aeonik text-white text-[12px] space-y-2">
                <li><a href="/eventi/compleanno" className="hover:opacity-80 transition-opacity">COMPLEANNO</a></li>
                <li><a href="/eventi/shooting" className="hover:opacity-80 transition-opacity">SHOOTING</a></li>
                <li><a href="/eventi/matrimonio" className="hover:opacity-80 transition-opacity">MATRIMONI</a></li>
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
              2025 - ALTITUDO LUXURY RENT - All rights Reserved - Produced by meravigliä Lab
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
