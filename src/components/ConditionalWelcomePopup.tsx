"use client";

import { usePathname } from "next/navigation";
import WelcomePopup from "@/components/WelcomePopup";

export default function ConditionalWelcomePopup() {
  const pathname = usePathname();
  const isGiftcard = pathname === "/giftcard" || pathname.startsWith("/giftcard/");

  if (isGiftcard) {
    return null;
  }

  return <WelcomePopup />;
}
