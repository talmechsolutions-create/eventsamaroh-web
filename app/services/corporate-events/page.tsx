import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Presentation,
  Sparkles,
  Mic,
  Users,
  CheckCircle,
  Building,
  ShieldCheck,
  CalendarDays,
  IndianRupee,
  Star,
} from "lucide-react";

/* =========================================================
   ===================== METADATA ==========================
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://eventsamaroh.in"),

  title:
    "Corporate Event Management Company in Pune | Conferences, Product Launch & Annual Meetings | EventSamaroh",

  description:
    "EventSamaroh is a leading corporate event management company in Pune with 20+ years of experience in conferences, product launches, annual meetings, networking events, stage & AV production and complete business event execution across Baner, Hinjewadi, Kharadi, Viman Nagar and major corporate hubs.",

  keywords: [
    "corporate event management company in Pune",
    "corporate event planner in Pune",
    "conference management company Pune",
    "product launch event management Pune",
    "annual meeting event planner Pune",
    "business event management Pune",
    "corporate stage production Pune",
    "AV production company Pune",
    "corporate event organizer in Baner",
    "corporate event management in Hinjewadi",
    "corporate event planner in Kharadi"
  ],

  alternates: {
    canonical: "/services/corporate-events",
  },

  openGraph: {
    title:
      "Corporate Event Management in Pune | Professional Business Event Planning",
    description:
      "Structured corporate event planning services in Pune with AV production, venue coordination and disciplined execution for conferences, product launches and annual meetings.",
    url: "https://eventsamaroh.in/services/corporate-events",
    siteName: "EventSamaroh",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/corporate/hero.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Event Management Company in Pune – EventSamaroh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Corporate Event Management Company in Pune | EventSamaroh",
    description:
      "Professional corporate event execution with structured planning, AV production and venue coordination across Pune.",
    images: ["/images/services/corporate/hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Corporate Event Management Services",

  authors: [{ name: "EventSamaroh" }],

  creator: "EventSamaroh",

  publisher: "EventSamaroh",
};

/* =========================================================
   ================= PAGE COMPONENT ========================
========================================================= */

