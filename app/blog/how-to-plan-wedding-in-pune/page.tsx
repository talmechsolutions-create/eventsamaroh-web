import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Plan a Wedding in Pune (Step-by-Step 2026 Guide)",
  description: "Complete step-by-step wedding planning guide for Pune including venue selection, budgeting, vendor management and execution timeline.",
  openGraph: {
    title: "How to Plan a Wedding in Pune (Step-by-Step 2026 Guide)",
    description: "Structured guide to planning your wedding in Pune from budgeting to execution.",
    url: "https://eventsamaroh.com/blog/how-to-plan-wedding-in-pune",
    type: "article",
  },
};

export default function HowToPlanWeddingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">How to Plan a Wedding in Pune (Step-by-Step 2026 Guide)</h1>
          <p className="mt-6 text-gray-600 text-lg">
            A structured wedding planning checklist covering budget, venues, vendors and timeline management.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav className="max-w-4xl mx-auto px-6 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href="/blog" className="hover:underline">Blog</Link> /{" "}
        <span className="text-black">How to Plan a Wedding in Pune</span>
      </nav>

      {/* IMAGE PLACEHOLDER */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <Image src="/how-to-plan-wedding-pune.jpg" alt="How to Plan a Wedding in Pune" fill priority className="object-cover" />
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
        <p>Planning a wedding in Pune involves careful budgeting, venue selection, vendor coordination and timeline management. Following a structured approach reduces stress and avoids overspending.</p>

        <h2 className="text-2xl font-semibold text-black">Step 1: Define Your Wedding Budget</h2>
        <p>Start by understanding the average <Link href="/blog/wedding-planning-cost-in-pune" className="text-[#b08d57] font-medium hover:underline">wedding planning cost in Pune</Link>. Allocate funds for venue, decor, catering, photography, entertainment and contingency expenses.</p>

        <h2 className="text-2xl font-semibold text-black">Step 2: Finalize Guest Count</h2>
        <p>Guest count directly impacts venue size and catering cost. Decide approximate numbers before venue selection.</p>

        <h2 className="text-2xl font-semibold text-black">Step 3: Choose the Right Venue</h2>
        <p>Explore the <Link href="/blog/best-wedding-venues-in-pune" className="text-[#b08d57] font-medium hover:underline">best wedding venues in Pune</Link> based on your theme preference — banquet hall, outdoor lawn or resort.</p>

        <h2 className="text-2xl font-semibold text-black">Step 4: Hire Key Vendors</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wedding Decor Team</li>
          <li>Catering Service</li>
          <li>Photographer & Videographer</li>
          <li>Makeup & Styling Artists</li>
          <li>Entertainment / DJ</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black">Step 5: Create a Timeline</h2>
        <p>Prepare a detailed timeline for engagement, mehendi, sangeet, wedding ceremony and reception. Allocate buffer time for vendor setup and rehearsals.</p>

        <h2 className="text-2xl font-semibold text-black">Step 6: Consider Hiring a Wedding Planner</h2>
        <p>A professional <Link href="/services/wedding-planning" className="text-[#b08d57] font-medium hover:underline">wedding planner in Pune</Link> manages vendor coordination, negotiations, logistics and on-site execution.</p>

        <div className="bg-[#faf8f5] p-8 rounded-2xl text-center mt-12">
          <h3 className="text-xl font-semibold text-black">Need Help Planning Your Wedding?</h3>
          <p className="mt-3 text-gray-600">Our structured planning system ensures stress-free wedding execution across Pune.</p>
          <Link href="/book-event" className="inline-block mt-6 bg-[#b08d57] text-white px-8 py-3 rounded-full hover:opacity-90 transition">Book Free Consultation</Link>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="max-w-4xl mx-auto px-6 mt-20 border-t pt-12">
        <h3 className="text-2xl font-semibold mb-8">Related Wedding Planning Guides</h3>
        <div className="space-y-4">
          <Link href="/blog/wedding-planning-cost-in-pune" className="block text-[#b08d57] hover:underline">Wedding Planning Cost in Pune</Link>
          <Link href="/blog/best-wedding-venues-in-pune" className="block text-[#b08d57] hover:underline">Best Wedding Venues in Pune</Link>
          <Link href="/blog/how-to-plan-wedding-in-pune" className="block text-[#b08d57] hover:underline">How to Plan a Wedding in Pune</Link>
        </div>
      </section>

      {/* ARTICLE + BREADCRUMB SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"Article",
        "headline":"How to Plan a Wedding in Pune (Step-by-Step 2026 Guide)",
        "author":{"@type":"Organization","name":"EventSamaroh"},
        "publisher":{"@type":"Organization","name":"EventSamaroh"},
        "mainEntityOfPage":{"@type":"WebPage","@id":"https://eventsamaroh.com/blog/how-to-plan-wedding-in-pune"}
      })}} />

    </main>
  );
}
