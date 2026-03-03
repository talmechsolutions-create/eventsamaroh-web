import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import TestimonialsPreview from "./TestimonialsPreview"
import LeadForm from "../components/LeadForm"

export const metadata: Metadata = {
  title:
    "Event Management Company in Pune | Wedding, Corporate & Birthday Planner | EventSamaroh",

  description:
    "EventSamaroh is a leading event management company in Pune with 20+ years of expertise in luxury wedding planning, corporate events, birthday parties and decor services across Baner, Wakad, Hinjewadi, Kharadi and all major Pune locations.",

  keywords: [
    "event management company in Pune",
    "wedding planner in Pune",
    "corporate event management Pune",
    "birthday party planner Pune",
    "luxury event planner Pune",
    "event decorators in Pune",
    "event management services Pune"
  ],

  alternates: {
    canonical: "https://eventsamaroh.in",
  },

  openGraph: {
    title: "Event Management Company in Pune | EventSamaroh",
    description:
      "Luxury wedding planning, corporate events and birthday party management services across Pune.",
    url: "https://eventsamaroh.in",
    siteName: "EventSamaroh",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Event Management Company in Pune | EventSamaroh",
    description:
      "Premium event planning services in Pune with structured execution and decor excellence.",
  },
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-0">
        <Image
          src="/images/hero/hero-main.webp"
          alt="Luxury Event Management Company in Pune"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white py-20">
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-brand-accent mb-6">
            Luxury Event Planning in Pune
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
  Event Management Company in Pune
  <span className="block text-brand-accent mt-3">
    Luxury Weddings, Corporate & Private Events
  </span>
</h1>

          <p className="mt-10 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200 leading-relaxed">
            Structured planning, refined decor execution and disciplined coordination for weddings,
            corporate events and private celebrations across Pune.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-event"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#b08d57] to-[#d4af37] text-black font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 rounded-full border border-white/60 text-white font-semibold backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition duration-300"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-300">
            ✔ 20+ Years Experience &nbsp; | &nbsp;
            ✔ GST Registered &nbsp; | &nbsp;
            ✔ Dedicated On-Site Team
          </div>
        </div>
      </section>
<section className="bg-white py-14 border-b border-black/5">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      <div>
        <h3 className="text-3xl font-heading text-brand-primary">500+</h3>
        <p className="text-sm text-brand-muted mt-2">
          Events Successfully Executed in Pune
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-heading text-brand-primary">20+</h3>
        <p className="text-sm text-brand-muted mt-2">
          Years of Event Management Experience
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-heading text-brand-primary">100+</h3>
        <p className="text-sm text-brand-muted mt-2">
          Premium Venue & Vendor Partnerships
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-heading text-brand-primary">98%</h3>
        <p className="text-sm text-brand-muted mt-2">
          Client Satisfaction & Repeat Bookings
        </p>
      </div>

    </div>
  </div>
</section>
      {/* ================= SERVICES ================= */}
      <section className="relative py-32 overflow-hidden">

  {/* Luxury Background Layer */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#f9f6f1] via-[#f3eee6] to-[#f9f6f1]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(176,141,87,0.08),transparent_60%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.06),transparent_60%)]" />

  <div className="relative max-w-7xl mx-auto px-8 text-center">

    <h2 className="text-4xl sm:text-5xl font-heading text-brand-primary">
      Complete Event Planning Services in Pune
    </h2>

    <div className="w-20 h-[3px] bg-gradient-to-r from-[#b08d57] to-[#d4af37] mx-auto mt-6 rounded-full" />

    <p className="mt-8 text-brand-muted max-w-3xl mx-auto text-lg leading-relaxed">
      Structured and premium event management solutions for luxury weddings,
      corporate conferences, private celebrations and professional decor design
      services across Baner, Wakad, Hinjewadi, Kharadi and all major Pune locations.
    </p>

    {/* Balanced Professional Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 mt-20">

      <PremiumServiceCard
        href="/services/wedding-planning"
        image="/images/services/wedding.webp"
        title="Luxury Wedding Planning"
        description="Venue selection, wedding decor styling, hospitality management and flawless multi-day wedding coordination across Pune."
      />

      <PremiumServiceCard
        href="/services/corporate-events"
        image="/images/services/corporate.webp"
        title="Corporate Events"
        description="Conferences, annual meetings, product launches and leadership summits with structured planning and technical supervision."
      />

      <PremiumServiceCard
        href="/services/decor-design"
        image="/images/services/decor.webp"
        title="Decor & Design"
        description="Luxury floral styling, custom installations, stage production, lighting architecture and thematic decor concepts."
      />

      <PremiumServiceCard
        href="/services/birthday-parties"
        image="/images/services/birthday.webp"
        title="Birthday Celebrations"
        description="Theme-based birthday party planning, kids decor setups, entertainment coordination and complete on-site execution."
      />

      <PremiumServiceCard
        href="/services/private-parties"
        image="/images/services/private.webp"
        title="Private Celebrations"
        description="Anniversaries, cocktail evenings, house parties and curated social gatherings executed with precision."
      />

    </div>

  </div>
</section>
{/* ================= LOCATIONS ================= */}
<section className="bg-white py-24 border-t border-black/5">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-heading text-brand-primary">
      Serving All Major Areas in Pune
    </h2>
    <p className="mt-6 text-brand-muted max-w-3xl mx-auto leading-relaxed">
  We provide structured event planning services across Baner, Wakad, Hinjewadi,
  Kharadi, Aundh, Viman Nagar, Koregaon Park, Magarpatta and all major
  residential and commercial zones in Pune. Our familiarity with premium
  banquet halls, luxury lawns, business hotels and corporate venues ensures
  seamless vendor coordination and on-time execution.
</p>
  </div>
</section>

{/* ================= WHO WE ARE ================= */}
<section className="bg-[#f9f6f1] py-32">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl sm:text-5xl font-heading text-brand-primary">
      About EventSamaroh – 20 Years of Event Excellence in Pune
    </h2>

    {/* Soft Divider */}
    <div className="w-20 h-[3px] bg-gradient-to-r from-[#b08d57] to-[#d4af37] mx-auto mt-6 rounded-full" />

    {/* Content Card */}
    <div className="mt-16 bg-white/60 backdrop-blur-sm border border-black/5 rounded-3xl p-12 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

      <div className="text-brand-muted leading-relaxed text-lg max-w-4xl mx-auto space-y-10 text-left">

        <p>
          EventSamaroh is a trusted{" "}
          <Link href="/services/wedding-planning" className="text-brand-accent underline hover:text-[#b08d57] transition">
            wedding planner in Pune
          </Link>{" "}
          and professional{" "}
          <Link href="/services/corporate-events" className="text-brand-accent underline hover:text-[#b08d57] transition">
            corporate event management company
          </Link>{" "}
          with over 20 years of experience.

          We specialize in{" "}
          <Link href="/services/wedding-planning" className="text-brand-accent underline hover:text-[#b08d57] transition">
            luxury wedding planning
          </Link>,{" "}
          <Link href="/services/corporate-events" className="text-brand-accent underline hover:text-[#b08d57] transition">
            corporate events
          </Link>,{" "}
          <Link href="/services/decor-design" className="text-brand-accent underline hover:text-[#b08d57] transition">
            decor & design services
          </Link>,{" "}
          <Link href="/services/birthday-parties" className="text-brand-accent underline hover:text-[#b08d57] transition">
            birthday party planning
          </Link>{" "}
          and{" "}
          <Link href="/services/private-parties" className="text-brand-accent underline hover:text-[#b08d57] transition">
            private celebrations
          </Link>{" "}
          across Pune.
        </p>

        <p>
          Our strength lies in structured event execution. From consultation
          to vendor coordination, venue management and hospitality planning,
          every stage is handled with operational discipline. This systematic
          model ensures clarity in budgeting, accountability in vendor
          management and flawless execution.
        </p>

        <p>
          Over two decades, we have built strong relationships with premium
          venues and trusted service partners across Baner, Hinjewadi,
          Kharadi, Wakad, Viman Nagar and Koregaon Park. Our local expertise
          ensures predictable logistics and refined aesthetic execution.
        </p>

        <p>
          Clients choose EventSamaroh not just for creativity, but for
          reliability. Our dedicated on-site team ensures timelines are
          respected, logistics are controlled and every guest experience
          is professionally managed.
        </p>

      </div>
    </div>

  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="bg-white py-32 border-t border-black/5">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-heading text-brand-primary">
      Our Structured Event Planning Process
    </h2>

    <div className="mt-16 grid md:grid-cols-2 gap-16 text-left text-lg text-brand-muted leading-relaxed">
      <div>
        <h3 className="font-heading text-xl text-brand-primary mb-4">
          1. Consultation & Vision Alignment
        </h3>
        <p>
          Clients schedule a consultation where we understand event objectives,
          budget parameters, guest count and thematic preferences.
          This foundation ensures strategic clarity before planning begins.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-xl text-brand-primary mb-4">
          2. Planning & Vendor Coordination
        </h3>
        <p>
          We curate venues, negotiate vendors, finalize contracts and structure timelines.
          Transparent budgeting ensures complete visibility and cost control.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-xl text-brand-primary mb-4">
          3. Creative Design & Execution
        </h3>
        <p>
          From wedding decor styling to corporate stage production and themed private events,
          every detail is executed with aesthetic precision and technical discipline.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-xl text-brand-primary mb-4">
          4. On-Site Supervision & Closure
        </h3>
        <p>
          During the event, our coordination team manages vendor timing,
          guest hospitality and execution checkpoints, ensuring a seamless experience.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ================= FAQ ================= */}
<section className="relative py-32 overflow-hidden">

  {/* Premium Background Layers */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#f9f6f1] via-white to-[#f3eee6]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(176,141,87,0.07),transparent_60%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.05),transparent_60%)]" />

  <div className="relative max-w-5xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl sm:text-5xl font-heading text-brand-primary tracking-tight">
        Frequently Asked Questions – Event Planning in Pune
      </h2>
      <div className="w-20 h-[3px] bg-gradient-to-r from-[#b08d57] to-[#d4af37] mx-auto mt-6 rounded-full" />
      <p className="mt-6 text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
        Clear answers to common questions about our structured event management services in Pune.
      </p>
    </div>

    {/* Accordion */}
    <div className="space-y-6">

      {[
        {
          question: "How much does an event management company in Pune cost?",
          answer:
            "Costs vary depending on venue selection, decor scale, guest size and vendor requirements. We provide structured and transparent quotations after consultation.",
        },
        {
          question: "Do you handle corporate conferences and product launches?",
          answer:
            "Yes. We specialize in corporate event management in Pune including conferences, annual meetings, leadership summits and product launches.",
        },
        {
          question: "Do you provide decor and vendor management?",
          answer:
            "Absolutely. Our decor and design services include floral styling, lighting concepts, stage installations and complete vendor coordination.",
        },
        {
          question: "Do you manage destination weddings?",
          answer:
            "Yes, we coordinate destination weddings and outstation events with structured logistics and hospitality management.",
        },
        {
          question: "How early should we book an event planner in Pune?",
          answer:
            "We recommend booking 3–6 months in advance for premium venue and vendor availability.",
        },
      ].map((faq, index) => (
        <details
          key={index}
          className="group bg-white rounded-2xl border border-black/5 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <summary className="flex justify-between items-center cursor-pointer px-8 py-6 font-heading text-lg text-brand-primary list-none">
            <span className="text-left">{faq.question}</span>

            <span className="ml-6 text-brand-accent text-2xl transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-8 pb-6">
            <div className="h-px bg-gradient-to-r from-[#b08d57]/30 via-transparent to-[#d4af37]/30 mb-6" />
            <p className="text-brand-muted leading-relaxed text-base">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}

    </div>
  </div>
</section>

{/* ================= FAQ SCHEMA ================= */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does an event management company in Pune cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Costs vary depending on venue selection, decor scale, guest size and vendor requirements. We provide structured and transparent quotations after consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle corporate conferences and product launches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in corporate event management in Pune including conferences, annual meetings, leadership summits and product launches."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide decor and vendor management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our decor and design services include floral styling, lighting concepts, stage installations and complete vendor coordination."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage destination weddings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we coordinate destination weddings and outstation events with structured logistics and hospitality management."
            }
          },
          {
            "@type": "Question",
            "name": "How early should we book an event planner in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend booking 3–6 months in advance for premium venue and vendor availability."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "EventSamaroh",
        "image": "https://eventsamaroh.in/og-image.jpg",
        "url": "https://eventsamaroh.in",
        "telephone": "+91-XXXXXXXXXX",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "MH",
          "addressCountry": "IN"
        },
        "areaServed": "Pune",
        "sameAs": [
          "https://instagram.com/yourprofile",
          "https://facebook.com/yourpage"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "EventSamaroh",
        "url": "https://eventsamaroh.in",
        "logo": "https://eventsamaroh.in/logo-watermark.png",
        "sameAs": [
          "https://instagram.com/yourprofile",
          "https://facebook.com/yourpage"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://eventsamaroh.in/"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Event Management Services in Pune",
        "provider": {
          "@type": "LocalBusiness",
          "name": "EventSamaroh"
        },
        "areaServed": "Pune, Maharashtra",
        "serviceType": [
          "Wedding Planning",
          "Corporate Event Management",
          "Birthday Party Planning",
          "Private Event Planning",
          "Event Decor & Design"
        ]
      }
    ])
  }}
