"use client";

import { useEffect } from "react";
import TermsConsent from "@/components/TermsConsent";
import DateTimeField from "@/components/DateTimeField";

export default function EventoFerrari() {
  /* Hide the global SiteFooter and WhatsApp button rendered by root layout */
  useEffect(() => {
    const rootFooter = document.querySelector<HTMLElement>(
      "body > footer"
    );
    const whatsappBtn = document.querySelector<HTMLElement>(
      'a[aria-label="Contattaci su WhatsApp"]'
    );
    if (rootFooter) rootFooter.style.display = "none";
    if (whatsappBtn) whatsappBtn.style.display = "none";

    return () => {
      if (rootFooter) rootFooter.style.display = "";
      if (whatsappBtn) whatsappBtn.style.display = "";
    };
  }, []);

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      {/* ====== 1. HERO SECTION ====== */}
      <section className="relative h-screen w-full">
        {/* Desktop image – object-[center_60%] keeps Ferrari visible, crops sky */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="/images/landing%20evento.png"
            alt="Pranzo con Ferrari - Tenuta Cambiaga"
            className="w-full h-full object-cover object-[center_60%]"
            style={{ objectPosition: 'center calc(60% - 80px)' }}
          />
        </div>
        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/images/landing%20evento.png"
            alt="Pranzo con Ferrari - Tenuta Cambiaga"
            className="w-full h-full object-cover object-[center_60%]"
            style={{ objectPosition: 'center calc(60% - 80px)' }}
          />
        </div>
        {/* Gradient overlay – only darkens bottom strip where text lives */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 80%, rgb(0,0,0) 100%)",
          }}
        />

        {/* Logo positioned relative to the title (40px above) */}

        {/* Hero content – title, subtitle & CTA pinned to the bottom */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-[6vh]">
          <img
            src="/images/logo_altitudo.png"
            alt="Altitudo"
            className="w-[50px] lg:w-[60px] h-auto mb-[40px]"
          />
          <h1 className="font-itc-blair text-white text-[22px] md:text-[32px] lg:text-[42px] leading-[1.15] tracking-tight mb-3 max-w-[800px] uppercase">
            Un pranzo, una Ferrari,
            <br />
            un ricordo per sempre
          </h1>
          <p className="font-aeonik text-white/90 text-[14px] lg:text-[18px] leading-[1.5] mb-6 max-w-[600px]">
            Sabato 12 Aprile &middot; Tenuta Cambiaga, Robecco sul Naviglio
          </p>
          <a
            href="#richiedi-info"
            className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors"
          >
            RICHIEDI MAGGIORI INFORMAZIONI
          </a>
        </div>
      </section>

      {/* ====== 2. L'ESPERIENZA ====== */}
      <section className="relative w-full py-20 lg:py-28">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/luci_altitudo.png"
            alt=""
            className="w-full h-full object-contain object-top opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(35deg, rgba(0,0,0,0) 63%, rgb(0,0,0) 98%), linear-gradient(-34deg, rgba(0,0,0,0) 62%, rgb(0,0,0) 97%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6">
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] text-center mb-10 uppercase">
            L&apos;esperienza
          </h2>

          <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.7] text-center max-w-[750px] mx-auto no-hyphen">
            <p className="mb-5">
              Immagina una giornata diversa da tutte le altre. Il profumo
              dell&apos;erba appena tagliata, il calore di un pranzo in
              famiglia tra le campagne del Naviglio, e poi{" "}
              <span className="font-aeonik-bold">
                lo sguardo dei tuoi figli che si illumina
              </span>{" "}
              davanti alla maestosit&agrave; di una Ferrari 296 GTS.
            </p>
            <p className="mb-5">
              Questo non &egrave; un semplice pranzo fuori. &Egrave;
              un&apos;esperienza pensata per chi vuole{" "}
              <span className="font-aeonik-bold">
                regalare un ricordo indimenticabile alla propria famiglia
              </span>
              . L&apos;emozione di un bambino che tocca per la prima volta la
              carrozzeria di una supercar. L&apos;orgoglio di un padre che
              condivide una passione. La gioia di una giornata vissuta insieme,
              in un contesto autentico e speciale.
            </p>
            <p className="mb-5">
              La{" "}
              <span className="font-aeonik-bold">Ferrari 296 GTS</span>, con i
              suoi 830 cavalli e un design mozzafiato, sar&agrave; la
              protagonista della giornata. Potrai ammirarla, fotografarla e,
              se lo desideri, vivere l&apos;adrenalina di un&apos;esperienza
              di guida che non dimenticherai mai.
            </p>
            <p>
              Il tutto immerso nell&apos;atmosfera calda e genuina della{" "}
              <span className="font-aeonik-bold">Tenuta Cambiaga</span>, tra
              piatti della tradizione lombarda e il fascino della campagna
              milanese.
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="#richiedi-info"
              className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors"
            >
              RICHIEDI MAGGIORI INFORMAZIONI
            </a>
          </div>
        </div>
      </section>

      {/* Full-width Ferrari image break */}
      <section className="relative w-full h-[35vh] lg:h-[450px]">
        <img
          src="/images/interno_home.png"
          alt="Interni Ferrari 296 GTS"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 25%), linear-gradient(180deg, rgba(0,0,0,0) 75%, rgb(0,0,0) 100%)",
          }}
        />
      </section>

      {/* ====== 3. LA LOCATION ====== */}
      <section className="relative w-full py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="no-hyphen-location">
            {/* Title + decorative line (centered) */}
            <h2 className="text-center font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.1] tracking-[0.16em] uppercase mb-3">
              La Location
            </h2>
            <div className="mx-auto h-[2px] w-[72px] bg-white/25 mb-6" />

            {/* Centered body copy */}
            <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.7] text-center max-w-[700px] mx-auto">
              <p className="mb-4">
                L&apos;evento si svolge presso l&apos;
                <span className="font-aeonik-bold">
                  Agriturismo Tenuta Cambiaga
                </span>
                , a Robecco sul Naviglio, alle porte di Milano. Un luogo dove
                il tempo rallenta e la natura diventa protagonista.
              </p>
              <p className="mb-4">
                Circondata da campi coltivati e antiche cascine, la Tenuta
                offre un&apos;atmosfera{" "}
                <span className="font-aeonik-bold">
                  rurale, accogliente e familiare
                </span>
                : il contesto perfetto per una giornata che unisce la
                genuinit&agrave; della campagna lombarda all&apos;emozione di
                una supercar italiana.
              </p>
              <p>
                Un pranzo con ingredienti locali, spazi verdi dove i bambini
                possono correre liberi, e la Ferrari 296 GTS che svetta
                elegante nel cortile della tenuta. Ogni dettaglio &egrave;
                pensato per farti vivere qualcosa di unico.
              </p>
            </div>

            {/* Centered button */}
            <div className="text-center mt-8">
              <a
                href="#richiedi-info"
                className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors"
              >
                RICHIEDI MAGGIORI INFORMAZIONI
              </a>
            </div>
          </div>

          {/* Mappa rimossa su richiesta */}
        </div>
      </section>

      {/* ====== 4. I PACCHETTI ====== */}
      <section className="relative w-full pt-10 lg:pt-14 pb-20 lg:pb-28">
        {/* Decorative image to the right of the section header */}
        <img
          aria-hidden="true"
          src="/images/ferrari_home.png"
          alt=""
          className="pointer-events-none select-none hidden md:block absolute right-0 -top-6 lg:-top-10 w-[30%] lg:w-[26%] max-w-[520px] h-auto object-contain opacity-95"
        />
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] mb-4 uppercase">
              I Pacchetti
            </h2>
            <p className="font-aeonik text-white/80 text-[14px] lg:text-[16px] leading-[1.5] max-w-[600px] mx-auto">
              Due esperienze pensate per te. Scegli quella che pi&ugrave; si
              adatta ai tuoi desideri e a quelli della tua famiglia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Pacchetto 1 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 lg:p-8 flex flex-col">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] tracking-wide self-start">
                Pacchetto 1
              </span>

              <h3 className="font-itc-blair text-white text-[20px] lg:text-[24px] leading-tight mb-6 uppercase">
                Pranzo + Shooting
              </h3>

              <ul className="font-aeonik text-white text-[14px] lg:text-[15px] leading-[1.7] space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/70 mt-[2px] shrink-0"
                  >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                  </svg>
                  <span>
                    Pranzo completo presso la Tenuta Cambiaga con menu della
                    tradizione lombarda
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/70 mt-[2px] shrink-0"
                  >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                  </svg>
                  <span>
                    Sessione fotografica professionale con la Ferrari 296 GTS
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/70 mt-[2px] shrink-0"
                  >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                  </svg>
                  <span>
                    Foto ricordo con la tua famiglia a bordo della supercar
                  </span>
                </li>
              </ul>

              <a
                href="#richiedi-info"
                className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors self-start"
              >
                RICHIEDI MAGGIORI INFORMAZIONI
              </a>
            </div>

            {/* Pacchetto 2 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 lg:p-8 flex flex-col">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] tracking-wide self-start">
                Pacchetto 2
              </span>

              <h3 className="font-itc-blair text-white text-[20px] lg:text-[24px] leading-tight mb-6 uppercase">
                Pranzo + Shooting + Drive
              </h3>

              <ul className="font-aeonik text-white text-[14px] lg:text-[15px] leading-[1.7] space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/70 mt-[2px] shrink-0"
                  >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                  </svg>
                  <span>
                    Pranzo completo presso la Tenuta Cambiaga con menu della
                    tradizione lombarda
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/70 mt-[2px] shrink-0"
                  >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                  </svg>
                  <span>
                    Sessione fotografica professionale con la Ferrari 296 GTS
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/70 mt-[2px] shrink-0"
                  >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                  </svg>
                  <span>
                    Esperienza di guida sulla Ferrari 296 GTS lungo le strade
                    del Naviglio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/70 mt-[2px] shrink-0"
                  >
                    <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                  </svg>
                  <span>
                    L&apos;adrenalina di 830 cavalli e un ricordo che rester&agrave;
                    per sempre
                  </span>
                </li>
              </ul>

              <a
                href="#richiedi-info"
                className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors self-start"
              >
                RICHIEDI MAGGIORI INFORMAZIONI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Ferrari image break */}
      <section className="relative w-full h-[35vh] lg:h-[450px]">
        <img
          src="/images/muso_eventi.png"
          alt="Ferrari 296 GTS frontale"
          className="w-full h-full object-cover"
        />
        {/* Left text block vertically centered on black area */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="px-6 lg:px-16 w-full flex justify-start">
            <div className="menu-block max-w-[560px] w-full lg:w-1/2 text-left">
              <h3 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] uppercase mb-4">
                IL MENÙ
              </h3>
              <ul className="font-aeonik text-white/90 text-[13px] lg:text-[15px] leading-[1.7] divide-y divide-white/10">
                <li className="py-2">Entrée di benvenuto</li>
                <li className="py-2">Tagliere di salumi</li>
                <li className="py-2">Vitello tonnato</li>
                <li className="py-2">Riso carnaroli allo zafferano</li>
                <li className="py-2">Tagliatina di vitellone alla senape e miele</li>
                <li className="py-2 text-white">Torta finale</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 25%), linear-gradient(180deg, rgba(0,0,0,0) 75%, rgb(0,0,0) 100%)",
          }}
        />
      </section>
      <style jsx>{`
        .menu-block p,
        .menu-block li,
        .menu-block h3 {
          hyphens: none;
          -webkit-hyphens: none;
          -ms-hyphens: none;
          word-break: keep-all;
          overflow-wrap: normal;
        }
      `}</style>

      {/* ====== 5. PROGRAMMA DELLA GIORNATA ====== */}
      <section className="relative w-full py-20 lg:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] text-center mb-4 uppercase">
            Il Programma della Giornata
          </h2>
          <p className="font-aeonik text-white/70 text-[14px] lg:text-[15px] text-center mb-14 max-w-[500px] mx-auto">
            Sabato 12 Aprile &middot; Tenuta Cambiaga
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-white/15" />

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row md:items-start mb-14 last:mb-0">
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  11:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] mt-1 uppercase">
                  Accoglienza
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Arrivo in Tenuta, benvenuto con aperitivo e primo incontro con
                  la Ferrari 296 GTS esposta nel cortile.
                </p>
              </div>
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-[16px] h-[16px] rounded-full bg-white ring-4 ring-black z-10" />
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  11:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] mt-1 uppercase">
                  Accoglienza
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Arrivo in Tenuta, benvenuto con aperitivo e primo incontro con
                  la Ferrari 296 GTS esposta nel cortile.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2 md:pl-12" />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row md:items-start mb-14 last:mb-0">
              <div className="hidden md:block md:w-1/2 md:pr-12" />
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-[16px] h-[16px] rounded-full bg-white ring-4 ring-black z-10" />
              {/* Desktop content */}
              <div className="hidden md:block md:w-1/2 md:pl-12">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  12:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] mt-1 uppercase">
                  Pranzo
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Pranzo della tradizione lombarda con ingredienti locali e
                  genuini, nell&apos;atmosfera accogliente dell&apos;agriturismo.
                </p>
              </div>
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  12:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] mt-1 uppercase">
                  Pranzo
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Pranzo della tradizione lombarda con ingredienti locali e
                  genuini, nell&apos;atmosfera accogliente dell&apos;agriturismo.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row md:items-start mb-14 last:mb-0">
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  14:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] mt-1 uppercase">
                  Shooting Fotografico
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Sessione fotografica professionale con la Ferrari 296 GTS.
                  Scatti individuali, in famiglia e con i bambini a bordo della
                  supercar.
                </p>
              </div>
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-[16px] h-[16px] rounded-full bg-white ring-4 ring-black z-10" />
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  14:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] mt-1 uppercase">
                  Shooting Fotografico
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Sessione fotografica professionale con la Ferrari 296 GTS.
                  Scatti individuali, in famiglia e con i bambini a bordo della
                  supercar.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2 md:pl-12" />
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row md:items-start">
              <div className="hidden md:block md:w-1/2 md:pr-12" />
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-[16px] h-[16px] rounded-full bg-white ring-4 ring-black z-10" />
              {/* Desktop content */}
              <div className="hidden md:block md:w-1/2 md:pl-12">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  15:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] mt-1 uppercase">
                  Esperienza di Guida
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Per chi ha scelto il Pacchetto 2: il momento tanto atteso.
                  Mettiti al volante della Ferrari 296 GTS e vivi
                  l&apos;adrenalina pura lungo le strade del Naviglio.
                </p>
              </div>
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <span className="font-itc-blair text-white/50 text-[13px]">
                  15:30
                </span>
                <h3 className="font-itc-blair text-white text-[18px] mt-1 uppercase">
                  Esperienza di Guida
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Per chi ha scelto il Pacchetto 2: il momento tanto atteso.
                  Mettiti al volante della Ferrari 296 GTS e vivi
                  l&apos;adrenalina pura lungo le strade del Naviglio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. FORM – RICHIEDI INFORMAZIONI ====== */}
      <section
        id="richiedi-info"
        className="relative w-full py-14 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-itc-blair text-white text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-4 uppercase">
            Vuoi partecipare? Scrivici!
          </h2>
          <p className="font-aeonik text-white text-[12px] lg:text-[13px] leading-[1.5] mb-8 max-w-[500px] mx-auto">
            Compila il modulo per ricevere tutti i dettagli sull&apos;evento,
            i prezzi dei pacchetti e riservare il tuo posto per il 12 Aprile.
          </p>

          {/* Form - copied as-is from existing pages */}
          <form
            action="/api/send-email"
            method="post"
            className="space-y-4 mb-8"
          >
            <input
              type="hidden"
              name="formName"
              value="booking-evento-ferrari"
            />
            <input
              type="hidden"
              name="pageTitle"
              value="Evento Ferrari Tenuta Cambiaga - Richiesta Info"
            />
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
              <DateTimeField
                ariaLabel="Dal"
                title="Dal (data e ora)"
                nameCombined="fromDateTime"
                required
              />
              <DateTimeField
                ariaLabel="Al"
                title="Al (data e ora)"
                nameCombined="toDateTime"
                required
              />
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
              <TermsConsent checkboxId="terms-evento-ferrari" />
            </div>
            <button
              type="submit"
              className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors"
            >
              RICHIEDI MAGGIORI INFORMAZIONI
            </button>
          </form>
        </div>
      </section>

      {/* Mini footer with logo only */}
      <div className="w-full py-10 text-center border-t border-white/10">
        <img
          src="/images/logo_altitudo_esteso.png"
          alt="Altitudo"
          className="h-[24px] w-auto mx-auto mb-3"
        />
        <p className="font-aeonik text-white/50 text-[11px]">
          2026 - ALTITUDO LUXURY RENT - All rights Reserved
        </p>
      </div>
      {/* Local page-only styles consolidated to avoid nested styled-jsx errors */}
      <style jsx global>{`
        .no-hyphen p {
          hyphens: none;
          -webkit-hyphens: none;
          -ms-hyphens: none;
          word-break: keep-all;
          overflow-wrap: normal;
        }
        .no-hyphen-location * {
          hyphens: none;
          -webkit-hyphens: none;
          -ms-hyphens: none;
          word-break: keep-all;
          overflow-wrap: normal;
        }
        .menu-block p,
        .menu-block li,
        .menu-block h3 {
          hyphens: none;
          -webkit-hyphens: none;
          -ms-hyphens: none;
          word-break: keep-all;
          overflow-wrap: normal;
        }
      `}</style>
    </main>
  );
}
