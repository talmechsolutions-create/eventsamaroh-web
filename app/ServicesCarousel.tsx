"use client";

import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const CITY = "Pune";

const services = [
  {
    title: `Wedding Planning in ${CITY}`,
    desc: `Complete wedding planning services in ${CITY}, from venue selection to flawless execution.`,
    image: "/hero-main.jpg",
    href: "/services/wedding-planning",
  },
  {
    title: `Corporate Events in ${CITY}`,
    desc: `Professional corporate event management in ${CITY} for conferences, launches, and meets.`,
    image: "/hero-main.jpg",
    href: "/services/corporate-events",
  },
  {
    title: `Birthday Celebrations in ${CITY}`,
    desc: `Thoughtfully designed birthday celebrations in ${CITY} for all age groups.`,
    image: "/hero-main.jpg",
    href: "/services/birthday-parties",
  },
  {
    title: `Private Parties in ${CITY}`,
    desc: `Stylish and well-coordinated private parties and celebrations in ${CITY}.`,
    image: "/hero-main.jpg",
    href: "/services/private-parties",
  },
  {
    title: `Decor & Design in ${CITY}`,
    desc: `Creative event decor and design services in ${CITY}, tailored to your theme.`,
    image: "/hero-main.jpg",
    href: "/services/decor-design",
  },
];

export default function ServicesCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1.1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        disabled: true, // desktop grid only
      },
    },
  });

  return (
    <>
      {/* ================= DESKTOP GRID (SEO FIRST) ================= */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((s) => (
          <article
            key={s.title}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={s.image}
                alt={s.title}
                fill
                loading="lazy"               // ✅ lazy loaded
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-block mt-4 text-sm font-medium text-black hover:underline"
              >
                Explore more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div ref={sliderRef} className="keen-slider md:hidden mt-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="keen-slider__slide bg-white rounded-2xl shadow overflow-hidden"
          >
            <div className="relative h-44">
              <Image
                src={s.image}
                alt={s.title}
                fill
                loading="lazy"              // ✅ lazy loaded
                sizes="90vw"
                className="object-cover"
              />
            </div>

            <div className="p-5 text-left">
              <h3 className="text-base font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-block mt-3 text-sm font-medium text-black"
              >
                Explore more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
