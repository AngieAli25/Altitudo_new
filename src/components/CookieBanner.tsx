"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "altitudo-cookie-consent";
const GTM_ID = "GTM-N5WPQVDH";
const FB_PIXEL_ID = "950155784247081";

function loadGTM() {
  if (typeof window === "undefined") return;
  (function (w: Window, d: Document, s: string, l: string, i: string) {
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s) as HTMLScriptElement;
    const dl = l !== "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    if (f && f.parentNode) f.parentNode.insertBefore(j, f);
    const dataLayer = (w as unknown as Record<string, unknown[]>)[l] || [];
    (w as unknown as Record<string, unknown[]>)[l] = dataLayer;
    dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
  })(window, document, "script", "dataLayer", GTM_ID);
}

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: { apply: (ctx: unknown, args: IArguments) => void };
  queue: unknown[];
  push: unknown;
  loaded?: boolean;
  version?: string;
};

function loadFacebookPixel() {
  if (typeof window === "undefined") return;
  const f = window as unknown as { fbq?: Fbq; _fbq?: unknown };
  const b = document;
  const e = "script";
  const v = "2.0";
  if (f.fbq) return;
  const t: Fbq = function () {
    t.callMethod ? t.callMethod.apply(t, arguments) : t.queue.push(arguments as unknown as never);
  } as Fbq;
  t.queue = [];
  t.push = t;
  t.loaded = true;
  t.version = v;
  f.fbq = t;
  if (!f._fbq) f._fbq = t;
  const s = b.getElementsByTagName(e)[0];
  const i = b.createElement(e) as HTMLScriptElement;
  i.async = true;
  i.src = "https://connect.facebook.net/en_US/fbevents.js";
  if (s && s.parentNode) s.parentNode.insertBefore(i, s);
  t("init", FB_PIXEL_ID);
  t("track", "PageView");
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "all") {
      loadGTM();
      loadFacebookPixel();
    }
    if (!consent) setVisible(true);
  }, [mounted]);

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, "all");
    loadGTM();
    loadFacebookPixel();
    setVisible(false);
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem(CONSENT_KEY, "necessary");
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
      role="dialog"
      aria-label="Informativa cookie"
    >
      <div className="max-w-[1100px] mx-auto bg-black border border-white/20 rounded-xl shadow-2xl p-5 md:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <p className="font-aeonik text-white text-[13px] lg:text-[14px] leading-[1.6]">
            Utilizziamo cookie e tecnologie simili per migliorare l&apos;esperienza sul
            sito, analizzare le visite e mostrarti contenuti e annunci pertinenti
            ai nostri servizi di noleggio Ferrari. Puoi accettare tutti i
            cookie, oppure solo quelli necessari. Per i dettagli leggi la{" "}
            <Link
              href="/privacy"
              className="text-white underline hover:opacity-90"
            >
              Privacy e Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={acceptNecessaryOnly}
            className="font-aeonik text-white/90 text-[13px] px-4 py-2.5 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
          >
            Solo necessari
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="font-itc-blair bg-white text-black text-[13px] px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
