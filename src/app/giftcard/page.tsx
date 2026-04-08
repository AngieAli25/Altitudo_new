import type { Metadata } from "next";
import DateTimeField from "@/components/DateTimeField";
import TermsConsent from "@/components/TermsConsent";

const CTA_HREF = "#prenota";

export const metadata: Metadata = {
  title: "Gift Card Altitudo | Ferrari 296 GTS Experience",
  description:
    "Con Altitudo, quanto spendi per l'evento viene riconosciuto sul primo noleggio Ferrari 296 GTS di almeno una giornata. Valido fino al 23 settembre.",
};

export default function GiftCardPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden [&_h1]:break-normal [&_h2]:break-normal [&_p]:break-normal [&_a]:break-normal [&_h1]:[hyphens:none] [&_h2]:[hyphens:none] [&_p]:[hyphens:none] [&_a]:[hyphens:none] [&_h1]:[word-break:normal] [&_h2]:[word-break:normal] [&_p]:[word-break:normal] [&_a]:[word-break:normal]">
      <section className="relative min-h-[88vh] md:min-h-screen w-full flex items-end pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="/images/ferrari_prezzi.png"
            alt="Ferrari 296 GTS Altitudo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black" />
        </div>

        <div className="relative z-10 max-w-[920px] mx-auto w-full px-6 lg:px-10 text-center">
          <img
            src="/images/logo_altitudo_esteso.png"
            alt="Altitudo"
            className="h-[28px] md:h-[32px] w-auto mx-auto mb-7 opacity-95"
          />
          <p className="font-aeonik text-white/75 text-[11px] md:text-[12px] tracking-[0.16em] uppercase mb-4">
            accesso riservato ospiti evento altitudo
          </p>
          <h1 className="font-itc-blair text-white text-[30px] md:text-[48px] lg:text-[60px] leading-[1.08]">
            Ferrari 296 GTS,
            <br />privilegio esclusivo Altitudo.
          </h1>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-6 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-40 hidden md:block w-[700px] h-[700px] opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 100% 35%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.18) 35%, rgba(255,255,255,0.0) 74%)",
            filter: "blur(45px)",
          }}
        />
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <p className="font-aeonik text-white/75 text-[11px] md:text-[12px] tracking-[0.14em] uppercase mb-4">
            vantaggio dedicato
          </p>
          <h2 className="font-itc-blair text-white text-[28px] md:text-[40px] leading-[1.12] mb-6">
            Quanto investi per l&apos;evento ti viene riconosciuto sul tuo primo noleggio Ferrari 296 GTS.
          </h2>
          <p className="font-aeonik text-white/80 text-[14px] md:text-[16px] leading-[1.75] max-w-[740px] mx-auto mb-5">
            Non è una promozione standard, ma una condizione riservata a chi sceglie Altitudo durante l&apos;evento.
          </p>
          <p className="font-aeonik text-white/80 text-[14px] md:text-[16px] leading-[1.75] max-w-[720px] mx-auto mb-9">
            Ogni dettaglio viene seguito con cura: dalla disponibilità della vettura alla configurazione del servizio,
            fino alla consegna, con standard elevati e assistenza discreta. Compila la richiesta e ricevi un contatto
            dedicato per definire la tua esperienza Ferrari 296 GTS in modo personalizzato.
          </p>
          <a
            href={CTA_HREF}
            className="inline-block bg-white text-black font-itc-blair px-7 py-3 rounded-lg text-[13px] md:text-[14px] hover:bg-gray-100 transition-colors"
          >
            prenota la tua esperienza
          </a>
        </div>
      </section>

      <section className="w-full px-5 md:px-6 lg:px-16 pb-4 md:pb-8">
        <div className="max-w-[900px] mx-auto relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] p-6 md:p-8 text-center">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
          <p className="font-aeonik text-white/70 text-[11px] md:text-[12px] tracking-[0.14em] uppercase mb-3">
            condizioni gift card
          </p>
          <h3 className="font-itc-blair text-white text-[22px] md:text-[30px] leading-[1.15] mb-4">
            Condizione riservata
          </h3>
          <div className="font-aeonik text-white/80 text-[13px] md:text-[15px] leading-[1.7] max-w-[720px] mx-auto text-left space-y-2">
            <p>Quanto paghi per l&apos;evento viene riconosciuto sul primo noleggio Ferrari 296 GTS di almeno una giornata.</p>
            <p>
              Il riconoscimento viene applicato su prenotazione confermata e soggetta a{" "}
              <span className="whitespace-nowrap">disponibilità</span> della vettura.
            </p>
            <p>
              La Ferrari 296 GTS viene consegnata con accoglienza dedicata,{" "}
              <span className="whitespace-nowrap">standard</span> elevati e gestione personalizzata.
            </p>
            <p>Condizione valida fino al 23 settembre e non cumulabile con altre promozioni in corso.</p>
          </div>
        </div>
      </section>

      <section id="prenota" className="relative py-14 md:py-20 px-5 md:px-6 lg:px-16 scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-aeonik text-white/70 text-[11px] tracking-[0.14em] uppercase mb-3">
            accesso riservato gift card
          </p>
          <h2 className="font-itc-blair text-white text-[24px] md:text-[32px] leading-[1.15] mb-3">
            Compila il modulo e prenota la tua esperienza
          </h2>
          <p className="font-aeonik text-white/80 text-[13px] md:text-[15px] leading-[1.7] max-w-[640px] mx-auto mb-8">
            Inserisci i tuoi dettagli: il team Altitudo ti ricontatterà per confermare disponibilità, condizioni e{" "}
            <span className="whitespace-nowrap">riconoscimento</span> dedicato.
          </p>

          <form action="/api/send-email" method="post" className="space-y-4 mb-2 text-left md:text-center">
            <input type="hidden" name="formName" value="giftcard-landing" />
            <input type="hidden" name="pageTitle" value="Gift Card - Prenotazione" />
            <input type="hidden" name="promoCode" value="GIFTCARD-EVENTO-2309" />
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
            <div className="mb-6 text-left">
              <TermsConsent checkboxId="terms-giftcard" />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] whitespace-nowrap hover:bg-gray-100 transition-colors"
              >
                prenota la tua esperienza
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
