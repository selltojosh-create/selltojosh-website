import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Steps from "../components/Steps";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import { faqs } from "@/lib/faq-data";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sell to Josh",
  description:
    "Local cash home buyer in Central Texas. We buy houses as-is in Killeen, Temple, Belton, Waco, and surrounding communities.",
  url: "https://www.selltojosh.com",
  areaServed: [
    "Killeen, TX",
    "Temple, TX",
    "Belton, TX",
    "Waco, TX",
    "Copperas Cove, TX",
    "Harker Heights, TX",
    "Nolanville, TX",
    "Salado, TX",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />
      <Hero />
      <Benefits />
      <Steps />
      <Reviews />
      <FAQ />
    </>
  );
}
