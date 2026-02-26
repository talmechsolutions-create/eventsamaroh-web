import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Birthday Party Venue Booking in Pune | Kids Party Banquet Halls",
  description:
    "Professional birthday party venue booking services in Pune including banquet halls, party lawns, indoor play areas and complete coordination by EventSamaroh.",
};

export default function BirthdayVenueBookingPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Party Venue Booking in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Birthday Party Venue Booking in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Find the perfect birthday party venue in Pune with professional
            booking assistance and complete coordination support.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Birthday Venue
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Birthday Venue Selection in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh assists families in selecting and booking the ideal
            birthday party venues in Pune including banquet halls,
            party lawns, clubhouses, indoor play zones and private event spaces.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            We consider guest capacity, location preference, decor requirements,
            catering arrangements and budget while recommending venues
            that perfectly suit your celebration style.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Banquet Hall Booking
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Spacious indoor banquet halls suitable for themed birthday celebrations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Party Lawns & Outdoor Venues
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Garden venues and open spaces for large birthday gatherings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Indoor Play Areas
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Child-friendly indoor venues with built-in play facilities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Birthday Venue Booking FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                How much does a birthday venue cost in Pune?
              </h3>
              <p className="mt-2 text-brand-muted">
                Venue costs vary based on location, capacity, amenities
                and duration. We provide options suitable for different budgets.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you help with venue decoration coordination?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we coordinate directly with venue management
                and decoration teams for seamless setup.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can you recommend venues near my location?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We assist clients across Baner, Wakad,
                Kothrud, Hinjewadi, Viman Nagar and other Pune areas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should I book a birthday venue?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend booking 3–4 weeks in advance
                to secure preferred dates and venue availability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-heading text-brand-primary">
            Explore More Birthday Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">

            <Link href="/services/birthday-parties/kids-party-planning" className="hover:underline">
              Kids Party Planning
            </Link>

            <Link href="/services/birthday-parties/theme-decoration" className="hover:underline">
              Theme Decoration
            </Link>

            <Link href="/services/birthday-parties/catering-entertainment" className="hover:underline">
              Catering & Entertainment
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Party Venue Booking in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Secure the Perfect Birthday Venue Today
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Venue Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}