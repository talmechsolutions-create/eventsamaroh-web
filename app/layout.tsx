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

/* ✅ Updated Global Metadata */
export const metadata: Metadata = {
  metadataBase: new URL("https://eventsamaroh.in"),

  title: {
    default: "EventSamaroh | Luxury Event Management Company in Pune",
    template: "%s | EventSamaroh",
  },

  description:
    "EventSamaroh is a premium event management company in Pune specializing in luxury weddings, corporate events, private celebrations and bespoke decor services across Baner, Wakad, Hinjewadi, Kharadi and all major Pune locations.",

  keywords: [
    "event management company in Pune",
    "wedding planner in Pune",
    "corporate event management Pune",
    "luxury wedding planner Pune",
    "birthday party planner Pune",
    "event decor services Pune",
    "event planner in Baner",
    "event planner in Wakad",
    "event planner in Hinjewadi",
  ],

  openGraph: {
    title:
      "EventSamaroh | Luxury Event Management Company in Pune",
    description:
      "Premium wedding planning, corporate event management and private celebrations executed with precision across Pune.",
    url: "https://eventsamaroh.in",
    siteName: "EventSamaroh",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eventsamaroh.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EventSamaroh - Event Management Company in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "EventSamaroh | Luxury Event Management Company in Pune",
    description:
      "Luxury wedding and corporate event management services in Pune.",
    images: ["https://eventsamaroh.in/og-image.jpg"],
  },

  alternates: {
    canonical: "https://eventsamaroh.in",
  },

  category: "Event Management",
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