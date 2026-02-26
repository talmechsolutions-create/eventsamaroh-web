import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Wedding Artists & Entertainment Services in Pune | DJs, Live Bands & Performers",
  description:
    "Professional wedding artist booking services in Pune including DJs, live bands, celebrity performers, cultural artists and complete entertainment coordination by EventSamaroh.",
};

export default function WeddingArtistsPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Artists and Entertainment Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Artists & Entertainment Services in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Premium wedding entertainment including DJs, live bands,
            cultural performers and curated artist management.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Wedding Artists
          </Link>
        </div>
      </section>

      {/* ================= AUTHORITY CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Premium Wedding Entertainment in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides professional wedding artist booking services
            in Pune, ensuring unforgettable entertainment experiences for
            sangeet nights, receptions and destination weddings.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From high-energy DJs and live music bands to classical performers,
            celebrity artists and cultural acts, we curate entertainment
            aligned with your wedding theme and audience preferences.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our team manages artist negotiations, technical riders,
            stage setup coordination and full performance supervision.
          </p>

        </div>
      </section>

      {/* ================= ARTIST TYPES ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Types of Wedding Artists We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Professional Wedding DJs
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                High-energy DJs for sangeet and reception nights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Live Bands & Musicians
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Live instrumental and vocal performances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Cultural & Traditional Artists
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Folk dancers, classical performers and ritual artists.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Wedding Entertainment FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Can we book celebrity performers?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we assist with celebrity artist bookings
                subject to availability and budget.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you manage sound and stage setup?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we coordinate stage, lighting and audio
                requirements as per artist specifications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should artists be booked?
              </h3>
              <p className="mt-2 text-brand-muted">
                Entertainment bookings should ideally be confirmed
                2–4 months before the wedding.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide cultural performance options?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we arrange traditional dance groups,
                classical singers and cultural performers.
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
          alt="Wedding Artist Booking in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Elevate Your Wedding Entertainment Experience
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Wedding Entertainment
          </Link>

        </div>
      </section>

    </main>
  );
}