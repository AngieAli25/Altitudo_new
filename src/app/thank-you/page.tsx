export default function ThankYou() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background image full-bleed */}
      <img
        src="/images/ferrari_home.png"
        alt="Altitudo Ferrari"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 -bottom-10 h-[420px] w-[460px] rounded-full bg-white/5 blur-[120px]" />

      {/* Full-screen message (no box) */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-[900px] w-full text-center">
          <h1 className="font-itc-blair text-white text-[34px] sm:text-[42px] md:text-[52px] leading-[1.1] tracking-wide mb-4">
            Grazie, la tua richiesta è stata ricevuta
          </h1>
          <p className="font-aeonik text-white/90 text-[15px] md:text-[17px] leading-[1.8] mb-8">
            Ti contatteremo entro 24 ore per confermare i dettagli e completare la prenotazione.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center bg-white text-black font-itc-blair px-5 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors"
            >
              torna alla home
            </a>
            <a
              href="/contatti#prenota"
              className="inline-flex items-center justify-center bg-white/10 ring-1 ring-white/25 text-white font-itc-blair px-5 py-2.5 rounded-lg text-[13px] hover:bg-white/15 transition-colors"
            >
              vai ai contatti
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

