import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Corporate Event On-Site Management in Pune | Professional Event Coordination",
  description:
    "Professional corporate event on-site management services in Pune including real-time coordination, vendor supervision, guest handling and seamless execution by EventSamaroh.",
};

export default function CorporateOnSiteManagementPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/corporate/hero.webp"
          alt="Corporate Event On-Site Management in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Corporate Event On-Site Management in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Professional event supervision and real-time coordination
            ensuring flawless execution of corporate gatherings.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Event Coordination
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Corporate Event Supervision in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides dedicated on-site management services
            for corporate conferences, product launches, annual meetings
            and business events across Pune.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our experienced event managers oversee vendor coordination,
            stage flow, technical execution and guest handling
            to ensure your corporate event runs smoothly.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE HANDLE ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            What We Manage On-Site
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Vendor Supervision
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Coordinating decorators, AV teams, caterers and technical crew.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Program Flow Management
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Ensuring sessions, speeches and activities follow schedule.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Guest & VIP Coordination
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Professional guest assistance and hospitality supervision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Corporate On-Site Management FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Why is on-site event management important?
              </h3>
              <p className="mt-2 text-brand-muted">
                It ensures smooth execution, timely coordination
                and professional handling of unforeseen situations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you stay throughout the event?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, our event managers remain on-site from setup
                until completion.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can you handle large corporate gatherings?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We manage both small business events
                and large corporate conferences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you coordinate emergency solutions during events?
              </h3>
              <p className="mt-2 text-brand-muted">
                Our experienced team is prepared to manage
                last-minute adjustments efficiently.
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
          alt="Corporate Event Coordination in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Ensure a Smooth Corporate Event Experience
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Schedule Event Supervision
          </Link>

        </div>
      </section>

    </main>
  );
}