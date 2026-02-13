"use client";

import { useState } from "react";

export default function EventiShooting() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [eventiOpen, setEventiOpen] = useState(false);

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
          <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA LA TUA ESPERIENZA
          </button>
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

          <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA LA TUA ESPERIENZA
          </button>
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

              <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
                PRENOTA LA TUA ESPERIENZA
              </button>
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
              MODALITÀ DI NOLEGGIO FERRARI PER SHOOTING
            </h2>
            <p className="font-aeonik text-white/80 text-[14px] lg:text-[16px] leading-[1.5] max-w-[800px] mx-auto">
              Scegli l&apos;esperienza perfetta su misura per te. Scegli la modalità che più si adatta ai tuoi desideri e preparati a vivere il sogno Ferrari. <span className="font-aeonik-bold">Prenota ora</span> e festeggia il tuo compleanno con eleganza, potenza e libertà!
            </p>
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
                <li><a href="#" className="hover:opacity-80 transition-opacity">COMPLEANNO</a></li>
                <li><a href="/eventi/shooting" className="hover:opacity-80 transition-opacity">SHOOTING</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">MATRIMONI</a></li>
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
