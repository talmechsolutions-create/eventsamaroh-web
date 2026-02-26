import type { Metadata } from "next";
import { Phone, Mail, MessageCircle } from "lucide-react";
import LeadForm from "../../components/LeadForm";

export const metadata: Metadata = {
  title: "Contact EventSamaroh | Event Management in Pune",
  description:
    "Contact EventSamaroh for weddings, corporate events, private parties, and decor services in Pune.",
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-white py-28 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-black">
            Let’s Plan Your Event
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Speak directly with our event experts and start planning your
            perfect celebration today.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-brand-light py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <a
            href="https://wa.me/917389642874"
            target="_blank"
            className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition"
          >
            <MessageCircle className="mx-auto mb-4 text-brand-gold" size={40} />
            <h3 className="font-semibold text-lg">WhatsApp Us</h3>
            <p className="text-gray-600 mt-2">
              Instant response from our planning team.
            </p>
          </a>

          <a
            href="tel:+917389642874"
            className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition"
          >
            <Phone className="mx-auto mb-4 text-brand-gold" size={40} />
            <h3 className="font-semibold text-lg">Call Directly</h3>
            <p className="text-gray-600 mt-2">
              Speak with an event specialist.
            </p>
          </a>

          <a
            href="mailto:hello@eventsamaroh.com"
            className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition"
          >
            <Mail className="mx-auto mb-4 text-brand-gold" size={40} />
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-gray-600 mt-2">
              Send detailed event requirements.
            </p>
          </a>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-black">
            Tell Us About Your Event
          </h2>

          <p className="mt-4 text-gray-600 mb-12">
            Share your event details and our team will contact you within 24 hours.
          </p>

          <LeadForm />
        </div>
      </section>

      {/* ================= PREMIUM TRUST SECTION ================= */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24 px-6 overflow-hidden">
        {/* Subtle Gold Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-70" />

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            EventSamaroh — Pune’s Trusted Event Planning Partner
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            EventSamaroh is a premium event management company in Pune,
            specializing in weddings, corporate events, and luxury private celebrations.
            Our team combines creative design, meticulous planning, and flawless execution
            to deliver experiences that leave lasting impressions.
          </p>

          {/* Trust Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="border border-neutral-800 rounded-xl p-6 hover:border-yellow-600 transition">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">
                Premium Event Design
              </h3>
              <p className="text-gray-400 text-sm">
                Bespoke concepts tailored to your vision, ensuring every detail
                reflects elegance and sophistication.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-xl p-6 hover:border-yellow-600 transition">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">
                Trusted by Pune Clients
              </h3>
              <p className="text-gray-400 text-sm">
                Recognized for reliability, professionalism, and seamless event execution
                across weddings and corporate gatherings.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-xl p-6 hover:border-yellow-600 transition">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">
                End-to-End Management
              </h3>
              <p className="text-gray-400 text-sm">
                From planning to production, our team ensures stress-free
                coordination with unmatched attention to detail.
              </p>
            </div>
          </div>

          {/* Bottom Tagline */}
          <p className="mt-16 text-gray-500 text-sm tracking-wide">
            Professional Wedding Planners • Corporate Event Specialists • Luxury Celebrations in Pune
          </p>
        </div>
      </section>
    </main>
  );
}