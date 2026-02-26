import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Private Party Catering & Entertainment in Pune | Premium Event Services",
  description:
    "Professional private party catering and entertainment services in Pune including cocktail catering, live music, DJs, bartenders and complete event coordination by EventSamaroh.",
};

export default function PrivateCateringEntertainmentPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/private-parties/hero.webp"
          alt="Private Party Catering & Entertainment in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Private Party Catering & Entertainment in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Premium catering and curated entertainment for house parties,
            cocktail evenings and exclusive celebrations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Private Party
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Premium Catering & Entertainment for Private Celebrations
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh offers tailored catering and entertainment services
            for private parties in Pune including anniversaries,
            milestone celebrations, cocktail nights and social gatherings.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            We curate menus, arrange live entertainment and coordinate
            every detail to ensure a seamless and elegant party experience.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Premium Catering
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Multi-cuisine menus, live counters and customized party spreads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                DJs & Live Music
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Professional DJs, live bands and curated music experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Bartenders & Mixology
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Cocktail bars and professional mixology setups.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Private Party Catering FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide cocktail catering services?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we arrange professional bartenders and curated
                cocktail menus for private celebrations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can catering menus be customized?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We customize menus based on guest count,
                dietary preferences and event theme.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you arrange DJs for house parties?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we provide professional DJs and sound setup
                suitable for home and venue-based parties.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is on-site supervision included?
              </h3>
              <p className="mt-2 text-brand-muted">
                Our coordinators ensure smooth catering and
                entertainment execution throughout the event.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-heading text-brand-primary">
            Explore More Private Party Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">

            <Link href="/services/private-parties/theme-decor" className="hover:underline">
              Theme & Decor
            </Link>

            <Link href="/services/private-parties/venue-booking" className="hover:underline">
              Venue Booking
            </Link>

            <Link href="/services/private-parties/on-site-management" className="hover:underline">
              On-Site Management
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/private-parties/hero.webp"
          alt="Private Party Catering Services in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Elevate Your Private Celebration
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Private Party Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}