import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Wedding Venues in Pune (2026 Updated List)",
  description: "Discover the best wedding venues in Pune for 2026 including luxury banquet halls, outdoor lawns, resorts and destination wedding venues near Pune.",
  openGraph: {
    title: "Best Wedding Venues in Pune (2026 Updated List)",
    description: "Complete guide to top wedding venues in Pune including pricing insights and planning tips.",
    url: "https://eventsamaroh.com/blog/best-wedding-venues-in-pune",
    type: "article",
  },
};

export default function BestWeddingVenuesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Best Wedding Venues in Pune (2026 Updated List)</h1>
          <p className="mt-6 text-gray-600 text-lg">
            A curated list of luxury banquet halls, outdoor lawns, resorts and destination wedding venues in Pune.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav className="max-w-4xl mx-auto px-6 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href="/blog" className="hover:underline">Blog</Link> /{" "}
        <span className="text-black">Best Wedding Venues in Pune</span>
      </nav>

      {/* FEATURED IMAGE */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <Image src="/best-wedding-venues-pune.jpg" alt="Best Wedding Venues in Pune" fill className="object-cover" priority />
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
        <p>Planning a wedding in Pune starts with selecting the perfect venue. Whether you prefer a grand banquet hall, a luxury resort, or a scenic outdoor lawn, Pune offers a wide variety of premium wedding venues suitable for intimate ceremonies as well as large-scale celebrations.</p>
        <h2 className="text-2xl font-semibold text-black">1. Luxury Banquet Halls in Pune</h2>
        <p>Banquet halls are ideal for traditional weddings and large guest lists. Areas like Koregaon Park, Baner, Wakad and Kharadi offer modern banquet spaces with air-conditioning, parking facilities and in-house catering options.</p>
        <h2 className="text-2xl font-semibold text-black">2. Outdoor Wedding Lawns</h2>
        <p>Outdoor wedding lawns are increasingly popular for sunset pheras, sangeet nights and grand decor setups. Locations around Bavdhan, Hinjewadi and outskirts of Pune offer spacious lawns surrounded by natural greenery.</p>
        <h2 className="text-2xl font-semibold text-black">3. Resort & Destination Wedding Venues Near Pune</h2>
        <p>If you're planning a destination-style wedding near Pune, luxury resorts in Lonavala and Mulshi are top choices. These venues offer accommodation, scenic backdrops and multi-day event capabilities.</p>
        <h2 className="text-2xl font-semibold text-black">Wedding Venue Cost in Pune (2026 Guide)</h2>
        <p>Wedding venue pricing in Pune typically ranges from ₹2 lakhs to ₹20 lakhs depending on location, guest capacity, catering packages and decoration requirements. Premium venues in central Pune cost significantly more compared to outskirts locations.</p>
        <h2 className="text-2xl font-semibold text-black">How to Choose the Right Wedding Venue</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Estimate your guest count first</li>
          <li>Decide indoor vs outdoor preference</li>
          <li>Check parking availability</li>
          <li>Understand vendor restrictions</li>
          <li>Compare total package cost</li>
        </ul>
        <p>Working with a professional <Link href="/services/wedding-planning" className="text-[#b08d57] font-medium hover:underline">wedding planner in Pune</Link> ensures better venue negotiation, vendor coordination and seamless execution.</p>

        <div className="bg-[#faf8f5] p-8 rounded-2xl text-center mt-12">
          <h3 className="text-xl font-semibold text-black">Need Help Selecting a Wedding Venue?</h3>
          <p className="mt-3 text-gray-600">Our team at EventSamaroh can help you shortlist, negotiate and manage your wedding venue professionally.</p>
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
        "headline":"Best Wedding Venues in Pune (2026 Updated List)",
        "author":{"@type":"Organization","name":"EventSamaroh"},
        "publisher":{"@type":"Organization","name":"EventSamaroh"},
        "mainEntityOfPage":{"@type":"WebPage","@id":"https://eventsamaroh.com/blog/best-wedding-venues-in-pune"}
      })}} />

    </main>
  );
}
