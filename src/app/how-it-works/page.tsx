import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'How It Works | Sell Your House Fast in 3 Simple Steps',
  description: 'Learn our simple 3-step process to sell your Central Texas home for cash. No repairs, no fees, no waiting. Get a fair cash offer within 24-48 hours.',
  openGraph: {
    title: 'How It Works | Sell Your House Fast in 3 Simple Steps',
    description: 'Learn our simple 3-step process to sell your Central Texas home for cash.',
  },
};

const steps = [
  {
    number: 1,
    title: "Contact Us With Your Property Info",
    description: "Fill out our simple form or give us a call. Tell us about your property — its location, condition, and your situation. Don't worry about the details; we just need the basics to get started.",
    details: [
      "Takes less than 2 minutes",
      "No commitment required",
      "We respond within 24 hours",
      "Tell us as much or as little as you want"
    ]
  },
  {
    number: 2,
    title: "Receive Your Fair Cash Offer",
    description: "We'll review your property information, often with a quick visit or virtual walkthrough. Within 24-48 hours, you'll receive a fair, no-obligation cash offer based on your home's condition and local market values.",
    details: [
      "We buy houses in any condition",
      "Offer based on fair market analysis",
      "No lowball tactics or pressure",
      "Take your time to consider — no rush"
    ]
  },
  {
    number: 3,
    title: "Choose Your Closing Date & Get Paid",
    description: "If you accept our offer, you pick the closing date that works for you. We handle all the paperwork through a reputable local title company. At closing, you sign the documents and receive your cash.",
    details: [
      "Close in as little as 7 days",
      "Or take up to 60+ days if you need time",
      "We cover typical closing costs",
      "Get paid via wire transfer or check"
    ]
  }
];

const expectations = [
  {
    title: "We're Straightforward",
    description: "No bait-and-switch. The offer we make is the offer we stand behind."
  },
  {
    title: "No Pressure",
    description: "Take your time to decide. We'll never pressure you to accept."
  },
  {
    title: "We Explain Everything",
    description: "Have questions? We'll walk you through every step clearly."
  },
  {
    title: "We're Local",
    description: "I live in Central Texas. You're working with a neighbor, not a distant corporation."
  }
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Selling to Josh Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps. No repairs, no fees, no stress. Just a fair cash offer and a closing date that works for you.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-light rounded-2xl p-8 md:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold text-orange/20 mb-4">
                      0{step.number}
                    </div>
                    <p className="text-navy font-semibold text-lg">
                      {step.number === 1 && "Get started today — it only takes a moment"}
                      {step.number === 2 && "Fair offers based on real market data"}
                      {step.number === 3 && "You choose when to close and get paid"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Honest, transparent communication every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Selling to Josh vs. Traditional Listing
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 font-semibold text-gray-600">Factor</th>
                  <th className="py-4 px-4 font-bold text-navy bg-orange/10">Sell to Josh</th>
                  <th className="py-4 px-4 font-semibold text-gray-600">List with Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-4 text-gray-700">Timeline</td>
                  <td className="py-4 px-4 bg-orange/10 font-medium">7-14 days</td>
                  <td className="py-4 px-4 text-gray-600">3-6+ months</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Repairs Needed</td>
                  <td className="py-4 px-4 bg-orange/10 font-medium">None</td>
                  <td className="py-4 px-4 text-gray-600">Often required</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Showings</td>
                  <td className="py-4 px-4 bg-orange/10 font-medium">None</td>
                  <td className="py-4 px-4 text-gray-600">Multiple</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Commissions</td>
                  <td className="py-4 px-4 bg-orange/10 font-medium">$0</td>
                  <td className="py-4 px-4 text-gray-600">5-6% of sale</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Closing Costs</td>
                  <td className="py-4 px-4 bg-orange/10 font-medium">We cover them</td>
                  <td className="py-4 px-4 text-gray-600">You pay</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Certainty</td>
                  <td className="py-4 px-4 bg-orange/10 font-medium">Guaranteed cash</td>
                  <td className="py-4 px-4 text-gray-600">Deals can fall through</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            Take the first step. Get your free, no-obligation cash offer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
              Get My Cash Offer
            </Link>
            <a
              href={siteConfig.phoneTel}
              className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
