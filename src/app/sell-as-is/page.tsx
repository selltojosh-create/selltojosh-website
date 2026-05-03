import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import { siteConfig } from '@/data/siteConfig';
import { serviceAreas } from '@/data/areas';
import type { FAQ } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Sell Your House As-Is in Central Texas',
  description:
    'Sell your Central Texas house exactly as it is. We buy homes in any condition — no repairs, no cleaning, no agent commissions. Request a cash offer from Josh today.',
  alternates: {
    canonical: `https://${siteConfig.domain}/sell-as-is`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Sell Your House As-Is in Central Texas | ${siteConfig.name}`,
    description:
      'Sell your Central Texas house exactly as it is. We buy homes in any condition — no repairs, no cleaning, no agent commissions. Request a cash offer from Josh today.',
    url: `https://${siteConfig.domain}/sell-as-is`,
    type: 'website',
  },
};

const faqs: FAQ[] = [
  {
    question: 'What does "as-is" actually mean?',
    answer:
      "It means we buy your house in its current condition. You don't need to make any repairs, do any cleaning, fix anything cosmetic, or prepare the house in any way. Whatever condition it's in when you call us is the condition we'll buy it in.",
  },
  {
    question: 'Will I get a lower price for selling as-is?',
    answer:
      "Cash buyer offers are generally below retail market value. The trade is speed, certainty, and not having to make any repairs or pay agent commissions. Whether that trade makes sense depends on your situation — and we'll talk through it with you honestly when we send the offer.",
  },
  {
    question: 'Do I need to remove all my belongings before selling?',
    answer:
      "No. You can leave anything you don't want — furniture, appliances, boxes, personal items. We'll handle it after closing. Take what you want, leave the rest.",
  },
  {
    question: 'What if my house has serious problems — foundation, mold, structural issues?',
    answer:
      "We still buy. Serious issues affect the offer amount because we have to budget for the repairs, but they don't disqualify the property. We've bought houses with major foundation work, fire damage, water damage, and structural issues.",
  },
  {
    question: 'Do you buy houses with tenants in place?',
    answer:
      "Yes. You don't need to evict tenants before selling. We buy tenant-occupied houses regularly.",
  },
  {
    question: 'How long does the whole process take?',
    answer:
      'From the first call to cash in hand: typically 7 to 21 days, depending on your timeline. Faster is possible when needed; slower is fine if you need more time. You pick the closing date.',
  },
];

const housesWeBuy = [
  {
    title: 'Houses That Need Major Repairs',
    body: "Roof damage, foundation issues, electrical problems, plumbing problems, HVAC failure, water damage, or anything else. We factor repair costs into our offer — you don't pay for them.",
  },
  {
    title: 'Vacant Houses',
    body: "Empty for months or years. Boarded up. Untouched since the last tenant left. We buy houses that other buyers won't even look at.",
  },
  {
    title: 'Houses Full of Belongings',
    body: "You don't need to clean it out. Leave whatever you don't want — furniture, boxes, personal items, anything. We'll handle it after closing.",
  },
  {
    title: "Older Homes That Won't Pass FHA or VA Inspection",
    body: "70s and 80s housing stock with original everything. Knob-and-tube wiring. Polybutylene plumbing. We don't need traditional financing inspections, so condition issues that kill retail sales don't kill our deals.",
  },
  {
    title: "Inherited Houses You Don't Know What to Do With",
    body: "Whether it's been empty since the funeral or has tenants you've never met, we can help.",
    link: { href: '/situations/inherited-property', label: 'Learn more about inherited property sales' },
  },
  {
    title: 'Tenant-Occupied Rental Properties',
    body: "Bad tenants, behind on rent, lease ending, or just tired of being a landlord. We buy with tenants in place — you don't need to evict before selling.",
  },
];

const trustCards = [
  {
    title: 'Local Since 2009',
    body: 'Josh has been buying houses in Central Texas for 17 years. We know this market.',
  },
  {
    title: 'Texas Licensed Broker',
    license: true,
    body: 'Verifiable at the Texas Real Estate Commission.',
  },
  {
    title: 'Lock-the-Offer Promise',
    body: 'The cash offer we agree to in writing is the offer at closing. No re-trading, no surprise deductions.',
  },
  {
    title: 'No Agency Relationship',
    body: 'Josh is buying as a principal, not as your agent. No commissions. No listing process. Just a cash buyer.',
  },
];

