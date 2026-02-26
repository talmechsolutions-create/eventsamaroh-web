import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Corporate Stage & AV Setup in Pune | Audio Visual Event Production",
  description:
    "Professional corporate stage and AV setup services in Pune including LED walls, sound systems, lighting design, conference AV production and complete technical execution by EventSamaroh.",
};

export default function CorporateStageAVPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/corporate/hero.webp"
          alt="Corporate Stage and AV Setup in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Corporate Stage & AV Setup in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Professional audio-visual production and stage setup
            for conferences, corporate events and product launches.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book AV Consultation
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Corporate AV Production in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh delivers high-quality corporate stage and AV setup services
            in Pune for conferences, annual meetings, product launches
            and corporate seminars.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our technical team ensures flawless sound clarity,
            impactful lighting design and professional visual presentation
            to enhance audience engagement and brand credibility.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            AV & Stage Services We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                LED Walls & Projection Screens
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                High-resolution LED displays and professional presentation screens.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Sound Systems & Microphones
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Crystal-clear audio setup for speakers and panel discussions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Stage Lighting & Effects
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Professional lighting design to enhance stage impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Stage & AV Setup FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide complete AV production?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we handle sound systems, LED screens, lighting,
                microphones and full technical supervision.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can you support hybrid or live-streamed events?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we provide live streaming setup and
                hybrid conference support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you customize stage backdrops?
              </h3>
              <p className="mt-2 text-brand-muted">
                We design branded stage backdrops tailored
                to corporate identity and event theme.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is technical support available during the event?
              </h3>
              <p className="mt-2 text-brand-muted">
                Our technicians remain on-site throughout the event
                to ensure smooth operation.
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

            <Link href="/services/corporate-events/annual-meetings" className="hover:underline">
              Annual Meetings
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/corporate/hero.webp"
          alt="Corporate AV Production Services in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Elevate Your Corporate Event Production
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Schedule AV Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}