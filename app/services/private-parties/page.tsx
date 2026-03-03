import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Camera,
  Sparkles,
  Building,
  CheckCircle,
  ShieldCheck,
  CalendarDays,
  IndianRupee,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Private Party Organizers in Pune | Luxury House Parties & Cocktail Events | EventSamaroh",
  description:
    "Premium private party organizers in Pune offering house party planning, cocktail night setups, catering, décor styling, venue booking and complete on-site event coordination across Baner, Wakad, Hinjewadi, Kharadi and Koregaon Park.",
  alternates: {
    canonical: "/services/private-parties",
  },
};

export default function PrivatePartyPage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/services/private-parties/hero.webp"
          alt="Private Party Organizers in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />

        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
            Private Party Organizers in Pune
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Luxury house parties, cocktail nights, anniversary celebrations
            and exclusive private gatherings executed with structured planning,
            décor styling, curated catering and seamless supervision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book-event"
              className="px-8 py-3 bg-brand-accent text-white rounded-full hover:scale-105 transition"
            >
              Schedule Private Party Consultation
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

      {/* ================= AUTHORITY ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-brand-muted leading-relaxed">

          <h2 className="text-4xl font-heading text-brand-primary text-center">
            Professional Private Party Planning Services in Pune
          </h2>

          <p>
            Private party planning in Pune requires more than décor and music.
            It demands structured coordination, venue optimization, guest flow
            planning and disciplined vendor supervision. As experienced private
            party organizers in Pune, EventSamaroh delivers premium house party
            planning, cocktail night setups, milestone celebrations and exclusive
            social gatherings across Pune.
          </p>

          <p>
            Whether you are hosting a luxury villa party in Koregaon Park,
            a society terrace celebration in Wakad or an intimate anniversary
            gathering in Baner, our execution model ensures creative styling
            supported by operational precision.
          </p>

          <p>
            We manage theme décor, catering coordination, bar setups,
            entertainment curation, lighting ambiance, photography and
            on-site supervision to ensure seamless celebration flow.
          </p>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-heading text-brand-primary">
            Complete Private Party Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            {[
              { icon: Music, title: "Catering & Entertainment", href: "/services/private-parties/catering-entertainment" },
              { icon: Camera, title: "Photography", href: "/services/private-parties/photography" },
              { icon: Sparkles, title: "Theme & Décor", href: "/services/private-parties/theme-decor" },
              { icon: Building, title: "Venue Booking", href: "/services/private-parties/venue-booking" },
              { icon: CheckCircle, title: "On-site Management", href: "/services/private-parties/on-site-management" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group block">
                <div className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition">
                  <item.icon className="w-10 h-10 text-brand-accent mx-auto group-hover:scale-110 transition" />
                  <h3 className="mt-6 text-lg font-semibold text-brand-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-brand-muted">
                    Structured execution with disciplined coordination.
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
            Private Party Cost in Pune – Transparent Budget Structuring
          </h2>

          <p>
            Private party cost depends on guest count, venue category,
            décor scale, catering preferences, bar setup requirements
            and entertainment level. We provide structured quotations
            with transparent budget allocation across all components.
          </p>

        </div>
      </section>

      {/* ================= EXECUTION FRAMEWORK ================= */}
      <section className="py-28 bg-brand-soft border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-heading text-brand-primary text-center mb-16">
            Our Structured Private Party Execution Framework
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Concept Finalization & Theme Planning",
              "Vendor Locking & Budget Allocation",
              "Production Setup & Decor Installation",
              "Catering & Entertainment Coordination",
              "On-Site Supervision & Guest Flow Control",
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg">
                <h3 className="font-semibold text-brand-primary">{item}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE METRICS ================= */}
      <section 
  id="private-party-experience"
  className="py-28 bg-white border-t border-black/5 text-center"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary">
      300+ Private Celebrations Executed Across Pune
    </h2>

    <div className="grid md:grid-cols-3 gap-12 mt-16 text-brand-muted">

      <div>
        <p className="text-3xl font-semibold text-brand-primary">120+</p>
        <p>
          Anniversary & House Parties in Baner, Wakad & Balewadi Villas
        </p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">95+</p>
        <p>
          Society Terrace & Birthday Events in Hinjewadi, Kharadi & Aundh
        </p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-brand-primary">85+</p>
        <p>
          Cocktail Nights & Hotel Parties in Koregaon Park & Viman Nagar
        </p>
      </div>

    </div>

    <p className="mt-12 max-w-3xl mx-auto text-brand-muted leading-relaxed">
      Our private party organizers in Pune manage luxury home anniversaries,
      milestone birthday celebrations, society terrace parties, cocktail evenings,
      villa gatherings and premium hotel events. Every celebration is executed
      with structured planning, décor styling, catering coordination and
      disciplined on-site supervision to ensure smooth guest flow and
      memorable experiences.
    </p>

  </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
  id="private-party-faq"
  className="py-28 bg-brand-soft border-t border-black/5"
