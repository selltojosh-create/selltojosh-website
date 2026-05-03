import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'How Selling to Josh Works | Simple, Honest Cash Offers',
  description:
    "A simple, straightforward way to sell your Central Texas house for cash. No repairs, no agent commissions when selling directly to us, no surprises at closing. Here's exactly what to expect.",
  alternates: {
    canonical: `https://${siteConfig.domain}/how-our-offer-works`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `How Selling to Josh Works | Simple, Honest Cash Offers — ${siteConfig.name}`,
    description:
      "A simple, straightforward way to sell your Central Texas house for cash. No repairs, no agent commissions when selling directly to us, no surprises at closing. Here's exactly what to expect.",
    url: `https://${siteConfig.domain}/how-our-offer-works`,
    type: 'website',
  },
};

const whatMakesUsDifferent = [
  {
    leadIn: 'The offer in writing is the offer at closing.',
    body:
      'No re-trading. No "we found something" surprises a week before you sign. If we missed something during our evaluation, that\'s our problem to handle, not a reason to drop your offer.',
  },
  {
    leadIn: 'No pressure, no artificial deadlines.',
    body:
      "When we make you an offer, you can take it, leave it, or come back next month. We're not going anywhere.",
  },
  {
    leadIn: "You're talking to the actual buyer.",
    body:
      "Josh isn't a salesperson representing someone else. He's the person making the offer and signing the closing paperwork. When you ask him a question, you get a straight answer in real time.",
  },
  {
    leadIn: 'Local, with a name and a license.',
    body: 'license-line', // sentinel — rendered with TREC nowrap span
  },
  {
    leadIn: 'Honest about whether cash is the right move.',
    body:
      "A cash sale is the right answer for some sellers and the wrong answer for others. We'll tell you which one we think you are. If your house is in good shape and you have time to wait, listing on the open market often gets you more money. We'll say so.",
  },
];

const dontHaveToDo: { leadIn: string; body: string }[] = [
  { leadIn: 'No repairs.', body: 'Whatever shape the house is in, we buy it that way.' },
  { leadIn: 'No cleaning.', body: "Leave whatever you want behind. Take what's yours." },
  {
    leadIn: 'No agent commissions.',
    body: 'When you sell directly to us, there are no commissions, no listing fees, and no agent involved.',
  },
  { leadIn: 'No showings or open houses.', body: "We're the buyer. We come once." },
  { leadIn: 'No staging.', body: 'No "make the house look nice for buyers." Doesn\'t matter.' },
  {
    leadIn: "No waiting for a buyer's loan.",
    body: "Cash means cash. The deal doesn't fall through because someone's bank changed their mind.",
  },
];

const whenCashIsRight: string[] = [
  "The house needs repairs you can't or don't want to make",
  "You need to sell on a timeline a traditional sale can't hit",
  'The house is vacant, inherited, or otherwise difficult to list',
  "You're tired of being a landlord and want out",
  'You want to skip showings, agent meetings, and the whole listing process',
  "You'd rather take a fair, fast offer than wait months for the highest possible price",
];

const whoJoshMeans: string[] = [
  "You're talking to the actual buyer, not someone pitching on someone else's behalf",
  'Josh has authority to make decisions and answer questions in real time',
  "Josh is on the buyer's side of the transaction, and you're on the seller's. That's worth knowing.",
];