/>
  

    {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <TestimonialsPreview />
        </div>
      </section>
{/* ================= LIMITED BOOKINGS ================= */}
<section className="bg-[#f3eee6] py-20 border-t border-black/5">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-heading text-brand-primary">
      We Accept Limited Events Per Month
    </h2>

    <p className="mt-6 text-lg text-brand-muted leading-relaxed">
      To maintain premium quality standards and structured execution,
      EventSamaroh accepts a limited number of weddings and corporate
      events each month in Pune. Early consultation ensures better
      venue availability and preferred vendor selection.
    </p>

    <div className="mt-10">
      <Link
        href="/book-event"
        className="px-10 py-4 rounded-full bg-gradient-to-r from-[#b08d57] to-[#d4af37] text-black font-semibold shadow-lg hover:scale-105 transition duration-300"
      >
        Reserve Your Consultation Slot
      </Link>
    </div>
  </div>
</section>
      
      {/* ================= FINAL CONVERSION ================= */}
<section className="bg-brand-soft py-28 border-t border-black/5">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl sm:text-5xl font-heading font-semibold text-brand-primary">
      Plan Your Event With Confidence
    </h2>

    <p className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
      Whether you are planning a luxury wedding, a corporate conference
      or a private celebration in Pune, our senior planning team will
      provide a structured consultation and transparent proposal tailored
      to your event goals.
    </p>

    <div className="mt-16 bg-white rounded-3xl shadow-xl p-10 border border-black/5">
      <LeadForm />
    </div>

    <p className="mt-6 text-sm text-brand-muted">
      ✔ 24-Hour Response &nbsp; ✔ Transparent Budgeting &nbsp; ✔ Professional On-Site Execution
    </p>

  </div>
</section>

    </main>
  )
}

function PremiumServiceCard({
  href,
  image,
  title,
  description,
}: {
  href: string
  image: string
  title: string
  description: string
}) {
  return (
    <Link href={href} className="group block">
      <article className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition duration-500 hover:-translate-y-4 hover:shadow-2xl">

        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width:1280px) 25vw, 100vw"
            className="object-cover group-hover:scale-110 transition duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="p-8 text-left">
          <h3 className="text-xl font-heading font-semibold text-brand-primary group-hover:text-[#b08d57] transition">
            {title}
          </h3>

          <p className="mt-4 text-brand-muted leading-relaxed text-sm">
            {description}
          </p>

          <div className="mt-6 text-sm font-semibold text-[#b08d57] group-hover:translate-x-2 transition duration-300">
            Explore Service →
          </div>
        </div>

      </article>
    </Link>
  )
}