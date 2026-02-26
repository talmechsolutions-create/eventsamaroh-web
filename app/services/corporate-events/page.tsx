import Image from "next/image";
import Link from "next/link";
import {
  Presentation,
  Sparkles,
  Users,
  Mic,
  CheckCircle,
  Building,
} from "lucide-react";

export const metadata = {
  title: "Corporate Event Management in Pune | EventSamaroh",
  description:
    "Professional corporate event management in Pune for conferences, product launches, annual meetings, networking events and complete business event execution.",
};

export default function CorporatePage() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/corporate/hero.webp"
          alt="Corporate Event Management Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
            Corporate Event Management in Pune
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Structured, high-impact corporate events with professional planning,
            premium production and flawless execution.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Your Corporate Event
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/services/corporate/gallery-1.webp" alt="Corporate Conference Setup Pune" fill className="object-cover" />
          </div>
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/services/corporate/gallery-2.webp" alt="Business Networking Event Pune" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Corporate Event Services in Pune
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              { icon: Presentation, title: "Corporate Conferences", slug: "conferences" },
              { icon: Sparkles, title: "Product Launch Events", slug: "product-launch" },
              { icon: Users, title: "Annual Meetings & Seminars", slug: "annual-meetings" },
              { icon: Mic, title: "Stage & AV Setup", slug: "stage-av" },
              { icon: CheckCircle, title: "On-site Event Coordination", slug: "on-site-management" },
              { icon: Building, title: "Venue Booking Assistance", slug: "venue-booking" },
            ].map((item, index) => (
              <Link key={index} href={`/services/corporate-events/${item.slug}`}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto" />
                  <h3 className="mt-6 text-lg font-semibold text-brand-primary">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Why Choose EventSamaroh for Corporate Events?
          </h2>
          <p className="mt-8 text-brand-muted">
            We deliver structured corporate event planning in Pune with technical precision,
            strategic brand execution and seamless on-ground management.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/services/corporate/gallery-2.webp" alt="Corporate Event Consultation Pune" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading">Plan Your Next Corporate Event</h2>
          <p className="mt-6 text-white/85">
            Connect with our professional corporate event planners in Pune.
          </p>
          <Link href="/contact" className="mt-10 inline-block px-8 py-3 bg-brand-accent rounded-full">
            Get a Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}