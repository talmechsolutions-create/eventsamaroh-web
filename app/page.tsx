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
    "EventSamaroh is a premium event management company in Pune specializing in luxury weddings, corporate events, birthday celebrations, private parties and decor design services across all major Pune locations.",
  keywords: [
    "event management company in Pune",
    "wedding planners in Pune",
    "corporate event management Pune",
    "birthday party planners Pune",
    "luxury wedding planners Pune",
    "event decor services Pune",
    "event planning in Hinjewadi",
    "event planning in Baner",
    "event planning in Wakad",
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
            Luxury Event Planning Services Across Pune
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

          {/* ✅ UPDATED BUTTON SECTION */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">

            <Link
              href="/book-event"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#b08d57] to-[#d4af37] text-black font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Book Your Event
            </Link>

            <Link
              href="/services"
              className="px-10 py-4 rounded-full border border-white/60 text-white font-semibold backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition duration-300"
            >
              Explore Services
            </Link>

          </div>

          <div className="mt-10 text-sm text-gray-300">
            ✔ 300+ Events Executed &nbsp; | &nbsp;
            ✔ GST Registered Business &nbsp; | &nbsp;
            ✔ Dedicated On-Site Team
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
            Complete Event Planning Services in Pune
          </h2>

          <p className="mt-6 text-brand-muted max-w-2xl mx-auto leading-relaxed">
            We combine creative design with structured execution, ensuring
            seamless event management for weddings, corporate events, and
            private celebrations across Pune.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">

            <ServiceCard
              href="/services/wedding-planning"
              image="/images/services/wedding.webp"
              alt="Luxury Wedding Planning in Pune"
              title="Luxury Wedding Planning"
              description="End-to-end wedding planning including venue selection, decor design and coordination."
            />

            <ServiceCard
              href="/services/corporate-events"
              image="/images/services/corporate.webp"
              alt="Corporate Event Management Pune"
              title="Corporate Events"
              description="Strategic conferences, product launches, annual meets and executive gatherings."
            />

            <ServiceCard
              href="/services/private-parties"
              image="/images/services/private.webp"
              alt="Private Party Planning Pune"
              title="Private Celebrations"
              description="Curated birthday parties, milestone events and exclusive private gatherings."
            />

            <ServiceCard
              href="/services/decor-design"
              image="/images/services/decor.webp"
              alt="Event Decor and Design Pune"
              title="Decor & Design"
              description="Premium floral styling, stage design, lighting concepts and thematic installations."
            />
          </div>
        </div>
      </section>

      {/* Remaining code unchanged */}
    </main>
  );
}

/* ================= COMPONENTS ================= */

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

function TrustItem({ text }: { text: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <p className="text-brand-primary font-medium">
        ✔ {text}
      </p>
    </div>
  );
}

function LocationLink({ name }: { name: string }) {
  return (
    <Link
      href={`/locations/${name.toLowerCase().replace(" ", "-")}`}
      className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition"
    >
      {name}
    </Link>
  );
}