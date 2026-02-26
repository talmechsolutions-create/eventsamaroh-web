"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import BrandButton from "@/components/BrandButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-black/5 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-heading tracking-wide text-brand-primary"
        >
          EventSamaroh
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">

          <Link
            href="/"
            className="text-brand-primary hover:text-brand-accent transition font-medium"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-brand-primary hover:text-brand-accent font-medium transition">
              Services
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="absolute left-0 top-full mt-6 w-72 bg-white shadow-xl rounded-2xl p-6 border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="space-y-5 text-sm">

                {[
                  {
                    title: "Wedding Planning",
                    desc: "Luxury & destination weddings",
                    href: "/services/wedding-planning",
                  },
                  {
                    title: "Corporate Events",
                    desc: "Conferences & product launches",
                    href: "/services/corporate-events",
                  },
                  {
                    title: "Birthday Celebrations",
                    desc: "Themed & customized events",
                    href: "/services/birthday-parties",
                  },
                  {
                    title: "Private Parties",
                    desc: "Social & lifestyle gatherings",
                    href: "/services/private-parties",
                  },
                  {
                    title: "Decor & Design",
                    desc: "Creative styling & vendor coordination",
                    href: "/services/decor-design",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block hover:text-brand-accent transition"
                  >
                    <p className="font-semibold text-brand-primary">
                      {item.title}
                    </p>
                    <p className="text-brand-muted text-xs">
                      {item.desc}
                    </p>
                  </Link>
                ))}

              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-brand-primary hover:text-brand-accent transition font-medium"
          >
            Contact
          </Link>

          {/* Secondary CTA */}
          <BrandButton href="/pay" variant="outline">
            Pay Now
          </BrandButton>

          {/* Primary CTA */}
          <BrandButton href="/book-event" variant="accent">
            Get a Free Consultation
          </BrandButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-black/5">
          <div className="flex flex-col px-6 py-6 gap-5 text-sm">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-brand-primary"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-brand-primary"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-brand-primary"
            >
              Contact
            </Link>

            <BrandButton
              href="/pay"
              variant="outline"
              className="text-center"
            >
              Pay Now
            </BrandButton>

            <BrandButton
              href="/book-event"
              variant="accent"
              className="text-center"
            >
              Get a Free Consultation
            </BrandButton>

          </div>
        </div>
      )}
    </header>
  );
}