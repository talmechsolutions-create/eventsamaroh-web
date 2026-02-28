import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

/* ✅ Improved Global Metadata */
export const metadata: Metadata = {
  metadataBase: new URL("https://eventsamaroh.in"), // change if different domain
  title: {
    default: "EventSamaroh | Luxury Event Management Company in Pune",
    template: "%s | EventSamaroh",
  },
  description:
    "EventSamaroh is a premium event management company in Pune specializing in weddings, corporate events and private celebrations.",
  keywords: [
    "event management company in Pune",
    "wedding planner Pune",
    "corporate event management Pune",
    "luxury wedding planner Pune",
  ],
  openGraph: {
    title: "EventSamaroh | Luxury Event Management Company in Pune",
    description:
      "Premium wedding planning and corporate event management services in Pune.",
    url: "https://eventsamaroh.in",
    siteName: "EventSamaroh",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://eventsamaroh.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-brand-soft text-brand-primary min-h-screen">

        <Header />

        <div className="flex flex-col min-h-screen">
          <main className="flex-1 pt-20">
            {children}
          </main>

          <footer className="text-center py-6 text-sm text-brand-muted border-t border-black/5">
            © {new Date().getFullYear()} EventSamaroh. All rights reserved.
          </footer>
        </div>

        <FloatingWhatsApp />

      </body>
    </html>
  );
}