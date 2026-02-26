import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Birthday Party Photography in Pune | Kids Event Photographers",
  description:
    "Professional birthday party photography services in Pune including candid kids photography, event coverage, videography and memory albums by EventSamaroh.",
};

export default function BirthdayPhotographyPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Party Photography in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Birthday Party Photography in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Capture joyful moments, candid smiles and unforgettable
            birthday memories with professional photography coverage.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Birthday Photographer
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Birthday Photographers in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh offers premium birthday party photography services in Pune,
            including candid kids photography, themed photoshoots,
            event coverage and professional videography.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            Our experienced photographers specialize in capturing
            spontaneous moments, group memories and beautifully styled
            birthday setups that reflect your celebration theme.
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
                Candid Kids Photography
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Natural and joyful captures of kids enjoying their special day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Event Videography
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                High-quality video coverage capturing key birthday highlights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Memory Albums & Edits
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Professionally edited photos and curated digital albums.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Birthday Photography FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                Do you offer candid birthday photography?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we specialize in candid photography capturing
                genuine emotions and natural moments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can I book both photography and videography?
              </h3>
              <p className="mt-2 text-brand-muted">
                Absolutely. We provide complete birthday event
                photography and videography packages.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How long does it take to receive edited photos?
              </h3>
              <p className="mt-2 text-brand-muted">
                Edited images and albums are typically delivered
                within 7–10 working days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you cover outdoor birthday parties?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we provide coverage for indoor venues,
                outdoor lawns and home birthday celebrations.
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
          alt="Birthday Photography Services in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Capture Every Magical Birthday Moment
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Book Photography Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}