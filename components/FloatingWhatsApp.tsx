"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phone = "917389642874"; // your number without +

  const message = encodeURIComponent(
    "Hi EventSamaroh, I want to plan an event."
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-4 sm:right-6 z-50
        flex items-center gap-3
        bg-green-500 hover:bg-green-600
        text-white px-5 py-3 rounded-full
        shadow-xl transition
        animate-bounce
      "
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline font-medium">
        Chat on WhatsApp
      </span>
    </a>
  );
}
