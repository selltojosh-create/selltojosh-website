import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import TestimonialCard from '@/components/TestimonialCard';
import { siteConfig } from '@/data/siteConfig';
import { serviceAreas as staticServiceAreas, cityData } from '@/data/areas';
import { getServiceAreaBySlug, getFeaturedTestimonials, getSiteSettings } from '../../../../sanity/lib/fetch';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all cities
export async function generateStaticParams() {
  return staticServiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanityArea = await getServiceAreaBySlug(slug);
  const staticArea = staticServiceAreas.find(a => a.slug === slug);
  const area = sanityArea || staticArea;

  if (!area) {
    return {
      title: 'Area Not Found',
    };
  }

  const city = area.city;
  const metaTitle = sanityArea?.metaTitle || `Sell My House Fast ${city} TX | Cash Home Buyer Near Fort Hood | Sell to Josh`;
  const metaDescription = sanityArea?.metaDescription || `We buy houses for cash in ${city}, Texas near Fort Hood (formerly Fort Cavazos). Sell your ${city} house fast - no repairs, no fees, close in 7-14 days. Get a fair cash offer within 24 hours from a local buyer you can trust.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      `sell my house fast ${city}`,
      `cash home buyer ${city}`,
      `we buy houses ${city} TX`,
      `sell house as-is ${city}`,
      'Fort Hood home buyer',
      'Central Texas cash buyer',
    ],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://${siteConfig.domain}/areas/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://${siteConfig.domain}/areas/${slug}`,
    },
  };
}

// Local Business Schema for city page
function CityBusinessSchema({ city, slug }: { city: string; slug: string }) {
  const cityInfo = cityData[slug];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.businessName} - ${city}`,
    description: `Cash home buyer in ${city}, Texas. We buy houses fast for cash with no repairs, no fees, and no hassle.`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: `https://${siteConfig.domain}/areas/${slug}`,
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: cityInfo?.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: cityInfo.coordinates.lat,
      longitude: cityInfo.coordinates.lng,
    } : undefined,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Static fallback testimonials
const fallbackTestimonials = [
  {
    quote: "Josh made selling our inherited property so easy. We closed in just 12 days and didn't have to worry about repairs or cleaning out the house.",
    name: "Maria G.",
    location: "Killeen, TX"
  },
  {
    quote: "After my divorce, I needed to sell fast. Josh gave me a fair offer and worked around my schedule. No pressure, no games.",
    name: "Robert T.",
    location: "Temple, TX"
  },
  {
    quote: "I was behind on payments and stressed about foreclosure. Josh helped me sell before it went to auction. He saved my credit.",
    name: "Sandra L.",
    location: "Harker Heights, TX"
  }
];

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch data
  const [sanityArea, sanityTestimonials, settings] = await Promise.all([
    getServiceAreaBySlug(slug),
    getFeaturedTestimonials(),
    getSiteSettings(),
  ]);

  // Get static area data as fallback
  const staticArea = staticServiceAreas.find(a => a.slug === slug);
  const cityInfo = cityData[slug];

  // Use Sanity data or fall back to static
  const area = sanityArea || staticArea;

  if (!area) {
    notFound();
  }

  const phone = settings?.phone || siteConfig.phone;
  const phoneTel = settings?.phone
    ? `tel:+1${settings.phone.replace(/\D/g, '')}`
    : siteConfig.phoneTel;

  // Use Sanity testimonials or fallback, filter to show city-specific if available
  const testimonials = sanityTestimonials.length > 0
    ? sanityTestimonials.map(t => ({
        quote: t.quote,
        name: t.name,
        location: t.location,
      }))
    : fallbackTestimonials;

  return (
    <>
      <CityBusinessSchema city={area.city} slug={slug} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-sm text-gray-400 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/areas" className="hover:text-white">Areas We Serve</Link>
                <span className="mx-2">/</span>
                <span className="text-orange">{area.city}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sell Your {area.city} Home <span className="text-orange">Fast for Cash</span>
              </h1>

              <p className="text-xl text-gray-300 mb-6">
                {area.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={phoneTel}
                  className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {phone}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Local {area.city} Buyer</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Close in 7-14 Days</span>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-navy/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Cash Offer</h2>
              <p className="text-gray-300 mb-6">No obligation. We buy {area.city} homes in any condition.</p>
              <LeadForm variant="compact" darkMode />
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Content */}
      {cityInfo && (
        <section className="section-padding bg-white">
          <div className="container-custom mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                Cash Home Buyer in {area.city}, Texas
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                {cityInfo.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>

              {cityInfo.landmarks && cityInfo.landmarks.length > 0 && (
                <div className="bg-gray-light p-6 rounded-xl">
                  <h3 className="font-bold text-navy mb-3">Areas We Serve in {area.city}:</h3>
                  <p className="text-gray-600">
                    We buy houses throughout {area.city} and surrounding areas, including near {cityInfo.landmarks.join(', ')}, and all {area.city} neighborhoods.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Common Scenarios */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Common Situations We Help With in {area.city}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No matter your situation, we can help you sell your {area.city} home quickly and fairly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {area.scenarios?.map((scenario, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                <svg className="w-6 h-6 text-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">{scenario}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell to Josh in [City] */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Sell to Josh in {area.city}?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              When you sell your {area.city} home to me, you get a local buyer who understands this market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Fair Cash Offers</h3>
              <p className="text-gray-600 text-sm">Get a competitive cash offer based on {area.city} market values</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Fast Closing</h3>
              <p className="text-gray-600 text-sm">Close in as little as 7 days, or on your timeline</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">No Repairs Needed</h3>
              <p className="text-gray-600 text-sm">Sell your {area.city} home as-is, in any condition</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Local Expert</h3>
              <p className="text-gray-600 text-sm">I know {area.city} neighborhoods and property values</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Central Texas Homeowners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from homeowners who sold to us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How to Sell Your {area.city} House Fast
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process makes selling your home easy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Contact Us</h3>
              <p className="text-gray-600">Fill out our form or call us with details about your {area.city} property.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Get Your Offer</h3>
              <p className="text-gray-600">We&apos;ll evaluate your home and present a fair, no-obligation cash offer.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Close & Get Paid</h3>
              <p className="text-gray-600">Accept our offer, choose your closing date, and get cash in hand.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Also Buy Houses In
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Serving homeowners throughout Central Texas
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {staticServiceAreas.filter(a => a.slug !== slug).map((otherArea) => (
              <Link
                key={otherArea.slug}
                href={`/areas/${otherArea.slug}`}
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {otherArea.city}, TX
              </Link>
            ))}
          </div>

          <Link href="/areas" className="btn-primary">
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your {area.city} Home?
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            Get your free, no-obligation cash offer today. We buy houses in any condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
              Get My Cash Offer
            </Link>
            <a
              href={phoneTel}
              className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
