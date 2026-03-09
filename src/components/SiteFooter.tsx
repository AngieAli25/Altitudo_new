"use client";

import CookiePreferencesLink from "./CookiePreferencesLink";

export default function SiteFooter() {
  return (
    <footer className="relative w-full py-12 border-t border-white/10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Tagline */}
          <div className="text-left">
            <p className="font-itc-blair text-white text-[13px] leading-[1.5] uppercase">
              GUIDA L&apos;EMOZIONE,<br />
              VIVI IL LUSSO.<br />
              LA TUA ESPERIENZA IN FERRARI INIZIA QUI
            </p>
          </div>

          {/* Eventi */}
          <div className="text-left lg:translate-x-6 xl:translate-x-10">
            <h3 className="font-itc-blair text-white text-[13px] mb-3 uppercase">Eventi</h3>
            <ul className="font-aeonik text-white text-[12px] space-y-2">
              <li><a href="/eventi/compleanno" className="hover:opacity-80 transition-opacity">COMPLEANNO</a></li>
              <li><a href="/eventi/shooting" className="hover:opacity-80 transition-opacity">SHOOTING</a></li>
              <li><a href="/eventi/matrimonio" className="hover:opacity-80 transition-opacity">MATRIMONI</a></li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="text-left">
            <h3 className="font-itc-blair text-white text-[13px] mb-3 uppercase">Contatti</h3>
            <ul className="font-aeonik text-white text-[12px] space-y-2">
              <li>
                <a href="tel:+393453096645" className="hover:opacity-80 transition-opacity">
                  345 3096645
                </a>
              </li>
              <li>
                <a href="mailto:info@altitudo.club" className="hover:opacity-80 transition-opacity">
                  info@altitudo.club
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-left">
            <h3 className="font-itc-blair text-white text-[13px] mb-3 uppercase">Social</h3>
            <ul className="font-aeonik text-white text-[12px] space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/altitudo.luxury.rent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61579178040735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  FACEBOOK
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center">
          <img
            src="/images/logo_altitudo_esteso.png"
            alt="Altitudo"
            className="h-[24px] w-auto mx-auto mb-4"
          />
        </div>

        {/* Legal */}
        <div className="text-center mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <a
            href="/privacy"
            className="font-aeonik text-white/70 text-[11px] hover:text-white transition-colors"
          >
            Privacy e Cookie Policy
          </a>
          <span className="text-white/40 text-[11px]">·</span>
          <CookiePreferencesLink />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-aeonik text-white/70 text-[11px]">
            2026 - ALTITUDO LUXURY RENT - All rights Reserved - Produced by meravigliä Lab
          </p>
        </div>
      </div>
    </footer>
  );
}

 