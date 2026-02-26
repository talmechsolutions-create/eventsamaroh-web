import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestimonialsPreview from "./TestimonialsPreview";
import LeadForm from "../components/LeadForm";
import BrandButton from "@/components/BrandButton";

export const metadata: Metadata = {
  title:
    "EventSamaroh | Best Event Management Company in Pune for Weddings & Corporate Events",
  description:
    "EventSamaroh is a premium event management company in Pune specializing in luxury weddings, corporate events, birthday celebrations, private parties and decor design services.",
  keywords: [
    "event management company in Pune",
    "wedding planners in Pune",
    "corporate event management Pune",
    "birthday party planners Pune",
    "luxury wedding planners Pune",
    "event decor services Pune",
  ],
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-0">

        <Image
          src="/images/hero/hero-main.webp"
          alt="Premium Event Management Company in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white py-20 sm:py-0">

          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-brand-accent mb-6">
            Luxury Event Planning in Pune
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight">
            Pune’s Premier
            <span className="block text-brand-accent mt-3">
              Event Management Company
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200 leading-relaxed">
            From luxury weddings and corporate conferences to milestone birthdays
            and private celebrations — EventSamaroh delivers precision planning,
            premium decor, and flawless execution across Pune.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <BrandButton href="/book-event">
              Book Your Event
            </BrandButton>

            <BrandButton href="/services" variant="outline">
              Explore Services
            </BrandButton>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-brand-soft py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-xs text-brand-accent font-medium mb-4">
            Our Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-primary">
            Signature Event Services in Pune
          </h2>

          <p className="mt-6 text-brand-muted max-w-2xl mx-auto leading-relaxed">
            We design and manage high-impact events that blend creativity,
            logistics precision and elevated guest experiences.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">

            <ServiceCard
              href="/services/wedding-planning"
              image="/images/services/wedding.webp"
              alt="Luxury Wedding Planning in Pune"
              title="Luxury Wedding Planning"
              description="End-to-end wedding planning, venue selection, decor styling and coordination."
            />

            <ServiceCard
              href="/services/corporate-events"
              image="/images/services/corporate.webp"
              alt="Corporate Event Management Pune"
              title="Corporate Events"
              description="Strategic corporate conferences, product launches and executive events."
            />

            <ServiceCard
              href="/services/birthday-parties"
              image="/images/services/birthday.webp"
              alt="Birthday Party Planning in Pune"
              title="Birthday Celebrations"
              description="Creative themed birthdays with decor, entertainment and full coordination."
            />

            <ServiceCard
              href="/services/private-parties"
              image="/images/services/private.webp"
              alt="Private Party Planning Pune"
              title="Private Parties"
              description="Exclusive social gatherings curated with style and seamless hospitality."
            />

            <ServiceCard
              href="/services/decor-design"
              image="/images/services/decor.webp"
              alt="Event Decor and Design Pune"
              title="Decor & Design"
              description="Floral artistry, stage design, lighting concepts and premium installations."
            />
          </div>
        </div>
      </section>

      {/* ================= TRUST SIGNALS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-heading text-brand-primary">
            Why EventSamaroh?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16 text-left">

            <TrustItem text="Premium venue partnerships across Pune" />
            <TrustItem text="Structured event planning methodology" />
            <TrustItem text="Dedicated on-site coordination team" />
            <TrustItem text="Transparent budgeting & vendor management" />

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-brand-soft py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <TestimonialsPreview />
        </div>
      </section>

      {/* ================= LEAD FORM ================= */}
      <section className="bg-white py-24 border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-brand-primary">
            Book a Free Event Consultation in Pune
          </h2>

          <p className="mt-6 text-brand-muted">
            Let’s discuss your event vision and craft a customized execution plan.
          </p>

          <div className="mt-12">
            <LeadForm />
          </div>

          <p className="mt-6 text-sm text-brand-muted">
            ✔ 24-hour response <br />
            ✔ Customized proposal <br />
            ✔ Premium execution strategy
          </p>

        </div>
      </section>

    </main>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({
  href,
  image,
  alt,
  title,
  description,
}: {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="group block">

      <article className="transition duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer">

        <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width:1024px) 33vw, 100vw"
            className="object-cover group-hover:scale-110 transition duration-700 ease-out"
          />
        </div>

        <div className="mt-8 text-left">
          <h3 className="text-xl font-heading font-medium text-brand-primary group-hover:text-brand-accent transition">
            {title}
          </h3>

          <p className="mt-3 text-brand-muted leading-relaxed text-sm">
            {description}
          </p>
        </div>

      </article>
    </Link>
  );
}

/* ================= TRUST ITEM ================= */

function TrustItem({ text }: { text: string }) {
  return (
    <div className="bg-brand-soft p-6 rounded-2xl shadow-md">
      <p className="text-brand-primary font-medium">
        ✔ {text}
      </p>
    </div>
  );
}