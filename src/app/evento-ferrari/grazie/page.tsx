"use client";

import { useEffect } from "react";

export default function GrazieEvento() {
  /* Hide the global SiteFooter and WhatsApp button */
  useEffect(() => {
    const rootFooter = document.querySelector<HTMLElement>("body > footer");
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
    <main className="bg-black min-h-screen w-full flex flex-col items-center justify-center px-5 md:px-6 py-16 relative overflow-hidden">
      {/* Soft decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-24 h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[280px] w-[320px] rounded-full bg-white/5 blur-[100px]" />

      {/* Logo */}
      <img
        src="/images/logo_altitudo.png"
        alt="Altitudo"
        className="w-[50px] h-auto mb-10 relative z-10"
      />

      {/* Card */}
      <div className="relative max-w-[640px] w-full text-center z-10">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.10] to-white/[0.04] backdrop-blur-[16px] px-8 py-12 md:px-14 md:py-16">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

          {/* Checkmark */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-itc-blair text-white text-[24px] md:text-[30px] leading-tight mb-4 uppercase">
            Grazie per il tuo interesse!
          </h1>
          <p className="font-aeonik text-white/80 text-[14px] md:text-[15px] leading-[1.7] mb-4 max-w-[460px] mx-auto">
            Abbiamo ricevuto la tua richiesta per l&apos;esperienza in pista
            del 16 Maggio all&apos;Autodromo Tazio Nuvolari 2.8, Cervesina (PV).
          </p>
          <p className="font-aeonik text-white/60 text-[13px] md:text-[14px] leading-[1.6] mb-10 max-w-[460px] mx-auto">
            Ti contatteremo al pi&ugrave; presto con tutti i dettagli
            sull&apos;evento e sui costi.
          </p>

          <a
            href="/evento-ferrari"
            className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] md:text-[14px] hover:bg-gray-100 transition-colors"
          >
            TORNA ALL&apos;EVENTO
          </a>
        </div>
      </div>

      {/* Mini footer */}
      <div className="relative z-10 mt-12 text-center">
        <img
          src="/images/logo_altitudo_esteso.png"
          alt="Altitudo"
          className="h-[20px] w-auto mx-auto mb-2"
        />
        <p className="font-aeonik text-white/40 text-[11px]">
          2026 - ALTITUDO LUXURY RENT - All rights Reserved
        </p>
      </div>
    </main>
  );
}
