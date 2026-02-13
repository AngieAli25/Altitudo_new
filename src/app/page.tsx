"use client";

import { useState } from "react";

export default function Home() {
  const [eventiOpen, setEventiOpen] = useState(false);

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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/video_sito_home.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

        {/* Content positioned towards bottom */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-[15vh]">
          <img
            src="/images/logo_altitudo.png"
            alt="Altitudo Logo"
            className="h-[50px] lg:h-[60px] w-auto mb-6"
          />
          <h1 className="font-itc-blair text-white text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] tracking-tight mb-5">
            <span className="block">vivi l&apos;adrenalina</span>
            <span className="block">guida l&apos;esclusività</span>
          </h1>
          <p className="font-aeonik text-white/80 text-[14px] lg:text-[16px] tracking-wide mb-6">
            FERRARI 296 GTS
          </p>
          <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            PRENOTA ORA
          </button>
        </div>
      </section>

      {/* Ferrari 296 GTS Section */}
      <section className="w-full overflow-hidden px-6 lg:px-16 py-8 lg:py-12">
        <div className="flex flex-col gap-6 lg:gap-10 w-full">
          {/* Top Row: Title/Price/Button + Ferrari Image */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center justify-between w-full">
            {/* Left Column: Title, Price, Button */}
            <div className="flex flex-col gap-4 lg:gap-5 w-full lg:w-[240px] shrink-0">
              {/* Title */}
              <h2 className="font-itc-blair text-white text-[28px] lg:text-[38px] leading-none">
                <span className="block">ferrari</span>
                <span className="block">296 gts</span>
              </h2>

              {/* Price + Button */}
              <div className="flex flex-col gap-5 lg:gap-7 w-full">
                {/* Price text */}
                <div className="flex flex-col gap-1 text-[16px] lg:text-[22px] leading-[1.2] text-white">
                  <p className="font-aeonik-bold">a partire da:</p>
                  <p className="font-aeonik">1.400€ al giorno</p>
                </div>

                {/* Button */}
                <button className="bg-white text-black font-itc-blair px-5 py-3 rounded-lg text-[13px] lg:text-[14px] hover:bg-gray-100 transition-colors w-fit">
                  scopri di più
                </button>
              </div>
            </div>

            {/* Ferrari Image - aligned to right */}
            <div className="relative w-full lg:w-[60%] h-[200px] lg:h-[350px]">
              <img
                src="/images/ferrari_home_scritte.png"
                alt="Ferrari 296 GTS"
                className="absolute inset-0 w-full h-full object-contain object-right pointer-events-none"
              />
            </div>
          </div>

          {/* Bottom Row: Slogan + Specs */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-end justify-between w-full">
            {/* Slogan */}
            <h3 className="font-itc-blair text-white text-[20px] lg:text-[32px] leading-[1.1] w-full lg:max-w-[420px]">
              TRASFORMA OGNI STRADA IN UN&apos;ESPERIENZA UNICA
            </h3>

            {/* Specs */}
            <div className="w-full lg:w-[240px] shrink-0">
              {/* TOP SPEED */}
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-itc-blair text-white text-[14px] lg:text-[18px]">TOP SPEED</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-itc-blair text-white text-[9px] lg:text-[10px]">km/h</span>
                  <span className="font-itc-blair text-white text-[10px] lg:text-[11px]">330</span>
                </div>
              </div>
              <div className="w-[75%] lg:w-[180px] h-[1px] bg-white/40 mb-2" />

              {/* 0-100 km/h */}
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-itc-blair text-white text-[14px] lg:text-[18px]">0-100 km/h</span>
                <span className="font-itc-blair text-white text-[10px] lg:text-[11px]">2.9 s</span>
              </div>
              <div className="w-[75%] lg:w-[180px] h-[1px] bg-white/40 mb-2" />

              {/* cavalli */}
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-itc-blair text-white text-[14px] lg:text-[18px]">cavalli</span>
                <span className="font-itc-blair text-white text-[10px] lg:text-[11px]">830</span>
              </div>
              <div className="w-[75%] lg:w-[180px] h-[1px] bg-white/40 mb-2" />

              {/* motore ibrido */}
              <div className="flex justify-between items-baseline">
                <span className="font-itc-blair text-white text-[14px] lg:text-[18px]">motore ibrido</span>
                <span className="font-itc-blair text-white text-[10px] lg:text-[11px]">v6</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Section - Title over image */}
      <section className="relative w-full h-[50vh] lg:h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/images/interno_home.png"
            alt="Interior Ferrari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.9) 100%)'
          }} />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-10">
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[42px] leading-[1.15] max-w-[650px]">
            STILE E LUSSO PER LA TUA ESPERIENZA
          </h2>
        </div>
      </section>

      {/* Interior Section - Text on black background */}
      <section className="relative w-full bg-black py-12">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="font-aeonik text-white/80 text-[13px] lg:text-[15px] leading-[1.7] mb-6">
            Noleggia la <span className="font-aeonik-bold">Ferrari 296 GTS</span> e vivi un&apos;esperienza di guida unica tra potenza e stile. Con i suoi 830 CV, il motore V6 ibrido e il tetto retrattile, la 296 GTS unisce prestazioni straordinarie e design inconfondibile. Perfetta per eventi esclusivi, weekend di lusso o semplicemente per provare l&apos;adrenalina pura di guidare una supercar italiana. Scopri il nostro servizio di noleggio Ferrari a ore, giornata intera oppure weekend e trasforma ogni viaggio in un&apos;esperienza indimenticabile. Prenota ora e porta la leggenda su strada!
          </p>
          <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
            vedi i dettagli
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative w-full py-16">
        <div className="absolute inset-0">
          <img
            src="/images/immagine_sfondo_box.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 90%)'
          }} />
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
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

      {/* Events Section */}
      <section className="relative w-full py-16 lg:py-20">
        {/* Section Title */}
        <div className="text-center mb-12 px-6">
          <img
            src="/images/logo_altitudo.png"
            alt="Altitudo"
            className="h-[40px] lg:h-[50px] w-auto mx-auto mb-4"
          />
          <h2 className="font-itc-blair text-white text-[28px] md:text-[36px] lg:text-[42px] text-center">
            altitudo per i tuoi eventi
          </h2>
        </div>

        {/* Compleanni - Image touches LEFT edge */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="relative w-full lg:w-[55%] h-[280px] lg:h-[360px] flex-shrink-0 overflow-hidden">
            <img
              src="/images/compleanni_home.png"
              alt="Compleanni"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black hidden lg:block" />
          </div>
          <div className="w-full lg:w-[45%] py-6 lg:py-0 px-6 lg:px-0 lg:pl-10 lg:pr-16">
            <h3 className="font-itc-blair text-white text-[24px] lg:text-[28px] mb-4">
              COMPLEANNI
            </h3>
            <div className="font-aeonik text-white text-[13px] leading-[1.6] mb-5">
              <p className="mb-3">
                Un compleanno così… non te lo dimentichi.
              </p>
              <p className="mb-3">
                Ci sono compleanni, e poi ci sono quelli che iniziano con il rombo di una Ferrari 296 GTS. Se stai cercando un modo davvero originale per festeggiare, questo è il momento di trasformare la tua giornata in un&apos;esperienza fuori dall&apos;ordinario.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>un giro emozionante di qualche ora</li>
                <li>una giornata intera da protagonista</li>
                <li>un weekend che non vorrai far finire mai</li>
              </ul>
            </div>
            <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
              vedi i dettagli
            </button>
          </div>
        </div>

        {/* Shooting - Image touches RIGHT edge */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
          <div className="relative w-full lg:w-[55%] h-[280px] lg:h-[360px] flex-shrink-0 overflow-hidden">
            <img
              src="/images/shooting_home.png"
              alt="Shooting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black hidden lg:block" />
          </div>
          <div className="w-full lg:w-[45%] py-6 lg:py-0 px-6 lg:px-0 lg:pr-10 lg:pl-16">
            <h3 className="font-itc-blair text-white text-[24px] lg:text-[28px] mb-4">
              SHOOTING
            </h3>
            <div className="font-aeonik text-white text-[13px] leading-[1.6] mb-5">
              <p className="mb-3">
                Quando vuoi fare colpo, scegli una leggenda.
              </p>
              <p className="mb-3">
                La luce giusta? C&apos;è. L&apos;inquadratura perfetta? Trovata. Ora serve solo un&apos;auto che faccia la differenza. Ogni dettaglio di questa supercar italiana comunica lusso, forza e desiderabilità.
              </p>
              <p className="mb-2">Che tu stia organizzando:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>uno shooting fotografico di moda</li>
                <li>un videoclip musicale</li>
                <li>uno spot pubblicitario o una produzione cinematografica</li>
              </ul>
              <p>...con il nostro noleggio Ferrari porti stile ed eleganza ai massimi livelli.</p>
            </div>
            <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
              vedi i dettagli
            </button>
          </div>
        </div>

        {/* Matrimoni - Image touches LEFT edge */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative w-full lg:w-[55%] h-[280px] lg:h-[360px] flex-shrink-0 overflow-hidden">
            <img
              src="/images/matrimonio_home.png"
              alt="Matrimoni"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black hidden lg:block" />
          </div>
          <div className="w-full lg:w-[45%] py-6 lg:py-0 px-6 lg:px-0 lg:pl-10 lg:pr-16">
            <h3 className="font-itc-blair text-white text-[24px] lg:text-[28px] mb-4">
              MATRIMONI
            </h3>
            <div className="font-aeonik text-[#d9d9d9] text-[13px] leading-[1.6] mb-5">
              <p className="mb-3">
                Quel giorno deve essere perfetto. E una Ferrari non è un dettaglio. È una dichiarazione.
              </p>
              <p className="mb-3">
                Il matrimonio è fatto di scelte indimenticabili. La location, l&apos;abito, il primo sguardo… e l&apos;arrivo. Con pacchetti flessibili e personalizzati, puoi scegliere se guidare tu o farti accompagnare da un nostro autista.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>l&apos;arrivo trionfale della sposa o dello sposo</li>
                <li>il trasporto degli sposi durante l&apos;evento</li>
                <li>uno sfondo esclusivo per le foto di nozze</li>
                <li>un tocco di classe per chi vuole qualcosa di unico</li>
              </ul>
            </div>
            <button className="bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[14px] hover:bg-gray-100 transition-colors">
              vedi i dettagli
            </button>
          </div>
        </div>
      </section>

      {/* Dream Section */}
      <section className="relative w-full py-14">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-itc-blair text-white text-[22px] md:text-[28px] lg:text-[32px] mb-4">
            IL SOGNO É PIÚ VICINO DI QUANTO PENSI
          </h2>
          <p className="font-aeonik text-white/80 text-[13px] lg:text-[15px] leading-[1.6]">
            Hai sempre sognato di guidarla. Ora puoi farlo davvero. Che sia per un compleanno, un matrimonio, uno shooting o semplicemente per regalarti il brivido della velocità su strada, il nostro servizio di noleggio Ferrari a ore, giornaliero o weekend è la porta d&apos;accesso a un mondo dove tutto profuma di libertà e prestigio.
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
                <li><a href="#" className="hover:opacity-80 transition-opacity">SHOOTING</a></li>
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
