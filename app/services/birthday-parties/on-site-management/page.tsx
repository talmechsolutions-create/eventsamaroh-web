import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Birthday Party On-Site Management in Pune | Event Coordination Services",
  description:
    "Professional birthday party on-site management services in Pune including event supervision, vendor coordination, guest assistance and smooth execution by EventSamaroh.",
};

export default function BirthdayOnSiteManagementPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Party On-Site Management in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Birthday Party On-Site Management in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Seamless event supervision and real-time coordination to ensure
            your birthday celebration runs smoothly from start to finish.
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
            Professional Birthday Event Coordination in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides professional on-site birthday party
            management services in Pune to ensure every detail is executed
            perfectly during your celebration.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From vendor coordination and guest assistance to activity
            scheduling and timeline management, our team ensures
            stress-free birthday events for families and hosts.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            What We Handle On-Site
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Vendor Coordination
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Managing decorators, caterers, entertainers and photographers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Timeline Management
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Ensuring cake cutting, games and performances follow schedule.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Guest Assistance
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Welcoming guests and resolving event-day queries smoothly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Birthday Event Coordination FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Why is on-site management important for birthday parties?
              </h3>
              <p className="mt-2 text-brand-muted">
                It ensures smooth execution, proper vendor coordination
                and stress-free celebration for the host family.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you stay for the entire event duration?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, our team remains on-site from setup until event completion.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can you handle emergency situations during events?
              </h3>
              <p className="mt-2 text-brand-muted">
                Our experienced coordinators are trained to handle
                last-minute adjustments and unexpected situations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is on-site management available for home parties?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we provide supervision for home celebrations,
                banquet halls and outdoor birthday venues.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-heading text-brand-primary">
            Explore More Birthday Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">

            <Link href="/services/birthday-parties/kids-party-planning" className="hover:underline">
              Kids Party Planning
            </Link>

            <Link href="/services/birthday-parties/theme-decoration" className="hover:underline">
              Theme Decoration
            </Link>

            <Link href="/services/birthday-parties/catering-entertainment" className="hover:underline">
              Catering & Entertainment
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Event Management Services in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Enjoy a Stress-Free Birthday Celebration
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book On-Site Coordination
          </Link>

        </div>
      </section>

    </main>
  );
}