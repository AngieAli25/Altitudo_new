"use client";

import { useEffect, useState } from "react";
import TermsConsent from "@/components/TermsConsent";
import DateTimeField from "@/components/DateTimeField";
import SiteHeader from "@/components/SiteHeader";

export default function Contatti() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    return () => {};
  }, []);

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
      <SiteHeader />

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - Condizioni principali */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 lg:p-8">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
              <span className="inline-block mb-5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] tracking-wide">
                Condizioni principali
              </span>
              <div className="font-aeonik text-white text-[13px] lg:text-[15px] leading-[1.7]">
                <p className="mb-4">
                  Per garantire un servizio esclusivo, sicuro e senza imprevisti, ti chiediamo solo poche semplici condizioni.
                </p>

                <p className="font-aeonik-bold mb-2">Garanzia con blocco carta:</p>
                <p className="mb-4">
                  Il giorno prima della consegna dell&apos;auto, durante il check-in, viene effettuato un blocco temporaneo sulla carta di credito di €15.000.<br />
                  Si tratta esclusivamente di una garanzia:
                </p>
                <ul className="pl-0 mb-5 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>non è un addebito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>non viene prelevato alcun importo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>viene automaticamente sbloccato al termine del noleggio</span>
                  </li>
                </ul>

                <p className="font-aeonik-bold mb-2">Caparra confirmatoria</p>
                <p className="mb-4">
                  Al momento della firma del contratto è prevista una caparra pari al 30% del costo totale del noleggio.<br />
                  Questo ci permette di riservare in esclusiva il veicolo per te e garantirti la massima disponibilità.
                </p>

              </div>
            </div>

            {/* Card 2 - Conferma e cancellazioni */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 lg:p-8">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
              <span className="inline-block mb-5 px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] tracking-wide">
                Conferma e cancellazioni
              </span>
              <div className="font-aeonik text-white text-[13px] lg:text-[15px] leading-[1.7]">
                <p className="font-aeonik-bold mb-2">Documentazione e riepilogo</p>
                <p className="mb-2">Dopo la conferma riceverai via email:</p>
                <ul className="pl-0 mb-5 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>il riepilogo completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>il contratto in allegato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>tutte le informazioni operative</span>
                  </li>
                </ul>
                <p className="mb-6">
                  Così potrai leggere tutto con calma e avere ogni dettaglio a portata di mano.
                </p>

                <p className="font-aeonik-bold mb-2">Politica di cancellazione</p>
                <p className="mb-4">
                  Comprendiamo che possano verificarsi imprevisti. Per questo abbiamo previsto condizioni chiare:
                </p>
                <ul className="pl-0 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>Disdetta entro 30 giorni dalla data di prenotazione → viene trattenuta la caparra (30% del totale).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>Disdetta entro 15 giorni dalla data di inizio noleggio → viene trattenuto il 50% dell&apos;importo totale.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 mt-[2px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span>Disdetta entro 3 giorni dall&apos;inizio del noleggio → viene trattenuto l&apos;intero importo del noleggio.</span>
                  </li>
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
      <section id="prenota" className="relative w-full py-14 scroll-mt-24 md:scroll-mt-28">
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
          <form action="/api/send" method="post" className="space-y-4 mb-8">
            <input type="hidden" name="formName" value="booking-contatti" />
            <input type="hidden" name="pageTitle" value="Contatti - Prenotazione" />
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
              <TermsConsent checkboxId="terms-contatti" />
            </div>
            <button type="submit" className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
              PRENOTA LA TUA ESPERIENZA
            </button>
          </form>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
            {/* Newsletter */}
            <div>
              <h3 className="font-itc-blair text-white text-[13px] uppercase mb-4 leading-[1.4] max-w-[280px]">
                ISCRIVITI ALLA NEWSLETTER PER PROMOZIONI E OFFERTE ESCLUSIVE
              </h3>
              <form action="/api/send" method="post" className="flex gap-2">
                <input type="hidden" name="formName" value="newsletter" />
                <input type="hidden" name="pageTitle" value="Contatti - Newsletter" />
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
                      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.76a11.7 11.7 0 0 0 5.7 1.5h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.34ZM12.07 21.1h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.2-3.78 1.04 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.55-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7.01 2.9a9.85 9.85 0 0 1 2.92 7.02c0 5.47-4.45 9.92-9.9 9.92Zm5.72-7.4c-.31-.16-1.83-.9-2.12-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48 .14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.73-.98-2.37-.26-.64-.53-.55-.71-.55-.18 0-.39-.03-.6-.03-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.04 1.28 3.24.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="mailto:altitudo.club@gmail.com" className="hover:opacity-80 transition-opacity">
                    altitudo.club@gmail.com
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
              2025 - ALTITUDO LUXURY RENT - All rights Reserved - Produced by meravigliä Lab
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
