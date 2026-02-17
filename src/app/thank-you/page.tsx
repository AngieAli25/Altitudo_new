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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 -bottom-10 h-[420px] w-[460px] rounded-full bg-white/5 blur-[120px]" />

      {/* Minimal center message */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <h1 className="font-itc-blair text-white text-[30px] sm:text-[36px] md:text-[44px] leading-tight tracking-wide">
          GRAZIE
        </h1>
      </div>
    </main>
  );
}

