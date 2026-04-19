"use client";

import { useEffect, useRef } from "react";

export default function EventoFerrariProva() {
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

      {/* MOBILE hero */}
      <div className="md:hidden w-full">
        {/* Foto con logo + titolo sovrapposti in basso */}
        <div className="relative h-[60svh] w-full">
          <img
            src="/images/ferrrarimobile.png"
            alt="Esperienza in pista su Ferrari - Autodromo Tazio Nuvolari"
            className="hero-img w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 70%, rgb(0,0,0) 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center text-center px-5 pb-5">
            <img
              src="/images/logo_altitudo.png"
              alt="Altitudo"
              className="w-[40px] h-auto mb-4"
            />
            <h1 className="font-itc-blair text-white text-[20px] leading-[1.15] tracking-tight uppercase">
              Acquista o regala
              <br />
              un&apos;esperienza in pista
            </h1>
          </div>
        </div>
        {/* Sottotitolo + bottone sotto la foto */}
        <div className="flex flex-col items-center text-center px-5 pt-6 pb-8">
          <p className="font-aeonik text-white/90 text-[13px] leading-[1.5] mb-6">
            16 Maggio &middot; Autodromo Tazio Nuvolari 2.8, Cervesina (PV)
          </p>
          <a
            href="#richiedi-info"
            className="block w-full bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] text-center hover:bg-gray-100 transition-colors"
          >
            RICHIEDI MAGGIORI INFORMAZIONI
          </a>
        </div>
      </div>

      {/* DESKTOP hero – layout originale invariato */}
      <section className="relative hidden md:block md:h-[100svh] w-full">
        <div className="absolute inset-0">
          <img
            src="/images/nuova_macchina_evento.png"
            alt="Esperienza in pista su Ferrari - Autodromo Tazio Nuvolari"
            className="hero-img w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 80%, rgb(0,0,0) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center md:px-6 md:pb-[6vh]">
          <img
            src="/images/logo_altitudo.png"
            alt="Altitudo"
            className="w-[50px] lg:w-[60px] h-auto mb-[40px]"
          />
          <h1 className="font-itc-blair text-white md:text-[32px] lg:text-[42px] leading-[1.15] tracking-tight mb-3 max-w-[800px] uppercase">
            Acquista o regala
            <br />
            un&apos;esperienza in pista
          </h1>
          <p className="font-aeonik text-white/90 md:text-[14px] lg:text-[18px] leading-[1.5] mb-6 max-w-[600px]">
            16 Maggio &middot; Autodromo Tazio Nuvolari 2.8, Cervesina (PV)
          </p>
          <a
            href="#richiedi-info"
            className="md:inline-block md:w-auto bg-white text-black font-itc-blair px-6 py-3 rounded-lg md:text-[14px] text-center hover:bg-gray-100 transition-colors"
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
              Immagina di metterti al volante di una Ferrari su un circuito professionale.{" "}
              <span className="font-aeonik-bold">
                Non una simulazione — due giri di pista reali, ad alta velocità
              </span>{" "}
              sull&apos;Autodromo Tazio Nuvolari 2.8.
            </p>
            <p className="mb-5">
              Un&apos;esperienza{" "}
              <span className="font-aeonik-bold">riservata a un numero limitato di partecipanti</span>,
              dove sei tu a guidare — a sentirti il rombo del motore sotto i piedi e la pista che scorre davanti a te.
              Il{" "}
              <span className="font-aeonik-bold">video della tua esperienza</span> sarà incluso,
              per rivivere quei momenti ogni volta che vuoi.
            </p>
            <p>
              Puoi portare con te{" "}
              <span className="font-aeonik-bold">un ospite</span>: il pass è incluso.
              Potrà vivere l&apos;atmosfera del paddock e gustare il rinfresco offerto,
              restando accanto a te per tutta la giornata.
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="#richiedi-info"
              className="block w-full md:inline-block md:w-auto bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] text-center hover:bg-gray-100 transition-colors"
            >
              RICHIEDI MAGGIORI INFORMAZIONI
            </a>
          </div>
        </div>
      </section>

      {/* ====== 3. IL CIRCUITO ====== */}
      <section className="relative w-full py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="no-hyphen-location grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center" data-animate>
            {/* Left column – text */}
            <div>
              <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] uppercase mb-3">
                Il Circuito
              </h2>
              <div className="h-[2px] w-[72px] bg-white/25 mb-6" />

              <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.7]">
                <p className="mb-4">
                  L&apos;evento si svolge all&apos;
                  <span className="font-aeonik-bold">
                    Autodromo Tazio Nuvolari 2.8
                  </span>
                  , a Cervesina, in provincia di Pavia. Un circuito professionale immerso nell&apos;Oltrepò Pavese, progettato per regalare esperienze ad alta emozione.
                </p>
                <p className="mb-4">
                  Con i suoi 2,8 km di tracciato e le sue curve tecniche, il circuito è il palcoscenico ideale per vivere le{" "}
                  <span className="font-aeonik-bold">
                    prestazioni di una Ferrari al massimo delle sue possibilità
                  </span>
                  : sicurezza, adrenalina e professionalità in un contesto esclusivo.
                </p>
                <p>
                  Un luogo dove la velocità incontra il privilegio.
                  Due giri che ti lasceranno senza fiato — e un video per ricordarlo per sempre.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#richiedi-info"
                  className="block w-full md:inline-block md:w-auto bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] text-center hover:bg-gray-100 transition-colors"
                >
                  RICHIEDI MAGGIORI INFORMAZIONI
                </a>
              </div>
            </div>

            {/* Right column – image with black gradient */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/circuito.png"
                alt="Autodromo Tazio Nuvolari 2.8, Cervesina (PV)"
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

      {/* ====== 4. COSA È INCLUSO ====== */}
      <section className="relative w-full pt-10 lg:pt-14 pb-20 lg:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Card recap unica */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-8 lg:p-10" data-animate>
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

            <div className="mb-8 lg:mb-14 text-center">
              <h2 className="font-itc-blair text-white text-[24px] md:text-[30px] lg:text-[36px] leading-[1.15] mb-3 uppercase">
                L&apos;esperienza in sintesi
              </h2>
              <p className="font-aeonik text-white/70 text-[14px] lg:text-[15px] leading-[1.6] max-w-[620px] lg:max-w-[820px] mx-auto">
                Un evento esclusivo a numero limitato, pensato per chi vuole vivere qualcosa di unico. Guida una Ferrari su un circuito professionale per due giri e porta con te un ospite — il tutto con video incluso e un rinfresco offerto. Qui trovi tutti i dettagli che ti servono per decidere.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
              {[
                { title: "Luogo", desc: "Autodromo Tazio Nuvolari 2.8, Cervesina (PV)." },
                { title: "Data", desc: "16 Maggio 2026. Posti limitati, prenotazione necessaria." },
                { title: "Giri", desc: "2 giri di pista al volante di una Ferrari su circuito." },
                { title: "Pass ospite", desc: "Incluso. Puoi portare una persona con te." },
                { title: "Video", desc: "Incluso. La tua esperienza in pista ripresa integralmente." },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 px-6 py-5 lg:py-0 lg:px-8 text-center items-center
                    ${i !== arr.length - 1 ? "border-b sm:border-b-0 sm:border-r border-white/10 lg:border-b-0 lg:border-r" : ""}
                    ${i === 1 ? "sm:border-r-0 lg:border-r border-white/10" : ""}
                    ${i === 0 ? "lg:pl-0" : ""}
                    ${i === arr.length - 1 ? "lg:pr-0" : ""}
                  `}
                >
                  <p className="font-itc-blair text-white text-[15px] lg:text-[16px] uppercase leading-snug">
                    {item.title}
                  </p>
                  <p className="font-aeonik text-white/60 text-[12px] lg:text-[13px] leading-[1.55]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 lg:mt-14 flex justify-center">
              <a
                href="#richiedi-info"
                className="block w-full md:inline-block md:w-auto bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] text-center hover:bg-gray-100 transition-colors"
              >
                RICHIEDI MAGGIORI INFORMAZIONI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== IL RINFRESCO ====== */}
      <section className="relative w-full py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center" data-animate>
            {/* Left column – rinfresco text */}
            <div className="menu-block text-left">
              <h3 className="font-itc-blair text-white text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] uppercase mb-6">
                Il Rinfresco
              </h3>

              <div className="font-aeonik text-white text-[14px] lg:text-[16px] leading-[1.7] max-w-[480px]">
                <p className="mb-5">
                  Al termine dell&apos;esperienza in pista, potrai goderti un{" "}
                  <span className="font-aeonik-bold">rinfresco offerto</span>{" "}
                  con il tuo ospite: il momento perfetto per rielaborare l&apos;adrenalina vissuta e condividere l&apos;emozione appena vissuta.
                </p>
                <p className="mb-5">
                  Un&apos;occasione per rilassarsi nell&apos;atmosfera del paddock, tra chi ha vissuto la stessa esperienza esclusiva, in un contesto curato in ogni dettaglio.
                </p>
                <p>
                  Posti limitati: ogni partecipante avrà il tempo e lo spazio per vivere la giornata con la giusta attenzione.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#richiedi-info"
                  className="block w-full md:inline-block md:w-auto bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] text-center hover:bg-gray-100 transition-colors"
                >
                  RICHIEDI MAGGIORI INFORMAZIONI
                </a>
              </div>
            </div>

            {/* Right column – dish image (unchanged as per instructions) */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/23617.jpg"
                alt="Rinfresco"
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
            16 Maggio &middot; Autodromo Tazio Nuvolari 2.8, Cervesina (PV)
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
                  Arrivo all&apos;autodromo, registrazione e primo contatto con la Ferrari. L&apos;atmosfera del paddock ti accoglie per una giornata fuori dall&apos;ordinario.
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
                  Arrivo all&apos;autodromo, registrazione e primo contatto con la Ferrari. L&apos;atmosfera del paddock ti accoglie per una giornata fuori dall&apos;ordinario.
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
                  Rinfresco
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Un momento per ambientarsi e godersi l&apos;atmosfera del circuito. Il rinfresco offerto ti aspetta nel paddock, insieme al tuo ospite.
                </p>
              </div>
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <h3 className="font-itc-blair text-white text-[18px] uppercase">
                  Rinfresco
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Un momento per ambientarsi e godersi l&apos;atmosfera del circuito. Il rinfresco offerto ti aspetta nel paddock, insieme al tuo ospite.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row md:items-start" data-animate>
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <h3 className="font-itc-blair text-white text-[18px] lg:text-[20px] uppercase">
                  Esperienza in Pista
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] lg:text-[14px] leading-[1.6] mt-2">
                  Il momento che aspettavi. Mettiti al volante della Ferrari e affronta il circuito per{" "}
                  <span className="font-itc-blair">due giri</span> di pura adrenalina. Il tuo video cattura ogni istante.
                </p>
              </div>
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-1 w-[16px] h-[16px] rounded-full bg-white ring-4 ring-black z-10" />
              {/* Mobile content */}
              <div className="md:hidden pl-12">
                <h3 className="font-itc-blair text-white text-[18px] uppercase">
                  Esperienza in Pista
                </h3>
                <p className="font-aeonik text-white/70 text-[13px] leading-[1.6] mt-2">
                  Il momento che aspettavi. Mettiti al volante della Ferrari e affronta il circuito per due giri di pura adrenalina. Il tuo video cattura ogni istante.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2 md:pl-12" />
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
            i costi e riservare il tuo posto. I posti sono limitati — non aspettare.
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
              className="block w-full md:inline-block md:w-auto bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] text-center hover:bg-gray-100 transition-colors"
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

        /* Hero image position */
        .hero-img {
          object-position: center 20%;
        }
        @media (min-width: 768px) {
          .hero-img {
            object-position: center 90%;
          }
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
