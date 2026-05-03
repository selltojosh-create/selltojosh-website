import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import { siteConfig } from '@/data/siteConfig';
import { serviceAreas } from '@/data/areas';
import { situations, situationData } from '@/data/situations';

const fallbackTestimonials = [
  {
    quote: "Josh helped us out when my father passed. The house wasn't in great condition and had been on the market twice but didn't sell. Called Josh in March and he walked the property and bought it right there. Actually made more selling to Josh then I would have after all the realtor fees and closing cost.",
    name: "Brandon Dixon",
    location: "Central Texas"
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all situations
export async function generateStaticParams() {
  return situations.map((s) => ({
    slug: s.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const situation = situations.find((s) => s.slug === slug);

  if (!situation) {
    return {
      title: 'Situation Not Found',
    };
  }

  return {
    title: situation.metaTitle,
    description: situation.metaDescription,
    keywords: situation.keywords,
    openGraph: {
      title: `${situation.metaTitle} | ${siteConfig.name}`,
      description: situation.metaDescription,
      url: `https://${siteConfig.domain}/situations/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://${siteConfig.domain}/situations/${slug}`,
    },
  };
}

// FAQPage JSON-LD Schema
// Safe usage: content is serialized from our own static data via JSON.stringify, not user input
function FAQPageSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function SituationPage({ params }: PageProps) {
  const { slug } = await params;

  const situation = situations.find((s) => s.slug === slug);
  const situationInfo = situationData[slug];

  if (!situation || !situationInfo) {
    notFound();
  }

  return (
    <>
      <FAQPageSchema faqs={situationInfo.faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-gray-300 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <Link href="/situations" className="hover:text-white">Situations</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-orange">{situation.title}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {situation.headline}
              </h1>

              <p className="text-xl text-gray-300 mb-6">
                {situation.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={siteConfig.phoneTel}
                  className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {siteConfig.phone}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Buying Central Texas Homes Since 2009</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Close in 7-14 Days</span>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-navy/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Cash Offer</h2>
              <p className="text-gray-300 mb-6">No obligation. We buy homes in any condition.</p>
              <LeadForm variant="compact" darkMode />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
              We Understand Your Situation
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              {situationInfo.content.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Checklist */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Common Situations We Help With
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No matter your situation, we can help you sell your home quickly and fairly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {situationInfo.scenarios.map((scenario, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                <svg className="w-6 h-6 text-orange flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">{scenario}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help — Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How We Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {situationInfo.processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
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
          <div className="max-w-xl mx-auto">
            <TestimonialCard {...fallbackTestimonials[0]} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-600 mb-10">
              Want to understand the process before you call? See{' '}
              <Link href="/how-our-offer-works" className="text-navy underline hover:text-navy-dark font-semibold">
                exactly how selling to Josh works
              </Link>
              .
            </p>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about selling in this situation
              </p>
            </div>
            <FAQAccordion faqs={situationInfo.faqs} />
          </div>
        </div>
      </section>

      {/* Mid-Page Lead Form */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get a Free Cash Offer Today
              </h2>
              <p className="text-xl text-gray-300">
                No obligation. No fees. We buy homes in any condition.
              </p>
            </div>
            <div className="bg-navy/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10">
              <LeadForm darkMode />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cities We Serve in Central Texas
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Serving homeowners throughout Central Texas
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {area.city}, TX
              </Link>
            ))}
          </div>

          <Link href="/areas" className="btn-primary">
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="py-8 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-6 bg-gray-light">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-navy">Disclaimer:</strong> {situationInfo.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Your Options?
          </h2>
          <p className="text-xl mb-8 text-navy">
            Get a free, no-obligation cash offer. No pressure, just a fair assessment of your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
              Get My Cash Offer
            </Link>
            <a
              href={siteConfig.phoneTel}
              className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
