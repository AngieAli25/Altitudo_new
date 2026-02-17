"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import TermsConsent from "@/components/TermsConsent";
import DateTimeField from "@/components/DateTimeField";

export default function EventiShooting() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [eventiOpen, setEventiOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isEventi = pathname === "/eventi" || pathname.startsWith("/eventi/");
  const isPrezzi = pathname === "/prezzi";
  const isContatti = pathname === "/contatti";

  const handleOpenDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setEventiOpen(true);
  };

  const handleCloseDropdownDelayed = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setEventiOpen(false);
      closeTimeoutRef.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const accordionData = [
    {
      title: "Shooting fotografici",
      content: {
        intro: "Cattura la perfezione.",
        description: "Shooting di moda e campagne pubblicitarie che lasciano il segno. La Ferrari 296 GTS non ha bisogno di effetti speciali: è già il centro della scena.",
        list: [
          "Shooting di moda e advertising",
          "Cataloghi e campagne editoriali",
          "Servizi fotografici aziendali",
          "Portfolio professionali"
        ]
      }
    },
    {
      title: "Videoclip e produzioni",
      content: {
        intro: "Movimento ed emozione.",
        description: "Videoclip musicali, social content e produzioni cinematografiche. Ogni angolazione comunica forza, stile ed esclusività italiana.",
        list: [
          "Videoclip musicali",
          "Content per social media",
          "Spot pubblicitari",
          "Produzioni cinematografiche"
        ]
      }
    },
    {
      title: "Eventi esclusivi",
      content: {
        intro: "Presenza scenica garantita.",
        description: "Cerimonie private, lanci di prodotto e gala di lusso. La presenza della Ferrari 296 GTS farà parlare l'intero pubblico.",
        list: [
          "Cerimonie private",
          "Eventi aziendali e incentive",
          "Lanci di prodotto",
          "Fiere e brand activation"
        ]
      }
    },
    {
      title: "Produzioni branded",
      content: {
        intro: "Il lusso che comunica.",
        description: "Branded content, documentari e produzioni editoriali. Con 830 cavalli e un design da opera d'arte, ogni progetto diventa memorabile.",
        list: [
          "Branded content",
          "Documentari e reportage",
          "Contenuti editoriali",
          "Case history aziendali"
        ]
      }
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
              <a href="/" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                HOME
                {isHome && (
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
                )}
              </a>
              <div
                className="relative flex items-center gap-1.5"
                onMouseEnter={handleOpenDropdown}
                onMouseLeave={handleCloseDropdownDelayed}
              >
                <a href="/eventi" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                  EVENTI
                  {isEventi && (
                    <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
                  )}
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
                  <div
                    className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-lg py-2 min-w-[160px] border border-white/10"
                    onMouseEnter={handleOpenDropdown}
                    onMouseLeave={handleCloseDropdownDelayed}
                  >
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
              <a href="/prezzi" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                PREZZI
                {isPrezzi && (
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
                )}
              </a>
              <a href="/contatti" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                CONTATTI
                {isContatti && (
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
                )}
              </a>
            </nav>
            <a href="/contatti#prenota" className="bg-white text-black font-itc-blair px-5 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
              guidala ora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="/images/ferrari_shooting.png"
            alt="Ferrari 296 GTS Shooting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-[12vh]">
          <h1 className="font-itc-blair text-white text-[22px] md:text-[32px] lg:text-[38px] leading-[1.2] tracking-tight mb-4 max-w-[800px] uppercase">
            L&apos;icona del lusso nei tuoi scatti: noleggia una Ferrari PER EVENTI E SHOOTING
          </h1>
          <p className="font-aeonik text-white text-[14px] lg:text-[18px] tracking-wide mb-6 max-w-[700px]">
            METTI IN SCENA LO STILE. FAI BRILLARE L&apos;EMOZIONE.
          </p>
          <a href="#prenota" className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA LA TUA ESPERIENZA
          </a>
        </div>
      </section>

      {/* Second Section - Description */}
      <section className="relative w-full pt-16 lg:pt-24 pb-32 lg:pb-48">
        <div className="absolute inset-0">
          <img
            src="/images/luci_altitudo.png"
            alt=""
            className="w-full h-full object-contain object-top opacity-80"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(35deg, rgba(0,0,0,0) 63%, rgb(0,0,0) 98%), linear-gradient(-34deg, rgba(0,0,0,0) 62%, rgb(0,0,0) 97%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <img
            src="/images/logo_altitudo.png"
            alt="Altitudo Logo"
            className="w-[50px] lg:w-[60px] h-auto mx-auto mb-8"
          />

          <h2 className="font-itc-blair text-white text-[24px] md:text-[36px] lg:text-[42px] leading-[1.15] mb-8 max-w-[900px]">
            NOLEGGIO FERRARI PER SHOOTING E CLIP VIDEO
          </h2>

          <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.6] mb-8 max-w-[800px] mx-auto">
            <p className="mb-4">
              Dai un tocco esclusivo ai tuoi progetti creativi con il nostro servizio di <span className="font-aeonik-bold">noleggio Ferrari 296 GTS per shooting fotografici e clip video</span>. La combinazione perfetta di potenza, design mozzafiato ed eleganza rende la Ferrari la protagonista ideale per servizi fotografici e riprese video di alto livello.
            </p>
            <p className="mb-4">
              La <span className="font-aeonik-bold">Ferrari 296 GTS</span>, con le sue linee iconiche e il fascino senza tempo, è perfetta per shooting di moda, campagne pubblicitarie, servizi editoriali e videoclip musicali. Ogni scatto e ripresa guadagneranno un impatto visivo straordinario, trasformando il tuo progetto in un vero capolavoro di stile e potenza.
            </p>
            <p>
              Il nostro servizio di <span className="font-aeonik-bold">noleggio Ferrari per shooting fotografici e clip video</span> è pensato per fotografi, videomaker e agenzie che desiderano creare contenuti di lusso e di forte impatto.
            </p>
          </div>

          <a href="#prenota" className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA LA TUA ESPERIENZA
          </a>
        </div>
      </section>

      {/* Services Section with Accordion */}
      <section className="w-full py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Side - Text */}
            <div className="lg:w-1/2">
              <h2 className="font-itc-blair text-white text-[28px] md:text-[36px] lg:text-[38px] leading-[1.2] mb-6">
                SERVIZI PER OGNI PROGETTO
              </h2>

              <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.6] mb-8">
                <p className="mb-4">
                  Dall&apos;idea alla realizzazione, la <span className="font-aeonik-bold">Ferrari 296 GTS</span> trasforma ogni progetto in un capolavoro di stile e potenza. Perfetta per eventi esclusivi, set fotografici, videoclip e cerimonie che meritano presenza scenica e prestigio vero.
                </p>
                <p className="mb-4">
                  Ogni curva della carrozzeria riflette potenza.<br />
                  <span className="font-aeonik-bold">Ogni rombo racconta un sogno.</span>
                </p>
              </div>

              <a href="#prenota" className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
                PRENOTA LA TUA ESPERIENZA
              </a>
            </div>

            {/* Right Side - Accordion */}
            <div className="lg:w-1/2">
              {accordionData.map((item, index) => (
                <div key={index} className="border-b border-white/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-aeonik-bold text-white text-[16px] lg:text-[18px]">
                      {item.title}
                    </span>
                    <span className="text-white text-[20px]">
                      {openAccordion === index ? "−" : "+"}
                    </span>
                  </button>

                  {openAccordion === index && (
                    <div className="pb-6 font-aeonik text-white text-[13px] lg:text-[14px] leading-[1.6]">
                      <p className="mb-3">{item.content.intro}</p>
                      <p className="mb-4">{item.content.description}</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {item.content.list.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative w-full h-[400px] lg:h-[500px]">
        <img
          src="/images/shooting_music.png"
          alt="Ferrari Shooting"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 30%), linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)'
          }}
        />
      </section>

      {/* Pricing Section */}
      <section className="relative w-full pt-20 lg:pt-28 pb-16 lg:pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] mb-6">
              MODALITÀ DI NOLEGGIO<br />FERRARI PER SHOOTING
            </h2>
            <p className="font-aeonik text-white/80 text-[14px] lg:text-[16px] leading-[1.5] max-w-[800px] mx-auto">
              Scegli l&apos;esperienza perfetta su misura per te. Scegli la modalità che più si adatta ai tuoi desideri e preparati a vivere il sogno Ferrari. <span className="font-aeonik-bold">Prenota ora</span> e festeggia il tuo compleanno con eleganza, potenza e libertà!
            </p>
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
          <form action="/thank-you" method="post" className="space-y-4 mb-8">
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
              <DateTimeField ariaLabel="Dal" title="Dal (data e ora)" />
              <DateTimeField ariaLabel="Al" title="Al (data e ora)" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Luogo di ritiro"
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <input
                type="text"
                placeholder="Luogo di consegna"
                className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
          </form>

          <form action="/thank-you" method="post">
            <div className="mb-6">
              <TermsConsent checkboxId="terms-shooting" />
            </div>
            <button type="submit" className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
              PRENOTA LA TUA ESPERIENZA
            </button>
          </form>
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
              <form action="/thank-you" method="post" className="flex gap-2">
                <input
                  type="email"
                  name="newsletterEmail"
                  placeholder="Enter Your Email"
                  className="flex-1 h-11 bg-white/[0.05] backdrop-blur-md rounded-lg px-4 text-white text-[13px] placeholder-white/60 focus:outline-none"
                />
                <button type="submit" className="bg-white text-black font-itc-blair px-4 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
                  iscriviti
                </button>
              </form>
            </div>

            {/* Links */}
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
                <li>
                  <a
                    href="https://wa.me/393453096645"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contattaci su WhatsApp"
                    className="inline-flex items-center justify-center"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.76a11.7 11.7 0 0 0 5.7 1.5h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.34ZM12.07 21.1h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.2-3.78 1.04 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.55-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7.01 2.9a9.85 9.85 0 0 1 2.92 7.02c0 5.47-4.45-9.92-9.9 9.92Zm5.72-7.4c-.31-.16-1.83-.9-2.12-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.73-.98-2.37-.26-.64-.53-.55-.71-.55-.18 0-.39-.03-.6-.03-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.04 1.28 3.24.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="mailto:altitudo.club@gmail.com" className="hover:opacity-80 transition-opacity">
                    altitudo.club@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Tagline + Contacts */}
            <div className="text-center lg:text-right">
              <p className="font-itc-blair text-white text-[13px] leading-[1.5] uppercase">
                GUIDA L&apos;EMOZIONE,<br />
                VIVI IL LUSSO.<br />
                LA TUA ESPERIENZA IN FERRARI INIZIA QUI
              </p>
              <div className="mt-4 space-y-2">
                <div>
                  <a href="tel:+393453096645" className="font-aeonik text-white text-[12px] hover:opacity-80 transition-opacity">
                    345 3096645
                  </a>
                </div>
                <div>
                  <a href="mailto:altitudo.club@gmail.com" className="font-aeonik text-white text-[12px] hover:opacity-80 transition-opacity">
                    altitudo.club@gmail.com
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/393453096645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black font-itc-blair px-4 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors"
                    aria-label="Contattaci su WhatsApp"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.76a11.7 11.7 0 0 0 5.7 1.5h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.34ZM12.07 21.1h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.2-3.78 1.04 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.55-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7.01 2.9a9.85 9.85 0 0 1 2.92 7.02c0 5.47-4.45 9.92-9.9 9.92Zm5.72-7.4c-.31-.16-1.83-.9-2.12-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.73-.98-2.37-.26-.64-.53-.55-.71-.55-.18 0-.39-.03-.6-.03-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.04 1.28 3.24.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
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
