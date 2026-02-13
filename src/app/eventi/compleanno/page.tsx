"use client";

export default function EventiCompleanno() {
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
              <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                <span className="font-itc-blair text-white text-[13px] uppercase">
                  EVENTI
                </span>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                  <path d="M4 5L0 0H8L4 5Z" fill="white"/>
                </svg>
              </div>
              <a href="#" className="font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                PREZZI
              </a>
              <a href="#" className="font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                CONTATTI
              </a>
            </nav>
            <button className="bg-white text-black font-itc-blair px-5 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
              guidala ora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="/images/evento_compleanno.png"
            alt="Compleanno con Ferrari"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgb(0,0,0) 100%)'
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-[8vh]">
          <h1 className="font-itc-blair text-white text-[22px] md:text-[32px] lg:text-[38px] leading-[1.2] tracking-tight mb-4 max-w-[800px] uppercase">
            Rendi unico il tuo compleanno con una Ferrari
          </h1>
          <p className="font-aeonik text-white text-[13px] lg:text-[16px] leading-[1.2] tracking-wide mb-6 max-w-[700px] uppercase">
            Festeggia il tuo compleanno al volante della Ferrari 296 GTS e vivi un&apos;esperienza da sogno!
          </p>
          <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA LA TUA ESPERIENZA
          </button>
        </div>
      </section>

      {/* Second Section - Description with Fireworks */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden">
        {/* Fireworks Left - Hidden on mobile */}
        <div className="hidden lg:block absolute left-0 top-0 h-full w-[180px] z-0 overflow-hidden">
          <img
            src="/images/fireworks.png"
            alt=""
            className="h-full w-auto object-cover object-right opacity-80"
          />
        </div>

        {/* Fireworks Right - Hidden on mobile */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-[180px] z-0 overflow-hidden">
          <img
            src="/images/fireworks2.png"
            alt=""
            className="h-full w-auto object-cover object-left opacity-80"
          />
        </div>

        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <img
            src="/images/logo_altitudo.png"
            alt="Altitudo Logo"
            className="w-[40px] lg:w-[50px] h-auto mx-auto mb-8"
          />

          <h2 className="font-itc-blair text-white text-[24px] md:text-[36px] lg:text-[42px] leading-[1.15] mb-8">
            noleggio ferrari per il tuo compleanno
          </h2>

          <div className="font-aeonik text-white text-[13px] lg:text-[15px] leading-[1.5] mb-8 max-w-[650px] mx-auto">
            <p className="mb-4">
              Festeggia il tuo compleanno in modo unico con il nostro servizio di <span className="font-aeonik-bold">noleggio Ferrari per compleanno</span> e regalati l&apos;emozione di guidare la straordinaria <span className="font-aeonik-bold">Ferrari 296 GTS</span>.
            </p>
            <p className="mb-4">
              Potenza, eleganza e adrenalina si uniscono per rendere il tuo giorno speciale davvero indimenticabile. Immagina di sfrecciare al volante di una delle supercar italiane più iconiche, vivendo l&apos;adrenalina pura di 830 CV e il fascino di un design mozzafiato.
            </p>
            <p>
              Che sia un regalo per te stesso o una sorpresa per una persona speciale, il noleggio Ferrari per compleanno è l&apos;esperienza perfetta per trasformare il sogno in realtà.
            </p>
          </div>

          <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA LA TUA ESPERIENZA
          </button>
        </div>
      </section>

      {/* Spegni le candeline Section - Full Width */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        {/* Background Image - Left Side */}
        <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full">
          <img
            src="/images/ferrari_compleanni.png"
            alt="Ferrari per Compleanni"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay from right */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(270deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 40%)'
            }}
          />
        </div>

        {/* Right Side - Text */}
        <div className="relative z-10 h-full flex items-center justify-end">
          <div className="w-full lg:w-1/2 px-6 lg:px-16 lg:pr-[10%]">
            <h2 className="font-itc-blair text-white text-[26px] md:text-[34px] lg:text-[38px] leading-[1.2] mb-6 uppercase">
              Spegni le candeline.<br />
              Accendi il motore.
            </h2>

            <div className="font-aeonik text-white text-[13px] lg:text-[15px] leading-[1.5] max-w-[450px]">
              <p className="mb-4">
                Le linee sinuose, la luce che si riflette sulla carrozzeria rossa, il rombo che emoziona: ogni dettaglio della Ferrari 296 GTS è pensato per restare impresso.
              </p>
              <p className="mb-4">
                Le foto del tuo compleanno non avranno bisogno di filtri.
              </p>
              <p>
                Avranno già lo sfondo perfetto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative w-full pt-20 lg:pt-28 pb-16 lg:pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] mb-6">
              MODALITÀ DI NOLEGGIO FERRARI PER COMPLEANNI
            </h2>
            <p className="font-aeonik text-white/80 text-[13px] lg:text-[15px] leading-[1.5] max-w-[800px] mx-auto">
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
