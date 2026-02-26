import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Camera,
  Sparkles,
  Building,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Private Party Organizers in Pune | EventSamaroh",
  description:
    "Premium private party organizers in Pune for catering, photography, décor styling, venue booking and complete event coordination.",
};

export default function PrivatePartyPage() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/private-parties/hero.webp"
          alt="Private Party Organizers in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
            Private Party Organizers in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Elegant and professionally managed private celebrations with
            décor styling, catering, entertainment and seamless coordination.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Your Private Party
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/images/services/private-parties/gallery-1.webp"
              alt="Luxury House Party Setup in Pune"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/images/services/private-parties/gallery-2.webp"
              alt="Cocktail Night Event Setup"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Private Party Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              {
                icon: Music,
                title: "Catering & Entertainment",
                href: "/services/private-parties/catering-entertainment",
              },
              {
                icon: Camera,
                title: "Photography",
                href: "/services/private-parties/photography",
              },
              {
                icon: Sparkles,
                title: "Theme & Décor",
                href: "/services/private-parties/theme-decor",
              },
              {
                icon: Building,
                title: "Venue Booking",
                href: "/services/private-parties/venue-booking",
              },
              {
                icon: CheckCircle,
                title: "On-site Management",
                href: "/services/private-parties/on-site-management",
              },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto" />
                  <h3 className="mt-6 text-lg font-semibold text-brand-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* AUTHORITY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Why Choose EventSamaroh for Private Parties?
          </h2>
          <p className="mt-8 text-brand-muted leading-relaxed">
            We deliver structured private party planning in Pune with creative
            décor styling, curated entertainment, professional catering
            coordination and complete on-site supervision.
          </p>
        </div>
      </section>

    </main>
  );
}