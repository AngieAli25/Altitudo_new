"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "altitudo-welcome-popup-seen";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    // Non mostrare il popup se l'utente è già sulla landing evento-ferrari
    if (pathname?.startsWith("/evento-ferrari")) return;
    // sessionStorage: il popup si mostra a ogni nuova visita (nuova scheda/sessione), non solo la prima volta
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) setVisible(true);
  }, [mounted, pathname]);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    // Clic sul contenuto (non sull'overlay) porta a evento-ferrari; la chiusura e il salvataggio avvengono al follow del link
    // Chiudiamo comunque il popup e segniamo come visto quando l'utente clicca il link
    e.stopPropagation();
  };

  if (!mounted || !visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Evento esclusivo Ferrari"
    >
      {/* Overlay: 50% trasparenza per vedere il sito sotto */}
      <button
        type="button"
        onClick={close}
        className="absolute inset-0 bg-black/50"
        aria-label="Chiudi"
      />
      {/* Luce retrostante: alone dietro il popup */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-full max-w-[780px] aspect-[16/10] rounded-3xl opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* Card cliccabile: due colonne 50% - sinistra testo, destra immagine */}
      <div
        className="relative z-10 w-full max-w-[780px] rounded-2xl border border-white/25 bg-black/95 shadow-2xl overflow-hidden flex flex-col sm:flex-row min-h-[320px]"
        onClick={handleContentClick}
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <Link
          href="/evento-ferrari"
          onClick={() => {
            sessionStorage.setItem(STORAGE_KEY, "1");
            setVisible(false);
          }}
          className="flex flex-1 flex-col sm:flex-row focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl min-h-0"
        >
          {/* Colonna sinistra 50%: gerarchia chiara (logo → titolo → data/luogo → CTA) */}
          <div className="flex flex-1 flex-col justify-center w-full sm:w-1/2 p-6 sm:p-8 gap-5">
            {/* Logo: proporzioni mantenute, non deformato */}
            <div className="flex items-center shrink-0" style={{ minHeight: "32px" }}>
              <img
                src="/images/logo_altitudo.png"
                alt="Altitudo"
                className="h-8 w-auto max-w-[120px] object-contain object-left"
                width={120}
                height={32}
              />
            </div>
            {/* Titolo principale: livello 1 */}
            <h2 className="font-itc-blair text-white text-[20px] sm:text-[24px] leading-tight uppercase tracking-tight">
              Acquista o regala
              <br />
              un&apos;esperienza in pista
            </h2>
            {/* Breve descrizione: cosa succede e invito all&apos;esperienza */}
            <p className="font-aeonik text-white/85 text-[13px] sm:text-[14px] leading-[1.55]">
              Un&apos;esperienza esclusiva a numero limitato: guida tu una Ferrari per 2 giri di pista all&apos;Autodromo Tazio Nuvolari 2.8. Pass ospite e video inclusi. Rinfresco offerto.
            </p>
            {/* Data e luogo: livello 2, più piccoli del titolo */}
            <div className="flex flex-col gap-0.5 border-t border-white/15 pt-4">
              <p className="font-itc-blair text-white/95 text-[14px] sm:text-[15px] leading-snug uppercase tracking-tight">
                16 Maggio
              </p>
              <p className="font-aeonik text-white/80 text-[13px] sm:text-[14px]">
                Autodromo Tazio Nuvolari 2.8 · Cervesina (PV)
              </p>
            </div>
            {/* CTA: azione evidente */}
            <span className="inline-block w-fit bg-white text-black font-itc-blair px-5 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors mt-1">
              Scopri l&apos;evento
            </span>
          </div>

          {/* Colonna destra 50%: immagine */}
          <div className="relative w-full sm:w-1/2 min-h-[200px] sm:min-h-0 sm:flex-1">
            <img
              src="/images/nuova_macchina_evento.png"
              alt="Esperienza in pista su Ferrari - Autodromo Tazio Nuvolari"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 100%)",
              }}
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          aria-label="Chiudi"
        >
          ×
        </button>
      </div>
    </div>
  );
}
