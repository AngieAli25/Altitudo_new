"use client";

import { useEffect } from "react";

type TermsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-[1001] max-w-[800px] w-[92%] bg-black border border-white/15 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h3 className="font-itc-blair text-white text-[16px] lg:text-[18px]">
            Termini e condizioni
          </h3>
          <button
            aria-label="Chiudi"
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors text-[20px] leading-none"
          >
            ×
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-5 py-4 space-y-4 font-aeonik text-white/90 text-[13px] lg:text-[14px] leading-[1.6]">
          <p>
            Per garantire un servizio esclusivo, sicuro e senza imprevisti, ti chiediamo solo poche semplici condizioni.
          </p>

          <div>
            <p className="font-aeonik-bold mb-1">Garanzia con blocco carta:</p>
            <p>
              Il giorno prima della consegna dell’auto, durante il check-in, viene effettuato un blocco temporaneo sulla carta di credito di €15.000. Si tratta esclusivamente di una garanzia:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>non è un addebito</li>
              <li>non viene prelevato alcun importo</li>
              <li>viene automaticamente sbloccato al termine del noleggio</li>
            </ul>
          </div>

          <div>
            <p className="font-aeonik-bold mb-1">Caparra confirmatoria</p>
            <p>
              Al momento della firma del contratto è prevista una caparra pari al 30% del costo totale del noleggio. Questo ci permette di riservare in esclusiva il veicolo per te e garantirti la massima disponibilità.
            </p>
          </div>

          <div>
            <p className="font-aeonik-bold mb-1">Documentazione e riepilogo</p>
            <p className="mb-2">Dopo la conferma riceverai via email:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>il riepilogo completo</li>
              <li>il contratto in allegato</li>
              <li>tutte le informazioni operative</li>
            </ul>
            <p className="mt-2">
              Così potrai leggere tutto con calma e avere ogni dettaglio a portata di mano.
            </p>
          </div>

          <div>
            <p className="font-aeonik-bold mb-1">Politica di cancellazione</p>
            <p className="mb-2">
              Comprendiamo che possano verificarsi imprevisti. Per questo abbiamo previsto condizioni chiare:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Disdetta entro 30 giorni dalla data di prenotazione → viene trattenuta la caparra (30% del totale).</li>
              <li>Disdetta entro 15 giorni dalla data di inizio noleggio → viene trattenuto il 50% dell’importo totale.</li>
              <li>Disdetta entro 3 giorni dall’inizio del noleggio → viene trattenuto l’intero importo del noleggio.</li>
            </ul>
            <p className="mt-2">
              Queste condizioni ci permettono di garantire un servizio organizzato e di alto livello per tutti i nostri clienti.
            </p>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-black font-itc-blair px-4 py-2 rounded-lg text-[13px] hover:bg-gray-100 transition-colors"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}



