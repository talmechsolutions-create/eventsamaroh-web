import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Wedding Decor & Mandap Planning in Pune | Luxury Wedding Styling Experts",
  description:
    "Premium wedding decor and mandap planning services in Pune including floral mandap design, luxury stage decor, theme styling and complete wedding venue transformation by EventSamaroh.",
};

export default function WeddingDecorMandapPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Decor and Mandap Planning in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Decor & Mandap Planning in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Bespoke wedding decor concepts, luxury mandap design and
            complete venue transformation tailored to your dream celebration.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Wedding Decor
          </Link>
        </div>
      </section>

      {/* ================= AUTHORITY CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Luxury Wedding Decor Designers in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh offers premium wedding decor and mandap planning
            services in Pune for luxury weddings, destination celebrations
            and traditional ceremonies.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            We design personalized decor concepts aligned with your
            cultural traditions, venue architecture and aesthetic preferences.
            From grand floral mandaps to elegant minimalist stage setups,
            every element is curated for visual harmony.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our wedding decor planning includes conceptual design,
            floral styling, lighting coordination, entrance installations,
            seating layouts and full venue transformation management.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE DELIVER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Customized Mandap Design
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Traditional, royal and contemporary mandap styling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Floral & Stage Decor
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Premium floral installations and backdrop designs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Complete Venue Transformation
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Entrance styling, seating layouts and lighting integration.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Wedding Decor FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide theme-based wedding decor?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we specialize in fully customized
                wedding theme decor concepts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can decor be aligned with cultural traditions?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We design decor that respects
                traditional customs and rituals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you coordinate lighting and floral styling?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, lighting and floral teams work together
                for cohesive visual execution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should decor planning begin?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend beginning decor planning
                at least 2–3 months before the wedding.
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

            <Link href="/services/wedding-planning/venue-selection" className="hover:underline">
              Venue Selection
            </Link>

            <Link href="/services/wedding-planning/catering" className="hover:underline">
              Catering Planning
            </Link>

            <Link href="/services/wedding-planning/photography" className="hover:underline">
              Wedding Photography
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Decor Consultation in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Design Your Dream Wedding Ambience
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Decor Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}