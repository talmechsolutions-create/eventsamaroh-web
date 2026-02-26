import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Floral Styling Services in Pune | Luxury Event Floral Decor",
  description:
    "Premium floral styling services in Pune including wedding floral decor, stage flower installations, entrance arrangements and custom event floral designs by EventSamaroh.",
};

export default function FloralStylingPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/decor-design/hero.webp"
          alt="Floral Styling Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Floral Styling Services in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Elegant floral installations and customized flower decor
            crafted to elevate weddings and premium celebrations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Floral Consultation
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Luxury Floral Decor for Weddings & Events
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides premium floral styling services in Pune
            for weddings, receptions, corporate events and private celebrations.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From grand floral mandaps and stage backdrops to entrance arches
            and table centerpieces, we create breathtaking floral experiences
            tailored to your event theme.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our Floral Services Include
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Mandap & Stage Floral Decor
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Fresh flower installations for wedding stages and mandaps.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Entrance & Aisle Styling
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Floral arches and walkway arrangements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Table & Venue Arrangements
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Elegant floral centerpieces and venue styling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Floral Styling FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you use fresh flowers?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we primarily use fresh premium flowers
                sourced for quality and longevity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can floral designs match wedding themes?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. Floral styling is customized
                according to your theme and color palette.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide eco-friendly floral options?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, sustainable and reusable decor options
                are available upon request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should floral decor be finalized?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend finalizing floral concepts
                4–6 weeks before the event date.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-heading text-brand-primary">
            Explore More Decor Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">

            <Link href="/services/decor-design/stage-mandap" className="hover:underline">
              Stage & Mandap
            </Link>

            <Link href="/services/decor-design/lighting-design" className="hover:underline">
              Lighting Design
            </Link>

            <Link href="/services/decor-design/theme-concepts" className="hover:underline">
              Theme Concepts
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/decor-design/hero.webp"
          alt="Floral Styling Consultation in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Create Stunning Floral Experiences
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Floral Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}