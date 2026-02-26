import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t mt-24">

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 grid md:grid-cols-3 gap-12 text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-medium mb-4">
            EventSamaroh
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Premium event planning and design services in Pune,
            delivering unforgettable celebrations with elegance
            and precision.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-medium mb-4 text-[#b08d57]">
            Quick Links
          </h4>

          <div className="space-y-2">
            <Link href="/" className="block hover:text-black transition">
              Home
            </Link>
            <Link href="/services" className="block hover:text-black transition">
              Services
            </Link>
            <Link href="/contact" className="block hover:text-black transition">
              Contact
            </Link>
            <Link href="/book-event" className="block hover:text-black transition">
              Book Consultation
            </Link>
            {/* New Blog Link */}
            <Link href="/blog" className="block hover:text-black transition">
              Event Planning Blog
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-4 text-[#b08d57]">
            Contact
          </h4>

          <p className="text-gray-600">
            Pune, Maharashtra
          </p>
          <p className="text-gray-600 mt-2">
            info@eventsamaroh.com
          </p>
          <p className="text-gray-600 mt-2">
            +91 90000 00000
          </p>
        </div>

      </div>

      <div className="border-t py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EventSamaroh. All rights reserved.
      </div>

    </footer>
  );
}
