import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Palette,
  Lightbulb,
  Flower,
  Building,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Event Decor & Design Services in Pune | EventSamaroh",
  description:
    "Premium event decor services in Pune including custom installations, floral styling, lighting design, stage mandap setups and theme concepts.",
};

export default function DecorPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/decor/hero.webp"
          alt="Event Decor and Design Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
            Event Decor & Design Services in Pune
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Transforming venues into premium visual experiences with custom installations,
            floral styling, lighting design and elegant stage setups.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Your Event Decor
          </Link>
        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/decor/gallery-1.webp"
              alt="Luxury Stage Mandap Decoration in Pune"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/decor/gallery-2.webp"
              alt="Floral Styling and Lighting Decor Setup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Complete Event Decor Solutions in Pune
          </h2>

          <p className="mt-6 text-brand-muted max-w-2xl mx-auto">
            We provide customized decor concepts and professional execution
            tailored to weddings, corporate events and private celebrations.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {[
              { icon: Sparkles, title: "Custom Installations", slug: "custom-installations" },
              { icon: Flower, title: "Floral Styling", slug: "floral-styling" },
              { icon: Lightbulb, title: "Lighting Design", slug: "lighting-design" },
              { icon: Palette, title: "Theme Concepts", slug: "theme-concepts" },
              { icon: Building, title: "Stage & Mandap Setup", slug: "stage-mandap" },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/services/decor-design/${item.slug}`}
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


      {/* ================= AUTHORITY ================= */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Why Choose EventSamaroh for Event Decor in Pune?
          </h2>
          <p className="mt-8 text-brand-muted leading-relaxed">
            Our decor specialists combine creativity with structured planning
            to deliver visually stunning and professionally executed event environments.
          </p>
        </div>
      </section>


      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/services/decor/hero.webp"
          alt="Book Event Decor Consultation in Pune"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/90" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading">
            Elevate Your Event with Premium Decor
          </h2>
          <p className="mt-6 text-white/85">
            Speak with our decor specialists in Pune and transform your venue
            into a breathtaking experience.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block px-8 py-3 bg-brand-accent rounded-full hover:scale-105 transition"
          >
            Book a Decor Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}