import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Private Party Theme & Decor in Pune | Luxury Celebration Styling",
  description:
    "Premium private party theme decoration services in Pune including balloon decor, customized backdrops, floral styling and complete venue transformation by EventSamaroh.",
};

export default function PrivateThemeDecorPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/private-parties/hero.webp"
          alt="Private Party Theme Decoration in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Private Party Theme & Decor in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Elegant and customized private party decorations designed
            to transform venues into stunning celebration spaces.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Decor Consultation
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Private Party Decoration Services in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh provides luxury private party theme decoration
            services in Pune for anniversaries, milestone birthdays,
            cocktail nights and house parties.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From concept design to final execution, we handle backdrop styling,
            balloon installations, floral decor and complete venue transformation
            tailored to your celebration style.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our Decor Services Include
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Customized Themes
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Personalized decor concepts tailored to your event vision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Backdrops & Installations
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Statement backdrops, balloon arches and creative installations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Floral & Lighting Styling
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Premium floral arrangements and ambient lighting setups.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Private Party Decor FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you provide custom party themes?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we create fully customized decor themes
                based on your preferences and celebration style.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can decor be set up at home venues?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We specialize in house party decor setups
                and compact venue transformations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you handle lighting and props?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we provide decorative lighting,
                props and complete styling solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How early should decor be finalized?
              </h3>
              <p className="mt-2 text-brand-muted">
                We recommend finalizing decor concepts
                2–4 weeks before the event date.
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

            <Link href="/services/private-parties/catering-entertainment" className="hover:underline">
              Catering & Entertainment
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
          alt="Private Party Theme Decoration Services in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Transform Your Celebration with Premium Decor
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Decor Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}