import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Planning Cost in Pune (2026 Complete Budget Guide)",
  description: "Detailed breakdown of wedding planning costs in Pune including venue, decor, catering, photography and planner fees for 2026.",
  openGraph: {
    title: "Wedding Planning Cost in Pune (2026 Complete Budget Guide)",
    description: "Complete wedding budget breakdown for Pune including venue, decor, catering and wedding planner costs.",
    url: "https://eventsamaroh.com/blog/wedding-planning-cost-in-pune",
    type: "article",
  },
};

export default function WeddingPlanningCostPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Wedding Planning Cost in Pune (2026 Complete Budget Guide)
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            A realistic breakdown of wedding expenses in Pune — from venue booking to decor, catering and planner fees.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav className="max-w-4xl mx-auto px-6 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href="/blog" className="hover:underline">Blog</Link> /{" "}
        <span className="text-black">Wedding Planning Cost in Pune</span>
      </nav>

      {/* IMAGE */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <Image src="/wedding-cost-pune.jpg" alt="Wedding Planning Cost in Pune" fill priority className="object-cover" />
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
        <p>Planning a wedding in Pune requires structured budgeting. Costs vary based on guest count, venue type, decor theme, catering preferences and entertainment choices.</p>
        <h2 className="text-2xl font-semibold text-black">Average Wedding Cost in Pune (2026)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Intimate wedding (100–150 guests): ₹5–10 Lakhs</li>
          <li>Mid-scale wedding (250–400 guests): ₹15–30 Lakhs</li>
          <li>Luxury wedding (500+ guests): ₹40 Lakhs and above</li>
        </ul>
        <h2 className="text-2xl font-semibold text-black">1. Venue Cost in Pune</h2>
        <p>Banquet halls and wedding lawns in Pune typically range between ₹2L–₹20L depending on capacity and location. Central areas like Koregaon Park and Baner are priced higher.</p>
        <h2 className="text-2xl font-semibold text-black">2. Wedding Decor & Mandap</h2>
        <p>Basic decor packages start from ₹1.5L. Premium floral concepts, stage design and lighting setups can exceed ₹10L depending on customization.</p>
        <h2 className="text-2xl font-semibold text-black">3. Catering Costs</h2>
        <p>Catering in Pune ranges between ₹800 to ₹2500 per plate. Multi-cuisine menus and live counters increase total budget.</p>
        <h2 className="text-2xl font-semibold text-black">4. Photography & Videography</h2>
        <p>Professional wedding photography packages range from ₹1L to ₹5L depending on coverage and editing style.</p>
        <h2 className="text-2xl font-semibold text-black">5. Wedding Planner Fees</h2>
        <p>Hiring a professional <Link href="/services/wedding-planning" className="text-[#b08d57] font-medium hover:underline">wedding planner in Pune</Link> typically costs 8%–15% of the total wedding budget. Planners manage vendor negotiation, timelines and execution.</p>
        <h2 className="text-2xl font-semibold text-black">How to Reduce Wedding Costs</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Choose off-season wedding dates</li>
          <li>Limit guest count</li>
          <li>Bundle vendor services</li>
          <li>Negotiate venue packages</li>
        </ul>

        <div className="bg-[#faf8f5] p-8 rounded-2xl text-center mt-12">
          <h3 className="text-xl font-semibold text-black">Want a Customized Wedding Budget Plan?</h3>
          <p className="mt-3 text-gray-600">Our team helps you plan realistic budgets and negotiate better vendor pricing across Pune.</p>
          <Link href="/book-event" className="inline-block mt-6 bg-[#b08d57] text-white px-8 py-3 rounded-full hover:opacity-90 transition">Request Free Consultation</Link>
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
        "headline":"Wedding Planning Cost in Pune (2026 Complete Budget Guide)",
        "author":{"@type":"Organization","name":"EventSamaroh"},
        "publisher":{"@type":"Organization","name":"EventSamaroh"},
        "mainEntityOfPage":{"@type":"WebPage","@id":"https://eventsamaroh.com/blog/wedding-planning-cost-in-pune"}
      })}} />

    </main>
  );
}
