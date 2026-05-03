import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import { siteConfig } from '@/data/siteConfig';
import { serviceAreas } from '@/data/areas';
import type { FAQ } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Get a Cash Offer for Your Central Texas House',
  description:
    'Request a cash offer for your Central Texas house. We buy directly from owners — no repairs needed, no agent commissions when selling directly to us. Local buyer since 2009.',
  alternates: {
    canonical: `https://${siteConfig.domain}/cash-offer`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Get a Cash Offer for Your Central Texas House | ${siteConfig.name}`,
    description:
      'Request a cash offer for your Central Texas house. We buy directly from owners — no repairs needed, no agent commissions when selling directly to us. Local buyer since 2009.',
    url: `https://${siteConfig.domain}/cash-offer`,
    type: 'website',
  },
};

const faqs: FAQ[] = [
  {
    question: 'How is a cash offer different from a regular offer?',
    answer:
      "A cash offer means we pay the full purchase price out of our own funds — there's no bank financing, no loan approval, no appraisal contingency. That's why we can close fast and why our offers don't fall through at the last minute the way financed offers sometimes do.",
  },
  {
    question: 'Will your offer be at full market value?',
    answer:
      'No, and we won\'t pretend otherwise. Cash buyer offers are typically below retail market value because we\'re factoring in any repairs the house needs, our holding costs, and the certainty and speed we provide. The right question isn\'t "is this full market value" — it\'s "given my situation, is this a good trade?" We\'ll help you think through that honestly.',
  },
  {
    question: 'Will you explain the offer when I see it?',
    answer:
      "Yes. We'll walk through the offer with you, point out what we noticed about the property, and answer any questions you have before you decide. We're not going to send a number and disappear — we want you to feel confident in whatever you decide.",
  },
  {
    question: 'Is the offer negotiable?',
    answer:
      "Often, yes — especially if we missed something or got something wrong about the property. The starting offer is our honest estimate; if you push back with information that changes the math, we'll listen.",
  },
  {
    question: "What if I don't accept the offer?",
    answer:
      "You don't accept. There's no obligation, no pressure, and no penalty. You can take time to think, get a second opinion, or list with an agent instead. We'd rather you say no than feel rushed into a deal that isn't right for you.",
  },
  {
    question: "What if I'm not sure whether to take a cash offer or list?",
    answer:
      "Tell us when we talk. We'll be straight with you about which path probably makes more sense for your situation. Cash buying is what we do, but we know it's not always the right answer.",
  },
];

const trustCards = [
  {
    title: '17 Years Local',
    body: "Buying houses in Central Texas since 2009. We're not going anywhere.",
  },
  {
    title: 'Texas Licensed Broker',
    license: true,
    body: 'Verifiable through the Texas Real Estate Commission.',
  },
  {
    title: 'Lock-the-Offer Promise',
    body: 'Written offer = offer at closing. No re-trading. No surprise deductions.',
  },
  {
    title: 'Direct Buyer',
    body: 'Josh buys as a principal, not as your agent. No commissions. No middle man.',
  },
];

const propertiesWeBuy = [
  'Single-family homes (any age, any condition)',
  'Inherited and probate properties',
  'Vacant houses',
  'Houses that need significant repairs',
  'Tenant-occupied rentals',
  'Houses where the owner has moved out of state',
  'Houses with title issues, liens, or unpaid taxes',
  'Houses already listed and not selling',
];

const comparisonColumns: { header: string; items: string[] }[] = [
  {
    header: 'Selling Directly to Josh',
    items: [
      'Cash offer in 24-48 hours',
      'No repairs needed',
      'No cleaning needed',
      'No agent commissions when selling directly to us',
      'You pick the closing date',
      "Sale doesn't depend on a buyer's lender",
      'Walk away in 7-21 days',
    ],
  },
  {
    header: 'Listing with an Agent',
    items: [
      '30-90+ days on market',
      'Repairs typically required',
      'Showings, open houses',
      '~6% agent commission',
      "Closing depends on buyer's loan",
      '30-45 days closing after under contract',
    ],
  },
  {
    header: 'iBuyer (Opendoor, etc.)',
    items: [
      'Algorithmic offer (often less personalized)',
      'Service fee 5-8%',
      'Property restrictions (year built, lot size)',
      'Inspection-based price reductions common',
      'Less flexibility on close date',
    ],
  },
];

