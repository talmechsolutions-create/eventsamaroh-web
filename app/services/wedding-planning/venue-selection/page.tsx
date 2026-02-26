import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Wedding Venue Selection in Pune | Luxury Banquet & Destination Wedding Venues",
  description:
    "Professional wedding venue selection services in Pune including banquet halls, resorts, destination wedding venues and complete booking assistance by EventSamaroh.",
};

export default function WeddingVenueSelectionPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Venue Selection in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Venue Selection in Pune
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Discover premium banquet halls, luxury resorts and curated
            destination venues tailored to your wedding vision.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Find Your Perfect Venue
          </Link>
        </div>
      </section>

      {/* ================= AUTHORITY CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Curated Wedding Venues Across Pune & Nearby Destinations
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides professional wedding venue selection services
            in Pune, helping couples secure luxury banquet halls, premium
            resorts, heritage properties and exclusive destination venues.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            We assess guest count, budget range, decor requirements and
            logistical feasibility to recommend the most suitable venues.
            Our venue specialists ensure transparency in pricing,
            availability checks and seamless booking coordination.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From intimate celebrations to grand 1000+ guest weddings,
            we align your venue choice with your overall wedding theme
            and event experience.
          </p>

        </div>
      </section>

      {/* ================= VENUE TYPES ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Types of Wedding Venues We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Luxury Banquet Halls
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Elegant indoor venues for grand wedding receptions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Resort & Destination Venues
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Scenic outdoor venues ideal for luxury celebrations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Boutique & Intimate Spaces
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Perfect venues for close-knit family weddings.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Wedding Venue Selection FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                How early should wedding venues be booked in Pune?
              </h3>
              <p className="mt-2 text-brand-muted">
                Venues should ideally be booked 6–12 months in advance,
                especially during peak wedding season.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you negotiate pricing with venues?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we assist in negotiating competitive pricing and
                transparent contract agreements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you arrange venue walkthroughs?
              </h3>
              <p className="mt-2 text-brand-muted">
                We coordinate venue visits and layout discussions
                before final confirmation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can you assist with destination weddings near Pune?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we manage destination venue selection and
                logistics planning for outstation weddings.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-heading text-brand-primary">
            Explore Complete Wedding Planning Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">

            <Link href="/services/wedding-planning/decor-mandap" className="hover:underline">
              Wedding Decor
            </Link>

            <Link href="/services/wedding-planning/catering" className="hover:underline">
              Wedding Catering
            </Link>

            <Link href="/services/wedding-planning/coordination" className="hover:underline">
              Wedding Coordination
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Venue Consultation in Pune"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Secure Your Dream Wedding Venue
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