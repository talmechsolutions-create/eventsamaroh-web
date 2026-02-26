import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Wedding Photography Services in Pune | Candid & Cinematic Wedding Shoots",
  description:
    "Professional wedding photography services in Pune including candid photography, cinematic videography, pre-wedding shoots and complete wedding coverage by EventSamaroh.",
};

export default function WeddingPhotographyPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Photography Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Photography Services in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Candid wedding photography, cinematic films and timeless
            storytelling that preserves every emotional moment.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Wedding Photography
          </Link>
        </div>
      </section>

      {/* ================= AUTHORITY CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Premium Wedding Photographers in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh offers luxury wedding photography services in Pune,
            capturing candid emotions, traditional rituals and grand celebrations
            with artistic precision.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our professional team specializes in candid wedding photography,
            cinematic wedding films, drone coverage and creative pre-wedding shoots.
            Every wedding story is crafted with a documentary-style approach
            blended with editorial elegance.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From Haldi and Mehendi to reception and farewell,
            we ensure full event coverage with high-resolution editing,
            color grading and premium album design.
          </p>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our Wedding Photography Services Include
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Candid Wedding Photography
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Natural storytelling photography capturing genuine emotions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Cinematic Videography
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                High-quality cinematic wedding films with professional editing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Pre-Wedding Shoots
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Creative outdoor and studio pre-wedding sessions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Wedding Photography FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you offer candid and traditional photography?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we provide both candid photography and traditional coverage
                based on your preference.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide wedding albums?
              </h3>
              <p className="mt-2 text-brand-muted">
                Premium photo albums with customized layouts and
                high-quality prints are included in packages.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is drone coverage available?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, drone videography can be arranged depending
                on venue permissions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should photography be booked?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend booking at least 3–6 months in advance
                to secure availability during peak wedding season.
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

            <Link href="/services/wedding-planning/venue-selection" className="hover:underline">
              Venue Selection
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Photography Consultation in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Capture Your Wedding Story Beautifully
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Photography Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}