import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Wedding Stage & Mandap Decoration in Pune | Luxury Mandap Designers",
  description:
    "Premium wedding stage and mandap decoration services in Pune including floral mandap design, traditional setups, modern stage decor and luxury wedding styling by EventSamaroh.",
};

export default function StageMandapPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/decor-design/hero.webp"
          alt="Wedding Stage and Mandap Decoration in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Stage & Mandap Decoration in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Elegant mandap designs and luxury stage decor crafted
            to create unforgettable wedding experiences.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Mandap Design
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Premium Wedding Stage & Mandap Designers
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh specializes in luxury wedding stage and mandap
            decoration services in Pune for traditional, modern and
            destination weddings.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From floral mandaps and royal palace-style setups to
            minimalist contemporary stage designs, we transform
            wedding venues into visually breathtaking spaces.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our Stage & Mandap Services Include
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Floral Mandap Design
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Fresh floral installations with elegant canopy styling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Traditional & Royal Setups
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Heritage-inspired mandaps with classic detailing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Modern Stage Decor
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Contemporary stage designs with premium lighting effects.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Stage & Mandap Decoration FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide customized mandap themes?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we design fully customized mandap concepts
                aligned with your wedding theme.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can decor be matched with venue interiors?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We design stage setups that
                complement venue architecture and ambience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you handle complete installation?
              </h3>
              <p className="mt-2 text-brand-muted">
                Our team manages complete setup,
                on-site supervision and dismantling.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should mandap design be finalized?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend finalizing design
                4–6 weeks prior to the wedding date.
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

            <Link href="/services/decor-design/floral-styling" className="hover:underline">
              Floral Styling
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
          alt="Wedding Stage and Mandap Design Consultation"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Design a Stunning Wedding Mandap
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