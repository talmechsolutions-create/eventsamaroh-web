import Image from "next/image";
import Link from "next/link";
import { Cake, Sparkles, Gift, Music, Palette, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Birthday Party Planners in Pune | EventSamaroh",
  description:
    "Professional birthday party planners in Pune offering kids theme decoration, catering, entertainment, photography and complete event coordination.",
};

export default function BirthdayPage() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Party Planning Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
            Birthday Party Planners in Pune
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Creative and professionally managed birthday celebrations with themed decor,
            catering coordination, entertainment and flawless execution.
          </p>
          <Link href="/contact" className="inline-block mt-10 px-8 py-3 bg-brand-accent rounded-full hover:scale-105 transition">
            Plan Your Birthday Celebration
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/services/birthday/gallery-1.webp" alt="Kids Birthday Theme Decoration Pune" fill className="object-cover" />
          </div>
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/services/birthday/gallery-2.webp" alt="Birthday Party Event Setup Pune" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-brand-soft text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Complete Birthday Party Services in Pune
          </h2>
          <p className="mt-6 text-brand-muted max-w-2xl mx-auto">
            From kids theme planning to catering and photography, we manage every element
            to ensure a joyful and stress-free celebration.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              { icon: Cake, title: "Kids Theme Planning", slug: "kids-party-planning" },
              { icon: Palette, title: "Theme Decoration Setup", slug: "theme-decoration" },
              { icon: Gift, title: "Catering & Cake Arrangement", slug: "catering-entertainment" },
              { icon: Music, title: "Entertainment & Activities", slug: "photography" },
              { icon: Sparkles, title: "Venue Decoration", slug: "venue-booking" },
              { icon: CheckCircle, title: "On-site Event Management", slug: "on-site-management" },
            ].map((item, index) => (
              <Link key={index} href={`/services/birthday-parties/${item.slug}`}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto" />
                  <h3 className="mt-6 font-semibold text-brand-primary">{item.title}</h3>
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
            Why Choose EventSamaroh for Birthday Parties?
          </h2>
          <p className="mt-8 text-brand-muted">
            We deliver premium birthday event planning in Pune with creative themes,
            professional vendors and structured coordination.
          </p>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/services/birthday/gallery-2.webp" alt="Book Birthday Party Planner Pune" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading">Let’s Plan a Memorable Birthday</h2>
          <p className="mt-6 text-white/85">
            Connect with our birthday planners in Pune to design a joyful celebration.
          </p>
          <Link href="/contact" className="mt-10 inline-block px-8 py-3 bg-brand-accent rounded-full">
            Book a Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}