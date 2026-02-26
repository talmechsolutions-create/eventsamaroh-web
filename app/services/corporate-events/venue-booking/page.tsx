import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Corporate Event Venue Booking in Pune | Conference & Business Venues",
  description:
    "Professional corporate event venue booking services in Pune including conference halls, banquet venues, business centers and complete coordination by EventSamaroh.",
};

export default function CorporateVenueBookingPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/corporate/hero.webp"
          alt="Corporate Event Venue Booking in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Corporate Event Venue Booking in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Secure premium conference halls and business venues
            for corporate meetings, seminars and product launches.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Corporate Venue
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Corporate Venue Selection in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides reliable corporate venue booking
            services in Pune for conferences, annual meetings,
            training sessions and business events.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            We assist in selecting venues based on capacity,
            technical requirements, accessibility and budget,
            ensuring the perfect environment for professional events.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Corporate Venues We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Conference Halls
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Professional halls suitable for seminars and business conferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Business Hotels & Banquets
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Premium hotels with conference and banquet facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Training & Meeting Rooms
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Fully equipped meeting rooms for corporate sessions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Corporate Venue Booking FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                How do you select corporate venues?
              </h3>
              <p className="mt-2 text-brand-muted">
                We evaluate venue capacity, AV infrastructure,
                location convenience and pricing before recommending options.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you negotiate venue pricing?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we assist in securing competitive pricing
                through our trusted venue partnerships.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can you coordinate catering with the venue?
              </h3>
              <p className="mt-2 text-brand-muted">
                We coordinate directly with venue teams
                for catering and hospitality services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should corporate venues be booked?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend booking at least 4–6 weeks in advance
                for peak business seasons.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-heading text-brand-primary">
            Explore More Corporate Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">

            <Link href="/services/corporate-events/conferences" className="hover:underline">
              Corporate Conferences
            </Link>

            <Link href="/services/corporate-events/product-launch" className="hover:underline">
              Product Launch Events
            </Link>

            <Link href="/services/corporate-events/stage-av" className="hover:underline">
              Stage & AV Setup
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/corporate/hero.webp"
          alt="Corporate Venue Booking Services in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Secure the Ideal Corporate Venue Today
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Schedule Venue Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}