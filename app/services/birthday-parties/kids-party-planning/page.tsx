import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Kids Birthday Party Planning in Pune | Themed Kids Party Organizers",
  description:
    "Professional kids birthday party planners in Pune offering themed decorations, games, entertainment, catering and complete event management by EventSamaroh.",
};

export default function KidsPartyPlanningPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Kids Birthday Party Planning in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Kids Birthday Party Planning in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Fun-filled, creative and professionally organized birthday celebrations
            designed to delight children and impress guests.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Kids Birthday Party
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Kids Birthday Party Organizers in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides premium kids birthday party planning services
            in Pune including theme decoration, activity coordination,
            games management, catering arrangements and complete event execution.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From superhero and princess themes to customized creative concepts,
            we transform your child’s birthday into a magical celebration.
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
                Themed Decorations
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Customized birthday themes with balloons, props and backdrops.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Games & Activities
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Engaging games, fun competitions and kids entertainment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Complete Event Supervision
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Professional on-site coordination from start to finish.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Kids Birthday Party FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                How much does a kids birthday party cost in Pune?
              </h3>
              <p className="mt-2 text-brand-muted">
                Costs depend on theme complexity, guest count,
                catering and entertainment requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide customized themes?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we create fully personalized birthday themes
                tailored to your child’s preferences.
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

            <Link href="/services/birthday-parties/theme-decoration" className="hover:underline">
              Theme Decoration
            </Link>

            <Link href="/services/birthday-parties/catering-entertainment" className="hover:underline">
              Catering & Entertainment
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
          alt="Kids Birthday Party Planning in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Let’s Create a Magical Birthday Celebration
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Birthday Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}