import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Product Launch Event Management in Pune | Corporate Launch Planners",
  description:
    "Professional product launch event management services in Pune including brand launch events, media events, stage production, corporate branding and complete execution by EventSamaroh.",
};

export default function ProductLaunchPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center text-white">

        <Image
          src="/images/services/corporate/hero.webp"
          alt="Product Launch Event Management in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Product Launch Event Management in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Impactful product launch events designed to create buzz,
            attract media attention and elevate your brand presence.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Plan Product Launch
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading text-brand-primary">
            Professional Product Launch Organizers in Pune
          </h2>

          <p className="mt-8 text-brand-muted leading-relaxed">
            EventSamaroh specializes in corporate product launch event
            management in Pune for startups, established brands and
            multinational companies looking to create impactful market entry.
          </p>

          <p className="mt-6 text-brand-muted leading-relaxed">
            From concept development and venue selection to stage design,
            AV production, branding installations and guest management,
            we execute product launch events that generate strong brand visibility.
          </p>

        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Our Product Launch Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Brand-Centric Stage Design
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Custom stage backdrops, LED walls and immersive launch experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Media & Influencer Coordination
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Managing press invites, media coverage and guest registrations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <CheckCircle className="w-10 h-10 text-brand-accent mx-auto" />
              <h3 className="mt-6 font-semibold text-brand-primary">
                Complete Event Production
              </h3>
              <p className="mt-4 text-sm text-brand-muted">
                Sound, lighting, visual effects and seamless on-ground execution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-heading text-brand-primary text-center">
            Product Launch Event FAQs
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                How do you ensure a successful product launch?
              </h3>
              <p className="mt-2 text-brand-muted">
                We combine strategic planning, impactful branding,
                targeted guest invites and professional execution
                to maximize visibility and engagement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you manage corporate branding during launch events?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we create customized branding installations,
                product displays and promotional backdrops.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Can you manage high-profile guests and media?
              </h3>
              <p className="mt-2 text-brand-muted">
                We coordinate guest lists, media registration,
                influencer invites and VIP hospitality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Is product launch suitable for small startups?
              </h3>
              <p className="mt-2 text-brand-muted">
                Yes, we design scalable launch events suitable
                for startups as well as established enterprises.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-heading text-brand-primary">
            Explore More Corporate Services
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-brand-accent">

            <Link href="/services/corporate-events/conferences" className="hover:underline">
              Corporate Conferences
            </Link>

            <Link href="/services/corporate-events/annual-meetings" className="hover:underline">
              Annual Meetings
            </Link>

            <Link href="/services/corporate-events/stage-av" className="hover:underline">
              Stage & AV Setup
            </Link>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <Image
          src="/images/services/corporate/hero.webp"
          alt="Product Launch Event Planning in Pune"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Launch Your Product with Impact
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
          >
            Schedule Launch Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}