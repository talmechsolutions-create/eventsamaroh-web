import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Event Services in Pune | EventSamaroh",
  description:
    "Professional event planning services in Pune including weddings, corporate events, private parties, and decor management.",
};

const services = [
  {
    title: "Wedding Planning in Pune",
    description:
      "Complete wedding planning including engagement, destination weddings, and full event execution.",
    slug: "wedding-planning",
    image: "/images/services/wedding.webp",
  },
  {
    title: "Corporate Events in Pune",
    description:
      "Professional management for conferences, product launches, and corporate gatherings.",
    slug: "corporate-events",
    image: "/images/services/corporate.webp",
  },
  {
    title: "Birthday Celebrations in Pune",
    description:
      "Memorable birthday parties with themes, decor, and complete event setup.",
    slug: "birthday-parties",
    image: "/images/services/birthday.webp",
  },
  {
    title: "Private Parties in Pune",
    description:
      "Private parties and social gatherings tailored to your needs.",
    slug: "private-parties",
    image: "/images/services/private.webp",
  },
  {
    title: "Decor & Design in Pune",
    description:
      "Creative decor, vendor coordination, and theme-based event styling services.",
    slug: "decor-design",
    image: "/images/services/decor.webp",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Our Event Services in Pune
      </h1>

      <p className="text-gray-600 text-center mb-12">
        From planning to execution, EventSamaroh delivers premium event
        management solutions in Pune.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.slug}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-60">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <Link
                href={`/services/${service.slug}`}
                className="text-black font-semibold hover:underline"
              >
                Explore more →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed">
          EventSamaroh provides comprehensive event services in Pune including
          <Link href="/services/wedding-planning" className="text-[#b08d57] hover:underline ml-1">
            wedding planning
          </Link>,
          professional
          <Link href="/services/corporate-events" className="text-[#b08d57] hover:underline ml-1">
            corporate event management
          </Link>,
          memorable
          <Link href="/services/birthday-parties" className="text-[#b08d57] hover:underline ml-1">
            birthday party planning
          </Link>,
          stylish
          <Link href="/services/private-parties" className="text-[#b08d57] hover:underline ml-1">
            private party organization
          </Link>, and
          <Link href="/services/decor-design" className="text-[#b08d57] hover:underline ml-1">
            creative event decor solutions
          </Link>
          across Pune, ensuring every celebration is flawlessly executed and memorable.
        </p>
      </div>
    </section>
  );
}