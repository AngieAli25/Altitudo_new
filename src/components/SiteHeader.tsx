"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [desktopEventsOpen, setDesktopEventsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isEventi = pathname === "/eventi" || pathname.startsWith("/eventi/");
  const isPrezzi = pathname === "/prezzi";
  const isContatti = pathname === "/contatti";

  const handleOpenDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDesktopEventsOpen(true);
  };

  const handleCloseDropdownDelayed = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setDesktopEventsOpen(false);
      closeTimeoutRef.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="h-[30px] lg:h-[36px]">
            <img
              src="/images/logo_altitudo_esteso.png"
              alt="Altitudo"
              className="h-full w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
              HOME
              {isHome && (
                <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
              )}
            </a>
            <div
              className="relative flex items-center gap-1.5"
              onMouseEnter={handleOpenDropdown}
              onMouseLeave={handleCloseDropdownDelayed}
            >
              <a href="/eventi" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
                EVENTI
                {isEventi && (
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
                )}
              </a>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                className={`cursor-pointer hover:opacity-80 transition-transform ${desktopEventsOpen ? 'rotate-180' : ''}`}
                onClick={() => setDesktopEventsOpen(!desktopEventsOpen)}
              >
                <path d="M4 5L0 0H8L4 5Z" fill="white"/>
              </svg>
              {desktopEventsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-lg py-2 min-w-[160px] border border-white/10"
                  onMouseEnter={handleOpenDropdown}
                  onMouseLeave={handleCloseDropdownDelayed}
                >
                  <a
                    href="/eventi/compleanno"
                    className="block px-4 py-2 font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                  >
                    Compleanno
                  </a>
                  <a
                    href="/eventi/shooting"
                    className="block px-4 py-2 font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                  >
                    Shooting
                  </a>
                  <a
                    href="/eventi/matrimonio"
                    className="block px-4 py-2 font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                  >
                    Matrimonio
                  </a>
                </div>
              )}
            </div>
            <a href="/prezzi" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
              PREZZI
              {isPrezzi && (
                <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
              )}
            </a>
            <a href="/contatti" className="relative pb-1 font-itc-blair text-white text-[13px] uppercase hover:opacity-80 transition-opacity">
              CONTATTI
              {isContatti && (
                <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-white/0 via-white/80 to-white/0 rounded-full" />
              )}
            </a>
          </nav>

          {/* Desktop CTA */}
          <a href="/contatti#prenota" className="hidden lg:inline-block bg-white text-black font-itc-blair px-5 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
            guidala ora
          </a>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="/contatti#prenota" className="bg-white text-black font-itc-blair px-3 py-2 rounded-md text-[12px] hover:bg-gray-100 transition-colors">
              guidala ora
            </a>
            <button
              aria-label="Apri menù"
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black">
          <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-8">
            <div className="flex items-center justify-between">
              <a href="/" className="h-[28px]">
                <img
                  src="/images/logo_altitudo_esteso.png"
                  alt="Altitudo"
                  className="h-full w-auto object-contain"
                />
              </a>
              <button
                aria-label="Chiudi menù"
                className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <nav className="mt-6 space-y-2">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg font-itc-blair text-white text-[14px] uppercase hover:bg-white/10 transition-colors"
              >
                HOME
              </a>
              <button
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg font-itc-blair text-white text-[14px] uppercase hover:bg-white/10 transition-colors"
                onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                aria-expanded={mobileEventsOpen}
              >
                <span>EVENTI</span>
                <span className={`transition-transform ${mobileEventsOpen ? 'rotate-180' : ''}`}>
                  <svg width="12" height="7" viewBox="0 0 8 5" fill="none">
                    <path d="M4 5L0 0H8L4 5Z" fill="white"/>
                  </svg>
                </span>
              </button>
              {mobileEventsOpen && (
                <div className="ml-2 pl-1 border-l border-white/10 space-y-1">
                  <a
                    href="/eventi/compleanno"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                  >
                    Compleanno
                  </a>
                  <a
                    href="/eventi/shooting"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                  >
                    Shooting
                  </a>
                  <a
                    href="/eventi/matrimonio"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md font-aeonik text-white text-[13px] hover:bg-white/10 transition-colors"
                  >
                    Matrimonio
                  </a>
                </div>
              )}
              <a
                href="/prezzi"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg font-itc-blair text-white text-[14px] uppercase hover:bg-white/10 transition-colors"
              >
                PREZZI
              </a>
              <a
                href="/contatti"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg font-itc-blair text-white text-[14px] uppercase hover:bg-white/10 transition-colors"
              >
                CONTATTI
              </a>
              <a
                href="/contatti#prenota"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-2 px-3 py-3 rounded-lg bg-white text-black font-itc-blair text-[14px] text-center hover:bg-gray-100 transition-colors"
              >
                guidala ora
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


