import Image from "next/image";
import Link from "next/link";
import { Sparkles, Palette, CheckCircle, Layers } from "lucide-react";

export const metadata = {
  title: "Custom Event Decor Installations in Pune | Luxury Event Fabrication",
  description:
    "Premium custom event decor installations in Pune including themed structures, luxury props, stage fabrication and bespoke decorative installations by EventSamaroh.",
};

export default function CustomInstallationsPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/decor/hero.webp"
          alt="Custom Event Decor Installations in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Custom Event Decor Installations in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Bespoke decorative structures, thematic installations and
            luxury fabrication designed to create immersive event environments.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Create a Custom Installation
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Concept-to-Execution Decorative Fabrication
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides custom decor installation services in Pune,
            creating large-scale decorative structures, branded installations,
            thematic props and immersive visual environments.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From grand wedding entry arches to corporate experiential setups,
            our in-house fabrication and design teams ensure structural safety,
            aesthetic precision and premium finishing.
          </p>

        </div>
      </section>

      {/* ================= INSTALLATION SPECIALIZATIONS ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our Custom Installation Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Layers className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Thematic Structures
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Customized event structures aligned with your theme concept.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Palette className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Creative Props & Backdrops
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Fabricated stage backdrops, arches and artistic installations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Sparkles className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Luxury Entry Concepts
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Grand entrances and immersive guest arrival experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Structural & Safety Compliance
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Engineered builds with professional installation supervision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Why EventSamaroh for Custom Decor Installations?
          </h2>

          <div className="mt-12 space-y-4 text-left max-w-2xl mx-auto text-brand-primary">
            <p>✔ In-house design and fabrication expertise</p>
            <p>✔ Premium materials and finishing quality</p>
            <p>✔ Creative, brand-aligned installations</p>
            <p>✔ Seamless integration with lighting & floral decor</p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/decor/hero.webp"
          alt="Custom Event Installation Consultation"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Build Something Extraordinary
          </h2>

          <p className="mt-6 text-white/85 text-lg">
            Collaborate with our creative team in Pune
            to design and execute breathtaking custom installations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Start Your Custom Design
          </Link>

        </div>
      </section>

    </main>
  );
}