export default function HowOurOfferWorksPage() {
  const phone = siteConfig.phone;
  const phoneTel = siteConfig.phoneTel;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How Selling to Josh <span className="text-white underline decoration-orange decoration-4 underline-offset-4">Works</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A simple process. A fair offer. No surprises along the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/cash-offer"
                className="bg-orange hover:bg-orange-hover text-navy font-bold py-3 px-6 rounded-lg transition-colors text-lg flex items-center justify-center"
              >
                Request a Cash Offer
              </Link>
              <a
                href={phoneTel}
                className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {phone}
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Buying Central Texas homes since 2009 <span aria-hidden="true">•</span> Texas Licensed Broker (TREC #
              <span className="whitespace-nowrap">597248-B</span>
              ) <span aria-hidden="true">•</span> Hundreds of homes purchased
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — What Makes This Different */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
              What Makes This Different
            </h2>
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                A lot of cash buyers operate the same way. You call. They send a low offer. The offer drops at closing. You feel cornered.
              </p>
              <p>
                That&apos;s not how we work. There are a few specific things we do differently — and they&apos;re worth knowing before you call anyone.
              </p>
            </div>
            <div className="text-gray-600 space-y-5">
              {whatMakesUsDifferent.map((item) => (
                <p key={item.leadIn}>
                  <strong className="text-navy">{item.leadIn}</strong>{' '}
                  {item.body === 'license-line' ? (
                    <>
                      Josh has been buying houses in Central Texas since 2009. He holds a Texas real estate broker license (TREC #
                      <span className="whitespace-nowrap">597248-B</span>
                      ) — verifiable through the state. He lives here. Sellers can find him.
                    </>
                  ) : (
                    item.body
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Four Steps */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Four Steps</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <article className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                1
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Tell Us About Your House</h3>
              <p className="text-gray-600">
                Fill out the form on{' '}
                <Link href="/cash-offer" className="text-navy font-semibold underline hover:text-navy-dark">
                  /cash-offer
                </Link>{' '}
                or call{' '}
                <a href={phoneTel} className="text-navy font-semibold underline hover:text-navy-dark">
                  {phone}
                </a>
                . We need the basics — address, condition, situation. Takes about five minutes. There&apos;s no pressure and no obligation just for asking.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                2
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">We Look at the Property</h3>
              <p className="text-gray-600">
                Sometimes that&apos;s a quick walk-through. Sometimes it&apos;s a phone call and a remote review. Depends on the property and the situation. Either way, we don&apos;t drag this out — we know your time matters.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                3
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">You Get a Cash Offer in Writing</h3>
              <p className="text-gray-600">
                Within 24-48 hours, we send you an offer. Not a verbal pitch — an actual written number, with the terms spelled out clearly. You can take it home, sit with it, talk to whoever you want about it, and decide on your own time.
              </p>
            </article>
            <article className="text-center">
              <div className="w-16 h-16 bg-orange text-navy rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                4
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">You Pick the Closing Date</h3>
              <p className="text-gray-600">
                If you accept, you choose when you want to close. Fast closings may be possible if you&apos;re in a hurry. We can wait if you need more time. You sign at closing and walk away with cash. We handle the paperwork.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3 — What You Don't Have to Do */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
              What You Don&apos;t Have to Do
            </h2>
            <p className="text-gray-600 mb-6">
              The whole point of selling for cash is that the hard parts go away. Here&apos;s what&apos;s not on your to-do list:
            </p>
            <ul className="space-y-3">
              {dontHaveToDo.map((item) => (
                <li key={item.leadIn} className="flex items-start gap-3 bg-gray-light p-4 rounded-xl">
                  <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">
                    <strong className="text-navy">{item.leadIn}</strong> {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 — When Cash Is the Right Move */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
              When a Cash Offer Is the Right Move
            </h2>
            <p className="text-gray-600 mb-6">
              A cash sale is usually the better path when one of these is true:
            </p>
            <ul className="space-y-3 mb-8">
              {whenCashIsRight.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              If none of those describe your situation — your house is in good shape, you have time, and you want to maximize price — listing on the open market is probably the better path. We&apos;ll tell you that on the call.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — A Promise Worth Reading Twice (callout) */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto bg-orange/5 border-l-4 border-orange p-6 md:p-10 rounded-r-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              A Promise Worth Reading Twice
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                The biggest complaint in the cash-buyer industry is offers being lowered at closing. Investor offers $X, seller commits, and a week before signing the offer drops by $20,000. The seller is too far down the path to back out, so they take the lower number.
              </p>
              <p className="font-semibold text-navy">We don&apos;t do that.</p>
              <p>
                The cash offer we agree to in writing is the offer you receive at closing. If we missed something during our evaluation, that&apos;s our cost. The only thing that changes the offer between contract and closing is something neither of us could have known — an undisclosed lien, undisclosed major damage, fraud — and even then, we walk through it with you transparently rather than ambush you.
              </p>
              <p>That commitment is in every contract we sign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Who Josh Is */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
              Who Josh Is
            </h2>
            <div className="text-gray-600 space-y-4 mb-6">
              <p>
                Josh Isbell has been buying houses in Central Texas for 17 years. He holds a Texas real estate broker license (TREC #
                <span className="whitespace-nowrap">597248-B</span>
                ) and operates a portfolio of properties across Bell, McLennan, Coryell, and Lampasas counties.
              </p>
              <p>
                When you sell to &ldquo;Josh,&rdquo; you&apos;re selling to TrippCo Holdings LLC, Red Belly Holdings LLC, or another entity owned by Joshua Isbell. Josh holds an ownership interest in each of these entities. He is buying as a principal — not as your real estate agent. No agency relationship is created.{' '}
                <Link href="/buyer-disclosure" className="text-navy underline hover:text-navy-dark font-semibold">
                  See our buyer disclosure for the full details <span aria-hidden="true">→</span>
                </Link>
              </p>
              <p>What that means for you:</p>
            </div>
            <ul className="space-y-3 mb-6">
              {whoJoshMeans.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              You have the right — and we encourage you — to consult your own real estate agent or attorney before signing anything.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-navy max-w-2xl mx-auto">
            Request a cash offer. We&apos;ll be honest with you about what your house is worth to us and whether selling for cash is the right move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cash-offer"
              className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Request a Cash Offer
            </Link>
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
