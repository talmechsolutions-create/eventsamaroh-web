import "./globals.css";
import { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";

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

export const metadata = {
  title: "Your Brand",
  description: "Premium Service Experience",
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
    >
      <body className="font-body antialiased bg-brand-soft text-brand-primary min-h-screen">

        {/* Header */}
        <Header />

        {/* Main Layout Wrapper */}
        <div className="flex flex-col min-h-screen">
          
          <main className="flex-1 pt-20">
            {children}
          </main>

          {/* Footer */}
          <footer className="text-center py-6 text-sm text-brand-muted border-t border-black/5">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </footer>

        </div>
      </body>
    </html>
  );
}