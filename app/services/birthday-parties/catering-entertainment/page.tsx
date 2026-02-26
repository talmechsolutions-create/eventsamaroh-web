import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Birthday Party Catering & Entertainment in Pune | Kids Party Services",
  description:
    "Professional birthday party catering and entertainment services in Pune including kids menu planning, live entertainers, magicians, mascots and complete event coordination.",
};

export default function CateringEntertainmentPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Party Catering & Entertainment in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Birthday Party Catering & Entertainment in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Delicious kids-friendly catering and engaging entertainment
            designed to make every birthday celebration exciting and memorable.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Catering & Entertainment
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Kids Birthday Catering & Entertainment Services in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides complete birthday party catering and entertainment
            services in Pune including customized kids menus, snack counters,
            dessert tables, magicians, anchors, cartoon mascots and interactive games.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            We ensure safe, hygienic catering options and age-appropriate
            entertainment activities that keep children engaged throughout
            the celebration.
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
                Kids-Friendly Catering
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Customized birthday menus, snacks, desserts and cake coordination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Live Entertainment
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Magicians, game hosts, anchors and interactive activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Mascots & Performers
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Cartoon characters, themed mascots and fun performers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Birthday Catering & Entertainment FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                What food items are suitable for kids birthday parties?
              </h3>
              <p className="mt-2 text-brand-muted">
                Popular options include mini burgers, pasta, sandwiches,
                pizza, cupcakes, popcorn and customized birthday cakes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide magicians and anchors?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we arrange professional magicians, kids anchors,
                game hosts and interactive entertainers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is catering hygienic and safe for children?
              </h3>
              <p className="mt-2 text-brand-muted">
                We coordinate with verified vendors who follow proper hygiene
                and safety standards for food preparation and serving.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can catering and entertainment be customized?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We design packages based on guest count,
                theme preference and budget requirements.
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

            <Link href="/services/birthday-parties/venue-booking" className="hover:underline">
              Venue Booking
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Catering & Entertainment in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Let’s Make the Celebration Delicious & Fun
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Catering & Entertainment
          </Link>

        </div>
      </section>

    </main>
  );
}