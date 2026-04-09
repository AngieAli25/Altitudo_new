import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grazie | Gift Card Altitudo",
  description:
    "Richiesta ricevuta con successo. Il team Altitudo ti ricontattera a breve per la tua esperienza Ferrari 296 GTS.",
};

export default function GiftcardThankYouPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden flex items-center justify-center px-6">
      <section className="w-full max-w-[760px] text-center">
        <img
          src="/images/logo_altitudo_esteso.png"
          alt="Altitudo"
          className="h-[28px] md:h-[32px] w-auto mx-auto mb-8 opacity-95"
        />
        <p className="font-aeonik text-white/70 text-[11px] md:text-[12px] tracking-[0.16em] uppercase mb-4">
          gift card altitudo
        </p>
        <h1 className="font-itc-blair text-white text-[30px] md:text-[42px] leading-[1.12] mb-5">
          Richiesta inviata con successo.
        </h1>
        <p className="font-aeonik text-white/80 text-[14px] md:text-[16px] leading-[1.75] max-w-[640px] mx-auto mb-9">
          Ti ringraziamo. Il team Altitudo ti ricontattera a breve per confermare i dettagli della tua esperienza.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-black font-itc-blair px-7 py-3 rounded-lg text-[13px] md:text-[14px] hover:bg-gray-100 transition-colors"
        >
          torna alla home
        </a>
      </section>
    </main>
  );
}
