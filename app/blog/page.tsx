import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Planning Blog | Wedding & Corporate Guides in Pune",
  description:
    "Expert event planning guides including wedding budgeting, venue selection and corporate event strategies in Pune.",
};

const posts = [
  {
    slug: "wedding-planning-cost-pune",
    title: "Wedding Planning Cost in Pune (2026 Guide)",
    image: "/blog-wedding-cost.jpg",
  },
  {
    slug: "corporate-event-budget-pune",
    title: "Corporate Event Budget Planning in Pune",
    image: "/blog-corporate-event-budget.jpg",
  },
  {
    slug: "birthday-party-cost-pune",
    title: "Birthday Party Planning Cost in Pune",
    image: "/blog-birthday-party-cost.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-28">

      <h1 className="text-4xl font-semibold text-center mb-16">
        Event Planning Insights & Guides
      </h1>

      <div className="grid md:grid-cols-3 gap-12">

        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group cursor-pointer">

              <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h2 className="mt-6 text-lg font-medium group-hover:text-[#b08d57] transition">
                {post.title}
              </h2>

            </div>
          </Link>
        ))}

      </div>

    </main>
  );
}
