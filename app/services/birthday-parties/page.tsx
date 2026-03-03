import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cake,
  Sparkles,
  Gift,
  Music,
  Palette,
  CheckCircle,
  ShieldCheck,
  CalendarDays,
  IndianRupee,
  Star,
  MapPin,
  Users,
} from "lucide-react";

/* =========================================================
   ===================== METADATA ==========================
========================================================= */

export const metadata: Metadata = {
  title:
    "Birthday Party Planner in Pune | Kids Theme & Adult Birthday Event Management | EventSamaroh",

  description:
    "EventSamaroh is a professional birthday party planner in Pune offering kids theme decoration, catering, cake arrangement, entertainment, photography and complete on-site event management across Baner, Wakad, Hinjewadi, Kharadi, Viman Nagar and Koregaon Park.",

  alternates: {
    canonical: "/services/birthday-parties",
  },

  openGraph: {
    title:
      "Birthday Party Planner in Pune | Kids & Adult Birthday Planning",
    description:
      "Creative and professionally managed birthday party planning services in Pune with theme decor, entertainment coordination and structured execution.",
    url: "https://eventsamaroh.in/services/birthday-parties",
    siteName: "EventSamaroh",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   ================= PAGE COMPONENT ========================
========================================================= */

export default function BirthdayPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/birthday/hero.webp"
          alt="Birthday Party Planner in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />

        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
            Birthday Party Planner in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Creative kids and adult birthday party planning services in Pune
            with theme decoration, catering coordination, entertainment
            management and disciplined on-site supervision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-event"
              className="px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
            >
              Plan Your Birthday Celebration
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
            Professional Birthday Party Planning Services in Pune
          </h2>

          <p>
            Planning a birthday party requires more than decoration. It involves
            structured budgeting, vendor coordination, activity sequencing and
            disciplined on-site supervision. As an experienced birthday party
            planner in Pune, EventSamaroh delivers complete end-to-end birthday
            event management.
          </p>

          <p>
            From kids theme parties and milestone birthdays to society
            celebrations and private villa gatherings, we integrate venue
            booking, decoration, cake arrangement, catering, entertainment,
            return gifts and supervision into one coordinated execution system.
          </p>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-heading text-brand-primary">
            Complete Birthday Party Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            {[
              { icon: Cake, title: "Kids Party Planning", slug: "kids-party-planning" },
              { icon: Palette, title: "Theme Decoration Setup", slug: "theme-decoration" },
              { icon: Gift, title: "Catering & Cake Arrangement", slug: "catering-entertainment" },
              { icon: Music, title: "Entertainment & Activities", slug: "photography" },
              { icon: MapPin, title: "Venue Booking Assistance", slug: "venue-booking" },
              { icon: CheckCircle, title: "On-Site Event Management", slug: "on-site-management" },
            ].map((item, index) => (
              <Link key={index} href={`/services/birthday-parties/${item.slug}`} className="group block">
                <div className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto group-hover:scale-110 transition" />
                  <h3 className="mt-6 font-semibold text-brand-primary">{item.title}</h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    Structured planning and creative coordination for joyful birthday celebrations.
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= COST SECTION ================= */}
      <section className="py-28 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

          <h2 className="text-4xl font-heading text-brand-primary text-center">
            Birthday Party Cost in Pune – Transparent Budget Structuring
          </h2>

          <p>
            Birthday party cost depends on guest size, theme complexity,
            catering menu, entertainment choices and venue category.
            We provide structured budget breakdowns covering decor,
            cake, activities, return gifts, photography and supervision.
          </p>

        </div>
      </section>

      {/* ================= EXECUTION FRAMEWORK ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-heading text-brand-primary text-center mb-16">
            Our Structured Birthday Event Execution Framework
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              { stage: "Stage 01", title: "Theme & Concept Finalization" },
              { stage: "Stage 02", title: "Budget & Vendor Allocation" },
              { stage: "Stage 03", title: "Venue & Setup Planning" },
              { stage: "Stage 04", title: "Activity & Timeline Control" },
              { stage: "Stage 05", title: "On-Site Supervision & Closure" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-black/5">
                <div className="text-sm text-brand-accent font-semibold uppercase">
                  {item.stage}
                </div>
                <h3 className="mt-4 font-semibold text-brand-primary">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-28 bg-white border-t border-black/5 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-heading text-brand-primary">
            Why Families Trust EventSamaroh
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16 text-brand-muted">
            <div>
              <ShieldCheck className="w-8 h-8 text-brand-accent mx-auto" />
              <p className="mt-4">Structured Planning Approach</p>
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
              <p className="mt-4">Creative Theme Execution</p>
            </div>
          </div>

        </div>
      </section>

    
  

{/* =====================================================
   ================= EXPERIENCE METRICS =================
===================================================== */}
<section
  id="birthday-experience"
  className="py-28 bg-brand-soft border-t border-black/5 text-center"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary">
      500+ Birthday Celebrations Across Pune
    </h2>

    <div className="grid md:grid-cols-3 gap-12 mt-16 text-brand-muted">

      <div>
        <p className="text-3xl font-semibold text-brand-primary">200+</p>
        <p>Families Served in Baner, Wakad & Balewadi</p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">180+</p>
        <p>Birthday Events in Hinjewadi, Kharadi & Viman Nagar</p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">120+</p>
        <p>Society & Villa Celebrations in Koregaon Park & Aundh</p>
      </div>

    </div>

    <p className="mt-12 max-w-3xl mx-auto text-brand-muted leading-relaxed">
      Our structured birthday event execution model ensures consistent
      quality across residential societies, banquet halls, private villas
      and premium hotels throughout Pune.
    </p>

  </div>
</section>
{/* =====================================================
   ================= FAQ SECTION =======================
===================================================== */}
<section
  id="birthday-faq"
  className="py-28 bg-white border-t border-black/5"
>
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Birthday Party FAQs – Pune
    </h2>

    <div className="mt-16 space-y-6">

      {[
        {
          question: "How much does a birthday party planner cost in Pune?",
          answer:
            "Birthday party cost in Pune depends on guest count, theme complexity, catering preferences and entertainment requirements. We provide structured quotations with transparent budget breakdowns."
        },
        {
          question: "Do you plan both kids and adult birthday parties?",
          answer:
            "Yes. We manage kids theme birthday parties, milestone birthdays, surprise celebrations and society birthday events across Pune."
        },
        {
          question: "Which areas of Pune do you provide birthday planning services?",
          answer:
            "We provide birthday party planning services across Baner, Wakad, Hinjewadi, Kharadi, Viman Nagar, Koregaon Park, Aundh and surrounding Pune locations."
        },
        {
          question: "Do you handle venue booking and decoration?",
          answer:
            "Yes. We manage venue selection, theme decoration setup, catering coordination, entertainment activities and complete on-site supervision."
        },
        {
          question: "How early should we book a birthday planner in Pune?",
          answer:
            "We recommend booking at least 2–4 weeks in advance to secure preferred venues, decorators and entertainment vendors."
        }
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
          "image": "https://eventsamaroh.in/images/services/birthday/hero.webp",
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
          "name": "Birthday Party Planning Services in Pune",
          "provider": {
            "@type": "LocalBusiness",
            "name": "EventSamaroh"
          },
          "areaServed": "Pune, Maharashtra"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a birthday party planner cost in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Birthday party cost in Pune depends on guest count, theme complexity, catering preferences and entertainment requirements. We provide structured quotations with transparent budget breakdowns."
              }
            },
            {
              "@type": "Question",
              "name": "Do you plan both kids and adult birthday parties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We manage kids theme birthday parties and milestone celebrations across Pune."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pune do you provide birthday planning services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide birthday party planning services across Baner, Wakad, Hinjewadi, Kharadi, Viman Nagar and Koregaon Park."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle venue booking and decoration?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We manage venue selection, theme decoration, catering coordination and complete supervision."
              }
            },
            {
              "@type": "Question",
              "name": "How early should we book a birthday planner in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We recommend booking 2–4 weeks in advance."
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
              "name": "Birthday Parties",
              "item": "https://eventsamaroh.in/services/birthday-parties"
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
