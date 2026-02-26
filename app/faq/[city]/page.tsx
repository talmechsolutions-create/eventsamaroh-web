import type { Metadata } from "next";

type Props = {
  params: { city: string };
};

const cityNameMap: Record<string, string> = {
  bangalore: "Bangalore",
  hyderabad: "Hyderabad",
  chennai: "Chennai",
};

export function generateMetadata({ params }: Props): Metadata {
  const cityKey = params.city.toLowerCase();
  const city = cityNameMap[cityKey] || params.city;

  return {
    title: `Event Management FAQs in ${city} | EventSamaroh`,
    description: `Frequently asked questions about event management services in ${city}. Weddings, corporate events, and complete planning by EventSamaroh.`,
  };
}

export default function CityFAQPage({ params }: Props) {
  const cityKey = params.city.toLowerCase();
  const city = cityNameMap[cityKey] || params.city;

  const faqs = [
    {
      q: `What event management services does EventSamaroh offer in ${city}?`,
      a: `EventSamaroh offers end-to-end event management in ${city}, including weddings, corporate events, private celebrations, decor, vendor coordination, and execution.`,
    },
    {
      q: `Does EventSamaroh handle weddings in ${city}?`,
      a: `Yes, we specialize in wedding planning in ${city}, covering venue selection, decor, catering coordination, logistics, and on-site management.`,
    },
    {
      q: `How early should I book EventSamaroh in ${city}?`,
      a: `For large events in ${city}, we recommend booking 3–6 months in advance. Smaller events can be planned with shorter notice.`,
    },
    {
      q: `Does EventSamaroh manage corporate events in ${city}?`,
      a: `Yes, we handle conferences, product launches, annual meets, and corporate celebrations in ${city}.`,
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 pt-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Event Management FAQs in {city}
        </h1>

        <p className="mt-4 text-gray-600">
          Answers to common questions about planning events with EventSamaroh in{" "}
          {city}.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-6 shadow-sm"
          >
            <h2 className="font-semibold text-gray-900">{faq.q}</h2>
            <p className="mt-2 text-gray-700">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
