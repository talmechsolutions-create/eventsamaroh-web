import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Palette,
  Lightbulb,
  Flower,
  Building,
  CheckCircle,
  ShieldCheck,
  CalendarDays,
  IndianRupee,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Event Decor & Design Services in Pune | Wedding, Corporate & Stage Decoration | EventSamaroh",
  description:
    "Premium event decor and design services in Pune including wedding mandap setups, corporate stage decor, floral styling, lighting design, theme concepts and custom installations across Baner, Wakad, Hinjewadi, Kharadi and Koregaon Park.",
  alternates: {
    canonical: "/services/decor-design",
  },
};

/* =========================================================
   ================= PAGE COMPONENT ========================
========================================================= */

export default function DecorPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/decor/hero.webp"
          alt="Event Decor and Design Services in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />

        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
            Event Decor & Design Services in Pune
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Premium wedding decor, corporate stage design, floral styling,
            lighting installations and theme concepts executed with structured precision.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-event"
              className="px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
            >
              Plan Your Event Decor
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

      {/* ================= AUTHORITY INTRO ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

          <h2 className="text-4xl font-heading text-brand-primary text-center">
            Professional Event Decor Company in Pune
          </h2>

          <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

  <h2 className="text-4xl font-heading text-brand-primary text-center">
    Professional Event Decor & Design Services in Pune
  </h2>

  <p>
    Event decor and design services in Pune require more than floral arrangements
    and stage backdrops. Modern event environments demand structured planning,
    creative conceptualization, technical installation precision and disciplined
    on-site execution. At EventSamaroh, we deliver premium event decor solutions
    for weddings, corporate events, birthday celebrations and private gatherings
    across Pune.
  </p>

  <p>
    Whether it is a wedding mandap decoration in Baner, a corporate stage setup
    in Hinjewadi, a luxury reception backdrop in Koregaon Park or a themed birthday
    decoration in Wakad, our approach remains consistent — aesthetic excellence
    supported by structured operational control. Every decor element is aligned
    with venue layout, lighting balance, guest visibility and photography angles.
  </p>

  <h3 className="text-2xl font-heading text-brand-primary">
    What Is Included in Event Decor Services?
  </h3>

  <p>
    Our event decor services in Pune include theme conceptualization, floral styling,
    stage fabrication, entrance decoration, mandap setup, LED backdrop installations,
    lighting design, ceiling treatments, table styling and complete venue transformation.
    We focus on both visual appeal and structural safety to ensure a flawless outcome.
  </p>

  <p>
    Professional decor execution involves material planning, color coordination,
    lighting temperature control and precise installation sequencing.
    Unlike unstructured decorators, we follow a documented decor blueprint
    before installation begins.
  </p>

  <h3 className="text-2xl font-heading text-brand-primary">
    Wedding Decor Services in Pune
  </h3>

  <p>
    Wedding decor requires cultural alignment, ritual functionality and visual harmony.
    We provide mandap decoration, reception stage design, floral ceilings,
    varmala backdrops, haldi and mehendi theme setups and luxury floral installations.
    Our wedding decor services in Pune ensure that ceremonies remain functional
    while maintaining premium aesthetics.
  </p>

  <h3 className="text-2xl font-heading text-brand-primary">
    Corporate Stage & Event Decoration
  </h3>

  <p>
    Corporate decor demands branding precision and technical accuracy.
    We design corporate stage backdrops, LED wall frames, product launch setups,
    annual meeting stage decor and conference branding installations.
    Every corporate decor project is aligned with brand guidelines,
    audience visibility and lighting synchronization.
  </p>

  <h3 className="text-2xl font-heading text-brand-primary">
    Why Professional Decor Planning Matters
  </h3>

  <p>
    Poor decor planning can affect guest flow, reduce photography quality
    and create visual imbalance. Professional decor execution ensures
    stage proportion accuracy, safe structural fabrication,
    balanced lighting intensity and cohesive theme continuity.
  </p>

  <p>
    At EventSamaroh, our structured decor execution model includes
    concept approval, vendor locking, material sourcing,
    production scheduling and on-site supervision.
    This disciplined approach eliminates last-minute improvisation
    and ensures predictable visual results.
  </p>

  <h3 className="text-2xl font-heading text-brand-primary">
    Areas We Serve in Pune
  </h3>

  <p>
    We provide event decor and design services across Baner, Wakad,
    Hinjewadi, Kharadi, Viman Nagar, Koregaon Park, Aundh and surrounding
    Pune locations. Our familiarity with banquet halls, hotels and open
    lawns enables smooth installation and venue compliance.
  </p>

  <p>
    Whether you require luxury wedding decor, corporate stage decoration
    or customized theme decor for private celebrations,
    EventSamaroh ensures creative excellence supported by
    structured execution discipline.
  </p>

</div>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading text-brand-primary">
            Complete Decor & Design Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              { icon: Sparkles, title: "Custom Installations" },
              { icon: Flower, title: "Floral Styling" },
              { icon: Lightbulb, title: "Lighting Design" },
              { icon: Palette, title: "Theme Concepts" },
              { icon: Building, title: "Stage & Mandap Setup" },
              { icon: CheckCircle, title: "On-Site Decor Supervision" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-xl">
                <item.icon className="w-10 h-10 text-brand-accent mx-auto" />
                <h3 className="mt-6 font-semibold text-brand-primary">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COST SECTION ================= */}
      <section className="py-28 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">
          <h2 className="text-4xl font-heading text-brand-primary text-center">
            Event Decor Cost in Pune – Structured Budget Planning
          </h2>
          <p>
            Decor cost depends on installation scale, floral density,
            lighting complexity, stage fabrication requirements and venue size.
            We provide structured quotations with transparent cost allocation.
          </p>
        </div>
      </section>

      {/* ================= EXECUTION FRAMEWORK ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-heading text-brand-primary text-center mb-16">
            Our Structured Decor Execution Framework
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Concept & Theme Finalization",
              "Budget Allocation & Vendor Locking",
              "Design Blueprint & Fabrication",
              "Installation & Technical Setup",
              "On-Site Supervision & Finishing"
            ].map((title, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg">
                <div className="text-sm text-brand-accent font-semibold uppercase">
                  Stage 0{i + 1}
                </div>
                <h3 className="mt-4 font-semibold text-brand-primary">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE METRICS ================= */}
      <section  id="decor-experience"
  className="py-28 bg-white border-t border-black/5 text-center"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary">
      400+ Premium Decor Installations Across Pune
    </h2>

    <div className="grid md:grid-cols-3 gap-12 mt-16 text-brand-muted">

      <div>
        <p className="text-3xl font-semibold text-brand-primary">180+</p>
        <p>Wedding Mandap & Reception Stage Decor in Baner, Wakad & Balewadi</p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">130+</p>
        <p>Corporate Stage & LED Backdrop Installations in Hinjewadi & Kharadi</p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">90+</p>
        <p>Theme Birthday & Private Celebration Decor in Koregaon Park & Viman Nagar</p>
      </div>

    </div>

    <p className="mt-12 max-w-3xl mx-auto text-brand-muted leading-relaxed">
      Our event decor services in Pune are executed across banquet halls,
      luxury hotels, IT parks, private villas and residential societies.
      Every installation is structured with technical supervision,
      lighting calibration and design alignment to ensure premium visual impact.
    </p>

  </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="decor-faq"
  className="py-28 bg-brand-soft border-t border-black/5"
