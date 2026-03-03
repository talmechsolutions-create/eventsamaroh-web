import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Camera,
  Utensils,
  CheckCircle,
  Home,
  Users,
  ShieldCheck,
  CalendarDays,
  IndianRupee,
  Star,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Wedding Planner in Pune | Luxury, Destination & Mid-Range Wedding Planning Services | EventSamaroh",

  description:
    "EventSamaroh is a leading wedding planner in Pune with 20+ years of professional event management experience. We provide luxury, destination and mid-range wedding planning services including venue booking, decor styling, catering coordination, photography management and complete end-to-end execution across Baner, Wakad, Hinjewadi, Kharadi, Koregaon Park and all prime Pune locations.",

  alternates: {
    canonical: "https://eventsamaroh.in/services/wedding-planning",
  },

  openGraph: {
    title:
      "Wedding Planner in Pune | Luxury & Destination Wedding Planning | EventSamaroh",
    description:
      "Premium wedding planning services in Pune with structured execution, vendor supervision and transparent budgeting.",
    url: "https://eventsamaroh.in/services/wedding-planning",
    siteName: "EventSamaroh",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Wedding Planner in Pune | Luxury Wedding Planning Services",
    description:
      "Professional wedding planning services in Pune with structured coordination and premium execution.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function WeddingPlanningPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/wedding/hero.webp"
          alt="Wedding Planner in Pune - EventSamaroh"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />

        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
            Wedding Planner in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
            Luxury and mid-range wedding planning services in Pune with
            structured execution, premium decor styling, transparent budgeting
            and disciplined vendor coordination.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-event"
              className="px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
            >
              Schedule Wedding Consultation
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
  <div className="max-w-6xl mx-auto px-6 space-y-10 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Professional Wedding Planning Services in Pune
    </h2>

    <p>
      Planning a wedding in Pune requires far more than beautiful decoration.
      It demands structured budgeting, disciplined vendor supervision,
      milestone tracking and strong local{" "}
      <Link
        href="/services/wedding-planning/venue-selection"
        className="text-brand-accent underline"
      >
        venue selection expertise in Pune
      </Link>.
      As a trusted{" "}
      <strong>wedding planner in Pune</strong>,{" "}
      <Link href="/" className="text-brand-accent underline">
        EventSamaroh
      </Link>{" "}
      delivers complete end-to-end wedding planning services tailored for
      luxury, destination-style and mid-range celebrations.
    </p>

    <p>
      Our structured framework covers every operational layer —
      from{" "}
      <Link
        href="/services/wedding-planning/decor-mandap"
        className="text-brand-accent underline"
      >
        wedding decor and mandap design services
      </Link>,{" "}
      <Link
        href="/services/wedding-planning/catering"
        className="text-brand-accent underline"
      >
        professional wedding catering coordination
      </Link>,{" "}
      <Link
        href="/services/wedding-planning/photography"
        className="text-brand-accent underline"
      >
        wedding photography and cinematic videography management
      </Link>,{" "}
      to{" "}
      <Link
        href="/services/wedding-planning/coordination"
        className="text-brand-accent underline"
      >
        on-site wedding coordination and supervision
      </Link>, artist management and structured hospitality logistics.
      Every vendor is aligned through documented milestone tracking systems
      to eliminate execution gaps and last-minute confusion.
    </p>

    <p>
      From traditional Maharashtrian ceremonies and engagement functions
      to multi-day destination weddings and grand reception galas,
      our operational blueprint ensures flawless coordination
      from consultation to final event closure.
      We manage ritual sequencing, guest movement flow,
      stage production layouts, sound systems, lighting design,
      artist timing and hospitality desks with disciplined process control.
    </p>

    <p>
      Weddings involve decorators, caterers, photographers,
      artists, technical teams and venue coordinators.
      Without structured supervision, execution risks increase.
      As a professional wedding planning company in Pune,
      we integrate vendor accountability frameworks,
      financial documentation, timeline buffers
      and contingency planning into every wedding blueprint.
    </p>

    <p>
      We have executed weddings across Baner banquet halls,
      Wakad event venues, Hinjewadi corporate spaces,
      Kharadi luxury lawns, Koregaon Park premium hotels,
      Aundh marriage halls and Viman Nagar banquet properties.
      This deep local familiarity allows us to anticipate
      logistical constraints, municipal regulations,
      traffic movement challenges and venue-specific setup restrictions in advance.
    </p>

    <p>
      Our wedding planning services in Pune are built on
      structured process control — initial consultation alignment,
      transparent budget architecture, vendor shortlisting,
      creative production design and real-time on-site execution.
      Every decision is documented, budget-aligned
      and quality-checked to ensure predictable outcomes.
    </p>

    <p>
      Whether you are planning an intimate mid-range wedding
      with 150 guests or a large-scale luxury celebration
      featuring multi-day functions and premium production installations,
      our execution discipline remains constant.
      The scale may vary — but the planning rigor, supervision standards
      and operational structure never change.
    </p>

  </div>
</section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-heading text-brand-primary">
            Complete Wedding Planning Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            {[
              {
                icon: Sparkles,
                title: "Wedding Decor & Mandap Design",
                link: "/services/wedding-planning/decor-mandap",
              },
              {
                icon: Camera,
                title: "Photography & Cinematic Videography",
                link: "/services/wedding-planning/photography",
              },
              {
                icon: Utensils,
                title: "Catering & Menu Planning",
                link: "/services/wedding-planning/catering",
              },
              {
                icon: CheckCircle,
                title: "On-Site Coordination & Supervision",
                link: "/services/wedding-planning/coordination",
              },
              {
                icon: Home,
                title: "Venue Selection & Booking",
                link: "/services/wedding-planning/venue-selection",
              },
              {
                icon: Users,
                title: "Artist & Hospitality Management",
                link: "/services/wedding-planning/artists",
              },
            ].map((item, index) => (
              <Link key={index} href={item.link} className="group block">
                <div className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto group-hover:scale-110 transition" />
                  <h3 className="mt-6 text-lg font-semibold text-brand-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                    Structured planning, vendor supervision and disciplined execution ensure seamless wedding coordination.
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= COST DEPTH ================= */}
      <section className="py-28 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

          <h2 className="text-4xl font-heading text-brand-primary text-center">
            Wedding Planner Cost in Pune – Transparent Budget Structuring
          </h2>

          <p>
            Wedding planning cost in Pune depends on guest count,
            decor scale, catering preferences, venue category and
            event duration. Mid-range weddings typically range from
            optimized decor setups and curated catering to streamlined
            vendor coordination. Luxury weddings often include elaborate
            floral installations, premium stage production, celebrity artist
            management and multi-day logistics.
          </p>

          <p>
            As a professional wedding planning company in Pune,
            we provide structured budget breakdowns before vendor confirmation.
            Clients receive complete transparency across decor, catering,
            lighting, hospitality, photography and coordination allocations.
          </p>

          <p>
            This disciplined budgeting approach eliminates hidden costs,
            protects your investment and ensures predictable execution quality.
          </p>

        </div>
      </section>
      {/* ================= RISK MANAGEMENT ================= */}
<section className="py-28 bg-brand-soft border-t border-black/5">
  <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Wedding Risk Management & Backup Planning in Pune
    </h2>

    <p>
      Professional wedding planning in Pune requires proactive risk management.
      Weather changes, vendor delays, traffic congestion, venue restrictions and
      last-minute guest increases can impact execution quality if not anticipated.
      As an experienced wedding planner in Pune, EventSamaroh integrates contingency
      planning into every wedding blueprint.
    </p>

    <p>
      We maintain backup vendor networks, timeline buffers and pre-event coordination
      reviews to ensure seamless execution. All decorators, caterers, photographers
      and technical teams are aligned through structured milestone tracking systems.
    </p>

    <p>
      This disciplined planning model differentiates a professional wedding planning
      company in Pune from informal coordinators. Our objective is predictable execution,
      operational control and stress-free celebration management.
    </p>

  </div>
</section>
{/* ================= EXECUTION FRAMEWORK ================= */}
<section className="py-28 bg-white border-t border-black/5">
  <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Our Structured Wedding Execution Framework
    </h2>

    <p>
      As an experienced wedding planning company in Pune, we follow a
      five-layer execution structure: Consultation Alignment, Budget
      Architecture, Vendor Locking, Production Blueprinting and On-Site
      Supervision.
    </p>

    <p>
      Each stage includes documented milestone checkpoints, vendor confirmation
      matrices and timeline audits. This disciplined system ensures no stage
      of your wedding planning process is dependent on assumptions.
    </p>

    <p>
      Unlike informal wedding coordinators, our structured execution model
      is built on accountability and operational transparency.
    </p>

  </div>
</section>
{/* ================= LUXURY VS MID-RANGE ================= */}
<section className="py-28 bg-brand-soft border-t border-black/5">
  <div className="max-w-6xl mx-auto px-6 space-y-10 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Luxury vs Mid-Range Wedding Planning in Pune
    </h2>

    <p>
      Luxury wedding planning in Pune typically involves large-scale decor production, custom floral installations, celebrity artist management, premium hospitality lounges, multi-day celebrations and extended coordination teams.
    </p>

    <p>
      Mid-range wedding planning focuses on optimized decor layouts, curated catering menus, structured photography coverage and disciplined vendor supervision without unnecessary overspending.
    </p>

    <p>
      At EventSamaroh, both luxury and mid-range weddings receive the same structured execution model. The difference lies in scale and production intensity — not in planning discipline.
    </p>

  </div>
</section>
{/* ================= CEREMONY EXPERTISE ================= */}
<section className="py-28 bg-white border-t border-black/5">
  <div className="max-w-6xl mx-auto px-6 space-y-10 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Complete Ceremony Management – Haldi, Sangeet, Wedding & Reception
    </h2>

    <p>
      A professional wedding planner in Pune must manage each ceremony with
      separate production logic. Haldi functions require decor minimalism and
      floral freshness, sangeet nights demand stage lighting, artist coordination
      and AV synchronization, while the wedding ceremony requires ritual alignment,
      mandap positioning and priest coordination.
    </p>

    <p>
      At EventSamaroh, we segment each wedding celebration into independent
      operational units. Engagement functions, mehendi ceremonies, cocktail
      evenings, reception galas and traditional Maharashtrian rituals are
      planned with structured timelines and dedicated supervision teams.
    </p>

    <p>
      This layered ceremony planning model ensures that your wedding in Pune
      flows seamlessly from one function to the next without logistical conflict,
      vendor overlap or timeline compression.
    </p>

  </div>
</section>
{/* ================= CLIENT TYPES ================= */}
<section className="py-28 bg-white border-t border-black/5">
  <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Who We Work With
    </h2>

    <p>
      As a professional wedding planner in Pune, we work with
      business families, NRI clients, corporate executives and
      families seeking structured, stress-free wedding execution.
      Many of our clients are based outside Pune and require
      disciplined vendor supervision and transparent reporting.
    </p>

    <p>
      Our documentation-driven planning system ensures that even
      outstation clients receive milestone updates, vendor confirmations
      and budget transparency throughout the wedding planning journey.
    </p>

  </div>
</section>
      {/* ================= TRUST SECTION ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-heading text-brand-primary">
            Why Clients Trust EventSamaroh
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16 text-brand-muted">

            <div>
              <ShieldCheck className="w-8 h-8 text-brand-accent mx-auto" />
              <p className="mt-4">20+ Years of Professional Event Execution</p>
            </div>

            <div>
              <CalendarDays className="w-8 h-8 text-brand-accent mx-auto" />
              <p className="mt-4">Disciplined Timeline Supervision</p>
            </div>

            <div>
              <IndianRupee className="w-8 h-8 text-brand-accent mx-auto" />
              <p className="mt-4">Transparent Budget Allocation</p>
            </div>

            <div>
              <Star className="w-8 h-8 text-brand-accent mx-auto" />
              <p className="mt-4">Strong Venue & Vendor Partnerships</p>
            </div>

          </div>

        </div>
      </section>
{/* ================= EXPERIENCE METRICS ================= */}
<section className="py-28 bg-white border-t border-black/5 text-center">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary">
      20+ Years of Structured Wedding Excellence
    </h2>

    <div className="grid md:grid-cols-3 gap-12 mt-16 text-brand-muted">
      <div>
        <p className="text-3xl font-semibold text-brand-primary">500+</p>
        <p>Events Executed</p>
      </div>
      <div>
        <p className="text-3xl font-semibold text-brand-primary">100+</p>
        <p>Vendor Partnerships</p>
      </div>
      <div>
        <p className="text-3xl font-semibold text-brand-primary">20+</p>
        <p>Years Experience</p>
      </div>
    </div>

  </div>
</section>
      {/* ================= FAQ SECTION ================= */}
      <section className="py-28 bg-white border-t border-black/5">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Wedding Planning FAQs – Pune
    </h2>

    <div className="mt-16 space-y-6">

      {[
        {
          question: "How much does a wedding planner in Pune cost?",
          answer:
            "Wedding planning cost depends on guest size, decor scale, venue category and event duration. We provide structured quotations after consultation with full budget transparency.",
        },
        {
          question: "Do you handle both luxury and mid-range weddings?",
          answer:
            "Yes. We manage premium luxury weddings as well as structured mid-range celebrations with disciplined coordination.",
        },
        {
          question: "How early should we book a wedding planner in Pune?",
          answer:
            "We recommend booking 4–6 months in advance to secure premium venues and preferred vendors.",
        },
        {
          question: "Do you manage destination weddings from Pune?",
          answer:
            "Yes. We coordinate destination-style weddings and outstation celebrations with structured vendor planning and hospitality management.",
        },
        {
          question: "What services are included in full wedding planning?",
          answer:
            "Full wedding planning includes venue assistance, decor design, catering supervision, photography coordination, artist management, hospitality desks and complete on-site execution.",
        },
        {
          question: "Can you work within a fixed wedding budget?",
          answer:
            "Yes. We structure vendor allocations based on your predefined budget and ensure disciplined financial planning.",
        },
        {
          question: "Which areas of Pune do you cover?",
          answer:
            "We provide wedding planning services across Baner, Wakad, Hinjewadi, Kharadi, Koregaon Park, Aundh, Viman Nagar and surrounding Pune regions.",
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

      {/* ================= FULL SCHEMA STACK ================= */}
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EventSamaroh",
              url: "https://eventsamaroh.in",
              logo: "https://eventsamaroh.in/logo.png"
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "EventSamaroh",
              image: "https://eventsamaroh.in/images/services/wedding/hero.webp",
              areaServed: "Pune, Maharashtra",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "MH",
                addressCountry: "IN"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Wedding Planning Services in Pune",
              provider: {
                "@type": "LocalBusiness",
                name: "EventSamaroh"
              },
              areaServed: "Pune"
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://eventsamaroh.in"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://eventsamaroh.in/services"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Wedding Planning",
                  item: "https://eventsamaroh.in/services/wedding-planning"
                }
              ]
            }
          ])
        }}
      />

    </main>
  );
}