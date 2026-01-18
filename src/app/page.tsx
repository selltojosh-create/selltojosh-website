import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import TestimonialCard from '@/components/TestimonialCard';
import { siteConfig } from '@/data/siteConfig';
import { faqs as staticFaqs } from '@/data/faqs';
import { getSiteSettings, getFeaturedTestimonials, getAllFaqs } from '../../sanity/lib/fetch';
import { urlFor } from '../../sanity/lib/client';

export const metadata: Metadata = {
  title: 'Sell My House Fast Killeen TX | Cash Home Buyer | Sell to Josh',
  description: 'Sell your house fast for cash in Killeen, Temple, Harker Heights & Central Texas. No repairs, no fees, close in 7-14 days. Get a fair cash offer from a local buyer. Call (254) 498-6025!',
  openGraph: {
    title: 'Sell My House Fast Killeen TX | Cash Home Buyer | Sell to Josh',
    description: 'Sell your house fast for cash in Killeen, Temple, Harker Heights & Central Texas. No repairs, no fees, close in 7-14 days. Get a fair cash offer today!',
  },
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
};

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

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No Repairs Needed",
    description: "Sell your house exactly as it is. We buy homes in any condition."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Zero Fees or Commissions",
    description: "Keep more money. No agent fees, no closing costs, no surprises."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Central Texas Buyer",
    description: "I live and work here. You're dealing directly with a real person, not a corporation."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Close on Your Schedule",
    description: "Need to close fast? We can do 7 days. Need more time? We'll wait."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Cash Offers",
    description: "Get a fair, no-obligation cash offer within 24-48 hours."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Simple, Honest Process",
    description: "No games, no pressure. Just straightforward answers and fair deals."
  }
];

const steps = [
  {
    number: "1",
    title: "Tell Us About Your Property",
    description: "Fill out our quick form or give us a call. Share some basic details about your Central Texas home."
  },
  {
    number: "2",
    title: "Get Your Cash Offer",
    description: "We'll review your property and present a fair, no-obligation cash offer within 24-48 hours."
  },
  {
    number: "3",
    title: "Close & Get Paid",
    description: "Accept our offer, pick your closing date, and get cash in your hands. It's that simple."
  }
];

export default async function HomePage() {
  // Fetch data from Sanity with fallbacks
  const [settings, sanityTestimonials, sanityFaqs] = await Promise.all([
    getSiteSettings(),
    getFeaturedTestimonials(),
    getAllFaqs(),
  ]);

  // Use Sanity data or fall back to static data
  const heroImage = settings?.heroImage
    ? urlFor(settings.heroImage).url()
    : siteConfig.heroImage;
  const featuredVideoId = settings?.featuredVideoId || null;
  const featuredVideoTitle = settings?.featuredVideoTitle || siteConfig.featuredVideoTitle;
  const phone = settings?.phone || siteConfig.phone;
  const phoneTel = settings?.phone
    ? `tel:+1${settings.phone.replace(/\D/g, '')}`
    : siteConfig.phoneTel;
  const serviceAreas = settings?.serviceAreas || siteConfig.serviceAreas;

  // Transform Sanity testimonials or use fallback
  const testimonials = sanityTestimonials.length > 0
    ? sanityTestimonials.map(t => ({
        quote: t.quote,
        name: t.name,
        location: t.location,
      }))
    : fallbackTestimonials;

  // Use Sanity FAQs or fall back to static
  const faqs = sanityFaqs.length > 0
    ? sanityFaqs.map(f => ({ question: f.question, answer: f.answer }))
    : staticFaqs;

  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[600px] md:min-h-[700px] flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative z-10 container-custom mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {settings?.heroHeadline || (
                  <>Sell Your Central Texas Home <span className="text-orange">Fast for Cash</span></>
                )}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {settings?.heroSubheadline || "No repairs. No fees. No hassle. Get a fair cash offer from a local buyer you can trust."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
              <p className="text-gray-300 text-sm mb-6">
                Serving {serviceAreas.slice(0, -1).join(', ')}{serviceAreas.length > 1 ? ` & ${serviceAreas[serviceAreas.length - 1]}` : serviceAreas[0]} & surrounding areas
              </p>
              {/* Credibility Indicators */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Buying Central Texas homes since 2009</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Hundreds of homes purchased</span>
                </div>
              </div>
            </div>

            {/* Lead Form in Semi-transparent Navy Box */}
            <div className="bg-navy/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Cash Offer</h2>
              <p className="text-gray-300 mb-6">No obligation. We&apos;ll respond within 24 hours.</p>
              <LeadForm variant="compact" darkMode />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {featuredVideoTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {featuredVideoId
                ? "Watch this short video to learn how we help Central Texas homeowners sell their houses fast."
                : "We're creating a video to show you exactly how our process works."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {featuredVideoId ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideoId}`}
                  title={featuredVideoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-navy to-navy-dark flex flex-col items-center justify-center text-white">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Video Coming Soon</h3>
                <p className="text-gray-300 text-center max-w-md px-4">
                  We&apos;re creating a video to show you exactly how our process works
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selling your house doesn&apos;t have to be complicated. Here&apos;s our simple 3-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sell to Josh */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Sell to Josh?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I make selling your house simple, fair, and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-light p-6 rounded-xl border border-gray-medium hover:shadow-lg transition-shadow">
                <div className="text-orange mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Central Texas Homeowners
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We buy houses throughout the Central Texas region.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {serviceAreas.map((city) => (
              <div key={city} className="bg-white/10 backdrop-blur-sm py-4 px-3 rounded-lg text-center hover:bg-white/20 transition-colors">
                <span className="font-semibold text-sm md:text-base">{city}, TX</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/areas" className="btn-primary">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Homeowners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from Central Texas homeowners who sold to us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.slice(0, 4).map((faq, index) => (
              <div key={index} className="bg-gray-light p-6 rounded-lg border border-gray-medium">
                <h3 className="font-bold text-navy mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="btn-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your House?
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            Get your free, no-obligation cash offer today. No pressure, no games.
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