>
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Event Decor FAQs – Pune
    </h2>

    <div className="mt-16 space-y-6">

      {[
        {
          question: "How much does event decor cost in Pune?",
          answer:
            "Event decor cost in Pune depends on floral density, stage fabrication scale, lighting design complexity and venue size. Wedding decor and corporate stage installations are quoted with structured budget allocation and transparent pricing."
        },
        {
          question: "Do you provide wedding mandap decoration in Pune?",
          answer:
            "Yes. We provide premium mandap decoration, reception stage setup, floral backdrops, entrance decor and lighting design for weddings across Pune."
        },
        {
          question: "Do you handle corporate stage decoration and branding?",
          answer:
            "Yes. We design and execute corporate stage backdrops, LED wall installations, branding panels and lighting setups for conferences, product launches and annual meetings."
        },
        {
          question: "Which areas of Pune do you provide decor services?",
          answer:
            "We provide event decor services across Baner, Wakad, Hinjewadi, Kharadi, Viman Nagar, Koregaon Park, Aundh and surrounding Pune locations."
        },
        {
          question: "How early should we book decor services?",
          answer:
            "We recommend booking 4–8 weeks in advance for weddings and 2–4 weeks in advance for corporate or private event decor to ensure design alignment and vendor scheduling."
        },
        {
          question: "Do you offer custom theme decoration concepts?",
          answer:
            "Yes. We provide fully customized theme decor concepts including floral themes, luxury minimal concepts, royal stage setups and immersive lighting architecture."
        }
      ].map((faq, index) => (
        <details
          key={index}
          className="group bg-white rounded-2xl p-6 border border-black/5 shadow-sm transition-all duration-300 open:shadow-lg"
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

      {/* ================= SCHEMA STACK ================= */}
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
          "image": "https://eventsamaroh.in/images/services/decor/hero.webp",
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
          "name": "Event Decor & Design Services in Pune",
          "provider": {
            "@type": "LocalBusiness",
            "name": "EventSamaroh"
          },
          "areaServed": "Pune, Maharashtra",
          "serviceType": [
            "Wedding Mandap Decoration",
            "Corporate Stage Decoration",
            "Floral Styling",
            "Lighting Design",
            "Theme Decoration Services",
            "Custom Installations"
          ]
        },

        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does event decor cost in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Event decor cost depends on installation scale, floral styling, lighting complexity and venue size. Structured quotations are provided with transparent budget allocation."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide wedding mandap decoration in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We provide premium mandap decoration, reception stage setup and floral styling across Pune."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle corporate stage decoration?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We design and execute corporate stage backdrops, LED walls and branding installations."
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
              "name": "Decor & Design",
              "item": "https://eventsamaroh.in/services/decor-design"
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