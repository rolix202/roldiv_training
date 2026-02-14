"use client";

import Image from "next/image";
import { trackWhatsAppClick } from "./FacebookPixel";

const WHATSAPP_GROUP_URL = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL || "https://chat.whatsapp.com/";

export default function WhatsAppCTA() {
  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#1E3A8A] active:bg-[#1E3A8A] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors shadow-lg cursor-pointer touch-manipulation"
    >
      <Image src="/whatsapp.svg" width={25} height={25} alt="WhatsApp" aria-hidden />
      Join the FREE WhatsApp Group
    </a>
  );
}
