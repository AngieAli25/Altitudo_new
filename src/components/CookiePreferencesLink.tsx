"use client";

const CONSENT_KEY = "altitudo-cookie-consent";

export default function CookiePreferencesLink() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.removeItem(CONSENT_KEY);
      window.location.reload();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="font-aeonik text-white/70 text-[11px] hover:text-white transition-colors underline"
    >
      Preferenze cookie
    </button>
  );
}
