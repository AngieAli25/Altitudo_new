"use client";

import { useEffect, useRef } from "react";

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

  /* Scroll-triggered reveal animations */
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={mainRef} className="evento-ferrari-page bg-black min-h-screen w-full overflow-x-hidden">
      {/* ====== 1. HERO SECTION ====== */}
      <section className="relative h-[100svh] w-full">
        <div className="absolute inset-0">
          <img
            src="/images/landing%20evento.png"
            alt="Pranzo con Ferrari - Tenuta Cambiaga"
            className="w-full h-full object-cover"
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
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-5 md:px-6 pb-[8vh] md:pb-[6vh]">
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
            Domenica 12 Aprile &middot; Tenuta Cambiaga, Robecco sul Naviglio
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

        <div className="relative z-10 max-w-[900px] mx-auto px-6" data-animate>
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] text-center mb-10 uppercase">
            L&apos;esperienza
          </h2>

          <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.7] text-center max-w-[750px] mx-auto no-hyphen">
            <p className="mb-5">
              Immagina una giornata diversa da tutte le altre. Un pranzo in
              famiglia tra le campagne del Naviglio e{" "}
              <span className="font-aeonik-bold">
                lo sguardo dei tuoi figli che si illumina
              </span>{" "}
              davanti a una Ferrari 296 GTS.
            </p>
            <p className="mb-5">
              Non un semplice pranzo fuori, ma un&apos;esperienza pensata per{" "}
              <span className="font-aeonik-bold">
                regalare un ricordo indimenticabile alla tua famiglia
              </span>
              . La{" "}
              <span className="font-aeonik-bold">Ferrari 296 GTS</span>, con i
              suoi 830 cavalli, sar&agrave; la protagonista: potrai ammirarla,
              fotografarla e vivere l&apos;adrenalina di un&apos;esperienza di
              guida unica.
            </p>
            <p>
              Il tutto nell&apos;atmosfera genuina della{" "}
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

      {/* ====== 3. LA LOCATION ====== */}
      <section className="relative w-full py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="no-hyphen-location grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center" data-animate>
            {/* Left column – text */}
            <div>
              <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] uppercase mb-3">
                La Location
              </h2>
              <div className="h-[2px] w-[72px] bg-white/25 mb-6" />

              <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.7]">
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

              <div className="mt-8">
                <a
                  href="#richiedi-info"
                  className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors"
                >
                  RICHIEDI MAGGIORI INFORMAZIONI
                </a>
              </div>
            </div>

            {/* Right column – image with black gradient */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/tenuta_cambiaga_robecco_image.jpg"
                alt="Tenuta Cambiaga, Robecco sul Naviglio"
                className="w-full h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%), linear-gradient(270deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== 4. I PACCHETTI ====== */}
      <section className="relative w-full pt-10 lg:pt-14 pb-20 lg:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12" data-animate>
            <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] mb-4 uppercase">
              I Pacchetti
            </h2>
            <p className="font-aeonik text-white/80 text-[14px] lg:text-[16px] leading-[1.5] max-w-[600px] mx-auto">
              Tre esperienze pensate per te. Scegli quella che pi&ugrave; si
              adatta ai tuoi desideri e a quelli della tua famiglia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Pacchetto 1 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 lg:p-8 flex flex-col" data-animate>
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
                richiedi informazioni
              </a>
            </div>

            {/* Pacchetto 2 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 lg:p-8 flex flex-col" data-animate>
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
                richiedi informazioni
              </a>
            </div>

            {/* Pacchetto 3 */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 lg:p-8 flex flex-col" data-animate>
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] tracking-wide self-start">
                Pacchetto 3
              </span>

              <h3 className="font-itc-blair text-white text-[20px] lg:text-[24px] leading-tight mb-6 uppercase">
                Pranzo + Shooting + Giro in Ferrari con autista
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
                    Giro in Ferrari 296 GTS con autista lungo le strade del
                    Naviglio
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
                    L&apos;emozione della supercar in totale relax, senza
                    pensieri
                  </span>
                </li>
              </ul>

              <a
                href="#richiedi-info"
                className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap text-center hover:bg-gray-100 transition-colors self-start"
              >
                richiedi informazioni
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== IL MENÙ ====== */}
      <section className="relative w-full py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center" data-animate>
            {/* Left column – menu text */}
            <div className="menu-block text-left">
              <h3 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] uppercase mb-6">
                IL MENÙ
              </h3>

              <div className="space-y-3 font-aeonik text-[13px] lg:text-[15px] leading-[1.6]">
                {/* Entrée */}
                <div>
                  <span className="font-itc-blair text-white/50 text-[11px] lg:text-[12px] uppercase tracking-widest">
                    Entr&eacute;e
                  </span>
                  <p className="text-white/90 mt-1">L&apos;Entr&egrave;e di benvenuto</p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Antipasti */}
                <div>
                  <span className="font-itc-blair text-white/50 text-[11px] lg:text-[12px] uppercase tracking-widest">
                    Antipasti
                  </span>
                  <p className="text-white/90 mt-1">
                    Tagliere dei salumi della nostra Tenuta Cambiaga
                  </p>
                  <p className="text-white/90 mt-2">Vitello in salsa tonnata e fiore di cappero</p>
                  <p className="text-white/90 mt-2">Tarte tatin salata agli asparagi e provola</p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Primo */}
                <div>
                  <span className="font-itc-blair text-white/50 text-[11px] lg:text-[12px] uppercase tracking-widest">
                    Primo
                  </span>
                  <p className="text-white/90 mt-1">Riso carnaroli, zafferano, zucchine e robiola</p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Secondo */}
                <div>
                  <span className="font-itc-blair text-white/50 text-[11px] lg:text-[12px] uppercase tracking-widest">
                    Secondo
                  </span>
                  <p className="text-white/90 mt-1">Tagliatina di vitellone alla senape e miele</p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Dolce */}
                <div>
                  <span className="font-itc-blair text-white/50 text-[11px] lg:text-[12px] uppercase tracking-widest">
                    Dolce
                  </span>
                  <p className="text-white/90 mt-1">Torta della casa</p>
                </div>

              </div>
            </div>

            {/* Right column – dish image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/piatto_menu_altitudo.png"
                alt="Piatto del menù"
                className="w-full h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%), linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ====== 5. PROGRAMMA DELLA GIORNATA ====== */}
      <section className="relative w-full py-20 lg:py-28">
        {/* Decorative image – right side, desktop only */}
        <img
          aria-hidden="true"
          src="/images/muso_eventi.png"
          alt=""
          className="pointer-events-none select-none hidden lg:block absolute right-0 top-[10%] w-[48%] max-w-[640px] h-auto object-contain opacity-70"
          style={{
            maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 md:px-6">
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] text-center mb-4 uppercase">
            Il Programma della Giornata
          </h2>
          <p className="font-aeonik text-white/70 text-[14px] lg:text-[15px] text-center mb-14 max-w-[500px] mx-auto">
            Domenica 12 Aprile &middot; Tenuta Cambiaga
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-white/15" />

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row md:items-start mb-14 last:mb-0" data-animate>
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] uppercase">
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
                <h3 className="font-itc-blair text-white text-[18px] uppercase">
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
            <div className="relative flex flex-col md:flex-row md:items-start mb-14 last:mb-0" data-animate>
              <div className="hidden md:block md:w-1/2 md:pr-12" />
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-[16px] h-[16px] rounded-full bg-white ring-4 ring-black z-10" />
              {/* Desktop content */}
              <div className="hidden md:block md:w-1/2 md:pl-12">
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] uppercase">
                  Pranzo
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Pranzo della tradizione lombarda con ingredienti locali e
                  genuini, nell&apos;atmosfera accogliente dell&apos;agriturismo.
                </p>
              </div>
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <h3 className="font-itc-blair text-white text-[18px] uppercase">
                  Pranzo
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Pranzo della tradizione lombarda con ingredienti locali e
                  genuini, nell&apos;atmosfera accogliente dell&apos;agriturismo.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row md:items-start mb-14 last:mb-0" data-animate>
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] uppercase">
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
                <h3 className="font-itc-blair text-white text-[18px] uppercase">
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
            <div className="relative flex flex-col md:flex-row md:items-start" data-animate>
              <div className="hidden md:block md:w-1/2 md:pr-12" />
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-[16px] h-[16px] rounded-full bg-white ring-4 ring-black z-10" />
              {/* Desktop content */}
              <div className="hidden md:block md:w-1/2 md:pl-12">
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] mt-1 uppercase">
                  Esperienza di Guida
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Per chi ha scelto il Pacchetto 2: il momento tanto atteso.
                  Mettiti al volante della Ferrari 296 GTS e vivi
                  l&apos;adrenalina pura lungo le strade del Naviglio. Per chi ha scelto il Pacchetto 3: un giro in Ferrari con autista, in totale relax, senza pensieri.
                </p>
              </div>
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <h3 className="font-itc-blair text-white text-[18px] uppercase">
                  Esperienza di Guida
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Per chi ha scelto il Pacchetto 2: il momento tanto atteso.
                  Mettiti al volante della Ferrari 296 GTS e vivi
                  l&apos;adrenalina pura lungo le strade del Naviglio. Per chi ha scelto il Pacchetto 3: un giro in Ferrari con autista, in totale relax, senza pensieri.
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
        <div className="max-w-[800px] mx-auto px-6 text-center" data-animate>
          <h2 className="font-itc-blair text-white text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-4 uppercase">
            Vuoi partecipare? Scrivici!
          </h2>
          <p className="font-aeonik text-white text-[12px] lg:text-[13px] leading-[1.5] mb-8 max-w-[500px] mx-auto">
            Compila il modulo per ricevere tutti i dettagli sull&apos;evento,
            i prezzi dei pacchetti e riservare il tuo posto per domenica 12 Aprile.
          </p>

          {/* Dedicated event form – independent from site-wide booking forms */}
          <form
            className="space-y-4 mb-8"
            onSubmit={async (e) => {
              e.preventDefault();
              const formEl = e.currentTarget;
              const data = new FormData(formEl);
              try {
                await fetch("/api/send-email", { method: "POST", body: data });
              } catch { /* ignore */ }
              window.location.href = "/evento-ferrari/grazie";
            }}
          >
            <input
              type="hidden"
              name="formName"
              value="evento-ferrari-info"
            />
            <input
              type="hidden"
              name="pageTitle"
              value="Evento Ferrari Tenuta Cambiaga - Richiesta Info"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="font-aeonik text-white/70 text-[13px] lg:text-[14px] mb-1.5 block">Nome</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Inserisci il tuo nome"
                  required
                  className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div className="text-left">
                <label className="font-aeonik text-white/70 text-[13px] lg:text-[14px] mb-1.5 block">Cognome</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Inserisci il tuo cognome"
                  required
                  className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="font-aeonik text-white/70 text-[13px] lg:text-[14px] mb-1.5 block">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="La tua email di contatto"
                  required
                  className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div className="text-left">
                <label className="font-aeonik text-white/70 text-[13px] lg:text-[14px] mb-1.5 block">Telefono</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Il tuo numero di telefono"
                  required
                  className="w-full h-11 bg-white/[0.08] rounded-lg px-4 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
            </div>
            <div className="text-left">
              <label className="font-aeonik text-white/70 text-[13px] lg:text-[14px] mb-1.5 block">Pacchetto</label>
              <div className="relative">
                <select
                  name="pacchetto"
                  className="w-full h-11 bg-white/[0.08] rounded-lg px-4 pr-10 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">
                    Seleziona il pacchetto di tuo interesse
                  </option>
                  <option value="Pacchetto 1 – Pranzo + Shooting" className="text-black">
                    Pacchetto 1 – Pranzo + Shooting
                  </option>
                  <option value="Pacchetto 2 – Pranzo + Shooting + Drive" className="text-black">
                    Pacchetto 2 – Pranzo + Shooting + Drive
                  </option>
                  <option value="Pacchetto 3 – Pranzo + Shooting + Giro in Ferrari con autista" className="text-black">
                    Pacchetto 3 – Pranzo + Shooting + Giro in Ferrari con autista
                  </option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-left">
              <label className="font-aeonik text-white/70 text-[13px] lg:text-[14px] mb-1.5 block">Messaggio</label>
              <textarea
                name="message"
                placeholder="Hai qualche domanda? Scrivila qui"
                rows={3}
                className="w-full bg-white/[0.08] rounded-lg px-4 py-3 text-white text-[13px] placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30 resize-none"
              />
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
      {/* Local page-only styles */}
      <style jsx global>{`
        .evento-ferrari-page,
        .evento-ferrari-page * {
          hyphens: none !important;
          -webkit-hyphens: none !important;
          -ms-hyphens: none !important;
          word-break: keep-all;
          overflow-wrap: normal;
        }

        /* Scroll reveal animations */
        [data-animate] {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        [data-animate].animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
