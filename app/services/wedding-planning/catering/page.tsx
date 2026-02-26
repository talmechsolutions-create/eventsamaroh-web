import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Wedding Catering Services in Pune | Luxury Wedding Menu Planning",
  description:
    "Premium wedding catering services in Pune including multi-cuisine menu planning, live food counters, buffet setups and complete hospitality coordination by EventSamaroh.",
};

export default function WeddingCateringPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Catering Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Catering Services in Pune
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Curated wedding menus, premium hospitality and flawless
            catering coordination for unforgettable celebrations.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Wedding Catering
          </Link>
        </div>
      </section>

      {/* ================= AUTHORITY CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Luxury Wedding Catering & Menu Planning Experts
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh delivers premium wedding catering services in Pune,
            designed to provide exceptional culinary experiences for
            traditional, contemporary and destination weddings.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From multi-cuisine buffets and live cooking counters to
            curated plated dinners and themed food presentations,
            we ensure quality, presentation and hospitality excellence.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our catering coordination includes vendor management,
            tasting sessions, menu customization, dietary planning,
            and full event-day supervision.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading text-brand-primary">
            Our Wedding Catering Services Include
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Multi-Cuisine Buffets
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Indian, Continental, Asian and fusion wedding menus.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Live Food Counters
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Interactive live stations for premium guest experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Hospitality Coordination
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Service staff management and guest dining flow control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Wedding Catering FAQs
          </h2>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="font-semibold text-lg">
                Can menus be customized for dietary needs?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, vegetarian, vegan, Jain and specialty menus
                can be tailored to guest preferences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you arrange tasting sessions?
              </h3>
              <p className="mt-2 text-brand-muted">
                We coordinate tasting sessions to finalize
                menu selections before the wedding.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should catering be finalized?
              </h3>
              <p className="mt-2 text-brand-muted">
                Catering planning should begin at least
                2–3 months before the wedding.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you manage catering vendors on wedding day?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, our team supervises full execution
                and service quality control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading text-brand-primary">
            Explore Complete Wedding Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">
            <Link href="/services/wedding-planning/decor-mandap" className="hover:underline">
              Wedding Decor
            </Link>
            <Link href="/services/wedding-planning/venue-selection" className="hover:underline">
              Venue Selection
            </Link>
            <Link href="/services/wedding-planning/photography" className="hover:underline">
              Photography
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Catering Consultation in Pune"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Curate the Perfect Wedding Menu
          </h2>
          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Catering Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}