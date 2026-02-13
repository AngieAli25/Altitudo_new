"use client";

import { useState } from "react";
import TermsModal from "./TermsModal";

type TermsConsentProps = {
  checkboxId?: string;
};

export default function TermsConsent({ checkboxId = "terms-consent" }: TermsConsentProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-left">
      <div className="flex items-start gap-2">
        <input
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="mt-[3px] h-4 w-4 rounded border-white/40 bg-white/[0.08] text-black focus:ring-white/30"
        />
        <label htmlFor={checkboxId} className="font-aeonik text-white/80 text-[12px] lg:text-[13px] leading-[1.5]">
          Dichiaro di aver letto e accettato i{" "}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="underline hover:opacity-90 text-white"
          >
            termini e condizioni
          </button>
          .
        </label>
      </div>

      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}