export default function CorporateEventsPage() {
  return (
    <main className="overflow-hidden">

      {/* =====================================================
         ===================== HERO ==========================
      ===================================================== */}
       <section className="relative min-h-[95vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/corporate/hero.webp"
          alt="Corporate Event Management Company in Pune - EventSamaroh"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />

        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Corporate Event Management in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
            Professional corporate event planning services in Pune with
            structured execution, advanced AV production,
            venue coordination and disciplined on-site supervision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-event"
              className="px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
            >
              Schedule Corporate Consultation
            </Link>

            <Link
              href="/services"
              className="px-8 py-3 border border-white/40 rounded-full hover:bg-white/10 transition"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
        
      


      {/* =====================================================
         ================= AUTHORITY INTRO ===================
      ===================================================== */}
      <section
  id="corporate-authority"
  className="py-28 bg-white"
>
  <div className="max-w-6xl mx-auto px-6 space-y-10 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Professional Corporate Event Planning Services in Pune
    </h2>

    <p>
      Corporate events require operational precision, structured budgeting,
      technical production control and disciplined vendor coordination.
      As a leading corporate event management company in Pune,
      EventSamaroh delivers complete end-to-end execution
      for conferences, product launches, annual meetings,
      networking events and leadership summits.
    </p>

    <p>
      Our execution framework integrates venue booking,
      stage fabrication, LED wall installation,
      sound engineering, lighting design,
      branding installations and structured hospitality management.
      Every vendor operates within a documented milestone system
      to eliminate execution gaps.
    </p>

    <p>
      We have executed corporate events across Baner,
      Hinjewadi IT parks, Kharadi business districts,
      Viman Nagar hotels and Koregaon Park venues.
      Our local venue familiarity ensures logistical predictability
      and brand-consistent execution.
    </p>

    <p>
      Unlike informal coordinators, our structured planning model
      prioritizes brand positioning, audience flow,
      technical stability and timeline supervision.
      Corporate events demand precision — and we execute accordingly.
    </p>

  </div>
</section>

      {/* =====================================================
         ================= SERVICES GRID =====================
      ===================================================== */}
      <section id="corporate-services">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-heading text-brand-primary">
            Complete Corporate Event Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            {[
              { icon: Presentation, title: "Corporate Conferences", link: "/services/corporate-events/conferences" },
              { icon: Users, title: "Annual Meetings & Seminars", link: "/services/corporate-events/annual-meetings" },
              { icon: Mic, title: "Stage & AV Production", link: "/services/corporate-events/stage-av" },
              { icon: Building, title: "Venue Booking Assistance", link: "/services/corporate-events/venue-booking" },
              { icon: CheckCircle, title: "On-Site Event Supervision", link: "/services/corporate-events/on-site-management" },
            ].map((item, index) => (
              <Link key={index} href={item.link} className="group block">
                <div className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto group-hover:scale-110 transition" />
                  <h3 className="mt-6 text-lg font-semibold text-brand-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                    Structured planning, technical supervision and disciplined execution ensure professional corporate delivery.
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
         ================= COST DEPTH ====================
      ===================================================== */}
      <section
  id="COST-DEPTH"
  className="py-28 bg-white border-t border-black/5"
>
  <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Corporate Event Cost in Pune – Structured Budget Architecture
    </h2>

    <p>
      Corporate event cost depends on venue category,
      guest size, AV production scale,
      branding installations and hospitality requirements.
      Large conferences require advanced stage production,
      multi-camera setups and synchronized presentation systems.
    </p>

    <p>
      Product launches demand immersive brand storytelling,
      LED installations, controlled lighting atmospheres
      and audience engagement architecture.
    </p>

    <p>
      We provide structured budget breakdowns covering venue rental,
      LED walls, stage fabrication, sound systems,
      lighting design, branding installations and supervision teams.
    </p>

  </div>
</section>


      {/* =====================================================
         ================= RISK MANAGEMENT ===================
      ===================================================== */}
      <section id="corporate-risk">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

          <h2 className="text-4xl font-heading text-brand-primary text-center">
            Corporate Event Risk Management & Technical Control
          </h2>

          <p>
            Technical delays, AV system failure,
            branding misalignment or timeline compression
            can damage corporate credibility.
          </p>

          <p>
            We implement backup sound systems,
            redundant power supply planning,
            structured rehearsal reviews and milestone verification
            before event execution.
          </p>

          <p>
            Our disciplined execution model ensures predictable outcomes,
            professional brand positioning and zero operational chaos.
          </p>

        </div>
      </section>


      {/* =====================================================
         ================= EXECUTION FRAMEWORK ===============
      ===================================================== */}
      <section  id="corporate-framework"
  className="py-32 bg-gradient-to-b from-white to-brand-soft border-t border-black/5"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* ================= SECTION HEADER ================= */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-heading text-brand-primary">
        Our Structured Corporate Event Execution Framework
      </h2>
      <div className="w-20 h-1 bg-brand-accent mx-auto mt-6 rounded-full"></div>
      <p className="mt-8 text-brand-muted leading-relaxed text-lg">
        Every corporate event follows a disciplined five-layer execution
        model designed to ensure technical stability, financial clarity
        and brand-aligned delivery.
      </p>
    </div>

    {/* ================= GRID CARDS ================= */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-black/5 hover:shadow-2xl transition duration-300">
        <div className="text-sm font-semibold text-brand-accent uppercase tracking-wider">
          Stage 01
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-primary">
          Business Objective Alignment
        </h3>
        <p className="mt-4 text-brand-muted leading-relaxed">
          We define business goals, audience profiles and brand positioning
          priorities before production planning begins. Every event structure
          aligns with measurable corporate outcomes.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-black/5 hover:shadow-2xl transition duration-300">
        <div className="text-sm font-semibold text-brand-accent uppercase tracking-wider">
          Stage 02
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-primary">
          Budget Architecture
        </h3>
        <p className="mt-4 text-brand-muted leading-relaxed">
          Structured cost allocation across venue, stage production,
          LED systems, branding and supervision resources ensures
          financial transparency and approval discipline.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-black/5 hover:shadow-2xl transition duration-300">
        <div className="text-sm font-semibold text-brand-accent uppercase tracking-wider">
          Stage 03
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-primary">
          Venue & Technical Blueprinting
        </h3>
        <p className="mt-4 text-brand-muted leading-relaxed">
          Detailed technical layouts covering LED walls, rigging,
          sound engineering, lighting programming and power load
          mapping ensure operational stability.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-black/5 hover:shadow-2xl transition duration-300">
        <div className="text-sm font-semibold text-brand-accent uppercase tracking-wider">
          Stage 04
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-primary">
          Production & Rehearsal Control
        </h3>
        <p className="mt-4 text-brand-muted leading-relaxed">
          Stage fabrication, LED calibration, speaker rehearsal
          sessions and structured run sheets ensure smooth
          event sequencing and controlled transitions.
        </p>
      </div>

      {/* CARD 5 */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-black/5 hover:shadow-2xl transition duration-300">
        <div className="text-sm font-semibold text-brand-accent uppercase tracking-wider">
          Stage 05
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-primary">
          On-Site Execution & Reporting
        </h3>
        <p className="mt-4 text-brand-muted leading-relaxed">
          Live supervision, escalation protocols, backup systems
          and post-event reporting ensure professional delivery
          and operational transparency.
        </p>
      </div>

    </div>

    {/* ================= CLOSING PARAGRAPH ================= */}
    <div className="max-w-4xl mx-auto text-center mt-20">
      <p className="text-lg text-brand-muted leading-relaxed">
        This structured execution system differentiates professional
        corporate event management from informal coordination.
        Scale may vary — execution discipline remains constant.
      </p>
    </div>

  </div>
      </section>


      {/* =====================================================
         ================= TRUST SIGNALS =====================
      ===================================================== */}
      <section
  id="corporate-trust"
  className="py-28 bg-brand-soft border-t border-black/5 text-center"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary">
      Why Businesses Trust EventSamaroh
    </h2>

    <div className="grid md:grid-cols-4 gap-10 mt-16 text-brand-muted">

      <div>
        <ShieldCheck className="w-8 h-8 text-brand-accent mx-auto" />
        <p className="mt-4">20+ Years of Execution Experience</p>
      </div>

      <div>
        <CalendarDays className="w-8 h-8 text-brand-accent mx-auto" />
        <p className="mt-4">Disciplined Timeline Supervision</p>
      </div>

      <div>
        <IndianRupee className="w-8 h-8 text-brand-accent mx-auto" />
        <p className="mt-4">Transparent Budget Structuring</p>
      </div>

      <div>
        <Star className="w-8 h-8 text-brand-accent mx-auto" />
        <p className="mt-4">Strong Corporate Venue Network</p>
      </div>

    </div>

  </div>
</section>


      {/* =====================================================
         ================= EXPERIENCE METRICS ================
      ===================================================== */}
      <section
  id="corporate-experience"
  className="py-28 bg-white border-t border-black/5 text-center"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary">
      20+ Years of Corporate Event Excellence
    </h2>

    <div className="grid md:grid-cols-3 gap-12 mt-16 text-brand-muted">

      <div>
        <p className="text-3xl font-semibold text-brand-primary">500+</p>
        <p>Corporate & Business Events Executed</p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">100+</p>
        <p>Corporate Venue & Vendor Partnerships</p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">20+</p>
        <p>Years of Structured Execution Experience</p>
      </div>

    </div>

  </div>
</section>


     
  
    
      

        {/* =====================================================
           ================= FAQ SECTION =======================
        ===================================================== */}
        <section
          id="corporate-faq"
          className="py-28 bg-white border-t border-black/5"
        >
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl font-heading text-brand-primary text-center">
              Corporate Event FAQs – Pune
            </h2>

            <div className="mt-16 space-y-6">

              {[
                {
                  question: "How much does corporate event management cost in Pune?",
                  answer:
                    "Corporate event cost depends on venue, AV scale, branding requirements and guest size. We provide structured quotations after consultation.",
                },
                {
                  question: "Do you handle large-scale corporate conferences?",
                  answer:
                    "Yes. We manage conferences, summits and leadership meetings with full technical production and structured supervision.",
                },
                {
                  question: "Do you provide stage and AV production?",
                  answer:
                    "Yes. We provide LED walls, sound systems, stage fabrication and professional lighting design.",
                },
                {
                  question: "Which corporate hubs in Pune do you serve?",
                  answer:
                    "We operate across Baner, Hinjewadi, Kharadi, Viman Nagar and major business districts.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-brand-soft rounded-2xl p-6 border border-black/5 shadow-sm transition-all duration-300 open:shadow-lg"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-heading text-lg text-brand-primary list-none">
                    {faq.question}
                    <span className="ml-4 transition-transform duration-300 group-open:rotate-45 text-brand-accent text-xl">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-brand-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}

            </div>
          </div>
        </section>

      

  {/* =====================================================
   ================= SCHEMA STACK ======================
===================================================== */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "EventSamaroh",
          "url": "https://eventsamaroh.in",
          "logo": "https://eventsamaroh.in/logo.png"
        },
        {
          "@type": "LocalBusiness",
          "name": "EventSamaroh",
          "image": "https://eventsamaroh.in/images/services/corporate/hero.webp",
          "areaServed": "Pune, Maharashtra",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "MH",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Service",
          "name": "Corporate Event Management Services in Pune",
          "provider": {
            "@type": "LocalBusiness",
            "name": "EventSamaroh"
          },
          "areaServed": "Pune, Maharashtra",
          "serviceType": [
            "Corporate Conferences",
            "Product Launch Events",
            "Annual Meetings",
            "Stage & AV Production",
            "Corporate Venue Booking",
            "On-Site Event Supervision"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does corporate event management cost in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Corporate event cost depends on venue, AV scale, branding requirements and guest size. We provide structured quotations after consultation."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle large-scale corporate conferences?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We manage conferences, summits and leadership meetings with full technical production and structured supervision."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide stage and AV production?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We provide LED walls, sound systems, stage fabrication and professional lighting design."
              }
            },
            {
              "@type": "Question",
              "name": "Which corporate hubs in Pune do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We operate across Baner, Hinjewadi, Kharadi, Viman Nagar and major business districts."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://eventsamaroh.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://eventsamaroh.in/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Corporate Events",
              "item": "https://eventsamaroh.in/services/corporate-events"
            }
          ]
        }
      ]
    })
    
  }}
/>
</main>
  );
}