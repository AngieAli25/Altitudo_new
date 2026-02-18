"use client";

type SiteFooterProps = {
  pageTitle: string;
};

export default function SiteFooter({ pageTitle }: SiteFooterProps) {
  return (
    <footer className="relative w-full py-12 border-t border-white/10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Newsletter */}
          <div>
            <h3 className="font-itc-blair text-white text-[13px] uppercase mb-4 leading-[1.4] max-w-[280px]">
              ISCRIVITI ALLA NEWSLETTER PER PROMOZIONI E OFFERTE ESCLUSIVE
            </h3>
            <form action="/api/send-email" method="post" className="flex gap-2">
              <input type="hidden" name="formName" value="newsletter" />
              <input type="hidden" name="pageTitle" value={pageTitle} />
              <input
                type="email"
                name="newsletterEmail"
                placeholder="Enter Your Email"
                required
                className="flex-1 h-11 bg-white/[0.05] backdrop-blur-md rounded-lg px-4 text-white text-[13px] placeholder-white/60 focus:outline-none"
              />
              <button type="submit" className="bg-white text-black font-itc-blair px-4 py-2.5 rounded-lg text-[13px] hover:bg-gray-100 transition-colors">
                iscriviti
              </button>
            </form>
          </div>

        {/* Links - Eventi */}
          <div className="text-center lg:text-center lg:justify-self-center">
            <h3 className="font-itc-blair text-white text-[13px] mb-3">EVENTI</h3>
            <ul className="font-aeonik text-white text-[12px] space-y-2">
              <li><a href="/eventi/compleanno" className="hover:opacity-80 transition-opacity">COMPLEANNO</a></li>
              <li><a href="/eventi/shooting" className="hover:opacity-80 transition-opacity">SHOOTING</a></li>
              <li><a href="/eventi/matrimonio" className="hover:opacity-80 transition-opacity">MATRIMONI</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="text-center lg:text-center lg:justify-self-center">
            <h3 className="font-itc-blair text-white text-[13px] mb-3">CONTATTI</h3>
            <ul className="font-aeonik text-white text-[12px] space-y-2">
              <li>
                <a href="tel:+393453096645" className="hover:opacity-80 transition-opacity">
                  345 3096645
                </a>
              </li>
              <li>
                <a href="mailto:altitudo.club@gmail.com" className="hover:opacity-80 transition-opacity">
                  altitudo.club@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393453096645"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contattaci su WhatsApp"
                  className="inline-flex items-center gap-2 bg-white text-black font-itc-blair px-3 py-1.5 rounded-md text-[12px] hover:bg-gray-100 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.37-1.76a11.7 11.7 0 0 0 5.7 1.5h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.42-8.34ZM12.07 21.1h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.2-3.78 1.04 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.55-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.13 1.03 7.01 2.9a9.85 9.85 0 0 1 2.92 7.02c0 5.47-4.45 9.92-9.9 9.92Zm5.72-7.4c-.31-.16-1.83-.9-2.12-1.01-.29-.11-.5-.16-.71 .16-.21 .31-.81 1-.99 1.21-.18 .21-.36 .24-.67 .08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48 .14-.64.14-.14 .31-.36 .47-.54.16-.18 .21-.31 .31-.52.1-.21 .05-.39-.03-.54-.08-.16-.71-1.73-.98-2.37-.26-.64-.53-.55-.71-.55-.18 0-.39-.03-.6-.03-.21 0-.55 .08-.84 .39-.29 .31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.04 1.28 3.24.16 .21 2.2 3.36 5.33 4.71.75 .32 1.33 .51 1.78 .66.75 .24 1.43 .21 1.97 .13.6-.09 1.83-.75 2.09-1.48.26-.73 .26-1.36 .18-1.49-.08-.13-.29-.21-.6-.37Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Tagline */}
          <div className="text-center lg:text-right">
            <p className="font-itc-blair text-white text-[13px] leading-[1.5] uppercase">
              GUIDA L&apos;EMOZIONE,<br />
              VIVI IL LUSSO.<br />
              LA TUA ESPERIENZA IN FERRARI INIZIA QUI
            </p>
          </div>
        </div>

        {/* Logo & Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <img
            src="/images/logo_altitudo_esteso.png"
            alt="Altitudo"
            className="h-[24px] w-auto mx-auto mb-4"
          />
          <p className="font-aeonik text-white/70 text-[11px]">
            2025 - ALTITUDO LUXURY RENT - All rights Reserved - Produced by meravigliä Lab
          </p>
        </div>
      </div>
    </footer>
  );
}