>
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-heading text-brand-primary text-center">
      Private Party FAQs – Pune
    </h2>

    <div className="mt-16 space-y-6">

      {[
        {
          question: "How much does a private party organizer cost in Pune?",
          answer:
            "Private party cost in Pune depends on guest count, venue category, décor scale, catering preferences and entertainment requirements. House anniversary parties and terrace celebrations are structured differently from hotel cocktail events. We provide transparent budget breakdowns before execution."
        },
        {
          question: "Do you organize anniversary and house parties?",
          answer:
            "Yes. We organize anniversary parties, milestone birthday celebrations, villa gatherings and luxury house parties across Baner, Wakad, Koregaon Park and surrounding Pune areas."
        },
        {
          question: "Do you manage cocktail and hotel parties in Pune?",
          answer:
            "Yes. We execute cocktail nights, hotel private events and banquet hall celebrations with complete décor styling, bar setup coordination, catering management and on-site supervision."
        },
        {
          question: "Which areas of Pune do you cover for private party planning?",
          answer:
            "We provide private party planning services across Baner, Wakad, Hinjewadi, Kharadi, Viman Nagar, Koregaon Park, Aundh and nearby Pune locations."
        },
        {
          question: "How early should we book a private party planner?",
          answer:
            "We recommend booking 3–6 weeks in advance for hotel and banquet parties, and at least 2–4 weeks for house or terrace celebrations to secure preferred vendors and décor themes."
        },
        {
          question: "Do you provide complete end-to-end party management?",
          answer:
            "Yes. Our services include venue booking assistance, theme décor setup, catering coordination, entertainment planning, photography and complete on-site supervision."
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

      {/* ================= SCHEMA ================= */}
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
          "image": "https://eventsamaroh.in/images/services/private-parties/hero.webp",
          "areaServed": {
            "@type": "Place",
            "name": "Pune, Maharashtra, India"
          }
        },
        {
          "@type": "Service",
          "name": "Private Party Planning Services in Pune",
          "provider": {
            "@type": "LocalBusiness",
            "name": "EventSamaroh"
          },
          "areaServed": "Pune, Maharashtra",
          "serviceType": [
            "Anniversary Party Planning",
            "House Party Organizer",
            "Cocktail Night Planning",
            "Hotel Private Event Management",
            "Terrace Party Setup"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a private party organizer cost in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Private party cost depends on guest count, venue category, décor scale and catering preferences. Structured quotations are provided before execution."
              }
            },
            {
              "@type": "Question",
              "name": "Do you organize anniversary and house parties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We organize anniversary parties, house gatherings and villa celebrations across Pune."
              }
            },
            {
              "@type": "Question",
              "name": "Do you manage cocktail and hotel parties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We execute cocktail nights and hotel private events with complete décor, catering and supervision."
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
              "name": "Private Parties",
              "item": "https://eventsamaroh.in/services/private-parties"
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