import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, ClipboardCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Private Party On-Site Management in Pune | Event Coordination Experts",
  description:
    "Professional on-site event management for private parties in Pune. Seamless coordination, vendor supervision, guest handling and real-time event execution by EventSamaroh.",
};

export default function PrivateOnSiteManagementPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/private/hero.webp"
          alt="Private Party On-Site Management in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Private Party On-Site Management in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Flawless event execution with structured supervision,
            vendor coordination and seamless guest experience management.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Ensure Seamless Execution
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Event Supervision for Private Celebrations
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides complete on-site event management
            for private parties in Pune, ensuring every element of your
            celebration runs smoothly from start to finish.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From vendor coordination and decor setup supervision
            to guest flow management and timeline execution,
            our dedicated team handles every operational detail,
            allowing you to enjoy your event stress-free.
          </p>

        </div>
      </section>

      {/* ================= EXECUTION FRAMEWORK ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our On-Site Coordination Framework
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <ClipboardCheck className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Timeline Control
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Structured event schedule monitoring and milestone tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Users className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Vendor Supervision
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Real-time coordination with catering, decor and entertainment teams.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Sparkles className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Setup & Quality Check
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Inspection of decor installations and guest areas before event start.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Seamless Wrap-Up
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Smooth event closure and post-event coordination.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Why EventSamaroh for On-Site Event Management?
          </h2>

          <div className="mt-12 space-y-4 text-left max-w-2xl mx-auto text-brand-primary">
            <p>✔ Dedicated on-ground event managers</p>
            <p>✔ Structured planning & real-time supervision</p>
            <p>✔ Professional guest handling & experience focus</p>
            <p>✔ Risk mitigation and contingency management</p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/private/hero.webp"
          alt="Private Party Event Coordination Consultation"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Relax. We Handle Everything On-Site.
          </h2>

          <p className="mt-6 text-white/85 text-lg">
            Enjoy your private celebration while our professional team
            ensures flawless execution from beginning to end.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Event Management Support
          </Link>

        </div>
      </section>

    </main>
  );
}