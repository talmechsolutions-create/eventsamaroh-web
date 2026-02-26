import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ==============================
   BLOG DATABASE (STATIC FOR NOW)
   ============================== */

const posts = [
  {
    slug: "wedding-planning-cost-pune",
    title: "Wedding Planning Cost in Pune (2026 Guide)",
    description:
      "Complete wedding cost breakdown in Pune including venue, decor, catering and planning fees.",
    image: "/blog-wedding-cost.jpg",
    date: "2026-02-16",
    content: `
Planning a wedding in Pune involves multiple cost factors including venue, decor styling, catering and entertainment.

Average Wedding Cost in Pune:
• Small wedding: ₹5–10 Lakhs  
• Mid-scale wedding: ₹15–30 Lakhs  
• Luxury wedding: ₹40 Lakhs+

Venue pricing varies depending on season and scale.
Decor themes significantly influence overall budget.
Hiring a professional wedding planner ensures vendor negotiation and seamless coordination.
`,
  },
  {
    slug: "corporate-event-budget-pune",
    title: "Corporate Event Budget Planning in Pune",
    description:
      "How to plan and manage corporate event budgets in Pune effectively.",
    image: "/blog-corporate-event-budget.jpg",
    date: "2026-02-16",
    content: `
Corporate event budgets depend on venue, AV setup, guest count and branding requirements.

Conference budgets usually range between ₹3L–₹20L depending on scale.
Proper scheduling and vendor coordination reduces overspending.
`,
  },
  {
    slug: "birthday-party-cost-pune",
    title: "Birthday Party Planning Cost in Pune",
    description:
      "Detailed birthday party planning cost breakdown in Pune.",
    image: "/blog-birthday-party-cost.jpg",
    date: "2026-02-16",
    content: `
Birthday party planning in Pune depends on theme decor, entertainment and catering.

Basic party: ₹50,000 – ₹2L  
Premium themed event: ₹3L+

Customization plays major role in final pricing.
`,
  },
];

/* ==============================
   METADATA
   ============================== */

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

/* ==============================
   BLOG PAGE
   ============================== */

export default function BlogPostPage({ params }: any) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `https://eventsamaroh.com${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "EventSamaroh",
    },
    publisher: {
      "@type": "Organization",
      name: "EventSamaroh",
      logo: {
        "@type": "ImageObject",
        url: "https://eventsamaroh.com/logo.png",
      },
    },
    description: post.description,
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-28">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Featured Image Placeholder */}
      <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-semibold mt-10">
        {post.title}
      </h1>

      <article className="mt-8 text-gray-700 leading-relaxed whitespace-pre-line text-lg">
        {post.content}
      </article>

    </main>
  );
}