const comparison: { asIs: string; listing: string }[] = [
  { asIs: 'No repairs', listing: 'Repair costs typically $5,000 – $25,000+ before listing' },
  { asIs: 'No cleaning', listing: 'Deep cleaning required' },
  { asIs: 'No staging or showings', listing: 'Multiple showings while you live there' },
  { asIs: 'No agent commissions when selling directly to us', listing: '6% agent commission typical' },
  { asIs: 'Cash offer within 24-48 hours', listing: 'Wait 30-90 days for a buyer' },
  { asIs: 'Fast closings may be possible', listing: 'Wait another 30-45 days for closing' },
  { asIs: 'You pick the closing date', listing: "Closing date depends on the buyer's lender" },
  { asIs: 'Buy it with belongings still in it', listing: 'Must be empty and "show-ready"' },
];

export default function SellAsIsPage() {
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
                Sell Your House <span className="text-white underline decoration-orange decoration-4 underline-offset-4">As-Is</span> to Josh
              </h1>

              <p className="text-xl text-gray-300 mb-6">
                No repairs. No cleaning. No agent commissions. We buy Central Texas houses in any condition.
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
                  Get My Cash Offer
                </a>
              </div>

              {/* Trust bar */}
              <p className="text-sm text-gray-300">
                Buying Central Texas homes since 2009 <span aria-hidden="true">•</span> Texas Licensed Broker (TREC #
                <span className="whitespace-nowrap">597248-B</span>
                ) <span aria-hidden="true">•</span> Hundreds of homes purchased
              </p>
            </div>

            {/* Lead Form */}
            <div id="lead-form" className="bg-navy/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Cash Offer</h2>
              <p className="text-gray-300 mb-6">No obligation. We buy houses in any condition.</p>
              <LeadForm variant="compact" darkMode />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — We Buy in Any Condition */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
              We Buy Houses in Any Condition
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                When we say &ldquo;as-is,&rdquo; we mean it. You don&apos;t need to fix anything. You don&apos;t need to clean. You don&apos;t need to haul anything off. We&apos;ve bought houses in every condition you can imagine across Bell, McLennan, Coryell, and Lampasas counties, and the answer to &ldquo;will you still buy it like this?&rdquo; is almost always yes.
              </p>
              <p className="mb-4">
                The whole reason we exist is to take properties the way they are and handle the rest. If your house needs a roof, has foundation problems, has been sitting empty for years, smells like cigarette smoke, or is full of belongings you don&apos;t want to deal with — we&apos;ll still make you a cash offer.
              </p>
              <p>You don&apos;t need to apologize for the house. We&apos;ve seen it before.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Houses We Buy (6-card grid) */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Houses We Buy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {housesWeBuy.map((card) => (
              <article key={card.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-navy mb-3 text-lg">{card.title}</h3>
                <p className="text-gray-600">{card.body}</p>
                {card.link && (
                  <Link
                    href={card.link.href}
                    className="inline-block mt-3 text-orange font-semibold hover:text-orange-hover underline"
                  >
                    {card.link.label} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                1
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Tell Us About Your Property</h3>
              <p className="text-gray-600">
                Fill out the form or call{' '}
                <a href={phoneTel} className="text-navy font-semibold underline hover:text-navy-dark">
                  {phone}
                </a>
                . Share the basics — address, condition, what&apos;s going on. Takes about 5 minutes.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                2
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Get Your Cash Offer</h3>
              <p className="text-gray-600">
                We&apos;ll evaluate your property, sometimes with a quick walk-through, and present a fair cash offer within 24-48 hours. We&apos;ll explain how we got to the number.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                3
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Close on Your Schedule</h3>
              <p className="text-gray-600">
                If you accept, you pick the closing date. We can close quickly when needed, or wait for your timeline. You sign at closing and walk away with cash — no repairs, no cleanup, nothing left for you to handle.
              </p>
            </article>
          </div>
          <div className="text-center mt-12">
            <Link href="/how-our-offer-works" className="btn-secondary">
              Learn More About Our Process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Comparison */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Sell As-Is Instead of Listing?
            </h2>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-navy text-white">
                  <th scope="col" className="text-left p-4 md:p-5 font-bold w-1/2">
                    Selling As-Is to Josh
                  </th>
                  <th scope="col" className="text-left p-4 md:p-5 font-bold w-1/2">
                    Listing on the Open Market
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 md:p-5 align-top text-gray-700 border-r border-gray-200">
                      <span className="inline-flex items-start gap-2">
                        <svg className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{row.asIs}</span>
                      </span>
                    </td>
                    <td className="p-4 md:p-5 align-top text-gray-700">{row.listing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            This isn&apos;t a knock on traditional real estate — it&apos;s still the right move for plenty of sellers, especially when the house is in good shape and you have time. But if your house needs work, or you don&apos;t have months to wait, an as-is cash sale is often the better path.
          </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Section 9 — Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your House As-Is?</h2>
          <p className="text-xl mb-8 text-navy">
            Get a free, no-obligation cash offer. We buy houses in any condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-form"
              className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Get My Cash Offer
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
