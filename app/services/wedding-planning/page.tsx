import Image from "next/image";
import Link from "next/link";
import { Sparkles, Camera, Utensils, CheckCircle, Home, Users } from "lucide-react";

export const metadata = {
  title: "Luxury Wedding Planners in Pune | EventSamaroh",
  description:
    "Premium wedding planning services in Pune including venue booking, decor styling, catering coordination, photography, guest hospitality and complete end-to-end execution by EventSamaroh.",
};

export default function WeddingPlanningPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/wedding/hero.webp"
          alt="Luxury Wedding Planning Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Luxury Wedding Planners in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Elegant, seamless and stress-free wedding planning with premium decor,
            trusted venue partnerships, and flawless end-to-end execution.
          </p>

          <Link
            href="/book-event"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Plan Your Wedding
          </Link>
        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/images/services/wedding/gallery-1.webp"
              alt="Luxury Wedding Stage Decor in Pune"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition duration-700 ease-out"
            />
          </div>

          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/images/services/wedding/gallery-2.webp"
              alt="Elegant Wedding Ceremony Setup"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition duration-700 ease-out"
            />
          </div>

        </div>
      </section>


      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Complete Wedding Planning Services
          </h2>

          <p className="mt-6 text-brand-muted max-w-2xl mx-auto">
            We manage every element of your wedding celebration,
            ensuring precision, creativity and unforgettable experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {[
              { icon: Sparkles, title: "Theme & Decor Planning", slug: "decor-mandap" },
              { icon: Camera, title: "Photography & Videography", slug: "photography" },
              { icon: Utensils, title: "Catering & Menu Planning", slug: "catering" },
              { icon: CheckCircle, title: "On-site Coordination", slug: "coordination" },
              { icon: Home, title: "Venue Booking Assistance", slug: "venue-selection" },
              { icon: Users, title: "Guest Hospitality Management", slug: "artists" },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/services/wedding-planning/${item.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto group-hover:scale-110 transition" />

                  <h3 className="mt-6 text-lg font-semibold text-brand-primary">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* ================= AUTHORITY SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Why Choose EventSamaroh for Weddings?
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            With years of experience delivering luxury weddings in Pune,
            EventSamaroh ensures structured planning, premium vendor partnerships,
            transparent budgeting, and flawless on-ground execution.
          </p>

          <div className="mt-12 space-y-4 text-left max-w-2xl mx-auto text-brand-primary">
            <p>✔ Dedicated wedding planning team</p>
            <p>✔ Premium venue & decor partnerships</p>
            <p>✔ Structured timelines & milestone tracking</p>
            <p>✔ Complete vendor coordination & supervision</p>
          </div>

        </div>
      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 overflow-hidden">

  {/* Background Image */}
  <Image
    src="/images/services/wedding/gallery-2.webp"
    alt="Luxury Wedding Consultation Background"
    fill
    className="object-cover"
  />

  {/* Dark Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

  {/* Decorative Gold Blur Effect */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold leading-tight">
      Let’s Design Your Dream Wedding
    </h2>

    <p className="mt-6 text-white/85 text-lg leading-relaxed">
      Connect with our expert wedding planners in Pune and begin crafting
      an elegant, stress-free and unforgettable celebration tailored
      perfectly to your vision.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">

      <Link
        href="/contact"
        className="px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition-all duration-300 shadow-xl"
      >
        Book a Consultation
      </Link>

      <Link
        href="/services"
        className="px-8 py-3 border border-white/40 rounded-full hover:bg-white/10 transition-all duration-300"
      >
        Explore Our Services
      </Link>

    </div>

  </div>
</section>
    </main>
  );
}