export default function CashOfferPage() {
  const phone = siteConfig.phone;
  const phoneTel = siteConfig.phoneTel;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Request a <span className="text-white underline decoration-orange decoration-4 underline-offset-4">Cash Offer</span> for Your Central Texas House
              </h1>

              <p className="text-xl text-gray-300 mb-6">
                We buy houses directly from owners. Local Central Texas buyer since 2009. Fair cash offers, no obligation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={phoneTel}
                  className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {phone}
                </a>
                <a
                  href="#lead-form"
                  className="bg-orange hover:bg-orange-hover text-navy font-bold py-3 px-6 rounded-lg transition-colors text-lg flex items-center justify-center"
                >
                  Request My Cash Offer
                </a>
              </div>

              {/* Trust bar */}
              <p className="text-sm text-gray-300">
                Texas Licensed Broker (TREC #
                <span className="whitespace-nowrap">597248-B</span>
                ) <span aria-hidden="true">•</span> Buying Central Texas homes since 2009 <span aria-hidden="true">•</span> Hundreds of homes purchased
              </p>
            </div>

            {/* Lead Form */}
            <div id="lead-form" className="bg-navy/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-2">Request Your Cash Offer</h2>
              <p className="text-gray-300 mb-6">No obligation. We respond within 24 hours.</p>
              <LeadForm variant="compact" darkMode submitText="REQUEST MY OFFER" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — What You Get */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">What You Get</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                We&apos;re a local cash buyer, not a national franchise and not a lead-generation company. When you request a cash offer through this site, you&apos;re talking directly to Josh — a Texas licensed broker who&apos;s been buying houses in Bell, McLennan, Coryell, and Lampasas counties for 17 years.
              </p>
              <p>A cash offer from us is:</p>
              <p>
                <strong className="text-navy">A real number, not a trick.</strong> We tell you the actual amount we&apos;ll pay, and we explain how we got there. The offer we agree to in writing is the offer at closing.
              </p>
              <p>
                <strong className="text-navy">Yours to take or leave.</strong> No high-pressure pitch. No artificial deadlines. No &ldquo;this offer expires tomorrow.&rdquo; If our offer doesn&apos;t work for your situation, you walk away.
              </p>
              <p>
                <strong className="text-navy">Based on local knowledge.</strong> We&apos;ve watched this market for almost two decades. We know what houses sell for here, what they actually cost to fix, and what&apos;s happening on the ground in your neighborhood.
              </p>
              <p>
                <strong className="text-navy">Honest about whether cash is right for you.</strong> Some sellers are better off listing on the market. We&apos;ll say so. Cash is a great option for the right situation, but it isn&apos;t the right move for every house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — How a Cash Offer Works (4 steps) */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How a Cash Offer Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                n: 1,
                title: 'Submit Your Property',
                body: (
                  <>
                    Form on this page or call{' '}
                    <a href={phoneTel} className="text-navy font-semibold underline hover:text-navy-dark">
                      {phone}
                    </a>
                    . Five minutes. Tell us address, condition, situation.
                  </>
                ),
              },
              {
                n: 2,
                title: 'We Evaluate',
                body:
                  'We look at the property — sometimes a quick walk-through, sometimes just remote review depending on the situation. We pull comparable sales, estimate any repair costs, and run our numbers.',
              },
              {
                n: 3,
                title: 'We Make You an Offer',
                body:
                  "Within 24-48 hours, you get a written cash offer. We'll walk you through it and answer any questions before you decide.",
              },
              {
                n: 4,
                title: 'You Decide',
                body:
                  "Take it, leave it, or come back next month. There's no obligation. If you accept, you pick the closing date and we move forward. If you don't, no hard feelings — we get it.",
              },
            ].map((step) => (
              <article key={step.n} className="text-center">
                <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-our-offer-works" className="btn-secondary">
              See exactly how the process works <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 — 3-Column Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How Our Cash Offer Compares</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <table className="w-full block md:table">
              <thead className="hidden md:table-header-group">
                <tr className="bg-navy text-white">
                  {comparisonColumns.map((col) => (
                    <th key={col.header} scope="col" className="text-left p-5 font-bold w-1/3 first:rounded-tl-xl last:rounded-tr-xl">
                      {col.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                <tr className="block md:table-row">
                  {comparisonColumns.map((col, i) => (
                    <td
                      key={col.header}
                      className={`block md:table-cell align-top p-5 bg-white md:bg-white border-gray-200 mb-4 md:mb-0 rounded-xl md:rounded-none shadow-sm md:shadow-none ${
                        i < comparisonColumns.length - 1 ? 'md:border-r' : ''
                      }`}
                    >
                      <h3 className="font-bold text-navy mb-3 md:hidden text-lg">{col.header}</h3>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-gray-700">
                            <svg className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            {/* Wrap the table in shadow on desktop only */}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            We&apos;re not saying cash is always best. We&apos;re saying it&apos;s worth comparing — and we&apos;ll be honest about which path fits your situation.
          </p>
        </div>
      </section>

      {/* Section 4 — Properties We Buy */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">Properties We Buy</h2>
            <p className="text-gray-600 text-center mb-8">We buy all kinds of houses across Central Texas:</p>
            <ul className="space-y-3 mb-8">
              {propertiesWeBuy.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-gray-600">
              If you&apos;re not sure your situation fits, call us. The answer is almost always yes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — 4-card trust bar */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card) => (
              <article key={card.title} className="text-center p-6 bg-gray-light rounded-xl">
                <h3 className="font-bold text-navy mb-3 text-lg">{card.title}</h3>
                <p className="text-gray-600 text-sm">
                  {card.license && (
                    <>
                      TREC #
                      <span className="whitespace-nowrap">597248-B</span>
                      .{' '}
                    </>
                  )}
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonial */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Sellers Say</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <TestimonialCard
              quote="Josh helped us out when my father passed. The house wasn't in great condition and had been on the market twice but didn't sell. Called Josh in March and he walked the property and bought it right there. Actually made more selling to Josh then I would have after all the realtor fees and closing cost."
              name="Brandon Dixon"
              location="Central Texas"
            />
          </div>
        </div>
      </section>

      {/* Section 7 — Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Service Area</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We buy houses throughout Central Texas — across Bell, McLennan, Coryell, and Lampasas counties.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-gray-light hover:bg-orange/10 border border-gray-200 px-5 py-2.5 rounded-full font-medium text-navy hover:text-orange transition-colors text-sm"
              >
                {area.city}, TX
              </Link>
            ))}
          </div>
          <Link href="/areas" className="btn-secondary">
            View All Service Areas <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Section 8 — FAQ */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Section 9 — Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Your Cash Offer Today</h2>
          <p className="text-xl mb-8 text-navy">
            No obligation. No pressure. Just a fair, written offer based on your house&apos;s actual situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-form"
              className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Request My Cash Offer
            </a>
            <a
              href={phoneTel}
              className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
