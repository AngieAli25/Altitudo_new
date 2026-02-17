export default function ThankYou() {
  return (
    <main className="relative min-h-[70vh] w-full flex items-center justify-center px-6 py-16">
      {/* soft glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 -bottom-10 h-[320px] w-[380px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative max-w-[720px] w-full text-center">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.06] backdrop-blur-[16px] px-0 pt-0 pb-10 md:pb-14">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
          {/* Hero image */}
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px]">
            <img
              src="/images/ferrari_home.png"
              alt="Altitudo Ferrari"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-0 right-0 px-6 md:px-10">
              <h1 className="font-itc-blair text-white text-[22px] sm:text-[26px] md:text-[32px] leading-tight">
                Grazie! La tua richiesta è stata ricevuta
              </h1>
            </div>
          </div>

          <div className="px-8 md:px-12 mt-6 md:mt-8">
            <p className="font-aeonik text-white/90 text-[14px] md:text-[15px] leading-[1.7] mb-8">
              Ti contatteremo entro 24 ore per confermare i dettagli e completare la prenotazione.
            </p>
          </div>

          <div className="px-8 md:px-12 flex items-center justify-center gap-3">
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

