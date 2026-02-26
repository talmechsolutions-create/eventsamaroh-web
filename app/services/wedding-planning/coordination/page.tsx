import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Wedding Coordination Services in Pune | On-Site Wedding Management Experts",
  description:
    "Professional wedding coordination services in Pune including timeline management, vendor supervision, guest flow handling and complete on-site execution by EventSamaroh.",
};

export default function WeddingCoordinationPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Coordination Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Coordination Services in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Seamless on-site wedding management ensuring flawless execution,
            smooth vendor coordination and stress-free celebrations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Hire Wedding Coordinator
          </Link>
        </div>
      </section>

      {/* ================= AUTHORITY CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Wedding Coordinators in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides expert wedding coordination services in Pune
            designed to manage timelines, supervise vendors and ensure every
            ceremony runs smoothly from start to finish.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our coordination team oversees decor setup, catering flow,
            photography schedules, artist entries and guest management.
            We maintain structured timelines and solve real-time challenges
            without disrupting the celebration.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Whether it’s a traditional wedding ceremony or a luxury destination
            celebration, our on-site wedding managers ensure everything
            operates with precision and professionalism.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE HANDLE ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            What Our Wedding Coordinators Manage
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Timeline Planning & Control
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Structured scheduling of ceremonies, rituals and events.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Vendor Supervision
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Coordination between decorators, caterers and photographers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Guest Flow Management
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Smooth entry, seating and hospitality supervision.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Wedding Coordination FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                What does a wedding coordinator do?
              </h3>
              <p className="mt-2 text-brand-muted">
                A wedding coordinator manages timelines, supervises vendors,
                handles guest flow and ensures smooth event execution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is coordination required if planning is already done?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, coordination ensures flawless on-ground execution
                even when planning is finalized.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide multi-day wedding coordination?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we manage complete wedding functions including
                pre-wedding and reception events.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should coordination services be booked?
              </h3>
              <p className="mt-2 text-brand-muted">
                Coordination should be confirmed at least
                1–2 months before the wedding date.
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
          alt="Wedding Coordination Consultation in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Ensure a Stress-Free Wedding Experience
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Wedding Coordinator
          </Link>

        </div>
      </section>

    </main>
  );
}