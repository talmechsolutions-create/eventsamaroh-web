import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Event Theme Design in Pune | Custom Wedding & Party Themes",
  description:
    "Professional event theme design services in Pune including wedding themes, birthday concepts, corporate event styling and complete visual concept development by EventSamaroh.",
};

export default function ThemeConceptsPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/decor-design/hero.webp"
          alt="Event Theme Design Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Event Theme Design in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Customized theme concepts for weddings, private celebrations
            and corporate events designed with creativity and precision.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Theme Consultation
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Creative Event Theme Concepts Tailored to Your Vision
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides premium event theme design services in Pune,
            transforming ideas into immersive and visually captivating
            celebration environments.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From royal wedding themes and contemporary minimalist setups
            to corporate brand-aligned concepts and milestone birthday themes,
            our design team crafts unique experiences for every event.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our Theme Design Services Include
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Wedding Theme Concepts
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Royal, floral, traditional and modern wedding styling themes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Birthday & Private Party Themes
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Customized milestone birthday and private celebration concepts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Corporate Event Themes
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Brand-integrated decor and corporate identity styling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Event Theme Design FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you create fully customized themes?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, every theme is conceptualized and designed
                uniquely based on your preferences and event goals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can themes match brand identity for corporate events?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We align decor and visual styling
                with your company’s branding guidelines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should theme concepts be finalized?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend finalizing theme concepts
                at least 4–6 weeks before the event date.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide 3D mockups or design previews?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, concept previews and visual references
                are shared before final execution.
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

            <Link href="/services/decor-design/floral-styling" className="hover:underline">
              Floral Styling
            </Link>

            <Link href="/services/decor-design/lighting-design" className="hover:underline">
              Lighting Design
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/decor-design/hero.webp"
          alt="Event Theme Design Consultation in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Bring Your Event Theme to Life
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Theme Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}