"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type DateTimeFieldProps = {
  ariaLabel?: string;
  title?: string;
  placeholder?: string;
};

export default function DateTimeField({
  ariaLabel,
  title,
  placeholder = "gg/mm/aaaa, --:--",
}: DateTimeFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dateValue, setDateValue] = useState<string>("");
  const [timeValue, setTimeValue] = useState<string>("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeFieldRef = useRef<HTMLDivElement | null>(null);
  const dateFieldRef = useRef<HTMLDivElement | null>(null);
  const [isTimeMenuOpen, setIsTimeMenuOpen] = useState(false);
  const [isDateMenuOpen, setIsDateMenuOpen] = useState(false);
  const [calendarCursor, setCalendarCursor] = useState<Date>(() => {
    if (dateValue) {
      const [y, m, d] = dateValue.split("-").map(Number);
      return new Date(y, (m ?? 1) - 1, d ?? 1);
    }
    return new Date();
  });

  const formatted = useMemo(() => {
    if (!dateValue || !timeValue) return "";
    const [year, month, day] = dateValue.split("-").map(Number);
    const [hour, minute] = timeValue.split(":").map(Number);
    const dt = new Date(year, (month ?? 1) - 1, day ?? 1, hour ?? 0, minute ?? 0);
    try {
      return new Intl.DateTimeFormat("it-IT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(dt);
    } catch {
      return "";
    }
  }, [dateValue, timeValue]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [isOpen]);

  useEffect(() => {
    // aggiorna il cursore del calendario quando cambia la data selezionata
    if (dateValue) {
      const [y, m, d] = dateValue.split("-").map(Number);
      setCalendarCursor(new Date(y, (m ?? 1) - 1, d ?? 1));
    }
  }, [dateValue]);

  const timeOptions = useMemo(() => {
    const options: string[] = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hh = String(h).padStart(2, "0");
        const mm = String(m).padStart(2, "0");
        options.push(`${hh}:${mm}`);
      }
    }
    return options;
  }, []);

  const calendarTitle = useMemo(() => {
    return new Intl.DateTimeFormat("it-IT", {
      month: "long",
      year: "numeric",
    }).format(calendarCursor);
  }, [calendarCursor]);

  const calendarDays = useMemo(() => {
    // ritorna un array di 42 date (6 settimane) a partire dal lunedì della prima settimana visibile
    const firstOfMonth = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), 1);
    const weekdayMon0 = (firstOfMonth.getDay() + 6) % 7; // 0=Lunedì, ..., 6=Domenica
    const gridStart = new Date(firstOfMonth);
    gridStart.setDate(firstOfMonth.getDate() - weekdayMon0);
    const days: Date[] = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(gridStart);
      d.setDate(gridStart.getDate() + i);
      days.push(d);
    }
    return days;
  }, [calendarCursor]);

  const isSameDay = (a: Date, b: Date): boolean =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        title={title}
        onClick={() => setIsOpen((v) => !v)}
        className="w-full h-11 bg-white/[0.08] rounded-lg px-4 pr-12 text-left text-white/70 text-[13px] focus:outline-none focus:ring-1 focus:ring-white/30"
      >
        {formatted || placeholder}
      </button>
      {/* Icona calendario bianca, coerente con il tema */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/90"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2" />
          <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" />
          <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" />
          <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" />
        </svg>
      </span>

      {isOpen && (
        <div className="absolute z-[60] right-0 mt-2 w-[300px] rounded-xl border border-white/10 bg-black/90 backdrop-blur-md p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 gap-3" onMouseDown={(e) => {
            if (timeFieldRef.current && !timeFieldRef.current.contains(e.target as Node)) {
              setIsTimeMenuOpen(false);
            }
            if (dateFieldRef.current && !dateFieldRef.current.contains(e.target as Node)) {
              setIsDateMenuOpen(false);
            }
          }}>
            <label className="text-white/70 text-[12px]">Data</label>
            <div className="relative" ref={dateFieldRef}>
              <input
                type="text"
                className="dt-native dt-native--date h-10 w-full bg-white/[0.06] rounded-lg px-3 pr-10 text-white/80 text-[13px] focus:outline-none focus:ring-1 focus:ring-white/30"
                value={dateValue
                  ? new Intl.DateTimeFormat('it-IT').format(new Date(dateValue))
                  : ""}
                placeholder="gg/mm/aaaa"
                readOnly
                onClick={() => setIsDateMenuOpen((v) => !v)}
                onFocus={() => setIsDateMenuOpen(true)}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/90" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2" />
                  <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" />
                </svg>
              </span>
              {isDateMenuOpen && (
                <div className="absolute z-[70] left-0 top-[calc(100%+8px)] w-full rounded-lg border border-white/10 bg-black/95 shadow-[0_8px_24px_rgba(0,0,0,0.6)] p-3">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <button
                      type="button"
                      className="text-white/80 hover:text-white"
                      onClick={() => setCalendarCursor(new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1))}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="text-white/90 text-[13px] capitalize">{calendarTitle}</div>
                    <button
                      type="button"
                      className="text-white/80 hover:text-white"
                      onClick={() => setCalendarCursor(new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1))}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center mb-1">
                    {["L","M","M","G","V","S","D"].map((d) => (
                      <div key={d} className="text-white/60 text-[11px]">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((d, i) => {
                      const isCurrentMonth = d.getMonth() === calendarCursor.getMonth();
                      const isSelected = dateValue && isSameDay(d, new Date(dateValue));
                      const isToday = isSameDay(d, new Date());
                      const base = "rounded-md py-2 text-[12px]";
                      const tone = isSelected
                        ? "bg-white text-black"
                        : isCurrentMonth
                          ? "text-white/90 hover:bg-white/10"
                          : "text-white/40 hover:bg-white/5";
                      const ring = isToday && !isSelected ? " ring-1 ring-white/30" : "";
                      return (
                        <button
                          key={i}
                          type="button"
                          className={`${base} ${tone}${ring}`}
                          onClick={() => {
                            const y = d.getFullYear();
                            const m = String(d.getMonth() + 1).padStart(2, "0");
                            const da = String(d.getDate()).padStart(2, "0");
                            setDateValue(`${y}-${m}-${da}`);
                            setIsDateMenuOpen(false);
                          }}
                        >
                          {d.getDate()}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-2">
                    <button
                      type="button"
                      className="text-white/70 text-[12px] px-2 py-1 hover:text-white"
                      onClick={() => {
                        setDateValue("");
                        setIsDateMenuOpen(false);
                      }}
                    >
                      Cancella
                    </button>
                    <button
                      type="button"
                      className="text-white/90 text-[12px] px-2 py-1 hover:text-white"
                      onClick={() => {
                        const now = new Date();
                        const y = now.getFullYear();
                        const m = String(now.getMonth() + 1).padStart(2, "0");
                        const da = String(now.getDate()).padStart(2, "0");
                        setDateValue(`${y}-${m}-${da}`);
                        setCalendarCursor(now);
                        setIsDateMenuOpen(false);
                      }}
                    >
                      Oggi
                    </button>
                  </div>
                </div>
              )}
            </div>
            <label className="text-white/70 text-[12px] mt-1">Ora</label>
            <div className="relative" ref={timeFieldRef}>
              <input
                type="text"
                className="dt-native dt-native--time h-10 w-full bg-white/[0.06] rounded-lg px-3 pr-10 text-white/80 text-[13px] focus:outline-none focus:ring-1 focus:ring-white/30"
                value={timeValue}
                placeholder="--:--"
                readOnly
                onClick={() => setIsTimeMenuOpen((v) => !v)}
                onFocus={() => setIsTimeMenuOpen(true)}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/90" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                  <path d="M12 7v5l3 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {isTimeMenuOpen && (
                <div className="absolute z-[70] left-0 top-[calc(100%+8px)] w-full rounded-lg border border-white/10 bg-black/95 shadow-[0_8px_24px_rgba(0,0,0,0.6)] max-h-56 overflow-y-auto">
                  {timeOptions.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`w-full text-left px-3 py-2 text-[13px] ${
                        t === timeValue ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5"
                      }`}
                      onClick={() => {
                        setTimeValue(t);
                        setIsTimeMenuOpen(false);
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="text-white/70 text-[12px] px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Annulla
            </button>
            <button
              type="button"
              className="bg-white text-black text-[12px] font-itc-blair px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Applica
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


