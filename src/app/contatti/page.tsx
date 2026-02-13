"use client";

import { useState } from "react";

export default function Contatti() {
  const [eventiOpen, setEventiOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: "Che documenti servono per poter guidare la Ferrari?",
      answer: "È necessario presentare un documento d'identità valido, la patente di guida in corso di validità e una carta di credito intestata al conducente per la garanzia."
    },
    {
      question: "Come posso pagare la prenotazione?",
      answer: "Accettiamo pagamenti tramite carta di credito, bonifico bancario o contanti. La caparra del 30% viene richiesta al momento della conferma della prenotazione."
    },
    {
      question: "Che tipo di copertura assicurativa è inclusa?",
      answer: "Il noleggio include una copertura assicurativa completa RCA. È possibile richiedere coperture aggiuntive per una maggiore tranquillità."
    },
    {
      question: "È necessario pagare in anticipo?",
      answer: "Sì, è richiesta una caparra confirmatoria pari al 30% del costo totale del noleggio al momento della firma del contratto."
    }
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
              <a href="/contatti" className="font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
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
            src="/images/ferrari_contatti.png"
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
            Prenota la tua esperienza
          </h1>
          <div className="font-aeonik text-white/80 text-[13px] lg:text-[16px] leading-[1.4] max-w-[900px]">
            <p className="mb-2">
              C&apos;è una differenza tra guidare un&apos;auto e vivere un&apos;icona.
            </p>
            <p className="mb-2">
              La Ferrari 296 GTS non è semplicemente una vettura: è ingegneria pura, design senza tempo, potenza che si fa presenza. Prenota ora la tua esperienza.
            </p>
            <p>
              Al resto penseremo noi, con la cura e la precisione che ogni dettaglio merita.
            </p>
          </div>
        </div>
      </section>

      {/* Dettagli del Servizio Section */}
      <section className="relative w-full py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] text-center mb-12 uppercase">
            Dettagli del Servizio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Box 1 */}
            <div className="backdrop-blur-[20px] bg-white/[0.04] p-6 lg:p-8 rounded-lg border border-white/10">
              <div className="font-aeonik text-white text-[13px] lg:text-[15px] leading-[1.6]">
                <p className="mb-4">
                  Per garantire un servizio esclusivo, sicuro e senza imprevisti, ti chiediamo solo poche semplici condizioni.
                </p>

                <p className="font-aeonik-bold mb-2">Garanzia con blocco carta:</p>
                <p className="mb-4">
                  Il giorno prima della consegna dell&apos;auto, durante il check-in, viene effettuato un blocco temporaneo sulla carta di credito di €15.000.<br />
                  Si tratta esclusivamente di una garanzia:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>non è un addebito</li>
                  <li>non viene prelevato alcun importo</li>
                  <li>viene automaticamente sbloccato al termine del noleggio</li>
                </ul>

                <p className="font-aeonik-bold mb-2">Caparra confirmatoria</p>
                <p className="mb-4">
                  Al momento della firma del contratto è prevista una caparra pari al 30% del costo totale del noleggio.<br />
                  Questo ci permette di riservare in esclusiva il veicolo per te e garantirti la massima disponibilità.
                </p>

                <p className="font-aeonik-bold">Documentazione e riepilogo</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="backdrop-blur-[20px] bg-white/[0.04] p-6 lg:p-8 rounded-lg border border-white/10">
              <div className="font-aeonik text-white text-[13px] lg:text-[15px] leading-[1.6]">
                <p className="mb-2">Dopo la conferma riceverai via email:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>il riepilogo completo</li>
                  <li>il contratto in allegato</li>
                  <li>tutte le informazioni operative</li>
                </ul>
                <p className="mb-6">
                  Così potrai leggere tutto con calma e avere ogni dettaglio a portata di mano.
                </p>

                <p className="font-aeonik-bold mb-2">Politica di cancellazione</p>
                <p className="mb-4">
                  Comprendiamo che possano verificarsi imprevisti. Per questo abbiamo previsto condizioni chiare:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Disdetta entro 30 giorni dalla data di prenotazione → viene trattenuta la caparra (30% del totale).</li>
                  <li>Disdetta entro 15 giorni dalla data di inizio noleggio → viene trattenuto il 50% dell&apos;importo totale.</li>
                  <li>Disdetta entro 3 giorni dall&apos;inizio del noleggio → viene trattenuto l&apos;intero importo del noleggio.</li>
                </ul>
                <p>
                  Queste condizioni ci permettono di garantire un servizio organizzato e di alto livello per tutti i nostri clienti.
                </p>
              </div>
            </div>
          </div>
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

      {/* FAQ Section */}
      <section className="relative w-full py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Side - Title */}
            <div className="lg:w-1/4">
              <h2 className="font-itc-blair text-white text-[28px] lg:text-[32px] leading-[1.1]">
                DOMANDE<br />FREQUENTI
              </h2>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="lg:w-3/4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-white/20">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-aeonik text-white text-[14px] lg:text-[16px] pr-4">
                      {faq.question}
                    </span>
                    <span className="text-white text-[20px] shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="pb-5 font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
